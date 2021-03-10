let parent = document.querySelector('#parentTab');
let links = parent.querySelectorAll('.menuTab a');
let tabs = parent.querySelectorAll('.tabs .tab');
console.log(links);
console.log(tabs);


for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (event) {
        let activeLink = parent.querySelector('.menuTab a.active');
        activeLink.classList.remove('active');

        let activeTab = parent.querySelector('.tabs .tab.active');
        activeTab.classList.remove('active');

        this.classList.add('active');
        tabs[i].classList.add('active');

        event.preventDefault();
    })
}
let elem = document.querySelector('#elem');




