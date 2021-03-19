import { Component, OnInit } from '@angular/core';

// Servicio del Siderbar
import { SidebarService } from 'src/app/services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor( public _sidebar: SidebarService) { }

  ngOnInit() {
  }

}
