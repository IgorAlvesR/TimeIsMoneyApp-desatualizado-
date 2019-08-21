import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HoraExtra } from '../Models/hora-extra';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraExtraService {

  private colecaoHoraExtra: AngularFirestoreCollection<HoraExtra>;
  
  
  

  constructor(private afs: AngularFirestore) {
    //cria uma referencia da coleção HoraExtraInicio e HoraExtraFinal
    this.colecaoHoraExtra = this.afs.collection<HoraExtra>('HoraExtra');
  }

  registrarHoraExtra(horaExtra: HoraExtra) {
    return this.colecaoHoraExtra.add(horaExtra);
  }

 
  
}
