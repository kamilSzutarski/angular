/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Role } from '../models/role';

/**
 * Role Controller
 */
@Injectable({
  providedIn: 'root',
})
class RoleControllerService extends __BaseService {
  static readonly getRolesUsingGETPath = '/api/role/list';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * getRoles
   * @return OK
   */
  getRolesUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Role>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/role/list`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Role>>;
      })
    );
  }
  /**
   * getRoles
   * @return OK
   */
  getRolesUsingGET(): __Observable<Array<Role>> {
    return this.getRolesUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Role>)
    );
  }
}

module RoleControllerService {
}

export { RoleControllerService }
