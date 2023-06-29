import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { InsertCategoriaService } from 'src/app/services/insert-categoria.service';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.page.html',
  styleUrls: ['./agregar-categoria.page.scss'],
})
export class AgregarCategoriaPage implements OnInit {

  constructor(private router: Router,private insertarCategoria: InsertCategoriaService,private alertController: AlertController) {}

  descripcion:any;

  ngOnInit() {
  }





  async save(descripcion: any) {
    console.log('save', descripcion);


    let params = {
      data: [{descripcion: descripcion}]
    }

    console.log("params", params)


    await this.insertarCategoria.InsertCategoria(params).then(async respuesta => {
      console.log(respuesta);

      if (respuesta.status = "000") {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Tu registro ha sido exitoso',
          // message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();
        


    setTimeout(function(){location.reload()}, 3000);

        
    let params = {
      data: [{descripcion: ""}]
    }




      } else {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Error al cargar tu registro',
          // message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();

      }


    });






  }
}