// Creating a reactive forms component
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { states } from './shared/data-model';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  form: FormGroup ;
  states = states;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = this.fb.group({          // The parent form group
      name: ['', Validators.required],
      adress: this.fb.group({            // The child form group
        street: '',
        city: '',
        state: '',
        zip: '',
      }),
      power: '',
      sidekick: ''
    });
  }

}
