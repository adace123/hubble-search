import { Component, OnInit } from '@angular/core';

import HubbleImage from '../../interfaces/hubble-image';
import { HubbleImagesService } from '../../services/hubble-images/hubble-images.service';

@Component({
  selector: 'app-hubble-images',
  templateUrl: './hubble-images.component.html',
  styleUrls: ['./hubble-images.component.scss']
})
export class HubbleImagesComponent implements OnInit {
  hubbleResources: Array<HubbleImage>;
  resultCount: number;
  currentPage: number;

  constructor(private hubbleImageService: HubbleImagesService) { }

  ngOnInit() {
    this.hubbleImageService.getImages().subscribe(data => {
      this.hubbleResources = data;
      this.resultCount = data.length;
    });
  }

  get numPages(): number {
    const pages = this.resultCount / 6;
    
    if (pages < 1 || pages % 6 === 0) {
      return pages;
    }
    return Math.round(pages) + 1;
  }

  get currentSlice(): Array<HubbleImage> {

    return null;
  }

}
