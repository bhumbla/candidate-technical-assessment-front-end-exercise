import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import incidentData from '../../mock-backend/incident_data.json';
import { Incident } from '../types/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  incidents$: BehaviorSubject<Incident[]> = new BehaviorSubject<Incident[]>(incidentData);

  constructor() { }

  getIncidents$(): BehaviorSubject<Incident[]> {
    return this.incidents$;
  }
}
