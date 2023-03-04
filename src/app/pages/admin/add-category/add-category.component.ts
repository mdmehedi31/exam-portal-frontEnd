import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterLink } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit{



  category = {
    title:'',
    description:'',
  };
  constructor( private _category: CategoryService,
     private snack: MatSnackBar){}

  ngOnInit(): void {
   
  }

  formSubmit(){

    if(this.category.title.trim()=='' || this.category.title==null){
        this.snack.open('Title Required..','',{
          duration:3000,
        });
        return;
    }

    this._category.addCategory(this.category).subscribe(
      (data:any) =>{
        this.category.title='';
        this.category.description='';
        Swal.fire("Success!!","Added Successfully","success")
      
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !!","Category Does not added","error");
      }
    )
  }
   
}
