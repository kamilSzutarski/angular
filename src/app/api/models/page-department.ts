/* tslint:disable */
import { Department } from './department';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageDepartment {
  content?: Array<Department>;
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
