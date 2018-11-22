import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css']
})
export class SensorComponent implements OnInit, OnChanges {
  @Input() data;
  sensorData = null;
  constructor() { }

  ngOnInit() {

  }
  ngOnChanges(changes) {
    const sensorObj = changes.data.currentValue.data;
    this.sensorData = Object.keys(sensorObj).length ? Object.keys(sensorObj).map(prop => ({
      prop,
      val: sensorObj[prop]
    })) : null;
  }

}
