import { Component } from '@angular/core';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  data: any;
  webmedia: any;

  constructor() {
    this.data = [
			{ title:'ASSDESS', audio:'./assets/sounds/bird.mp3'},
      { title:'¡Pajaro Loco!', audio:'./assets/sounds/bird.mp3'},
      { title:'ASSadwDESS', audio:'./assets/sounds/bird.mp3'},
      { title:'¡Pajarawdwao Loco!', audio:'./assets/sounds/bird.mp3'},
      { title:'SS', audio:'./assets/sounds/bird.mp3'},
      { title:'¡Pajawdaro Loco!', audio:'./assets/sounds/bird.mp3'},
      { title:'ASSawdawdawdDESS', audio:'./assets/sounds/bird.mp3'},
      { title:'¡Pajaro Loco!', audio:'./assets/sounds/bird.mp3'},
      { title:'awd', audio:'./assets/sounds/bird.mp3'},
      { title:'¡Pajarawdo Loco!', audio:'./assets/sounds/bird.mp3'},
      { title:'ASSDawdESS', audio:'./assets/sounds/bird.mp3'},
			{ title:'¡Pajadwadawwdawdawdaro adwwawedaLoco!', audio:'./assets/sounds/bird.mp3'},
		];

  }


  play(soundFile){		
      if(this.webmedia) {
				this.webmedia.pause();
			}
			this.webmedia = new Audio(soundFile);
			this.webmedia.load();
			this.webmedia.play();

  }
}

