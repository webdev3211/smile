import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { FlashMessagesModule } from 'angular2-flash-messages';


import { AppComponent } from './app.component';


import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotAuthGuard } from './guards/not-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/user.service';
import { DonationsComponent } from './components/donations/donations.component';
import { MoneyComponent } from './components/donations/money/money.component';
import { ClothesComponent } from './components/donations/clothes/clothes.component';
import { FoodComponent } from './components/donations/food/food.component';
import { BooksComponent } from './components/donations/books/books.component';
import { ElectronicsComponent } from './components/donations/electronics/electronics.component';
import { OthersComponent } from './components/donations/others/others.component';
import { FormComponent } from './donations/form/form.component';
import { DonationsService } from './services/donations.service';
import { CategoryService } from './services/category.service';
import { MovementsComponent } from './movements/movements.component';
import { MovementsService } from './services/movements.service';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { VolunteerformComponent } from './volunteer/volunteerform/volunteerform.component';
import { VolunteerService } from './services/volunteer.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    ProfileComponent,
    DonationsComponent,
    MoneyComponent,
    ClothesComponent,
    FoodComponent,
    BooksComponent,
    ElectronicsComponent,
    OthersComponent,
    FormComponent,
    MovementsComponent,
    VolunteerComponent,
    VolunteerformComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [AuthService, AuthGuard, NotAuthGuard, UsersService, DonationsService, CategoryService, MovementsService, VolunteerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
