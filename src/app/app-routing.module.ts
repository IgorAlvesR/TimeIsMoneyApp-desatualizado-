import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'entrar', pathMatch: 'full' },
  { path: 'entrar', loadChildren: './pages/entrar/entrar.module#EntrarPageModule' },
  { path: 'entrar', loadChildren: './pages/entrar/entrar.module#EntrarPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
