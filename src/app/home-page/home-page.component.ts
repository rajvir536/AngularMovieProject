import { element } from 'protractor';
import { DataStorageService } from './../data-storage.service';
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
  userDetails: any;
  myFavorites: string[];
  constructor(private httpService: HttpService, private route: ActivatedRoute, private dataStorage: DataStorageService) { }

  ngOnInit() {
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   const name = params.get('user');
    //   this.userName = name;
    // } );
    this.userDetails = this.dataStorage.data;
    this.route.queryParams.subscribe((params) => {
      const name = params.user;
      this.userName = name;
    } );

    this.httpService.getAllMovies().subscribe(data => this.movieList = data);
  }

  addToFavorites(elementId) {
    const stringElement = '' + elementId + '';
    this.myFavorites = this.userDetails.favorites;
    const el = this.myFavorites.indexOf(stringElement);
    console.log(el);
    if (this.myFavorites.includes(stringElement)) {
      console.log('ALREADY EXISTS');
    } else {
      this.userDetails.favorites.push(stringElement);
      this.httpService.addFavorite(this.userName, this.userDetails).subscribe();
    }
  }

  checkFav(elementId) {
    const stringElement = '' + elementId + '';
    this.myFavorites = this.userDetails.favorites;
    if (this.myFavorites.includes(stringElement)) {
      return true;
    } else {
      return false;
    }
  }

}
