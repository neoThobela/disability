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
  selector: 'bh-needComp',
  templateUrl: './needComp.template.html',
  providers: [
    //appendnew_element_providers
  ],
})
export class needCompComponent {
  @Input('selection')
  public selection: any = undefined;
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
      this.sd_cA2NOpzG8y0IZ6ZO(bh);
    }
  }

  private registerListeners() {
    let bh = this.__page_injector__
      .get(SDPageCommonService)
      .constructFlowObject(this);

    //append_listeners
  }

  sd_cA2NOpzG8y0IZ6ZO(bh) {
    try {
      bh = this.sd_68VLm4zp4rvk7eDo(bh);
      //appendnew_next_sd_cA2NOpzG8y0IZ6ZO
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_cA2NOpzG8y0IZ6ZO');
    }
  }

  //appendnew_flow_needCompComponent_start

  sd_68VLm4zp4rvk7eDo(bh) {
    try {
      this.page.icons = [];
      bh = this.sd_9QIpXwUe9DvfBJBT(bh);
      //appendnew_next_sd_68VLm4zp4rvk7eDo
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_68VLm4zp4rvk7eDo');
    }
  }

  sd_9QIpXwUe9DvfBJBT(bh) {
    try {
      const page = this.page;
      console.log('child', this.selection);
      // page.icons=[
      //     {
      //     "icon":"home",
      //     "paragraph":"i need to protect my income or family"
      //     },
      //      {
      //     "icon":"group",
      //     "paragraph":"i need to protect my family",
      //     },
      //      {
      //     "icon":"account_balance_wallet",
      //     "paragraph":"i need to protect my income",
      //     },
      // ]
      //appendnew_next_sd_9QIpXwUe9DvfBJBT
      return bh;
    } catch (e) {
      return this.errorHandler(bh, e, 'sd_9QIpXwUe9DvfBJBT');
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
  //appendnew_flow_needCompComponent_Catch
}
