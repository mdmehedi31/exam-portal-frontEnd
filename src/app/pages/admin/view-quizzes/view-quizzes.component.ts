import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit{

  getQuiz=[{
    qid:0,
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestion:'',
    active:'',
    category : {
      title:''
    }
  } 
  ];
  constructor(private quiz:QuizService){}

  ngOnInit(): void {
    
    this.quiz.quizzes().subscribe((data:any)=>
    {
      this.getQuiz=data;
      console.log(this.getQuiz);
    },
    (error)=>{
      console.log(error);
      Swal.fire('Error !!','Error in Data Load','error');
    }
    );
  }


  deleteQuiz(qId:Number){

    Swal.fire({
      icon:'info',
      title:'are you sure?',
       confirmButtonText: 'Delete',
       showCancelButton: true
      }
      ).then((result)=>{
         if(result.isConfirmed){
          this.quiz.deleteQuiz(qId).subscribe(
            (data)=>{
              this.getQuiz = this.getQuiz.filter((quiz)=> quiz.qid != qId);
              Swal.fire('Success','Quiz Delete','success');
            },(error)=>{
              Swal.fire('Error!!','Deleting Error','error');
              console.log("the Error is : "+error);
              console.log('qId is : '+qId);
            }
          )
         }
      })
      

  }

}
