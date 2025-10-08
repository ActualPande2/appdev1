import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

type TrainerProfileForm = {
  name: string;
  age: string;
  address: string;
  pokemonTeam: string[];
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
    name: new FormControl('', { nonNullable: true }),
    age: new FormControl('', { nonNullable: true }),
    address: new FormControl('', { nonNullable: true }),
    pokemonTeam: new FormArray([
      new FormControl('', { nonNullable: true }),
      new FormControl('', { nonNullable: true }),
      new FormControl('', { nonNullable: true }),
      new FormControl('', { nonNullable: true }),
      new FormControl('', { nonNullable: true }),
      new FormControl('', { nonNullable: true })
    ])
  });

  get pokemonTeamControls() {
    return (this.formGroup.get('pokemonTeam') as FormArray).controls;
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const TrainerProfileForm = this.formGroup.getRawValue();
      this.trainerList.push(TrainerProfileForm);
      this.formGroup.reset();
      this.pokemonTeamControls.forEach(ctrl => ctrl.setValue(''));
    }
  }
}
