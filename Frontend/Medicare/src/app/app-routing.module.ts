import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductlistComponent } from './Product/productlist/productlist.component';
import { AddProductComponent } from './Product/add-product/add-product.component';
import { UserlistComponent } from './User/userlist/userlist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdateProductComponent } from './Product/update-product/update-product.component';
import { UpdateUserComponent } from './User/update-user/update-user.component';

const routes: Routes = [
  { path:"Home",component:HomeComponent},
  { path:"login",component:LoginComponent },
  { path:"allProducts",component:ProductlistComponent},
  { path:"addProduct",component:AddProductComponent},
  { path:"alluser",component:UserlistComponent},
  { path:"dashboard",component:DashboardComponent},
  { path:"register",component:RegisterComponent},
  { path:"adminLogin",component:AdminloginComponent},
  { path:"cart",component:CartComponent},
  { path:"payment",component:PaymentComponent},
  { path:"ordersummary",component:OrdersummaryComponent},
  { path:"profile",component:ProfileComponent},
  { path:"updateProduct/:id",component:UpdateProductComponent},
  { path:"updateUser/:email",component:UpdateUserComponent},
  {path:"**",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
