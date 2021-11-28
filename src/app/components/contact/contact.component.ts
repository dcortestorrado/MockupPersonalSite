import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contactoForm: FormGroup;
    valorNumerico = /^[0-9]+$/;

  constructor(private fb: FormBuilder) {
      this.contactoForm = this.fb.group({
        nombreContacto: ['', Validators.required],
        correoContacto: ['', [Validators.required, Validators.email]],
        telefonoContacto: ['', [Validators.pattern(this.valorNumerico)]],
        mensajeContacto: ['', Validators.required]
      })
  }

  ngOnInit(): void {
  }

  guardarMensaje(){
    console.log(this.contactoForm);
  }

}

