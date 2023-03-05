import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  public quizzes(){
    return this.http.get(`${baseUrl}/quiz/quizList`)
  }

  public addQuize(quiz:any){
    return this.http.post(`${baseUrl}/quiz/add`, quiz)
  }

  public deleteQuiz(qId:Number){
    return this.http.delete(`${baseUrl}/quiz/delete/${qId}`);
  }

  public getQuiz(qzId:any){

      return this.http.get(`${baseUrl}/quiz/getQuiz/${qzId}`)
  }

  public updateQuiz(qizd:any){
        return this.http.put(`${baseUrl}/quiz/update`,qizd);
  }

  public getQuizzesOfCategory(cid:any){

    return this.http.get(`${baseUrl}/quiz/category/${cid}`)
  }

  public getActiveQuizzes(){

    return this.http.get(`${baseUrl}/quiz/active`);
  } 

  public getActiveCategoryQuizzes(catId:any){

    return this.http.get(`${baseUrl}/quiz/active/category/${catId}`)
  }


}
