import { Component, OnInit } from '@angular/core';
import { MusicService } from './music/services/music.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title;
  position;
  elapsed;
  duration;
  paused = true;
  tracks = {};
  filteredTracks = {};
  backgroundStyle;

  constructor(private musicService: MusicService) {}

  ngOnInit(){
  	this.musicService.getPlaylistTracks().subscribe(tracks => {
      this.tracks = tracks['tracks'];
  		this.handleRandom();
  	});

    this.musicService.audio.onended = this.handleEnded.bind(this);
    this.musicService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
  }

  handleRandom() {
    const randomTrack = this.musicService.randomTrack(this.tracks);
    this.musicService.load(randomTrack.stream_url)
    this.title = randomTrack.title;
    this.paused = false;
    this.backgroundStyle = this.composeBackgroundStyle(randomTrack.artwork_url)

  }

   handleEnded(e) {
    this.handleRandom();
  }

  handleTimeUpdate(e) {
    if(isNaN(this.musicService.audio.duration)){
      return;
    }
    const elapsed =  this.musicService.audio.currentTime;
    const duration =  this.musicService.audio.duration;
    this.position = elapsed / duration;
    this.elapsed = this.musicService.formatTime(elapsed);
    this.duration = this.musicService.formatTime(duration);
  }

  handleQuery(payload) {
      this.musicService.findTracks(payload).subscribe(tracks => {
        this.filteredTracks = tracks;
      });
  }

  handlePausePlay() {
      if(this.musicService.audio.paused) {
        this.paused = true;
        this.musicService.audio.play()
      } else {
        this.paused = false;
        this.musicService.audio.pause()
      }
  }

  handleStop() {
    this.musicService.audio.pause();
    this.musicService.audio.currentTime = 0;
    this.paused = false;
  }

  handleBackward() {
    let elapsed =  this.musicService.audio.currentTime;
    if(elapsed >= 5) {
      this.musicService.audio.currentTime = elapsed - 5;
    }
  }

  handleForward() {
    let elapsed =  this.musicService.audio.currentTime;
    const duration =  this.musicService.audio.duration;
    if(duration - elapsed >= 5) {
      this.musicService.audio.currentTime = elapsed + 5;
    }
  }

   handleUpdate(track) {
    this.musicService.load(track.stream_url);
    this.musicService.play()
    this.title = track.title;
    this.backgroundStyle = this.composeBackgroundStyle(track.artwork_url);
    this.paused = true;
  }

  composeBackgroundStyle(url) {
      return {
        width: '100%',
        height: '600px',
        backgroundSize:'cover',
        backgroundImage: `linear-gradient(
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),   url(${this.musicService.xlArtwork(url)})`
      }
  }
}
