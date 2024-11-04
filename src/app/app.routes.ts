import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { PokeDetailsComponent } from './components/pokemon-details/pokemon-details.component';

export const routes: Routes =[
  { path: '', component: TableComponent },
  { path: 'pokemon/:name', component: PokeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }