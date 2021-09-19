import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];

  constructor(private _projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getProjects()
  }

  getProjects() {
    this._projectsService.getProjects().subscribe(data => {
      this.projects = [];
      data.forEach((element: any) => {
        this.projects.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.projects);
    });
  }
}
