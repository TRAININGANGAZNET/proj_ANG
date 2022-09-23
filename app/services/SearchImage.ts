import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MySearchHistory } from "../Model/MySearchHistory";
@Injectable()
export class SearchService {
  searchHistory: MySearchHistory[];
  constructor(private httpClient: HttpClient) {
    this.searchHistory = [];
  }

  getMySearchHistory() {
    var historyKeys = this.searchHistory;
    console.log("searchitems", historyKeys);
    return historyKeys;
  }

  getPostData(searchKey: string) {
    var history = new MySearchHistory(searchKey);
    var item = this.searchHistory;
    console.log("searchKey", item);
    console.log("this.searchHistory", this.searchHistory);
    if (item != undefined) {
      this.searchHistory.push(history);
    }

    return this.httpClient.get("https://pixabay.com/api/?key=29577618-5e0e0c4ad98483febd3905ac2&q=" + searchKey)
  }
}
