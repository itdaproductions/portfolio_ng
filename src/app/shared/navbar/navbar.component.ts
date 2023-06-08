import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() title: string = 'title';

  constructor(private translationSvc: TranslateService) {}

  ngOnInit(): void {}

  onFocus(event: FocusEvent): void {
    if (event.target instanceof HTMLElement) {
      event.target.blur();
    }
  }

  onChangeLanguage(language: string): void {
    switch (language) {
      case 'en-US':
        this.translationSvc.use('en-US');
        break;
      case 'pt-PT':
        this.translationSvc.use('pt-PT');
        break;
      default:
        this.translationSvc.use('en-US');
        break;
    }
  }
}
