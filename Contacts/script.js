  function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE},
      'google_translate_element'
    );
  }

const toggleBtn = document.querySelector('.menubutton')
const toggleBtnIcon = document.querySelector('#menubuttonimg')
const dropDownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
	dropDownMenu.classList.toggle('open')
	const isOpen = dropDownMenu.classList.contains('open')
	const imgSrc = isOpen ? 'xmark.png' : 'bars-solid.png';
	toggleBtnIcon.src = imgSrc;
}

const toggleBtn2 = document.querySelector('.search-icon')
const dropDownMenu2 = document.querySelector('.search-bar')

toggleBtn2.onclick = function () {
	dropDownMenu2.classList.toggle('open')
	dropDownMenu3.classList.remove('open')
}

const toggleBtn3 = document.querySelector('.language-icon')
const dropDownMenu3 = document.querySelector('#google_translate_element')

toggleBtn3.onclick = function () {
	dropDownMenu3.classList.toggle('open')
	dropDownMenu2.classList.remove('open')
}

function search() {
	
	const searchTerm = document.getElementById("searchBar").value;

	
	const regex = new RegExp(searchTerm, "i");

	
	const elements = document.querySelectorAll("*");

	
	let results = [];
	for (const element of elements) {
		if (regex.test(element.textContent)) {
			results.push(element);
		}
	}

	
	document.getElementById("searchResults").innerHTML = results.map(element => element.textContent).join("");
}

    function validateForm(event) {
      event.preventDefault(); 
  
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var feedback = document.getElementById("feedback").value;

      if (name.trim() === "" || email.trim() === "" || feedback.trim() === "") {
        alert("Please fill out all fields in the form.");
        return false;
      }
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
      }

      if (feedback.length > 100) {
      alert("Feedback must be within 100 characters.");
      return false;
    }
  
      alert("Form submitted successfully!");
      return true;
    }
