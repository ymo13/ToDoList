import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ToDoListComponentComponent } from './to-do-list-component/to-do-list-component.component';
import { CalculatorComponentComponent } from './calculator-component/calculator-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponentComponent,
    CalculatorComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
