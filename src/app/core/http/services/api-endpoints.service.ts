import { Injectable } from '@angular/core';
import { UrlBuilder } from '../classes/url-builder';
import { QueryStringParameters } from '../classes/query-string-parameters';
import { environment } from '../../../../environments/environment.prod';
import { MOCK_ENV } from '../../../../environments/environment.mock';
@Injectable({
  providedIn: 'root'
})
export class ApiEndpointService {
  constructor() {}

  /** URL Creator */
  public createUrl(action: string, isMockAPI: boolean = false): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      isMockAPI ? MOCK_ENV.API_ENDPOINT : environment.API_ENDPOINT,
      action
    );
    return urlBuilder.toString();
  }

  /** URL WITH QUERY PARAMS */

  private createUrlWithQueryParameters(
    action: string,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      environment.API_ENDPOINT,
      action
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  /** URL WITH PATH VARIABLES */

  private createUrlWithPathVariables(
    action: string,
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = '';
    // Push extra path variables
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(
          pathVariable.toString()
        )}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      environment.API_ENDPOINT,
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }
}
