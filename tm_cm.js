
var aLayers = {};

var userImageList = [];
var otherBgList = {};
var type2FuncList = {};
// var groupList = [];

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
  {putUnder: "requisites", text: "Max Requirement", src:"max_big"},
  {putUnder: "requisites", text: "Min Requirement (big)", src:"min_big"},
  {putUnder: "requisites", text: "Min Requirement", src:"min_medium"},
  {putUnder: "requisites", text: "Min Requirement (small)", src:"min_small"},
  {putUnder: "requisites", text: "No Requirement", src:"normal"},
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
  {putUnder: "VPs", text: "VP 1/", src:"1_for"},
  {putUnder: "VPs", text: "1 VP", src:"1"},
  {putUnder: "VPs", text: "VP 2/", src:"2_for"},
  {putUnder: "VPs", text: "2 VP", src:"2"},
  {putUnder: "VPs", text: "3 VP", src:"3"},
  {putUnder: "VPs", text: "4 VP", src:"4"},
  {putUnder: "VPs", text: "5 VP", src:"5"},
  {putUnder: "VPs", text: "VP background", src:"blank"},
  {putUnder: "VPs", text: "-VP", src:"VPnegative"},
  {putUnder: "VPs", text: "/ VP", src:"n_for"},
  {putUnder: "misc", text: "", src:"party_leader"},
  {putUnder: "templates", text: "", src:"prelude"},
  {putUnder: "templates", text: "", src:"corporation"},
  {putUnder: "misc", text: "Tag Holder", src:"corp_tag_holder"},
  {putUnder: "misc", text: "Effect (bg)", src:"effect"}
];

var blockDefaults = {
  tags: [
    {label:"First Tag", x:639, y:67, width:110, height:110},
    {label:"Second Tag", x:524, y:67, width:110, height:110},
    {label:"Third Tag", x:410, y:67, width:110, height:110},
    {label:"Small Tag", x:330, y:536, width:82, height:82},
    {label:"First (Prel)", x:937, y:67, width:110, height:110},
    {label:"Second (Prel)", x:822, y:67, width:110, height:110},
    {label:"Third (Prel)", x:708, y:67, width:110, height:110},
    {label:"First (Corp)", x:937, y:90, width:110, height:110},
    {label:"Second (Corp)", x:822, y:90, width:110, height:110}
  ],
  templates: [
    {label:"Vertical Card", x:0, y:0, width:826, height:1126},
    {label:"Horizontal Card", x:0, y:0, width:1126, height:826}
  ],
  text: [
    {label:"Card Cost", x:118, y:147, height:66, color:"#000000", font:"Prototype", style:"normal", weight:"normal", justify:"center"},
    {label:"Card Name", x:413, y:214, height:46, color:"#000000", font:"Prototype", style:"normal", weight:"normal", justify:"center"},
    {label:"Description", x:413, y:643, height:22, lineSpace:4, color:"#000000", font:"Pagella", style:"normal", weight:"normal", justify:"center"},
    {label:"Flavor Text", x:413, y:1005, height:22, lineSpace:4, color:"#000000", font:"Pagella", style:"italic", weight:"bold", justify:"center"},
    {label:"FAN MADE", x:413, y:611, height:24, color:"#24770d", font:"Prototype", style:"normal", weight:"normal", justify:"center"},
    {label:"PRELUDE", data:"P R E L U D E", x:563, y:99, height:22, color:"#000000", font:"Prototype", style:"normal", weight:"normal", justify:"center"},
    {label:"CORPORATION", data:"C O R P O R A T I O N", x:563, y:109, height:24, color:"#000000", font:"Prototype", style:"normal", weight:"normal", justify:"center"},
    {label:"EFFECT", data:"E F F E C T", x:800, y:333, height:22, color:"#000000", font:"Prototype", style:"normal", weight:"normal", justify:"center"}
  ],
  resources: [
    {label:"Standard", x:413, y:643, width:92, height:92},
    {label:"Card", x:413, y:643, width:88, height:122},
    {label:"TR", x:413, y:643, width:151, height:112}
  ],
  VPs: [
    {label:"Standard", x:542, y:836, width:223, height:223},
    {label:"Negative", x:652, y:836, width:223, height:223}
  ],
  tiles: [
    {label:"Standard tile", width:123, height:129}
  ],
  requisites: [
    {label:"Max", x:180, y:92, width:200, height:60},
    {label:"Min Large", x:180, y:92, width:176, height:60},
    {label:"Min Medium", x:180, y:92, width:147, height:60},
    {label:"Min Small", x:180, y:92, width:130, height:60},
    {label:"No Req", x:180, y:92, width:21, height:60}
  ],
  globalparameters: [
    {label:"Oxygen", x:413, y:643, width:118, height:118},
    {label:"Temp", x:413, y:643, width:35, height:118},
    {label:"Venus", x:413, y:643, width:125, height:71}
  ], 
  misc: [  
    {label:"MC", x:413, y:643, width:92, height:92},
    {label:"Arrow", x:413, y:429, width:116, height:55},
    {label:"Asterisk", x:413, y:643, width:55, height:55},
    {label:"Slash", x:413, y:643, width:55, height:146},
    {label:"Colon", x:413, y:643, width:11, height:55},
    {label:"Delegate", x:413, y:643, width:77, height:99},
    {label:"Effect (bg)", x:631, y:307, width:346, height:36},
    {label:"Influence", x:413, y:643, width:117, height:122},
    {label:"Tag Holder 0", x:969, y:103, width:257, height:89},
    {label:"Tag Holder 1", x:898, y:103, width:257, height:89},
    {label:"Tag Holder 2", x:794, y:103, width:257, height:89}
  ],
  parties: [
    {label:"Party", x:413, y:643, width:169, height:122}
  ],
  production: [
    {label:"1x height", height:143},
    {label:"2x height", height:235},
    {label:"1x width", width:143},
    {label:"1.5x width", width:188},
    {label:"2x width", width:235},
    {label:"2.5x width", width:279},
    {label:"3x width", width:325}
  ]
};

