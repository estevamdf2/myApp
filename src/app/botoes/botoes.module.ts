import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoGrandeComponent } from './botao-grande/botao-grande.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BotaoGrandeComponent],
  exports: [BotaoGrandeComponent] //Pertitir que o componente seja exportado
})
export class BotoesModule { }
