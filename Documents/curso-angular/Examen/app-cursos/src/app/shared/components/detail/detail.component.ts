import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() title: string;
  @Input() section: string;
  @Input() classes: string;
  constructor() { }

  ngOnInit(): void {
  }

}
