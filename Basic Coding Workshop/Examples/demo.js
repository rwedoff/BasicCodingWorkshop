PrintHello("Ryan");
PrintHello("Theo");

function PrintHello(name){
    var list = [1,2,3,4,5];
    var i = 0;
    while(i < list.length){
        i++;
        if(name == "Theo"){
            var addition = 2 + 2;
            console.log("Theo doesn't know how to math: " + addition);
        } else{
            console.log("Hello: " + name + " how are you doing?");
        }
    }
}