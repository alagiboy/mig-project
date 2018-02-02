"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var company_service_1 = require("../../services/company.service");
var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent(companyService) {
        var _this = this;
        this.companyService = companyService;
        this.companyService.getCompanies()
            .subscribe(function (companies) {
            _this.companies = companies;
        });
    }
    CompaniesComponent.prototype.addCompany = function (event) {
        var _this = this;
        event.preventDefault();
        var newCompany = {
            name: this.name,
            website: this.website,
            contact: this.contact,
            isApproved: false
        };
        this.companyService.addCompany(newCompany)
            .subscribe(function (company) {
            _this.companys.push(company);
            _this.website = '';
            _this.contact = '';
            _this.name = '';
        });
    };
    CompaniesComponent.prototype.updateStatus = function (company) {
        var _company = {
            _id: company._id,
            name: company.name,
            isApproved: !company.isApproved
        };
        this.companyService.updateStatus(_company).subscribe(function (data) {
            company.isApproved = !company.isApproved;
        });
    };
    CompaniesComponent.prototype.deleteCompany = function (id) {
        var companies = this.companies;
        this.companyService.deleteCompany(id).subscribe(function (data) {
            if (data.n == 1) {
                for (var i = 0; i < companies.length; i++) {
                    if (companies[i]._id == id) {
                        companies.splice(i, 1);
                    }
                }
            }
        });
    };
    CompaniesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'companies',
            templateUrl: 'companies.component.html'
        }),
        __metadata("design:paramtypes", [company_service_1.CompanyService])
    ], CompaniesComponent);
    return CompaniesComponent;
}());
exports.CompaniesComponent = CompaniesComponent;
//# sourceMappingURL=companies.component.js.map