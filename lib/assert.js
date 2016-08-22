(function(exports) {

  function describe(description, blockToRun) {
    document.write('<span style="font-weight:bold;">' + description + '</span><br>');
    blockToRun();
    document.write('<br>');
  }

  function it(description, blockToCheck) {
    try {
      blockToCheck();
      document.write('<span style="color:green">' + description + '</span><br>');
    }
    catch (e) {
      document.write('<span style="color:red">' + description + '</span><br>');
      document.write('<pre style="padding-left:30px;margin:0;">' + e.message + '</pre><br>');
    }
  }

  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }

  function isFalse(assertionToCheck) {
    if (assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsy");
    }
  }

  exports.describe = describe;
  exports.it = it;
  exports.isTrue = isTrue;
  exports.isFalse = isFalse;

})(this);
