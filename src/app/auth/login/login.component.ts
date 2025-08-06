import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
    private readonly _fb = inject(FormBuilder);

    loginForm = this._fb.group({
      email:["", [Validators.required]],
      password:["",[Validators.required]]
    });

    onSubmit(){
      if(this.loginForm.valid){
        console.log("formsubmitted", this.loginForm.value)
      }
      else
        console.log("form invalid")
    }
}
