/**
 * Created by srinivasa on 9/17/2014.
 */

describe('Stack Test spec - ', function(){
    var stackColl = {};
    beforeEach(function(){
        stackColl = new IINVENTIONS.Stack();
    });

    it('should create a zero length Stack collection with no input size -  ', function(){
        expect(stackColl.size()).toEqual(0);
    });

    it('should create a Stack with given size -  ', function(){
        stackColl = new IINVENTIONS.Stack(5);
        expect(stackColl.capacity()).toEqual(5);
    });

    it('should create a zero size Stack given null -  ', function(){
        stackColl = new IINVENTIONS.Stack(null);
        expect(stackColl.size()).toEqual(0);
    });

    it('should push add an element to stack ', function(){
        expect(stackColl.push("one")).toEqual(stackColl.size());
    });

    it('should pop removes an element on top - ', function(){
        stackColl.push("Apple");
        expect(stackColl.pop()).toMatch("Apple");
    });

    it('should throw stack underflow exception on empty stack pop - ', function(){
        expect(function(){stackColl.pop();}).toThrow(new Error("Stack Underflow"));
    });

    it('should throw stack overflow exception on Full stack push -', function(){
         var stackColl = new IINVENTIONS.Stack(1);
         stackColl.push("Element one");
         //now adding second element should throw overflow error
        expect(function(){stackColl.push("Overflow");}).toThrow(new Error("Stack Overflow"));
    });
});