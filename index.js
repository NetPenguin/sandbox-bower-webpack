require("jquery");
require("underscore");
require("bootstrap");
require("bootstrap.css");
require("bootstrap-multiselect");
require("bootstrap-multiselect.css");

require("./style.css");
document.write(require("./content.js"));

$(function() { 
    $("#content").text(_.map([1,2,3], function(x) { return x * 2; }).join());
    $("#multiselect").multiselect({
        enableFiltering: true
    });
});
