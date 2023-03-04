import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit{

  qzId:any;
  title:any;
  questions:any = [];

  constructor(private route: ActivatedRoute,
    private questionServce: QuestionService, private snack:MatSnackBar){}

  ngOnInit(): void {
      this.qzId =this.route.snapshot.params['qid'];
      this.title= this.route.snapshot.params['title'];
      
      this.questionServce.getQuizQuestion(this.qzId).subscribe(
        (data:any)=>{
          console.log("Data loaded"+data);
          this.questions=data;
        },(error)=>{
          console.log(error);
          Swal.fire('Error','Data is not loaded','error');
        }
      );
  }


  deleteQuestion(qid:any){

    Swal.fire({
      icon:'info',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure?'
    }).then((result)=>{
      
       if(result.isConfirmed){
        this.questionServce.deleteQuestion(qid).subscribe(
          (data:any)=>{
              
            this.questionServce.deleteQuestion(qid).subscribe(
              (data)=>{
                  this.snack.open('Question Deleted','',{
                    duration:3000,
                  });

                  this.questions=this.questions.filter((q:any)=>
                  q.quesId!=qid);
              },
              (error)=>{
                  this.snack.open('Error in deleting questions','',
                  {
                    duration:3000,
                  });
                  console.log(error);
              }
        );
             
          }
        )
       }
    });
  }

}
