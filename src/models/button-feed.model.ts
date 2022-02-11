import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Button} from './button.model';

@model()
export class ButtonFeed extends Entity {
  @property({
    type: 'date',
    required: true,
  })
  date: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  message: string;

  @property({
    type: 'string',
    required: true,
  })
  interaction: string;

  @belongsTo(() => Button)
  buttonId: number;

  constructor(data?: Partial<ButtonFeed>) {
    super(data);
  }
}

export interface ButtonFeedRelations {
  // describe navigational properties here
}

export type ButtonFeedWithRelations = ButtonFeed & ButtonFeedRelations;
