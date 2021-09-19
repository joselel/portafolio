import { Component, OnInit } from '@angular/core';
import { WorkExperienceService } from 'src/app/services/work-experience.service';

@Component({
  selector: 'app-last-work-experience',
  templateUrl: './last-work-experience.component.html',
  styleUrls: ['./last-work-experience.component.css']
})
export class LastWorkExperienceComponent implements OnInit {

  // Creamos array con los meses del año
 meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
// Creamos array con los días de la semana
 dias_semana = ['Domingo', 'Lunes', 'martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
// Creamos el objeto fecha instanciándolo con la clase Date

  public works: any[] = [];
  constructor(private _workService:WorkExperienceService) { }

  ngOnInit(): void {
    this.getAllWork();
  }

  getAllWork(){
    this._workService.getExperiencieWork().subscribe(data => {

      data.forEach((element: any) => {
        this.works.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });

    });
    console.log(this.works)
  }

}
