import { Component } from '@angular/core';
import { CompanyService } from './services/company.service';

@Component({
	moduleId: module.id,
	selector: 'mig-app',
	templateUrl: 'app.component.html',
	providers:[CompanyService]
})

export class AppComponent { }