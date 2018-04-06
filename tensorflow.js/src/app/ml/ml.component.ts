import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';


@Component({
  selector: 'app-ml',
  templateUrl: './ml.component.html',
  styleUrls: ['./ml.component.css']
})
export class MlComponent implements OnInit {

  linearModel: tf.Sequential;
  prediction: any;

  constructor() { }

  ngOnInit() {
    this.trainNewModel();
  }

  async trainNewModel() {
    // Define a model for linear regression
    this.linearModel = tf.sequential();
    this.linearModel.add(tf.layers.dense({ units: 1, inputShape: [1] }));

    // Prepare the model for training: specify the loss and optimizeer.
    this.linearModel.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    // Training data.
    const xs = tf.tensor1d([1, 2.2, 3.5, 5, 6]);
    const ys = tf.tensor1d([1.5, 2.5, 4.5, 5, 5]);

    // Train.
    await this.linearModel.fit(ys, xs);

    console.log('Model trained');
  }

  linearPrediction(val) {
    const output = this.linearModel.predict(tf.tensor2d([val], [1,1])) as any;
    this.prediction = Array.from(output.dataSync())[0];
  }
}