var megaTemplates = {
  green_normal: {
    layers: [
      {type: "base", color: "#ffffff", height: 1126, width: 826, params: "color"},
      {"type":"block","iNum":0,"x":0,"y":0,"width":826,"height":1126,"params":"allimages"},
      {"type":"text","data":"Cost","x":118,"y":147,"width":826,"height":66,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":179,"y":97,"width":22,"height":59,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":413,"y":214,"width":826,"height":46,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":413,"y":612,"width":826,"height":24,"color":"#24770d","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":110,"y":770,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":413,"y":1005,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  green_big_bottom: {
    layers: [
      {type: "base", color: "#ffffff", height: 1126, width: 826, params: "color"},
      {"type":"block","iNum":2,"x":0,"y":0,"width":826,"height":1126,"params":"allimages"},
      {"type":"text","data":"Cost","x":118,"y":147,"width":826,"height":66,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":179,"y":97,"width":22,"height":59,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":413,"y":214,"width":826,"height":46,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":413,"y":562,"width":826,"height":24,"color":"#24770d","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":110,"y":770,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":413,"y":1005,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  green_small_bottom: {
    layers: [
      {type: "base", color: "#ffffff", height: 1126, width: 826, params: "color"},
      {"type":"block","iNum":1,"x":0,"y":0,"width":826,"height":1126,"params":"allimages"},
      {"type":"text","data":"Cost","x":118,"y":147,"width":826,"height":66,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":179,"y":97,"width":22,"height":59,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":413,"y":214,"width":826,"height":46,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":413,"y":664,"width":826,"height":24,"color":"#24770d","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":110,"y":770,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":413,"y":1005,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  blue_normal: {
    layers: [
      {type: "base", color: "#ffffff", height: 1126, width: 826, params: "color"},
      {"type":"block","iNum":3,"x":0,"y":0,"width":826,"height":1126,"params":"allimages"},
      {"type":"text","data":"Cost","x":118,"y":147,"width":826,"height":66,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":179,"y":97,"width":22,"height":59,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":413,"y":214,"width":826,"height":46,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":413,"y":798,"width":826,"height":24,"color":"#0c5e84","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":100,"y":860,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":413,"y":1005,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":13,"x":355,"y":265,"width":116,"height":55,"params":"allimages allpreset"},
      {"type":"text","data":"Effect or Action text!","x":413,"y":360,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  blue_big_bottom: {
    layers: [
      {type: "base", color: "#ffffff", height: 1126, width: 826, params: "color"},
      {"type":"block","iNum":4,"x":0,"y":0,"width":826,"height":1126,"params":"allimages"},
      {"type":"text","data":"Cost","x":118,"y":147,"width":826,"height":66,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":179,"y":97,"width":22,"height":59,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":413,"y":214,"width":826,"height":46,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":413,"y":753,"width":702,"height":24,"color":"#0c5e84","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":100,"y":860,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":413,"y":1005,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":13,"x":355,"y":265,"width":116,"height":55,"params":"allimages allpreset"},
      {"type":"text","data":"Effect or Action text!","x":413,"y":360,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  blue_big_top: {
    layers: [
      {type: "base", color: "#ffffff", height: 1126, width: 826, params: "color"},
      {"type":"block","iNum":5,"x":0,"y":0,"width":826,"height":1126,"params":"allimages"},
      {"type":"text","data":"Cost","x":118,"y":147,"width":826,"height":66,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":179,"y":97,"width":22,"height":59,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":413,"y":214,"width":826,"height":46,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":413,"y":849,"width":702,"height":24,"color":"#0c5e84","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":100,"y":891,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":413,"y":1005,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":13,"x":355,"y":265,"width":116,"height":55,"params":"allimages allpreset"},
      {"type":"text","data":"Effect or Action text!","x":413,"y":360,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  red_normal: {
    layers: [
      {type: "base", color: "#ffffff", height: 1126, width: 826, params: "color"},
      {"type":"block","iNum":6,"x":0,"y":0,"width":826,"height":1126,"params":"allimages"},
      {"type":"text","data":"Cost","x":118,"y":147,"width":826,"height":66,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":179,"y":97,"width":22,"height":59,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":413,"y":214,"width":826,"height":46,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":413,"y":685,"width":826,"height":24,"color":"#c36a17","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":100,"y":810,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":413,"y":1005,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  red_small_bottom: {
    layers: [
      {type: "base", color: "#ffffff", height: 1126, width: 826, params: "color"},
      {"type":"block","iNum":7,"x":0,"y":0,"width":826,"height":1126,"params":"allimages"},
      {"type":"text","data":"Cost","x":118,"y":147,"width":826,"height":66,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"block","iNum":37,"x":179,"y":97,"width":22,"height":59,"params":"allimages allpreset"},
      {"type":"text","data":"CARD NAME","x":413,"y":214,"width":826,"height":46,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":413,"y":718,"width":826,"height":24,"color":"#c36a17","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":100,"y":810,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":413,"y":1005,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  prelude: {
    layers: [
      {type: "base", color: "#ffffff", height: 826, width: 1126, params: "color"},
      {"type":"block","iNum":94,"x":0,"y":0,"width":1126,"height":826,"params":"allimages"},
      {"type":"text","data":"CARD NAME","x":563,"y":218,"width":826,"height":48,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":563,"y":500,"width":826,"height":24,"color":"#ce809f","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"P R E L U D E","x":563,"y":99,"width":826,"height":24,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":110,"y":560,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":563,"y":723,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  },
  corporation: {
    layers: [
      {type: "base", color: "#ffffff", height: 826, width: 1126, params: "color"},
      {"type":"block","iNum":96,"x":969,"y":103,"width":257,"height":89,"params":"allimages"},
      {"type":"block","iNum":95,"x":0,"y":0,"width":1126,"height":826,"params":"allimages"},
      {type: "effect", x: 600, y: 300, width: 400, height: 300, params: "allimages allpreset"},
      {type: "block", name: "", iNum: 97, x: 631, y: 307, width: 345.79, height: 36,"params":"allimages"},
      {type: "text", data: "E F F E C T", x: 800, y: 333, width: 1126, height: 22, color: "#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"FAN MADE","x":198,"y":736,"width":826,"height":24,"color":"#c3c3c3","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"C O R P O R A T I O N","x":563,"y":109,"width":826,"height":24,"color":"#000000","font":"Prototype","style":"normal","weight":"normal","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Card description\nMultiple lines\nand they can be much, much, much longer\n'V space' controls the spacing between lines","x":110,"y":560,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"normal","weight":"normal","lineSpace":4,"justify":"left","params":"allimages color alltext allpreset"},
      {"type":"text","data":"Flavor text!","x":563,"y":723,"width":826,"height":22,"color":"#000000","font":"Pagella","style":"italic","weight":"bold","lineSpace":4,"justify":"center","params":"allimages color alltext allpreset"}
    ]
  }
};

var ddcount = 0;
var maxToLoad;
var numLoaded;

var hiddenImage = {};

var domParams = document.getElementById("params").parentNode.removeChild(document.getElementById("params"));
domParams.classList.remove("w3-hide");

function resetProject(loadautosave) {
  document.getElementById("layerlist").innerHTML = "";
  ddcount = 0;
  aLayers = {};
  addLayer("Base",{type:"base", color:"#ffffff", height:1126, width:826, params:"color"});

  maxToLoad = 0;
  for (let i=0; i < blockList.length; i++) {
    if (!blockList[i].obj) {
      maxToLoad++;
      addBlockMenuItem(i);
    }
  }
  // if (maxToLoad) {
  //   numLoaded = 0;
  //   document.getElementById("files").max = maxToLoad;
  //   document.getElementById("files").value = numLoaded;
  //   document.getElementById("loadprogress").style.display = "block";
  //   document.getElementById("cmcanvas").style.display = "none";
  // } else {
    allLoadingDone(loadautosave);
  // }
}

function fetchBlock(num) {
  let imageObj = new Image();
  imageObj.onload = onBlockLoad;
  imageObj.src = blockList[num].putUnder + "/" + blockList[num].src + ".png";
  imageObj.dataindex = num;
  blockList[num].obj = imageObj;
  if (blockList[num].text.indexOf("otherbg") != -1) {
    // if this image is an 'other people background', save its name
    otherBgList[blockList[num].text] = imageObj;
  }
}

function addBlockMenuItem(num) {

  if (blockList[num].hidden) {
    // hidden images don't get menu items
    hiddenImage[blockList[num].text] = num;
  } else {
    let tmpText = blockList[num].text;
    if (!tmpText) {
      tmpText = blockList[num].src;
      tmpText = tmpText.replace(/_/g, ' ');
      tmpText = tmpText.replace(tmpText.charAt(0), tmpText.charAt(0).toUpperCase());
      blockList[num].text = tmpText;
    }
    // add menu item for image
    // <a onclick="addBlock('template:green')" href="#" class="w3-bar-item w3-button">Green Card</a>
    let toAdd = document.createElement("a");
    toAdd.onclick = addBlock;
    toAdd.innerText = tmpText;
    toAdd.classList.add("w3-bar-item");
    toAdd.classList.add("w3-button");
    toAdd.href = "#";
    toAdd.id = "image" + num;
    document.getElementById(blockList[num].putUnder).appendChild(toAdd);
    if (blockList[num].putUnder == "templates") {
      // add Super Templates
      toAdd = document.createElement("a");
      toAdd.onclick = addMegaTemplate;
      toAdd.innerText = tmpText;
      toAdd.classList.add("w3-bar-item");
      toAdd.classList.add("w3-button");
      toAdd.href = "#";
      toAdd.id = "mega" + blockList[num].src;
      document.getElementById("fromTemplate").appendChild(toAdd);
    }
  }
}

function addLayer(title, layer) {
  // <div id='div1' class='divRec'><div class='inside'>item 1</div></div>
  let toAdd = document.createElement("div");
  // toAdd.appendChild(downButton());
  if (!ddcount && (ddcount != 0)) ddcount = 0;
  toAdd.id = "dragdropdiv" + ddcount;
  toAdd.classList.add("divRec");
  if (ddcount) toAdd.appendChild(createGroupCheckbox());
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

function createGroupCheckbox() {
  let toAdd = document.createElement("input");
  toAdd.type = "checkbox";
  toAdd.classList.add("groupcheck");
  toAdd.classList.add("w3-hide");
  toAdd.checked = false;
  //toAdd.style.display = "none";
  return toAdd;
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
      let thisLayerParams = thisLayer.params;
      if (this.parentNode.id != "dragdropdiv0") {
        thisLayerParams += " allall";
      }
      
      for (let pch=0; pch < domParams.children.length; pch++) {
        let thispch = domParams.children[pch];
        if (thisLayerParams.indexOf(thispch.id) == -1) {
          // not in params, hide it
          thispch.classList.add("w3-hide");
        } else {
          // in params list, show it
          // thispch is DOM elements such as allpreset allimages etc
          thispch.classList.remove("w3-hide");
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
  let imagesForSaving = [];
  for (let i=0; i < layerDivs.length; i++) {
    let layer = aLayers[layerDivs[i].id];
    imagesForSaving.push(layer);
    switch (layer.type) {
      case "block":
        if (i==0) {
          c.height = layer.height;
          c.width = layer.width;
        }
        // layer = {type:"block", obj:{}, x:0, y:0, width:0, height:0, params:"allimages"};
        if (layer.obg) { // draw others background?
          let brdr = 3;
          if (!otherBgList[blockList[layer.iNum].otherbg]) {
            for (let j=0; j < blockList.length; j++) {
              if (blockList[j].text == blockList[layer.iNum].otherbg) {
                fetchBlock(j);
                break;
              }
            }
          } else if (otherBgList[blockList[layer.iNum].otherbg].complete) {
            ctx.drawImage(otherBgList[blockList[layer.iNum].otherbg],layer.x-brdr,layer.y-brdr,layer.width+2*brdr,layer.height+2*brdr);
          }
        }
        if (!blockList[layer.iNum].obj) {
          fetchBlock(layer.iNum);
        } else if (blockList[layer.iNum].obj.complete) {
          ctx.drawImage(blockList[layer.iNum].obj,layer.x,layer.y,layer.width,layer.height);
        }
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
        let lines = layer.data.split("\n");
        let cnt = 0;
        for (var ln=0; ln < lines.length; ln++) {
          let spl = lines[ln].split(" ");
          let o = "";
          while (spl.length) {
            o = spl.shift();
            while (spl.length && (ctx.measureText(o + " " + spl[0]).width < layer.width)) {
              o += " " + spl.shift();
            }
            ctx.fillText(o, layer.x, 0 + layer.y + (layer.height + layer.lineSpace) * cnt);
            cnt++;
          }
        }
        
        break;
      case "production":
        
        {
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
        }
          
        break;
      case "effect":
        
        {
          let border = 5;
          let xpos = Number(layer.x);
          let ypos = Number(layer.y);
          let width = Number(layer.width);
          let height = Number(layer.height);
          // draw border (actually draws whole rectange but we overwrite below)
          let grd = ctx.createLinearGradient(xpos, ypos, xpos+width, ypos);
          let stops = [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.68, 0.76, 0.84, 0.92];
          let stopColors = ["#333333", "#999999"];
          for (let s=0; s < stops.length; s++) {
            grd.addColorStop(stops[s], stopColors[s % 2]);
          }
          grd.addColorStop(1, "#777777");
          ctx.fillStyle = grd;
          ctx.fillRect(xpos, ypos, layer.width, layer.height); 
          // draw center
          grd = ctx.createLinearGradient(xpos+border, ypos+border, xpos+layer.width-border, ypos+layer.height-border);
          stops = [0, 0.07, 0.25, 0.6, 0.85, 1.0];
          stopColors = ["#ffffff", "#999999"];
          for (let s=0; s < stops.length; s++) {
            grd.addColorStop(stops[s], stopColors[s % 2]);
          }
          ctx.fillStyle = grd;
          ctx.fillRect(xpos+border, ypos+border, layer.width-2*border, layer.height-2*border); 
        }
        break;
      case "userFile":      
      case "webFile":
        if (layer.iNum != -1) {
          if (layer.alpha == undefined) layer.alpha = 100; 
          ctx.globalAlpha = Number(layer.alpha) / 100;
          ctx.drawImage(userImageList[layer.iNum],layer.sx,layer.sy,layer.swidth,layer.sheight,layer.x,layer.y,layer.width,layer.height);
          ctx.globalAlpha = 1;
        }
        
        break;
      case "line":
        
        ctx.lineWidth = layer.width;
        ctx.strokeStyle = layer.color;
        ctx.translate(layer.x, layer.y);
        ctx.rotate(Math.PI * layer.angle / 180);
        ctx.moveTo(0,0);
        ctx.lineTo(layer.len,0);
        ctx.stroke();
        ctx.setTransform();
        ctx.lineWidth = 1;
        break;
      // case "group":
      //   break;
      case "base":
        
        // set height/width
        c.height = layer.height; 
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
  autoSave(imagesForSaving);
}

var lastAutoSave = "";
function autoSave(layers) {
  lastAutoSave = JSON.stringify(layers);
  try {
    if (typeof(Storage) !== "undefined") {
      localStorage.setItem("autosave", lastAutoSave);
    }

  } catch (error) {
    window.alert("Error with autosave");
  }
}

const arAlt = {
  width: ["height", "lar"],
  height: ["width", "lar"],
  swidth: ["sheight", "slar"],
  sheight: ["swidth", "slar"]
};

function updateValue(th) {
  // called after user updates a value
  // OR after user select preset (reloading==true, in this case)
  let layer = th.parentNode.parentNode.parentNode.parentNode;
  let layerName = layer.id;
  let fieldName = th.id.slice(5);
  if (th.type == "number") {
    let newValue =  Number(th.value);
    // deal with group moves
    if ((fieldName == "x") || (fieldName == "y")) {
      // check if part of group
      if (layer.getElementsByClassName("groupcheck")[0].checked) {
        // adjust all other members of group by same amount
        let thisgroup = document.getElementsByClassName("groupcheck");
        let diff = newValue - aLayers[layerName][fieldName];
        for (let x=0; x < thisgroup.length; x++) {
          if (!thisgroup[x].checked) continue;
          let groupLayerId = thisgroup[x].parentNode.id;
          aLayers[groupLayerId][fieldName] += diff;
        }
      }
    }
    if (arAlt[fieldName] && !reloading && (aLayers[layerName].type != "text")) {
      // it is width/height/swidth/sheight field
      if (document.getElementById(arAlt[fieldName][1]).checked) {
        // lar or slar (as appropriate) is checked
        // compute otherValue (e.g. if fieldname = width, otherValue = newValue * height/width)
        let otherValue = newValue * aLayers[layerName][arAlt[fieldName][0]] / aLayers[layerName][fieldName];
        otherValue = Math.round(otherValue * 1000) / 1000;
        if ((otherValue) && (Math.abs(otherValue - Math.round(otherValue)) < 0.01)) otherValue = Math.round(otherValue);
        aLayers[layerName][arAlt[fieldName][0]] = otherValue;
        document.getElementById("input" + arAlt[fieldName][0]).value = otherValue;
      }  
    } 
    aLayers[layerName][fieldName] = newValue;
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
    let a = layer.iNum;
    let b = blockList[a];
    dName = b.putUnder;
  } else if (layer.type == "text") {
    dName = "text";
  } else if (layer.type == "production") {
    dName = "production";
  }

  if (dName) {
    reloading = true;
    for (let v in blockDefaults[dName][sel]) {
      // fill in presets
      if (v == "label") continue;
      document.getElementById("input" + v).value = blockDefaults[dName][sel][v];
      updateValue(document.getElementById("input" + v));
    }
    if (dName == "templates") {
      aLayers["dragdropdiv0"].height = blockDefaults[dName][sel].height;
      aLayers["dragdropdiv0"].width = blockDefaults[dName][sel].width;
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
    if (!document.getElementById("image" + this.dataindex)) {
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
  }
  // numLoaded++;
  // document.getElementById("files").value = numLoaded;
  // if (numLoaded == maxToLoad) {
  //   allLoadingDone();
  // }
  for (let l in aLayers) {
    if ((aLayers[l].type == "block") && (aLayers[l].iNum == this.dataindex)) {
      if (!aLayers[l].width) aLayers[l].width = blockList[this.dataindex].obj.width;
      if (!aLayers[l].height) aLayers[l].height = blockList[this.dataindex].obj.height;
    }
  }
  drawProject();
}

var reloading = false;

function allLoadingDone(loadautosave) {
  document.getElementById("loadprogress").style.display = "none";
  document.getElementById("cmcanvas").style.display = "block";
  try {
    if (loadautosave) {
      loadFrom(JSON.parse(localStorage.getItem("autosave")));
    } else {
      drawProject();
    }
  } catch (error) {
    // no autosave file
  }
}

function loadFrom(saved) {
  // load autosave file
  reloading = true;
  let resize = false;
  let scale = {x:1, y:1, width:1, height:1};
  try {
    for (let layer of saved) {
      let ignore = ["type", "params"];
      let newLayer = {};
      switch (layer.type) {
        case "block":
        case "text":
        case "production":
        case "effect":
        case "line":
          if (layer.type == "block") {
            newLayer = addBlock(layer.iNum);
            ignore.push("iNum");
          } else if (layer.type == "text") {
            newLayer = addTextBox(layer.data);
          // } else if (layer.type == "effect") {
          //   newLayer = addEffectBox();
          // } else if (layer.type == "line") {
          //   newLayer = addLine();
          } else {
            newLayer = type2FuncList[layer.type]();
          //   newLayer = addProduction();
          }
          
          for (let key in layer) {
            if (ignore.indexOf(key) != -1) continue;
            if (scale[key]) {
              newLayer[key] = scale[key] * layer[key];
            } else {
              newLayer[key] = layer[key];
            }
          }
          break;
        // case "group":
        //   addLayer(layer.name, layer);
        //   break;
        case "webFile": // TBD add code to fetch web file and replace it when loaded
          reloadWebImage(layer.filename);
          layer.iNum = -1;
          addLayer("Web:" + layer.filename, layer);
          break;
        case "userFile":
          layer.iNum = -1;
          addLayer("Local:" + layer.filename, layer);
          //newLayer = addUserFile(layer);
          break;
        case "base":
          newLayer = aLayers.dragdropdiv0;
          for (let key in layer) {
            if (ignore.indexOf(key) != -1) continue;
            newLayer[key] = layer[key];
            if (layer[key] == 1050) {
              if (confirm("Looks like data saved at old size. Do you want to automatically resize?")) {
                resize = true;
                newLayer.height = 1126;
                newLayer.width = 826;
                scale.x = 826 / 750;
                scale.width = scale.x;
                scale.y = 1126 / 1050;
                scale.height = scale.y;
                break;
              }
            }
          }
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

type2FuncList.block = addBlock;

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
  // layer.width = thisBlock.obj.width;
  // layer.height = thisBlock.obj.height;
  let newLayer = addLayer(thisBlock.text, layer);
  if (thisBlock.obj) {
    drawProject();
  } else {
    fetchBlock(layer.iNum);
  }
  
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
  addLayer("Base",{type:"base", color:"#ffffff", height:1126, width:826, params:"color"});
  loadFrom(megaTemplates[mega].layers);
}

type2FuncList.text = addTextBox;

function addTextBox(th) {
  let layer = {type:"text", data:"", x:0, y:0, width:110, height:21, 
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
      // load a local file
      mostRecentFile = file;
      const reader = new FileReader();
      reader.addEventListener('load', function() {
        let newI = new Image();
        newI.onload = userImageLoaded;
        newI.src = reader.result;
        newI.crossOrigin = "Anonymous";
      });
      reader.readAsDataURL(file);  

  } catch (error) {
    projectLoad = false;
    window.alert("Something went wrong loading file.")
  }
}

function userImageLoaded() {
  // this = image object
  if (projectLoad) {
    // verify image is a project (we support)
    try {
      let c = document.getElementById("cmcanvas");
      let ctx = c.getContext("2d");
      // set canvas size to hold image
      c.width = this.width;
      c.height = this.height;
      // put image on canvas
      ctx.drawImage(this, 0, 0);

      // need to wait until canvas drawn
      setTimeout(function(){      
        // now we can access the image
        let c = document.getElementById("cmcanvas");
        let ctx = c.getContext("2d");
        let imgData = ctx.getImageData(0,0,c.width,c.height);
        let tmp = "tm_cmV01";
        let p = 0;

        let ob = array2string(imgData.data, p, 8);
        if (ob.str != tmp) throw "project";
        p = ob.pos;

        // get image pos data
        ob = array2string(imgData.data, p, 0);
        let posStr = ob.str;
        p = ob.pos;

        // get layer data
        ob = array2string(imgData.data, p, 0);
        let layerStr = ob.str;
        //p = ob.pos;

        // parse pos data and extract images 
        let pos=JSON.parse(posStr);
        if (pos.length) window.alert("User files not yet supported. :(");
        for (let i=0; i<pos.length; i++) {
          // TBD
        }

        // parse layer data
        let newLayers = JSON.parse(layerStr);
        for (let i=0; i < newLayers.length; i++) {
          // update dragdropdiv0 and remove that newLayer (if it existed)
          let layer;
          if ((newLayers[0].type == "block") && (aLayers["dragdropdiv0"])) {
            layer = aLayers["dragdropdiv0"];
            layer.width = newLayers[0].width;
            layer.height = newLayers[0].height;
            layer.color = newLayers[0].color;
            newLayers.shift();
          }
          // load the rest of newLayers using loadFrom
          loadFrom(newLayers);
        }

        // redraw project
        drawProject();
      }, 50);

      
    } catch (error) {
      // end up here for a variety of reasons
      if (error == "project") {
        // doesn't look like a project file, or one we support
      } else {
        // probably a JSON parse error, just call it parse error
      }
      
    }
    
    
    // TBD
  } else {
    let layer = {type:"userFile", iNum:0,
      x:0, y:0, width:1, height:1,
      alpha:100,
      sx:0, sy:0, swidth:0, sheight:0, params:"allimages clipimages"};
    layer.iNum = userImageList.length;
    layer.filename = mostRecentFile.name;
    layer.width = this.width;
    layer.height = this.height;
    layer.swidth = this.width;
    layer.sheight = this.height;
    
    userImageList.push(this);
    let newLayer = addLayer("Local:" + layer.filename, layer);
    drawProject();
  }
}

function array2string(arr, aPos, len) {
  // convert part of array to string of length len(if len is 0, it is a zero terminated string)
  // start at array position pos
  let str = "";
  let pos = aPos;
  do {
    let n = 0;
    for (let j=0; j < 8; j++) {
      if (pos % 4 == 3) pos++;
      let v = arr[pos];
      if (v > 127) {
        n |= 1 << j;
      }
      pos++;
    }
    if (!n) break;
    str += String.fromCharCode(n);
  } while (str.length != len);
  return {str:str, pos:pos};
}

function string2array(str, arr, aPos, zeroTerminate) {
  // assume array is a image data array
  let pos=aPos;
  for (let i=0; i < str.length; i++) {
    for (let j=0; j < 8; j++) {
      if (pos % 4 == 3) pos++;
      arr[pos] = (str.charCodeAt(i) & (1 << j)) ? 0xff : 0;
      pos++;
    }
  }
  if (pos % 4 == 3) pos++;
  if (zeroTerminate) {
    for (let j=0; j < 8; j++) {
      if (pos % 4 == 3) pos++;
      arr[pos] = 0;
      pos++;
    }
  }
  return pos;
}

type2FuncList.production = addProduction;

function addProduction() {
  let layer = {type:"production", x:200, y:643, width:130, height:130, 
              params:"allimages allpreset"};
  let newLayer = addLayer("Production", layer);
  let thisBlock = blockList[hiddenImage["prod_nxn"]];
  if (thisBlock.obj) {
    drawProject();
  } else {
    fetchBlock(hiddenImage["prod_nxn"]);
  }  
  return newLayer;
}

type2FuncList.effect = addEffectBox;

function addEffectBox() {
  let layer = {type:"effect", x:600, y:300, width:400, height:300, 
              params:"allimages allpreset"};
  let newLayer = addLayer("Effect Box", layer);
  drawProject();
  return newLayer;
}

type2FuncList.line = addLine;

function addLine() {
  let layer = {type:"line", x:0, y:0, width:2, angle:0, len:100, color:"#000000", 
              opacity:1, params:"allangle alllen allpreset allcolor"};
  let newLayer = addLayer("Line", layer);
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

function clickLoadWebImage() {
  let o = document.getElementById("overlay");
  if (o.classList.contains("w3-hide")) {
    o.classList.remove("w3-hide");
    o.classList.add("w3-show");
  } else {
    o.classList.remove("w3-show");
    o.classList.add("w3-hide");
  }
}

function loadWebImage() {
  let url = document.getElementById("url2load").value;
  let img = new Image();
  img.onload = function () {
      webImageLoaded(img);
  };
  img.src = url;
  img.crossOrigin = "Anonymous";
  let o = document.getElementById("overlay");
  o.classList.remove("w3-show");
  o.classList.add("w3-hide");
}

function webImageLoaded(th) {
  // th = image object
  let layer = {type:"webFile", iNum:0,
    x:0, y:0, width:1, height:1,
    alpha:100,
    sx:0, sy:0, swidth:0, sheight:0, params:"allimages clipimages"};
  layer.iNum = userImageList.length;
  layer.filename = th.src;
  layer.width = th.width;
  layer.height = th.height;
  layer.swidth = th.width;
  layer.sheight = th.height;
  
  userImageList.push(th);
  let newLayer = addLayer("Web image", layer);
  drawProject();
}

function reloadWebImage(url) {
  let img = new Image();
  img.onload = function () {
      webImageReloaded(img);
  };
  img.src = url;
  img.crossOrigin = "Anonymous";
}

function webImageReloaded(th) {
  // th = image object
  let iNum = userImageList.length;
  userImageList.push(th);

  for (let l in aLayers) {
    let thisLayer = aLayers[l];
    if ((thisLayer.type == "webFile") && (thisLayer.filename == th.src)) {
      if (thisLayer.iNum == -1) {
        thisLayer.iNum = iNum;
      }
    }
  }

  drawProject();
}

function cancelOverlay() {
  let o = document.getElementById("overlay");
  o.classList.remove("w3-show");
  o.classList.add("w3-hide");
}

function clickNew() {
  if (confirm("Delete current work and start fresh?")) resetProject(false);
}

var extraRows = 0;
var oldHeight = 0;

var projectLoad = false;

function clickLoadProject() {
  projectLoad = true;
  // following click eventually runs addUserFile()
  document.getElementById('fileselection').click();
}

function clickSaveProject() {
  // make array of user images
  let layerDivs = document.getElementsByClassName("divRec");
  let imagesForSaving = [];
  for (let i=0; i < layerDivs.length; i++) {
    let layer = aLayers[layerDivs[i].id];
    if (layer.type != "userFile") continue;
    imagesForSaving.push(userImageList[layer.iNum]);
  }
  // if no images, assume canvas of 200x200
  let imgData = {container:{width:200,height:200}, pos:[]};
  // if 1+ image, run fitImages and assume canvas of max(height,200) x max(width,200);
  if (imagesForSaving.length) {
    imgData = fitImages(imagesForSaving);
    if (imgData.container.width < 200) imgData.container.width=200;
    if (imgData.container.height < 200) imgData.container.height=200;
    for (let i=0; i < imagesForSaving.length; i++) {
      imgData.pos[i].width = imagesForSaving[i].width;
      imgData.pos[i].height = imagesForSaving[i].height;
    }
  }
  // determine number of extra rows, add this value to all pos.y values returned from fitImages
  // currently our storeage is 2 bytes per pixel (4 worked but BGG does something that ruins it)
  let posStr = JSON.stringify(imgData.pos);
  extraRows = Math.ceil(8 + (lastAutoSave.length + posStr.length + 10) / .375 / imgData.container.width);
  for (let i=0; i < imgData.pos.length; i++) {
    imgData.pos[i].y += extraRows;
  }
  posStr = JSON.stringify(imgData.pos);
  // NOTE: we are making the not so crazy judgement that changing the pos.y data will not increase
  //  posStr by much and certainly nothing near the minimum 600+ bytes 
  //  (8 extra height * 200 (min) * .375 byte per pixel) we have available.
  // make canvas assumed.height+extrarows x assumed.width
  let c = document.getElementById("cmcanvas");
  let ctx = c.getContext("2d");
  c.height = imgData.container.height + extraRows;
  c.width = imgData.container.width;

  // insert JSON and other data
  let tmp = "tm_cmV01";
  let imgPlus = ctx.createImageData(imgData.container.width, extraRows+1);
  imgPlus.data.fill(255);
  let p = 0;
  // insert our 8 byte signature
  p = string2array(tmp,imgPlus.data,p,false);
  // insert image pos data 
  p = string2array(posStr, imgPlus.data, p, true);
  // insert layer info
  p = string2array(lastAutoSave, imgPlus.data, p, true);
  // and put that onto the canvas
  ctx.putImageData(imgPlus, 0, 0);
  
  // insert images at their pos.x/y locations
  for (let i=0; i < imgData.pos.length; i++) {
    let layer = imagesForSaving[i];
    let pos = imgData.pos[i];
    c.drawImage(userImageList[layer.iNum],pos.x,pos.y);
  }

  // allow time for drawing then prompt for save
  setTimeout(saveProjectCont,100) ;


  // figure out how much extra height we need (assume UTF-8)
  // oldHeight = h;
  // c.height = h+extraRows;
  // drawProject(true);
}

function saveProjectCont() {
  let c = document.getElementById("cmcanvas");
  // let ctx = c.getContext("2d");
  // let w=c.width;
  // let h = oldHeight;
  // let imgData = ctx.getImageData(0, 0, w, h);
  // ctx.putImageData(imgData, 0, 0);
  // let imgPlus = ctx.getImageData(0, 0, w, h+extraRows);
  // // imgPlus contains the image data we want to save plus the extra rows
  // // where we will save our data
  // let storePos = w*h*4;
  // let tmp = "tm_cmV01";
  // {
  //   let j=0;
  //   // store 8 bytes to verify it's our special image
  //   for (let i=w*h*4; i < w*h*4+tmp.length; i++) {
  //     imgPlus.data[i] = tmp.charCodeAt(j++);
  //     storePos++;
  //   }
  // }
  // let l = lastAutoSave.length;
  // imgPlus.data[storePos++] = l & 0xff;
  // l = l >> 8;
  // imgPlus.data[storePos++] = l & 0xff;
  // l = l >> 8;
  // imgPlus.data[storePos++] = l & 0xff;
  // l = l >> 8;
  // imgPlus.data[storePos++] = l & 0xff;
  // {
  //   let j=0;
  //   for (let i=storePos; i < storePos+lastAutoSave.length; i++) {
  //     imgPlus.data[i] = lastAutoSave.charCodeAt(j++);
  //   }
  // }
  // ctx.putImageData(imgPlus, 0, 0);
  let projectlink = document.getElementById('projectlink');
  projectlink.setAttribute('download', 'cardMaker.png');
  projectlink.setAttribute('href', c.toDataURL("image/png").replace("image/png", "image/octet-stream"));
  projectlink.click();
  saveDone();
}

function saveDone() {
  let ans = confirm("Click when done.");
  if (ans || !ans) {
      let c = document.getElementById("cmcanvas");
    c.height = c.height-extraRows;
    extraRows = 0;
    drawProject();

  }
}

function groupModeToggle() {
  let c = document.getElementsByClassName("groupcheck");
  for (let l=0; l < c.length; l++) {
    if (document.getElementById("groupmode").checked) {
      // turn on group check box
      c[l].classList.add("w3-show-inline-block");
      c[l].classList.remove("w3-hide");
      // make sure they are all unchecked
      c[l].checked = false;
    } else {
      c[l].classList.remove("w3-show-inline-block");
      c[l].classList.add("w3-hide");
      // make sure they are all unchecked
      c[l].checked = false;
    }
  }
}

// function clickMakeGroup() {
//   let c = document.getElementsByClassName("groupcheck");
//   let ch = [];
//   let gap = false;
//   for (let l=0; l < c.length; l++) {
//     if (c[l].checked) {
//       if (gap) {
//         // only true is found checked box after unchecked box after checked box
//         window.alert("Error:Group layers must be contiguous.");
//         return;
//       } else {
//         ch.push(c[l].parentNode.id);
//       }
//     } else if (ch.length) {
//       gap = true; // found unchecked box after checked box
//     }
//   }
//   if (ch.length < 2) return;
//   // make ch into a group
//   let layer = {type:"group", name:"", groupNum:0, params:""};
//   layer.groupNum = groupList.length;
//   layer.name = "Group:" + layer.groupNum;
//   let newLayer = addLayer("Group:" + layer.groupNum, layer);
//   for (let l=0; l < ch.length; l++) {
//     aLayers[ch[l]].group = layer.groupNum;
//   }

//   return newLayer;
// }

// function clickUngroup() {

// }

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
     

resetProject(true);
