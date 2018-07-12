import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VillesComponent } from './pages/villes/villes.component';
import { RouterModule, Routes } from '@angular/router';
import { RelevesComponent } from './pages/releves/releves.component';
import { ReleveFormComponent } from './pages/releve-form/releve-form.component';

const routes: Routes = [
  { path: '', component: VillesComponent },
  { path: 'pageville', component: RelevesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VillesComponent,
    RelevesComponent,
    ReleveFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
