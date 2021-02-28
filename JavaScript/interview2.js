class Deferred {

    constructor(){
        this.store = []
        this.temp = "oops"
    }
    
    retVal(){
        return this.temp
    }

    then(func){
        this.store.push(func);
    }

    resolve(value){
        this.temp = value
        this.store.forEach( function(func){
            this.temp = func(this.temp)
            //callback?
        })
    }

}

let d = new Deferred();
d.then(res=>{
    console.log("1", res);
    let innerDef = new Deferred();
    setTimeout(function(){ innerDef.resolve("a"); console.log("fire!")}, 1500);
    return innerDef;
});
d.then(function(v){ console.log("2", v); return "b"; });
d.then(function(v){ console.log("3", v); return "c"; });
d.resolve("hello");