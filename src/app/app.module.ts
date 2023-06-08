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
import { ContactsComponent } from './content/contacts/contacts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnterToNewLinePipe } from './pipes/enterToNewLine.pipe';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ContactsComponent,
    EnterToNewLinePipe,
  ],
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
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.addLangs(['en-US', 'pt-PT']);
    translate.setDefaultLang('en-US');
    console.log('Current browser language:', translate.getBrowserCultureLang());
    this.setLanguageFromCultureBrowserLanguage(translate);
  }

  private setLanguageFromCultureBrowserLanguage(
    translate: TranslateService
  ): void {
    switch (translate.getBrowserCultureLang()) {
      case 'pt':
      case 'pt-PT':
        translate.use('pt-PT');
        break;

      case 'en':
        translate.use('en-US');
        break;

      default:
        translate.use('en-US');
        break;
    }
  }
}
