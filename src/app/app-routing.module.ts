import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatTableAllComponent } from './shared/mat-table-all/mat-table-all.component';

const routes: Routes = [{ path: 'products', component: MatTableAllComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
