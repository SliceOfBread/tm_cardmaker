
var aLayers = {};

var userImageList = [];

var imageList = [
  {putUnder: "templates", text: "Green Card", src:"green_normal"},
  {putUnder: "templates", text: "Green Small Bottom", src:"green_small_bottom"},
  {putUnder: "templates", text: "Green Big Bottom", src:"green_big_bottom"},
  {putUnder: "templates", text: "Blue Card", src:"blue_normal"},
  {putUnder: "templates", text: "Blue Big Bottom", src:"blue_big_bottom"},
  {putUnder: "templates", text: "Blue Big Top", src:"blue_big_top"},
  {putUnder: "templates", text: "Red Card", src:"red_normal"},
  {putUnder: "templates", text: "Red Small Bottom", src:"red_small_bottom"},
  {putUnder: "globalparameters", text: "", src:"oxygen"},
  {putUnder: "globalparameters", text: "", src:"temperature"},
  {putUnder: "globalparameters", text: "", src:"venus"},
  {putUnder: "misc", text: "", src:"megacredit"},
  {putUnder: "misc", text: "mc_otherbg", src:"other_player_background", hidden:true},
  {putUnder: "misc", text: "", src:"arrow"},
  {putUnder: "misc", text: "Asterisk", src:"asterisc"},
  {putUnder: "misc", text: "Slash", src:"bar"},
  {putUnder: "misc", text: "", src:"chairman"},
  {putUnder: "misc", text: "", src:"colon"},
  {putUnder: "misc", text: "", src:"delegate"},
  {putUnder: "misc", text: "", src:"influence"},
  {putUnder: "parties", text: "", src:"bureacrats"},
  {putUnder: "parties", text: "", src:"centrists"},
  {putUnder: "parties", text: "", src:"empower"},
  {putUnder: "parties", text: "", src:"greens"},
  {putUnder: "parties", text: "", src:"kelvinists"},
  {putUnder: "parties", text: "", src:"mars_first"},
  {putUnder: "parties", text: "", src:"populists"},
  {putUnder: "parties", text: "", src:"reds"},
  {putUnder: "parties", text: "", src:"scientists"},
  {putUnder: "parties", text: "", src:"spome"},
  {putUnder: "parties", text: "", src:"transhumanists"},
  {putUnder: "parties", text: "", src:"unity"},
  {putUnder: "productionboxes", text: "prod_nxn", src:"nxn", hidden: true},
  {putUnder: "productionboxes", text: "prod_otherbg", src:"other_player_background", hidden:true},
  {putUnder: "requisites", text: "", src:"max_big"},
  {putUnder: "requisites", text: "", src:"min_big"},
  {putUnder: "requisites", text: "", src:"min_medium"},
  {putUnder: "requisites", text: "", src:"min_small"},
  {putUnder: "requisites", text: "", src:"normal"},
  {putUnder: "resources", text: "", src:"animal"},
  {putUnder: "resources", text: "", src:"card"},
  {putUnder: "resources", text: "", src:"data"},
  {putUnder: "resources", text: "", src:"fighter"},
  {putUnder: "resources", text: "", src:"floater"},
  {putUnder: "resources", text: "", src:"heat"},
  {putUnder: "resources", text: "", src:"microbe"},
  {putUnder: "resources", text: "res_otherbg", src:"other_player_background", hidden:true},
  {putUnder: "resources", text: "", src:"plant"},
  {putUnder: "resources", text: "", src:"power"},
  {putUnder: "resources", text: "", src:"radiation"},
  {putUnder: "resources", text: "", src:"science"},
  {putUnder: "resources", text: "", src:"steel"},
  {putUnder: "resources", text: "", src:"titanium"},
  {putUnder: "resources", text: "", src:"TR"},
  {putUnder: "resources", text: "", src:"wild"},
  {putUnder: "tags", text: "", src:"animal"},
  {putUnder: "tags", text: "", src:"building"},
  {putUnder: "tags", text: "", src:"city"},
  {putUnder: "tags", text: "", src:"earth"},
  {putUnder: "tags", text: "", src:"event"},
  {putUnder: "tags", text: "", src:"galactic"},
  {putUnder: "tags", text: "", src:"infrastructure"},
  {putUnder: "tags", text: "", src:"jovian"},
  {putUnder: "tags", text: "", src:"mars"},
  {putUnder: "tags", text: "", src:"microbe"},
  {putUnder: "tags", text: "", src:"moon"},
  {putUnder: "tags", text: "tag_otherbg", src:"other_player_background", hidden:true},
  {putUnder: "tags", text: "", src:"planetary"},
  {putUnder: "tags", text: "", src:"plant"},
  {putUnder: "tags", text: "", src:"power"},
  {putUnder: "tags", text: "", src:"radioactive"},
  {putUnder: "tags", text: "", src:"science"},
  {putUnder: "tags", text: "", src:"space"},
  {putUnder: "tags", text: "", src:"venus"},
  {putUnder: "tags", text: "", src:"wild"},
  {putUnder: "tiles", text: "", src:"city"},
  {putUnder: "tiles", text: "", src:"colony"},
  {putUnder: "tiles", text: "", src:"empty"},
  {putUnder: "tiles", text: "", src:"greenery_no_O2"},
  {putUnder: "tiles", text: "", src:"greenery"},
  {putUnder: "tiles", text: "", src:"ocean"},
  {putUnder: "tiles", text: "", src:"off-world_city"},
  {putUnder: "tiles", text: "", src:"special"},
  {putUnder: "tiles", text: "", src:"trade"},
  {putUnder: "VPs", text: "", src:"1_for"},
  {putUnder: "VPs", text: "", src:"1"},
  {putUnder: "VPs", text: "", src:"2_for"},
  {putUnder: "VPs", text: "", src:"2"},
  {putUnder: "VPs", text: "", src:"3"},
  {putUnder: "VPs", text: "", src:"4"},
  {putUnder: "VPs", text: "", src:"5"},
  {putUnder: "VPs", text: "", src:"blank"},
  {putUnder: "VPs", text: "", src:"n_for"}
];

