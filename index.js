require("jquery");
require("underscore");
require("bootstrap");
require("bootstrap-multiselect");

require("./style.css");
document.write(require("./content.js"));

$(function() { 
    $("#content").text(_.map([1,2,3], function(x) { return x * 2; }).join());
        $("#multiselect").multiselect({
            enableFiltering: true
        });
});
