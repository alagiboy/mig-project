import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CompanyService{
    constructor(private http:Http){
      /*  console.log('Company Service Initialized...'); */
    }
    
    getCompanies(){
        return this.http.get('/api/companies')
            .map(res => res.json());
    }
    
    addCompany(newCompany){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/company', JSON.stringify(newCompany), {headers: headers})
            .map(res => res.json());
    }
    
    deleteCompany(id){
        return this.http.delete('/api/company/'+id)
            .map(res => res.json());
    }
    
    updateStatus(company){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/company/'+company._id, JSON.stringify(company), {headers: headers})
            .map(res => res.json());
    }
}