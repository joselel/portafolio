import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    /** spinner starts on init */
    this.spinner.show();
    setTimeout(() => {
      /** spinner ends after 0.6 seconds */
      this.spinner.hide();
    },900);
  }

}
