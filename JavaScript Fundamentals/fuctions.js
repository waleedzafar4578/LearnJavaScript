let name ='waleed';
function changeName(name) {
    name = 'zafar';
    alert(name)
}
// alert(name)
// changeName(name)
// alert(name)




function mustPassName(){
    return prompt('Please enter your name')
}

function whatName(name =mustPassName()){
    alert(`Welcome:${ name }!`);
}

whatName('ali')
whatName()