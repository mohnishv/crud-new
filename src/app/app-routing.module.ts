import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiodataComponent } from './biodata/biodata.component';
import { BiodataviewComponent } from './biodataview/biodataview.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'biodata' },
  { path: 'biodata', component:BiodataComponent },
  { path: 'biodataview', component:BiodataviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
