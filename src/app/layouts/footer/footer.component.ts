import { Component, OnInit } from '@angular/core';
import { Constants } from '../../shared/constants';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  CONSTANTS
  constructor() {
    this.CONSTANTS = Constants
  }

  ngOnInit() {
  }

}
