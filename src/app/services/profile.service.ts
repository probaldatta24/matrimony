
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class ProfileService{
    url:string = 'assets/profiles.json'

    constructor(private http:HttpClient){}

    getAllProfiles():Observable<any>{
        return this.http.get<any>(this.url)
    }

    getItemById(id: string): Observable<any> {
        return this.getAllProfiles().pipe(
          map((data:any) => data.find((item:any) => item.id === id))
        );
    }


}