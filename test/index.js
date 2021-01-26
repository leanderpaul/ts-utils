const { assert } = require('chai');

const utils = require('../dist/index');

const testObject = {
  key1: 'value1',
  key2: '',
  key3: {
    key4: 'value4',
    key5: ''
  }
};

describe('trimObject()', function () {
  it('trims the object', function () {
    const expectedObj = { ...testObject };
    delete expectedObj.key2;
    delete expectedObj.key3.key5;
    const result = utils.trimObject(testObject);
    assert.deepEqual(result, expectedObj);
  });
});

describe('pickKeys()', function () {
  it('picks the required keys', function () {
    const expectedObj = { ...testObject };
    delete expectedObj.key3;
    const result = utils.pickKeys(testObject, ['key1', 'key2']);
    assert.deepEqual(result, expectedObj);
  });
});

describe('removeKeys()', function () {
  it('removes the keys not needed', function () {
    const expectedObj = { ...testObject };
    delete expectedObj.key3;
    const result = utils.removeKeys(testObject, ['key3']);
    assert.deepEqual(result, expectedObj);
  });
});
