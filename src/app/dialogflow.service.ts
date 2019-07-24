import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DialogflowService {

  private baseUrl: string = "https://api.dialogflow.com/v1/query?v=20150910";
  private token: string = environment.dialogFlow; 

  constructor(private httpClient: HttpClient) { }

  public getResponse(query: FormData){
    const headers = new HttpHeaders()
    .set("Authorization", `Bearer ${this.token}`);
  

    let data = {
        query: query,
        lang: "en",
        sessionId: "12345"
    }
  
    return this.httpClient.post(`${this.baseUrl}`, data, {headers:headers});
  
  }



}
