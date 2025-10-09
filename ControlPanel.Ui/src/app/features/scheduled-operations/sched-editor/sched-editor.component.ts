import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ClrInputModule, ClrIconModule } from "@clr/angular";
import { Pipeline } from './pipeline.model';

@Component({
  standalone: true,
  selector: 'app-sched-editor',
  imports: [ReactiveFormsModule, CommonModule, ClrInputModule, ClrIconModule],
  templateUrl: './sched-editor.component.html',
  styleUrl: './sched-editor.component.css'
})


export class SchedEditorComponent implements OnInit{
   
  removePipelineItem(index: number) {
    this.pilelineForm.controls.pipelineItems.removeAt(index);
  }

  addPipelineItem() {
    this.pilelineForm.controls.pipelineItems.push(this.createPipelineItem());
  }

  private fb = inject(FormBuilder);

  pilelineForm = this.fb.nonNullable.group({
    name: '',
    cronExpression: '',
    description: '',
    blocked: '',
    pipelineItems: this.fb.array([this.createPipelineItem()]),
  });


  ngOnInit(): void {
    const pileline: Pipeline = {
      name: "Загрузка справочника организаций",
      cronExpression: "* 1 * * *",
      description: "Интеграция с системой заказчика",
      blocked: "Нет",
      pipelineItems: [
        {
          sortOrder: "1",
          description: "Загрузка через АПИ",
          blocked: "Нет",
          options: "User, Password",
        },
        {
          sortOrder: "2",
          description: "Валидация загруженных данных",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "3",
          description: "Создание уведомлений",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "4",
          description: "Проверка уведомлений",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "5",
          description: "Отправка уведомлений",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "6",
          description: "Нормализация загруженных данных",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "7",
          description: "Сохранение данных в БД",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "8",
          description: "Расчеты на основе загруженных данных",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "9",
          description: "Корректировки результатов расчета",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "10",
          description: "Сохранение результатов расчета",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "11",
          description: "Нормализация загруженных данных для внешней системы",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "12",
          description: "Получение токена экспорта",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "13",
          description: "Отправка расчитанных данных во внешнюю систему",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "14",
          description: "Фиксация ошибочных пакетов",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "15",
          description: "Отправка уведомлений об ошибках",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "16",
          description: "Повторные попытки отправить ошибочные пакеты",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "17",
          description: "Отправка уведомлений о завершении расчетов",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "18",
          description: "Расчет метрик производительности расчета",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "19",
          description: "Сохранение метрик производительности расчета",
          blocked: "Нет",
          options: "URL",
        },
        {
          sortOrder: "20",
          description: "Отправка метрик производительности расчета в систему мониторинга",
          blocked: "Нет",
          options: "URL",
        }
      ],
    };

    this.pilelineForm.controls.pipelineItems.clear();

    pileline.pipelineItems.forEach(item => {
      this.pilelineForm.controls.pipelineItems.push(this.createPipelineItem());
    });

    this.pilelineForm.patchValue(pileline);

  }

  createPipelineItem() {
    const pipelineItemGroup = this.fb.nonNullable.group({
      sortOrder:  '',
      description:  '',
      blocked: '',
      options: '',
    });

    return pipelineItemGroup;
  }

  saveItem() {
    throw new Error('Method not implemented.');
  }
}
