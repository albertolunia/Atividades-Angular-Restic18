import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProject } from '../../model/project.model';
import { switchMap } from 'rxjs';
import { StorageService } from '../../service/storage.service';
import { EditProjectDialogComponent } from '../edit-project-dialog/edit-project-dialog.component';

@Component({
  selector: 'app-minha-producao',
  templateUrl: './minha-producao.component.html',
  styleUrls: ['./minha-producao.component.css'],
})
export class MinhaProducaoComponent implements OnInit {
  projetos: IProject[] = [];

  constructor(
    private storageService: StorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('userData') || '{}');

    this.storageService
      .listarProjetos()
      .pipe(
        switchMap((projetosObj: { [key: string]: IProject }) => {
          this.projetos = Object.keys(projetosObj).map((key) => {
            return { ...projetosObj[key], id: key };
          });

          if (user && user.id) {
            this.projetos = this.projetos.filter(
              (projeto) => projeto.userId === user.id
            );
          } else {
            this.projetos = [];
          }

          return this.projetos;
        })
      )
      .subscribe();
  }

  openEditDialog(projeto: IProject): void {
    const dialogRef = this.dialog.open(EditProjectDialogComponent, {
      width: '400px',
      data: { projeto },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.action === 'save') {
          this.updateProject(result.project);
        } else if (result.action === 'delete') {
          this.deleteProject(result.projectId);
        }
      }
    });
  }

  updateProject(updatedProject: IProject): void {
    this.storageService.updateProject(updatedProject).subscribe(() => {
      this.ngOnInit();
    });
  }

  deleteProject(projectId: string): void {
    this.storageService.deleteProject(projectId).subscribe(() => {
      this.ngOnInit();
    });
  }
}
