import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-gaggle-button',
  templateUrl: './gaggle-button.component.html',
  styleUrls: ['./gaggle-button.component.scss']
})
export class GaggleButtonComponent implements OnInit {
  @Input() labelText: string = '';
  @Input() contentPosition: 'top' | 'bottom';
  @Input() icon!: string;
  @Output() click: EventEmitter<any> = new EventEmitter()
  constructor() {
    this.contentPosition = 'bottom';
  }

  ngOnInit(): void {

  }

  onClick($event: Event) {
    $event.stopPropagation();
    this.click.emit();
  }}
