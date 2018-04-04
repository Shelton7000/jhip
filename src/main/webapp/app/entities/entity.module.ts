import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogRegionModule } from './region/region.module';
import { BlogCountryModule } from './country/country.module';
import { BlogLocationModule } from './location/location.module';
import { BlogDepartmentModule } from './department/department.module';
import { BlogTaskModule } from './task/task.module';
import { BlogEmployeeModule } from './employee/employee.module';
import { BlogJobModule } from './job/job.module';
import { BlogJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        BlogRegionModule,
        BlogCountryModule,
        BlogLocationModule,
        BlogDepartmentModule,
        BlogTaskModule,
        BlogEmployeeModule,
        BlogJobModule,
        BlogJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogEntityModule {}
