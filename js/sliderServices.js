let serviceBlocks = document.querySelectorAll('.service-block');

let servicesForm = document.querySelectorAll('.services-input-checkbox');

let lastClicked = servicesForm[0];


var slovar = {
  deliveryField: `service-delivery`,
  guaranteeField: `service-guarantee`,
  creditField: `service-credit`
}



for( let i = 0; i < servicesForm.length; i++ ){
  servicesForm[i].addEventListener('click', function(){
   
    document.getElementById(`${slovar[lastClicked.id]}`).classList.add('visually-hidden');
   
    document.getElementById(`${slovar[this.id]}`).classList.remove('visually-hidden');
    lastClicked = this; 
  
  });
}







