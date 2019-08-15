import { Injectable } from '@angular/core';
import { HoraExtraInicio } from '../Models/hora-extra-inicio';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class HoraExtraService {

  private colecaoHoraExtraInicio: AngularFirestoreCollection<HoraExtraInicio>;

  constructor(private afs: AngularFirestore) {
    //cria uma referencia da coleção HoraExtraInicio
    this.colecaoHoraExtraInicio  = this.afs.collection<HoraExtraInicio>('HoraExtraInicio');
  }

  registrarHoraInicial(horaExtraInicio: HoraExtraInicio){
    return this.colecaoHoraExtraInicio.add(horaExtraInicio);  
  }

  getHorasIniciais(){
    return this.colecaoHoraExtraInicio.doc<HoraExtraInicio>().valueChanges();
  }
}
