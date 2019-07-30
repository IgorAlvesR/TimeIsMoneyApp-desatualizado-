import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/Models/funcionario';
import { LoadingController, ToastController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';


@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})

export class CadastroUsuarioPage implements OnInit {

  public funcionario: Funcionario = {};
  private carregando: any;

  constructor(
    private rota: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private servicoAutenticacao: AutenticacaoService
  ) { }

  ngOnInit() {
  }


  direcionarPaginaLogin() {
    this.rota.navigate(['entrar']);
  }

  async registrarFuncionario() {
    await this.presentLoading();
    try {
      await this.servicoAutenticacao.registrarFuncionario(this.funcionario);
    } catch (error) {
      let mensagem: string;
      switch (error.code) {
        case 'auth/argument-error':
          mensagem = 'Preencha todos os campos!';
          break;
        case 'auth/email-already-in-use':
          mensagem = 'Email em uso!';
          break;
        case 'auth/invalid-email':
          mensagem = 'Email inválido!';
          break;
        case 'auth/weak-password':
          mensagem = 'Senha inválida!';
          break;
      }

      this.presentToast(mensagem);

    } finally {
      this.carregando.dismiss();
    }
  }

  async presentLoading() {
    this.carregando = await this.loadingCtrl.create({ message: 'Por favor, aguarde...' });
    return this.carregando.present();
  }

  async presentToast(mensagem: string) {
    const toast = await this.toastCtrl.create({ message: mensagem, duration: 2000 });
    toast.present();
  }


}
