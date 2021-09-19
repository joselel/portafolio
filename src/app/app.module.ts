import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TutorialesComponent } from './components/tutoriales/tutoriales.component';
import { FiltersComponent } from './components/tutoriales/filters/filters.component';
import { CreateProjectComponent } from './components/admin/create-project/create-project.component';
import { CreateTutorialComponent } from './components/admin/create-tutorial/create-tutorial.component';
import { DataProfileComponent } from './components/admin/data-profile/data-profile.component';
import { WorkExperienceComponent } from './components/admin/work-experience/work-experience.component';
import { SocialMediaComponent } from './components/admin/social-media/social-media.component';
import { CreateLanguageComponent } from './components/admin/create-language/create-language.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidenavListComponent } from './components/shared/sidenav-list/sidenav-list.component';
import { SkillsComponent } from './components/profile/skills/skills.component';
import { AdminComponent } from './components/admin/admin.component';
import { TutorialComponent } from './components/tutoriales/tutorial/tutorial.component';
import { ProjectComponent } from './components/projects/project/project.component';

//Importaciones de angular material
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';

//Importaciones de angular Firebase
//import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule } from '@angular/fire/storage';

//Importacion de HTTP client
import { HobbiesComponent } from './components/profile/hobbies/hobbies.component';
import { LastProjectsComponent } from './components/profile/last-projects/last-projects.component';

//Importaciones de spinners
import { NgxSpinnerModule } from "ngx-spinner";
import { LastWorkExperienceComponent } from './components/profile/last-work-experience/last-work-experience.component';
import { SliderComponent } from './components/home/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ProjectsComponent,
    ExperienciaComponent,
    ProfileComponent,
    TutorialesComponent,
    FiltersComponent,
    CreateProjectComponent,
    CreateTutorialComponent,
    DataProfileComponent,
    WorkExperienceComponent,
    SocialMediaComponent,
    CreateLanguageComponent,
    HeaderComponent,
    SidenavListComponent,
    SkillsComponent,
    AdminComponent,
    TutorialComponent,
    ProjectComponent,
    HobbiesComponent,
    LastProjectsComponent,
    LastWorkExperienceComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatProgressBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers:
  [
    {
    provide: ErrorStateMatcher,
    useClass: ShowOnDirtyErrorStateMatcher
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
