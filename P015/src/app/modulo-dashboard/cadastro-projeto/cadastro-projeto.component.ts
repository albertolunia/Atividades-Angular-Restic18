import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IProject } from '../../model/project.model';
import { StorageService } from '../../service/storage.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.css'],
})
export class CadastroProjetoComponent implements OnInit {
  cadastroForm = new FormGroup({
    nomeProjeto: new FormControl('', Validators.required),
    descricaoProjeto: new FormControl('', Validators.required),
    dataInicio: new FormControl('', Validators.required),
    dataFim: new FormControl('', Validators.required),
    statusProjeto: new FormControl('', Validators.required),
    responsavel: new FormControl('', Validators.required),
  });

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formValue = this.cadastroForm.value;
    const userData = localStorage.getItem('userData');
    const cadastro: IProject = {
      id: uuidv4(),
      projectName: formValue.nomeProjeto || '',
      description: formValue.descricaoProjeto || '',
      startDate: formValue.dataInicio || '',
      endDate: formValue.dataFim || '',
      status: formValue.statusProjeto || '',
      responsible: formValue.responsavel || '',
      userId: userData ? JSON.parse(userData).id : '',
    };

    this.storageService.addProject(cadastro);
  }
}
