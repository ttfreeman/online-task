import { Component, OnInit, OnDestroy } from "@angular/core";
import * as Auth0 from "auth0-web";
import { Subscription } from "rxjs";
import { Task } from "../task.model";
import { TasksApiService } from "../tasks-api.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"]
})
export class TasksComponent implements OnInit, OnDestroy {
  tasksListSubs: Subscription;
  tasksList: Task[];
  authenticated = false;

  constructor(private tasksApi: TasksApiService) {}

  getProfile = Auth0.getProfile;

  ngOnInit() {
    this.tasksListSubs = this.tasksApi.getTasks().subscribe(res => {
      this.tasksList = res;
    }, console.error);
    const self = this;
    Auth0.subscribe(authenticated => (self.authenticated = authenticated));
  }

  ngOnDestroy() {
    this.tasksListSubs.unsubscribe();
  }
}
