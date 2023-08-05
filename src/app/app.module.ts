import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { NgToastModule } from 'ng-angular-popup' // to be added
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componets/login/login.component';
import { SignupComponent } from './componets/signup/signup.component';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ResetPasswordComponent } from './componets/reset-password/reset-password.component';
import { ListUserComponent } from './componets/user/list-user/list-user.component';
import { UpdateUserComponent } from './componets/user/update-user/update-user.component';
import { ListEquipmentComponent } from './componets/equipment/list-equipment/list-equipment.component';
import { AddEquipmentComponent } from './componets/equipment/add-equipment/add-equipment.component';
import { EquipmentTypeComponent } from './componets/equipment-type/equipment-type.component';
import { HistoryEquipmentComponent } from './componets/history-equipment/history-equipment.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    ResetPasswordComponent,
    ListUserComponent,
    UpdateUserComponent,
    ListEquipmentComponent,
    AddEquipmentComponent,
    EquipmentTypeComponent,
    HistoryEquipmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    FormsModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
