import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GetDetalleOrdenesService } from 'src/app/services/get-detalle-ordenes.service';

import { UpdateEstatusOrdenService } from 'src/app/services/update-estatus-orden.service';
@Component({
  selector: 'app-actualizar-envios',
  templateUrl: './actualizar-envios.page.html',
  styleUrls: ['./actualizar-envios.page.scss'],
})
export class ActualizarEnviosPage implements OnInit {

  constructor(private route: ActivatedRoute, private getOrdenesAbiertas: GetDetalleOrdenesService,private updateEstatusOrden: UpdateEstatusOrdenService,
    public alertController: AlertController,
    private router: Router
    
    
    ) { }


  orden:any;
  data:any;
  estatus:any;
  guia:any;
  proveedor:any;
  completo:any


  ngOnInit() {
  }

  async ionViewWillEnter() {
    this.orden = this.route.snapshot.paramMap.get('orden');


    let params = {orden: this.orden }
    



    await this.getOrdenesAbiertas.GetDetalleOrden(params).then(async respuesta => {
      console.log(respuesta);

      this.data= respuesta.data;


      this.estatus=this.data[0].estatus_envio;
      this.guia=this.data[0].guia;
      this.proveedor=this.data[0].proveedor;


      this.proveedor?this.completo=true:this.completo=false


    })



    

      
  }



 async guardar(orden:any, estatus:any,proveedor:any,guia:any){
    console.log("guarda", orden , estatus, proveedor, guia)


    

    let params = {
      data: [{estatus: estatus, proveedor: proveedor, guia:guia,orden:orden }]
    }



    await this.updateEstatusOrden.UpdateEstatusOrden(params).then(async respuesta => {
      console.log(respuesta);

      if (respuesta.status = "000") {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Tu registro ha sido actualizado con éxito',
          buttons: ['OK'],
        });

        await alert.present();
        

        setTimeout(() => {

          this.router.navigate(['envios'])
          .then(() => {
            window.location.reload();
          });
    
        }, 3000);
    




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
