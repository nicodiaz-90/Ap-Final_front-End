import { HttpClient, HttpClientModule } from '@angular/common/http'; //Si no funciona, eliminar el HttpClientModule
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = 'https://back-arg-programa.herokuapp.com/personas/'

  constructor(private http: HttpClient) { } //Si no funciona, cambiar httpclient por httpclientmodule

  public getPersona() : Observable<persona>{ //El observable sirve para hacer peticiones asincronas
        return this.http.get<persona>(this.URL + 'traer/perfil')
        
  }
}
