import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { HobbiesComponent } from './components/profile/hobbies/hobbies.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TutorialComponent } from './components/tutoriales/tutorial/tutorial.component';
import { TutorialesComponent } from './components/tutoriales/tutoriales.component';


const routes: Routes = [
  {path:"inicio",component: HomeComponent},
  {path:"iniciar-sesion",component: LoginComponent},
  {path:"proyectos",component: ProjectsComponent},
  {path:"experiencia-laboral",component: ExperienciaComponent},
  {path:"perfil",component: ProfileComponent},
  {path:"tutoriales",component: TutorialesComponent},
  {path:"admin",component: AdminComponent},
  {path:"tutorial",component: TutorialComponent},
  {path:"proyecto/:id",component: ProjectComponent},
  {path:"hobbies",component: HobbiesComponent},
  {path:"**",redirectTo:"inicio",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