var ddcount;

var hiddenImage = {};

var domParams = document.getElementById("params").parentNode.removeChild(document.getElementById("params"));
domParams.classList.remove("w3-hide");

resetProject();

function resetProject() {
  document.getElementById("layerlist").innerHTML = "";
  addLayer("Base",{type:"base", color:"#ffffff", height:1050, width:750, params:"color"});

  for (let i=0; i < imageList.length; i++) {
    if (!imageList[i].obj) {
      let imageObj = new Image();
      imageObj.onload = onImageLoad;
      imageObj.src = imageList[i].putUnder + "/" + imageList[i].src + ".png";
      imageObj.dataindex = i;
      imageList[i].obj = imageObj;
    }
  }
  drawProject();
}

function addLayer(title, layer) {
  // <div id='div1' class='divRec'><div class='inside'>item 1</div></div>
  let toAdd = document.createElement("div");
  // toAdd.appendChild(downButton());
  if (!ddcount && (ddcount != 0)) ddcount = 0;
  toAdd.id = "dragdropdiv" + ddcount;
  toAdd.classList.add("divRec");
  let childAdd = document.createElement("div");
  childAdd.classList.add("inside");
  childAdd.innerHTML = title;
  childAdd.onclick = selectLayer;
  // skip delete button for base layer
  if (ddcount) childAdd.appendChild(deleteButton());
  toAdd.appendChild(childAdd);
  document.getElementById("layerlist").appendChild(toAdd);
  aLayers[toAdd.id] = layer;
  ddcount++;

  sortable( document.getElementById('layerlist'), function (item){
    /* console.log(item); */
  });
}

function deleteButton() {
  let toAdd = document.createElement("button");
  toAdd.innerHTML = "X";
  toAdd.style.float = "right";
  toAdd.onclick = function () {deleteListItem(event, this)};
  return toAdd;
}

function genSpan(txt) {
  let toAdd = document.createElement("span");
  toAdd.innerText = txt;
}

function deleteListItem(e,th) {
  e.stopPropagation();
  // delete item from aLayers and from layerlist (DOM)
  let toDelete = th.parentNode.parentNode;
  // let deleteNum = Number(toDelete.id.slice(11));
  // // for every list numbered > than the one being deleted, subtract 1
  // let allLayerNodes = toDelete.parentNode.children;
  // for (let ch=0; ch < allLayerNodes.length; ch++) {
  //   let thisNum = Number(allLayerNodes[ch].id.slice(11));
  //   if (thisNum > deleteNum)   {
  //     thisNum--;
  //     allLayerNodes[ch].id = "dragdropdiv" + thisNum;
  //   }

  // }
  delete aLayers[toDelete.id];
  toDelete.parentNode.removeChild(toDelete);
  drawProject();
}

function selectLayer() {
  let allLayerNodes = document.getElementById("layerlist").children;
  for (let ch=0; ch < allLayerNodes.length; ch++) {
    if (allLayerNodes[ch].classList.contains("selected")) {
      if (domParams.parentNode == allLayerNodes[ch]) {
        allLayerNodes[ch].removeChild(domParams);
      }
      allLayerNodes[ch].classList.remove("selected");
    } else if (allLayerNodes[ch] == this.parentNode) {
      allLayerNodes[ch].classList.add("selected");
      // hide/unhide correct params for this layer
      let thisLayer = aLayers[allLayerNodes[ch].id];
      
      for (let pch=0; pch < domParams.children.length; pch++) {
        let thispch = domParams.children[pch];
        if (thisLayer.params.indexOf(thispch.id) == -1) {
          // not in params, hide it
          thispch.classList.add("w3-hide");
        } else {
          // in params list, show it
          if (thispch.classList.contains("w3-hide")) {
            thispch.classList.remove("w3-hide");
          }
          let chInputs = thispch.getElementsByTagName("input");
          for (let subch of chInputs) {
            subch.value = thisLayer[subch.id.slice(5)];
          }
          chInputs = thispch.getElementsByTagName("textarea");
          for (let subch of chInputs) {
            subch.value = thisLayer[subch.id.slice(5)];
          }
        }
      }
      allLayerNodes[ch].appendChild(domParams);
    }
  }
}

