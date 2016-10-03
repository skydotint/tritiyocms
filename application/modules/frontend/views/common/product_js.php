		
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js">
        </script>
        <!-- jquery-migrate only for product details -->
        <script src="http://code.jquery.com/jquery-migrate-1.2.1.js"></script>

        <script src="assets/bootstrap/js/bootstrap.min.js"></script>
        <!-- include jqueryCycle plugin -->
        <script src="assets/js/jquery.cycle2.min.js"></script>
        <!-- include easing plugin -->
        <script src="assets/js/jquery.easing.1.3.js"></script>

        <!-- include  parallax plugin -->
        <script type="text/javascript" src="assets/js/jquery.parallax-1.1.js"></script>

        <!-- optionally include helper plugins -->
        <script type="text/javascript" src="assets/js/helper-plugins/jquery.mousewheel.min.js"></script>

        <!-- include mCustomScrollbar plugin //Custom Scrollbar  -->

        <script type="text/javascript" src="assets/js/jquery.mCustomScrollbar.js"></script>

        <!-- include icheck plugin // customized checkboxes and radio buttons   -->
        <script type="text/javascript" src="assets/plugins/icheck-1.x/icheck.min.js"></script>

        <!-- include grid.js // for equal Div height  -->
        <script src="assets/js/grids.js"></script>

        <!-- include carousel slider plugin  -->
        <script src="assets/js/owl.carousel.min.js"></script>

        <!-- include smoothproducts // product zoom plugin  -->
        <script type="text/javascript" src="assets/js/smoothproducts.min.js"></script>

        <!-- jQuery select2 // custom select   -->
        <script src="http://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.min.js"></script>

        <!-- include touchspin.js // touch friendly input spinner component   -->
        <script src="assets/js/bootstrap.touchspin.js"></script>

        <!-- include custom script for site  -->
        <script src="assets/js/script.js"></script>


        <script src="assets/plugins/rating/bootstrap-rating.min.js"></script>
        <script>
            $(function () {

                $('.rating-tooltip-manual').rating({
                    extendSymbol: function () {
                        var title;
                        $(this).tooltip({
                            container: 'body',
                            placement: 'bottom',
                            trigger: 'manual',
                            title: function () {
                                return title;
                            }
                        });
                        $(this).on('rating.rateenter', function (e, rate) {
                            title = rate;
                            $(this).tooltip('show');
                        })
                                .on('rating.rateleave', function () {
                                    $(this).tooltip('hide');
                                });
                    }
                });

            });
        </script>