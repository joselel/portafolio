import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-last-projects',
  templateUrl: './last-projects.component.html',
  styleUrls: ['./last-projects.component.css']
})
export class LastProjectsComponent implements OnInit {

  projects: any[] = [];
  constructor(private _projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getLastProjects();
  }

  getLastProjects(){
    this._projectsService.getLatestProjects().subscribe(data => {
      this.projects = [];
      data.forEach((element: any) => {
        this.projects.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      //console.log(this.projects);
    });
  }

}
