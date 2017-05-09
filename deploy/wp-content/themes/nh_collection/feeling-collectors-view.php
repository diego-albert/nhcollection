<?php
/**
* Template Name: Feeling collectors
*/
?>

<?php get_header(); ?>

  <div id="feeling-collectors" class="fullscreen-js">

    <div class="main-section">

      <div class="video-player-wrapper" data-component="youtube-player-component">

        <div class="player-sleep"> <!-- Player Inactive -->

          <div class="video-bg">
            <picture>
              <source srcset="http://lorempixel.com/1880/810" media="(max-width: 1280px)">
              <source srcset="http://lorempixel.com/1880/810">
              <img src="http://lorempixel.com/1880/810" alt="the collectors">
            </picture>
          </div>

          <div class="player-info-content">
            <h1 class="highlight--text">The Feeling Collectors</h1>
            <p class="body-font">Expetenda tincidunt in sed, ex partem placerat sea, porro commodo ex eam.<br /> His putant aeterno interesset at usu ea mundi tincidunt,<br /> omnium virtute aliquando ius ex</p>
            <button class="block-button play-button"><span class="icon icon-play_icon"></span></button>
          </div>


        </div>

        <div class="player-active"> <!-- Player FullScreen -->
          <div id="player" data-yt-id="816fJW8oFvs"></div>

          <div class="vertical-button close-video">
            <div class="hamburger-icon open">
              <span class="line line-1"></span>
              <span class="line line-2"></span>
              <span class="line line-3"></span>
              <span class="line line-4"></span>
            </div>
          </div>

        </div>

      </div>
    </div>


    <div id="nh-olapic-feed" class="olapic-section">

      <!-- Here will be displayed olapic feed   -->

    </div>


  </div>

<?php get_footer(); ?>