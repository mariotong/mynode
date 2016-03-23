/**
 * Created by Administrator on 2016/3/12.
 */
var Readable=require('steam').Readable;
var util=require('util');
util.inherits(Counter,Readable)
/*
*
* */

function Counter (opt){
    this._start=opt
}