import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	primeiro: number;
	segundo: number;
	operacao: string = "soma";

	constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

	}

	calculateValue(){
		let result: number;
		if(this.primeiro == null || this.segundo == null){
			this.presentToast("Nenhum dos campos pode ser vazio");
		}else if(this.operacao=="soma"){
			result = (+this.primeiro) + (+this.segundo);
			this.presentToast(result);
		}else if(this.operacao=="subtracao"){
			result = (+this.primeiro) - (+this.segundo);
			this.presentToast(result);
		}else if(this.operacao=="multiplicacao"){
			result = (+this.primeiro) * (+this.segundo);
			this.presentToast(result);
		}else if(this.operacao=="divisao"){
			result = (+this.primeiro) / (+this.segundo);
			this.presentToast(result);
		}
	}

	presentToast(message: any) {
	let toast = this.toastCtrl.create({
	  message: message,
	  duration: 3000,
	  position: 'middle'
	});
	toast.present();
	}

}
