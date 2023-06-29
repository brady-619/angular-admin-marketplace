import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { InsertUsuarioService } from 'src/app/services/insert-usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.page.html',
  styleUrls: ['./agregar-usuario.page.scss'],
})
export class AgregarUsuarioPage implements OnInit {
  nombre: any;
  telefono: any;
  password: any;

  constructor(private router: Router,private insertarUsuario: InsertUsuarioService,private alertController: AlertController) {}

  ngOnInit() {}

  async save(nombre: any, telefono: any, password: any) {
    console.log('save', nombre, telefono, password);


    let params = {
      data: [{nombre: nombre, telefono: telefono, password: password }]
    }

    console.log("params", params)


    await this.insertarUsuario.InsertUsuario(params).then(async respuesta => {
      console.log(respuesta);

      if (respuesta.status = "000") {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Tu registro ha sido exitoso',
          // message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();
        

        // this.beneficiarioForm = new FormGroup({
        //   nombre: new FormControl('', [Validators.required, Validators.minLength(1)]),
        //   rfc: new FormControl(''),
        //   telefono: new FormControl(''),
        //   cuenta: new FormControl(''),
        //   banco: new FormControl('')
        // });

            // window.location.reload();
    setTimeout(function(){location.reload()}, 3000);

        
    let params = {
      data: [{nombre: "", telefono: "", password: "" }]
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
