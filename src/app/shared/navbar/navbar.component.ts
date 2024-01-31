import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BaseService } from '../../content/base/base.service';

export interface NavbarMenuItem {
  label: string;
  url: string;
}

export interface NavbarMenu {
  label: string;
  url?: string;
  items: NavbarMenuItem[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() title: string = 'title';
  @Input() menu: NavbarMenu[] | null = [];

  currentLanguage = this.translationSvc.currentLang;

  constructor(
    private translationSvc: TranslateService,
    private baseService: BaseService,
  ) {}

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

  onChangeTheme() {
    this.baseService.switchCurrentTheme('dark');
    debugger;
  }
}
