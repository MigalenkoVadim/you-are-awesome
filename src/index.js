
const createEnumerableProperty = (propertyName) => {
  return propertyName;
};

const createNotEnumerableProperty = (propertyName) => {

};

const createProtoMagicObject = () => {
  var obj = function(){};
  obj.__proto__ = obj.prototype;
  return obj;
};

var incrementorTemp = 0;
const incrementor = () => {
  incrementor.toString = () =>  {
    return incrementorTemp;
  };
  incrementorTemp++;
  return incrementor;
};

const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};

const createSerializedObject = () => {
   return null;
};
const toBuffer = () => {};

const sortByProto = (arr) => {
  return arr.sort();
  arr.sort(function (a, b) {
  return a.__proto__ - b.__proto__;
  });
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
