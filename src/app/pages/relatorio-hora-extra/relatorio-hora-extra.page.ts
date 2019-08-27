import { Component, OnInit } from '@angular/core';
import { HoraExtraService } from 'src/app/servicos/hora-extra.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscribable, Subscription } from 'rxjs';
import { HoraExtra } from 'src/app/Models/hora-extra';
import { forEach } from '@angular/router/src/utils/collection';
import { AutenticacaoService } from 'src/app/servicos/autenticacao.service';

@Component({
  selector: 'app-relatorio-hora-extra',
  templateUrl: './relatorio-hora-extra.page.html',
  styleUrls: ['./relatorio-hora-extra.page.scss'],
})
export class RelatorioHoraExtraPage implements OnInit {

 public horasExtras = new Array<HoraExtra>();
 private horasExtrasSubscription: Subscription;
  
  constructor(private authService: AutenticacaoService, private horaService: HoraExtraService) {
    this.getHoras();
  }

  ngOnInit() {
   
  }

  ngOnDestroy(){
    this.horasExtrasSubscription.unsubscribe();
  }

  public getHoras(){
    this.horasExtrasSubscription = this.horaService.getHorasExtras().subscribe(dados => {
      this.horasExtras = dados;
    }); 
  }


}

