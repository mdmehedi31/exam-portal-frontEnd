import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-start',
  templateUrl: './quiz-start.component.html',
  styleUrls: ['./quiz-start.component.css']
})
export class QuizStartComponent implements OnInit{

  qid:any;
  question:any;
  constructor(private locationStrategy: LocationStrategy,
    private route: ActivatedRoute,
    private questionService:QuestionService
    ){}

  ngOnInit(): void {
    
    this.backButton();
    this.qid =this.route.snapshot.params['qId'];

    this.getQuestion();
  }


  getQuestion() {
    
    this.questionService.getQuizQuestionForTest(this.qid).subscribe(
      (data)=>{
        this.question=data;
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error!!","Get Error",'error');
      }
    )
  }

  
   backButton(){
    history.pushState(null,'',location.href);
    this.locationStrategy.onPopState(()=> {
      history.pushState(null,'',location.href);
    });
   }
}
