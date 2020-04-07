/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageDepartment } from '../models/page-department';
import { Department } from '../models/department';

/**
 * Department Controller
 */
@Injectable({
  providedIn: 'root',
})
class DepartmentControllerService extends __BaseService {
  static readonly departmentPageUsingGETPath = '/api/department';
  static readonly saveDepartmentUsingPOSTPath = '/api/department';
  static readonly editDepartmentUsingPUTPath = '/api/department';
  static readonly removeDepartmentUsingDELETEPath = '/api/department';
  static readonly findByFullNameContainingUsingGETPath = '/api/department/fullName/{fullName}';
  static readonly getByIdUsingGETPath = '/api/department/id/{id}';
  static readonly findByShortNameContainingUsingGETPath = '/api/department/shortName/{shortName}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * departmentPage
   * @param params The `DepartmentControllerService.DepartmentPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  departmentPageUsingGETResponse(params: DepartmentControllerService.DepartmentPageUsingGETParams): __Observable<__StrictHttpResponse<PageDepartment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/department`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageDepartment>;
      })
    );
  }
  /**
   * departmentPage
   * @param params The `DepartmentControllerService.DepartmentPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  departmentPageUsingGET(params: DepartmentControllerService.DepartmentPageUsingGETParams): __Observable<PageDepartment> {
    return this.departmentPageUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageDepartment)
    );
  }

  /**
   * saveDepartment
   * @param department department
   * @return OK
   */
  saveDepartmentUsingPOSTResponse(department: Department): __Observable<__StrictHttpResponse<Department>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = department;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/department`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Department>;
      })
    );
  }
  /**
   * saveDepartment
   * @param department department
   * @return OK
   */
  saveDepartmentUsingPOST(department: Department): __Observable<Department> {
    return this.saveDepartmentUsingPOSTResponse(department).pipe(
      __map(_r => _r.body as Department)
    );
  }

  /**
   * editDepartment
   * @param params The `DepartmentControllerService.EditDepartmentUsingPUTParams` containing the following parameters:
   *
   * - `shortName`:
   *
   * - `operatorList[0].ticketHeaders[0].topic`:
   *
   * - `operatorList[0].ticketHeaders[0].priority`:
   *
   * - `operatorList[0].ticketHeaders[0].id`:
   *
   * - `operatorList[0].ticketHeaders[0].elementList[0].id`:
   *
   * - `operatorList[0].ticketHeaders[0].elementList[0].content`:
   *
   * - `operatorList[0].surname`:
   *
   * - `operatorList[0].roles[0].name`:
   *
   * - `operatorList[0].roles[0].id`:
   *
   * - `operatorList[0].password`:
   *
   * - `operatorList[0].name`:
   *
   * - `operatorList[0].login`:
   *
   * - `operatorList[0].id`:
   *
   * - `operatorList[0].department.shortName`:
   *
   * - `operatorList[0].department.id`:
   *
   * - `operatorList[0].department.fullName`:
   *
   * - `operatorList[0].company`:
   *
   * - `id`:
   *
   * - `fullName`:
   *
   * @return OK
   */
  editDepartmentUsingPUTResponse(params: DepartmentControllerService.EditDepartmentUsingPUTParams): __Observable<__StrictHttpResponse<Department>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.shortName != null) __params = __params.set('shortName', params.shortName.toString());
    if (params.operatorList0TicketHeaders0Topic != null) __params = __params.set('operatorList[0].ticketHeaders[0].topic', params.operatorList0TicketHeaders0Topic.toString());
    if (params.operatorList0TicketHeaders0Priority != null) __params = __params.set('operatorList[0].ticketHeaders[0].priority', params.operatorList0TicketHeaders0Priority.toString());
    if (params.operatorList0TicketHeaders0Id != null) __params = __params.set('operatorList[0].ticketHeaders[0].id', params.operatorList0TicketHeaders0Id.toString());
    if (params.operatorList0TicketHeaders0ElementList0Id != null) __params = __params.set('operatorList[0].ticketHeaders[0].elementList[0].id', params.operatorList0TicketHeaders0ElementList0Id.toString());
    if (params.operatorList0TicketHeaders0ElementList0Content != null) __params = __params.set('operatorList[0].ticketHeaders[0].elementList[0].content', params.operatorList0TicketHeaders0ElementList0Content.toString());
    if (params.operatorList0Surname != null) __params = __params.set('operatorList[0].surname', params.operatorList0Surname.toString());
    if (params.operatorList0Roles0Name != null) __params = __params.set('operatorList[0].roles[0].name', params.operatorList0Roles0Name.toString());
    if (params.operatorList0Roles0Id != null) __params = __params.set('operatorList[0].roles[0].id', params.operatorList0Roles0Id.toString());
    if (params.operatorList0Password != null) __params = __params.set('operatorList[0].password', params.operatorList0Password.toString());
    if (params.operatorList0Name != null) __params = __params.set('operatorList[0].name', params.operatorList0Name.toString());
    if (params.operatorList0Login != null) __params = __params.set('operatorList[0].login', params.operatorList0Login.toString());
    if (params.operatorList0Id != null) __params = __params.set('operatorList[0].id', params.operatorList0Id.toString());
    if (params.operatorList0DepartmentShortName != null) __params = __params.set('operatorList[0].department.shortName', params.operatorList0DepartmentShortName.toString());
    if (params.operatorList0DepartmentId != null) __params = __params.set('operatorList[0].department.id', params.operatorList0DepartmentId.toString());
    if (params.operatorList0DepartmentFullName != null) __params = __params.set('operatorList[0].department.fullName', params.operatorList0DepartmentFullName.toString());
    if (params.operatorList0Company != null) __params = __params.set('operatorList[0].company', params.operatorList0Company.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
    if (params.fullName != null) __params = __params.set('fullName', params.fullName.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/department`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Department>;
      })
    );
  }
  /**
   * editDepartment
   * @param params The `DepartmentControllerService.EditDepartmentUsingPUTParams` containing the following parameters:
   *
   * - `shortName`:
   *
   * - `operatorList[0].ticketHeaders[0].topic`:
   *
   * - `operatorList[0].ticketHeaders[0].priority`:
   *
   * - `operatorList[0].ticketHeaders[0].id`:
   *
   * - `operatorList[0].ticketHeaders[0].elementList[0].id`:
   *
   * - `operatorList[0].ticketHeaders[0].elementList[0].content`:
   *
   * - `operatorList[0].surname`:
   *
   * - `operatorList[0].roles[0].name`:
   *
   * - `operatorList[0].roles[0].id`:
   *
   * - `operatorList[0].password`:
   *
   * - `operatorList[0].name`:
   *
   * - `operatorList[0].login`:
   *
   * - `operatorList[0].id`:
   *
   * - `operatorList[0].department.shortName`:
   *
   * - `operatorList[0].department.id`:
   *
   * - `operatorList[0].department.fullName`:
   *
   * - `operatorList[0].company`:
   *
   * - `id`:
   *
   * - `fullName`:
   *
   * @return OK
   */
  editDepartmentUsingPUT(params: DepartmentControllerService.EditDepartmentUsingPUTParams): __Observable<Department> {
    return this.editDepartmentUsingPUTResponse(params).pipe(
      __map(_r => _r.body as Department)
    );
  }

  /**
   * removeDepartment
   * @param id id
   */
  removeDepartmentUsingDELETEResponse(id?: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/department`,
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
   * removeDepartment
   * @param id id
   */
  removeDepartmentUsingDELETE(id?: number): __Observable<null> {
    return this.removeDepartmentUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * findByFullNameContaining
   * @param params The `DepartmentControllerService.FindByFullNameContainingUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `fullName`: fullName
   *
   * @return OK
   */
  findByFullNameContainingUsingGETResponse(params: DepartmentControllerService.FindByFullNameContainingUsingGETParams): __Observable<__StrictHttpResponse<PageDepartment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/department/fullName/${encodeURIComponent(params.fullName)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageDepartment>;
      })
    );
  }
  /**
   * findByFullNameContaining
   * @param params The `DepartmentControllerService.FindByFullNameContainingUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `fullName`: fullName
   *
   * @return OK
   */
  findByFullNameContainingUsingGET(params: DepartmentControllerService.FindByFullNameContainingUsingGETParams): __Observable<PageDepartment> {
    return this.findByFullNameContainingUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageDepartment)
    );
  }

  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Department>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/department/id/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Department>;
      })
    );
  }
  /**
   * getById
   * @param id id
   * @return OK
   */
  getByIdUsingGET(id: number): __Observable<Department> {
    return this.getByIdUsingGETResponse(id).pipe(
      __map(_r => _r.body as Department)
    );
  }

  /**
   * findByShortNameContaining
   * @param params The `DepartmentControllerService.FindByShortNameContainingUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `shortName`: shortName
   *
   * - `page`: page
   *
   * @return OK
   */
  findByShortNameContainingUsingGETResponse(params: DepartmentControllerService.FindByShortNameContainingUsingGETParams): __Observable<__StrictHttpResponse<PageDepartment>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());

    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/department/shortName/${encodeURIComponent(params.shortName)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageDepartment>;
      })
    );
  }
  /**
   * findByShortNameContaining
   * @param params The `DepartmentControllerService.FindByShortNameContainingUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `shortName`: shortName
   *
   * - `page`: page
   *
   * @return OK
   */
  findByShortNameContainingUsingGET(params: DepartmentControllerService.FindByShortNameContainingUsingGETParams): __Observable<PageDepartment> {
    return this.findByShortNameContainingUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageDepartment)
    );
  }
}

