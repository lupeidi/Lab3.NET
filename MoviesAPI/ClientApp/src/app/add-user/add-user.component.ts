import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';     // Event Emitter pt submit reactive form
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { User } from '../shared/user.model';



@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styles: []
})




export class AddUserComponent implements OnInit {

    idCopied: number;
    userReactiveForm: FormGroup;

    get FirstName() {
        return this.userReactiveForm.get('FirstName');
    }

    get LastName() {
        return this.userReactiveForm.get('LastName');
    }

    get Username() {
        return this.userReactiveForm.get('Username');
    }


    // Form state
    loading = false;
    success = false;




    constructor(public service: UserService,
        private location: Location,
        private fb: FormBuilder
    ) { }






    ngOnInit() {


        this.userReactiveForm = this.fb.group({
            FirstName: ['', ['']],
            LastName: ['', ['']],
            Username: ['', ['']],
            Password: ['', ['']],

        });


        this.resetForm();   // initialize model property  
    }







    onSubmit(form) {

        this.userReactiveForm = form;  // form transmis ca parametru din html
        this.service.formDataUser = this.userReactiveForm.value;  // service.formDataMovie ia valoarea form din html

        this.service.postUser()
            // .subscribe(   // // Call subscribe() to start listening for updates.
            .toPromise()
            .then(
                response => {    // if POST operation succeeds we set the form to initial values
                    console.log("successfully added");
                    this.resetForm();
                    this.service.getUsers(); // refresh la lista;
                    this.location.back();
                },
                error => {
                    console.log(error)
                })

    }




    resetForm() {
        this.service.formDataUser = {  // initialize model property
            Id: 0,
            FirstName: '',
            LastName: '',
            Username: '',
            Password: '',
        }

    }
}
