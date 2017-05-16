
<?php get_header(); ?>

<div id="post-view">

    <div class="main-section">

		<?php if ( have_posts() ) : the_post(); ?>

		  <section class="post-view">

		  	<div class="hero-image">
		  			<?php $image = get_field('hero_image'); ?>
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
			    	<p class="highlight-small-text roman">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur fugiat quo voluptas nulla pariatur.</p>
			    	<time datatime="<?php the_time('Y-m-j'); ?>"><?php the_time('j F, Y'); ?></time>
			    </div>

			    <?php the_content(); ?>
			    <address>Por <?php the_author_posts_link() ?></address>

			  </div>

		  </section>

		<?php endif; ?>

		</div>

</div>

<?php get_footer(); ?>







