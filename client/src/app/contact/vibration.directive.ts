import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appVibration]'
})
export class VibrationDirective {

  constructor() {}

  @HostListener('click') onClick() {
    navigator.vibrate(50);
  }
}
