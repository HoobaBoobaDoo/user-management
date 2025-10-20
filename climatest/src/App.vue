<script setup></script>

<template>
  <div class="website">
  <header class="container-fluid header d-flex w-100 nav-bg position-relative">
    <div class="nav-section d-flex align-items-center position-relative">
      <img src="/assets/img/climatest-icon.svg" alt="Climatest Logo" class="logo" />
      <h1 class="company-title">Climatest</h1>
    </div>
    <div class="nav-section nav-pages d-flex justify-content-space-between position-relative">
      <ul class="nav-links-list d-flex list-unstyled m-0 p-0">
        <li class="nav-item">
          <router-link
            to="/"
            class="nav-link"
            active-class="active"
            exact-active-class="active"
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
            exact-active-class="active"
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
      class="nav-section nav-user-info d-flex justify-content-space-between align-items-center py-0 my-0 position-relative"
    >
      <div class="col-8">
        <p>Ruben Jamart</p>
        <p class="lesser-text">Online</p>
      </div>
      <div class="col-4">
        <a href="#"><img src="./assets/img/pfp.jpg" alt="User Avatar" class="user-avatar" /></a>
      </div>
    </div>
  </header>
  <div class="main">
  <router-view />
  </div>
  </div>
</template>

<style scoped></style>
