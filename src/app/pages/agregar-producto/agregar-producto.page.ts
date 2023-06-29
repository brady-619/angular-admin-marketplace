import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { GetCategoriasService } from 'src/app/services/get-categorias.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { InsertProductoService } from 'src/app/services/insert-producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

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
  descripcion:any;

  constructor(    private router: Router,
    private InsertProducto: InsertProductoService,
    private _liveAnnouncer: LiveAnnouncer,
    public alertController: AlertController,
    private listadoCategorias: GetCategoriasService) { }

  ngOnInit() {
  }



  async ionViewWillEnter(){
    await this.listadoCategorias.ListadoCategorias().then(async (respuestacat) => {
      console.log('bna', respuestacat);

      this.foods= respuestacat.data
      console.log('bna', this.foods);



    });
  
  }






  async save(producto: any, precio: any,descripcion:any, categoria: any, imagen:any,imagen2:any,imagen3:any,imagen4:any, ) {


    console.log("datos", producto, precio,descripcion, categoria, imagen, imagen2, imagen3, imagen4);


    let params = {
      data: [{producto: producto, precio: precio,descripcion:descripcion, categoria: categoria, imagen: imagen, imagen2:imagen2, imagen3:imagen3, imagen4:imagen4 }]
    }






    console.log("params", params)


    await this.InsertProducto.InsertProducto(params).then(async respuesta => {
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
      data: [{producto: "", precio: "",descripcion:"", categoria: "" , imagen: "", imagen2: "", imagen3: "", imagen4: ""}]
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
