import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,provideHttpClient,withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgxBootstrapIconsModule} from 'ngx-bootstrap-icons';
import { allIcons } from 'ngx-bootstrap-icons';
import { BloodbanksComponent } from './bloodbanks/bloodbanks.component';
import { DonorsComponent } from './donors/donors.component';
import { HomeComponent } from './home/home.component';
import { AdminBloodBanksComponent } from './admin-blood-banks/admin-blood-banks.component';
import { FormsModule } from '@angular/forms';
import { AdminDonorsComponent } from './admin-donors/admin-donors.component';
import { LoginComponent } from './login/login.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { UserrequestComponent } from './userrequest/userrequest.component';
import { AdminrequestComponent } from './adminrequest/adminrequest.component';
import { AdminuserComponent } from './adminuser/adminuser.component';

/*const icons = {
  plus
};*/

@NgModule({
  declarations: [
    AppComponent,
    BloodbanksComponent,
    DonorsComponent,
    HomeComponent,
    AdminBloodBanksComponent,
    AdminDonorsComponent,
    LoginComponent,
    AdminhomeComponent,
    UserrequestComponent,
    AdminrequestComponent,
    AdminuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxBootstrapIconsModule.pick(allIcons),
    RouterModule.forRoot([
      {path:'adminBloodBank',component:AdminBloodBanksComponent},
      {path:'adminDonor',component:AdminDonorsComponent},
      {path:'adminRequest',component:AdminrequestComponent},
      {path:'adminUser',component:AdminuserComponent},
      {path:'userBloodBank',component:BloodbanksComponent},
      {path:'userDonor',component:DonorsComponent},
      {path:'userRequest',component:UserrequestComponent},
      {path:'homepage',component:HomeComponent},
      {path:'adminHomepage',component:AdminhomeComponent},
      {path:'login',component:LoginComponent},
      {path:'', redirectTo:'/homepage',pathMatch:'full'}
    ])
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
