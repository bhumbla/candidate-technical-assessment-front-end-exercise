import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';

import { Incident } from '../types/incident';

import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { IncidentService } from '../services/incident.service';

import { Subscription } from 'rxjs';

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

  viewPort$!: Subscription;

  private cycle: number = 0;

  get keyword() {
    return this.filterForm.get('keyword');
  }

  constructor(private _fb: FormBuilder, private dataService: IncidentService, private breakpoint$: BreakpointObserver) { }

  ngOnInit(): void {
  // Changes what columns are visible for mobile screens.
  this.viewPort$ = this.breakpoint$.observe([Breakpoints.XSmall, Breakpoints.Small]).subscribe((state: BreakpointState) => {
    if(state.matches) {
      this.displayedColumns = ['date', 'type'];
    } else {
      this.displayedColumns = ['date', 'type', 'status'];
    }
  });

    this.keyword?.valueChanges.subscribe(searchtext => {
      this.dataSource.filter = searchtext.trim().toLowerCase();
    });

    this.dataService.getIncidents$().subscribe(data => {
      this.dataSource.data = data;
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

  trackFn = (index: number, row: Incident) => {
    return `${row.id}`;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected = () => {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows = () => {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel = (element?: Incident): string => {
    let selection = element ? this.selection.isSelected(element) : null;
    if(selection) {
      return `${selection ? 'deselect' : 'select'} ${element?.date} ${element?.type}`;
    }

    return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  }

  ngOnDestroy() {
    if(this.viewPort$) {
      this.viewPort$.unsubscribe();
    }
  }
}
