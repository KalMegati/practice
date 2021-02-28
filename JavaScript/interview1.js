

class Deferred {

    constructor(){
	    this.store = []
    }

    then(func){
        this.store.push(func);
    }

    resolve(value){
	    let temp = value
        this.store.forEach( func => {
	        temp = func(temp)
        })
    }

}

//-----

// usage example
let d = new Deferred();
d.then(function(v){ console.log("1", v); return "a"; });
d.then(function(v){ console.log("2", v); return "b"; });
d.then(function(v){ console.log("3", v); return "c"; });
d.resolve("hello");

/*
expected console output...
1 hello
2 a
3 b
*/

// note: feel free to add any constructor, fields and/or internal methods you need
// there are multiple ways to solve this. then&resolve are just the minimum requirements
// other note: you cannot use any Promise or async function to solve the problem