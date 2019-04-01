import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movieList: any;
  userName: any;
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const name = params.get('user');
    //   this.userName = name;
    // } );

    this.route.queryParams.subscribe((params) => {
      const name = params.user;
      this.userName = name;
    } );

    this.httpService.getAllMovies().subscribe(data => this.movieList = data);
  }

  onClick(id) {
    console.log('click logged for ' + this.userName + id);
    this.httpService.addFavorite(this.userName, id);
  }
}
