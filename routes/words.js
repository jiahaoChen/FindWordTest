var _=require('underscore');

function search(word) {
    var exclude = _.filter(word, function(w){
        return !(w != '?') || !(w != '_');
    });
    var excludePattern = '^';
    var toSearch = '';
    _.each(exclude, function(w){
        excludePattern += w;
    });
    excludePattern = '[' + excludePattern + ']';
    toSearch = '^' + word.replace(/\?/g, excludePattern) + '$';
    toSearch = toSearch.replace(/\_/g, "[a-z]");

    var result = _.filter(dictionary, function(w) {
        return w.match(new RegExp(toSearch, "i"))
    });

    return result;
};

exports.search = search;
var dictionary = require('./dictionary');