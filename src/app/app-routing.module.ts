import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
  {
    path: "heroes",
    component: HeroesComponent,
    data: {animation :"HeroesLists"}
  },
  {
    path: "dashboard",
    component: DashBoardComponent,
    data: {animation :"DashBoard"}
  },
  {
    path: "detail/:id",
    component: HeroDetailComponent
  },
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
