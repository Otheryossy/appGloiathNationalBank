import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-screen',
  templateUrl: './skeleton-screen.component.html',
  styleUrls: ['./skeleton-screen.component.scss']
})
export class SkeletonScreenComponent implements OnInit {

  public fakeContent: Array<any> = new Array(16);

  constructor() { }

  ngOnInit() {
  }

}
