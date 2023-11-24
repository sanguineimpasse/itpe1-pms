import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-size',
  templateUrl: './screen-size.component.html',
  styleUrls: ['./screen-size.component.scss']
})
export class ScreenSizeComponent implements OnInit{
  screenSize: number = 0;
  
  ngOnInit() {
    this.screenSize = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.screenSize = event.target.innerWidth;
  }
}
