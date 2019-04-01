import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
   <hr>
    Welcome to TheMovieDBProject
   <hr>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
