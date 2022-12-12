/*Navigation Dropdown Button Click Events*/
const navMenus = document.querySelectorAll(".azure-nav-l1_list-item button");
const productTabs = document.querySelectorAll(
	".azure-nav-tabs__tablist li button"
);
const navsearch = document.querySelector("#nav-search-field");

const closeBtn = document.getElementById("nav-search-close");
const searchBtn = document.getElementById("nav-search-button");
const divSearch = document.getElementById("search-form-field");

const dropDown = document.getElementById("dropdown");
const activeClassName = "active";
let lastActiveNav;
let lastActivePanel;

document.addEventListener("click", (e) => {
	if (lastActiveNav && !lastActiveNav.contains(e.target)) {
		lastActiveNav.classList.remove(activeClassName);
		navsearch.style.borderStyle = "solid";
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
	//e.stopPropagation();
	e.preventDefault();

	// const searchForm = document.getElementById("azure-nav-search-form");

	dropDown.style.display = "none";
	//e.target.classList.add("expand");
	// searchForm.classList.add("expand");
	closeBtn.classList.add("expand");
	searchBtn.classList.add("expand");
	divSearch.classList.add("expand");
});
closeBtn.addEventListener("click", (e) => {
	//e.stopPropagation();
	e.preventDefault();

	closeBtn.classList.remove("expand");
	searchBtn.classList.remove("expand");
	divSearch.classList.remove("expand");
	navsearch.focus();
	navsearch.style.borderStyle = "dashed";
	dropDown.style.display = "flex";
});
