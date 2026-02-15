import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.scss'],
})
export class ChipListComponent {
  @Input() chips: string[] = [];
  @Output() chipRemoved = new EventEmitter<string>();

  removeChip(chip: string): void {
    const index = this.chips.indexOf(chip);
    if (index >= 0) {
      this.chips.splice(index, 1);
      this.chipRemoved.emit(chip);
    }
  }
}
