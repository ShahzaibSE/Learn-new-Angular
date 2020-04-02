import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { localizedString } from '@angular/compiler/src/output/output_ast';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'firebase';
import 'firebase/firestore'

interface UserModel {
  id?: String
  firstname: String;
  lastname: String;
  email: String;
  password: String
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user_collection:AngularFirestoreCollection<UserModel>
  constructor(private afs: AngularFirestore) { 
  }

  login(email_val: String, password_val: String){ // Localstorage supported.
    var user_cred = {email:email_val, password: password_val}
    localStorage.setItem("user_cred",JSON.stringify(user_cred))
  }

  logout(localstorage_cred_key:String){
    localStorage.removeItem(localstorage_cred_key.toString())
  }

  getUserList(){
    return this.afs.collection('users').snapshotChanges()
  }

  createUser(user:UserModel){
    return this.afs.collection('users').add(user)
  }

  updateUser(user: UserModel){
    delete user.id;
    return this.afs.doc('users/' + user.id).update(user);
  }

  deleteUser(user: UserModel){
    return this.afs.doc("users/"+user.id).delete()
  }

}
