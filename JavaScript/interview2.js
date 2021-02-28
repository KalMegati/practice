class Deferred {

    constructor(){
    	this.store = []
    	this.temp = null
    }

    retValue() {
    	return this.temp
    }

    then(func) {
        this.store.push(func);
    }

    resolve(value) {
        this.temp = value

        // this.store[2](this.store[1](this.store[0](this.temp)))

        while (this.store.length > 0) {

            
            if (this.temp instanceof Deferred) {
                this.temp.then(this.store.shift())
            } else {
                this.temp = this.store.shift()(this.temp)
            }

        }
        
    }
}


let d = new Deferred();
d.then(res=>{
    console.log("1", res);
    let innerDef = new Deferred();
    setTimeout(function(){ innerDef.resolve("a"); }, 1500);
    // innerDef.resolve("a")
    return innerDef;
});
d.then(function(res){
    console.log("2", res);
    let innerDef = new Deferred();
    setTimeout(function(){ innerDef.resolve("b"); }, 1500);
    // innerDef.resolve("a")
    return innerDef;});
d.then(function(v){ console.log("3", v); return "c"; });
d.resolve("hello");

// *//*
// expected console output...
// 1 hello
// (1.5s delay here)
// 2 a
// 3 b
// */
