/*function waist() { 
    const form = document.getElementById('circleForm');
    const waist = 16;
    const length = form.elements.length.value;
    const seam = form.elements.seam.value;

    console.log(waist);
    document.getElementById("circleOutput").textContent = waist;
 // Prevent the default form submission behavior
 return false;

 };

 event.preventDefault(); */

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

//Convert the decimal to a fraction of an inch
//offer a cm version