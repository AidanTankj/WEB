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
	// Get the search term from the input field.
	const searchTerm = document.getElementById("searchBar").value;

	// Create a regular expression to match the search term.
	const regex = new RegExp(searchBar, "i");

	// Get all of the elements on the page.
	const elements = document.querySelectorAll("*");

	// Loop through the elements and see if they match the search term.
	let results = [];
	for (const element of elements) {
		if (regex.test(element.textContent)) {
			results.push(element);
		}
	}

	// Display the search results.
	document.getElementById("searchResults").innerHTML = results.map(element => element.textContent).join("");
}

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}