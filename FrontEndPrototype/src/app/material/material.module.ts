import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatToolbarModule
 } from '@angular/material';

const FrontEndMat = [
  MatButtonModule,
  MatToolbarModule
];

@NgModule({
  imports: [FrontEndMat],
  exports: [FrontEndMat]
})
export class MaterialModule { }
