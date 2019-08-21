import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';
import { HoraExtraService } from 'src/app/servicos/hora-extra.service';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { HoraExtra } from 'src/app/Models/hora-extra';

@Component({
  selector: 'app-registro-hora-extra',
  templateUrl: './registro-hora-extra.page.html',
  styleUrls: ['./registro-hora-extra.page.scss'],
})
export class RegistroHoraExtraPage implements OnInit {


  private horaExtraInicio: HoraExtra = {};
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
      this.horaExtraInicio.horaInicial = moment().locale('pt-br').format('LTS');
      this.horaExtraInicio.dataInicial = moment().locale('pt-br').format('LL');
    }, 1000)
  }


  async registrarInicioHoraExtra() {

    await this.presentLoading();
    let horas = moment().hour();
    let minutos = moment().minute() / 60;
    this.horaExtraInicio.horaCalculoInicial = horas + minutos;
    this.horaExtraInicio.horaInicial;
    this.horaExtraInicio.userId = this.authService.getAuth().currentUser.uid;

    try{
      await this.horaSevice.registrarHoraExtra(this.horaExtraInicio);
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
