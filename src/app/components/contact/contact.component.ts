import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contacto } from 'src/app/models/contacto';
import { Router } from '@angular/router'; /* nos permite cuadrar la navegación que tiene nuestro usuario después de completar alguna acción */
import Swal from 'sweetalert2'; /*Aquí importamos Swalert*/

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    contactoForm: FormGroup;
    valorNumerico = /^[0-9]+$/;

  constructor(private fb: FormBuilder, private router: Router) { /* Acá también hay que declarar router */
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
    console.log(this.contactoForm.get('nombreContacto')?.value);

    const CONTACTO: Contacto = {

      nombre: this.contactoForm.get('nombreContacto')?.value,
      email: this.contactoForm.get('correoContacto')?.value,
      telefono: this.contactoForm.get('telefonoContacto')?.value,
      mensaje: this.contactoForm.get('mensajeContacto')?.value
    }

    console.log(CONTACTO);
    this.router.navigate(['']);
    Swal.fire({
      title: 'Message Sent',
      text: "The message has been sent. I'll get back to you as soon as possible",
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

}

