import { Injectable } from '@angular/core';
import { HoraExtraInicio } from '../Models/hora-extra-inicio';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { HoraExtraFinal } from '../Models/hora-extra-final';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraExtraService {

  private colecaoHoraExtraInicio: AngularFirestoreCollection<HoraExtraInicio>;
  private colecaoHoraExtraFinal: AngularFirestoreCollection<HoraExtraFinal>;
  
  

  constructor(private afs: AngularFirestore) {
    //cria uma referencia da coleção HoraExtraInicio e HoraExtraFinal
    this.colecaoHoraExtraInicio = this.afs.collection<HoraExtraInicio>('HoraExtraInicio');
    this.colecaoHoraExtraFinal = this.afs.collection<HoraExtraFinal>('HoraExtraFinal');
  }

  registrarHoraInicial(horaExtraInicio: HoraExtraInicio) {
    return this.colecaoHoraExtraInicio.add(horaExtraInicio);
  }

  registrarHoraFinal(horaExtraFinal: HoraExtraFinal) {
    return this.colecaoHoraExtraFinal.add(horaExtraFinal);
  }

  
}
