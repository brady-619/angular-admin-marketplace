import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { DeleteProductoService } from 'src/app/services/delete-producto.service';
import { GetProductosService } from 'src/app/services/get-productos.service';

export interface PeriodicElement {
  producto: string;
  precio: string;
  disponibilidad: string;
}


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  data: any;
  dataSource = new MatTableDataSource<PeriodicElement>();
  producto:any;

  displayedColumns: string[] = [
    'producto', 'precio', 'disponibilidad', 'options'
  ];

  constructor(
    private router: Router,
    private listadoProductos: GetProductosService,
    private _liveAnnouncer: LiveAnnouncer,
    public alertCtrl: AlertController,
    private deleteProducto: DeleteProductoService
  ) {}


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  async ionViewWillEnter(){
    await this.listadoProductos.GetProductos().then(async (respuesta) => {
      console.log('bna', respuesta);

      this.data = respuesta.data;
      //  console.log('bna', this.data);

      let ELEMENT_DATA: PeriodicElement[] = respuesta.data;
      this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      // this.dataSource = ELEMENT_DATA;

      // this.dataSource = new MatTableDataSource(ELEMENT_DATA);

      console.log(this.dataSource);
      this.dataSource.paginator = this.paginator;
      // console.log(this.dataSource.paginator)
      // console.log(this.paginator)
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnInit() {
  }

  announceSortChange(sortState: Sort) {
    console.log('mueve', sortState);
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  async editar(descripcion: any) {
    console.log('Diste click en editar', descripcion);

    localStorage.setItem("edit_producto",descripcion)

    this.router.navigate(['editar-producto']);


  }

  async eliminar(descripcion: any) {
    console.log('Diste click en eliminar', descripcion);

    const alert = await this.alertCtrl.create({
      header: 'AVISO, seguro que deseas elminar el producto: ' + descripcion,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Ok',

          handler: async (alertData) => {
            console.log('Se manda descripcion a eliminar');

            const params = {
              data: [{ descripcion: descripcion }],
            };

            // console.log("para", params)

            await this.deleteProducto.DeleteProducto(params)
              .then(async (resp) => {
                console.log('resp', resp);

                // Se crea el log de venta CON REQUEST HECHO ANTES
                const alert = await this.alertCtrl.create({
                  header: 'Producto eliminado con éxito.',
                  // subHeader: 'SubTitle',
                  // message: 'This is an alert message',
                  buttons: ['OK'],
                });
                await alert.present();
                setTimeout(function(){location.reload()}, 3000);




              })
              .catch(async (error) => {
                /* Código a realizar cuando se rechaza la promesa */
                console.log('NO paso chido', error);

                const alert = await this.alertCtrl.create({
                  header: 'Error en red.',
                  // subHeader: 'SubTitle',
                  // message: 'This is an alert message',
                  buttons: ['OK'],
                });
                await alert.present();
              });
          },
        },
      ],
    });

    await alert.present();



    
  }

  async agregar() {
    console.log('add');

    this.router.navigate(['agregar-producto']);
  }

}



