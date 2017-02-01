import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { ProductComponent } from './products/product-list.component';

import { ProductPipe } from './products/product-filter';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule 
  ],
  declarations: [ 
  	AppComponent,
  	ProductComponent,
  	ProductPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


