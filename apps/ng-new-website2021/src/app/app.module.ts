import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderModule } from '@website2021/header';
import { MainModule } from '@website2021/main';
import { FooterModule } from '@website2021/footer';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    MainModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
