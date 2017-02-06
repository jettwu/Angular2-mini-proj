import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductComponent } from './products/product-list.component';
import { ProductPipe } from './products/product-filter';
import { StarComponent } from './shared/star.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductDetailComponent } from './products/product-detail.component';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'products',component:ProductComponent},
      {path:'welcome',component:WelcomeComponent},
      {path:'products/:id',component:ProductDetailComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'}, //default path
      {path:'**',redirectTo:'welcome',pathMatch:'full'} //error path
    ])
  ],
  declarations: [ 
  	AppComponent,
  	ProductComponent,
  	ProductPipe,
    StarComponent,
    WelcomeComponent,
    ProductDetailComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


