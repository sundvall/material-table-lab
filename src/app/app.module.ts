import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialCollectionModule } from './shared/material-collection.module';
import { MatTableAllComponent } from './shared/mat-table-all/mat-table-all.component';
import { MedProdService } from './services/med-prod.service';
import { HttpClient, HttpParams} from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, MatTableAllComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MaterialCollectionModule
  ],
  providers: [MedProdService, HttpClient, HttpParams ],
  bootstrap: [AppComponent]
})
export class AppModule {}
