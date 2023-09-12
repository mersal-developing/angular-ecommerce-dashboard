import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  getNumber(string: string) {
    return parseInt(string);
  }
}
