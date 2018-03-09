import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {Settings} from '../shared/services/index'

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(public app : Settings) {
    }

    ngOnInit() {}
}
