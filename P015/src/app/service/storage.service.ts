import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPig, IUser, IWeights } from '../model/usuario.model';
import { AuthService } from './auth.service';
import {
  EMPTY,
  Observable,
  catchError,
  map,
  of,
  switchMap,
  take,
  throwError,
} from 'rxjs';
import { ISessao } from '../model/sessao.model';
import { IProject } from '../model/project.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  cadastrar(dadosUsuario: IUser) {
    console.log(dadosUsuario);
    return this.http
      .post(
        'https://residencia-tic-default-rtdb.firebaseio.com/users.json',
        dadosUsuario
      )
      .subscribe(
        (response) => {
          console.log('Resposta da solicitação:', response);
        },
        (error) => {
          console.error('Erro na solicitação:', error);
        }
      );
  }

  addProject(cadastro: IProject) {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      return this.http
        .post(
          `https://promanage-2ca1d-default-rtdb.firebaseio.com/projects.json`,
          cadastro
        )
        .subscribe(
          (response) => {
            console.log('Resposta da solicitação:', response);
          },
          (error) => {
            console.error('Erro na solicitação:', error);
          }
        );
    }

    return console.log('Usuário não autenticado');
  }

  listarProjetos(): Observable<{ [key: string]: IProject }> {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      return this.http.get<{ [key: string]: IProject }>(
        `https://promanage-2ca1d-default-rtdb.firebaseio.com/projects.json`
      );
    }

    console.log('Usuário não autenticado');
    return of({});
  }
  updateProject(project: IProject): Observable<IProject> {
    return this.http.put<IProject>(
      `https://promanage-2ca1d-default-rtdb.firebaseio.com/projects/${project.id}.json`,
      project
    );
  }

  deleteProject(projectId: string): Observable<void> {
    return this.http.delete<void>(
      `https://promanage-2ca1d-default-rtdb.firebaseio.com/projects/${projectId}.json`
    );
  }

  listarUsuarios() {
    return this.http
      .get<any>('https://residencia-tic-default-rtdb.firebaseio.com/users.json')
      .pipe(
        map((data) => {
          return {
            name: data.name,
            nameFarm: data.nameFarm,
            email: data.email,
            Piggers: data.Piggers,
          } as IUser;
        })
      );
  }

  criptografar(senha: string) {}

  addCadastroSuino(cadastro: IPig) {
    const userData = localStorage.getItem('userData');

    console.log(userData);

    if (userData) {
      const user = JSON.parse(userData);
      console.log(user);
      return this.http
        .post(
          `https://residencia-tic-default-rtdb.firebaseio.com/suinos.json`,
          cadastro
        )
        .subscribe(
          (response) => {
            console.log('Resposta da solicitação:', response);
          },
          (error) => {
            console.error('Erro na solicitação:', error);
          }
        );
    }

    return console.log('Usuário não autenticado');
  }

  listarSuinos(): Observable<{ [key: string]: IPig }> {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      return this.http.get<{ [key: string]: IPig }>(
        `https://residencia-tic-default-rtdb.firebaseio.com/suinos.json`
      );
    }

    console.log('Usuário não autenticado');
    return of({});
  }

  listarPesosSuino(idPig: string): Observable<IWeights[]> {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      return this.http
        .get<{ [key: string]: IWeights }>(
          `https://residencia-tic-default-rtdb.firebaseio.com/pesos.json`
        )
        .pipe(
          map((pesosObj) => {
            const pesosArray: IWeights[] = [];
            for (const key in pesosObj) {
              if (pesosObj[key].idPig === idPig) {
                pesosArray.push({ ...pesosObj[key], id: key });
              }
            }
            return pesosArray;
          })
        );
    }

    console.log('Usuário não autenticado');
    return of([]);
  }

  addPesoToSuino(userId: string, peso: IWeights) {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      return this.http
        .post(
          `https://residencia-tic-default-rtdb.firebaseio.com/pesos.json`,
          peso
        )
        .subscribe(
          (response) => {
            console.log('Resposta da solicitação:', response);
          },
          (error) => {
            console.error('Erro na solicitação:', error);
          }
        );
    }

    return console.log('Usuário não autenticado');
  }

  addCadastroSessao(cadastro: ISessao) {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      return this.http
        .post(
          `https://residencia-tic-default-rtdb.firebaseio.com/sessoes.json`,
          cadastro
        )
        .subscribe(
          (response) => {
            console.log('Resposta da solicitação:', response);
          },
          (error) => {
            console.error('Erro na solicitação:', error);
          }
        );
    }

    return console.log('Usuário não autenticado');
  }

  listarSessoes(): Observable<{ [key: string]: ISessao }> {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      return this.http.get<{ [key: string]: ISessao }>(
        `https://residencia-tic-default-rtdb.firebaseio.com/sessoes.json`
      );
    }

    console.log('Usuário não autenticado');
    return of({});
  }

  atualizarSessao(sessao: ISessao) {
    const userData = localStorage.getItem('userData');

    if (userData) {
      const user = JSON.parse(userData);
      const id = sessao.id;
      const sessaoSemId = {
        ...sessao,
        id: null,
      };

      return this.http
        .put(
          `https://residencia-tic-default-rtdb.firebaseio.com/sessoes/${id}.json`,
          sessaoSemId
        )
        .subscribe(
          (response) => {
            console.log('Resposta da solicitação:', response);
          },
          (error) => {
            console.error('Erro na solicitação:', error);
          }
        );
    }

    return console.log('Usuário não autenticado');
  }
}
