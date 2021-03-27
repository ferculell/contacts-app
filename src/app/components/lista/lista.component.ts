import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DialogEditComponent } from '../dialog-edit/dialog-edit.component';


export interface Contact {
  name: string;
  email: string;
  phone: string;
}


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})


export class ListaComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'phone', 'actions'];
  dataSource = new MatTableDataSource();


  constructor(private conexion:ConexionService, public dialog: MatDialog) { }


  ngOnInit() {
    this.conexion.listarItems().subscribe(res => this.dataSource.data = res);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogEdit(item) {

    const dialogRef = this.dialog.open(DialogEditComponent, {
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog Edit result: ${result}`);
    });
  }

  eliminar(item) {
    this.conexion.eliminarItem(item);
  }

}
