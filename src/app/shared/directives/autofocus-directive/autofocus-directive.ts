import { Directive, effect, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective {
  private el = inject(ElementRef<HTMLInputElement>);

  constructor() {
    effect(() => {
      queueMicrotask(() => {
        this.el.nativeElement.focus();
      });
    });
  }
}