function drawProject() {
  let c = document.getElementById("cmcanvas");
  let ctx = c.getContext("2d");
  let layerDivs = document.getElementsByClassName("divRec");
  for (let i=0; i < layerDivs.length; i++) {
    let layer = aLayers[layerDivs[i].id]
    switch (layer.type) {
      case "block":
        // layer = {type:"block", obj:{}, x:0, y:0, width:0, height:0, params:"allimages"};
        ctx.drawImage(layer.obj,layer.x,layer.y,layer.width,layer.height);
        break;
      case "text":
        // layer = {type:"text", data:"", x:0, y:0, width:0, height:0, 
        // red:0, green:0, blue:0, 
        // font:"Prototype", size:14, lineSpace:4, justify:"center",
        // params:""};
        ctx.textAlign = layer.justify;
        ctx.font = "" + layer.height + "px " + layer.font;
        ctx.fillStyle = layer.color;
        // ctx.fillStyle = "rgb(" + layer.red + "," + layer.blue + "," + layer.green + ")";
        // TBD break up long text into mutiple parts
        if (layer.data.indexOf("\n") == -1) {
          ctx.fillText(layer.data, layer.x, layer.y);
        } else {
          let lines = layer.data.split("\n");
          for (var ln=0; ln < lines.length; ln++) {
            ctx.fillText(lines[ln], layer.x, layer.y + (layer.height + layer.lineSpace) * ln);
          }
        }
        
        break;
      case "production":
        break;
      case "userFile":
        break;
      case "base":
        // set height/width
        c.height = layer.height; // changing width forces clearing
        c.width = layer.width;
        // clear to background color
        ctx.fillStyle = layer.color;
        // ctx.fillStyle = "rgb(" + layer.red + "," + layer.blue + "," + layer.green + ")";
        ctx.fillRect(0,0,layer.width, layer.height);
        break;
    
      default:
        window.alert("Invalid layer type:" + layer.type);
        break;
    }
  }
}

function updateValue(th) {
  let layer = th.parentNode.parentNode.parentNode.parentNode;
  let layerName = layer.id;
  if (th.tagName == "TEXTAREA") {
    layer.firstChild.firstChild.textContent = "Text:" + th.value.substr(0,10);
  }
  if (th.type == "checkbox") {
    aLayers[layerName][th.id.slice(5)] = th.checked;
  } else {
    aLayers[layerName][th.id.slice(5)] = th.value;
  }
  drawProject();
}

// function updateColor(id) {
//   // if we use this for anything aside from Base, we'll need to figure
//   // out what layer it is attached to
//   let lNum = 0;
//   aLayers[lNum][id] = document.getElementById("input" + id).value;
//   drawProject();
// }

function onImageLoad() {
  if (imageList[this.dataindex].hidden) {
    // hidden images don't get menu items
  } else {
    let tmpText = imageList[this.dataindex].text;
    if (!tmpText) {
      tmpText = imageList[this.dataindex].src;
      tmpText = tmpText.replace(/_/g, ' ');
      tmpText = tmpText.replace(tmpText.charAt(0), tmpText.charAt(0).toUpperCase());
      imageList[this.dataindex].text = tmpText;
    }
    // add menu item for image
    // <a onclick="addBlock('template:green')" href="#" class="w3-bar-item w3-button">Green Card</a>
    let toAdd = document.createElement("a");
    toAdd.onclick = addImage;
    toAdd.innerText = tmpText;
    toAdd.classList.add("w3-bar-item");
    toAdd.classList.add("w3-button");
    toAdd.href = "#";
    toAdd.id = "image" + this.dataindex;
    document.getElementById(imageList[this.dataindex].putUnder).appendChild(toAdd);
  }
}

function addImage() {
  let layer = {type:"block", obj:{}, x:0, y:0, width:0, height:0, params:"allimages"};
  let myIndex = this.id.slice(5);
  layer.obj = imageList[myIndex].obj;
  let c = document.getElementById("cmcanvas");
  layer.width = Math.min(layer.obj.width, c.width);
  layer.height = Math.min(layer.obj.height, c.height);
  addLayer(imageList[myIndex].text, layer);
  drawProject();
  //let ctx = c.getContext("2d");

  //let myObj = imageList[myIndex].obj;
  //ctx.drawImage(myObj,0,0,c.width,c.height);
}

