import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

/**
 * A diretiva altera o comportamento
 * ou aparência de algum elemento
 */
@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {
 
  // tslint:disable-next-line:no-input-rename
  @Input('appCampoColorido') cor = 'gray';
  // HostBinding vincula o estilo a uma propriedade
  @HostBinding('style.backgroundColor') corDeFundo: string;
  
    //@HostListener escuta eventos do DOM
   @HostListener('focus') aoGanharFoco(){
      this.corDeFundo = this.cor;
   }

   @HostListener('blur') aoPerderFoco(){
    this.corDeFundo = 'transparent';
 }

}
