import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListadosPage } from './listados';

@NgModule({
  declarations: [
    ListadosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListadosPage),
  ],
})
export class ListadosPageModule {}
