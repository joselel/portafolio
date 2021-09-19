import { Component, OnInit } from '@angular/core';
import { HobbiesService } from 'src/app/services/hobbies.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css']
})
export class HobbiesComponent implements OnInit {

  hobbies: any[] = [];

  constructor(private _hobbiesService: HobbiesService) { }

  ngOnInit(): void {
    this.getHobbies()
  }

  getHobbies() {
    this._hobbiesService.getHobbiees().subscribe(data => {
      this.hobbies = [];
      data.forEach((element: any) => {
        this.hobbies.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      //console.log(this.hobbies);
    });
  }
}
