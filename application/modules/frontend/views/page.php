    <?php if (isset($special_single_page)) { ?>
        <?php //owndebugger($special_single_page); ?>
        <h2 class="heading_title"><?php __e((!empty($special_single_page->PageTitle) ? $special_single_page->PageTitle : '')); ?></h2>
        <?php echo $special_single_page; ?>
    <?php } else { ?>

        <h2 class="heading_title"><?php __e((!empty($single_page->PageTitle) ? $single_page->PageTitle : '')); ?></h2>
        <div class="row career">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <?php __e((!empty($single_page->Description) ? $single_page->Description : '')); ?>
            </div>
        </div>
    <?php } ?>
