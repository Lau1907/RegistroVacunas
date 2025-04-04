import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VacunasService {
  private apiUrl = 'http://localhost:3000/vacunas';

  constructor(private http: HttpClient) {}

  getVacunas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getVacunaById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createVacuna(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateVacuna(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteVacuna(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
