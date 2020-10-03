import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import hubbleData from '../../../data/hubble_page_1';
import HubbleResource from '../../interfaces/hubble-image';

@Injectable({
  providedIn: 'root'
})
export class HubbleImagesService {
  constructor(private http: HttpClient) { }

  getImages(pageNumber: number = 1): Observable<Array<HubbleResource>> {
    return of(hubbleData.slice(0, 25));
  }
}
