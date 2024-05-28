
 function calcRadius() {

    let waist = document.getElementById("waist").value;
    let length = document.getElementById("length").value;
    let seam = document.getElementById("seam").value;
    let hemline = document.getElementById("hem").value;
    let wradius;
    let radius;

    if (waist == "" || length == "" ) {
      document.getElementById("circleOutput").textContent = "Please fill all fields";
      document.getElementById("radius").textContent = "";
    return false;
    } else {

    
    // Calculate radius
    wradius = ((waist / 3.1415962) / 2) + (2 * parseFloat(seam))
    radius = wradius + parseFloat(seam) + parseFloat(hemline) + parseInt(length);
    radius = radius.toFixed(2)
    wradius = wradius.toFixed(2)

    console.log(radius);
    document.getElementById("circleOutput").textContent = "Waist Radius: " + wradius + "\"";
    document.getElementById("radius").textContent = "Circle of Radius: " + radius + "\"";

    return false;
    }
}
function calcRadiusCm() {

    let waist = document.getElementById("waistCm").value;
    let length = document.getElementById("lengthCm").value;
    let seam = document.getElementById("seamCm").value;
    let hemline = document.getElementById("hemCm").value;
    let wradius;
    let radius;

    if (waist == "" || length == "" ) {
      document.getElementById("circleOutput").textContent = "Please fill all fields";
      document.getElementById("radius").textContent = "";
    return false;
    }
    else {
    // Calculate radius
    wradius = ((waist / 3.1415962) / 2) + (2 * parseFloat(seam))
    radius = wradius + parseFloat(seam) + parseFloat(hemline) + parseInt(length);
    wradius = wradius.toFixed(2)
    radius = radius.toFixed(2)
    

    console.log(radius);
    document.getElementById("radius").textContent = "Circle of Radius: " + radius + "cm";
    document.getElementById("circleOutput").textContent = "Waist Radius: " + wradius + "cm";
    return false;
    }
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
  
  let flag = true;

  function swapUnit() {
    flag = !flag;
    if (flag) {
      showInches();
      document.getElementById("radius").textContent = "";
      document.getElementById("circleOutput").textContent = "";
    } else {
      showCentimeters();
      document.getElementById("radius").textContent = "";
      document.getElementById("circleOutput").textContent = "";
    }
  }

  
  function showInches() {
    setRuleValue('.inches','display', '');
    setRuleValue('.centimeters', 'display', 'none' );
  }
  

  function showCentimeters() {
    setRuleValue('.inches','display', 'none');
    setRuleValue('.centimeters', 'display', '' );
  }
  
function ToggleMobileMenu(menu) {
  menu.classList.toggle('open');
  
}

//Convert the decimal to a fraction of an inch (Use Span)
