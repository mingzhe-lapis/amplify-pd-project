import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { APIService, Mentor } from "../API.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-mentor-page',
  templateUrl: './mentor-page.component.html',
  styleUrls: ['./mentor-page.component.scss']
})
export class MentorPageComponent implements OnInit, OnDestroy {
  public createForm: FormGroup;
  public mentors: Mentor[] = [];
  private subscription: Subscription | null = null;


  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.api.ListMentors().then((event) => {
        this.mentors = event.items as Mentor[];
      }
    ).catch((e) => {
        console.log(e);
      }
    );

    this.subscription = <Subscription>(
      this.api.OnCreateMentorListener.subscribe((event) => {
        const newMentor = event.value.data?.onCreateMentor as Mentor;
        this.mentors = [newMentor, ...this.mentors];
      })
    )
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  public onCreate(mentor: Mentor) {
    this.api
      .CreateMentor(mentor)
      .then((event) => {
        console.log('a new mentor created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating a new mentor...', e);
      });
  }

  onDelete(mentor: Mentor) {
    this.api
      .DeleteMentor(mentor)
      .then((event) => {
        console.log('mentor deleted!');
      })
      .catch((e) => {
        console.log('error deleting a mentor...', e);
      });
  }
}
