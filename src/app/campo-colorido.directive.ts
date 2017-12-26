import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

/**
 * A diretiva altera o comportamento
 * ou aparência de algum elemento
 */
@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {
 
  /* Injeção de objetos no construtor
  é feita usando-se o private 
    elementRef - da acesso ao elemento hospedeiro da DOM.
    neste exemplo o <input> é o hospedeiro.
  */

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {
    }

    //@HostListener escuta eventos do DOM
   @HostListener('focus') aoGanharFoco(){
      this.renderer.setStyle(this.elementRef.nativeElement,
      'background-color','yellow');
   }

   @HostListener('blur') aoPerderFoco(){
    this.renderer.setStyle(this.elementRef.nativeElement,
    'background-color','transparent');
 }

}
