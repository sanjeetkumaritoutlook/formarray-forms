import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormArray, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  title = 'FormArray Example in Angular Reactive forms';

  skillsForm: FormGroup; //Build a form model skillsForm using the FormBuilder.
  constructor(private fb:FormBuilder) {
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]) ,
    });
  }

  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
 }
 addSkills() {
  this.skills.push(this.newSkill());
}

removeSkill(i:number) {
  this.skills.removeAt(i);
}

onSubmit() {
  console.log(this.skillsForm.value);
}
  ngOnInit(): void {
    
  }
}

export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}