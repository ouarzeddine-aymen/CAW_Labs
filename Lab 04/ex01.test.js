const  exf  = require('./echo');
beforeEach(() => {
    console.log = jest.fn();
});
test('prints 5 times', () => {
    exf("echo", 5);
  
});
test('exf prints "JS from server" 10 times', () => {
    exf("JS from server", 10);
   
});
