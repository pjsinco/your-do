var Backbone = require('backbone');
var _ = require('underscore');
var Location = require('models/location');
var LocalStorage = require('backbone.localstorage');

var UserLocation = Backbone.Model.extend({
   
    localStorage: new LocalStorage('user-location'),

    defaults: {
        city: undefined,
        state: undefined, 
        zip: undefined,
        lat: undefined,
        lon: undefined
    },

    initialize: function() {
        this.listenTo(this, 'all', this.reportEvent);
    },

    updateLocation: function(attributes) {
        this.save(attributes);
    },

    clearLocation: function () {
        this.clear();
        this.set({ id: 1 });
        this.save();
    },

    reportEvent: function (eventName) {
        console.log(eventName + ' fired on UserLocation');
    },

    isEmpty: function() {
        return (_.size(this.attributes) <= 1) ; // just id
    }


});

module.exports = UserLocation;

