import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { GetUsuariosService } from 'src/app/services/get-usuarios.service';
import { DeleteUsuarioService } from 'src/app/services/delete-usuario.service';

export interface PeriodicElement {
  nombre: string;
  telefono: string;
  password: string;
  estatus: string;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {
  data: any;
  dataSource = new MatTableDataSource<PeriodicElement>();

  displayedColumns: string[] = [
    'nombre',
    'telefono',
    'password',
    'estatus',
    'options',
  ];

  constructor(
    private router: Router,
    private deleteUsuario: DeleteUsuarioService,
    private usuariosAdmin: GetUsuariosService,
    private _liveAnnouncer: LiveAnnouncer,
    public alertCtrl: AlertController
  ) {}

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  // ngAfterViewInit() {
    async ionViewWillEnter(){
    await this.usuariosAdmin.ListadoUsuariosAdmin().then(async (respuesta) => {
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

  ngOnInit() {}

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

  async editar(nombre: any) {
    console.log('Diste click en editar', nombre);

    localStorage.setItem('nombre_usuario', nombre);
    /*obteniendo store para inicializar*/
    this.router.navigate(['editar-usuario']);
  }

  async eliminar(nombre: any) {
    console.log('Diste click en eliminar', nombre);

    const alert = await this.alertCtrl.create({
      header: 'AVISO, seguro que deseas elminar el Usuario: ' + nombre,
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
            console.log('Se manda usuario a eliminar');

            const params = {
              data: [{ nombre: nombre }],
            };

            // console.log("para", params)

            await this.deleteUsuario
              .DeleteUsuario(params)
              .then(async (resp) => {
                console.log('resp', resp);

                // Se crea el log de venta CON REQUEST HECHO ANTES
                const alert = await this.alertCtrl.create({
                  header: 'Usuario eliminado con éxito.',
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

    this.router.navigate(['agregar-usuario']);
  }
}
