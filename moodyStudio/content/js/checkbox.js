const manCheckbox = document.getElementById('man');
const womanCheckbox = document.getElementById('woman');

manCheckbox.addEventListener('change', function() {
    if (this.checked) {
        womanCheckbox.checked = false;
    }
});

womanCheckbox.addEventListener('change', function() {
    if (this.checked) {
        manCheckbox.checked = false;
    }
});


const one = document.getElementById('one')
const two = document.getElementById('two')
const three = document.getElementById('three')
const four = document.getElementById('four')
const five = document.getElementById('five')
const six = document.getElementById('six')

one.addEventListener('change', function(){
    if(this.checked){
        two.checked = false
        three.checked = false
        four.checked = false
        five.checked = false
        six.checked = false
        
    }
})
two.addEventListener('change', function(){
    if(this.checked){
        one.checked = false
        three.checked = false
        four.checked = false
        five.checked = false
        six.checked = false
        
    }
})
three.addEventListener('change', function(){
    if(this.checked){
        two.checked = false
        one.checked = false
        four.checked = false
        five.checked = false
        six.checked = false
        
    }
})
four.addEventListener('change', function(){
    if(this.checked){
        two.checked = false
        three.checked = false
        one.checked = false
        five.checked = false
        six.checked = false
        
    }
})
five.addEventListener('change', function(){
    if(this.checked){
        two.checked = false
        three.checked = false
        four.checked = false
        one.checked = false
        six.checked = false
        
    }
})
six.addEventListener('change', function(){
    if(this.checked){
        two.checked = false
        three.checked = false
        four.checked = false
        five.checked = false
        one.checked = false
        
    }
})