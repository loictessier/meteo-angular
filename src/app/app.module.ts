import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { VillesComponent } from './pages/villes/villes.component';
import { RouterModule, Routes } from '@angular/router';
import { RelevesComponent } from './pages/releves/releves.component';
import { ReleveFormComponent } from './pages/releve-form/releve-form.component';
import { ReleveAllComponent } from './pages/releve-all/releve-all.component';

const routes: Routes = [
  { path: '', component: VillesComponent },
  { path: 'pageville', component: RelevesComponent },
  { path: 'releveall', component: ReleveAllComponent },
  { path: 'releveform', component: ReleveFormComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VillesComponent,
    RelevesComponent,
    ReleveFormComponent,
    ReleveAllComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
