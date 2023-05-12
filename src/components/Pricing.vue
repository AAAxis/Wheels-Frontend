<template>
    <div>
      <Navbar />
      <router-view />
    </div>
    <div class="container px-4 py-5" id="hanging-icons">
    <h2 class="pb-2 border-bottom">Hanging icons</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <img width="50" height="50" src="https://www.iconpacks.net/icons/2/free-store-icon-2017-thumb.png">
        </div>
        <div>
          <h3 class="fs-2">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <img width="50" height="50" src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Settings-icon.png">
        </div>
        <div>
          <h3 class="fs-2">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
      <div class="col d-flex align-items-start">
        <div class="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            <img width="50" height="50" src="https://png.pngtree.com/png-clipart/20201225/ourlarge/pngtree-ios-camera-icon-hand-drawn-png-image_2609845.jpg">
             </div>
        <div>
          <h3 class="fs-2">Featured title</h3>
          <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
          <a href="#" class="btn btn-primary">
            Primary button
          </a>
        </div>
      </div>
    </div>
  </div>
    </template>

<script>

import Navbar from "./Navbar.vue";

export default {
  name: "Pricing",
  components: {
    Navbar,
  },
};

  </script>