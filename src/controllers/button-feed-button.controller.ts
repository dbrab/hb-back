import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  ButtonFeed,
  Button,
} from '../models';
import {ButtonFeedRepository} from '../repositories';

export class ButtonFeedButtonController {
  constructor(
    @repository(ButtonFeedRepository)
    public buttonFeedRepository: ButtonFeedRepository,
  ) { }

  @get('/button-feeds/{id}/button', {
    responses: {
      '200': {
        description: 'Button belonging to ButtonFeed',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Button)},
          },
        },
      },
    },
  })
  async getButton(
    @param.path.number('id') id: typeof ButtonFeed.prototype.id,
  ): Promise<Button> {
    return this.buttonFeedRepository.button(id);
  }
}
