import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { Helpers } from '../../../../../../helpers';
import { ScriptLoaderService } from '../../../../../../_services/script-loader.service';


@Component({
    selector: "app-locked-left",
    templateUrl: "./project-master.component.html",
    encapsulation: ViewEncapsulation.None,
})
export class ProjectMasterComponent implements OnInit, AfterViewInit {


    constructor(private _script: ScriptLoaderService) {

    }
    ngOnInit() {
        $('.mainFormDiv').hide();
    }
    ngAfterViewInit() {
        this._script.loadScripts('app-locked-left',
            ['assets/myFiles/master/project/metronic-datatable-locked-left.js',
             'assets/myFiles/master/project/newProjectWizard.js']);

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