import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TasksComponent } from "./tasks/tasks.component";
import { TaskFormComponent } from "./task-form/task-form.component";
import { CallbackComponent } from "./callback/callback.component";

const routes: Routes = [
  { path: "callback", component: CallbackComponent },
  { path: "", component: TasksComponent },
  { path: "new-task", component: TaskFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
