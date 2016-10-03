<?php if($this->ion_auth->logged_in()) { ?>
            </div>
        </div>
    </div>
</div>

<div id="custom_notifications" class="custom-notifications dsp_none">
    <ul class="list-unstyled notifications clearfix" data-tabbed_notifications="notif-group">
    </ul>
    <div class="clearfix"></div>
    <div id="notif-group" class="tabbed_notifications"></div>
</div>
<?php } else { ?>
</div>
<?php } ?>
<?php echo put_footer(); ?>
<script src="<?php echo base_url(); ?>footprints/js/cle/jquery.cleditor.min.js" type="text/javascript"></script>
<script src="<?php echo base_url(); ?>js/chartjs/chart.min.js"></script>
<script src="<?php echo base_url(); ?>js/progressbar/bootstrap-progressbar.min.js"></script>
<script src="<?php echo base_url(); ?>js/nicescroll/jquery.nicescroll.min.js"></script>
<script src="<?php echo base_url(); ?>js/icheck/icheck.min.js"></script>
<!-- daterangepicker -->
<script type="text/javascript" src="<?php echo base_url(); ?>js/moment.min.js"></script>
<script type="text/javascript" src="<?php echo base_url(); ?>js/datepicker/daterangepicker.js"></script>

<script src="<?php echo base_url(); ?>js/custom.js"></script>
<!--[if lte IE 8]>
<script type="text/javascript" src="<?php echo base_url(); ?>js/excanvas.min.js"></script>
<![endif]-->
<script type="text/javascript">
    CKEDITOR.replace( 'wysiwyg' );
    CKEDITOR.replace( 'wysiwyg1' );
    CKEDITOR.replace( 'wysiwyg2' );
    CKEDITOR.replace( 'wysiwyg3' );
    CKEDITOR.replace( 'wysiwyg4' );
    CKEDITOR.replace( 'wysiwyg5' );    
</script>
</body>
</html>