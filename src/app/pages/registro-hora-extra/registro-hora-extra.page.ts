import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { HoraExtraInicio } from 'src/app/Models/hora-extra-inicio';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { HoraExtraService } from 'src/app/servicos/hora-extra.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-hora-extra',
  templateUrl: './registro-hora-extra.page.html',
  styleUrls: ['./registro-hora-extra.page.scss'],
})
export class RegistroHoraExtraPage implements OnInit {


  private horaExtraInicio: HoraExtraInicio = {};
  private carregando: any;
  

  constructor(
    private authService: AutenticacaoService,
    private horaSevice: HoraExtraService,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    setInterval(() => {
      this.horaExtraInicio.hora = moment().locale('pt-br').format('LTS');
      this.horaExtraInicio.data = moment().locale('pt-br').format('LL');
    }, 1000)
  }


  async registrarInicioHoraExtra() {

    await this.presentLoading();
    let horas = moment().hour();
    let minutos = moment().minute() / 60;
    this.horaExtraInicio.horaCalculo = horas + minutos;
    this.horaExtraInicio.hora;
    this.horaExtraInicio.userId = this.authService.getAuth().currentUser.uid;

    try{
      await this.horaSevice.registrarHoraInicial(this.horaExtraInicio);
      await this.carregando.dismiss();
      await this.navCtrl.navigateRoot('registro-final-hora-extra');
     
    }catch(error){
      console.error(error);
      this.presentToast(error);
      this.carregando.dismiss();
    }
  }

  async logout() {
    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
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
