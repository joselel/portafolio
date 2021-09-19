import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(private firestore: AngularFirestore) { }

  /**Obtener Arreglo de hobbies*/
  getExperiencieWork(): Observable<any> {
    return this.firestore.collection('work_experience', ref => ref.orderBy('fechaFin', 'desc')).snapshotChanges();
  }

   getLatestWorkExperience(): Observable<any>{
    return this.firestore.collection('work_experience', ref => ref.orderBy('fechaFin', 'desc').limit(4)).snapshotChanges();
   }
}
