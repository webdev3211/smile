import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {


  socket;
  searchingfor = '';
  searchResults;
  sForm;
  value = '';
  show = false;
  notifications;
  userid;
  notificationlist;
  noofunreadnotiofications;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private flashMessage: FlashMessagesService,
    public authService: AuthService,
    private router: Router,

  ) {


  }





  onLogoutClick() {
    this.authService.logout();
    this.flashMessage.show('You are logged out', {
      cssClass: 'alert-info',
      timeout: 1000
    });
    this.router.navigate(['/']);
    return false;
  }



  ngOnInit() {

    this.authService.getProfile().subscribe(profile => {
      this.userid = profile.user._id;
    });

  }


}