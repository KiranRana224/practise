import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Todo {
  id: number;
  title: string;
  assignee: string;
  due: string;
  notes: string;
}

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  editable = false;

  todo: Todo = {
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    assignee: 'Kiran',
    due: '2026-02-20',
    notes: 'Important task',
    id: 0,
  };

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [''],
      assignee: [''],
      due: [''],
      notes: [''],
    });
  }

  // edit() {
  //   this.editable = true;

  //   // ⭐ PATCH DATA INTO INPUTS
  //   this.form.patchValue(this.todo);
  // }

  save() {
    this.todo = { ...this.todo, ...this.form.value };
    this.editable = false;
  }

  cancel() {
    this.editable = false;
  }

  resizeTitle(input: HTMLInputElement) {
    const length = input.value.length || 1;

    // ⭐ adjust multiplier if needed
    input.style.width = length + 1 + 'ch';
  }
  edit() {
    this.editable = true;
    this.form.patchValue(this.todo);

    setTimeout(() => {
      const el = document.querySelector('.inline-title') as HTMLInputElement;
      if (el) this.resizeTitle(el);
    });
  }
}
