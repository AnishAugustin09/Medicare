import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './Product/productlist/productlist.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { UserlistComponent } from './User/userlist/userlist.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { ProfileComponent } from './profile/profile.component';
import { FilterPipe } from './Search/filter.pipe';
import { UpdateUserComponent } from './User/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProductlistComponent,
    AddProductComponent,
    UserlistComponent,
    AdminloginComponent,
    DashboardComponent,
    UpdateProductComponent,
    CartComponent,
    PaymentComponent,
    OrdersummaryComponent,
    ProfileComponent,
    FilterPipe,
    UpdateUserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
