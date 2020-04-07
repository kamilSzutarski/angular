/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { DepartmentControllerService } from './services/department-controller.service';
import { OperatorControllerService } from './services/operator-controller.service';
import { RoleControllerService } from './services/role-controller.service';
import { TicketElementControllerService } from './services/ticket-element-controller.service';
import { TicketHeaderControllerService } from './services/ticket-header-controller.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    DepartmentControllerService,
    OperatorControllerService,
    RoleControllerService,
    TicketElementControllerService,
    TicketHeaderControllerService,
    BasicErrorControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
