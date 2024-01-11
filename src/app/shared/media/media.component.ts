import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Media {
  key: string;
  imageUrl: string;
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
  @Input() imageUrl: string = '';
  @Input() title: string | undefined = '';
  @Input() description: string | undefined = '';
  @Input() buttonLabel: string | undefined = '';
  @Input() showBodyOnHover = false;

  @Output() clickedButton = new EventEmitter<string>();
  @Output() clickedMedia = new EventEmitter<string>();

  modalOpened: boolean = false;
  hasErrorLoading: boolean = false;
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

  onErrorLoading(error: boolean = false): void {
    this.hasErrorLoading = error;
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
