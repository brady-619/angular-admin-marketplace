import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GetEditUsuarioService } from 'src/app/services/get-edit-usuario.service';
import { UpdateAdminUsuarioService } from 'src/app/services/update-admin-usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {

  constructor( private router: Router,private getUsuario: GetEditUsuarioService, private updateUsuario: UpdateAdminUsuarioService,private alertController: AlertController) { }

  ngOnInit() {
  }
data:any;
nombre:any;
telefono:any;
password:any;
estatus:any;

/*render*/
async ionViewWillEnter() {

    




  let usuario=localStorage.getItem("nombre_usuario")

  const params ={nombre: usuario};
  //  const params = this.beneficiarioForm.value
  // console.log("antes", this.beneficiarioForm.value);


   await this.getUsuario.UsuarioNombre(params).then(async respuesta => {
     console.log(respuesta);

     this.data= respuesta.data

     console.log(this.data[0].nombre);

   
     this.nombre=this.data[0].nombre;
     this.telefono=this.data[0].telefono;
     this.password=this.data[0].password;
     this.estatus=this.data[0].estatus;


     this.data= respuesta.data



   });








   


}



async save(nombre:any,telefono:any, password:any, estatus:any){
  console.log(nombre ,telefono, password, estatus);


  let usuario=localStorage.getItem("nombre_usuario")


    let params = {
      data: [{nombre: nombre, telefono: telefono, password: password, estatus: estatus, nombre_v: usuario }]
    }

    console.log("params", params);
    

    await this.updateUsuario.UpdateUsuario(params).then(async respuesta => {
      console.log(respuesta);

      if (respuesta.status = "000") {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Tu registro ha sido actualizado con éxito',
          // message: 'This is an alert!',
          buttons: ['OK'],
        });

        await alert.present();

        
  










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
