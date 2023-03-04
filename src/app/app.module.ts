import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import {
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MainComponent } from './content/main/main.component';
import { SharedModule } from './shared/shared.module';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { ContactsComponent } from './content/contacts/contacts.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [AppComponent, MainComponent, PortfolioComponent, ContactsComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    SharedModule,
  ],
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['en-US', 'pt-PT']);
    translate.setDefaultLang('en-US');
    translate.use('pt-PT');
  }
}
