/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageOperator } from '../models/page-operator';
import { Operator } from '../models/operator';

/**
 * Operator Controller
 */
@Injectable({
  providedIn: 'root',
})
class OperatorControllerService extends __BaseService {
  static readonly operatorPageUsingGETPath = '/api/operator';
  static readonly saveOperatorUsingPOSTPath = '/api/operator';
  static readonly editOperatorUsingPUTPath = '/api/operator';
  static readonly removeOperatorUsingDELETEPath = '/api/operator';
  static readonly getOperatorUsingGETPath = '/api/operator/id/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * operatorPage
   * @param params The `OperatorControllerService.OperatorPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  operatorPageUsingGETResponse(params: OperatorControllerService.OperatorPageUsingGETParams): __Observable<__StrictHttpResponse<PageOperator>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/operator`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageOperator>;
      })
    );
  }
  /**
   * operatorPage
   * @param params The `OperatorControllerService.OperatorPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  operatorPageUsingGET(params: OperatorControllerService.OperatorPageUsingGETParams): __Observable<PageOperator> {
    return this.operatorPageUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageOperator)
    );
  }

  /**
   * saveOperator
   * @param params The `OperatorControllerService.SaveOperatorUsingPOSTParams` containing the following parameters:
   *
   * - `roleList`: roleList
   *
   * - `operator`: operator
   *
   * @return OK
   */
  saveOperatorUsingPOSTResponse(params: OperatorControllerService.SaveOperatorUsingPOSTParams): __Observable<__StrictHttpResponse<Operator>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.roleList || []).forEach(val => {if (val != null) __params = __params.append('roleList', val.toString())});
    __body = params.operator;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/operator`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Operator>;
      })
    );
  }
  /**
   * saveOperator
   * @param params The `OperatorControllerService.SaveOperatorUsingPOSTParams` containing the following parameters:
   *
   * - `roleList`: roleList
   *
   * - `operator`: operator
   *
   * @return OK
   */
  saveOperatorUsingPOST(params: OperatorControllerService.SaveOperatorUsingPOSTParams): __Observable<Operator> {
    return this.saveOperatorUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as Operator)
    );
  }

  /**
   * editOperator
   * @param operator operator
   * @return OK
   */
  editOperatorUsingPUTResponse(operator: Operator): __Observable<__StrictHttpResponse<Operator>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = operator;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/operator`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Operator>;
      })
    );
  }
  /**
   * editOperator
   * @param operator operator
   * @return OK
   */
  editOperatorUsingPUT(operator: Operator): __Observable<Operator> {
    return this.editOperatorUsingPUTResponse(operator).pipe(
      __map(_r => _r.body as Operator)
    );
  }

  /**
   * removeOperator
   * @param id id
   */
  removeOperatorUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/operator`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * removeOperator
   * @param id id
   */
  removeOperatorUsingDELETE(id: number): __Observable<null> {
    return this.removeOperatorUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * getOperator
   * @param id id
   * @return OK
   */
  getOperatorUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Operator>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/operator/id/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Operator>;
      })
    );
  }
  /**
   * getOperator
   * @param id id
   * @return OK
   */
  getOperatorUsingGET(id: number): __Observable<Operator> {
    return this.getOperatorUsingGETResponse(id).pipe(
      __map(_r => _r.body as Operator)
    );
  }
}

module OperatorControllerService {

  /**
   * Parameters for operatorPageUsingGET
   */
  export interface OperatorPageUsingGETParams {

    /**
     * size
     */
    size: number;

    /**
     * page
     */
    page: number;
  }

  /**
   * Parameters for saveOperatorUsingPOST
   */
  export interface SaveOperatorUsingPOSTParams {

    /**
     * roleList
     */
    roleList: Array<string>;

    /**
     * operator
     */
    operator: Operator;
  }
}

export { OperatorControllerService }
