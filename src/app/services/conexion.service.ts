import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Item { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private afs: AngularFirestore) { 
    this.itemsCollection = afs.collection<Item>('contacts');
    this.items = this.itemsCollection.valueChanges();
  }

  listarItems() {
    return this.items;
  }

}
