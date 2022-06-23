import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-noicotineComponent
import { noicotineComponent } from '../components/noicotine.component';
//CORE_REFERENCE_IMPORT-governmentEmployeeComponent
import { governmentEmployeeComponent } from '../components/governmentEmployee.component';
//CORE_REFERENCE_IMPORT-diabilityHeaderComponent
import { diabilityHeaderComponent } from '../components/diabilityHeader.component';
//CORE_REFERENCE_IMPORT-salaryComponent
import { salaryComponent } from '../components/salary.component';
//CORE_REFERENCE_IMPORT-validationComponent
import { validationComponent } from '../components/validation.component';
//CORE_REFERENCE_IMPORT-employedComponent
import { employedComponent } from '../components/employed.component';
//CORE_REFERENCE_IMPORT-occupationComponent
import { occupationComponent } from '../components/occupation.component';
//CORE_REFERENCE_IMPORT-stateComponent
import { stateComponent } from '../components/state.component';
//CORE_REFERENCE_IMPORT-marternityComponent
import { marternityComponent } from '../components/marternity.component';
//CORE_REFERENCE_IMPORT-genderComponent
import { genderComponent } from '../components/gender.component';
//CORE_REFERENCE_IMPORT-dateOfBirthComponent
import { dateOfBirthComponent } from '../components/dateOfBirth.component';
//CORE_REFERENCE_IMPORT-needCompComponent
import { needCompComponent } from '../components/needComp.component';
//CORE_REFERENCE_IMPORT-footerComponent
import { footerComponent } from '../components/footer.component';
//CORE_REFERENCE_IMPORT-howCanWeHelpComponent
import { howCanWeHelpComponent } from '../components/howCanWeHelp.component';
//CORE_REFERENCE_IMPORT-stepperComponent
import { stepperComponent } from '../components/stepper.component';
//CORE_REFERENCE_IMPORT-toolbarComponent
import { toolbarComponent } from '../components/toolbar.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-noicotineComponent
  noicotineComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-governmentEmployeeComponent
  governmentEmployeeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-diabilityHeaderComponent
  diabilityHeaderComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-salaryComponent
  salaryComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-validationComponent
  validationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-employedComponent
  employedComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-occupationComponent
  occupationComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-stateComponent
  stateComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-marternityComponent
  marternityComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-genderComponent
  genderComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-dateOfBirthComponent
  dateOfBirthComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-needCompComponent
  needCompComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-footerComponent
  footerComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-howCanWeHelpComponent
  howCanWeHelpComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-stepperComponent
  stepperComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-toolbarComponent
  toolbarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  {
    path: 'home',
    component: homeComponent,
    children: [
      { path: 'dateOfBirth', component: dateOfBirthComponent },
      { path: 'footer', component: footerComponent },
      { path: 'gender', component: genderComponent },
      { path: 'governmentEmployee', component: governmentEmployeeComponent },
      { path: 'howCanWeHelp	', component: howCanWeHelpComponent },
      { path: 'marternity', component: marternityComponent },
      { path: 'needComp', component: needCompComponent },
      { path: 'state', component: stateComponent },
      { path: 'occupation', component: occupationComponent },
      { path: 'validation', component: validationComponent },
      { path: 'salary', component: salaryComponent },
      { path: 'noicotine', component: noicotineComponent },
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
