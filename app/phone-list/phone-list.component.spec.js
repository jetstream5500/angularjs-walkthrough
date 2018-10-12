describe('phoneList', function() {
  var PhoneListController;

  beforeEach(function () {
    module('phoneList')

    inject(function ($componentController, _$httpBackend_) {
      // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
      // This allows us to inject a service and assign it to a variable with the same name
      // as the service while avoiding a name conflict.
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      PhoneListController = $componentController('phoneList');
    });
  });

  describe('PhoneListController', function() {
    it('should create a `phones` property with 2 phones fetched with `$http`', function() {
      should.not.exist(PhoneListController.phones);

      $httpBackend.flush();
      PhoneListController.phones.should.deep.equal([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });
    it('should set a default value for the `orderProp` model', function() {
      PhoneListController.orderProp.should.equal('age');
    });
  });
});
