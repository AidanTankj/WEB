let previewContainer = document.querySelector('.product-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.box-container .box').forEach(box =>{
    box.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = box.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');

            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.close-button').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    };
});

const toggleBtn = document.querySelector('.menubutton')
			const toggleBtnIcon = document.querySelector('#menubuttonimg')
			const dropDownMenu = document.querySelector('.dropdown-menu')

			toggleBtn.onclick = function () {
			dropDownMenu.classList.toggle('open')
			const isOpen = dropDownMenu.classList.contains('open')	
			const imgSrc = isOpen ? 'xmark.png' : 'bars-solid.png';
  			toggleBtnIcon.src = imgSrc;
			}
