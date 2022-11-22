import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';

import { Incident } from '../types/incident';

import { MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { IncidentService } from '../services/incident.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  darkmode: boolean = false;
  tableRowDensity: 'small' | 'medium' | 'large' = 'medium';
  fullscreen: boolean = false;

  filterForm = this._fb.nonNullable.group({
    keyword: this._fb.nonNullable.control('')
  });

  dataSource: MatTableDataSource<Incident> = new MatTableDataSource();
  displayedColumns: string[] = ['date', 'type', 'status'];
  selection = new SelectionModel<Incident>(true, []);

  private cycle: number = 0;

  get keyword() {
    return this.filterForm.get('keyword');
  }

  constructor(private _fb: FormBuilder, private dataService: IncidentService) { }

  ngOnInit(): void {
    this.keyword?.valueChanges.subscribe(searchtext => {
      this.dataSource.filter = searchtext.trim().toLowerCase();
    });
  }

  logout = () => {
    console.log('Placeholder to logout user');
  }

  toggleDarkMode() {
    this.darkmode = !this.darkmode;
  }

  cycleRowDensity() {
    switch(this.cycle % 3) {
      case 0:
        this.tableRowDensity = 'large';
        break;
      case 1:
        this.tableRowDensity = 'small';
        break;
      default:
        this.tableRowDensity = 'medium';
    }
    this.cycle++;
  }

  expandTableFullScreen() {
    this.fullscreen = true;
  }

  exitTableFullScreen() {
    this.fullscreen = false;
  }

  clearInput = ($inputCtrl: AbstractControl | null) => {
    $inputCtrl?.reset();
  }
}
