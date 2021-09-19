import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  public id: any;
  public project = {
    name_project: '',
    description_project:'',
    fechaCrecion:'',
    languages: '',
    link_github:'',
    link_video:'',
    photo:''

  };

  constructor(
    private serviceProjects: ProjectsService,
    private rutaActiva: ActivatedRoute) {
      this.id = this.rutaActiva.snapshot.paramMap.get('id');
    }

  ngOnInit(): void {
    this.getProject();
  }

  getProject(){
    this.serviceProjects.getProject(this.id).subscribe(data => {
      this.project = data.payload.data();
      //console.log(this.project);
    });
  }


}
