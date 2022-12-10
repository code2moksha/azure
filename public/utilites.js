/*Navigation Dropdown Button Click Events*/
const navMenus = document.querySelectorAll(".azure-nav-l1_list-item button");
const productTabs = document.querySelectorAll(
	".azure-nav-tabs__tablist li button"
);
const navsearch = document.querySelector("#nav-search-field");
const closeBtn = document.getElementById("nav-search-close");
const activeClassName = "active";
let lastActiveNav;
let lastActivePanel;

document.addEventListener("click", (e) => {
	if (lastActiveNav && !lastActiveNav.contains(e.target)) {
		lastActiveNav.classList.remove(activeClassName);
	}
});
/* Product tab click events*/
productTabs.forEach((tab) => {
	tab.addEventListener("click", function (e) {
		e.stopImmediatePropagation();
		const parentTarget = e.target.parentElement;
		const tabName = e.target.getAttribute("aria-controls");
		const tabPanel = document.getElementById(tabName);
		const parentPanel = tabPanel.parentElement;

		productTabs.forEach((tab) => {
			const parentTab = tab.parentElement;
			const isActive = parentTab.classList.contains(activeClassName);

			if (parentTab === parentTarget) {
				parentTab.classList.add(activeClassName);
				if (lastActivePanel) {
					lastActivePanel.classList.remove(activeClassName);
				}
				tabPanel.classList.add(activeClassName);
				lastActivePanel = tabPanel;
			} else {
				parentTab.classList.remove(activeClassName);
			}
		});
	});
});
/*Main Menus events */
navMenus.forEach((menu) => {
	menu.addEventListener("click", function (e) {
		e.stopPropagation();
		const parentNav = e.target.parentElement;
		const isActive = parentNav.classList.contains(activeClassName);

		if (lastActiveNav && lastActiveNav !== parentNav) {
			lastActiveNav.classList.remove(activeClassName);
		}

		if (isActive) {
			parentNav.classList.remove(activeClassName);
		} else {
			lastActiveNav = parentNav;
			parentNav.classList.add(activeClassName);
		}
	});
});
/*Navigation bar search*/
navsearch.addEventListener("click", (e) => {
	//console.log(e.target.classList);
	const searchForm = document.getElementById("azure-nav-search-form");
	const dropDown = document.getElementById("dropdown");
	const searchBtn = document.getElementById("nav-search-button");
	const divSearch = document.getElementById("search-form-field");

	dropDown.style.display = "none";
	//e.target.classList.add("expand");
	searchForm.classList.add("expand");
	closeBtn.classList.add("expand");
	searchBtn.classList.add("expand");
	divSearch.classList.add("expand");
});
closeBtn.addEventListener("click", (e) => {
	closeBtn.classList.remove("expand");
	searchBtn.classList.remove("expand");
	divSearch.classList.remove("expand");
});
