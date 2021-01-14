import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SubjectServiceService } from 'src/app/core/services/subject-service.service';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  private ngUnsubscribe = new Subject();
  public value: string = "NONE";

  constructor(private subjectServiceService:SubjectServiceService) {
    this.subscribErrorSubject();
  }

  ngOnInit(): void {
  }

  subscribErrorSubject(){
    this.subjectServiceService.subject.pipe(takeUntil(this.ngUnsubscribe))
    .subscribe((newValue) => {
      this.value = newValue;
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
