import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FirstComponent implements OnInit {

  @Input() name: string;
  @Output() clicked: EventEmitter<string[]> = new EventEmitter<string[]>();

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent() {
    this.clicked.emit(['first', 'second']);
  }

}
