import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehiclesComponent } from './vehicles.component';
import { VehicleResolver } from './shared/vehicle-resolver.service';
import { CanDeactivateGuard } from './.';

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent,
    children: [
      {
        path: '',
        component: VehicleListComponent,
      },
      {
        path: ':id',
        component: VehicleComponent,
        canDeactivate: [CanDeactivateGuard],
        resolve: {
          vehicle: VehicleResolver
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [VehicleResolver]
})
export class VehiclesRoutingModule { }

export const routedComponents = [VehiclesComponent, VehicleListComponent, VehicleComponent];


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/
