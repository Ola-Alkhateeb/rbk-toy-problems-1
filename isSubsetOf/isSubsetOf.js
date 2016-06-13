/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/


/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/
// var Array = function (){

// }

Array.prototype.isSubsetOf = function (arr) {
	for(var i=0;i<this.length;i++){
		if(arr.indexOf(this[i])===-1){
			return false;
		}
	}
	return true;
}


// Array.prototype.isSubsetOf = function (arr) {
// 	for(var i=0;i<this.length;i++){
// 		if(typeof this[i]==="object"){
// 			if(Array.isArray(this)){
// 				isSubsetOf(this);
// 			}
// 		}
// 		if(arr.indexOf(this[i])===-1){
// 			return false;
// 		}
// 	}
// 	return true;
// }