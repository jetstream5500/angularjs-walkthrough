//function add1(a) {
//  return a + 1;
//}

//var s = sinon.spy(add1);
//add1(1);
//expect(true).to.be.true();

describe('phoneList', function() {
  var PhoneListController;
  //spy($componentController,'phoneList');

  beforeEach(function () {
    module('phoneList')
    //var spy = sinon.spy();
    //console.debug(spy);
    inject(function ($componentController) {
      //console.debug(sinon.spy());
      PhoneListController = $componentController('phoneList');
      //$componentController.phoneList.restore();
    });
  });
  afterEach(function () {
    //console.debug(spy.thisValues());
  });

  describe('PhoneListController', function() {
    it('should create a `phones` model with 3 phones', function() {
      PhoneListController.phones.length.should.equal(3);
      //expect(true).to.be.true();
    });
  });
});
