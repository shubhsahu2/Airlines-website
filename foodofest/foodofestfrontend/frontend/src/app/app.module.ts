import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AirlinesListComponent,
    BookTicketComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
