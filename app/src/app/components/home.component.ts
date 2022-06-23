/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import {
  Component,
  Injector,
  Input,
  Output,
  EventEmitter,
} from '@angular/core'; //_splitter_
import { SDBaseService } from 'app/n-services/SDBaseService'; //_splitter_
import { SDPageCommonService } from 'app/n-services/sd-page-common.service'; //_splitter_
import { __NEU_ServiceInvokerService__ } from 'app/n-services/service-caller.service'; //_splitter_
//append_imports_end

@Component({
  selector: 'bh-home',
  templateUrl: './home.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class homeComponent {
  page: any = { dep: {} };
  constructor(
    private __page_injector__: Injector,
    private sdService: SDBaseService,
    public __serviceInvoker__: __NEU_ServiceInvokerService__
  ) {
    this.__page_injector__.get(SDPageCommonService).addPageDefaults(this.page);
    this.registerListeners();
    //appendnew_element_inject
  }

  ngOnInit() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    {
      this.sd_1RGn6JrNr8iGTAyX(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_1RGn6JrNr8iGTAyX(bh) {
    try {
      bh.local = {
        protection_types: [
          { icon: 'home', paragraph: 'i need to protect my income or family' },
          { icon: 'group', paragraph: 'i need to protect my family' },
          {
            icon: 'account_balance_wallet',
            paragraph: 'i need to protect my income',
          },
        ],
      };
      bh = this.sd_eTy6eSHXGezqKmxG(bh);
      //appendnew_next_sd_1RGn6JrNr8iGTAyX
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_1RGn6JrNr8iGTAyX');
    }
  }

  choose_product(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.Protection_types(bh);
      //appendnew_next_choose_product
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KJAelUN1dukb2TKe');
    }
  }

  disablilty(...others) {
    try {
      var bh: any = this.__page_injector__
        .get(SDPageCommonService)
        .constructFlowObject(this);
      bh.input = {};
      bh.local = {};
      bh = this.sd_aqIY1dvnTbYdo4zZ(bh);
      //appendnew_next_disablilty
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_dFGbQqM5xJzcnVGx');
    }
  }

  //appendnew_flow_homeComponent_start

  sd_eTy6eSHXGezqKmxG(bh) {
    try {
      this.page.protection_types = [
        { icon: 'home', paragraph: 'i need to protect my income or family' },
        { icon: 'group', paragraph: 'i need to protect my family' },
        {
          icon: 'account_balance_wallet',
          paragraph: 'i need to protect my income',
        },
      ];
      this.sd_Bk457hcLoNj196vS(bh);
      //appendnew_next_sd_eTy6eSHXGezqKmxG
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_eTy6eSHXGezqKmxG');
    }
  }

  sd_Bk457hcLoNj196vS(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), this.page);
      //appendnew_next_sd_Bk457hcLoNj196vS
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_Bk457hcLoNj196vS');
    }
  }

  Protection_types(bh) {
    try {
      const page = this.page;
      page.protection_types = [
        { icon: 'accessible', paragraph: 'Disability Insurance' },
        { icon: 'airport_shuttle', paragraph: 'Accidental Insurance' },
        { icon: 'group_add', paragraph: 'Life Insurance' },
        { icon: 'grain', paragraph: 'Discount Plans' },
      ];

      //appendnew_next_Protection_types
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AEMcD6fhKDQshuFN');
    }
  }

  sd_aqIY1dvnTbYdo4zZ(bh) {
    try {
      const page = this.page;
      page.protection_types = [
        // {"title":"Unfortunatly, you are not eligable for the selected plan coverage. Not to worry, we have other solutions that may work for ypu !"},
        { icon: 'accessible', paragraph: 'Disability Insurance' },
        { icon: 'directions_car', paragraph: 'Accidental Insurance' },
        { icon: 'group_add', paragraph: 'Life Insurance' },
        { icon: 'account_balance_wallet', paragraph: 'Discount Plans' },
        { icon: 'local_hospital', paragraph: 'Health Insurance' },
        { icon: 'business_center', paragraph: 'Business Insurance' },
      ];

      //appendnew_next_sd_aqIY1dvnTbYdo4zZ
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_aqIY1dvnTbYdo4zZ');
    }
  }

  //appendnew_node

  ngOnDestroy() {
    const bh: any = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);
    this.__page_injector__.get(SDPageCommonService).deletePageFromMap(this);
  }

  errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    if (
      false
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  //appendnew_flow_homeComponent_Catch
}
