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
      bh = this.sd_AEMcD6fhKDQshuFN(bh);
      //appendnew_next_choose_product
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_KJAelUN1dukb2TKe');
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

  sd_AEMcD6fhKDQshuFN(bh) {
    try {
      const page = this.page;
      page.protection_types = [
        { icon: 'accessible', paragraph: 'Disability Insurance' },
        { icon: 'airport_shuttle', paragraph: 'Accidental Insurance' },
        { icon: 'group_add', paragraph: 'Life Insurance' },
        { icon: 'grain', paragraph: 'Discount Plans' },
      ];

      //appendnew_next_sd_AEMcD6fhKDQshuFN
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_AEMcD6fhKDQshuFN');
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
