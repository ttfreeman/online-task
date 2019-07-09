import * as Auth0 from "auth0-web";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule, MatButtonModule } from "@angular/material";

import { AppComponent } from "./app.component";
import { ExamsApiService } from "./exams-api.service";
import { ExamsComponent } from "./exams/exams.component";
import { ExamFormComponent } from "./exam-form/exam-form.component";
import { CallbackComponent } from "./callback/callback.component";

@NgModule({
  declarations: [
    AppComponent,
    ExamsComponent,
    ExamFormComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [ExamsApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    Auth0.configure({
      domain: "dev--1e3ghcj.auth0.com",
      audience: "https://online-exam.digituz.com.br",
      clientID: "om7cO5gwGVAghGKA6Ccpr8TIBohgQ2TR",
      redirectUri: "http://localhost:4200/callback",
      scope: "openid profile manage:exams"
    });
  }
}
