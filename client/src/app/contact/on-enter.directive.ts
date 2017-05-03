import { Directive, ElementRef, HostListener } from '@angular/core';
import * as _ from 'lodash';

@Directive({
  selector: '[appOnEnter]'
})
export class OnEnterDirective {
  private el: ElementRef;
  constructor(private _el: ElementRef) {
    this.el = this._el;
  }

  @HostListener('keydown', ['$event']) onKeyDown(e) {
    if ((e.which == 13 || e.keyCode == 13)) {
      e.preventDefault();
      let inputs = document.getElementsByTagName('input');
      let index = _.indexOf(inputs, e.srcElement);
      if (index < inputs.length-1){
        inputs[index+1].focus();
      }
      else if (index == inputs.length-1) {
        let element =  document.getElementById('add') ? document.getElementById('add') : document.getElementById('save');
        element.click();
      }
      return;
    }

  }
}
