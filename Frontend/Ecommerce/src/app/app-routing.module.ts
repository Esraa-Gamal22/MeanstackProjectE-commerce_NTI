import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductsComponent } from './pages/products/products.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
{  path:"", component : IndexComponent},
//{  path:"product", component : ProductComponent},

{path:"product", children:[
  //http://localhost:4200/product
  {path:"", component : ProductsComponent},
  //http://localhost:4200/product/:id
  
]},

{  path:"login", component : LoginComponent},
{  path:"register", component : RegisterComponent},
// {  path:"product/:id", component : SinglproductComponent},
// {  path:"singleproduct", component : SinglproductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }