import { Injectable } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import { Icons } from '../enums/icons';

const ICON_URL = '../../assets';
/**
 * Custom Icon Service to enable use of
 * custom local icon assets in mat-icon Directive.
 *
 * @export
 * @class IconService
 */
@Injectable({
  providedIn: 'root'
})

export class IconService {

  constructor(public iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) {}

  /**
   * Registers icons into the MatIconRegistry
   * Icons listed in icons.ts.
   */
  registerIcons(): void {
    Object.keys(Icons).forEach(key => {
      this.iconRegistry.addSvgIcon(key, this.sanitizer.bypassSecurityTrustResourceUrl(`${ICON_URL}/icon--${Icons[key as keyof typeof Icons]}.svg`));
    })
  }
}
