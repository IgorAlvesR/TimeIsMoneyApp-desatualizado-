import { Component, OnInit } from '@angular/core';
import { HoraExtraService } from 'src/app/servicos/hora-extra.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { HoraExtraInicio } from 'src/app/Models/hora-extra-inicio';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-relatorio-hora-extra',
  templateUrl: './relatorio-hora-extra.page.html',
  styleUrls: ['./relatorio-hora-extra.page.scss'],
})
export class RelatorioHoraExtraPage implements OnInit {

  horasRef: AngularFirestoreCollection<HoraExtraInicio>;
  horas: Observable<HoraExtraInicio[]>;
  
  constructor(private horasService: HoraExtraService, private afs:AngularFirestore) {
    this.horasRef = this.afs.collection('HoraExtraInicio');
    this.horas = this.horasRef.valueChanges();
  }

  ngOnInit() {

  }






}

