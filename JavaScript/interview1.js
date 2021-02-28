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

// usage example
let d = new Deferred();
d.then(function(v){ console.log("1", v); return "a"; });
d.then(function(v){ console.log("2", v); return "b"; });
d.then(function(v){ console.log("3", v); return "c"; });
d.resolve("hello");