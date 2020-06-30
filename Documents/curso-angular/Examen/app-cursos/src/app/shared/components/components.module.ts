import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    DetailComponent
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedComponentsModule { }
