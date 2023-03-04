import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  
  categories=[{
    catId:0,
    title:''
  }
]

quiz={
  qId:0,
  title:'',
  description:'',
  maxMarks:'',
  numberOfQuestion:'',
  active:true,
  category:{
    catId:'',
  }

}
  constructor(private category: CategoryService, private snack:MatSnackBar,
    private quizService: QuizService){}

  ngOnInit(): void {
    
    this.category.categories().subscribe((data:any)=>{

       this.categories=data;
       console.log(this.categories)
    },
     (error)=>{
      console.log(error);
      Swal.fire('Error!','Data Loading problem','error');
     }
    );
  }

 addQuiz(){
  if(this.quiz.title.trim()=='' || this.quiz.title==null){
    this.snack.open('Title is required','',{
      duration: 3000,
    });
    return;
  }
   this.quizService.addQuize(this.quiz).subscribe(
    (data)=>{
      Swal.fire('Success','Quiz added Success','success')
      this.quiz={
        qId:0,
        title:'',
        description:'',
        maxMarks:'',
        numberOfQuestion:'',
        active:true,
        category:{
          catId:'',
        },
    };
 },
    (error)=>{
      Swal.fire('Error!!','Quiz adding error','error');
      console.log(error);
    });
}
}