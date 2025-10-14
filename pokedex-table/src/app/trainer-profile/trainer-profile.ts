import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

type TrainerProfileForm = {
  name: string;
  age: string;
  address: string;
  pokemon1: string;
  pokemon2: string;
  pokemon3: string;
  pokemon4: string;
  pokemon5: string;
  pokemon6: string;
};

@Component({
  selector: 'app-trainer-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './trainer-profile.html',
  styleUrls: ['./trainer-profile.css']
})
export class TrainerProfile {
  trainerList: TrainerProfileForm[] = [];

  formGroup = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    age: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    address: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    pokemon1: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    pokemon2: new FormControl('', { nonNullable: true }),
    pokemon3: new FormControl('', { nonNullable: true }),
    pokemon4: new FormControl('', { nonNullable: true }),
    pokemon5: new FormControl('', { nonNullable: true }),
    pokemon6: new FormControl('', { nonNullable: true }),
  });

  ngOnInit() {
    const savedTrainers = localStorage.getItem('trainerList');
    if (savedTrainers) {
      this.trainerList = JSON.parse(savedTrainers);
    }

    window.addEventListener('storage', (event) => {
      if (event.key === 'trainerList') {
        this.trainerList = JSON.parse(event.newValue || '[]');
      }
    });
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const newTrainer = this.formGroup.getRawValue();
      this.trainerList.push(newTrainer);
      this.saveToLocalStorage();
      this.formGroup.reset();
    }
  }

  deleteProfile(index: number) {
    this.trainerList.splice(index, 1);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('trainerList', JSON.stringify(this.trainerList));
  }
}
