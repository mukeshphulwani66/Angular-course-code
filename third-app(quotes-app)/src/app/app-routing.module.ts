import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { CreateQuoteComponent } from './create-quote/create-quote.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:"",component:HomeComponent
    // redirectTo:"/login",
    // pathMatch:"full"
    },
    {path:"create",component:CreateQuoteComponent,canActivate:[AuthGuard]},
    ///users/esdeas
    {path:"**",component:NotfoundComponent},
]; 

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }