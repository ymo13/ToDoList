import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdMenuModule, MdButtonModule, MdToolbarModule } from '@angular/material';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    CalculatorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MdMenuModule,
    MdButtonModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
