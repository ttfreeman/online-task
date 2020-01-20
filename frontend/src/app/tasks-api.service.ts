import { Injectable, Inject } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import * as Auth0 from "auth0-web";

import { API_URL } from "../env";
import { Task } from "./task.model";

@Injectable()
export class TasksApiService {
  constructor(private http: HttpClient) {}

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || "Error: Unable to complete request");
  }

  getTasks(): Observable<Task[]> {
    return this.http
      .get<Task[]>(`${API_URL}/tasks`)
      .pipe(catchError(TasksApiService._handleError));
  }

  saveTask(task: Task): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${Auth0.getAccessToken()}`
      })
    };
    return this.http.post(`${API_URL}/tasks`, task, httpOptions);
  }
}
