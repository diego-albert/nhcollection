<?php
	$home_url = get_home_url();
?>
<!-- Archivo de cabecera global de Wordpress -->
<?php get_header(); ?>

<div id="homepage" class="">

	<div class="homepage-mainmenu fullscreen-js">

	<div class="homemenu-wrapper">

		<div class="col">

			<!-- item-1 -->
			<a href="<?php echo $home_url . '/feeling-collectors/'; ?>" class="home-anchor">
				<span class="section-item">
					<div class="overlay-element">
						<div class="relative-wrapper">
							<div class="img-wrapper">
								<picture>
								  <source srcset="<?php echo get_template_directory_uri() . '/assets/images/homepage/collectors-S.jpg'?>" media="(max-width: 1280px)">
								  <source srcset="<?php echo get_template_directory_uri() . '/assets/images/homepage/collectors.jpg'?>">
								  <img src="<?php echo get_template_directory_uri() . '/assets/images/homepage/collectors.jpg'?>" alt="the collectors">
								</picture>
							</div>
							<div class="header-wrapper white">
								<p class="navigation--header"><span class="pre">The</span>feeling<br /> collectors</p>
							</div>
							<div class="overlay-ribond"></div>
						</div>
					</div>
				</span>
			</a>
			<!-- item-2 -->
			<a href="<?php echo $home_url . '/experiences/'; ?>" class="home-anchor">
				<span class="section-item">
					<div class="overlay-element">
						<div class="relative-wrapper">
							<div class="img-wrapper">
								<picture>
								  <source srcset="<?php echo get_template_directory_uri() . '/assets/images/homepage/experiences-S.jpg'?>" media="(max-width: 1280px)">
								  <source srcset="<?php echo get_template_directory_uri() . '/assets/images/homepage/experiences.jpg'?>">
								  <img src="<?php echo get_template_directory_uri() . '/assets/images/homepage/experiences.jpg'?>" alt="the experiences">
								</picture>
							</div>
							<div class="header-wrapper white">
								<p class="navigation--header"><span class="pre lower">The</span>experiences</p>
							</div>
							<div class="overlay-ribond"></div>
						</div>
					</div>
				</span>
			</a>

		</div>

		<div class="col">

			<!-- item-1 -->
			<div class="section-item">
				<div class="brand-wrapper">
					<div class="nhbrand-wrapper">
						<div class="content">
							<img src="<?php echo get_template_directory_uri() . '/assets/images/homepage/nhcollection_logo.png'?>" alt="NH Collection">
						</div>
					</div>
					<h1 class="main--header">feel <br /><span>the extraordinary</span></h1>
				</div>
			</div>
			<!-- item-2 -->
			<a href="<?php echo $home_url . '/feels/'; ?>" class="home-anchor">
				<span class="section-item">
					<div class="overlay-element no-ribond">
						<div class="relative-wrapper">
							<div class="img-wrapper">
								<picture>
								  <source srcset="<?php echo get_template_directory_uri() . '/assets/images/homepage/feels-S.jpg'?>" media="(max-width: 1280px)">
								  <source srcset="<?php echo get_template_directory_uri() . '/assets/images/homepage/feels.jpg'?>">
								  <img src="<?php echo get_template_directory_uri() . '/assets/images/homepage/feels.jpg'?>" alt="the feels">
								</picture>
							</div>
							<div class="header-wrapper white">
								<p class="navigation--header"><span class="pre">The</span>feels</p>
							</div>
							<div class="overlay-ribond"></div>
						</div>
					</div>
				</span>
			</a>

		</div>

		<div class="col">

			<!-- item-1 -->
			<a href="<?php echo $home_url . '/dictionary/'; ?>" class="home-anchor">
				<span class="section-item">
					<div class="overlay-element inverted">
						<div class="relative-wrapper">
							<div class="img-wrapper">
								<picture>
								  <source srcset="<?php echo get_template_directory_uri() . '/assets/images/homepage/dictionary-S.jpg'?>" media="(max-width: 1280px)">
								  <source srcset="<?php echo get_template_directory_uri() . '/assets/images/homepage/dictionary.jpg'?>">
								  <img src="<?php echo get_template_directory_uri() . '/assets/images/homepage/dictionary.jpg'?>" alt="the dictionary">
								</picture>
							</div>
							<div class="header-wrapper white">
								<p class="navigation--header"><span class="pre">The</span>dictionary</p>
							</div>
							<div class="overlay-ribond"></div>
						</div>
					</div>
				</span>
			</a>
			<!-- item-2 -->
			<a href="<?php echo $home_url . '/voyages/'; ?>" class="home-anchor">
				<span class="section-item">
					<div class="overlay-element inverted">
						<div class="relative-wrapper">
							<div class="img-wrapper">
								<picture>
								  <source srcset="<?php echo get_template_directory_uri() . '/assets/images/homepage/voyages-S.jpg'?>" media="(max-width: 1280px)">
								  <source srcset="<?php echo get_template_directory_uri() . '/assets/images/homepage/voyages.jpg'?>">
								  <img src="<?php echo get_template_directory_uri() . '/assets/images/homepage/voyages.jpg'?>" alt="the voyages">
								</picture>
							</div>
							<div class="header-wrapper white">
								<p class="navigation--header"><span class="pre lower">The</span>voyages</p>
							</div>
							<div class="overlay-ribond"></div>
						</div>
					</div>
				</span>
			</a>

		</div>

	</div>

	</div>

</div>




<!-- Archivo de pié global de Wordpress -->
<?php get_footer(); ?>