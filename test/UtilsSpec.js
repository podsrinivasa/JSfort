/**
 * Created by srinivasa on 9/19/2014.
 */
describe('Utils Spec', function(){
    var menu = [];
    var utils;
    beforeEach(function(){
        utils = new IINVENTIONS.Utils();
        menu = [
            {title: "Rice", name: "Veg Fried Rice"},
            {title: "Starter", name: "Samosa"},
            {title: "Starter", name: "Aloo Samosa"},
            {title: "Rice", name: "Biryani"},
            {title: "Dessert", name: "Faluda"},
            {title: "Dessert", name: "Vanilla Ice Cream"},
            {title: "Starter", name: "Chill paneer"}
        ];
    });

   it('should Sort in descending order', function(){
      utils.sortByObjects(menu, "title");
      expect(menu[0].title).toEqual("Starter");
   });

    it('should return GroupBy Array of a given collection', function(){
        var groupByResult = utils.groupBy(menu, "title");
        expect(groupByResult.hasOwnProperty("Starter")).toBeTruthy();
    });
});
