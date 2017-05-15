
<?php get_header(); ?>

<?php
  $category = get_queried_object();
  $centerMode = ($category->count > 6) ? 'true' : 'false';
?>


<div id="voyages" class="fullscreen-js">

    <div class="main-section">

      <div class="section-navigation <?php echo $centerMode; ?>"
        data-component="section-slider-navigation"
        data-align-center="<?php echo $centerMode; ?>">

        <!-- Listado de posts -->
        <?php if ( have_posts() ) : ?>

        <ul class="slider-wrapper">

          <!-- FIRST COLUMN SECTION & CATEGORY NAMES -->
          <li class="feel-item blog-info">
            <div class="section-hero">
              <div class="container">
                <h1 class="navigation--header"><span class="pre lower">The</span> voyages</h1>
              </div>
            </div>
            <div class="section-tags">
              <div class="container">
                <p class="highlight-small-text">Tags</p>

                <!-- display categories -->
                <ul class="tag-list">
                <?php
                  $categories = get_categories( array(
                      'orderby' => 'name',
                      'order'   => 'ASC',
                      'exclude' => array(1)
                  ) );

                  $current_cat = get_the_category();
                  // print_r( $categories );
                  // echo $current_cat[0]  -> name;

                  foreach ( $categories as $category ) {

                    $className =  ( $current_cat[0]->name === $category->name ) ? 'active' : '';

                      printf( '<li class="tag-item"><a href="%1$s" class="block-button tag-button '.$className.'"><span class="label-font">#%2$s</span></a></li>',
                          esc_url( get_category_link( $category->term_id ) ),
                          esc_html( $category->name )
                      );
                  }
                ?>
                </ul>
                <!-- // display categories -->

              </div>
            </div>
          </li>

          <?php

            $i = 1;
            $count_posts = wp_count_posts()->publish;

            while ( have_posts() ) : the_post();

            // Check if the post is odd or even to open one column more or not
            // If is odd 1,3,5,7 we open new column
            if($i % 2 !== 0): ?>
              <!-- item  -->
              <li class="feel-item">

            <?php endif; ?>

              <div class="post-item">
                <a href="<?php the_permalink(); ?>">
                <div class="overlay-element">
                  <div class="relative-wrapper">
                    <div class="img-wrapper">
                      <?php the_post_thumbnail(); ?>
                    </div>
                    <div class="header-wrapper voyages-info">
                      <p class="label-font"><?php foreach((get_the_category()) as $category) { echo $category->cat_name . ' '; } ?></p>
                      <p class="highlight-medium-text post-title"><?php the_title(); ?></span></p>
                      <p class="label-font"><?php the_date('d / m / Y'); ?></span></p>
                    </div>
                  </div>
                </div>
                </a>
              </div>

          <?php
            // Check if the post is odd or even to close the column
            // If is even 0,2,4,6 or last post we close the column
            if($i % 2 == 0 || $i === $count_posts ): ?>

              </li>

          <?php endif; ?>


          <?php

          $i++;
          endwhile;

          ?>



        </ul>

        <?php endif; ?>


      </div>

    </div>

</div>


<?php get_footer(); ?>