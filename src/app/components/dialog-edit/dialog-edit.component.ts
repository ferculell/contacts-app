import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConexionService } from 'src/app/services/conexion.service';

export interface Contact {
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {

  nombre = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  

  constructor(private conexion:ConexionService, @Inject(MAT_DIALOG_DATA) public data: Contact) { }

  ngOnInit(): void {
  }

  getNombreErrorMessage() {
    if (this.nombre.hasError('required')) {
      return 'Este campo es obligatorio';
    }
  }
  
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Este campo es obligatorio';
    }

    return this.email.hasError('email') ? 'No es un formato válido de email' : '';
  }
  
  agregarItemEditado() {
    this.conexion.editarItem(this.data);
  }
}
