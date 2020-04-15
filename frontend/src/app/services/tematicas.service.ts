import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TematicasService {
  
  public tematicas: object[];
  constructor(public httpClient: HttpClient) { }
  
getAll(): Observable<any> {
return this.httpClient.get("http://localhost:3000/tematicas")
}


setTematicas(tematicas): void {
  this.tematicas = tematicas;
}


search(searchValue) {
  return this.httpClient.get('http://localhost:3000/tematicas/name/'+searchValue);
}

}
