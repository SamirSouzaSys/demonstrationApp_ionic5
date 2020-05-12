import { DataService } from './../../services/data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/components/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  
  // componentes: Componente[] = [];
  componentes: Observable<Componente[]>;

  constructor(
    private menu: MenuController,
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenu();
  }

  // To menu works
  toggleMenu(){
    this.menu.toggle();
  }
}