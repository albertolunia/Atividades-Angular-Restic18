import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IProject } from '../../model/project.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-edit-project-dialog',
  templateUrl: './edit-project-dialog.component.html',
  styleUrls: ['./edit-project-dialog.component.css'],
})
export class EditProjectDialogComponent {
  editProjectForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<EditProjectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { projeto: IProject },
    private fb: FormBuilder,
    private storageService: StorageService
  ) {
    this.editProjectForm = this.fb.group({
      projectName: [data.projeto.projectName],
      description: [data.projeto.description],
      startDate: [data.projeto.startDate],
      endDate: [data.projeto.endDate],
      status: [data.projeto.status],
      responsible: [data.projeto.responsible],
    });
  }

  onSave(): void {
    const updatedProject = {
      ...this.data.projeto,
      ...this.editProjectForm.value,
    };
    this.dialogRef.close({ action: 'save', project: updatedProject });
  }

  onDelete(): void {
    this.dialogRef.close({ action: 'delete', projectId: this.data.projeto.id });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
