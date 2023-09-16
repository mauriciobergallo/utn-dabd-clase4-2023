import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductsComponent } from './add-products.component';
import { LoggerService } from './services/logger.service';
import { PlainLoggerService } from './services/plain-logger.service';

@NgModule({
  declarations: [
    AppComponent,
    AddProductsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [
  //   {
  //   provide: LoggerService, useClass: PlainLoggerService,
  //   // provide: LoggerService, useValue: {
  //   //   log(message:string) {},
  //   //   error(message:string) {}
  //   // },
  //   // provide: DBService, useClass: MsSQLDBService,
  //   // provide: DBService, useClass: FakeBService,
  // }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
