import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-show-hide-toggle-button',
  templateUrl: './show-hide-toggle-button.component.html',
  styleUrls: ['./show-hide-toggle-button.component.scss']
})
export class ShowHideToggleButtonComponent implements OnInit {
  @Input() onIcon: string = '';
  @Input() offIcon: string = '';
  @Input() ariaLabel: string = '';
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();
  public toggle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBtn() {
    this.toggle = !this.toggle;
    this.change.emit(this.toggle);
  }

  btnAriaLabel() {
    return `${this.toggle ? 'Hide' : 'Show'} ${this.ariaLabel}`;
  }
}
