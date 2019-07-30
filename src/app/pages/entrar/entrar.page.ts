import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/Models/funcionario';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.page.html',
  styleUrls: ['./entrar.page.scss'],
})
export class EntrarPage implements OnInit {

  public funcionario: Funcionario = {};

  constructor(
    private rota: Router
  ) { }

  ngOnInit() {
  }

  direcionarPaginaCadastroUsuario() {
    this.rota.navigate(['cadastro-usuario']);
  }

}
