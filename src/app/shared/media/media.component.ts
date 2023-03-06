import { Component, Input, OnInit } from '@angular/core';

export interface Media {
  title: string;
  description: string;
  buttonLabel?: string;
}

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() buttonLabel: string | undefined = '';

  constructor() {}

  ngOnInit(): void {}
}
