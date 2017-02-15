import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { AppComponent }           from './app.component';
import { PageNotFoundComponent  } from './other/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: 'customers/create-ticket', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
