import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialCollectionModule } from './shared/material-collection.module';
import { MatTableAllComponent } from './shared/mat-table-all/mat-table-all.component';
import { MatInputModule} from '@angular/material';
import { DataProdService } from './services/data-prod.service';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, MatTableAllComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MaterialCollectionModule,
    MatInputModule
  ],
  providers: [DataProdService],
  bootstrap: [AppComponent]
})
export class AppModule {}
