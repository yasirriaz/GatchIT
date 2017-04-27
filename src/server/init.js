(function(global) {
    "use strict;"

    // Class ------------------------------------------------
    var Config = {};
    
    Config.host = "10.120.14.10";
    Config.port = 2222;
    Config.urlPrefix = '/spika';
    Config.socketNameSpace = '/spika';

    Config.imageDownloadURL = "http://" + Config.host + "/:" + Config.port + Config.urlPrefix + "/media/images/";
    Config.noavatarImg = "http://" + Config.host + ":" + Config.port + Config.urlPrefix + "/img/noavatar.png";

    Config.chatDatabaseUrl = "mongodb://sellersinn:2Av0wbJcVx8NtmjVvq8NBvSigdUqxSK5GsFHxrQ5Dus9qsG2YZIUk7QXGTHFZJiu1g1lkIIeWm3oGL26i3EKww==@sellersinn.documents.azure.com:10250/?ssl=true";
    Config.dbCollectionPrefix = "spika_";
    
    Config.uploadDir = 'public/uploads/';
    Config.sendAttendanceMessage = true;
    
    Config.stickerBaseURL = 'http://spika.chat';
    Config.stickerAPI = Config.stickerBaseURL + '/api/v2/stickers/56e005b1695213295419f5df';
    
    // Exports ----------------------------------------------
    module["exports"] = Config;

})((this || 0).self || global);
