import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CalculatorComponent } from './calculator/calculator.component';

const appRoute: Routes = [
	{ path: 'calculator', component: CalculatorComponent },
	{ path: 'to-do-list', component: ToDoListComponent },
	{ path: '', redirectTo: '/calculator', pathMatch: 'full' }   
]

@NgModule({
	imports: [
		RouterModule.forRoot(appRoute)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {}
