
var aLayers = {};

var userImageList = [];
var otherBgList = {};

var blockList = [
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
  {putUnder: "misc", text: "", src:"megacredit", otherbg:"mc_otherbg"},
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
  // {putUnder: "productionboxes", text: "prod_otherbg", src:"other_player_background", hidden:true},
  {putUnder: "requisites", text: "", src:"max_big"},
  {putUnder: "requisites", text: "", src:"min_big"},
  {putUnder: "requisites", text: "", src:"min_medium"},
  {putUnder: "requisites", text: "", src:"min_small"},
  {putUnder: "requisites", text: "", src:"normal"},
  {putUnder: "resources", text: "", src:"animal", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "", src:"card", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "", src:"data", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "", src:"fighter", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "", src:"floater", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "", src:"heat", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "", src:"microbe", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "res_otherbg", src:"other_player_background", hidden:true},
  {putUnder: "resources", text: "", src:"plant", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "", src:"power", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "", src:"radiation", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "", src:"science", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "", src:"steel", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "", src:"titanium", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "", src:"TR", otherbg:"res_otherbg"},
  {putUnder: "resources", text: "", src:"wild", otherbg:"res_otherbg"},
  {putUnder: "tags", text: "", src:"animal", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"building", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"city", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"earth", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"event", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"galactic", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"infrastructure", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"jovian", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"mars", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"microbe", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"moon", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "tag_otherbg", src:"other_player_background", hidden:true},
  {putUnder: "tags", text: "", src:"planetary", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"plant", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"power", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"radioactive", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"science", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"space", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"venus", otherbg:"tag_otherbg"},
  {putUnder: "tags", text: "", src:"wild", otherbg:"tag_otherbg"},
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
  {putUnder: "VPs", text: "", src:"VPnegative"},
  {putUnder: "VPs", text: "", src:"n_for"},
  {putUnder: "misc", text: "", src:"party_leader"}
];

var blockDefaults = {
  tags: [
    {label:"First Tag", x:580, y:65, width:100, height:100},
    {label:"Second Tag", x:476, y:65, width:100, height:100},
    {label:"Third Tag", x:372, y:65, width:100, height:100},
    {label:"Small Tag", x:300, y:500, width:75, height:75}
  ],
  templates: [
    {label:"Vertical Card", x:0, y:0, width:750, height:1050}
  ],
  text: [
    {label:"Card Cost", x:107, y:138, height:60, color:"#000000", font:"Prototype", style:"normal", weight:"normal", justify:"center"},
    {label:"Card Name", x:375, y:200, height:42, color:"#000000", font:"Prototype", style:"normal", weight:"normal", justify:"center"},
    {label:"Description", x:375, y:600, height:20, lineSpace:4, color:"#000000", font:"Pagella", style:"normal", weight:"normal", justify:"center"},
    {label:"Flavor Text", x:375, y:900, height:20, lineSpace:4, color:"#000000", font:"Pagella", style:"italic", weight:"bold", justify:"center"},
    {label:"FAN MADE", x:375, y:570, height:22, color:"#24770d", font:"Prototype", style:"normal", weight:"normal", justify:"center"}
  ],
  resources: [
    {label:"Standard", x:375, y:600, width:84, height:84},
    {label:"Card", x:375, y:600, width:80, height:111},
    {label:"TR", x:375, y:600, width:138, height:102}
  ],
  VPs: [
    {label:"Standard", x:492, y:780, width:194, height:194},
    {label:"Negative", x:592, y:780, width:194, height:194}
  ],
  tiles: [
    {label:"Standard tile", width:102, height:117}
  ],
  requisites: [
    {label:"Max", x:163, y:88, width:181, height:54},
    {label:"Min Large", x:163, y:88, width:159, height:54},
    {label:"Min Medium", x:163, y:88, width:133, height:54},
    {label:"Min Small", x:163, y:88, width:117, height:54},
    {label:"No Req", x:163, y:88, width:19, height:54}
  ],
  globalparameters: [
    {label:"Oxygen", x:375, y:600, width:107, height:107},
    {label:"Temp", x:375, y:600, width:32, height:107},
    {label:"Venus", x:375, y:600, width:114, height:65}
  ], 
  misc: [  
    {label:"MC", x:375, y:600, width:84, height:84},
    {label:"Arrow", x:375, y:400, width:106, height:50},
    {label:"Asterisk", x:375, y:600, width:50, height:50},
    {label:"Slash", x:375, y:600, width:50, height:133},
    {label:"Colon", x:375, y:600, width:10, height:50},
    {label:"Delegate", x:375, y:600, width:70, height:90},
    {label:"Influence", x:375, y:600, width:106, height:111}
  ],
  parties: [
    {label:"Party", x:375, y:600, width:154, height:111}
  ],
  production: [
    {label:"1x height", height:130},
    {label:"2x height", height:213},
    {label:"1x width", width:130},
    {label:"1.5x width", width:171},
    {label:"2x width", width:213},
    {label:"2.5x width", width:254},
    {label:"3x width", width:295}
  ]
};

