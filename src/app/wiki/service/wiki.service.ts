import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResponseSlime } from '../interfaces/slime.interface';
import { SearchResponseSlimeDetails } from '../interfaces/slimeDetails.interface';

@Injectable({providedIn: 'root'})
export class WikiService {

    private apiUrl: string = 'https://slime-rancher.vercel.app/api';


    constructor(private http: HttpClient) { }


    public retrieveAllSlimes(): Observable<SearchResponseSlime> {
        return this.http.get<SearchResponseSlime>(`${this.apiUrl}/slime`);
    }

    public retrieveSlimeById(slimeId: string): Observable<SearchResponseSlimeDetails | null> {
        return this.http.get<SearchResponseSlimeDetails>(`${this.apiUrl}/slime/${slimeId}`);
    }
}
