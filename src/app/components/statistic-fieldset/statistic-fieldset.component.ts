import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistic-fieldset',
  templateUrl: './statistic-fieldset.component.html',
  styleUrls: ['./statistic-fieldset.component.css']
})
export class StatisticFieldsetComponent {
  @Input() title : string = "";

}
