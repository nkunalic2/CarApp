import { Component } from '@angular/core';


@Component({
  selector: 'app-ng-select',
  templateUrl: './ng-dropdown.component.html'
})
export class NgSelectComponent {
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
