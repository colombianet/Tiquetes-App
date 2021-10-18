import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  anio!: number;
  loginSuccess = false;
  form: FormGroup = this.fb.group({
    email: [ '', [ Validators.required, Validators.email ] ],
    password: [ '', [ Validators.required, Validators.minLength(3) ] ],
  });

  constructor( private fb: FormBuilder, private dataSvc: DataService, private router: Router ) { }
  
  ngOnInit(): void {
    this.anio = new Date().getFullYear();
  }

  submit() {
    this.loginSuccess = false;
    const { email, password } = this.form.value;

    this.dataSvc.data.forEach( (d, index) => {
      if ( d.email == email && d.password == password ) {
        this.dataSvc.data[index].active = true;
        localStorage.setItem('token', 'mySecretToken');
        localStorage.setItem('user', d.name);
        const Toast = Swal.mixin({
          toast: true,
          position: 'center',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Login exitoso!'
        })
        this.router.navigate(['/dashboard']);
        this.loginSuccess = true;
      }
    });
    
    if ( !this.loginSuccess ) {
      Swal.fire('Error', 'Email o contraseña inválidos', 'error');
    }
  }

  validField( nameField: string ) {
    return this.form.get( nameField )?.invalid && this.form.get( nameField )?.touched
  }

}
