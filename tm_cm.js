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
      let img = document.getElementById("prod");
      let sz = 10;
      for (let x=40; x < 80; x += sz) {
        for (let y=100; y < 120; y += sz) {
          ctx.drawImage(img,x,y,sz,sz);
        }
      }
      break;
  
    default:
      break;
  }
}
