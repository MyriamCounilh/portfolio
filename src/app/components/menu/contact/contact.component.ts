import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  civility = new FormControl('' );
  name = new FormControl('', [Validators.required]);
  textArea =  new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor() {
   this.form = new FormGroup({email: this.email, name: this.name, textArea: this.textArea, civility: this.civility});
  }

  ngOnInit(): void {
  }


  sendForm() {
   if (this.form.valid) {
      console.log(this.form.value);
   } else {
      console.log("non valid");
   }
  }
}
