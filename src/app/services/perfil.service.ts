import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { profile } from '../models/profile';

  @Injectable({
    providedIn: 'root'
  })

  export class PerfilService {

  public perfil = new profile();
  public datos;

  constructor(private firestore: AngularFirestore) {}

  getPerfil(id: string): Observable<any> {
    return this.firestore.collection('profile').doc(id).snapshotChanges();

  }
}
