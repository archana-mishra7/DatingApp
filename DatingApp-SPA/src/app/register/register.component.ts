import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  @Input() valuesFromHome: any;
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService, private aleritfy: AlertifyService) { }

  ngOnInit(): void {
  }
  register() {
      this.authService.register(this.model).subscribe(() => {
        this.aleritfy.success('Registration successful');
      }, error => {
        this.aleritfy.error(error);
      });

  }
  cancel(){
    this.cancelRegister.emit(false);
    this.aleritfy.warning('Cancelled');
  }

}
