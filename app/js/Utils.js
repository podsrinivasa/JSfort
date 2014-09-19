/**
 * {a: , b: , c: }
 */


/**
 * Created by srinivasa on 9/19/2014.
 */
var IINVENTIONS = {};

IINVENTIONS.Utils = function(){

    /**
     * Groups Array of Flat Objects into subsets and each
     * subset is given a header of passed groupByField
     * @param collection    Array of Flat Objects
     * @param groupByField  Header value under which subsets have to be presented
     *                      and the key for the aggregation
     * @returns Object {GroupByFieldValue1: [{}, {},...], GroupByFieldValue2: [{}, {}, ...],...}
     * */

    this.groupBy = function(collection, groupByField){

        var localCollection = collection.splice(0);

        if(!localCollection instanceof Array)
            return;

        /**
         * first sorting the Array of objects by groupByField
         */
        this.sortByObjects(localCollection, groupByField);
        /**
         * now forming Hash where key is the groupby field value
         * and value is the Array of objects presented under the groupby
         * head
         */
        var groupByHash = {};
        var prevGroupByField = null;
        localCollection.forEach(function(currentValue, index, inputArray){
            var groupByFieldValue = currentValue[groupByField];
            if(groupByFieldValue !== prevGroupByField){
                /**
                 * Initiate groupByHash with groupByField value as key and an
                 * Array of objects as its value
                 */
                groupByHash[groupByFieldValue] = [];
            }

            delete currentValue[groupByField];
            groupByHash[groupByFieldValue].push(currentValue);
            prevGroupByField = groupByFieldValue;
        });
        console.log("GroupByHash Result:***");
        console.log(groupByHash);
        return groupByHash;
    };

    /**
     * Sorts Array of objects by given sortField
     * @param target     - An Array of Objects
     * @param sortField  - Target is sorted by this field
     */

    this.sortByObjects = function(target, sortField){
        var that = this;

        if(!target instanceof Array)
            throw new Error("Pass Valid Array");

        target.sort(function(objectA, objectB){
            if(!that.isValidObject(objectA) || !that.isValidObject(objectB)){
                throw new Error("Passed Objects are not valid");
            }

            if(objectA[sortField] === objectB[sortField])
                return 0;
            if(objectA[sortField] > objectB[sortField])
                return -1;
            if(objectA[sortField] < objectB[sortField])
                return 1;
        });

        console.log(target);
    };

    this.isValidObject = function(object){
        return typeof object === "object" && object !== null;
    };
};