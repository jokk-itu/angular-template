import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieBannerComponent } from './cookie-banner/cookie-banner.component';
import { SvgIconDefinitionComponent } from './svg-icon-definition/svg-icon-definition.component';

@NgModule({
  declarations: [
    AppComponent,
    CookieBannerComponent,
    SvgIconDefinitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
