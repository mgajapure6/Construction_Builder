import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
    selector: "app-locked-left",
    templateUrl: "./task-master.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class TaskMasterComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {
        $('.mainFormDiv').hide();
    }
    ngAfterViewInit() {
        this._script.loadScripts('app-locked-left',
            ['assets/demo/default/custom/crud/metronic-datatable/locked/left.js',
             'assets/demo/default/custom/crud/wizard/wizard.js']);

    }

    showForm(action){
        if(action=='N'){
            this.clearForm();
            $('.mainListTable').hide();
            $('.mainFormDiv').show();
        }
    }

    showList(){
        this.clearForm();
        $('.mainListTable').show();
        $('.mainFormDiv').hide();
    }

    clearForm(){

    }

}