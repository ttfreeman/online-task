import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExamsComponent } from "./exams/exams.component";
import { ExamFormComponent } from "./exam-form/exam-form.component";
import { CallbackComponent } from "./callback/callback.component";

const routes: Routes = [
  { path: "callback", component: CallbackComponent },
  { path: "", component: ExamsComponent },
  { path: "new-exam", component: ExamFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
