import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { GetCategoriasService } from 'src/app/services/get-categorias.service';

export interface PeriodicElement {
  descripcion: string;
}

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  data: any;
  dataSource = new MatTableDataSource<PeriodicElement>();

  displayedColumns: string[] = [
    'descripcion'
  ];

  constructor(
    private router: Router,
    private listadoCategorias: GetCategoriasService,
    private _liveAnnouncer: LiveAnnouncer,
    public alertCtrl: AlertController
  ) {}


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  async ionViewWillEnter(){
    await this.listadoCategorias.ListadoCategorias().then(async (respuesta) => {
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

  async editar(decripcion: any) {
    console.log('Diste click en editar', decripcion);


  }

  async eliminar(decripcion: any) {
    console.log('Diste click en eliminar', decripcion);

    
  }

  async agregar() {
    console.log('add');

     this.router.navigate(['agregar-categoria']);
  }

}
