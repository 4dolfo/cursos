import { Component, OnInit, Input } from '@angular/core';
import { HeaderOption } from './header.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() mainUrl: string;
  @Input() options: HeaderOption[] = [];

  constructor() { }

  ngOnInit(): void {

  }
}
