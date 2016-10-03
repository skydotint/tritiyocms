</div>
<footer>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">                    
                    <?php __block($block2); ?>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                    <?php __block($block13); ?>
                </div>
                <div style="clear:both" class="hide visible-xs"></div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                    <?php __block($block15); ?>                    
                </div>
                <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                    <?php __block($block3); ?>
                </div>
                <div style="clear:both" class="hide visible-xs"></div>
                <div class="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                    <?php __block($block14); ?>
                </div>
            </div>
            <!--/.row-->
        </div>
        <!--/.container-->
    </div>
    <!--/.footer-->

    <div class="footer-bottom">
        <div class="container">
            <p class="pull-left">
                <?php __block($block4); ?>				
            </p>

            <div class="pull-right paymentMethodImg">
                <img 
                    height="30" 
                    class="pull-right"
                    src="<?php echo base_url(); ?>frontassets/images/site/payment/master_card.png" 
                    alt="img">
                <img
                    height="30" 
                    class="pull-right" 
                    src="<?php echo base_url(); ?>frontassets/images/site/payment/visa_card.png" 
                    alt="img">
                <img height="30"
                     class="pull-right"
                     src="<?php echo base_url(); ?>frontassets/images/site/payment/paypal.png"
                     alt="img">
                <img 
                    height="30" 
                    class="pull-right" 
                    src="<?php echo base_url(); ?>frontassets/images/site/payment/american_express_card.png" 
                    alt="img">
                <img
                    height="30" 
                    class="pull-right" 
                    src="<?php echo base_url(); ?>frontassets/images/site/payment/discover_network_card.png" 
                    alt="img">
                <img 
                    height="30" 
                    class="pull-right" 
                    src="<?php echo base_url(); ?>frontassets/images/site/payment/google_wallet.png" 
                    alt="img">

            </div>
        </div>
    </div>
    <!--/.footer-bottom-->
</footer>


<!--<div class="modal fade hide" id="modalAds" role="dialog">
    <div class="modal-dialog  modal-bg-1">
        <div class="modal-body-content">
            <a class="close" data-dismiss="modal">×</a>
            <div class="modal-body">
                <div class="col-lg-6 col-sm-8 col-xs-8">
                    <h3>enter your <br>email to receive</h3>
                    <p class="discountLg">10% OFF </p>
                    <p>We invite you to subscribe to our newsletter and receive 10% discount.</p>

                    <div class="clearfx">
                        <form id="newsletter" class="newsletter">
                            <input type="text" id="subscribe" name="s" placeholder="Enter email">
                            <button class="subscribe-btn">Subscribe</button>
                        </form>
                    </div>
                    <p><a href="category.php" class="link shoplink"> SHOP NOW <i class="fa fa-caret-right"> </i> </a></p>
                </div>
            </div>
        </div>
    </div>
</div>-->

<?php
//*
?>
<script src="<?php echo base_url() ?>frontassets/assets/js/all.main.js"></script>

<?php
/*/ 
 ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
<script src="http://code.jquery.com/jquery-migrate-1.2.1.js"></script>
<script src="<?php echo base_url(); ?>frontassets/assets/bootstrap/js/bootstrap.min.js"></script>
<script src="<?php echo base_url(); ?>frontassets/assets/js/jquery.cycle2.min.js"></script>
<script src="<?php //echo base_url(); ?>frontassets/assets/js/jquery.easing.1.3.js"></script>
<script src="<?php echo base_url(); ?>frontassets/assets/js/helper-plugins/jquery.mousewheel.min.js" type="text/javascript"></script>
<script src="<?php echo base_url(); ?>frontassets/assets/js/jquery.mCustomScrollbar.js" type="text/javascript"></script>

<script src="<?php echo base_url(); ?>frontassets/assets/js/grids.js"></script>
<!--
<script src="<?php //echo base_url(); ?>frontassets/assets/js/jquery.parallax-1.1.js" type="text/javascript"></script>
<script src="<?php //echo base_url(); ?>frontassets/assets/plugins/icheck-1.x/icheck.min.js" type="text/javascript"></script>
-->

<script src="<?php echo base_url(); ?>frontassets/assets/js/owl.carousel.min.js"></script>
<script src="<?php echo base_url(); ?>frontassets/assets/js/smoothproducts.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.min.js"></script>
<!--<script src="<?php //echo base_url(); ?>frontassets/assets/js/bootstrap.touchspin.js"></script>-->
<script src="<?php echo base_url(); ?>frontassets/assets/js/home.js"></script>
<script src="<?php echo base_url(); ?>footprints/js/bootstrapValidator.js"></script>
<script src="<?php echo base_url(); ?>frontassets/assets/js/script.js"></script>
<script src="<?php echo base_url(); ?>frontassets/assets/js/_ecommerce.js"></script>
<script>
    // this script required for subscribe modal
    $(window).load(function () {
        // full load
        $('#modalAds').modal('show');
        $('#modalAds').removeClass('hide');
        
        $('li.megamenu-content ul').addClass('col-lg-2  col-sm-2 col-md-2  unstyled noMarginLeft');
        $('li.megamenu-content ul li span').css('display', 'block');
        $('li.megamenu-content ul li span').css('margin-top', '25px');
    });
    
</script>
<?php
/* */
?>
</body>
</htmL>