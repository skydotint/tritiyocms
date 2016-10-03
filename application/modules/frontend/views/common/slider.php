<div class="container">
    <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-8 col-xs-12">
            <div class="slider-content">
                <ul id="pager2" class="container">
                </ul>
                <span class="prevControl sliderControl"><i class="fa fa-angle-left fa-3x "></i></span> 
                <span class="nextControl sliderControl"><i class="fa fa-angle-right fa-3x "></i></span>    
                <div class="slider slider-v1" data-cycle-swipe=true data-cycle-prev=".prevControl" data-cycle-next=".nextControl" data-cycle-loader="wait">       
                    <?php foreach ((array) $slider as $slide) { ?>
                        <div class="slider-item slider-item-img1">
                            <img src="<?php echo base_url(); ?>uploads/posts/<?php echo $slide->MediaFileName; ?>" class="img-responsive sliderImg" alt="img">
                        </div>
                    <?php } ?>                            
                </div>
                <!--/.slider slider-v1-->
            </div> 
        </div>
        <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
            <div class="slider_right img-responsive">
                <?php
                if (!empty($block17)) {
                    __block($block17);
                } else if (!empty($block18)) {
                    __block($block18);
                } else {
                    __block($block17);
                }
                ?>
            </div>
        </div>
    </div>
</div>


