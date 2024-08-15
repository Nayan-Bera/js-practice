console.log("Implement a private variable using closures ")


function createcountor(){
    //private variable
    let count =0

    //inner funtion /// closer
    function increment(){
        count ++;
        console.log("count:",+count)
    }
///this funtion call the upper funtion increment when we call the two ket
// incremaentcounter()  || getcount()
    return {incrementcounter: function(){
        increment();
    },
    getcount: function(){
        return count
    }
}
}

const counter = createcountor();
counter.incrementcounter()
console.log(counter.getcount())
///console.log(counter)