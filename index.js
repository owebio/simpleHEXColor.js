// https://github.com/Caligatio/jsSHA

$(document).ready(function(){

var toColorHex = function(hex) {
  $("#result").empty();
  var result = $("#result")[0];
  var title = $("#hex-title").val();
  simpleHEXColor(hex, result, title);
}

  $("#toSHA-256").click(function(){
    var val = $("#input-text").val().trim();
    var shaObj = new jsSHA("SHA-256", "TEXT");
    shaObj.update(val);
    var hash = shaObj.getHash("HEX");
    $("#hexResult").val(hash);
    toColorHex(hash);
  });
  $("#toSHA-512").click(function(){
    var val = $("#input-text").val().trim();
    var shaObj = new jsSHA("SHA-512", "TEXT");
    shaObj.update(val);
    var hash = shaObj.getHash("HEX");
    $("#hexResult").val(hash);
    toColorHex(hash);
  });
  $("#toSHA-1").click(function(){
    var val = $("#input-text").val().trim();
    var shaObj = new jsSHA("SHA-1", "TEXT");
    shaObj.update(val);
    var hash = shaObj.getHash("HEX");
    $("#hexResult").val(hash);
    toColorHex(hash);
  });
  $("#hexToColor").click(function(){
    var HEX = $("#hexResult").val().trim();
    if ((/^[0-9a-f]+$/i).test(HEX)) {
      toColorHex(HEX);
    } else {
      $("#result").empty();
      $("#result").html("INVALID HEX");
    }
  });
  toColorHex($("#hexResult").val().trim());
});

