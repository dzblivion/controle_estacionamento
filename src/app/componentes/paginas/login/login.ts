import { Component } from '@angular/core';
import { ɵInternalFormsSharedModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
