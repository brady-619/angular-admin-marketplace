import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GetCategoriasService } from 'src/app/services/get-categorias.service';
import { GetEditProductoService } from 'src/app/services/get-edit-producto.service';
import { UpdateProductoService } from 'src/app/services/update-producto.service';

import { LiveAnnouncer } from '@angular/cdk/a11y';
@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.page.html',
  styleUrls: ['./editar-producto.page.scss'],
})
export class EditarProductoPage implements OnInit {



  producto:any;
  precio:any;
  categoria:any;
  imagen:any;
  imagen2:any;
  imagen3:any;
  imagen4:any;
  currentFood = undefined;
  respuestacat:any;
  foods:any;
  data:any;
  disponibilidad:any;
  descripcion:any;

  constructor(    private router: Router,
    private UpdateProducto: UpdateProductoService,
    private _liveAnnouncer: LiveAnnouncer,
    public alertController: AlertController,
    private getEditProductos: GetEditProductoService,
    private listadoCategorias: GetCategoriasService) { }

  ngOnInit() {
  }



  async ionViewWillEnter(){

    await this.listadoCategorias.ListadoCategorias().then(async (respuestacat) => {
      // console.log('bna', respuestacat);

      this.foods= respuestacat.data
      // console.log('bna', this.foods);



    });
  




    


    const params ={producto: localStorage.getItem("edit_producto")};



    this.data= '';
    await this.getEditProductos.GetProducto(params).then(async (respuesta) => {

      this.data= respuesta.data
      console.log("dat", this.data);
      


 
    
      this.producto=this.data[0].producto;
      this.precio=this.data[0].precio;
      this.disponibilidad=this.data[0].disponibilidad;
      this.descripcion=this.data[0].descripcion;
      this.categoria= Number(this.data[0].categoria);
      this.imagen=this.data[0].imagen;
      this.imagen2=this.data[0].imagen2;
      this.imagen3=this.data[0].imagen3;
      this.imagen4=this.data[0].imagen4;
 
 
      this.data= respuesta.data
 
 


    });
  
  }






  async save(producto: any, precio: any,descripcion:any, disponibilidad:any,categoria: any, imagen:any,imagen2:any,imagen3:any,imagen4:any, ) {


    // console.log("datos", producto, precio,disponibilidad, categoria, imagen, imagen2, imagen3, imagen4);


   let producto_v= localStorage.getItem("edit_producto")




    let params = {
      data: [{producto: producto, precio: precio, descripcion:descripcion,disponibilidad:disponibilidad,categoria: categoria, imagen: imagen, imagen2:imagen2, imagen3:imagen3, imagen4:imagen4,producto_v: producto_v }]
    }






    console.log("params", params)


    await this.UpdateProducto.UpdateProducto(params).then(async respuesta => {
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
    // setTimeout(function(){location.reload()}, 3000);


    
    // let params = {
    //   data: [{producto: "", precio: "",disponibilidad:"", categoria: "" , imagen: "", imagen2: "", imagen3: "", imagen4: ""}]
    // }




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

  // foods = [
  //   {
  //     id: 1,
  //     name: 'Apples',
  //     type: 'fruit',
  //   },
  //   {
  //     id: 2,
  //     name: 'Carrots',
  //     type: 'vegetable',
  //   },
  //   {
  //     id: 3,
  //     name: 'Cupcakes',
  //     type: 'dessert',
  //   },
  // ];







  compareWith(o1:any, o2:any) {
    console.log(o1, o2);
    
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }

  handleChange(ev:any) {
    this.currentFood = ev.target.value;
    console.log(this.currentFood);

    
    
  }


}
