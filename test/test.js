var loadModule = require('./load-module').loadModule
var chai = require('chai')
chai.should()

describe('when my-provider is instanciated', function() {
  var provider
  var mock1 = {}
  var mock2 = {}

  beforeEach(function() {
    var MyProvider = loadModule('./index.js', {
      'my-dependency' : mock1,
      'my-other-dependency': mock2
    }).module.exports
    provider = MyProvider.getInstance()
  })

  it('should be possible to call that method', function() {
    provider.myFunction().should.equal("hi!")
  })



})

