<?php
/**
* Template Name: Gastro Hotels Experience
*/
?>

<?php get_header(); ?>


<div id="exp-gastro" class="fullscreen-js" data-component="exp-gastro-component">

    <div class="main-section">

      <div class="intro-experience">

        <div class="intro-wrapper">

          <div class="info-container">
            <span class="experience-icon icon-gastro_hotel margin-bottom"></span>
            <h1 class="experience-header highlight--text margin-bottom">Kokotxas de merluza en salsa verde, <br />por el chef Martín Aristondo</h1>
            <p class="experience-description body-font margin-bottom">Te presentamos al detalle, uno de los platos <br />más singulares de la cocina vasca.</p>
            <button class="start-experience block-button play-button"><span class="icon icon-play_icon"></span></button>
          </div>

        </div>

      </div>

      <div class="kitchen-navigation" data-component="panoramic-navigation-component">

        <div class="navigation-wrapper">

          <img class="panoramic" src="<?php echo get_template_directory_uri() . '/assets/images/experiences/gastro/panoramic-example.jpg';?>" alt="">

          <div class="photo-item item1"><button class="block-button more-button" style="margin-right:50px"><span class="icon icon-cross_icon"></span></button></div>
          <div class="photo-item item2"><button class="block-button more-button" style="margin-right:50px"><span class="icon icon-cross_icon"></span></button></div>
          <div class="photo-item item3"><button class="block-button more-button" style="margin-right:50px"><span class="icon icon-cross_icon"></span></button></div>
        </div>

      </div>

    </div>

</div>


<?php get_footer(); ?>