import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

const material = [
  MatFormFieldModule,
]
@NgModule({
  imports: material,
  exports: material

})
export class MaterialModule { }