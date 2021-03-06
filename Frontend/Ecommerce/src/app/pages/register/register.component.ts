import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMsg: boolean = false
  isSubmitted: boolean = false
  registerationForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    name:new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", [Validators.required]),
  
    }),
    birthdate: new FormControl("", [Validators.required])
  })

  get registerationData() {
    return this.registerationForm.controls
  }

  constructor(private global: GlobalService, private router: Router) { }


  ngOnInit(): void {
  }
  handleSubmit() {
    this.isSubmitted = true

    if (this.registerationForm.valid) {
      this.global.register(this.registerationForm.value).subscribe(res => {
        this.router.navigateByUrl("login")
      }, (err) => {
        this.errorMsg = true
      }, () => {

      })
    }
  }


}
