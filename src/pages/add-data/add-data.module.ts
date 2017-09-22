import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDataPage } from './add-data';

@NgModule({
  declarations: [
    AddDataPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDataPage),
  ],
})
export class AddDataPageModule {}
