import { Injectable } from '@angular/core';
import { data } from './Sensors';
@Injectable()
export class SensorsService {

  constructor() { }
  getSensorData = () => {
    return data;
  }
}
