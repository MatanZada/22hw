// IN a diffrent JS file, create two function (one that console.log "something", and the other take a function as a **param** and call it.(cb))
// Call this function once with a function as a param, and once without any params. (it will cause an error - make it work).

function callbackFunc() {
  console.log("print something..");
}
function printSometging() {
  console.log("two pairs");
}
function print(cb) {
  if (cb instanceof Function) {
    //check if cb is a type of 'Function'(with F !)
    //when writing with 'f' you defining a function!!
    cb();
  }
  console.log("in callback function \n" + cb);
}

print(callbackFunc);
print(printSometging);
print("CallBackFunction");
