import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ClrInputModule } from "@clr/angular";

@Component({
  standalone: true,
  selector: 'app-sched-editor',
  imports: [ReactiveFormsModule, CommonModule, ClrInputModule],
  templateUrl: './sched-editor.component.html',
  styleUrl: './sched-editor.component.css'
})
export class SchedEditorComponent {

  private fb = inject(FormBuilder);

  contactForm = this.fb.nonNullable.group({
    name: '',
    cronExpression: '',
    description: '',
    blocked: ''
  });


  saveItem() {
    throw new Error('Method not implemented.');
  }
}
