import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent implements OnInit {

  constructor(private musicService: MusicService) { }

  ngOnInit() {
  }

  track: string;
  @Input() tracks: any[];

  @Output() update = new EventEmitter();
  @Output() query = new EventEmitter();

  search(event) {
  	this.query.emit(event.query);
  }

  select(track){
  	this.update.emit(track);
  }
}
