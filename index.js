'use strict';

var Px2rem = require('./lib/px2rem');
module.exports = function(content, file, conf){
    var px2remIns = new Px2rem(conf)
    var newCssText = px2remIns.generateRem(content);
    return newCssText;
};