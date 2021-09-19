import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private firestore: AngularFirestore) { }

   /**Obtener Arreglo de hobbies*/
   getProjects(): Observable<any> {
    return this.firestore.collection('projects', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

   getLatestProjects(): Observable<any>{
    return this.firestore.collection('projects', ref => ref.orderBy('fechaCreacion', 'asc').limit(4)).snapshotChanges();
   }

   getProject(id: string): Observable<any> {
    return this.firestore.collection('projects').doc(id).snapshotChanges();
  }
}
