import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAcceuilComponent } from './page-acceuil/page-acceuil.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';



const routes: Routes = [
  { path: '', redirectTo: 'page-acceuil', pathMatch: 'full' },
  { path: 'page-acceuil', component: PageAcceuilComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthentificationRoutingModule { }