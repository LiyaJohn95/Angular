import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Settings} from '../../shared/services/index'

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor(public settings : Settings) {
        console.log("Dash Board page called......");
        localStorage.setItem('isLoggedin', 'false');
        this.settings.getGeneralSettings();

    }

      // events
      public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    ngOnInit() {

    }




    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Total Scheduled' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Pending' }
    ];

    // Doughnut
    public doughnutChartLabels: string[] = [
        'JAN',
        'FEB',
        'MAR',
        'APR',
        'MAY',
        'JUN',
        'JUL',
        'AUG',
        'SEP',
        'OCT',
        'NOV',
        'DEC'
    ];
    public doughnutChartData: number[] = [350, 450, 100,10,10,12,12,12,12,12,12];
    public doughnutChartType: string = 'doughnut';
}
