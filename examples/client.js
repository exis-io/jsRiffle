var riffle = require('jsriffle');

riffle.SetFabricLocal();
riffle.SetLogLevelDebug();

var app = riffle.Domain("xs.damouse");
var receiver = app.Subdomain("alpha");
var me = app.Subdomain("beta");

me.onJoin = function() {
    console.log("Sender Joined");

    receiver.Publish("sub", 1, 2, 3)
};

me.Join()
