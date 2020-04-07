/* tslint:disable */
import { TicketHeader } from './ticket-header';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageTicketHeader {
  content?: Array<TicketHeader>;
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
