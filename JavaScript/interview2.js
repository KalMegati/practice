class Deferred {

    constructor(){
        this.store = []
        this.temp = null
    }
    
    retVal(){
        return this.temp
    }

    then(func){
        this.store.push(func);
    }

    resolve(value){
        this.temp = value
        this.store.forEach( func => {
            this.temp = func(this.temp, ()=>{
                console.log("Hell")
            })
            //callback?
        })
    }

    // constructor(){
	// this.store = []
	// this.temp = "?"
    // }

    // retValue() {
	// return this.temp
    // }

    // then(func) {
    //     this.store.push(func);
    // }

    // resolve(value) {
    //     this.temp = value
    //     this.store.forEach(func => {
    //         this.temp = func(value)
    //     })
    // }
}

let d = new Deferred();
d.then(res=>{
    console.log("1", res);
    let innerDef = new Deferred();
    setTimeout(function(){ innerDef.resolve("a"); }, 1500);
    return innerDef;
});
d.then(function(v){ console.log("2", v); return "b"; });
d.then(function(v){ console.log("3", v); return "c"; });
d.resolve("hello");