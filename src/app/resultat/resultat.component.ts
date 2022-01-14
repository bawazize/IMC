import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultat',
  templateUrl: './resultat.component.html',
  styleUrls: ['./resultat.component.scss'],
})
export class ResultatComponent implements OnInit {
imc: any;
tranche = '';
poidsIdeal: any =0;
taille : any;
  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params)=>{
        this.imc = params['imc'];
        this.taille = params['taille'];

        if (this.imc < 18.5) {
          this.tranche = 'maigreur';
          this.poidsIdeal = 18 * this.taille*this.taille;
        }
        else if (this.imc <= 25) // 18.5 <imc < 25
        {
          this.tranche = 'normal';
        }
        else if (this.imc > 25) {
          this.tranche = 'surpoids';
          this.poidsIdeal = 25 * this.taille*this.taille;
        }
      }
    )
  }
  
}
