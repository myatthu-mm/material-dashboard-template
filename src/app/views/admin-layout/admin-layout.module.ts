/** common */
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AdminLayoutRoutes } from './admin-layout.routing'

/** components */
import { DashboardComponent } from '../../components/dashboard/dashboard.component'
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { TableListComponent } from '../../components/table-list/table-list.component'
import { TypographyComponent } from '../../components/typography/typography.component'
import { NotificationsComponent } from '../../components/notifications/notifications.component'
import { UpgradeComponent } from '../../components/upgrade/upgrade.component'

/** entry components */

/** backend module */

/** design helpers */
import { MaterialModule } from '../../modules/material.module'

/** custom directives */


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    NotificationsComponent,
    UpgradeComponent,
  ],
  providers: [],
  entryComponents: []
})
export class AdminLayoutModule { }
