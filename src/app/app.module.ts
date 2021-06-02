import { DropDownComponent } from './components/dropdowncomponent/app.dropdown.component';
import { ProductComponent } from './components/productcomponent/app.product.component';
import { GridComponent } from './components/gridcomponent/app.grid.component';
import { TestingComponent } from './components/testingcomponent/app.testing.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { ProductFormComponent } from './components/productformcomponent/app.productform.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/app.http.service';

@NgModule({
  declarations: [
    AppComponent, TestingComponent, GridComponent, ProductComponent, DropDownComponent,
    ProductFormComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [ProductFormComponent]
})
export class AppModule { }
