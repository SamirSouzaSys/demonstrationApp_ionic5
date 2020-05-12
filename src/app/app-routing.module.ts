import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',               redirectTo: 'inicio',    pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module')
    .then(  m => m.InicioPageModule) },
  { path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module')
    .then( m => m.AlertPageModule) },
  { path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module')
    .then( m => m.ActionSheetPageModule) },
  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module')
    .then( m => m.CardsPageModule)
  },
  {
    path: 'datas',
    loadChildren: () => import('./pages/datas/datas.module')
    .then( m => m.DatasPageModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./pages/grid/grid.module')
    .then( m => m.GridPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module')
    .then( m => m.InputPageModule)
  },
  {
    path: 'slides',
    loadChildren: () => import('./pages/slides/slides.module')
    .then( m => m.SlidesPageModule)
  },
  {
    path: 'toast',
    loadChildren: () => import('./pages/toast/toast.module')
    .then( m => m.ToastPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
