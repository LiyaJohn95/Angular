import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListdeseaseComponent } from './listdesease.component';

const routes: Routes = [
    {
        path: '',
        component: ListdeseaseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListDeseaseRoutingModule {}
