import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../app/views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'addmovie',
    loadChildren: () => import('../app/views/add-movie/add-movie.module').then(m => m.AddMovieModule)
  },
  {
    path: 'topfive',
    loadChildren: () => import('../app/views/top-five/top-five.module').then(m => m.TopFiveModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../app/views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
