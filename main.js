console.log('Hello, world!');

document.addEventListener('DOMContentLoaded', () => {
 
 let phoneInput = document.querySelector(".phone");
 
 const phoneMask = new IMask(phoneInput, {
  mask: "+{7}(000)000-00-00",
});


phoneInput.addEventListener('input', function (evt) {
    console.log(this.value);
});


);