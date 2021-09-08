import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {DataService} from "../city-data/city-data.service";
import {ICity} from "../city-data/ICity";

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {
  @ViewChild('f') form!: NgForm;
  name!: string;
  coordLat!: number;
  coordLon!: number;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  onAddCity() {
    console.log(this.form.value.name);
    const city: ICity = { name:this.form.value.name }
    this.dataService.setCity(city).subscribe(console.log, console.error);
  }

}