module DepartmentControllerService {

  /**
   * Parameters for departmentPageUsingGET
   */
  export interface DepartmentPageUsingGETParams {

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
   * Parameters for editDepartmentUsingPUT
   */
  export interface EditDepartmentUsingPUTParams {
    shortName?: string;
    operatorList0TicketHeaders0Topic?: string;
    operatorList0TicketHeaders0Priority?: number;
    operatorList0TicketHeaders0Id?: number;
    operatorList0TicketHeaders0ElementList0Id?: number;
    operatorList0TicketHeaders0ElementList0Content?: string;
    operatorList0Surname?: string;
    operatorList0Roles0Name?: string;
    operatorList0Roles0Id?: number;
    operatorList0Password?: string;
    operatorList0Name?: string;
    operatorList0Login?: string;
    operatorList0Id?: number;
    operatorList0DepartmentShortName?: string;
    operatorList0DepartmentId?: number;
    operatorList0DepartmentFullName?: string;
    operatorList0Company?: string;
    id?: number;
    fullName?: string;
  }

  /**
   * Parameters for findByFullNameContainingUsingGET
   */
  export interface FindByFullNameContainingUsingGETParams {

    /**
     * size
     */
    size: number;

    /**
     * page
     */
    page: number;

    /**
     * fullName
     */
    fullName: string;
  }

  /**
   * Parameters for findByShortNameContainingUsingGET
   */
  export interface FindByShortNameContainingUsingGETParams {

    /**
     * size
     */
    size: number;

    /**
     * shortName
     */
    shortName: string;

    /**
     * page
     */
    page: number;
  }
}

export { DepartmentControllerService }
