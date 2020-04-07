/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageTicketHeader } from '../models/page-ticket-header';
import { TicketHeader } from '../models/ticket-header';

/**
 * Ticket Header Controller
 */
@Injectable({
  providedIn: 'root',
})
class TicketHeaderControllerService extends __BaseService {
  static readonly ticketHeaderPageUsingGETPath = '/api/ticketHeader';
  static readonly saveTicketHeaderUsingPOSTPath = '/api/ticketHeader';
  static readonly editTicketHeaderUsingPUT1Path = '/api/ticketHeader';
  static readonly removeTicketHeaderUsingDELETEPath = '/api/ticketHeader';
  static readonly getTicketHeaderUsingGETPath = '/api/ticketHeader/id/{id}';
  static readonly findByOperatorNameContainingUsingGETPath = '/api/ticketHeader/operator/{name}';
  static readonly findByPriorityContainingUsingGETPath = '/api/ticketHeader/priority/{priority}/{page}/{size}';
  static readonly findByTopicContainingUsingGETPath = '/api/ticketHeader/topic/{topic}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * ticketHeaderPage
   * @param params The `TicketHeaderControllerService.TicketHeaderPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  ticketHeaderPageUsingGETResponse(params: TicketHeaderControllerService.TicketHeaderPageUsingGETParams): __Observable<__StrictHttpResponse<PageTicketHeader>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ticketHeader`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageTicketHeader>;
      })
    );
  }
  /**
   * ticketHeaderPage
   * @param params The `TicketHeaderControllerService.TicketHeaderPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  ticketHeaderPageUsingGET(params: TicketHeaderControllerService.TicketHeaderPageUsingGETParams): __Observable<PageTicketHeader> {
    return this.ticketHeaderPageUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageTicketHeader)
    );
  }

  /**
   * saveTicketHeader
   * @param ticketHeader ticketHeader
   * @return OK
   */
  saveTicketHeaderUsingPOSTResponse(ticketHeader: TicketHeader): __Observable<__StrictHttpResponse<TicketHeader>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ticketHeader;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/ticketHeader`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TicketHeader>;
      })
    );
  }
  /**
   * saveTicketHeader
   * @param ticketHeader ticketHeader
   * @return OK
   */
  saveTicketHeaderUsingPOST(ticketHeader: TicketHeader): __Observable<TicketHeader> {
    return this.saveTicketHeaderUsingPOSTResponse(ticketHeader).pipe(
      __map(_r => _r.body as TicketHeader)
    );
  }

  /**
   * editTicketHeader
   * @param ticketHeader ticketHeader
   * @return OK
   */
  editTicketHeaderUsingPUT1Response(ticketHeader: TicketHeader): __Observable<__StrictHttpResponse<TicketHeader>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ticketHeader;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/ticketHeader`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TicketHeader>;
      })
    );
  }
  /**
   * editTicketHeader
   * @param ticketHeader ticketHeader
   * @return OK
   */
  editTicketHeaderUsingPUT1(ticketHeader: TicketHeader): __Observable<TicketHeader> {
    return this.editTicketHeaderUsingPUT1Response(ticketHeader).pipe(
      __map(_r => _r.body as TicketHeader)
    );
  }

  /**
   * removeTicketHeader
   * @param id id
   */
  removeTicketHeaderUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/ticketHeader`,
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
   * removeTicketHeader
   * @param id id
   */
  removeTicketHeaderUsingDELETE(id: number): __Observable<null> {
    return this.removeTicketHeaderUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * getTicketHeader
   * @param id id
   * @return OK
   */
  getTicketHeaderUsingGETResponse(id: number): __Observable<__StrictHttpResponse<TicketHeader>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ticketHeader/id/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TicketHeader>;
      })
    );
  }
  /**
   * getTicketHeader
   * @param id id
   * @return OK
   */
  getTicketHeaderUsingGET(id: number): __Observable<TicketHeader> {
    return this.getTicketHeaderUsingGETResponse(id).pipe(
      __map(_r => _r.body as TicketHeader)
    );
  }

  /**
   * findByOperatorNameContaining
   * @param params The `TicketHeaderControllerService.FindByOperatorNameContainingUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `name`: name
   *
   * @return OK
   */
  findByOperatorNameContainingUsingGETResponse(params: TicketHeaderControllerService.FindByOperatorNameContainingUsingGETParams): __Observable<__StrictHttpResponse<PageTicketHeader>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ticketHeader/operator/${encodeURIComponent(params.name)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageTicketHeader>;
      })
    );
  }
  /**
   * findByOperatorNameContaining
   * @param params The `TicketHeaderControllerService.FindByOperatorNameContainingUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * - `name`: name
   *
   * @return OK
   */
  findByOperatorNameContainingUsingGET(params: TicketHeaderControllerService.FindByOperatorNameContainingUsingGETParams): __Observable<PageTicketHeader> {
    return this.findByOperatorNameContainingUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageTicketHeader)
    );
  }

  /**
   * findByPriorityContaining
   * @param params The `TicketHeaderControllerService.FindByPriorityContainingUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `priority`: priority
   *
   * - `page`: page
   *
   * @return OK
   */
  findByPriorityContainingUsingGETResponse(params: TicketHeaderControllerService.FindByPriorityContainingUsingGETParams): __Observable<__StrictHttpResponse<PageTicketHeader>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;



    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ticketHeader/priority/${encodeURIComponent(params.priority)}/${encodeURIComponent(params.page)}/${encodeURIComponent(params.size)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageTicketHeader>;
      })
    );
  }
  /**
   * findByPriorityContaining
   * @param params The `TicketHeaderControllerService.FindByPriorityContainingUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `priority`: priority
   *
   * - `page`: page
   *
   * @return OK
   */
  findByPriorityContainingUsingGET(params: TicketHeaderControllerService.FindByPriorityContainingUsingGETParams): __Observable<PageTicketHeader> {
    return this.findByPriorityContainingUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageTicketHeader)
    );
  }

  /**
   * findByTopicContaining
   * @param params The `TicketHeaderControllerService.FindByTopicContainingUsingGETParams` containing the following parameters:
   *
   * - `topic`: topic
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findByTopicContainingUsingGETResponse(params: TicketHeaderControllerService.FindByTopicContainingUsingGETParams): __Observable<__StrictHttpResponse<PageTicketHeader>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ticketHeader/topic/${encodeURIComponent(params.topic)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageTicketHeader>;
      })
    );
  }
  /**
   * findByTopicContaining
   * @param params The `TicketHeaderControllerService.FindByTopicContainingUsingGETParams` containing the following parameters:
   *
   * - `topic`: topic
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  findByTopicContainingUsingGET(params: TicketHeaderControllerService.FindByTopicContainingUsingGETParams): __Observable<PageTicketHeader> {
    return this.findByTopicContainingUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageTicketHeader)
    );
  }
}

module TicketHeaderControllerService {

  /**
   * Parameters for ticketHeaderPageUsingGET
   */
  export interface TicketHeaderPageUsingGETParams {

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
   * Parameters for findByOperatorNameContainingUsingGET
   */
  export interface FindByOperatorNameContainingUsingGETParams {

    /**
     * size
     */
    size: number;

    /**
     * page
     */
    page: number;

    /**
     * name
     */
    name: string;
  }

  /**
   * Parameters for findByPriorityContainingUsingGET
   */
  export interface FindByPriorityContainingUsingGETParams {

    /**
     * size
     */
    size: number;

    /**
     * priority
     */
    priority: number;

    /**
     * page
     */
    page: number;
  }

  /**
   * Parameters for findByTopicContainingUsingGET
   */
  export interface FindByTopicContainingUsingGETParams {

    /**
     * topic
     */
    topic: string;

    /**
     * size
     */
    size: number;

    /**
     * page
     */
    page: number;
  }
}

export { TicketHeaderControllerService }
