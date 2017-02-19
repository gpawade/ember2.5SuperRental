import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr(),
  // lastName: attr(),
  birthday: attr(),

  // fullName: Ember.computed('firstName', 'lastName', function() {
  //   return `${this.get('firstName')} ${this.get('lastName')}`;
  // }),

  
  verified: attr('boolean', { defaultValue: false }),

  createdAt: attr('date', {
    defaultValue() { return new Date(); }
  })

});