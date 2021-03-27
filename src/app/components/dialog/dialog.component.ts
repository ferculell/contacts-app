import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  nombre = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor() { }

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

}
