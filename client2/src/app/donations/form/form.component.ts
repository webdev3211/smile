import { Component, OnInit } from '@angular/core';
import { DonationsService } from '../../services/donations.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  tagselected;

  messageClass;
  message;
  loadingBlogs = false;
  form;
  logedinuserid;
  commentForm;
  processing = false;
  name;
  blogPosts;
  newComment = [];
  enabledComments = [];
  tags;



  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private categoryService: CategoryService,
    private donationService: DonationsService

  ) {
    this.createNewBlogForm();

  }



  createNewBlogForm() {
    this.form = this.formBuilder.group({
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
      ])],
      tag: new FormControl('', Validators.required)
    })
  }

  getAlltagsList() {
    this.categoryService.showTags().subscribe(data => {
      this.tags = data.data;
    })
  }

  // Enable new blog form
  enableFormNewBlogForm() {
    this.form.get('name').enable(); // Enable title field
    this.form.get('description').enable(); // Enable content field
    this.form.get('contact').enable(); //Enable tag field

    this.form.get('address').enable(); // Enable title field
    this.form.get('tag').enable(); //Enable tag field
  }

  // Disable new blog form
  disableFormNewBlogForm() {
    this.form.get('name').disable(); // disable title field
    this.form.get('description').disable(); // disable content field
    this.form.get('contact').disable(); //disable tag field

    this.form.get('address').disable(); // disable title field
    this.form.get('tag').disable(); //Enable tag field


  }

  ontagSelect($event: any) {
    this.tagselected = this.form.controls["tag"].value;
    console.log(this.tagselected);
  }


  onBlogSubmit() {
    this.processing = true;
    this.disableFormNewBlogForm();

    // Create blog object from form fields
    const blog = {
      category: this.tagselected,
      name: this.form.get('name').value, // Title field
      address: this.form.get('address').value,
      contact: this.form.get('contact').value, // content field
      description: this.form.get('description').value,
      author: this.logedinuserid
    }




    this.donationService.newDonation(blog).subscribe(data => {
      if (!data.success) {
        this.messageClass = 'alert alert-danger',
          this.message = data.message,
          this.processing = false;
        this.enableFormNewBlogForm();
      } else {
        this.messageClass = 'alert alert-success',
          this.message = data.message,
          // this.getAllBlogs();
          //Clear form data after two seconds
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


    this.getAlltagsList();
    this.authService.getProfile().subscribe(profile => {
      this.name = profile.user.name;
      this.logedinuserid = profile.user._id
    });


    // this.getAllBlogs();
  }



}
