import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit{


  constructor(private route: ActivatedRoute,
     private quizzes:QuizService, 
     private category: CategoryService,
     private router: Router){}

  qId=0;
  quz:any;
  categories:any;

  ngOnInit(): void {
    
       this.qId = this.route.snapshot.params['qzid'];
       //alert(this.qId);

          this.quizzes.getQuiz(this.qId).subscribe(

            (data)=>{
              this.quz=data;
              console.log(data)
            // Swal.fire('Success!!','Successfully Fetch Data','success');
            },
            (error)=>{
              console.log(error);
              Swal.fire('Error!!','can not fetch data','error');
            }

          );

          this.category.categories().subscribe(
            (data)=>{
              this.categories=data;
            },(error)=>{
              console.log(error);
              alert("error in loading");
            }
            )
     }


    public updateQuiz(){
          
         this.quizzes.updateQuiz(this.quz).subscribe(
          (data)=>{
            Swal.fire('Updated','Data Updated Successfully','success').then((e)=>
              this.router.navigate(['/admin/quizzes'])      
            );
            console.log(data);
          },
          (error)=>{
            Swal.fire('error','Not Updated',error);
            console.log(error);
          }
         );
        }

}
