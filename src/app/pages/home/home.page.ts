import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}


  usuarios(){
    this.router.navigate(['usuarios']);
  }
  categorias(){
    this.router.navigate(['categorias']);
  }
  productos(){
    this.router.navigate(['productos']);
  }
  envios(){
    console.log("va a envios")
    this.router.navigate(['envios']);
  }

  salir(){
    this.router.navigate(['login']);

  }


}
