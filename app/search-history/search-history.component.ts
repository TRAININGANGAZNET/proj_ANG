import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../services/SearchImage';
import { MySearchHistory } from '../Model/MySearchHistory';
import { SearchedImage } from '../Model/SearchedImage';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  mySearchHistory: MySearchHistory[];
  constructor(private postService: SearchService, private router: Router) {
    
    this.mySearchHistory = postService.getMySearchHistory();
    console.log(this.mySearchHistory);
  }

  ngOnInit(): void {
  }

  PastSearchClick(searchKey: string) {
    this.router.navigate(['search', searchKey],);

  }
}
