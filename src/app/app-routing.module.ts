import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/main/main.module').then(x => x.MainModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./pages/second-view/second-view.module').then(x => x.SecondViewModule)
  },
  {
    path: 'third',
    loadChildren: () => import('./pages/third-view/third-view.module').then(x => x.ThirdViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
