import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-divider-custom',
  templateUrl: './divider-custom.component.html',
  styleUrls: ['./divider-custom.component.scss']
})
export class DividerCustomComponent implements OnInit {
  @Input() color: string;
  backgroundColor;

  constructor() {
    console.log(this.color);
    this.backgroundColor = {'background-color': this.color};
  }

  ngOnInit() {
  }

}
