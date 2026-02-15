import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-practise-ui',
  templateUrl: './practise-ui.component.html',
  styleUrls: ['./practise-ui.component.scss'],
})
export class PractiseUiComponent {
  /**counter */
  count = 0;
  counter() {
    this.count++;
  }

  /**two waay binding */
  inputName: any;
  textMsg = '';

  inputType(event: any) {
    console.log(this.inputName);
    if (this.inputName > 18) {
      this.textMsg = 'You are eligible';
    } else {
      this.textMsg = 'You are not eligible';
    }
  }
  /**For */
  fruits = ['Apple', 'Mango', 'Banana', 'Orange'];
  // delete(i: any) {
  //   this.fruits.splice(i, 1);
  // }
  /**TOOGLE */
  label = 'Show Fruits';
  isListVisible = false;
  toogleList() {
    this.isListVisible = !this.isListVisible;
    if (!this.isListVisible) {
      this.label = 'Show Fruits';
    } else {
      this.label = 'Hide Fruits';
    }
  }
  selectedIndex: number | null = null;

  selectFruit(i: number) {
    this.selectedIndex = i;
  }

  /**search */
  filterList = [...this.fruits];
  searchInput(event: any) {
    this.filter(event.target.value);
  }
  filter(data: any) {
    let val = data.toLowerCase();
    this.filterList = this.fruits.filter((ele) =>
      ele.toLowerCase().includes(val)
    );
  }
  delete(i: number) {
    const fruitToDelete = this.filterList[i];
    // remove from main fruits array
    const indexInFruits = this.fruits.indexOf(fruitToDelete);
    if (indexInFruits > -1) this.fruits.splice(indexInFruits, 1);

    // remove from filtered list
    this.filterList.splice(i, 1);
  }
  ascending() {
    this.filterList = [...this.filterList].sort((a, b) => a.localeCompare(b));
  }

  descending() {
    this.filterList = [...this.filterList].sort((a, b) => b.localeCompare(a));
  }

  /**Dynaic binding */
  inputNum: number = 0;
  colorChange: string = 'red';
  updateColor() {
    if (this.inputNum <= 50) {
      this.colorChange = 'red';
    } else if (this.inputNum <= 100) {
      this.colorChange = 'yellow';
    } else {
      this.colorChange = 'green';
    }
  }
}
