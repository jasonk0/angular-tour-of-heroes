import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Hero } from './hero';

import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'
  private httpOptions = { 
    headers: new HttpHeaders({'Content-Type': 'application/json' })
  }

  handleError<T>(operation = 'operation', result?: T) {
     return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
  }
  getHeroes():Observable<Hero[]> {// 来自Rxjs的可观察对象是异步的，可以适应http请求
    const heroes = this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('英雄的数据已经请求到了！')),
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    )
   
    return heroes
  }
  getHero(id:number): Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`来自英雄服务：找到一条英雄数据id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
  }
  updataHero(hero: Hero) :Observable<any>{
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(() => this.log(`修改了英雄${hero.name}的信息`)),
      catchError(this.handleError<Hero>(`updataHero id=${hero.id}`))
    )
    
  }
  addHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(newHero => this.log(`新增了一位英雄${newHero.id}`)),
      catchError(this.handleError<Hero>(`addHero fail`))
    )
  }
  deleteHero(hero: Hero): Observable<any> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.delete(url, this.httpOptions).pipe(
      tap(() => this.log(`删除了一位英雄${hero.id}`)),
      catchError(this.handleError<Hero>('deleteHero fail'))
    )
  }
  searchHero(term: string): Observable<Hero[]>{
    
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => _.length ? 
        this.log(`找到了匹配“${term}”的英雄`) :
         this.log(`没有匹配“${term}”的英雄`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    )
  }
  private log(message: string) {
    this.messageService.add(message)
  }


  constructor(private messageService: MessageService,   private http: HttpClient,) { }

}
