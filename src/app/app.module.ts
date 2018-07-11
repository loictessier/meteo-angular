import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VillesComponent } from './pages/villes/villes.component';
import { RelevesComponent } from './pages/releves/releves.component';
import { ReleveFormComponent } from './pages/releve-form/releve-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VillesComponent,
    RelevesComponent,
    ReleveFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
