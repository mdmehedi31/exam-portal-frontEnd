import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {


  catId:any
  quizees:any;

  constructor(private route: ActivatedRoute, private quizServie: QuizService){}

  ngOnInit(): void {
     this.route.params.subscribe((params)=>{
        this.catId=params['catId'];
        if (this.catId == 0) {
          this.quizServie.quizzes().subscribe(
            (data:any)=>{
              this.quizees=data;
              console.log(this.quizees);
            },
            (error)=>{
              console.log(error);
              alert("error is loading")
            }
          );
        } else {
          console.log("Load specific quiz");
          this.quizServie.getQuizzesOfCategory(this.catId).subscribe(
            (data:any)=>{
              this.quizees=data;
            },
            (error)=>{
              alert("get error in loading categories");
              console.log(error)
            }
          )
        }
      });
    
}


}
