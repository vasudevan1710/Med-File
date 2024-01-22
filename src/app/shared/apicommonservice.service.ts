import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApicommonserviceService {

  constructor(private http: HttpClient) { }

  public handleError(error: Response) {
    return throwError(error);
  }

// **************************************Manual Registration Api*****************************//


public getsearchpatient(obj : any) {
  debugger
  return this.http.get('api/visitmgmt/Patient/SearchIndividual',obj).pipe(catchError(this.handleError));
}


getVisits(search:string) {
  return this.http.get('api/visitmgmt/Patient/InitSearch?Codes='+search);
}
//http://192.168.0.127/api/visitmgmt/Patient/Search?SearchType=ByHRN&HRN=SE%20%20%205654654

getpatients(HRN:any){
  return this.http.get('api/visitmgmt/Patient/Search?SearchType=ByHRN&HRN='+HRN);
 
}
getPatientsName(Name:any){
  return this.http.get('api/visitmgmt/Patient/Search?SearchType=ByName&Name='+Name);
}
// http://192.168.0.127/api/visitmgmt/Patient/InitSearch?Codes=PT
getPatientsIDType(search:any){
  return this.http.get('/api/visitmgmt/Patient/InitSearch?Codes='+search);
}
}
