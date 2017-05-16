
<?php get_header(); ?>

<div id="post-view">

		<a href="<?php echo get_home_url() . '/voyages/'; ?>">
			<div class="vertical-button close-video">
	      <div class="hamburger-icon open">
	        <span class="line line-1"></span>
	        <span class="line line-2"></span>
	        <span class="line line-3"></span>
	        <span class="line line-4"></span>
	      </div>
	    </div>
	  </a>

    <div class="main-section">

		<?php if ( have_posts() ) : the_post(); ?>

		  <section class="post-view">

		  	<div class="hero-image">
		  			<?php
		  				$image = get_field('hero_image');
		  				$subtitle = get_field('post_subtitle');
		  			?>
		  			<picture>
						  <source srcset="<?php echo str_replace(".jpg","-300x105.jpg",$image ); ?>" media="(max-width: 440px)">
						  <source srcset="<?php echo str_replace(".jpg","-768x270.jpg",$image ); ?>" media="(max-width: 960px)">
						  <source srcset="<?php echo str_replace(".jpg","-1024x360.jpg",$image ); ?>" media="(max-width: 1280px)">
						  <source srcset="<?php echo $image; ?>">
						  <img src="<?php echo str_replace(".jpg","-1024x360.jpg",$image ); ?>" alt="<?php the_title(); ?>">
						</picture>
				</div>

				<div class="main-content">

					<div class="main-info">
			    	<h1 class="post-header highlight-medium-text"><?php the_title(); ?></h1>
			    	<div class="data-info">
			    		<?php the_category();?>
			    		<p class="time label-font"><?php the_time('j / m / Y'); ?></p>
			    		<p class="author label-font"><?php the_author() ?></p>
			    	</div>
			    	<p class="highlight-small-text roman"><?php echo $subtitle; ?></p>
			    </div>

					<div class="content">
			    	<?php the_content(); ?>
			    </div>

			  </div>

		  </section>

		  <section class="related-post">
		  	<div class="post-wrapper">


					<?php

						$category_obj = get_the_category();
						$category = $category_obj[0]->slug;

						$args = array(
				        'post_type' 		 => 'post',
				        'posts_per_page' => 3,
				        'category_name'  => $category,
				        'post__not_in' 	 => array( get_the_ID() ),
				    );

				    $query = new WP_Query( $args );

					?>

					<?php if( $query->have_posts() ) : while( $query->have_posts() ) : $query->the_post(); ?>

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

					<?php endwhile; endif; wp_reset_postdata(); ?>

				</div>
		  </section>

		<?php endif; ?>

		</div>

</div>

<?php get_footer(); ?>







