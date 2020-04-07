/* tslint:disable */
import { TicketElement } from './ticket-element';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageTicketElement {
  content?: Array<TicketElement>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
