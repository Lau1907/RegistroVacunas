import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MascotasService {
  private apiUrl = 'http://localhost:3000/mascotas';

  constructor(private http: HttpClient) {}

  getMascotas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getMascotaById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createMascota(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateMascota(id: string, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  deleteMascota(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
