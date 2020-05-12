import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActionSheetPageRoutingModule } from './action-sheet-routing.module';

import { ActionSheetPage } from './action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ActionSheetPage,
    children: [
      {
        path: 'alert',
        loadChildren: () => import('../alert/alert.module')
        .then(m => m.AlertPageModule)
        // loadChildren: '../alert/alert.module#AlertPageModule'
      },
      {
        path: 'inicio',
        loadChildren: () => import('../inicio/inicio.module')
        .then(m => m.InicioPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule,
    ActionSheetPageRoutingModule,
    ComponentsModule,
    RouterModule.forChild(routes)
    // RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules })
  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPageModule {}
