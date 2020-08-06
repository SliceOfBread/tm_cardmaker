// @ts-check
// Accordion 
function myAccFunc(acc) {
  var x = document.getElementById(acc);
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// for demo purposes
//document.getElementById("myBtn").click();


// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function addBlock(info) {
  let c = document.getElementById("cmcanvas");
  let ctx = c.getContext("2d");

  let cmd = info.split(':');
  switch (cmd[0]) {
    case 'template':
        let pngName = cmd[1] + "_normal.png";
      break;
    case 'production':
      let sz = 10;
      let xpos = 40;
      let ypos = 100;
      let width = 180;
      let height = 140;
      let border = 4;
      let img = document.getElementById("prod");
      for (let x=xpos; x < xpos+width; x += sz) {
        for (let y=ypos; y < ypos+height; y += sz) {
          ctx.drawImage(img,x,y,sz,sz);
        }
      }
      // inner gradient
      let my_gradient = ctx.createLinearGradient(0, ypos, 0, ypos + height);
      my_gradient.addColorStop(0, "#9d6c43");
      my_gradient.addColorStop(1, "#5a412c");
      ctx.fillStyle = my_gradient;
      ctx.fillRect(xpos, ypos+border, width, border); // top
      ctx.fillRect(xpos, ypos+height-border*2, width, border); // bottom
      ctx.fillRect(xpos+border, ypos, border, height); // left
      ctx.fillRect(xpos+width-border*2, ypos, border, height); // right

      // outer gradient
      my_gradient = ctx.createLinearGradient(0, ypos, 0, ypos + height);
      my_gradient.addColorStop(0, "#505050");
      my_gradient.addColorStop(1, "#c0c0c0");
      ctx.fillStyle = my_gradient;
      ctx.fillRect(xpos, ypos, width, border);// top
      ctx.fillRect(xpos, ypos+height-border, width, border); // bottom
      ctx.fillRect(xpos, ypos, border, height); // left
      ctx.fillRect(xpos+width-border, ypos, border, height); // right

      break;
  
    default:
      break;
  }
}
