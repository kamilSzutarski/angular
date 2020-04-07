/* tslint:disable */
import { Operator } from './operator';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageOperator {
  content?: Array<Operator>;
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
