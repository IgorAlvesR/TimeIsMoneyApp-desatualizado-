import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { HoraExtraService } from 'src/app/servicos/hora-extra.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { HoraExtra } from 'src/app/Models/hora-extra';



@Component({
  selector: 'app-registro-final-hora-extra',
  templateUrl: './registro-final-hora-extra.page.html',
  styleUrls: ['./registro-final-hora-extra.page.scss'],
})
export class RegistroFinalHoraExtraPage implements OnInit {

  private horaExtraFinal: HoraExtra = {};
  private carregando: any;

  constructor(
    private authService: AutenticacaoService,
    private horaSevice: HoraExtraService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    setInterval(() => {
      this.horaExtraFinal.horaFinal = moment().locale('pt-br').format('LTS');
      this.horaExtraFinal.dataFinal = moment().locale('pt-br').format('LL');
    }, 1000)
  }


  async registrarFinalHoraExtra(){

    await this.presentLoading();
    let horas = moment().hour();
    let minutos = moment().minute() / 60;
    this.horaExtraFinal.horaCalculoFinal = horas + minutos;
    this.horaExtraFinal.horaFinal;
    this.horaExtraFinal.userId = this.authService.getAuth().currentUser.uid;

    try{
      await this.horaSevice.registrarHoraExtra(this.horaExtraFinal);
      await this.carregando.dismiss();
      await this.navCtrl.navigateRoot('registro-hora-extra');
     
    }catch(error){
      console.error(error);
      this.presentToast(error);
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



