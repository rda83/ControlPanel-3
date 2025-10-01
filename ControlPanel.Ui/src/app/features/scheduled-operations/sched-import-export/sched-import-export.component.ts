import { Component } from '@angular/core';
import { ClrCommonFormsModule, ClrInputModule } from "@clr/angular";

@Component({
  standalone: true,
  selector: 'app-sched-import-export',
  imports: [ClrCommonFormsModule, ClrInputModule],
  templateUrl: './sched-import-export.component.html',
  styleUrl: './sched-import-export.component.css'
})
export class SchedImportExportComponent {

}
