import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  url: any;
  imagePath: string = "https://cdn-icons-png.flaticon.com/512/2105/2105217.png";

  constructor() { }

  ngOnInit(): void {
  }

}
