/* tslint:disable */
import { Department } from './department';
import { Role } from './role';
import { TicketHeader } from './ticket-header';
export interface Operator {
  company?: string;
  createdBy?: string;
  createdDate?: string;
  department?: Department;
  id?: number;
  lastModifiedBy?: string;
  lastModifiedDate?: string;
  login?: string;
  name?: string;
  password?: string;
  roles?: Array<Role>;
  surname?: string;
  ticketHeaders?: Array<TicketHeader>;
}
