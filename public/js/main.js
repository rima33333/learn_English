var subMenu = document.getElementById('subMenu')
var fullPageMenu = document.getElementById('fullPageMenu')
subMenu.addEventListener('click',function(){
  if(subMenu.className === 'menuClicked') {
    subMenu.className = ""
    setTimeout(function(){fullPageMenu.className = "visually-hidden"},200)
  }else{
    subMenu.className = 'menuClicked'
    fullPageMenu.className = "slideRight"
  }
})
/////////////////////////////
function performSearch() {
  var query = document.getElementById("searchInput").value.toLowerCase();

  if (query === "login") {
      window.location.href = "/users/login";  
  } 
  else if (query === "sign up" || query === "register") {
      window.location.href = "/users/signup";
  }
  else if (query === "test") {
      window.location.href = "/events/test";
  }
  else if (query === "home") {
      window.location.href = "/users";
  }
  
  else {
      alert("No results found!");
  }
}
///////////////////////////////////////////togglePassword
document.getElementById('englishTest').addEventListener('submit', function(e) {
  // This line prevents the form from submitting
  e.preventDefault();
  
  let score = 0;

  // Loop through each question and add up the scores
  const answers = document.querySelectorAll('input[type="radio"]:checked');
  answers.forEach(answer => {
      score += parseInt(answer.value, 10);
  });

  let grade;
  switch(score) {
      case 2: // If both q1=1 and q2=1, then score will be 2.
          grade = 'A2';
          break;
      // You can add more cases as per your grading system
      default:
          grade = 'Ungraded';
  }

  // Update the value of the result input field
  document.getElementById('result').value = `Your English skill is: ${grade}`;
});

 