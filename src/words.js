// at https://www.wordclouds.com/

var biggest = {
    peso: 7,
    words: ["Mathematics"]
}

var bigger = {
    peso: 5,
    words: ["Functional Programming", "Graphs","C","JavaScript"]
}

var medium = {
    peso: 3,
    words: ["Accessibility", "Theory of Computation","Topology","Teaching","Haskell","ReactJS","Python","Linux","Unicamp","C++"]
}

var small = {
    peso: 1,
    words: ["Git","MySql","Assembly","Lisp", "Bash","NodeJS","html5","css3","BootStrap4","Emacs","Research","LaTeX","Geoprocessing", "Research","WebDev","Calculus"]
}


function makeText(){
    var text = ""

    for(var i=1; i<biggest.peso;i++){
	biggest.words.forEach(x => text+=" " + x)
    }
    for(var i=1; i<bigger.peso;i++){
	bigger.words.forEach(x => text+=" " + x)
    }
    for(var i=1; i<medium.peso;i++){
	medium.words.forEach(x => text+=" " + x)
    }
    for(var i=1; i<small.peso;i++){
	small.words.forEach(x => text+=" " + x)
    }

    return text
}

var words = makeText()

function make2(){
    var text = ""

    biggest.words.forEach(x => text+="\n" + biggest.peso + " " + x)

    bigger.words.forEach(x => text+="\n" + bigger.peso + " " + x)

    medium.words.forEach(x => text+="\n" + medium.peso + " " + x)

    small.words.forEach(x => text+="\n" + small.peso + " " + x)

    return text

}

words = make2()

console.log(words)
