import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PropietariosService {
  private apiUrl = 'http://localhost:3000/propietarios';

  constructor(private http: HttpClient) {}

  getPropietarios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getPropietarioById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createPropietario(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updatePropietario(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deletePropietario(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
