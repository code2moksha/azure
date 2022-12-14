/*Navigation Dropdown Button Click Events*/
const navMenus = document.querySelectorAll(".azure-nav-l1_list-item button");
const productTabs = document.querySelectorAll(
	".azure-nav-tabs__tablist li button"
);
const sectionProductTabs = document.querySelectorAll(
	".azure-nav-tabs__sectiontablist li button"
);
const sectionCustomerTabs = document.querySelectorAll(
	".azure-customer-tabs-contentlist li button"
);
const sectionCustomerTabButtons = document.querySelectorAll(
	".customer_tab_buttons li button"
);
const navsearch = document.querySelector("#nav-search-field");
const mininavsearch = document.querySelector("#nav-search-field");

const closeBtn = document.getElementById("nav-search-close");
const searchBtn = document.getElementById("nav-search-button");
const divSearch = document.getElementById("search-form-field");

const menu_button = document.getElementById("utility_button");
const close_button = document.getElementById("close_button");
const menu_panel = document.getElementById("utility_button_panel");

const dropDown = document.getElementById("dropdown");
const activeClassName = "active";
let lastActiveNav;
let lastActivePanel;
window.addEventListener("load", (e) => {
	defaultTabComponent(".azure-nav-tabs__sectiontablist", "popular-secnavtab");
	defaultTabComponent(".azure-customer-tabs-contentlist", "nhs");
	defaultTabComponent(".customer_tab_buttons", "small_nhs");
	close_button.style.display = "none";
	menu_panel.style.display = "none";
});

//Small Screen navigation bar

menu_button.addEventListener("click", (e) => {
	menu_button.style.display = "none";
	close_button.style.display = "inline";
	menu_panel.style.display = "flex";
});
close_button.addEventListener("click", (e) => {
	menu_button.style.display = "inline";
	close_button.style.display = "none";
	menu_panel.style.display = "none";
});

//Default tab and panel activation
const defaultTabComponent = function (tab, panel) {
	const defaultTab = document.querySelector(tab).firstElementChild;
	const defaultTabPanel = document.getElementById(panel);

	defaultTab.classList.add(activeClassName);
	defaultTabPanel.classList.add(activeClassName);
};

document.addEventListener("click", (e) => {
	if (lastActiveNav && !lastActiveNav.contains(e.target)) {
		lastActiveNav.classList.remove(activeClassName);
		navsearch.style.borderStyle = "solid";
	}
});
const buildTabsComponent = function (tabs) {
	tabs.forEach((tab) => {
		tab.addEventListener("click", function (e) {
			e.stopImmediatePropagation();
			const targetParent = e.target.parentElement;
			const targetTabName = e.target.getAttribute("aria-controls");
			const targetTabPanel = document.getElementById(targetTabName);
			const parentPanel = targetTabPanel.parentElement;

			tabs.forEach((tab) => {
				const parentTab = tab.parentElement;
				const tabName = tab.getAttribute("aria-controls");
				const tabPanel = document.getElementById(tabName);
				const isActive = parentTab.classList.contains(activeClassName);
				console.log(tabName);

				if (parentTab === targetParent) {
					parentTab.classList.add(activeClassName);
					if (lastActivePanel) {
						lastActivePanel.classList.remove(activeClassName);
					}
					targetTabPanel.classList.add(activeClassName);
					lastActivePanel = targetTabPanel;
				} else {
					parentTab.classList.remove(activeClassName);
					if (tabPanel) {
						tabPanel.classList.remove(activeClassName);
					}
				}
			});
		});
	});
};

buildTabsComponent(productTabs);
buildTabsComponent(sectionProductTabs);
buildTabsComponent(sectionCustomerTabs);
buildTabsComponent(sectionCustomerTabButtons);

/* Product tab click events
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
*/
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
	console.log("hai");
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
//Header scroll
window.addEventListener("scroll", (e) => {
	const mini_header = document.getElementById("head-container-mini");
	// console.log(window.scrollY);
	// console.log(window.innerHeight);
	if (window.scrollY > 700) {
		// console.log("show");
		mini_header.classList.add("active");
	}
	if (window.scrollY < 700) {
		// console.log("hide");
		mini_header.classList.remove("active");
	}
});
