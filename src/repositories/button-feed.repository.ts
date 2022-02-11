import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {ButtonFeed, ButtonFeedRelations, Button} from '../models';
import {ButtonRepository} from './button.repository';

export class ButtonFeedRepository extends DefaultCrudRepository<
  ButtonFeed,
  typeof ButtonFeed.prototype.id,
  ButtonFeedRelations
> {

  public readonly button: BelongsToAccessor<Button, typeof ButtonFeed.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource, @repository.getter('ButtonRepository') protected buttonRepositoryGetter: Getter<ButtonRepository>,
  ) {
    super(ButtonFeed, dataSource);
    this.button = this.createBelongsToAccessorFor('button', buttonRepositoryGetter,);
    this.registerInclusionResolver('button', this.button.inclusionResolver);
  }
}
