// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name){
    cats.push(name) 
}
function destructivelyPrependCat(name){
    cats.unshift(name)
}function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function removeLastCat(){
    cats.pop()
}
function appendCat(name){

    const newcats = [...cats, name];
    return (newcats)

}
function prependCat(name){
    const newcats = [name, ...cats];
    return (newcats)

}
function removeLastCat() {
    const newcats = [...cats];
    newcats.splice(2,1)

    return (newcats)
}
function removeFirstCat() {
    const newcats = [...cats];
    newcats.splice(0,1)

    return (newcats)
}