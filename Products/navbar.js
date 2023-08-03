const toggleBtn4 = document.querySelector('.menubutton')
const toggleBtnIcon2 = document.querySelector('#menubuttonimg')
const dropDownMenu4 = document.querySelector('.dropdown-menu')

toggleBtn4.onclick = function () {
	dropDownMenu4.classList.toggle('open')
	const isOpen = dropDownMenu4.classList.contains('open')
	const imgSrc = isOpen ? 'xmark.png' : 'bars-solid.png';
	toggleBtnIcon2.src = imgSrc;
}

const toggleBtn5 = document.querySelector('.search-icon')
const dropDownMenu5 = document.querySelector('.search-bar')

toggleBtn5.onclick = function () {
	dropDownMenu5.classList.toggle('open')
	dropDownMenu6.classList.remove('open')
}

const toggleBtn6 = document.querySelector('.language-icon')
const dropDownMenu6 = document.querySelector('#google_translate_element')

toggleBtn6.onclick = function () {
	dropDownMenu6.classList.toggle('open')
	dropDownMenu5.classList.remove('open')
}

function search() {
	// Get the search term from the input field.
	const searchTerm = document.getElementById("searchBar").value;
}

function googleTranslateElementInit() {
	new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}