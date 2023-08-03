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
}

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}