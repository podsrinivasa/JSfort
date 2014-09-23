/**
 * Created by srinivasa on 9/23/2014.
 */
var IINVENTIONS = {};

IINVENTIONS.Queue = function(size){

    if(!this instanceof IINVENTIONS.Queue){
        return new IINVENTIONS.Queue();
    }

    var content = [];

    var capacity = typeof size === "number" ? parseInt(size) : 0;
    var FULL_QUEUE = "Queue is full";
    var EMPTY_QUEUE = "Queue is Empty";
    var NO_LIMIT = "NO LIMIT";


    this.enqueue = function(item){
        if(capacity != 0 && content.length >= capacity){
            throw new Error(FULL_QUEUE);
        }
        content.push(item);
        return content;
    };

    this.dequeue = function(){
        if(content.length == 0){
            throw new Error(EMPTY_QUEUE);
        }
        return content.shift();
    };

    this.forEach = function(callback){
        if(typeof callback === "function"){
            content.forEach(callback);
        }
    };

    this.capacity = function(){
        return capacity != 0 ? capacity : NO_LIMIT;
    };

    this.size = function(){
        return content.length;
    }
};

