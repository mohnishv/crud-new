import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BiodataComponent } from './biodata/biodata.component';
import { NumberDirective } from '../app/_helper/numbers-only.directive';
import { HttpClientModule } from '@angular/common/http';
import { BiodataviewComponent } from './biodataview/biodataview.component';


@NgModule({
  declarations: [
    AppComponent,
    BiodataComponent,
    NumberDirective,
    BiodataviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule , 
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
