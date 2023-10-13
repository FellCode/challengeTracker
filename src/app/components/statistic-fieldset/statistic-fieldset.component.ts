import { Component, Input, inject } from '@angular/core';
import {  } from '@angular/core/testing';


@Component({
  selector: 'app-statistic-fieldset',
  templateUrl: './statistic-fieldset.component.html',
  styleUrls: ['./statistic-fieldset.component.css']
})
export class StatisticFieldsetComponent {
  @Input() title : string = "";
}
