import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderServiceService {

  isVisible: boolean;

  constructor() { }

  showLoader(){
    this.isVisible = true;
  }

  hideLoader(){
    this.isVisible = false;
  }
}
