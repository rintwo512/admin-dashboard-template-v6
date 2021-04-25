
"use strict";

initPageLoader();
$(document).ready(function () {
  
  switchLayouts();

  if (env === 'development') {
    
    changeDemoImages();
  }


  initBgImages();

  feather.replace();

  setActivelink();

  updateSidebarNaver();

  initMobileNavbar();

  initMobileNavbarHamburger();

  if ($('.main-sidebar').length) {
    initSidebar();

    if ($('[data-sidebar-open]').length) {
      openSidebar();
    }

    if (window.matchMedia('(min-width: 768px)').matches && window.matchMedia('(max-width: 1024px)').matches && window.matchMedia('(orientation: landscape)').matches) {
      closeSidebarPanel();
      $('.main-sidebar, .sidebar-brand').removeClass('is-bordered');
    }

    $(window).on('resize', function () {
      if (window.matchMedia('(min-width: 768px)').matches && window.matchMedia('(max-width: 1024px)').matches && window.matchMedia('(orientation: landscape)').matches) {
        closeSidebarPanel();
        $('.main-sidebar, .sidebar-brand').removeClass('is-bordered');
      }
    });
  }


  if ($('.view-wrapper').hasClass('is-webapp')) {
    initWebapp();
  }


  initStuckHeader();

  initNavbarDropdowns();

  initDropdowns();

  initMobileDropdowns();

  adjustDropdowns();

  initChosenSelects();

  initTabs();
  initTabbedWidgets();

  initHSelect();

  initComboBox();

  initImageComboBox();

  initUserComboBox();

  initStackedComboBox();

  initBigComboBox();

  initAccordion();

  initAnimatedModals();

  initHModals();

  initPanels(); 

  initSmallTextTip();

  initTextTip();

  initMediumTextTip();

  initAnimatedCheckboxes();

  initCustomTextFilter();

  initTextFilter();

  initAdvancedFlexTable();

  initSingleAccordion();

  initCollapse();

  initSearch();

  initDarkMode();
});