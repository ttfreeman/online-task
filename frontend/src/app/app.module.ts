import * as Auth0 from "auth0-web";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule
} from "@angular/material";

import { AppComponent } from "./app.component";
import { TasksApiService } from "./tasks-api.service";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { CallbackComponent } from "./callback/callback.component";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskFormComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [TasksApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    Auth0.configure({
      domain: "dev--1e3ghcj.auth0.com",
      audience: "https://online-exam.digituz.com.br",
      clientID: "om7cO5gwGVAghGKA6Ccpr8TIBohgQ2TR",
      redirectUri: "http://localhost:4200/callback",
      scope: "openid profile manage:tasks"
    });
  }
}
