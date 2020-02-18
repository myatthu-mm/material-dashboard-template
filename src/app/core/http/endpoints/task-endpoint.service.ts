import { Injectable } from '@angular/core';
import { ApiEndpointService } from '../services/api-endpoints.service';
import { ACTIONS } from '../endpoints/actions';
import { QueryStringParameters } from '../classes/query-string-parameters';
@Injectable({
    providedIn: 'root'
})
export class TaskEndpointService {
    constructor(private apiEndpointService: ApiEndpointService) { }

    public getTasks(): string {
        return this.apiEndpointService.createUrl(ACTIONS.TASKS);
    } // http://localhost:4000/api/v1/tasks

    public getTasksByTitle(_title: string): string {
        return this.apiEndpointService.createUrlWithQueryParameters(ACTIONS.TASKS,
            (qs: QueryStringParameters) => {
                qs.push('title', _title)
            })
    } // http://localhost:4000/api/v1/tasks?title=morning

    public getTaskById(_id: number): string {
        return this.apiEndpointService.createUrlWithPathVariables(ACTIONS.TASKS, [_id])
    } // http://localhost:4000/api/v1/tasks/2

    public createTask(_title: string, _desc: string): any {
        return { url: this.apiEndpointService.createUrl(ACTIONS.TASKS), body: { title: _title, description: _desc } }
    } // http://localhost:4000/api/v1/tasks (body.title -> _title, body.description -> _desc)

    public updateTask(_id: number, _title: string, _desc: string): any {
        return { url: this.apiEndpointService.createUrlWithPathVariables(ACTIONS.TASKS, [_id]), body: { title: _title, description: _desc } }
    } // http://localhost:4000/api/v1/tasks/3 (body.title -> _title, body.description -> _desc)

    public deleteTask(_id: number): string {
        return this.apiEndpointService.createUrlWithPathVariables(ACTIONS.TASKS, [_id])
    } // http://localhost:4000/api/v1/tasks/3

}
