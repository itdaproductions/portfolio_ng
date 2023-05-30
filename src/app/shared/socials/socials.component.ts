import { Component, Input } from '@angular/core';

export type SocialTypes = 'youtube' | 'linkedin' | 'facebook' | 'github';

export type SocialsData = {
  type: SocialTypes;
  link: string;
};

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.scss'],
})
export class SocialsComponent {
  @Input() socials: SocialsData[] = [];

  constructor() {}
}
