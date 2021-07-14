import { Component, OnInit, OnDestroy } from '@angular/core';

import { GeneratorService } from './../../../core/services/generator.service';
import { EmployeeData } from './../../../core/models/employee.model';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';

const names = ['Mauricio', 'Monica', 'Yezid', 'Aracely', 'Julian', 'Mayra', 'Alejandro'];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  salesList: EmployeeData[] = [];
  bList: EmployeeData[] = [];

  value$: Observable<number>;
  // sub$: Subscription;

  constructor(
    private generatorService: GeneratorService
  ) {
    this.value$ = this.generatorService.getData()
    .pipe(
      tap(num => console.log(num))
    );
  }

  ngOnInit(): void {
    this.salesList = this.generatorService.generate(names, [10, 20], 30);
    this.bList = this.generatorService.generate(names, [10, 20], 30);

    /* this.sub$ = this.generatorService.getData()
    .subscribe(value => {
      this.value = value;
      console.log(this.value);
    }); */
  }

  ngOnDestroy() {
    console.log('destroy');
    // this.sub$.unsubscribe();
  }

  addItem(list: EmployeeData[], label: string) {
    list.unshift({
      label,
      num: this.generatorService.generateNumber([10, 20]),
    });
  }

}
