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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var CompanyService = /** @class */ (function () {
    function CompanyService(http) {
        this.http = http;
        /*  console.log('Company Service Initialized...'); */
    }
    CompanyService.prototype.getCompanies = function () {
        return this.http.get('/api/companies')
            .map(function (res) { return res.json(); });
    };
    CompanyService.prototype.addCompany = function (newCompany) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/company', JSON.stringify(newCompany), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService.prototype.deleteCompany = function (id) {
        return this.http.delete('/api/company/' + id)
            .map(function (res) { return res.json(); });
    };
    CompanyService.prototype.updateStatus = function (company) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/company/' + company._id, JSON.stringify(company), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    CompanyService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], CompanyService);
    return CompanyService;
}());
exports.CompanyService = CompanyService;
//# sourceMappingURL=company.service.js.map