var megaTemplates = {
  green_normal: {
    layers: [
      {"type":"block","iNum":0,"x":0,"y":0,"width":750,"height":1050,"params":"allimages"},
      {"type":"text","data":"Cost","x":107,"y":138,"width":750,"height":60,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":163,"y":88,"width":20,"height":54,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":375,"y":200,"width":750,"height":42,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":375,"y":570,"width":750,"height":22,"color":"#24770d","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":100,"y":700,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":375,"y":950,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  green_big_bottom: {
    layers: [
      {"type":"block","iNum":2,"x":0,"y":0,"width":750,"height":1050,"params":"allimages"},
      {"type":"text","data":"Cost","x":107,"y":138,"width":750,"height":60,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":163,"y":88,"width":20,"height":54,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":375,"y":200,"width":750,"height":42,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":375,"y":524,"width":750,"height":22,"color":"#24770d","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":100,"y":700,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":375,"y":950,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  green_small_bottom: {
    layers: [
      {"type":"block","iNum":1,"x":0,"y":0,"width":750,"height":1050,"params":"allimages"},
      {"type":"text","data":"Cost","x":107,"y":138,"width":750,"height":60,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":163,"y":88,"width":20,"height":54,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":375,"y":200,"width":750,"height":42,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":375,"y":620,"width":750,"height":22,"color":"#24770d","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":100,"y":700,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":375,"y":950,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  blue_normal: {
    layers: [
      {"type":"block","iNum":3,"x":0,"y":0,"width":750,"height":1050,"params":"allimages"},
      {"type":"text","data":"Cost","x":107,"y":138,"width":750,"height":60,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":163,"y":88,"width":20,"height":54,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":375,"y":200,"width":750,"height":42,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":375,"y":745,"width":750,"height":22,"color":"#0c5e84","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":100,"y":800,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":375,"y":950,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":13,"x":325,"y":255,"width":107,"height":50,"params":"allimages allpreset"},
      {"type":"text","data":"Effect or Action text!","x":375,"y":335,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  blue_big_bottom: {
    layers: [
      {"type":"block","iNum":4,"x":0,"y":0,"width":750,"height":1050,"params":"allimages"},
      {"type":"text","data":"Cost","x":107,"y":138,"width":750,"height":60,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":163,"y":88,"width":20,"height":54,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":375,"y":200,"width":750,"height":42,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":375,"y":745,"width":702,"height":22,"color":"#0c5e84","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":100,"y":800,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":375,"y":950,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":13,"x":325,"y":255,"width":107,"height":50,"params":"allimages allpreset"},
      {"type":"text","data":"Effect or Action text!","x":375,"y":335,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  blue_big_top: {
    layers: [
      {"type":"block","iNum":5,"x":0,"y":0,"width":750,"height":1050,"params":"allimages"},
      {"type":"text","data":"Cost","x":107,"y":138,"width":750,"height":60,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":163,"y":88,"width":20,"height":54,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":375,"y":200,"width":750,"height":42,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":375,"y":792,"width":702,"height":22,"color":"#0c5e84","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":100,"y":831,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":375,"y":950,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":13,"x":325,"y":255,"width":107,"height":50,"params":"allimages allpreset"},
      {"type":"text","data":"Effect or Action text!","x":375,"y":335,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  red_normal: {
    layers: [
      {"type":"block","iNum":6,"x":0,"y":0,"width":750,"height":1050,"params":"allimages"},
      {"type":"text","data":"Cost","x":107,"y":138,"width":750,"height":60,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":163,"y":88,"width":20,"height":54,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":375,"y":200,"width":750,"height":42,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":375,"y":640,"width":750,"height":22,"color":"#c36a17","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":100,"y":750,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":375,"y":950,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  red_small_bottom: {
    layers: [
      {"type":"block","iNum":7,"x":0,"y":0,"width":750,"height":1050,"params":"allimages"},
      {"type":"text","data":"Cost","x":107,"y":138,"width":750,"height":60,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":163,"y":88,"width":20,"height":54,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":375,"y":200,"width":750,"height":42,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":375,"y":671,"width":750,"height":22,"color":"#c36a17","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":100,"y":750,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":375,"y":950,"width":750,"height":20,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  }
};

var ddcount = 0;
var maxToLoad;
var numLoaded;

var hiddenImage = {};

var domParams = document.getElementById("params").parentNode.removeChild(document.getElementById("params"));
domParams.classList.remove("w3-hide");

resetProject();

function resetProject() {
  document.getElementById("layerlist").innerHTML = "";
  ddcount = 0;
  aLayers = {};
  addLayer("Base",{type:"base", color:"#ffffff", height:1050, width:750, params:"color"});

  maxToLoad = 0;
  for (let i=0; i < blockList.length; i++) {
    if (!blockList[i].obj) {
      maxToLoad++;
      let imageObj = new Image();
      imageObj.onload = onBlockLoad;
      imageObj.src = blockList[i].putUnder + "/" + blockList[i].src + ".png";
      imageObj.dataindex = i;
      blockList[i].obj = imageObj;
      if (blockList[i].text.indexOf("otherbg") != -1) {
        // if this image is an 'other people background', save its name
        otherBgList[blockList[i].text] = imageObj;
      }
    }
  }
  if (maxToLoad) {
    numLoaded = 0;
    document.getElementById("files").max = maxToLoad;
    document.getElementById("files").value = numLoaded;
    document.getElementById("loadprogress").style.display = "block";
    document.getElementById("cmcanvas").style.display = "none";
  } else {
    allLoadingDone();
  }
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
  //childAdd.innerHTML = title;
  childAdd.appendChild(createTextbox(title));
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
  return layer;
}

function createTextbox(txt) {
  let toAdd = document.createElement("input");
  toAdd.type = "text";
  toAdd.id = "layername" + ddcount;
  toAdd.maxLength = 20;
  toAdd.size = 15;
  toAdd.value = txt;
  toAdd.onchange = function () {updateLayerName(event, this)};
  return toAdd;
}

function updateLayerName(e, th) {
  let layerName = th.parentNode.parentNode.id;
  aLayers[layerName].name = th.value;
  drawProject();
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
      // show delete button
      let buttons = allLayerNodes[ch].getElementsByTagName("button");
      if (buttons.length) {
        buttons[0].style.display = "block";
      }
    } else if (allLayerNodes[ch] == this.parentNode) {
      // hide delete button
      let buttons = allLayerNodes[ch].getElementsByTagName("button");
      if (buttons.length) {
        buttons[0].style.display = "none";
      }
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
          // thispch is DOM elements such as allpreset allimages etc
          if (thispch.classList.contains("w3-hide")) {
            thispch.classList.remove("w3-hide");
          }
          for (let intype of ["input", "textarea", "select"]) {
            let chInputs = thispch.getElementsByTagName(intype);
            for (let subch of chInputs) {
              if (subch.id.indexOf("input") == 0) {              
                if (subch.type == "checkbox") {
                  subch.checked = thisLayer[subch.id.slice(5)];
                } else {
                  subch.value = thisLayer[subch.id.slice(5)];
                }
              } else if ((subch.id == "lar") || (subch.id == "slar")) {
                subch.checked = true;
              } else if (subch.id == "presets") {
                // set default selections for this layer
                // Note: we already checked above that we should do this
                let opts = subch.getElementsByTagName("option");
                let defType = "";
                if (thisLayer.type == "block") {
                  defType = blockList[thisLayer.iNum].putUnder;
                } else if (thisLayer.type == "text") {
                  defType = "text";
                } else if (thisLayer.type == "production") {
                  defType = "production";
                }
                if (defType) {
                  subch.value = "";
                  while (opts.length < blockDefaults[defType].length + 1) {
                    let cNode = opts[1].cloneNode(false);
                    cNode.value = "defselect" + (opts.length - 1);
                    subch.appendChild(cNode);
                  }
                  for (let i=1; i < opts.length; i++) {
                    // for each usable <option> under presets
                    if (i <= blockDefaults[defType].length) {
                      opts[i].innerText = blockDefaults[defType][i-1].label;
                      opts[i].classList.remove("w3-hide");
                    } else {
                      opts[i].classList.add("w3-hide");
                    }
                  }
                }
              }
            }
  
          }
        }
      }
      allLayerNodes[ch].appendChild(domParams);
    }
  }
}

function drawProject() {
  if (reloading) return;
  let c = document.getElementById("cmcanvas");
  let ctx = c.getContext("2d");
  let layerDivs = document.getElementsByClassName("divRec");
  let layersForSaving = [];
  for (let i=0; i < layerDivs.length; i++) {
    let layer = aLayers[layerDivs[i].id];
    layersForSaving.push(layer);
    switch (layer.type) {
      case "block":
        // layer = {type:"block", obj:{}, x:0, y:0, width:0, height:0, params:"allimages"};
        if (layer.obg) {
          let brdr = 3;
          ctx.drawImage(otherBgList[blockList[layer.iNum].otherbg],layer.x-brdr,layer.y-brdr,layer.width+2*brdr,layer.height+2*brdr);
        }
        ctx.drawImage(blockList[layer.iNum].obj,layer.x,layer.y,layer.width,layer.height);
        break;
      case "text":
        // layer = {type:"text", data:"", x:0, y:0, width:0, height:0, 
        // color:"#000000", 
        // font:"Prototype", lineSpace:4, justify:"center",
        // params:""};
        ctx.textAlign = layer.justify;
        if (!layer.style) layer.style = "normal";
        ctx.font = layer.style + " " + layer.weight + " " + layer.height + "px " + layer.font;
        ctx.fillStyle = layer.color;
        // TBD break up long text into mutiple parts
        if (layer.data.indexOf("\n") == -1) {
          ctx.fillText(layer.data, layer.x, layer.y);
        } else {
          let lines = layer.data.split("\n");
          for (var ln=0; ln < lines.length; ln++) {
            ctx.fillText(lines[ln], layer.x, 0 + layer.y + (layer.height + layer.lineSpace) * ln);
          }
        }
        
        break;
      case "production":
        let sz = 20;
        let border = 3;
        let xpos = Number(layer.x);
        let ypos = Number(layer.y);
        let width = Number(layer.width);
        let height = Number(layer.height);
        let img = blockList[hiddenImage["prod_nxn"]].obj ;
        let x=xpos;
        let w=width % sz;
        // if (!w) w += sz;
        let h=height % sz;
        // if (!h) h += sz;
        for (x=xpos; x <= xpos+width; x += sz) {
          let y=ypos;
          for (y=ypos; y <= ypos+height; y += sz) {
            if ((x <= xpos+width-sz) && (y <= ypos+height-sz)) {
              ctx.drawImage(img,x,y,sz,sz);
            } else {
              if (x > xpos+width-sz) {
                if (y > ypos+height-sz) {
                  ctx.drawImage(img,0,0,w,h,x,y,w,h);
                } else {
                  ctx.drawImage(img,0,0,w,sz,x,y,w,sz);
                }
              } else {
                if (y > ypos+height-sz) {
                  ctx.drawImage(img,0,0,sz,h,x,y,sz,h);
                } else {
                  window.alert("What?");
                  ctx.drawImage(img,0,0,sz,sz,x,y,sz,sz);
                }
              }
            }
           
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
      case "userFile":
        if (layer.iNum != -1) {
          if (layer.alpha == undefined) layer.alpha = 100; 
          ctx.globalAlpha = Number(layer.alpha) / 100;
          ctx.drawImage(userImageList[layer.iNum],layer.sx,layer.sy,layer.swidth,layer.sheight,layer.x,layer.y,layer.width,layer.height);
          ctx.globalAlpha = 1;
        }
        
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
  autoSave(layersForSaving);
}

function autoSave(layers) {
  try {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("autosave", JSON.stringify(layers));
    }

  } catch (error) {
    window.alert("Error with autosave");
  }
}

function updateValue(th) {
  let layer = th.parentNode.parentNode.parentNode.parentNode;
  let layerName = layer.id;
  let fieldName = th.id.slice(5);
  if (th.type == "number") {
    let n =  Number(th.value);
    if (aLayers[layerName].type != "text") {
      if (document.getElementById("lar").checked) {
        let ratioN = 1;
        if (fieldName == "width") {
          ratioN = Math.round(n * aLayers[layerName]["width"] / aLayers[layerName]["height"]);
          aLayers[layerName]["height"] = ratioN;
          document.getElementById("inputheight").value = ratioN;
        } else if (fieldName == "height") {
          ratioN = Math.round(n * aLayers[layerName]["height"] / aLayers[layerName]["width"]);
          aLayers[layerName]["width"] = ratioN;
          document.getElementById("inputwidth").value = ratioN;
        }
      }  
      if (document.getElementById("slar").checked) {
        if (fieldName == "swidth") {
          ratioN = Math.round(n * aLayers[layerName]["swidth"] / aLayers[layerName]["sheight"]);
          aLayers[layerName]["sheight"] = ratioN;
          document.getElementById("inputsheight").value = ratioN;
        } else if (fieldName == "sheight") {
          ratioN = Math.round(n * aLayers[layerName]["sheight"] / aLayers[layerName]["swidth"]);
          aLayers[layerName]["swidth"] = ratioN;
          document.getElementById("inputswidth").value = ratioN;
        }
      }
    } 
    aLayers[layerName][fieldName] = n;
  } else if (th.type == "checkbox") {
    aLayers[layerName][fieldName] = th.checked;
  } else {
    aLayers[layerName][fieldName] = th.value;
  }
  drawProject();
}


function setPresets(th){
  let selVal = document.getElementById("presets").value;
  if (!selVal) return;
  let sel = Number(selVal.slice(9));
  let layerDom = th.parentNode.parentNode.parentNode.parentNode;
  let layer = aLayers[layerDom.id];
  
  let dName = "";
  if (layer.type == "block") {
    dName = blockList[layer.iNum].putUnder;
  } else if (layer.type == "text") {
    dName = "text";
  } else if (layer.type == "production") {
    dName = "production";
  }

  if (dName) {
    reloading = true;
    for (let v in blockDefaults[dName][sel]) {
      if (v == "label") continue;
      document.getElementById("input" + v).value = blockDefaults[dName][sel][v];
      updateValue(document.getElementById("input" + v));
    }
    reloading = false;
  }
  drawProject();
}

function onBlockLoad() {
  if (blockList[this.dataindex].hidden) {
    // hidden images don't get menu items
    hiddenImage[blockList[this.dataindex].text] = this.dataindex;
  } else {
    let tmpText = blockList[this.dataindex].text;
    if (!tmpText) {
      tmpText = blockList[this.dataindex].src;
      tmpText = tmpText.replace(/_/g, ' ');
      tmpText = tmpText.replace(tmpText.charAt(0), tmpText.charAt(0).toUpperCase());
      blockList[this.dataindex].text = tmpText;
    }
    // add menu item for image
    // <a onclick="addBlock('template:green')" href="#" class="w3-bar-item w3-button">Green Card</a>
    let toAdd = document.createElement("a");
    toAdd.onclick = addBlock;
    toAdd.innerText = tmpText;
    toAdd.classList.add("w3-bar-item");
    toAdd.classList.add("w3-button");
    toAdd.href = "#";
    toAdd.id = "image" + this.dataindex;
    document.getElementById(blockList[this.dataindex].putUnder).appendChild(toAdd);
    if (blockList[this.dataindex].putUnder == "templates") {
      // add Super Templates
      toAdd = document.createElement("a");
      toAdd.onclick = addMegaTemplate;
      toAdd.innerText = tmpText;
      toAdd.classList.add("w3-bar-item");
      toAdd.classList.add("w3-button");
      toAdd.href = "#";
      toAdd.id = "mega" + blockList[this.dataindex].src;
      document.getElementById("fromTemplate").appendChild(toAdd);
    }
  }
  numLoaded++;
  document.getElementById("files").value = numLoaded;
  if (numLoaded == maxToLoad) {
    allLoadingDone();
  }
}

var reloading = false;

function allLoadingDone() {
  document.getElementById("loadprogress").style.display = "none";
  document.getElementById("cmcanvas").style.display = "block";
  try {
    loadFrom(JSON.parse(localStorage.getItem("autosave")));
  } catch (error) {
    // no autosave file
  }
}

function loadFrom(saved) {
  // load autosave file
  reloading = true;
  try {
    for (let layer of saved) {
      let ignore = ["type", "params"];
      let newLayer = {};
      switch (layer.type) {
        case "block":
          // layer = {type:"block", iNum:0, x:0, y:0, width:0, height:0, params:"allimages"};
          newLayer = addBlock(layer.iNum);
          ignore.push("iNum");
          for (let key in layer) {
            if (ignore.indexOf(key) != -1) continue;
            newLayer[key] = layer[key];
          }
          break;
        case "text":
          // let layer = {type:"text", data:"", x:0, y:0, width:100, height:20, 
          // color: "#000000",
          // font:"Prototype", lineSpace:4, justify:"center",
          // params:"allimages color alltext"};
          newLayer = addTextBox(layer.data);
          for (let key in layer) {
            if (ignore.indexOf(key) != -1) continue;
            newLayer[key] = layer[key];
          }
          break;
        case "production":
          newLayer = addProduction();
          for (let key in layer) {
            if (ignore.indexOf(key) != -1) continue;
            newLayer[key] = layer[key];
          }
          break;
        case "userFile":
          layer.iNum = -1;
          addLayer("Local:" + layer.filename, layer);
          //newLayer = addUserFile(layer);
          break;
        case "base":
          // set height/width
          // c.height = layer.height; // changing width forces clearing
          // c.width = layer.width;
          // // clear to background color
          // ctx.fillStyle = layer.color;
          // // ctx.fillStyle = "rgb(" + layer.red + "," + layer.blue + "," + layer.green + ")";
          // ctx.fillRect(0,0,layer.width, layer.height);
          break;
      
        default:
          window.alert("Invalid layer type:" + layer.type);
          break;
      }
      if (layer.name) {
        document.getElementById("layername" + (ddcount-1)).value = layer.name;
      } 
    }
  } catch (error) {
  }
  reloading = false;
  drawProject();
  
}

function addBlock(th) {
  let layer = {type:"block", name:"", iNum:0, x:0, y:0, width:0, height:0, params:"allimages"};
  let myIndex = 0;
  if ((typeof th == "string") || (typeof th == "number")) {
    myIndex = th;
  } else {
    myIndex = this.id.slice(5);
  }
  layer.iNum = Number(myIndex);
  let thisBlock = blockList[layer.iNum];
  if (thisBlock.otherbg) {
    layer.params += " " + thisBlock.otherbg;
    layer.obg = false;
  }
  if (blockDefaults[thisBlock.putUnder]) {
    layer.params += " allpreset";
  }
  layer.width = thisBlock.obj.width;
  layer.height = thisBlock.obj.height;
  let newLayer = addLayer(thisBlock.text, layer);
  drawProject();
  return newLayer;
}

function addMegaTemplate() {
  if (!confirm("All current data will be discarded. Continue?")) return;
  if (this.id.slice(0,4) != "mega") return;
  let mega = this.id.slice(4);
  if (!megaTemplates[mega]) return;
  document.getElementById("layerlist").innerHTML = "";
  ddcount = 0;
  aLayers = {};
  addLayer("Base",{type:"base", color:"#ffffff", height:1050, width:750, params:"color"});
  loadFrom(megaTemplates[mega].layers);
}

function addTextBox(th) {
  let layer = {type:"text", data:"", x:0, y:0, width:100, height:20, 
              color: "#000000",
              font:"Prototype", style:"normal", weight:"normal", lineSpace:4, justify:"center",
              params:"allimages color alltext allpreset"};
  if ((typeof th == "string") || (typeof th == "number")) {
    layer.data = th;
  } else {
    layer.data = "Replace this text!";
  }
  let c = document.getElementById("cmcanvas");
  layer.x = Math.round(c.width/2);
  layer.y = Math.round(c.height/2);
  layer.width = c.width;  
  let newLayer = addLayer("Text:" + layer.data.substr(0,10), layer);
  drawProject();
  return newLayer;
}

var mostRecentFile = {};
function addUserFile(th) {
  try {
    let file = th.files[0];
    // Check if the file is an image.
    if (file.type && file.type.indexOf('image') === -1) {
      window.alert('File is not an image.');
      return;
    }
    mostRecentFile = file;
    const reader = new FileReader();
    reader.addEventListener('load', function() {
      let newI = new Image();
      newI.onload = userImageLoaded;
      newI.src = reader.result;
    });
    reader.readAsDataURL(file);  
  } catch (error) {
    window.alert("Something went wrong loading file.")
  }
}

function userImageLoaded() {
  // this = image object
  let layer = {type:"userFile", iNum:0,
    x:0, y:0, width:0, height:0,
    alpha:100,
    sx:0, sy:0, swidth:0, sheight:0, params:"allimages clipimages"};
  layer.iNum = userImageList.length;
  layer.filename = mostRecentFile.name;
  layer.width = this.width;
  layer.swidth = this.width;
  layer.height = this.height;
  layer.sheight = this.height;
  
  userImageList.push(this);
  let newLayer = addLayer("Local:" + layer.filename, layer);
  drawProject();
}

function addProduction() {
  let layer = {type:"production", x:200, y:600, width:130, height:130, 
              params:"allimages allpreset"};
  let newLayer = addLayer("Production", layer);
  drawProject();
  return newLayer;
}

function copyToClipboard() {
  let str = localStorage.getItem("autosave");
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};

function clickNew() {
  if (confirm("Delete current work and start fresh?")) resetProject();
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
                                        