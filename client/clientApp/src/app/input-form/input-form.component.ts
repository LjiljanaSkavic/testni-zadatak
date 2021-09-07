import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @ViewChild('f') form: NgForm | undefined;
  name: String | undefined;
  temp: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onAddCity(form: NgForm) {
    this.name = form.value.name;
    this.temp = form.value.temp;
  }

}
