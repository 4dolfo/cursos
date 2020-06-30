import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() id: string;
  @Input() img: string;
  @Input() title: string;
  @Input() instructor: string;
  @Input() progress: number;

  @Output() goCard: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  selectCard() {
    this.goCard.emit(this.id);
  }
}
