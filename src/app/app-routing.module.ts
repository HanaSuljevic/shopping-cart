import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'

import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { PageNotFoundComponent } from "./components/shared/page-not-found/page-not-found.component";
import { EditProductsListComponent } from "./components/edit-products-list/edit-products-list.component";

const routes: Routes = [
    { path: '', redirectTo: '/shop', pathMatch: 'full'},
    { path: 'login', component: LoginComponent }, 
    { path: 'register', component: RegisterComponent }, 
    { path: 'shop', component: ShoppingCartComponent }, 
    { path: 'edit', component: EditProductsListComponent},
    { path: '**', component: PageNotFoundComponent }
]

@NgModule( {
    imports: [
        RouterModule.forRoot(routes)
    ], 
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}