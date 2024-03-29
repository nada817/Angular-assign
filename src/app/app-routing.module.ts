import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'',component:HomeComponent ,title:'Home'},
  {path:'home' ,component:HomeComponent ,title:'Home'},
  {path:'about',component:AboutComponent ,title:'About'},
  {path:'portfolio' , component: PortfolioComponent ,title:'Portfolio'},
  {path:'contact' ,component:ContactComponent ,title:'Contact'}
  // {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
