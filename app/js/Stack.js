/**
 * Created by srinivasa on 9/16/2014.
 */

/*var IINVENTIONS = {};*/

Stack = function(size){
    if(!this instanceof Stack){
        return new Stack();
    }

    var content = [];
    //capacity of '0' indicates stack has no max limit
    var capacity = typeof size == "number" ? parseInt(size) : 0;
    var STACK_UNDERFLOW = "Stack Underflow";
    var STACK_OVERFLOW = "Stack Overflow";
    var NO_LIMIT = "NO LIMIT";



    this.push = function(element){
        //capacity is '0' no need throw overflow exception
        if(capacity != 0 && content.length >= capacity){
            throw new Error(STACK_OVERFLOW);
        }
        return content.push(element);
    };

    this.pop = function(){
        if(content.length <= 0)
            throw new Error(STACK_UNDERFLOW);
        return content.pop();
    };

    this.forEach = function(callback){
        if(typeof callback === "function"){
            Array.prototype.forEach.apply(content, [callback]);
        }
    };

    this.size = function(){
        return content.length;
    };

    this.capacity = function(){
        return capacity != 0 ? capacity : NO_LIMIT;
    };
};