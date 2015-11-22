import 'es5-shim';

beforeEach(() => {
  sinon.stub(console, 'error');
});

afterEach(function checkNoUnexpectedWarnings() {
    
  if (typeof console.error.restore === 'function') {
    assert(!console.error.called, () => {
      return `${console.error.getCall(0).args[0]} \nIn '${this.currentTest.fullTitle()}'`;
    });
    console.error.restore();
  }
});

var context = require.context('.', true,/Spec$/);
context.keys().forEach(context);
