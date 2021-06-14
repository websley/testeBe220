import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.scss'],
})
export class AddWorkoutComponent implements OnInit {

  @Input() workout: any;

  constructor(public alertController: AlertController) { }

  ngOnInit() {}

 async addNewWorkout(){
  const alert = await this.alertController.create({
    header: 'Adicionar novo treino',
    message: "Adicionar treino a modalidade <strong> " + this.workout.title + " </strong>!!!",
    buttons: [
      {
        text: 'Cacenlar',
        role: 'Cacenlar',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Cancelado');
        }
      }, {
        text: 'Confirmar',
        handler: () => {
          console.log('Modalidade id',this.workout.id);
        }
      }
    ]
  });

  await alert.present();
  }

}