function addTextBox() {
  let layer = {type:"text", data:"", x:0, y:0, width:100, height:20, 
              // red:0, green:0, blue:0, 
              color: "#000000",
              font:"Prototype", lineSpace:4, justify:"center",
              params:"allimages color alltext"};
  layer.data = "Replace this text!";
  let c = document.getElementById("cmcanvas");
  layer.x = Math.round(c.width/2);
  layer.y = Math.round(c.height/2);
  layer.width = c.width;  
  addLayer("Text:" + layer.data.substr(0,10), layer);
  drawProject();
}

function addUserFile() {
  document.getElementById("fileselection").click();
}

function addProduction() {
  let c = document.getElementById("cmcanvas");
  let ctx = c.getContext("2d");
  let sz = 10;
  let xpos = 40;
  let ypos = 100;
  let width = 180;
  let height = 140;
  let border = 4;
  // let img = document.getElementById("prod");
  let img = hiddenImage["prod_nxn"];
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

}

function newBackgroundImage(th) {
  try {
    let file = th.files[0];
    // Check if the file is an image.
    if (file.type && file.type.indexOf('image') === -1) {
      window.alert('File is not an image.');
      return;
    }
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      let newI = new Image();
      newI.onload = loadUserImage;
      newI.src = reader.result;
      userImageList.push(newI);
    });
    reader.readAsDataURL(file);  
  } catch (error) {
    window.alert("Something went wrong loading file.")
  }
}

function loadUserImage() {
  let c = document.getElementById("cmcanvas");
  let ctx = c.getContext("2d");
  ctx.drawImage(this,0,0);
}

// Accordion 
function myAccFunc(acc) {
  var x = document.getElementById(acc);
  if (x.classList.contains("w3-hide")) {
    x.classList.remove("w3-hide");
    // if any div siblings are showing, hide them
    let showDivs = x.parentNode.getElementsByClassName("w3-show");
    for (let x=showDivs.length-1; x >= 0; x--) {
      
      showDivs[x].classList.add("w3-hide");
      showDivs[x].classList.remove("w3-show");
    }
    x.classList.add("w3-show");
  } else {
    x.classList.add("w3-hide");
    x.classList.remove("w3-show");
  }
}

// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}
 
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

// drag/drop stuff
function sortable(section, onUpdate){
  var dragEl, nextEl, newPos;
  var dragRect;

  let oldPos = [...section.children].map(item => {
    if (item.id != "dragdropdiv0") item.draggable = true;
    let pos = document.getElementById(item.id).getBoundingClientRect();
    // let pos = item.getBoundingClientRect();
    return pos;
  });
 
  function _onDragOver(e){

      let selectedDoms = document.getElementsByClassName("selected");
      for (let i=selectedDoms.length-1; i >= 0; i--) {
        selectedDoms[i].removeChild(domParams);
        selectedDoms[i].classList.remove("selected");
      }
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      
      var target = e.target;
      if( target && target !== dragEl && target.nodeName == 'DIV' ){
        if(target.classList.contains('inside')) {
          e.stopPropagation();
        } else {
          //getBoundingClientRect contains location-info about the element (relative to the viewport)
          var targetPos = target.getBoundingClientRect();
          // if dragging higher, put element before target
          // if dragging lower, put element after target (i.e. before target.nextSibling)
          if (targetPos.top < dragRect.top) {
            if (target.id == "dragdropdiv0") return;
            section.insertBefore(dragEl, target);
          } else {
            section.insertBefore(dragEl, target.nextSibling);
          } 
           
        }
      }   
  }
  
  function _onDragEnd(evt){
      evt.preventDefault();
      newPos = [...section.children].map(child => {      
           let pos = document.getElementById(child.id).getBoundingClientRect();
          //  let pos = child.getBoundingClientRect();
           return pos;
         });
      dragEl.classList.remove('ghost');
      section.removeEventListener('dragover', _onDragOver, false);
      section.removeEventListener('dragend', _onDragEnd, false);

      nextEl !== dragEl.nextSibling ? onUpdate(dragEl) : false;

      drawProject();
  }
     
    section.addEventListener('dragstart', function(e){     
      dragEl = e.target; 
      dragRect = dragEl.getBoundingClientRect();
      nextEl = dragEl.nextSibling;
  
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('Text', dragEl.textContent);
    
      section.addEventListener('dragover', _onDragOver, false);
      section.addEventListener('dragend', _onDragEnd, false);
       
      setTimeout(function (){
          dragEl.classList.add('ghost');
      }, 0)
     
  });
}
                                        