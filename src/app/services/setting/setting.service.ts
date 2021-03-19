import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
        this.cargarAjustes();
  }

  guardarAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
    if ( localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse( localStorage.getItem('ajustes') );
      this.aplicarTema(this.ajustes.tema);
    }else{
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema: string){
    const url: string = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    // Guardar los ajustes
    this.guardarAjustes();
  }

}

interface Ajustes{
  temaUrl: string;
  tema: string;
}
