import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number = 0
  height: number = 0
  imc: number = 0
  result: String = ""

  constructor(private toastCtrl: ToastController) { }

  onCalculate() {
    if (this.weight <= 0 || this.height <= 0) {
      return
    }

    this.imc = this.weight / (this.height * this.height)

    if (this.imc < 18.5){
      this.result = "Magreza"
      }
  
      else if (this.imc >= 18.5 && this.imc <= 24.9){
        this.result = "Normal"
      }
  
      else if (this.imc >= 25 && this.imc <= 29.9){
        this.result = "Sobrepeso"
      }
  
      else if (this.imc >= 30 && this.imc <= 39.9){
        this.result = "Obesidade"
      }
  
      else {
        this.result = "Obesidade Grave"
      }
    
      this.showImc()
    }

    /*if (this.imc < 18.5){
    this.showImc_magreza()
    }

    else if (this.imc >= 18.5 && this.imc <= 24.9){
      this.showImc_normal()
    }

    else if (this.imc >= 25 && this.imc <= 29.9){
      this.showImc_speso()
    }

    else if (this.imc >= 30 && this.imc <= 39.9){
      this.showImc_obesidade()
    }

    else if (this.imc >= 40){
      this.showImc_obesidadeGrave()
    }
  }*/
    
  async showImc() {
    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2)} - ${this.result}`,
      duration: 3000,
      color: 'primary'
      
    });
  
    toast.present()
  }

  /*async showImc_normal() {
    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2)} - Normal`,
      duration: 3000,
      color: 'primary'
      
    });
  
    toast.present()
  }

  async showImc_speso() {
    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2)} - Sobrepeso`,
      duration: 3000,
      color: 'primary'
      
    });
  
    toast.present()
  }

  async showImc_obesidade() {
    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2)} - Obesidade`,
      duration: 3000,
      color: 'primary'
      
    });
  
    toast.present()
  }

  async showImc_obesidadeGrave() {
    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2)} - Obesidade Grave`,
      duration: 3000,
      color: 'primary'
      
    });
  
    toast.present()
  }*/

}
