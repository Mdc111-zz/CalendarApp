function removeElementFromArrayById(array, IdOfElement) {
    return array.filter(function(arrayElement){
        return arrayElement.id != IdOfElement;
    });
 }

 function filterArrayByHelipad(array, helipadNumber){
    return array.filter(function(arrayElement){
        return arrayElement.column == helipadNumber;
    });
 }