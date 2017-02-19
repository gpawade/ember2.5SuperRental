import DS from 'ember-data';

export default Transform.extend({
  deserialize: function(serialized) {
    return serialized / 100; // returns dollars
  },

  serialize: function(deserialized) {
    return deserialized * 100; // returns cents
  }
});