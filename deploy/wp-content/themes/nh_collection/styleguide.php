<?php
/**
* Template Name: Styleguide
*/
?>

<?php get_header(); ?>

  <div id="nh-styleguide">
    <div class="content-wrapper">

      <h1>Styleguide</h1>

      <div class="wrapper">

        <h3>Typography</h3>
        <hr>

        <p class="highlight--text">highlight--text</p>
        <p class="highlight-medium-text">highlight-medium-text</p>
        <p class="navigation--header">navigation--header</p>
        <p class="body-font">body-font</p>
        <p class="body-font-bold">body-font-bold</p>
        <p class="body-font-italic">body-font-italic</p>
        <p class="caption">caption</p>
        <p class="button-label">button-label</p>
        <p class="label-font">label-font</p>

      </div>

      <div class="wrapper">
        <h3>Buttons</h3>
        <hr>

        <button class="block-button"><span class="button-label">block-button</span></button>
        <p class="label-font">block button</p>
        <button class="block-button play-button"><span class="icon icon-play_icon"></span></button>
        <p class="label-font">block-button play-button</p>
        <button class="block-button more-button" style="margin-right:50px"><span class="icon icon-cross_icon"></span></button>
        <button class="block-button more-button close"><span class="icon icon-cross_icon"></span></button>
        <p class="label-font">block-button more-button</p>
        <button class="block-button arrow-button look-right">
          <div class="arrow-wrapper">
            <span class="icon icon-arrow_icon"></span>
            <span class="icon icon-arrow_icon"></span>
          </div>
        </button>
        <button class="block-button arrow-button look-down">
          <div class="arrow-wrapper">
            <span class="icon icon-arrow_icon"></span>
            <span class="icon icon-arrow_icon"></span>
          </div>
        </button>
        <button class="block-button arrow-button look-left">
          <div class="arrow-wrapper">
            <span class="icon icon-arrow_icon"></span>
            <span class="icon icon-arrow_icon"></span>
          </div>
        </button>
        <button class="block-button arrow-button look-up">
          <div class="arrow-wrapper">
            <span class="icon icon-arrow_icon"></span>
            <span class="icon icon-arrow_icon"></span>
          </div>
        </button>
        <p class="label-font">block-button arrow-button</p>

        <button class="block-button drag-button">
          <div class="arrow-wrapper">
            <span class="icon icon-arrow_icon look-left"></span>
            <span class="icon icon-arrow_icon"></span>
          </div>
          <span class="button-label">block-button</span>
        </button>
        <p class="label-font">block-button drag-button</p>

        <button class="block-button tag-button"><span class="label-font">#People</span></button>
        <p class="label-font">block-button tag-button</p>

        <button id="hamburger-icon">
          <span class="line line-1"></span>
          <span class="line line-2"></span>
          <span class="line line-3"></span>
          <span class="line line-4"></span>
        </button>
        <p class="label-font">hamburguer-icon</p>

      </div>

      <div class="wrapper">
        <h3>Rollover</h3>
        <hr>

        <div class="wrapper">

          <!-- Container just for styleguide -->
          <div class="rollover-wrapper-styleguide">

            <div class="overlay-element medium">

              <div class="full-container">
                <div class="relative-wrapper">

                  <div class="img-wrapper">
                    <img src="http://placekitten.com/800/800" alt="example image">
                  </div>
                  <div class="header-wrapper white">
                    <p class="navigation--header"><span class="pre">The</span><br />feelling<br /> collectors</p>
                  </div>
                  <div class="overlay"></div>

                </div>
              </div>

            </div>

          </div>

        </div>

      </div>




    </div>
  </div>

<?php get_footer(); ?>