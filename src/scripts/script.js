function toggleDarkMode() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    // Keep existing dark mode toggle logic for other elements
    document.querySelector('.toggle-dark-mode').textContent = isDarkMode ? 'Dark Mode' : 'Light Mode';
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('main').classList.toggle('dark-mode');
    document.querySelectorAll('a').forEach(link => link.classList.toggle('dark-mode'));
    document.querySelectorAll('h2').forEach(h2 => h2.classList.toggle('dark-mode'));
    document.querySelectorAll('h3').forEach(h3 => h3.classList.toggle('dark-mode'));
    document.querySelectorAll('ul li').forEach(li => li.classList.toggle('dark-mode'));
    document.querySelectorAll('strong').forEach(el => el.classList.toggle('dark-mode'));
    const submitBtn = document.querySelector('.submit-btn');
    if (submitBtn) {
        submitBtn.classList.toggle('dark-mode');
    }
    const videoContainer = document.querySelector('.video-container');
    if (videoContainer) {
        videoContainer.classList.toggle('dark-mode');
    }
    // Apply dark mode to tab buttons and main switcher container
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.toggle('dark-mode-tabs'));
    const switcherContainer = document.querySelector('.content-switcher-carousel');
    if (switcherContainer) {
        switcherContainer.classList.toggle('dark-mode-container');
    }
}

// Removed initializeCarousel function as it's no longer needed for sliding

document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = Array.from(document.querySelectorAll('.tab-button')); // Convert to Array
    const contentPanels = document.querySelectorAll('.content-panel');
    const mainPrevArrow = document.querySelector('.main-prev-arrow');
    const mainNextArrow = document.querySelector('.main-next-arrow');

    function setActiveTab(targetTabDataset) {
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.tab === targetTabDataset) {
                btn.classList.add('active');
            }
        });
        contentPanels.forEach(panel => {
            panel.classList.remove('active');
            if (panel.id === targetTabDataset + '-panel') {
                panel.classList.add('active');
            }
        });
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            setActiveTab(this.dataset.tab);
        });
    });

    function navigateTabs(direction) {
        let currentActiveIndex = tabButtons.findIndex(btn => btn.classList.contains('active'));
        if (currentActiveIndex === -1) currentActiveIndex = 0; // Default to first if none active

        let nextIndex = currentActiveIndex + direction;

        if (nextIndex >= tabButtons.length) {
            nextIndex = 0; // Wrap to first
        } else if (nextIndex < 0) {
            nextIndex = tabButtons.length - 1; // Wrap to last
        }
        
        // Programmatically click the target tab button to use existing setActiveTab logic
        if (tabButtons[nextIndex]) {
            tabButtons[nextIndex].click(); 
        }
    }

    if (mainPrevArrow) {
        mainPrevArrow.addEventListener('click', function() {
            navigateTabs(-1); // Navigate to previous tab
        });
    }

    if (mainNextArrow) {
        mainNextArrow.addEventListener('click', function() {
            navigateTabs(1); // Navigate to next tab
        });
    }

    // Ensure the initially active tab (if any from HTML) is correctly displayed
    const initiallyActiveButton = tabButtons.find(btn => btn.classList.contains('active'));
    if (initiallyActiveButton) {
        setActiveTab(initiallyActiveButton.dataset.tab);
    } else if (tabButtons.length > 0) {
        // Default to the first tab if none are marked active in HTML
        setActiveTab(tabButtons[0].dataset.tab);
    }
});