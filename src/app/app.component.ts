import { Component, OnInit } from '@angular/core';
import { SensorsService } from './services/sensors.service';
@Component({
  selector: 'app-root',
  providers: [SensorsService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Healthy Workers';
  data = null;
  sensors = null;
  sensorNames = null;
  constructor(private sensorsService: SensorsService) {
  }
  ngOnInit() {
    // get sensor data
    this.data = this.sensorsService.getSensorData().sensors;
    // generate options for selecting the sensor
    this.sensorNames = this.data.map(sensor => sensor.name);
    // select the first sensor
    this.sensors = this.data[0];
  }
  /**
   * onchange event handler will be triggered on sensor dropdown change
   */
  onSensorChange(event) {
    // mapping the corresponding sensor data based on index
    this.sensors = this.data[+event.target.value];
  }
}
