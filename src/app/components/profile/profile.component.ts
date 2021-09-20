import { Component, OnInit } from '@angular/core';
import { PerfilService } from 'src/app/services/perfil.service';
import { profile } from 'src/app/models/profile';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  
  id: string|null = 'y4CKkNFqYuwAFcuNWiji';
  perfil = new profile();
  load: boolean;

  constructor(private _perfilService: PerfilService) {
    this.load = true;
  }

  ngOnInit(): void{
    this.getDataProfile();
  }

  getDataProfile(){
      this._perfilService.getPerfil(this.id)
      .subscribe(data => {
        this.perfil = data.payload.data()
        this.load = false});
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