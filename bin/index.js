#! /usr/bin/env node

var ncp = require('ncp').ncp;
var stdio = require('stdio');

var ops = stdio.getopt({
    _meta_: {minArgs: 1}
});

if (ops.args[0] === 'html') {
	ncp(__dirname+'/../www', './', function (err) {
		if (err) return console.error(err);
		console.log('Done!');
	});
} else {
	console.log('Unknown init type!');
}
