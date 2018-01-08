<template>
	<div>
		<section id="portfolio" class="bg-light-gray">
	        <div class="container">
	            <div class="row">
	                <div class="col-lg-12 text-center">
	                    <h2 class="section-heading">Portfolio</h2>
	                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
	                </div>
	            </div>
	            <div class="row">
	                <div class="col-md-4 col-sm-6 portfolio-item">
	                    <a href="#portfolioModal1" class="portfolio-link" data-toggle="modal">
	                        <div class="portfolio-hover">
	                            <div class="portfolio-hover-content">
	                                <i class="fa fa-plus fa-3x"></i>
	                            </div>
	                        </div>
	                        <img src="/static/images/portfolio/thumbnails/1.jpg" class="img-responsive" alt="">
	                    </a>
	                    <div class="portfolio-caption">
	                        <h4>Round Icons</h4>
	                        <p class="text-muted">Graphic Design</p>
	                    </div>
	                </div>
	                <div class="col-md-4 col-sm-6 portfolio-item">
	                    <a href="#portfolioModal2" class="portfolio-link" data-toggle="modal">
	                        <div class="portfolio-hover">
	                            <div class="portfolio-hover-content">
	                                <i class="fa fa-plus fa-3x"></i>
	                            </div>
	                        </div>
	                        <img src="/static/images/portfolio/thumbnails/2.jpg" class="img-responsive" alt="">
	                    </a>
	                    <div class="portfolio-caption">
	                        <h4>Startup Framework</h4>
	                        <p class="text-muted">Website Design</p>
	                    </div>
	                </div>
	                <div class="col-md-4 col-sm-6 portfolio-item">
	                    <a href="#portfolioModal3" class="portfolio-link" data-toggle="modal">
	                        <div class="portfolio-hover">
	                            <div class="portfolio-hover-content">
	                                <i class="fa fa-plus fa-3x"></i>
	                            </div>
	                        </div>
	                        <img src="/static/images/portfolio/thumbnails/3.jpg" class="img-responsive" alt="">
	                    </a>
	                    <div class="portfolio-caption">
	                        <h4>Treehouse</h4>
	                        <p class="text-muted">Website Design</p>
	                    </div>
	                </div>
	                <div class="col-md-4 col-sm-6 portfolio-item">
	                    <a href="#portfolioModal4" class="portfolio-link" data-toggle="modal">
	                        <div class="portfolio-hover">
	                            <div class="portfolio-hover-content">
	                                <i class="fa fa-plus fa-3x"></i>
	                            </div>
	                        </div>
	                        <img src="/static/images/portfolio/thumbnails/4.jpg" class="img-responsive" alt="">
	                    </a>
	                    <div class="portfolio-caption">
	                        <h4>Golden</h4>
	                        <p class="text-muted">Website Design</p>
	                    </div>
	                </div>
	                <div class="col-md-4 col-sm-6 portfolio-item">
	                    <a href="#portfolioModal5" class="portfolio-link" data-toggle="modal">
	                        <div class="portfolio-hover">
	                            <div class="portfolio-hover-content">
	                                <i class="fa fa-plus fa-3x"></i>
	                            </div>
	                        </div>
	                        <img src="/static/images/portfolio/thumbnails/5.jpg" class="img-responsive" alt="">
	                    </a>
	                    <div class="portfolio-caption">
	                        <h4>Escape</h4>
	                        <p class="text-muted">Website Design</p>
	                    </div>
	                </div>
	                <div class="col-md-4 col-sm-6 portfolio-item">
	                    <a href="#portfolioModal6" class="portfolio-link" data-toggle="modal">
	                        <div class="portfolio-hover">
	                            <div class="portfolio-hover-content">
	                                <i class="fa fa-plus fa-3x"></i>
	                            </div>
	                        </div>
	                        <img src="/static/images/portfolio/thumbnails/6.jpg" class="img-responsive" alt="">
	                    </a>
	                    <div class="portfolio-caption">
	                        <h4>Dreams</h4>
	                        <p class="text-muted">Website Design</p>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </section>

		<div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
	        <div class="modal-dialog">
	            <div class="modal-content">
	                <div class="close-modal" data-dismiss="modal">
	                    <div class="lr">
	                        <div class="rl">
	                        </div>
	                    </div>
	                </div>
	                <div class="container">
	                    <div class="row">
	                        <div class="col-lg-8 col-lg-offset-2">
	                            <div class="modal-body">
	                                <!-- Project Details Go Here -->
	                                <h2>Project Name</h2>
	                                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
	                                <img class="img-responsive img-centered" src="/static/images/portfolio/fullsize/1.jpg" alt="">
	                                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
	                                <p>
	                                    <strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1500 icon set <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p>
	                                <ul class="list-inline">
	                                    <li>Date: July 2014</li>
	                                    <li>Client: Round Icons</li>
	                                    <li>Category: Graphic Design</li>
	                                </ul>
	                                <button type="button" class="btn btn-primary" data-dismiss="modal"><i class="fa fa-times"></i> Close Project</button>
	                            </div>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		name: 'portfolio'
	}
</script>