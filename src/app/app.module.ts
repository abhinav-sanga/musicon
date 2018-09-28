import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MusicModule } from './music/music.module';
import { AutoCompleteModule } from 'primeng/primeng';


import { MusicDetailsComponent } from './music/music-details/music-details.component';
import { MusicFooterComponent } from './music/music-footer/music-footer.component';
import { MusicProgressComponent } from './music/music-progress/music-progress.component';
import { MusicSearchComponent } from './music/music-search/music-search.component';
import { MusicPlayerComponent } from './music/music-player/music-player.component';

import { ApiService } from './music/services/api.service';
import { MusicService } from './music/services/music.service';

@NgModule({
  declarations: [
    AppComponent,
    MusicFooterComponent,
    MusicDetailsComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    MusicSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MusicModule,
    AutoCompleteModule
],
  providers: [
    ApiService,
    MusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
