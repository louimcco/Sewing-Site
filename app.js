
 function calcRadius() {

    let waist = document.getElementById("waist").value;
    let length = document.getElementById("length").value;
    let seam = document.getElementById("seam").value;
    let hemline = document.getElementById("hem").value;
    let panels = document.getElementById("panels").value;
    let skirt = document.getElementById("skirt").value;
    let wradius;
    let radius;
    let angle;

    if (waist == "" || length == "" || panels == "") {
      document.getElementById("circleOutput").textContent = "Please fill all fields";
      document.getElementById("radius").textContent = "";
      document.getElementById("angle").textContent = "";
    return false;
    } else {
    
    // Calculate radius
    wradius = ((waist / 3.1415962) / 2) + (2 * parseFloat(seam));
    
    if (skirt == "270") {
      wradius = wradius * 1.5;
    }

    if (skirt == "180") {
      wradius = wradius * 2;
    }

    if (skirt == "90") {
      wradius = wradius * 4;
    }

    radius = wradius + parseFloat(seam) + parseFloat(hemline) + parseInt(length);
    radius = radius.toFixed(2);
    wradius = wradius.toFixed(2);

    //Calculate angle
    angle = (skirt/panels).toFixed(2);
    console.log(radius);
    document.getElementById("circleOutput").textContent = "Waist Radius: " + wradius + "\"";
    document.getElementById("radius").textContent = "Circle of Radius: " + radius + "\"";
    document.getElementById("angle").textContent = "Segment angle of " + angle + "° for " + panels + " panels";

    return false;
    }
}
function calcRadiusCm() {

    let waist = document.getElementById("waistCm").value;
    let length = document.getElementById("lengthCm").value;
    let seam = document.getElementById("seamCm").value;
    let hemline = document.getElementById("hemCm").value;
    let panels = document.getElementById("panelsCm").value;
    let skirt = document.getElementById("skirtCm").value;
    let wradius;
    let radius;
    let angle;

    if (waist == "" || length == "" || panels == "") {
      document.getElementById("circleOutput").textContent = "Please fill all fields";
      document.getElementById("radius").textContent = "";
      document.getElementById("angle").textContent = "";
    return false;
    }

    else {
    // Calculate radius
    wradius = ((waist / 3.1415962) / 2) + (2 * parseFloat(seam))

    if (skirt == "270") {
      wradius = wradius * 1.5;
    }

    if (skirt == "180") {
      wradius = wradius * 2;
    }

    if (skirt == "90") {
      wradius = wradius * 4;
    }

    radius = wradius + parseFloat(seam) + parseFloat(hemline) + parseInt(length);
    wradius = wradius.toFixed(2);
    radius = radius.toFixed(2);

    //Calculate angle
    angle = (skirt/panels).toFixed(2);

    console.log(radius);
    document.getElementById("radius").textContent = "Circle of Radius: " + radius + "cm";
    document.getElementById("circleOutput").textContent = "Waist Radius: " + wradius + "cm";
    document.getElementById("angle").textContent = "Segment angle of " + angle + "° for " + panels + " panels";

    return false;
    }
}


function calcScale() {
  let ratio = document.getElementById("ratio").value;
  let measurement = document.getElementById("measurement").value;
  let result;

  if (ratio == "" || measurement == "" ) {
    document.getElementById("scaleOutput").textContent = "Please fill all fields";
  return false;
  }

  else {
  result = measurement * ratio;
  document.getElementById("scaleOutput").textContent = result;
  return false;
  }
}

let flag = true;

function swapUnit() {

  flag = !flag;
  if (flag) {
    showInches();
    document.getElementById("radius").textContent = "";
    document.getElementById("circleOutput").textContent = "";
    document.getElementById("angle").textContent = "";
  
  } else {
    
    showCentimeters();
    document.getElementById("radius").textContent = "";
    document.getElementById("circleOutput").textContent = "";
    document.getElementById("angle").textContent = "";
  }
}

document.getElementById("inches").setAttribute("style", "display: inline");
document.getElementById("centimeters").setAttribute("style", "display: none");

function showInches() {
  document.getElementById("inches").setAttribute("style", "display: inline");
  document.getElementById("centimeters").setAttribute("style", "display: none");
}

function showCentimeters() {
  document.getElementById("inches").setAttribute("style", "display: none");
  document.getElementById("centimeters").setAttribute("style", "display: inline");
}

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}

//Convert the decimal to a fraction of an inch (Use Span)
//Make it so box stays same size
