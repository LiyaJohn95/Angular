import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Constants, UserLogin } from '../../../constant/constant';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    loginDetails: UserLogin
    isActive: boolean = false;
    showMenu: string = '';
    pushRightClass: string = 'push-right';
    forUserNavigation;
    constructor(private translate: TranslateService, public router: Router) {
        this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de']);
        this.loginDetails = JSON.parse(localStorage.getItem(Constants.GetLoginDetails));
        this.translate.setDefaultLang('en');
        const browserLang = this.translate.getBrowserLang();
        this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de/) ? browserLang : 'en');
        if (this.loginDetails.roleID == 1) {
            this.forUserNavigation = [{ "title": "Dashboard", "click": "/dashboard" }, { "title": "Disease List", "click": "/listdesease" },
            { "title": "Vaccination List", "click": "/vaccination" }, { "title": "Users List", "click": "/userlist" }
                , { "title": "Schedule Vaccination", "click": "/schedule" }, { "title": "Schedule Notification", "click": "/notification" }
                ];
        } else {
            this.forUserNavigation = [{ "title": "Dashboard", "click": "/dashboard" }, { "title": "Reported Disease", "click": "/reporteddisease" }, { "title": "Excel Upload", "click": "/excelupload" },
            { "title": "Vaccination Report", "click": "/vaccinationreport" }, { "title": "Add Vaccination", "click": "/reportvaccination" }];
        }
        console.log("Menu THie method is calling");
        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    eventCalled() {
        this.isActive = !this.isActive;
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    changeLang(language: string) {
        this.translate.use(language);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
}
