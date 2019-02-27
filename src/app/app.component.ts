import { Component } from '@angular/core';
import { Platform } from "ionic-angular";
import { AdMobFree , AdMobFreeBannerConfig  } from '@ionic-native/admob-free';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  data: any;
  webmedia: any;

  constructor(platform: Platform, admobFree: AdMobFree) {

		platform.registerBackButtonAction(() => {
					platform.exitApp();
	});

    this.data = [
      { title:'Cual quiera de nosotros puede ser Alcapone', audio:'./assets/sounds/Cualeuieradenosotrospuedeseralcapone.mp3'},
			{ title:'Atento llego el momento', audio:'./assets/sounds/Atentollegoelmomento.mp3'},
			{ title:'El mio pie el pio chi SevillaCity', audio:'./assets/sounds/Elmiopielpiochisevilla.mp3'},
			{ title:'El que aprieta el gatillo te mata', audio:'./assets/sounds/Elqueaprietaelgatillotemata.mp3'},
			{ title:'Soy como un caballo', audio:'./assets/sounds/SoyComounCaballo.mp3'},
			{ title:'Estoy tan bueno que podria ser un prostituto', audio:'./assets/sounds/Estoytanbuenoquepodriaserunprostituto.mp3'},
			{ title:'Putta', audio:'./assets/sounds/Putta.mp3'},
			{ title:'Hablas mucho', audio:'./assets/sounds/HablasMucho.mp3'},
			{ title:'Yeah', audio:'./assets/sounds/Yeah.mp3'},
			{ title:'Yo contigo no discuto soy astuto', audio:'./assets/sounds/Yocontigonodiscutosoyastuto.mp3'},
			{ title:'El que te Foka Putta', audio:'./assets/sounds/ElqueteFokaPutta.mp3'},
			{ title:'El que no se pone nervioso', audio:'./assets/sounds/Elquenoseponenervioso.mp3'},
			{ title:'Es la inteligencia', audio:'./assets/sounds/EsLaInteligencia.mp3'}
		];

		const addConfig: AdMobFreeBannerConfig = {
			id: 'ca-app-pub-8119907816555669/1683458437',
			isTesting: false,
			autoShow: true
		   };

		   admobFree.banner.config(addConfig);

		   admobFree.banner.prepare()
			 .then(() => {})
			 .catch(e => console.log(e));
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


		