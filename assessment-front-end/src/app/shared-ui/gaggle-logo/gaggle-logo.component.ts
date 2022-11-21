import { Component, Input } from '@angular/core';

import {MatIconRegistry} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const GAGGLE_LOGO_URL = '../../assets/logo--Gaggle.svg';
const GAGGLE_LOGO_SYMBOL_URL = '../../assets/logo--Gaggle-sm.svg';

@Component({
  selector: 'app-gaggle-logo',
  templateUrl: './gaggle-logo.component.html',
  styleUrls: ['./gaggle-logo.component.scss']
})
export class GaggleLogoComponent {

  @Input() fullsize: boolean = true;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
    iconRegistry.addSvgIcon('gaggle-logo', sanitizer.bypassSecurityTrustResourceUrl(GAGGLE_LOGO_URL));
    iconRegistry.addSvgIcon('gaggle-logo-sm', sanitizer.bypassSecurityTrustResourceUrl(GAGGLE_LOGO_SYMBOL_URL));
  }

}
