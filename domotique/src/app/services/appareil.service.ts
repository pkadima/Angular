import { Subject } from 'rxjs/Subject';

export class AppareilService {

  appareilSubject = new Subject<any[]>();
  
  private appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      id: 2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'éteint'
    },
    {
      id: 4,
      name: 'Télévision',
      status: 'éteint'
    },
    {
      id: 5,
      name: 'Lave vaiselle',
      status: 'éteint'
    }
  ];

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
}

