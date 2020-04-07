/* tslint:disable */
import { Operator } from './operator';
export interface Department {
  fullName?: string;
  id?: number;
  operatorList?: Array<Operator>;
  shortName?: string;
}
