import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { Router } from '@angular/router';
import { VolunteerService } from '../services/volunteer.service';



@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {

  constructor(
    private volunteerService: VolunteerService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,

  ) {
    this.createNewVolunteerForm();
  }



  messageClass;
  message;

  form;
  logedinuserid;
  commentForm;
  processing = false;
  name;






  createNewVolunteerForm() {
    this.form = this.formBuilder.group({

      category: ['', Validators.compose([
        Validators.required,
      ])],
      name: ['', Validators.compose([
        Validators.required,
      ])],
      contact: ['', Validators.compose([
        Validators.required,
      ])],
      description: ['', Validators.compose([
        Validators.required,
      ])],
      address: ['', Validators.compose([
        Validators.required,
      ])]

    })
  }



  // Enable new blog form
  enableFormNewBlogForm() {
    this.form.get('category').enable(); //Enable tag field

    this.form.get('name').enable(); // Enable title field
    this.form.get('description').enable(); // Enable content field
    this.form.get('contact').enable(); //Enable tag field

    this.form.get('address').enable(); // Enable title field
  }

  // Disable new blog form
  disableFormNewBlogForm() {
    this.form.get('category').disable(); //Enable tag field

    this.form.get('name').disable(); // disable title field
    this.form.get('description').disable(); // disable content field
    this.form.get('contact').disable(); //disable tag field

    this.form.get('address').disable(); // disable title field

  }



  onVolunteerFormSubmit() {
    this.processing = true;
    this.disableFormNewBlogForm();

    // Create blog object from form fields
    const blog = {
      category: this.form.get('category').value,
      name: this.form.get('name').value, // Title field
      address: this.form.get('address').value,
      contact: this.form.get('contact').value, // content field
      description: this.form.get('description').value,
      // author: this.logedinuserid
    }



    this.volunteerService.newVolunteer(blog).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger',
          this.message = data.message,
          this.processing = false;
        this.enableFormNewBlogForm();
      } else {

        this.messageClass = 'alert alert-success',
          this.message = data.message,

          setTimeout(() => {
            this.processing = false;
            this.message = false;
            this.form.reset();
            this.router.navigate(['/']);
            this.enableFormNewBlogForm();

          }, 2000);

      }
    });
  }


  // Function to go back to previous page
  goBack() {
    window.location.reload(); // Clear all variable states
  }





  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.name = profile.user.name;
      this.logedinuserid = profile.user._id
    });
  }




}
