import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { SubjectServiceService } from 'src/app/core/services/subject-service.service';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  private ngUnsubscribe = new Subject();
  public form: FormGroup;
  public value: string = "";

  constructor(private subjectServiceService:SubjectServiceService) {
    this.initForm();
  }

  ngOnInit(): void {
  }

  private initForm():void{
    this.form = new FormGroup({fildOne:new FormControl(null)})
  }

  changeValueSubject(valueFild:string){
    this.subjectServiceService.changeValue(valueFild);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
