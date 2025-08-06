import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
    private readonly _fb = inject(FormBuilder);

    registerForm = this._fb.group({
        email:["", [Validators.required]],
        password:["",[Validators.required]],
        firstName:["",[Validators.required]],
        lastName:["",[Validators.required,Validators.minLength(3)]]
    })

      onSubmit(){
      if(this.registerForm.valid){
        console.log("formsubmitted", this.registerForm.value)
      }
      else
        console.log("form invalid")
    }
}
