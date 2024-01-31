import { Injectable } from '@angular/core';

export type Themes = 'dark' | 'light';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  theme: Themes = 'light';

  constructor() {}

  switchCurrentTheme(theme: Themes) {
    this.theme = theme;
  }
}
