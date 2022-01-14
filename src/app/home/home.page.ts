import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  poids = '';
  taille = '';
  imc = 0;
  tranche = '';
  color = '';


  constructor(private router: Router) { }


  onCalculer() {
    let poids = parseFloat(this.poids);
    let taille = parseFloat(this.taille);
   
    //this.poids = '';
   // this.taille = '';
    this.imc = poids / (taille * taille);
    // afficher l'IMC

    
    let imc2 = this.imc.toFixed(2);
    this.router.navigate(['/resultat', imc2,this.taille]);
  }


}
