import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('movie', {
      page: params.page,
      size: 10
    });
  }
});
