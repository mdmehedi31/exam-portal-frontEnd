import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-quiz-rules',
  templateUrl: './quiz-rules.component.html',
  styleUrls: ['./quiz-rules.component.css']
})
export class QuizRulesComponent implements OnInit {


  qid:any;
  
  quiz:any;

  constructor(
    private route: ActivatedRoute,
    private quizService: QuizService
  ){

  }

  ngOnInit(): void {

     this.qid=this.route.snapshot.params['qId'];

     this.quizService.getQuiz(this.qid).subscribe(
      (data:any)=>{
        //console.log("The loaded Data is : "+data);
        this.quiz=data;
      },
      (error)=>{
        Swal.fire('Error!!','Error get is showing data...','error');
       // console.log("Error is : "+error);
      }
     )
  }

}
