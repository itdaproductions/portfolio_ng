import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface Media {
  id: string;
  url: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  type?: MediaType;
  displayMedia?: boolean;
}

export type MediaType = 'image' | 'video';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent implements OnInit {
  @Input() id: string = '';
  @Input() url: string = '';
  @Input() title: string | undefined = '';
  @Input() description: string | undefined = '';
  @Input() buttonLabel: string | undefined = '';
  @Input() showBodyOnHover = false;
  @Input() type: MediaType = 'image';
  @Input() displayMedia: boolean | undefined = true;

  @Output() clickedButton = new EventEmitter<string>();
  @Output() clickedMedia = new EventEmitter<string>();

  modalOpened = false;
  hasErrorLoading = false;
  hadLoadedPreviewMedia = false;
  hasLoadedFullMedia = false;
  safeURL: SafeResourceUrl | undefined;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

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
  }

  onClickMedia(): void {
    this.modalOpened = !this.modalOpened;
    this.hasLoadedFullMedia = false;
    this.clickedMedia.emit(this.id);
  }

  onClickButton(): void {
    this.clickedButton.emit(this.id);
  }
}
