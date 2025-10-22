<script setup>
import { ref, onMounted, watch } from 'vue';

const isDarkMode = ref(false);
const showThemeDropdown = ref(false);
const isMobileMenuOpen = ref(false);

// Load theme from localStorage on mount
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkMode.value = true;
  } else if (savedTheme === 'light') {
    isDarkMode.value = false;
  }
});

// Watch for theme changes and save to localStorage
watch(isDarkMode, (newValue) => {
  localStorage.setItem('theme', newValue ? 'dark' : 'light');
});

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
};

const toggleDropdown = () => {
  showThemeDropdown.value = !showThemeDropdown.value;
};

const closeDropdown = () => {
  showThemeDropdown.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <div class="website" :class="{ dark: isDarkMode }">
  <header class="container-fluid header d-flex w-100 nav-bg position-relative">
    <div class="nav-section d-flex align-items-center position-relative header-left">
      <img src="/assets/img/climatest-icon.svg" alt="Climatest Logo" class="logo" />
      <h1 class="company-title">Climatest</h1>
    </div>
    
    <!-- Hamburger Button -->
    <button class="hamburger-btn" @click="toggleMobileMenu" aria-label="Toggle menu">
      <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    
    <!-- Mobile Menu Overlay -->
    <div v-if="isMobileMenuOpen" class="mobile-overlay" @click="closeMobileMenu"></div>
    
    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
      <div class="mobile-menu-header">
        <img src="/assets/img/climatest-icon.svg" alt="Climatest Logo" class="logo" />
        <h2 class="mobile-title">Climatest</h2>
      </div>
      
      <ul class="mobile-nav-links list-unstyled">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            active-class="active"
            exact-active-class="active"
            @click="closeMobileMenu"
          >
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <mask
                id="mask0_mobile_home"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="-1"
                width="21"
                height="21"
              >
                <rect x="0.622925" y="-0.613525" width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_mobile_home)">
                <path
                  d="M5.62292 15.2197H8.41147V10.2678H12.8344V15.2197H15.6229V7.71966L10.6229 3.95361L5.62292 7.71966V15.2197ZM4.37292 16.4697V7.09466L10.6229 2.39111L16.8729 7.09466V16.4697H11.5844V11.5178H9.66147V16.4697H4.37292Z"
                />
              </g>
            </svg>
            <span>Home</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/archive"
            class="nav-link"
            active-class="active"
            @click="closeMobileMenu"
          >
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <mask
                id="mask0_mobile_archive"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="21"
                height="20"
              >
                <rect x="0.5" width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_mobile_archive)">
                <path
                  d="M4.66667 17.5L3 7.5H18L16.3333 17.5H4.66667ZM8.83333 12.5H12.1667C12.4028 12.5 12.6007 12.4201 12.7604 12.2604C12.9201 12.1007 13 11.9028 13 11.6667C13 11.4306 12.9201 11.2326 12.7604 11.0729C12.6007 10.9132 12.4028 10.8333 12.1667 10.8333H8.83333C8.59722 10.8333 8.39931 10.9132 8.23958 11.0729C8.07986 11.2326 8 11.4306 8 11.6667C8 11.9028 8.07986 12.1007 8.23958 12.2604C8.39931 12.4201 8.59722 12.5 8.83333 12.5ZM5.5 6.66667C5.26389 6.66667 5.06597 6.58681 4.90625 6.42708C4.74653 6.26736 4.66667 6.06944 4.66667 5.83333C4.66667 5.59722 4.74653 5.39931 4.90625 5.23958C5.06597 5.07986 5.26389 5 5.5 5H15.5C15.7361 5 15.934 5.07986 16.0938 5.23958C16.2535 5.39931 16.3333 5.59722 16.3333 5.83333C16.3333 6.06944 16.2535 6.26736 16.0938 6.42708C15.934 6.58681 15.7361 6.66667 15.5 6.66667H5.5ZM7.16667 4.16667C6.93056 4.16667 6.73264 4.08681 6.57292 3.92708C6.41319 3.76736 6.33333 3.56944 6.33333 3.33333C6.33333 3.09722 6.41319 2.89931 6.57292 2.73958C6.73264 2.57986 6.93056 2.5 7.16667 2.5H13.8333C14.0694 2.5 14.2674 2.57986 14.4271 2.73958C14.5868 2.89931 14.6667 3.09722 14.6667 3.33333C14.6667 3.56944 14.5868 3.76736 14.4271 3.92708C14.2674 4.08681 14.0694 4.16667 13.8333 4.16667H7.16667Z"
                />
              </g>
            </svg>
            <span>Archive</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/messages"
            class="nav-link"
            active-class="active"
            exact-active-class="active"
            @click="closeMobileMenu"
          >
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <mask
                id="mask0_mobile_messages"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="21"
                height="20"
              >
                <rect x="0.5" width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_mobile_messages)">
                <path
                  d="M4.08977 16.25C3.6688 16.25 3.31248 16.1042 3.02081 15.8125C2.72915 15.5208 2.58331 15.1645 2.58331 14.7435V5.25646C2.58331 4.83549 2.72915 4.47917 3.02081 4.1875C3.31248 3.89583 3.6688 3.75 4.08977 3.75H16.9102C17.3312 3.75 17.6875 3.89583 17.9791 4.1875C18.2708 4.47917 18.4166 4.83549 18.4166 5.25646V14.7435C18.4166 15.1645 18.2708 15.5208 17.9791 15.8125C17.6875 16.1042 17.3312 16.25 16.9102 16.25H4.08977ZM10.5 10.4648L3.83331 6.20187V14.7435C3.83331 14.8184 3.85734 14.8799 3.9054 14.9279C3.95345 14.976 4.01491 15 4.08977 15H16.9102C16.9851 15 17.0465 14.976 17.0946 14.9279C17.1426 14.8799 17.1666 14.8184 17.1666 14.7435V6.20187L10.5 10.4648ZM10.5 9.16667L17.0385 5H3.96144L10.5 9.16667ZM3.83331 6.20187V5V14.7435C3.83331 14.8184 3.85734 14.8799 3.9054 14.9279C3.95345 14.976 4.01491 15 4.08977 15H16.9102C16.9851 15 17.0465 14.976 17.0946 14.9279C17.1426 14.8799 17.1666 14.8184 17.1666 14.7435V6.20187L10.5 10.4648ZM10.5 9.16667L17.0385 5H3.96144L10.5 9.16667ZM3.83331 6.20187V5V14.7435C3.83331 14.8184 3.85734 14.8799 3.9054 14.9279C3.95345 14.976 4.01491 15 4.08977 15H3.83331V6.20187Z"
                />
              </g>
            </svg>
            <span>Messages</span>
          </router-link>
        </li>
      </ul>
      
      <div class="mobile-user-section">
        <div class="mobile-user-info">
          <img src="./assets/img/pfp.jpg" alt="User Avatar" class="user-avatar-mobile" />
          <div class="user-details">
            <p class="user-name">Ruben Jamart</p>
            <p class="user-status lesser-text">Online</p>
          </div>
        </div>
        <button class="mobile-theme-toggle" @click="toggleTheme">
          <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 15C11.3261 15 12.4783 14.5272 13.4565 13.5815C14.4348 12.6359 14.9239 11.5054 14.9239 10.1902C14.9239 8.875 14.4348 7.74456 13.4565 6.79891C12.4783 5.85326 11.3261 5.38043 10 5.38043C8.67391 5.38043 7.52174 5.85326 6.54348 6.79891C5.56522 7.74456 5.07609 8.875 5.07609 10.1902C5.07609 11.5054 5.56522 12.6359 6.54348 13.5815C7.52174 14.5272 8.67391 15 10 15ZM10 16.25C8.35326 16.25 6.94565 15.6685 5.77717 14.5054C4.60869 13.3424 4.02445 11.9402 4.02445 10.2989C4.02445 8.65761 4.60869 7.25543 5.77717 6.09239C6.94565 4.92935 8.35326 4.34783 10 4.34783C11.6467 4.34783 13.0543 4.92935 14.2228 6.09239C15.3913 7.25543 15.9755 8.65761 15.9755 10.2989C15.9755 11.9402 15.3913 13.3424 14.2228 14.5054C13.0543 15.6685 11.6467 16.25 10 16.25ZM3.33333 10.8152H0.625V9.56522H3.33333V10.8152ZM19.375 10.8152H16.6667V9.56522H19.375V10.8152ZM9.375 3.33333V0.625H10.625V3.33333H9.375ZM9.375 19.375V16.6667H10.625V19.375H9.375ZM4.89167 5.69167L2.95833 3.75833L3.84167 2.875L5.775 4.80833L4.89167 5.69167ZM16.1583 17.125L14.225 15.1917L15.1083 14.3083L17.0417 16.2417L16.1583 17.125ZM14.225 4.80833L16.1583 2.875L17.0417 3.75833L15.1083 5.69167L14.225 4.80833ZM2.95833 16.2417L4.89167 14.3083L5.775 15.1917L3.84167 17.125L2.95833 16.2417Z" fill="currentColor"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 18.3333C8.73611 18.3333 7.54861 18.0903 6.4375 17.6042C5.32639 17.1181 4.36806 16.4583 3.5625 15.625C2.75694 14.7917 2.11806 13.8056 1.64583 12.6667C1.17361 11.5278 0.9375 10.3056 0.9375 9C0.9375 7.75 1.17361 6.59028 1.64583 5.52083C2.11806 4.45139 2.75694 3.52083 3.5625 2.72917C4.36806 1.9375 5.34722 1.30556 6.5 0.833333C7.65278 0.361111 8.86806 0.125 10.1458 0.125C10.6458 0.125 11.125 0.145833 11.5833 0.1875C12.0417 0.229167 12.5 0.291667 12.9583 0.375C12.5139 0.791667 12.1458 1.27778 11.8542 1.83333C11.5625 2.38889 11.4167 3 11.4167 3.66667C11.4167 4.875 11.8472 5.88889 12.7083 6.70833C13.5694 7.52778 14.6389 7.9375 15.9167 7.9375C16.5556 7.9375 17.1528 7.79861 17.7083 7.52083C18.2639 7.24306 18.7361 6.90278 19.125 6.5C19.2083 6.95833 19.2708 7.41667 19.3125 7.875C19.3542 8.33333 19.375 8.79167 19.375 9.25C19.375 10.5972 19.125 11.8542 18.625 13.0208C18.125 14.1875 17.4514 15.2014 16.6042 16.0625C15.7569 16.9236 14.7639 17.6042 13.625 18.1042C12.4861 18.6042 11.2778 18.3333 10 18.3333ZM10 17.0833C10.8889 17.0833 11.7292 16.9167 12.5208 16.5833C13.3125 16.25 14.0208 15.7917 14.6458 15.2083C15.2708 14.625 15.7708 13.9375 16.1458 13.1458C16.5208 12.3542 16.7361 11.5 16.7917 10.5833C16.4583 10.6944 16.1319 10.7708 15.8125 10.8125C15.4931 10.8542 15.1806 10.875 14.875 10.875C13.1667 10.875 11.7153 10.2639 10.5208 9.04167C9.32639 7.81944 8.72917 6.33333 8.72917 4.58333C8.72917 4.27778 8.74306 3.98611 8.77083 3.70833C8.79861 3.43056 8.86111 3.11111 8.95833 2.75C8.04167 3.08333 7.20139 3.5625 6.4375 4.1875C5.67361 4.8125 5.01389 5.54167 4.45833 6.375C3.90278 7.20833 3.47222 8.11111 3.16667 9.08333C2.86111 10.0556 2.70833 11.0556 2.70833 12.0833C2.70833 14.1389 3.42361 15.8819 4.85417 17.3125C6.28472 18.7431 7.97222 19.4583 10 19.4583Z" fill="currentColor"/>
          </svg>
          <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
        </button>
      </div>
    </div>
    
    <!-- Desktop Navigation -->
    <div class="nav-section nav-pages d-flex justify-content-space-between position-relative desktop-nav d-md-none d-block" :class="{ 'mobile-menu-open': isMobileMenuOpen }">

      <ul class="nav-links-list d-flex list-unstyled m-0 p-0">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            active-class="active"
            exact-active-class="active"
            @click="closeMobileMenu"
          >
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <mask
                id="mask0_14_838"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="-1"
                width="21"
                height="21"
              >
                <rect x="0.622925" y="-0.613525" width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_14_838)">
                <path
                  d="M5.62292 15.2197H8.41147V10.2678H12.8344V15.2197H15.6229V7.71966L10.6229 3.95361L5.62292 7.71966V15.2197ZM4.37292 16.4697V7.09466L10.6229 2.39111L16.8729 7.09466V16.4697H11.5844V11.5178H9.66147V16.4697H4.37292Z"
                />
              </g>
            </svg>
            <span>Home</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/archive"
            class="nav-link"
            active-class="active"
            @click="closeMobileMenu"
          >
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <mask
                id="mask0_14_842"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="21"
                height="20"
              >
                <rect x="0.5" width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_14_842)">
                <path
                  d="M4.66667 17.5L3 7.5H18L16.3333 17.5H4.66667ZM8.83333 12.5H12.1667C12.4028 12.5 12.6007 12.4201 12.7604 12.2604C12.9201 12.1007 13 11.9028 13 11.6667C13 11.4306 12.9201 11.2326 12.7604 11.0729C12.6007 10.9132 12.4028 10.8333 12.1667 10.8333H8.83333C8.59722 10.8333 8.39931 10.9132 8.23958 11.0729C8.07986 11.2326 8 11.4306 8 11.6667C8 11.9028 8.07986 12.1007 8.23958 12.2604C8.39931 12.4201 8.59722 12.5 8.83333 12.5ZM5.5 6.66667C5.26389 6.66667 5.06597 6.58681 4.90625 6.42708C4.74653 6.26736 4.66667 6.06944 4.66667 5.83333C4.66667 5.59722 4.74653 5.39931 4.90625 5.23958C5.06597 5.07986 5.26389 5 5.5 5H15.5C15.7361 5 15.934 5.07986 16.0938 5.23958C16.2535 5.39931 16.3333 5.59722 16.3333 5.83333C16.3333 6.06944 16.2535 6.26736 16.0938 6.42708C15.934 6.58681 15.7361 6.66667 15.5 6.66667H5.5ZM7.16667 4.16667C6.93056 4.16667 6.73264 4.08681 6.57292 3.92708C6.41319 3.76736 6.33333 3.56944 6.33333 3.33333C6.33333 3.09722 6.41319 2.89931 6.57292 2.73958C6.73264 2.57986 6.93056 2.5 7.16667 2.5H13.8333C14.0694 2.5 14.2674 2.57986 14.4271 2.73958C14.5868 2.89931 14.6667 3.09722 14.6667 3.33333C14.6667 3.56944 14.5868 3.76736 14.4271 3.92708C14.2674 4.08681 14.0694 4.16667 13.8333 4.16667H7.16667Z"
                />
              </g>
            </svg>
            <span>Archive</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/messages"
            class="nav-link"
            active-class="active"
            exact-active-class="active"
            @click="closeMobileMenu"
          >
            <svg
              class="nav-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <mask
                id="mask0_14_846"
                style="mask-type:alpha"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="21"
                height="20"
              >
                <rect x="0.5" width="20" height="20" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_14_846)">
                <path
                  d="M4.08977 16.25C3.6688 16.25 3.31248 16.1042 3.02081 15.8125C2.72915 15.5208 2.58331 15.1645 2.58331 14.7435V5.25646C2.58331 4.83549 2.72915 4.47917 3.02081 4.1875C3.31248 3.89583 3.6688 3.75 4.08977 3.75H16.9102C17.3312 3.75 17.6875 3.89583 17.9791 4.1875C18.2708 4.47917 18.4166 4.83549 18.4166 5.25646V14.7435C18.4166 15.1645 18.2708 15.5208 17.9791 15.8125C17.6875 16.1042 17.3312 16.25 16.9102 16.25H4.08977ZM10.5 10.4648L3.83331 6.20187V14.7435C3.83331 14.8184 3.85734 14.8799 3.9054 14.9279C3.95345 14.976 4.01491 15 4.08977 15H16.9102C16.9851 15 17.0465 14.976 17.0946 14.9279C17.1426 14.8799 17.1666 14.8184 17.1666 14.7435V6.20187L10.5 10.4648ZM10.5 9.16667L17.0385 5H3.96144L10.5 9.16667ZM3.83331 6.20187V5V14.7435C3.83331 14.8184 3.85734 14.8799 3.9054 14.9279C3.95345 14.976 4.01491 15 4.08977 15H16.9102C16.9851 15 17.0465 14.976 17.0946 14.9279C17.1426 14.8799 17.1666 14.8184 17.1666 14.7435V6.20187L10.5 10.4648ZM10.5 9.16667L17.0385 5H3.96144L10.5 9.16667ZM3.83331 6.20187V5V14.7435C3.83331 14.8184 3.85734 14.8799 3.9054 14.9279C3.95345 14.976 4.01491 15 4.08977 15H3.83331V6.20187Z"
                />
              </g>
            </svg>
            <span>Messages</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div
      class="nav-section nav-user-info d-flex justify-content-space-between align-items-center py-0 my-0 position-relative desktop-nav"
    >
      <div class="col-8">
        <p>Ruben Jamart</p>
        <p class="lesser-text">Online</p>
      </div>
      <div class="col-4 position-relative">
        <a href="#" @click.prevent="toggleDropdown">
          <img src="./assets/img/pfp.jpg" alt="User Avatar" class="user-avatar" />
        </a>
        <div v-if="showThemeDropdown" class="theme-dropdown" @click.stop>
          <div class="theme-option" @click="toggleTheme">
            <svg v-if="!isDarkMode" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 15C11.3261 15 12.4783 14.5272 13.4565 13.5815C14.4348 12.6359 14.9239 11.5054 14.9239 10.1902C14.9239 8.875 14.4348 7.74456 13.4565 6.79891C12.4783 5.85326 11.3261 5.38043 10 5.38043C8.67391 5.38043 7.52174 5.85326 6.54348 6.79891C5.56522 7.74456 5.07609 8.875 5.07609 10.1902C5.07609 11.5054 5.56522 12.6359 6.54348 13.5815C7.52174 14.5272 8.67391 15 10 15ZM10 16.25C8.35326 16.25 6.94565 15.6685 5.77717 14.5054C4.60869 13.3424 4.02445 11.9402 4.02445 10.2989C4.02445 8.65761 4.60869 7.25543 5.77717 6.09239C6.94565 4.92935 8.35326 4.34783 10 4.34783C11.6467 4.34783 13.0543 4.92935 14.2228 6.09239C15.3913 7.25543 15.9755 8.65761 15.9755 10.2989C15.9755 11.9402 15.3913 13.3424 14.2228 14.5054C13.0543 15.6685 11.6467 16.25 10 16.25ZM3.33333 10.8152H0.625V9.56522H3.33333V10.8152ZM19.375 10.8152H16.6667V9.56522H19.375V10.8152ZM9.375 3.33333V0.625H10.625V3.33333H9.375ZM9.375 19.375V16.6667H10.625V19.375H9.375ZM4.89167 5.69167L2.95833 3.75833L3.84167 2.875L5.775 4.80833L4.89167 5.69167ZM16.1583 17.125L14.225 15.1917L15.1083 14.3083L17.0417 16.2417L16.1583 17.125ZM14.225 4.80833L16.1583 2.875L17.0417 3.75833L15.1083 5.69167L14.225 4.80833ZM2.95833 16.2417L4.89167 14.3083L5.775 15.1917L3.84167 17.125L2.95833 16.2417Z" fill="currentColor"/>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 18.3333C8.73611 18.3333 7.54861 18.0903 6.4375 17.6042C5.32639 17.1181 4.36806 16.4583 3.5625 15.625C2.75694 14.7917 2.11806 13.8056 1.64583 12.6667C1.17361 11.5278 0.9375 10.3056 0.9375 9C0.9375 7.75 1.17361 6.59028 1.64583 5.52083C2.11806 4.45139 2.75694 3.52083 3.5625 2.72917C4.36806 1.9375 5.34722 1.30556 6.5 0.833333C7.65278 0.361111 8.86806 0.125 10.1458 0.125C10.6458 0.125 11.125 0.145833 11.5833 0.1875C12.0417 0.229167 12.5 0.291667 12.9583 0.375C12.5139 0.791667 12.1458 1.27778 11.8542 1.83333C11.5625 2.38889 11.4167 3 11.4167 3.66667C11.4167 4.875 11.8472 5.88889 12.7083 6.70833C13.5694 7.52778 14.6389 7.9375 15.9167 7.9375C16.5556 7.9375 17.1528 7.79861 17.7083 7.52083C18.2639 7.24306 18.7361 6.90278 19.125 6.5C19.2083 6.95833 19.2708 7.41667 19.3125 7.875C19.3542 8.33333 19.375 8.79167 19.375 9.25C19.375 10.5972 19.125 11.8542 18.625 13.0208C18.125 14.1875 17.4514 15.2014 16.6042 16.0625C15.7569 16.9236 14.7639 17.6042 13.625 18.1042C12.4861 18.6042 11.2778 18.3333 10 18.3333ZM10 17.0833C10.8889 17.0833 11.7292 16.9167 12.5208 16.5833C13.3125 16.25 14.0208 15.7917 14.6458 15.2083C15.2708 14.625 15.7708 13.9375 16.1458 13.1458C16.5208 12.3542 16.7361 11.5 16.7917 10.5833C16.4583 10.6944 16.1319 10.7708 15.8125 10.8125C15.4931 10.8542 15.1806 10.875 14.875 10.875C13.1667 10.875 11.7153 10.2639 10.5208 9.04167C9.32639 7.81944 8.72917 6.33333 8.72917 4.58333C8.72917 4.27778 8.74306 3.98611 8.77083 3.70833C8.79861 3.43056 8.86111 3.11111 8.95833 2.75C8.04167 3.08333 7.20139 3.5625 6.4375 4.1875C5.67361 4.8125 5.01389 5.54167 4.45833 6.375C3.90278 7.20833 3.47222 8.11111 3.16667 9.08333C2.86111 10.0556 2.70833 11.0556 2.70833 12.0833C2.70833 14.1389 3.42361 15.8819 4.85417 17.3125C6.28472 18.7431 7.97222 19.4583 10 19.4583Z" fill="currentColor"/>
            </svg>
            <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="nav-border position-relative">
    <div class="nav-active-indicator"></div>
  </div>
  <div class="main">
  <router-view />
  </div>
  </div>
</template>

<style scoped>

</style>
