import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import {Company} from '../../../Company';

@Component({
	moduleId: module.id,
	selector: 'companies',
	templateUrl: 'companies.component.html'
})

export class CompaniesComponent{ 
	companies: Company[];
	name: string;
	website: string;
	contact: string;
	address: string;

	constructor(private companyService:CompanyService){

	this.companyService.getCompanies()
            .subscribe(companies => {
                this.companies = companies;

            });

	}


	addCompany(event){
        event.preventDefault();
        var newCompany = {
            name: this.name,
            website: this.website,
            contact: this.contact,
            isApproved: false
        }
        
        this.companyService.addCompany(newCompany)
            .subscribe(company => {
                this.companys.push(company);
                this.website ='';
                this.contact = '';
                this.name = '';
            });
    }


    updateStatus(company){
        var _company = {
            _id:company._id,
            name: company.name,
            isApproved: !company.isApproved
        };
        
        this.companyService.updateStatus(_company).subscribe(data => {
            company.isApproved = !company.isApproved;
        });
    }


    deleteCompany(id){
        var companies = this.companies;
        
        this.companyService.deleteCompany(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < companies.length;i++){
                    if(companies[i]._id == id){
                        companies.splice(i, 1);
                    }
                }
            }
        });
    }
}