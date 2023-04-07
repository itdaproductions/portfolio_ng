import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Media {
  key: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
}

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  @Input() key: string = '';
  @Input() title: string | undefined = '';
  @Input() description: string | undefined = '';
  @Input() buttonLabel: string | undefined = '';
  @Input() showBodyOnHover: boolean = false;

  @Output() clickedButton: EventEmitter<string> = new EventEmitter<string>();
  @Output() clickedMedia: EventEmitter<string> = new EventEmitter<string>();

  modalOpened: boolean = false;
  hadLoadedPreviewMedia: boolean = false;
  hasLoadedFullMedia: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onLoadMediaPreview(hasLoaded: boolean): void {
    this.hadLoadedPreviewMedia = hasLoaded;
  }

  onLoadFullMedia(hasLoaded: boolean): void {
    this.hasLoadedFullMedia = hasLoaded;
  }

  onClickCloseMedia(): void {
    this.modalOpened = !this.modalOpened;
    this.hasLoadedFullMedia = false;
  }

  onClickMedia(): void {
    this.modalOpened = !this.modalOpened;
    this.hasLoadedFullMedia = false;
    this.clickedMedia.emit(this.key);
  }

  onClickButton(): void {
    this.clickedButton.emit(this.key);
  }
}
