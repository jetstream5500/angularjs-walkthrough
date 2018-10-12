// The ['http'] is not neccessary but fixes minification
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http',
      function PhoneListController($http) {
        this.orderProp = 'age';

        var self = this;
        $http.get('phones/phones.json').then(function(response) {
          self.phones = response.data.slice(0, 10);
        });
      }
    ]
  });
