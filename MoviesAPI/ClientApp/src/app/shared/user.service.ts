import { Injectable } from '@angular/core';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class UserService {

    readonly rootURL = "https://localhost:44335";
    public formDataUser: User;
    public selectedUser: User;
    public updateBtnUserClicked = false;  // initial butonul de update nu e apasat; il importam in fetch-data
    public idCopied: number;  // copiez id sa pot apela la update pt ca voi redefini id ca undefined intre timp


    constructor(private http: HttpClient) { }



    postUser() {
        return this.http.post(this.rootURL + '/users', this.formDataUser);   // POST function returns Observable
        // returneaza un movie tip service.formData

    }


    getUsers() {
        return this.http.get<User[]>(this.rootURL + '/users')

    }


}
