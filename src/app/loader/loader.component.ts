import { Component, OnInit } from '@angular/core';
import { LoaderServiceService } from '../loader-service.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  get isLoaderVisible (){
    return this.loaderService.isVisible;
  }

  constructor(private loaderService: LoaderServiceService) { }

  ngOnInit(): void {
  }

}
