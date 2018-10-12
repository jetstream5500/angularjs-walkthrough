describe('phoneList', function() {
  var PhoneListController;

  beforeEach(function () {
    module('phoneList')

    inject(function ($componentController) {
      PhoneListController = $componentController('phoneList');
    });
  });

  describe('PhoneListController', function() {
    it('should create a `phones` model with 3 phones', function() {
      PhoneListController.phones.length.should.equal(3);
    });
    it('should set a default value for the `orderProp` model', function() {
      PhoneListController.orderProp.should.equal('age');
    });
  });
});
