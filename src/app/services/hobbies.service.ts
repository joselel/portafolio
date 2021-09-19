import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HobbiesService {

  constructor(private firestore: AngularFirestore) { }

  /**Obtener Arreglo de hobbies*/
  getHobbiees(): Observable<any> {
    return this.firestore.collection('hobbies', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

}
 /**
   * agregarEmpleado(empleado: any): Promise<any> {
    return this.firestore.collection('empleados').add(empleado);
  }

  eliminarEmpleado(id: string): Promise<any> {
    return this.firestore.collection('empleados').doc(id).delete();
  }

  getEmpleado(id: string): Observable<any> {
    return this.firestore.collection('empleados').doc(id).snapshotChanges();
  }

  actualizarEmpleado(id: string, data:any): Promise<any> {
    return this.firestore.collection('empleados').doc(id).update(data);
  }
   */
