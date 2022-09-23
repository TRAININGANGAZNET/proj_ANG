import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchPicsComponent } from './search-pics/search-pics.component';
import { SearchedImageComponent } from './searched-image/searched-image.component';
import { SearchService } from './services/SearchImage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchHistoryComponent } from './search-history/search-history.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchPicsComponent,
    SearchedImageComponent,
    SearchHistoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
