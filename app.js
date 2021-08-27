//Define UI vars
//setTimeOut takes 2 input one is fns ans one is time
//thr fns will get called after every given time
const loanAmount = document.querySelector('#loanAmount');

const interest = document.querySelector('#interest');

const years = document.querySelector('#years');

const monthlyPayment = document.querySelector('#monthlyPayment');

const totalPayment = document.querySelector('#totalPayment');

const totalInterest = document.querySelector('#totalInterest');

const loanForm=document.querySelector('#loanForm');

const results=document.querySelector("#results");

const loader=document.querySelector('#loading');

loanForm.addEventListener('submit',function(e){
  //prevent default behaviour of form
     e.preventDefault();
  //as soon as we submit loder will display and after 2miliSec 
  //calculateResults fns will call
     results.style.display='none';
     loader.style.display='block';

     setTimeout(calculateResults, 2000);
});

function calculateResults(){
    //get all the value from input-place
     const principalValue=parseFloat(loanAmount.value);
     const rateOfInterest=parseFloat(interest.value) / 100 / 12;
     const timeTaken=parseFloat(years.value) * 12;

    // Compute monthly payment
     const x = Math.pow(1 + rateOfInterest, timeTaken);
     const monthly = (principalValue*x*rateOfInterest)/(x-1);
    
    if(isFinite(monthly)) {

        monthlyPayment.value=monthly.toFixed(2);
        totalPayment.value=(monthly * timeTaken).toFixed(2);
        totalInterest.value=((monthly * timeTaken)-principalValue).toFixed(2);
        //show results
        results.style.display='block';
        //hide loader
        loader.style.display='none';

    }
    else{
       showError('Please check your numbers');
    }
}

// Show Error
function showError(error){
  // Hide results
  results.style.display = 'none';
  
  // Hide loader
  loader.style.display = 'none';

  // Create a div
  const errorDiv = document.createElement('div');

  // Get elements
  const heading = document.querySelector('h1');

  // Add class
  errorDiv.className = 'error';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError(){

  document.querySelector('.error').remove();

}
