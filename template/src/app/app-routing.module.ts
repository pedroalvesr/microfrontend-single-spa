import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { EmptyRouteComponent } from './empty-route/empty-route.component';


const routes: Routes = [
  { path: 'paginas', loadChildren: () => import('./paginas/paginas.module').then(m => m.PaginasModule)},
  { path: '', redirectTo: '/paginas/dashboard', pathMatch: 'full' },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
