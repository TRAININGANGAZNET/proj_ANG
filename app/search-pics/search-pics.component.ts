import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/SearchImage';
import { SearchedImages } from '../Model/SearchedImages';


@Component({
  selector: 'app-search-pics',
  templateUrl: './search-pics.component.html',
  styleUrls: ['./search-pics.component.css']
})
export class SearchPicsComponent implements OnInit {
  userSearchResult: SearchedImages;
  searchKey: string;
  searchForm: FormGroup;
  constructor(private postService: SearchService,private activatedRoute: ActivatedRoute) {
    this.searchKey = "";
    this.userSearchResult = new SearchedImages();
    this.searchForm = new FormGroup({
      searchKeyItem: new FormControl(null, Validators.required)
    })


    this.activatedRoute.params.subscribe(data => {
      this.searchKey = data["searchKey"];
      console.log("searchKey", this.searchKey);
      if (this.searchKey != undefined) {
        this.doSearch()
      }
    });


  }

  ngOnInit(): void {
  }

  //public get searchKeyItem() {
  //  return this.searchKeyItem.get('username');
  //}

  doSearch() {
    this.postService.getPostData(this.searchKey).subscribe((data) => {
      console.log(data);
      this.userSearchResult = data as SearchedImages;
      console.log(this.userSearchResult);
    })
  }

}
