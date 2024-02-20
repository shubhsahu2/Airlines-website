import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';

const routes: Routes = [
  {path:'airlines',component:AirlinesListComponent},
  {path:'book-ticket/:airlinesId',component:BookTicketComponent},
  {path:'**',redirectTo:'/airlines',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
