const hambar = document.querySelectorAll('.hambar')

console.log(hambar)

hambar.forEach((ham)=> ham.addEventListener('click',()=>{
    alert('I am a button')
}))