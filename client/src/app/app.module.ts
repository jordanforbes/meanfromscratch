import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { ItemsComponent } from './components/items/items.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, ItemsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
