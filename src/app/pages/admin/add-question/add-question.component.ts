import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  

  qzId:any;
 
  qTitle:any;

  question={
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answare:'',
    quiz: {
      qId:0
    },
  }
  constructor(private route: ActivatedRoute, private questionService: QuestionService ){}

  ngOnInit(): void {
    
   this.qzId=this.route.snapshot.params['qid'];
   this.qTitle=this.route.snapshot.params['title'];
   this.question.quiz['qId']=this.qzId;
   //this.question.quiz.qId=this.qzId;

  }


  formSubmit(){

    if(this.question.content.trim()=='' || this.question.content==null){
      return;
    }
    if(this.question.option1.trim()=='' || this.question.option1==null){
      return;
    }
    if(this.question.option2.trim()=='' || this.question.option1==null){
      return;
    }

    this.questionService.addQuizQuestion(this.question).subscribe(
      (data:any) => {
        console.log(data);
        Swal.fire("Success!!","Data Added Successfully","success");
      },
      (error) => {
        console.log("error is : "+error);
        Swal.fire("Error","Data Can't added","error");
      });

   /* this.questionService.addQuestion(this.question).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire("Success!!","Data added successfully",'success');
      },
      (error)=>{
        console.log("the error is : "+error);
        Swal.fire("Error","Data can't added.","error");
        
      }
    ); */
  }
}
