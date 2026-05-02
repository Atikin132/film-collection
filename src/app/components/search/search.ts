import { Component, input, output } from '@angular/core';
import { AutofocusDirective } from '../../shared/directives/autofocus-directive/autofocus-directive';

@Component({
  selector: 'app-search',
  imports: [AutofocusDirective],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  value = input<string>('');
  valueChange = output<string>();

  onInput(event: Event) {
    const target = event.target;

    if (target instanceof HTMLInputElement) {
      this.valueChange.emit(target.value);
    }
  }
}
