(function(global) {

    "use strict;"

    var Config = {};

    Config.apiBaseUrl = "http://10.120.14.12:2222/spika/v1";
    Config.socketUrl = "http://10.120.14.12:2222/spika";
    
    Config.googleMapAPIKey = "";
    
    Config.defaultContainer = "#spika-container";
    Config.lang = "en";
    Config.showSidebar = true;
    Config.showTitlebar = true;
    Config.useBothSide = false;
    Config.thumbnailHeight = 256;
    
    // Exports ----------------------------------------------
    module["exports"] = Config;

})((this || 0).self || global);
