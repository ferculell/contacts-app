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
  formisvalid:boolean = true;
  

  constructor(private conexion:ConexionService, @Inject(MAT_DIALOG_DATA) public data: Contact) { }

  ngOnInit(): void {
  }

  getNombreErrorMessage() {
    if (this.nombre.hasError('required')) {
      this.formisvalid = false;
      return 'Este campo es obligatorio';
    } else {
      this.formisvalid = true;
    }
  }
  
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      this.formisvalid = false;
      return 'Este campo es obligatorio';
    } else {
      this.formisvalid = true;
    }

    return this.email.hasError('email') ? 'No es un formato válido de email' : '';
  }
  
  agregarItemEditado() {
    this.conexion.editarItem(this.data);
  }
}
