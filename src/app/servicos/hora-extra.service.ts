import { Injectable } from '@angular/core';
import { HoraExtraInicio } from '../Models/hora-extra-inicio';
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
    this.colecaoHoraExtra = this.afs.collection<HoraExtraInicio>('HoraExtra');
  }

  registrarHoraExtra(horaExtraInicio: HoraExtraInicio) {
    return this.colecaoHoraExtra.add(horaExtraInicio);
  }

 
  
}
