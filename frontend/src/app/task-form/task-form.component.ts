import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TasksApiService } from "../tasks-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-task-form",
  templateUrl: "./task-form.component.html",
  styleUrls: ["./task-form.component.css"]
})
export class TaskFormComponent {
  task = {
    title: "",
    description: ""
  };

  constructor(private tasksApi: TasksApiService, private router: Router) {}

  updateTitle(event: any) {
    this.task.title = event.target.value;
  }

  updateDescription(event: any) {
    this.task.description = event.target.value;
  }

  saveTask() {
    this.tasksApi.saveTask(this.task).subscribe(
      () => this.router.navigate(["/"]),
      error => alert(error.message)
    );
  }

  ngOnInit() {}
}
