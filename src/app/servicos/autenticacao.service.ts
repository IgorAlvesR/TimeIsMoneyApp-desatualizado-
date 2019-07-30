import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Funcionario } from '../Models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(private afa: AngularFireAuth) { }

  login() {

  }

  registrarFuncionario(funcionario: Funcionario) {
    return this.afa.auth.createUserWithEmailAndPassword(funcionario.email, funcionario.senha);
  }

  logout() {

  }

  getAuth() {

  }
}
