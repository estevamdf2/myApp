import { Directive, ElementRef, Renderer2 } from '@angular/core';


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
    console.log(this.elementRef.nativeElement);
    this.renderer.setStyle(this.elementRef.nativeElement,
    'background-color','yellow');
   }

}
