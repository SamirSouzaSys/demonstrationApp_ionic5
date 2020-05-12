import { Componente } from './../components/interfaces/interfaces';
import { Injectable, Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMenu(){
    return this.http.get<Componente[]>('/assets/data/menu.json');
  }
}
