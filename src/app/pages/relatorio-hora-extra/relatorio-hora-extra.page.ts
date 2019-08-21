import { Component, OnInit } from '@angular/core';
import { HoraExtraService } from 'src/app/servicos/hora-extra.service';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { HoraExtra } from 'src/app/Models/hora-extra';

@Component({
  selector: 'app-relatorio-hora-extra',
  templateUrl: './relatorio-hora-extra.page.html',
  styleUrls: ['./relatorio-hora-extra.page.scss'],
})
export class RelatorioHoraExtraPage implements OnInit {

  horasRef: AngularFirestoreCollection<HoraExtra>;
  horas: Observable<HoraExtra[]>;
  
  constructor(private horasService: HoraExtraService, private afs:AngularFirestore) {
    this.horasRef = this.afs.collection('HoraExtra');
    this.horas = this.horasRef.valueChanges();
  }

  ngOnInit() {

  }






}

