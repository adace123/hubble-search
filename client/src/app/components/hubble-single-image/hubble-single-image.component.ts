import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hubble-single-image',
  templateUrl: './hubble-single-image.component.html',
  styleUrls: ['./hubble-single-image.component.scss']
})
export class HubbleSingleImageComponent implements OnInit {
  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

    get imageName(): string {
      return this.name.length < 50 ? this.name : this.name.slice(0, 40) + '...';
    }
}
