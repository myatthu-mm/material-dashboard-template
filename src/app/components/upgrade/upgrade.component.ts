import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../../core/http/services/api-http.service';
import { TaskEndpointService } from '../../core/http/endpoints/task-endpoint.service';
@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.scss']
})
export class UpgradeComponent implements OnInit {
  constructor(
    private apiHttpService: ApiHttpService,
    private taskEndpoint: TaskEndpointService
  ) { }

  ngOnInit() {
    console.log('API Testing Component');

  }

  getTasks(): void {
    this.apiHttpService
      .get(this.taskEndpoint.getTasks())
      .subscribe(data => {
        console.log('fetching data:', data);
      })
  }

  getTasksByTitle(): void { // query data
    this.apiHttpService
      .get(this.taskEndpoint.getTasksByTitle('morning'))
      .subscribe(data => {
        console.log('fetching filtered data:', data);
      })
  }

  getTaskByID(): void { // path variable
    this.apiHttpService
      .get(this.taskEndpoint.getTaskById(1))
      .subscribe(data => {
        console.log('fetching unique data:', data);
      })
  }

  createTask(): void {
    this.apiHttpService
      .post(this.taskEndpoint.createTask('morning', 'jogging'))
      .subscribe(data => {
        console.log('creating data:', data);
      })
  }

  updateTask(): void {
    this.apiHttpService
      .post(this.taskEndpoint.updateTask(1, 'morning', 'meditation'))
      .subscribe(data => {
        console.log('updating data', data);
      })
  }

  deleteTask(): void {
    this.apiHttpService
      .delete(this.taskEndpoint.deleteTask(1))
      .subscribe(data => {
        console.log('deleting data', data);
      })
  }

}
