import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';
import { NgxSpinnerService } from "ngx-spinner";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nombre:string |null;
  id: string|null;

  public perfil = {
    first_name:'',
    second_name:'',
    first_lastname:'',
    second_lastname:'',
    about_me: '',
    photo_profile:'',
  };

  constructor(
    private _perfilService: PerfilService,
    private spinner: NgxSpinnerService) {  }

  ngOnInit(): void {

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      this.getDataProfile();
      /** spinner ends after 0.6 seconds */
      this.spinner.hide();
    },900);

  }

  getDataProfile(){
    this.id = 'y4CKkNFqYuwAFcuNWiji';
    this._perfilService.getPerfil(this.id).subscribe(data =>{
      //console.log(data.payload.data()['first_name']);
      this.perfil = data.payload.data();
     // console.log(this.perfil);
      this.nombre = this.perfil.first_name + ' '+
                    this.perfil.second_name + ' '+
                    this.perfil.first_lastname + ' '+
                    this.perfil.second_lastname;

    });
  }

  showmodal(){
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
}
