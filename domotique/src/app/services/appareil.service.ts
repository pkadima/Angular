import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export class AppareilService {

  appareilSubject = new Subject<any[]>();
  
  private appareils = [];

  constructor( private httpClient : HttpClient ){}

  emitAppareilSubject(){
  	this.appareilSubject.next(this.appareils.slice());
  }

  switchOnAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffAll() {
    for(let appareil of this.appareils) {
      appareil.status = 'éteint';
    }
    this.emitAppareilSubject();
  }

  switchOnOne(i: number) {
    this.appareils[i].status = 'allumé';
    this.emitAppareilSubject();
  }

  switchOffOne(i: number) {
    this.appareils[i].status = 'éteint';
    this.emitAppareilSubject();
  }

  getAppareilById(id: number){
  	const appareil = this.appareils.find(
  		(appareilObject) => {
  			return appareilObject.id === id;
  		}
  	);
  	return appareil;
  }

  addAppareil(name: string, status: string){
    const appareilObject = {
      id: 0,
      name: '',
      status: ''
    };
    appareilObject.name = name;
    appareilObject.status = status;
    appareilObject.id = this.appareils[(this.appareils.length -1)].id + 1;
    
    this.appareils.push(appareilObject);
    this.emitAppareilSubject();
  }

  saveAppareilsToServer() {
    this.httpClient
      .put('https://project-test-1512.firebaseio.com/appareils.json', this.appareils)
      .subscribe(
        () => {
          console.log('Enregistrement éffectué !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }

  getAppareilsFromServer() {
    this.httpClient
      .get<any[]>('https://project-test-1512.firebaseio.com/appareils.json')
      .subscribe(
        (response) => {
          this.appareils = response;
          this.emitAppareilSubject();
          console.log('Chargement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}

