import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

/**
 * A diretiva altera o comportamento
 * ou aparência de algum elemento
 */
@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {
 
  // HostBinding vincula o estilo a uma propriedade
  @HostBinding('style.backgroundColor') corDeFundo: string;
  
    //@HostListener escuta eventos do DOM
   @HostListener('focus') aoGanharFoco(){
      this.corDeFundo = 'yellow';
   }

   @HostListener('blur') aoPerderFoco(){
    this.corDeFundo = 'transparent';
 }

}
