import { Component } from '@angular/core';
import { Platform } from "ionic-angular";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  data: any;
  webmedia: any;

  constructor(platform: Platform) {

		platform.registerBackButtonAction(() => {
					platform.exitApp();
	});

    this.data = [
      { title:'AAAHH', audio:'./assets/sounds/aaaaaaahh.mp3'},
			{ title:'Aprovecha el Bug', audio:'./assets/sounds/Aprobechaelbug.mp3'},
			{ title:'Aqui WillyRex Comentando', audio:'./assets/sounds/Aquiwillyrexcomentadno.mp3'},
			{ title:'A ver, a ver...', audio:'./assets/sounds/averavertomasfalete.mp3'},
			{ title:'HALA HALA HALA', audio:'./assets/sounds/HALAHALAHALA.mp3'},
			{ title:'Ha petao la Magia', audio:'./assets/sounds/hapetadolamagia.mp3'},
			{ title:'Madre Mia mis Cosas', audio:'./assets/sounds/MadremiaMisCosas.mp3'},
			{ title:'Madre Mia Willy', audio:'./assets/sounds/MadreMiaWilly.mp3'},
			{ title:'Maldito juego de Cubos', audio:'./assets/sounds/Malditojuegodecubostio.mp3'},
			{ title:'Me Cago en el Minecraft', audio:'./assets/sounds/Mecagoenelminecraft.mp3'},
			{ title:'Me cago en Falete otra vez', audio:'./assets/sounds/Mecagoenfaleteotravez.mp3'},
			{ title:'Me cago en todo lo cagable', audio:'./assets/sounds/Mecagoentodolocagablequeque.mp3'},
			{ title:'Me estaba Viendo', audio:'./assets/sounds/Meestabaviendo.mp3'},
			{ title:'No me lo creo tio', audio:'./assets/sounds/Nomelocreotio.mp3'},
			{ title:'No me parece ni medio normal', audio:'./assets/sounds/Nomeparecenimedionormal.mp3'},
			{ title:'NO NO NO NO', audio:'./assets/sounds/nonononhaha.mp3'},
			{ title:'Ostras Julian', audio:'./assets/sounds/OstrasJulian.mp3'},
			{ title:'Paradise Paradise', audio:'./assets/sounds/Paradise.mp3'},
			{ title:'Pero Que Pero Que Dices', audio:'./assets/sounds/PeroQUePeroQueDices.mp3'},
			{ title:'Por Favor', audio:'./assets/sounds/Porfavor.mp3'},
			{ title:'Que leches ha pasado ahi', audio:'./assets/sounds/Quelecheshapasadoahi.mp3'},
			{ title:'Que No Que No Que No Sal Sal', audio:'./assets/sounds/quenoquenoquenononosalsal.mp3'},
			{ title:'Que Que ha pasado', audio:'./assets/sounds/QueQuehapasodo.mp3'},
			{ title:'Que narices ha pasado ahi', audio:'./assets/sounds/Quenariceshapasadoahi.mp3'},
			{ title:'Que timo Que timo', audio:'./assets/sounds/Quetimoquetimo.mp3'},
			{ title:'Que no puedo salir', audio:'./assets/sounds/SQuenopuedosalir.mp3'},
			{ title:'Tiene que areglarse tio', audio:'./assets/sounds/tienequeareglarsetio.mp3'},
			{ title:'Tioooo', audio:'./assets/sounds/Tioooo.mp3'},
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


		