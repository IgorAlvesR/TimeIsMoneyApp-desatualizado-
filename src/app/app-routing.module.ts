import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'entrar', pathMatch: 'full' },
  { path: 'entrar', loadChildren: './pages/entrar/entrar.module#EntrarPageModule' },
  { path: 'entrar', loadChildren: './pages/entrar/entrar.module#EntrarPageModule' },
  { path: 'cadastro-usuario', loadChildren: './pages/cadastro-usuario/cadastro-usuario.module#CadastroUsuarioPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
