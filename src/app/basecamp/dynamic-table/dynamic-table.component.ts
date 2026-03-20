import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss'],
})
export class DynamicTableComponent {
  maxCategoryCount = 0;
  maxRoleCount = 0;

  ngOnInit() {
    this.maxCategoryCount = Math.max(
      ...this.data.map((emp) => emp.category.length),
    );

    this.maxRoleCount = Math.max(...this.data.map((emp) => emp.role.length));
  }

  getEmptyArray(count: number): any[] {
    return Array(count);
  }
  data = [
    {
      empId: 101,
      empName: 'Kiran',
      category: [
        { name: 'Development', hrs: 5 },
        { name: 'Testing', hrs: 3 },
      ],
      role: [
        { name: 'Frontend', hrs: 4 },
        { name: 'Backend', hrs: 4 },
      ],
    },
    {
      empId: 102,
      empName: 'Rahul',
      category: [
        { name: 'Design', hrs: 4 },
        { name: 'Review', hrs: 2 },
        { name: 'Design3', hrs: 4 },
        { name: 'Review2', hrs: 2 },
        { name: 'Design2', hrs: 4 },
        { name: 'Review1', hrs: 2 },
      ],
      role: [
        { name: 'UI/UX', hrs: 3 },
        { name: 'QA', hrs: 3 },
      ],
    },
    {
      empId: 103,
      empName: 'Rahul',
      category: [
        { name: 'Design', hrs: 4 },
        { name: 'Review', hrs: 2 },
        { name: 'Design3', hrs: 4 },
        { name: 'Review2', hrs: 2 },
      ],
      role: [
        { name: 'UI/UX', hrs: 3 },
        { name: 'QA', hrs: 3 },
      ],
    },
    {
      empId: 104,
      empName: 'Rahul',
      category: [
        { name: 'Design', hrs: 4 },
        { name: 'Review', hrs: 2 },
      ],
      role: [
        { name: 'UI/UX', hrs: 3 },
        { name: 'QA', hrs: 3 },
      ],
    },
    {
      empId: 105,
      empName: 'Rahul',
      category: [
        { name: 'Design', hrs: 4 },
        { name: 'Review', hrs: 2 },
      ],
      role: [
        { name: 'UI/UX', hrs: 3 },
        { name: 'QA', hrs: 3 },
      ],
    },
  ];
}
