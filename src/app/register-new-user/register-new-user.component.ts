import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router }   from '@angular/router';
import { Location }                 from '@angular/common';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register-new-user',
  templateUrl: './register-new-user.component.html',
  styleUrls: ['./register-new-user.component.css']
})
export class RegisterNewUserComponent implements OnInit {
  items: FirebaseListObservable<any>;
  model;
  authState;
  form;
  currentUser;
  constructor(public af: AngularFireAuth,
              public db: AngularFireDatabase,
              private formBuilder: FormBuilder,
              private router: Router) {
    this.model = { email: "", password: "" };
    this.authState = af.authState;
    this.items = db.list('/users');
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control(''),
      password: this.formBuilder.control(''),
      username: this.formBuilder.control(''),

      fname: this.formBuilder.control(''),
      mi: this.formBuilder.control(''),
      lname: this.formBuilder.control(''),
    });
  }

  public submit(data) {
      this.model = { email: data.email, password: data.password }

      this.af.auth.createUserWithEmailAndPassword(this.model.email, this.model.password).then((success) =>{
          this.currentUser = this.af.auth.currentUser.uid;
          console.log({
            uid: this.currentUser,
            username: data.username,
            email: data.email,

            firstName: data.fname,
            mi: data.mi,
            lastName: data.lname,
          })
      }).then(() =>
        this.items.update(this.currentUser,{
          uid: this.currentUser,
          username: data.username,
          email: data.email,

          firstName: data.fname,
          mi: data.mi,
          lastName: data.lname,
        })
      ).then(()=>{
        this.af.auth.currentUser.sendEmailVerification;
        alert("Sent Email verification");
      }).catch((err) => {
          alert("There was an error: " + err);
      }).then((success) =>{
        this.router.navigate(['/home']);
      });
    }



}
