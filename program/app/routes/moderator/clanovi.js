import Ember from 'ember';

export default Ember.Route.extend({
	ajax: Ember.inject.service(),
	userService: Ember.inject.service(),
	session: Ember.inject.service(),
	
	beforeModel(transition) {
	
		if (!this.get('session.isAuthenticated') 
			|| (this.get('session.data.authenticated.korisnik.tip') !== "Moderator")) {
			this.transitionTo('unauthorized');
		}
	},

	model() {
		return this.get('ajax').request('http://localhost:8080/moderator/clanovi', { method: 'GET' });
	}
});
