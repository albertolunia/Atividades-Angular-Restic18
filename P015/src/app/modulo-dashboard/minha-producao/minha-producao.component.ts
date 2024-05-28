import { Component, OnInit } from '@angular/core';
import { IProject } from '../../model/project.model';
import { switchMap } from 'rxjs';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-minha-producao',
  templateUrl: './minha-producao.component.html',
  styleUrls: ['./minha-producao.component.css'],
})
export class MinhaProducaoComponent implements OnInit {
  projetos: IProject[] = [];

  constructor(private storageService: StorageService) {}

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
}
