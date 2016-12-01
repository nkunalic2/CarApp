import { Component } from '@angular/core';


@Component({
  selector: 'single-demo',
  templateUrl: './ng-dropdown.component.html'
})
export class SingleDemoComponent {
  options = [
    {
      value: 'a',
      label: 'Alpha'
    },
    {
      value: 'b',
      label: 'Beta'
    },
    {
      value: 'c',
      label: 'Gamma'
    }
  ];
}
