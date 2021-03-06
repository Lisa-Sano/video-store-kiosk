import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  releaseDate: DS.attr('date'),
  overview: DS.attr('string'),
  inventory: DS.attr('number'),
  posterFilename: DS.attr('string')
});
