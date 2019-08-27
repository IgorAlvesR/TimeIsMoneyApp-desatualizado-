import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { AutenticacaoService } from './autenticacao.service';
import { HoraExtra } from '../Models/hora-extra';
import { map, flatMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HoraExtraService {

  private colecaoHoraExtra: AngularFirestoreCollection<HoraExtra>;
  private colecaoHoraExtraRegistro: AngularFirestoreCollection<HoraExtra>;
  private colecao: AngularFirestoreCollection<HoraExtra>;
  public horasExtras: Observable<HoraExtra[]>;
  private horas: DocumentReference;
  
 
  
  

  constructor(private afs: AngularFirestore, private authService: AutenticacaoService) {
    //cria uma referencia da coleção HoraExtraInicio e HoraExtraFinal
    let userIdAtual = authService.getAuth().currentUser.uid;
    this.colecaoHoraExtraRegistro = this.afs.collection<HoraExtra>('HoraExtra');
    this.colecaoHoraExtra = this.afs.collection ('HoraExtra', ref => ref.where ( 'userId' , '==' , userIdAtual ))    
  }

  registrarHoraExtra(horaExtra: HoraExtra) {
    return this.colecaoHoraExtraRegistro.add(horaExtra);
  }

  getHorasExtras(){
    return this.horasExtras = this.colecaoHoraExtra.valueChanges();
  } 


  updateHoraExtra(ids: string, horaExtra: HoraExtra) {

    let horaInicial: HoraExtra
    let horasOb: Observable<any[]>;
   
    const snapshotResult =  this.afs.collection('HoraExtra', ref => ref.where('id', '==', ids )
           .limit(1))
           .snapshotChanges()
           .pipe(flatMap(horasOb => horasOb)); 

        snapshotResult.subscribe(doc => {
            horaInicial = horaExtra
            this.horas = doc.payload.doc.ref;
            return  this.horas.update(horaExtra);
        });
  }
}