var MyDependency = require('my-dependency')
var MyOtherDependency = require('my-other-dependency')

function MyProvider() {

}

MyProvider.prototype.myFunction = function() {
  return "hi!"
}

MyProvider.getInstance = function() {
  return new MyProvider();
}

module.exports = MyProvider