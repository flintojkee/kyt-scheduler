import { Subject, Observable } from 'rxjs';

export abstract class PopupService<I> {
  private showPopup$: Subject<I> = new Subject();
  private popupAnswer$: Subject<any> = new Subject();
  constructor() {}
  showPopup<T = {}>(coreComponent: I): Observable<T> {
    this.showPopup$.next(coreComponent);
    return this.popupAnswer$.asObservable();
  }
  getPopup(): Observable<any> {
    return this.showPopup$.asObservable();
  }

  closePopup<T = {}>(answer?: T): void {
    this.showPopup$.next(null);
    if (answer) {
      this.popupAnswer$.next(answer);
    }
  }
}
