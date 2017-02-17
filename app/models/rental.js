import DS from 'ember-data';
import attr from 'ember-data/attr';

export default DS.Model.extend({
  title: attr(),
  owner: attr(),
  city: attr(),
  type: attr(),
  image: attr(),
  bedrooms: attr()
});