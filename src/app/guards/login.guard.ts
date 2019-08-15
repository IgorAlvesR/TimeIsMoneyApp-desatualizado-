import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AutenticacaoService } from '../servicos/autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {
  constructor(
    private servicoAutenticacao: AutenticacaoService,
    private rota: Router
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.servicoAutenticacao.getAuth().onAuthStateChanged(funcionario => {
        if (funcionario) {
          this.rota.navigate(['registro-hora-extra']);
        }
        resolve(!funcionario ? true : false);
      });
    });
  }

}
