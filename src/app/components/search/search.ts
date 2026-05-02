import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-search',
  imports: [],
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
