import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { APIService, DeleteMenteeInput, Mentee, Mentor } from "../API.service";
import { Subscription } from "rxjs";

import { Auth } from 'aws-amplify';


@Component({
  selector: 'app-mentee-page',
  templateUrl: './mentee-page.component.html',
  styleUrls: ['./mentee-page.component.scss']
})
export class MenteePageComponent implements OnInit {
  public createForm: FormGroup;
  public mentees: Mentee[] = [];
  private subscription: Subscription | null = null;
  public user: any;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  ngOnInit(): void {

    Auth.currentAuthenticatedUser().then(user => {
        console.log(user);
        this.user = user;
      }
    ).catch(err => {
        console.log(err);
      }
    );


    this.api.ListMentees().then((event) => {
        this.mentees = event.items as Mentee[];
      }
    ).catch((e) => {
        console.log(e);
      }
    );


    this.subscription = <Subscription>(
      this.api.OnCreateMenteeListener().subscribe((event) => {
        const newMentee = event.value.data?.onCreateMentee as Mentee;
        this.mentees = [newMentee, ...this.mentees];
      })
    )
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  public onCreate(mentee: Mentee) {
    this.api
      .CreateMentee(mentee)
      .then((event) => {
        console.log('a new mentee created!');
        this.createForm.reset();
      })
      .catch((e) => {
        console.log('error creating a new mentee...', e);
      });
  }

  onDelete(mentee: Mentee) {
    this.api
      .DeleteMentee({ id: mentee.id } as DeleteMenteeInput)
      .then((event) => {
        console.log('mentee deleted!');
      })
      .catch((e) => {
        console.log('error deleting a mentee...', e);
      });
  }

}
