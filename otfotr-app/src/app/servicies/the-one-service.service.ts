import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PagabelEntities } from '../models/pagabel-entities';
import { TheOneCharacter } from '../models/the-one-character';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TheOneServiceService {

 theOneUrl: string = "https://the-one-api.dev/v2";
 allCharacters: string = "/character";
 theToken = "5lWLa3nNNZQ47gRP5XZP";
 theOneBearerToken: string = "Bearer " + this.theToken;

constructor(private http: HttpClient) { }

/** GET heroes from the server */
getAllCharacter(): any {
  return this.http.get<any>(this.theOneUrl + this.allCharacters, this.getAuthHeader());
}

getAuthHeader(): any{
  return {headers: new HttpHeaders().set('Authorization', this.theOneBearerToken)
  }
}

}

