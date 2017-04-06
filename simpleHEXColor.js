(function(){
var toSimpleColor = function(HEX) {
  var _NHEX = [];
  HEX.match(/.{1,2}/g).forEach(function(e) {
    _NHEX.push(("00" + (Math.round(parseInt(e, 16)/255)*255).toString(16)).substr(-2,2));
  });
  return "#" + _NHEX.join('');
}
var simpleHEXColor = function(hex, parent, title) {
  var result = document.createElement('div');
  result.setAttribute('data-hex', hex);
  result.className         = 'simpleHEXColor';
  result.style.textShadow += '2px 2px #000, 2px -2px #000, -2px 2px #000, -2px -2px #000';
  result.style.textShadow  = '2px 1px #000, 2px -1px #000, -2px -1px #000, -2px -1px #000';
  result.style.textShadow += ',1px -2px #000, 1px 2px #000, 1px -2px #000, -1px -2px #000';
  result.style.textShadow += ',2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000';
  result.style.textShadow += ', -1px -1px #000, -1px 1px #000, 1px 1px #000, 1px -1px #000';
  result.style.textShadow += ',-1px 0 #000, -1px 0 #000, 0 1px #000, 0 -1px #000';
  result.style.position    = 'relative';
  result.style.boxSizing   = 'border-box';
  result.style.width       = '100%';
  result.style.height      = '100%';
  result.style.overflow    = 'hidden';
  result.style.textAlign   = 'center';
  result.style.color       = '#fff';
  result.style.padding     = '10%'; // borderWidth
  var typeNumber = Math.round(parseInt(hex.charAt(0) + hex.charAt(hex.length -1), 16)/42.5);
  switch (typeNumber) {
    case 0 : var type = "normal"; break;
    case 1 : var type = "top"; break;
    case 2 : var type = "middle"; break;
    case 3 : var type = "bottom"; break;
    case 4 : var type = "half"; break;
    case 5 : var type = "diagonal"; break;
    case 6 : var type = "diagonal2"; break;
  }
  var content = document.createElement('div');
  content.style.position  = 'relative';
  content.style.boxSizing = 'border-box';
  content.style.width  = '100%';
  content.style.height = '100%';
  content.style.overflow = 'hidden';
  result.appendChild(content);
  var HEX = hex.match(/.{1,6}/g);
  result.style.backgroundColor  = toSimpleColor(HEX[HEX.length - 2]); // BORDER-COLOR
  content.style.backgroundColor = toSimpleColor(HEX[0]); // BACKGROUND-COLOR
  HEX.forEach(function(e, i, a){
    elem = document.createElement('div');
    if (i < a.length - 2 && i > 0) {
      elem.style.position = 'relative';
      if (type == 'normal') {
        elem.style.height   = '100%';
      } else if (type == 'middle') {
        elem.style.height   = '60%';
        elem.style.top      = '20%';
      } else {
        elem.style.height   = '50%';
        if (type == 'top') elem.style.top = '0';
        else if (type == 'bottom') elem.style.top = '50%';
        else if (type == 'middle') elem.style.top = '25%';
        else if (type == 'diagonal')  elem.style.top = (i < (HEX.length -2)/2) ?  '50%' : '0';
        else if (type == 'diagonal2') elem.style.top = (i < (HEX.length -2)/2) ? '0' : '50%';
      }
      if (type == 'normal') elem.style.width = 100/(a.length - 2) + '%';
      else if (type == 'half') elem.style.width = (100/(a.length - 3)) * 2 + '%';
      else elem.style.width = 100/(a.length - 3) + '%';
      elem.style.cssFloat = 'left';
      elem.style.backgroundColor = toSimpleColor(e);
    }
  
    if (type == 'half') {
      content.style.padding = result.style.padding;
    }
    content.appendChild(elem);
  });
  var elem = document.createElement('div');
  elem.style.position  = 'absolute';
  elem.style.top       = '50%';
  elem.style.left      = '50%';
  elem.style.transform = 'translate(-50%, -50%)';
  if (title) {
    var elemTitle = document.createElement("div");
    elemTitle.className = 'simpleColorHEX-title';
    elemTitle.innerHTML = title ;
    elem.appendChild(elemTitle);
  }
  var elemCode = document.createElement("code");
  elemCode.className = 'simpleColorHEX-code';
  elemCode.innerHTML = HEX[HEX.length - 1].toUpperCase() ;
  elem.appendChild(elemCode);
  result.appendChild(elem);
  if (parseInt(hex.charAt(1), 16) > 7) {
    result.style.padding    = '0';
    content.style.transform = 'rotate(45deg)';
  }
  if (parseInt(hex.charAt(hex.length -1), 16) > 7) {
    result.style.padding       = '0';
    content.style.borderRadius = '50%'; 
  }
  if (parent) parent.appendChild(result);
  return result;
}
window.simpleHEXColor = simpleHEXColor;
})();
