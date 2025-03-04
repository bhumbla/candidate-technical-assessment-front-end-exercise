import { Component } from '@angular/core';
import { IconService } from './services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'assessment-front-end';

  constructor(public iconService: IconService){}
  ngOnInit() {
    this.iconService.registerIcons();
  }
}
