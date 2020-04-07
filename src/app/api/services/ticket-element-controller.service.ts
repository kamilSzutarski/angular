/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PageTicketElement } from '../models/page-ticket-element';
import { TicketElement } from '../models/ticket-element';

/**
 * Ticket Element Controller
 */
@Injectable({
  providedIn: 'root',
})
class TicketElementControllerService extends __BaseService {
  static readonly ticketElementPageUsingGETPath = '/api/ticketElement';
  static readonly saveTicketElementUsingPOSTPath = '/api/ticketElement';
  static readonly editTicketHeaderUsingPUTPath = '/api/ticketElement';
  static readonly removeTicketElementUsingDELETEPath = '/api/ticketElement';
  static readonly getTicketElementUsingGETPath = '/api/ticketElement/id/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * ticketElementPage
   * @param params The `TicketElementControllerService.TicketElementPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  ticketElementPageUsingGETResponse(params: TicketElementControllerService.TicketElementPageUsingGETParams): __Observable<__StrictHttpResponse<PageTicketElement>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.size != null) __params = __params.set('size', params.size.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ticketElement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PageTicketElement>;
      })
    );
  }
  /**
   * ticketElementPage
   * @param params The `TicketElementControllerService.TicketElementPageUsingGETParams` containing the following parameters:
   *
   * - `size`: size
   *
   * - `page`: page
   *
   * @return OK
   */
  ticketElementPageUsingGET(params: TicketElementControllerService.TicketElementPageUsingGETParams): __Observable<PageTicketElement> {
    return this.ticketElementPageUsingGETResponse(params).pipe(
      __map(_r => _r.body as PageTicketElement)
    );
  }

  /**
   * saveTicketElement
   * @param ticketElement ticketElement
   * @return OK
   */
  saveTicketElementUsingPOSTResponse(ticketElement: TicketElement): __Observable<__StrictHttpResponse<TicketElement>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ticketElement;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/ticketElement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TicketElement>;
      })
    );
  }
  /**
   * saveTicketElement
   * @param ticketElement ticketElement
   * @return OK
   */
  saveTicketElementUsingPOST(ticketElement: TicketElement): __Observable<TicketElement> {
    return this.saveTicketElementUsingPOSTResponse(ticketElement).pipe(
      __map(_r => _r.body as TicketElement)
    );
  }

  /**
   * editTicketHeader
   * @param ticketElement ticketElement
   * @return OK
   */
  editTicketHeaderUsingPUTResponse(ticketElement: TicketElement): __Observable<__StrictHttpResponse<TicketElement>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = ticketElement;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/ticketElement`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TicketElement>;
      })
    );
  }
  /**
   * editTicketHeader
   * @param ticketElement ticketElement
   * @return OK
   */
  editTicketHeaderUsingPUT(ticketElement: TicketElement): __Observable<TicketElement> {
    return this.editTicketHeaderUsingPUTResponse(ticketElement).pipe(
      __map(_r => _r.body as TicketElement)
    );
  }

  /**
   * removeTicketElement
   * @param id id
   */
  removeTicketElementUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (id != null) __params = __params.set('id', id.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/ticketElement`,
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
   * removeTicketElement
   * @param id id
   */
  removeTicketElementUsingDELETE(id: number): __Observable<null> {
    return this.removeTicketElementUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * getTicketElement
   * @param id id
   * @return OK
   */
  getTicketElementUsingGETResponse(id: number): __Observable<__StrictHttpResponse<TicketElement>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/ticketElement/id/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TicketElement>;
      })
    );
  }
  /**
   * getTicketElement
   * @param id id
   * @return OK
   */
  getTicketElementUsingGET(id: number): __Observable<TicketElement> {
    return this.getTicketElementUsingGETResponse(id).pipe(
      __map(_r => _r.body as TicketElement)
    );
  }
}

module TicketElementControllerService {

  /**
   * Parameters for ticketElementPageUsingGET
   */
  export interface TicketElementPageUsingGETParams {

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

export { TicketElementControllerService }
