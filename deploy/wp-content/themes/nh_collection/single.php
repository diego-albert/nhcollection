
<?php get_header(); ?>

<div id="post-view">

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

		  <section>

				<?php
//for use in the loop, list 5 post titles related to first tag on current post
$tags = wp_get_post_tags($post->ID);

if ($tags) {

	echo 'Related Posts';
	$first_tag = $tags[0]->term_id;

	$args=array(
		'tag__in' => array($first_tag),
		'post__not_in' => array($post->ID),
		'posts_per_page'=>5,
		'caller_get_posts'=>1
	);

$my_query = new WP_Query($args);
if( $my_query->have_posts() ) {

while ($my_query->have_posts()) : $my_query->the_post(); ?>

	<a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title_attribute(); ?>"><?php the_title(); ?></a>

<?php
endwhile;
}
wp_reset_query();
}
?>


		  </section>

		<?php endif; ?>

		</div>

</div>

<?php get_footer(); ?>







