import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyMaterialFormComponent } from './my-material-form/my-material-form.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [AppComponent, HelloComponent, MyMaterialFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
