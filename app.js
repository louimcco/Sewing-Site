
 function calcRadius() {

    let waist = document.getElementById("waist").value;
    var length = document.getElementById("length").value;
    let seam = document.getElementById("seam").value;
    let hemline = document.getElementById("hem").value;
    let wradius;
    let radius;
    // Calculate radius
    wradius = (waist / 3.1415962) / 2
    radius = wradius + parseFloat(seam) + parseFloat(hemline) + parseInt(length);
    radius = radius.toFixed(2)

    console.log(radius);
    document.getElementById("circleOutput").textContent = radius;
    return false;
}

function setRuleValue(selector, prop, value) {
    selector = selector.toLowerCase();

    var sheet, sheets = document.styleSheets;
    var j, rule, rules;

    if (sheets) {

          // Search style sheets for rule
    for (var i=0, iLen=sheets.length; i<iLen; i++) {
        sheet = sheets[i];
        j = 0;
  
        // Choose .cssRules or .rules, whichever is supported
        while (rule = (sheet.cssRules[j] || sheet.rules[j])) {
          j++;
  
          if (rule.selectorText.toLowerCase() == selector) {
            rule.style[prop] = value;
  
            // If had success, return true
            return true;
          }
        }
      }
    }
    // If get here, didn't find rule so return false
    return false;
  }
  
  // Turn metric on, imperial off
  function showInches() {
    setRuleValue('.inches','display', '');
    setRuleValue('.centimeters', 'display', 'none' );
  }
  
  // Turn imperial on, metric off
  function showCentimeters() {
    setRuleValue('.inches','display', 'none');
    setRuleValue('.centimeters', 'display', '' );
  }
  

//Convert the decimal to a fraction of an inch (Use Span)
//offer a cm version