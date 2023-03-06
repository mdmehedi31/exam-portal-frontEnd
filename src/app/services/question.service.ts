import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(  private http: HttpClient) { }


  public getQuizQuestion(qid:any){
     return this.http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }

  public getQuizQuestionForTest(qid:any){
    return this.http.get(`${baseUrl}/question/quiz/all/${qid}`);
 }

  public addQuizQuestion(ques:any){
     return this.http.post(`${baseUrl}/question/add-question`,ques);
  }

  public deleteQuestion(qesId:any){
    return this.http.delete(`${baseUrl}/question/delete/${qesId}`);
  }
}
