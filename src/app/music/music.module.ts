import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
// import { AutoCompleteModule } from 'primeng/primeng';

// import { MusicDetailsComponent } from './music-details/music-details.component';
// import { MusicFooterComponent } from './music-footer/music-footer.component';
// import { MusicProgressComponent } from './music-progress/music-progress.component';
// import { MusicSearchComponent } from './music-search/music-search.component';
// import { MusicPlayerComponent } from './music-player/music-player.component';

import { ApiService } from './services/api.service';
import { MusicService } from './services/music.service';

@NgModule({
  imports: [
  	FormsModule,
    // AutoCompleteModule,
    HttpModule,
    CommonModule
  ],
  exports: [
	  // MusicSearchComponent,
	  // MusicDetailsComponent,
	  // MusicPlayerComponent,
	  // MusicProgressComponent,
	  // MusicFooterComponent
  ],
  declarations: [
    // MusicDetailsComponent, 
    // MusicFooterComponent, 
    // MusicProgressComponent, 
    // MusicSearchComponent, 
    // MusicPlayerComponent
  ],
  providers: [
      ApiService,
      MusicService
    ],
})
export class MusicModule { }
