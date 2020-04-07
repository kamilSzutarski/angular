/* tslint:disable */
import { TicketElement } from './ticket-element';
import { Operator } from './operator';
export interface TicketHeader {
  createdBy?: string;
  createdDate?: string;
  elementList?: Array<TicketElement>;
  id?: number;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
  operator?: Operator;
  priority?: number;
  topic?: string;
}
