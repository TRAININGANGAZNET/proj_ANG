import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { SearchPicsComponent } from './search-pics/search-pics.component';
const routes: Routes = [
  { path: 'search/:searchKey', component: SearchPicsComponent },
  { path: 'search', component: SearchPicsComponent },
  { path: 'pastSearches', component: SearchHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
