import { Component, OnInit, ViewChild } from '@angular/core';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../categorias/categorias.page';
import { GetOrdenesAbiertasService } from 'src/app/services/get-ordenes-abiertas.service';
@Component({
  selector: 'app-envios',
  templateUrl: './envios.page.html',
  styleUrls: ['./envios.page.scss'],
})
export class EnviosPage implements OnInit {


  constructor(private getOrdenes: GetOrdenesAbiertasService,    private _liveAnnouncer: LiveAnnouncer) { }


  data: any;
  dataSource = new MatTableDataSource<PeriodicElement>();

  displayedColumns: string[] = [
    'orden',
    'estatus'
  ];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: false }) set content(sort: MatSort) {
    this.dataSource.sort = sort;
  }

  ngOnInit() {
  }



  async ionViewWillEnter(){
    await this.getOrdenes.GetOrdenes().then(async respuesta => {
      console.log(respuesta);
this.data=respuesta.data;

let ELEMENT_DATA: PeriodicElement[] = respuesta.data;
this.dataSource = new MatTableDataSource(ELEMENT_DATA);
// this.dataSource = ELEMENT_DATA;

// this.dataSource = new MatTableDataSource(ELEMENT_DATA);

console.log(this.dataSource);
this.dataSource.paginator = this.paginator;
// console.log(this.dataSource.paginator)
// console.log(this.paginator)

    })

  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  

}
