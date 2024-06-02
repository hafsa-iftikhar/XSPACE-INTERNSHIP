
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY>0);
});

/*******skills table****/

document.addEventListener("DOMContentLoaded", function () {
    const skillsTabs = document.querySelector('.skills_tabs');

    skillsTabs.addEventListener("click", (event) => {
        if (event.target.classList.contains("skills_arrow")) {
            const targetId = event.target.parentElement.getAttribute('data-target');
            const tabContent = document.querySelector(`[data-content="${targetId}"]`);

            tabContent.classList.toggle("skills_active");
        }
    });
});


/*********work**********/
document.addEventListener("DOMContentLoaded", function () {
    const mixer = mixitup('.work_container', {
        selectors: {
            target: '.work_card'
        },
        animation: {
            duration: 300
        }
    });
});

/****link***********/

const linkWork = document.querySelectorAll('.work_item')

function activeWork(){
    linkWork.forEach(L=> I.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(L => L.addEventListener("click", activeWork))


/****portfolio***********/

document.addEventListener("DOMContentLoaded", function () {
    const workButtons = document.querySelectorAll(".work_button");
    const portfolioPopup = document.querySelector(".portfolio_popup");
    const portfolioPopupClose = document.querySelector(".portfolio_popup-close");

    workButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // Show the portfolio popup
            portfolioPopup.classList.add("open");
        });
    });

    // Close the portfolio popup when the close button is clicked
    portfolioPopupClose.addEventListener("click", function () {
        // Hide the portfolio popup
        portfolioPopup.classList.remove("open");
    });
});



/*******services*****/

const modalBtns = document.querySelectorAll('.services_button');
const modals = document.querySelectorAll('.services_modal');
const modalCloseButtons = document.querySelectorAll('.services_modal-close');

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modals[i].classList.add('active-modal');
    });
    
    // Add a click event listener for the close button
    modalCloseButtons[i].addEventListener('click', () => {
        modals[i].classList.remove('active-modal');
    });
});

/***cont****/

const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

inputs.forEach((input)=>{
    input.addEventListener("focus" , focusFunc);
    input.addEventListener("blur", blurFunc);
})

