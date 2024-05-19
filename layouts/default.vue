<template>
  <div class="container">
    <GlobalAppHeader />
    <div class="slot-container">
      <slot />
    </div>
    <GlobalAppFooter />
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: stretch; /* Ensures children stretch to fill the width */
  height: 100%;
}

.slot-container {
  width: 85%;
  margin: 10px auto; /* Top and bottom margin of 10px, auto horizontally centers */
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Ensure that AppHeader and AppFooter are 100% width */
.container > :first-child,
.container > :last-child {
  width: 100%;
}
</style>
