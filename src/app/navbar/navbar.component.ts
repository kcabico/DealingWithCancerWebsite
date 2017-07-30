import { Component, OnInit, ViewChild} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  auth;
  model;

  @ViewChild('autoShownModal') public autoShownModal:ModalDirective;
  public isModalShown:boolean = false;

  public showModal():void {
    this.isModalShown = true;
  }

  public hideModal():void {
    this.autoShownModal.hide();
  }

  public onHidden():void {
    this.isModalShown = false;
  }

  constructor(public af: AngularFireAuth) {
    this.auth = af.auth;
    this.model = { email: "", password: "" };
  }

  ngOnInit() {
  }

  public submit() {
  this.af.auth.signInWithEmailAndPassword(this.model.email, this.model.password).then((success) => {
    this.hideModal();
    //this.router.navigate(['/home']);
    }).catch(alert)
  }


  public logout(){
    this.af.auth.signOut();
  }



}
