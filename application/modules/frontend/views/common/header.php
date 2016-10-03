<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">        
<!--        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="ico/apple-touch-icon-57-precomposed.png">
        <link rel="shortcut icon" href="assets/ico/favicon.png">
        
        -->
        <link rel="apple-touch-icon" sizes="57x57" href="<?php echo base_url('uploads/fevicon/apple-icon-57x57.png'); ?>">
<link rel="apple-touch-icon" sizes="60x60" href="<?php echo base_url('uploads/fevicon/apple-icon-60x60.png'); ?> ">
<link rel="apple-touch-icon" sizes="72x72" href="<?php echo base_url('uploads/fevicon/apple-icon-72x72.png'); ?> ">
<link rel="apple-touch-icon" sizes="76x76" href="<?php echo base_url('uploads/fevicon/apple-icon-76x76.png'); ?> ">
<link rel="apple-touch-icon" sizes="114x114" href="<?php echo base_url('uploads/fevicon/apple-icon-114x114.png'); ?>">
<link rel="apple-touch-icon" sizes="120x120" href="<?php echo base_url('uploads/fevicon/apple-icon-120x120.png'); ?>">
<link rel="apple-touch-icon" sizes="144x144" href="<?php echo base_url('uploads/fevicon/apple-icon-144x144.png'); ?>">
<link rel="apple-touch-icon" sizes="152x152" href="<?php echo base_url('uploads/fevicon/apple-icon-152x152.png'); ?>">
<link rel="apple-touch-icon" sizes="180x180" href="<?php echo  base_url('uploads/fevicon/apple-icon-180x180.png'); ?>">
<link rel="icon" type="image/png" sizes="192x192"  href="<?php echo   base_url('uploads/fevicon/android-icon-192x192.png'); ?>">
<link rel="icon" type="image/png" sizes="32x32" href="<?php echo   base_url('uploads/fevicon/favicon-32x32.png'); ?>">
<link rel="icon" type="image/png" sizes="96x96" href="<?php  echo  base_url('uploads/fevicon/favicon-96x96.png'); ?>">
<link rel="icon" type="image/png" sizes="16x16" href="<?php  echo  base_url('uploads/fevicon/favicon-16x16.png'); ?>">
<link rel="manifest" href="<?php echo   base_url('uploads/fevicon/manifest.json'); ?>">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">

        <link rel="canonical" href="<?php __e(base_url()); ?>"/>
        <title><?php __e((!empty($title) ? $title : (isset($settings->InstituteName) ? $settings->InstituteName : 'Powered by Tritiyo Limited'))); ?></title>
        <script type="text/javascript">var baseurl = "<?php echo base_url(); ?>"</script>
        <base href="<?php echo base_url(); ?>">
<meta property="og:site_name"           content="Regal Furniture"/>
    <meta property="og:locale"      	    content="en_US"/>
    <meta property="og:url"                 content="<?php if(!empty($product)) { ?> <?php echo base_url(); ?>product/<?php echo $product['id']; ?>-<?php echo url_title($product['name'], '-', TRUE); ?><?php } else { echo ''; } ?>" />
    <meta property="og:type"                content="article" />
    <meta property="og:title"               content="<?php __e((!empty($title) ? $title : (isset($settings->InstituteName) ? $settings->InstituteName : 'Powered by Tritiyo Limited'))); ?>" />
    <meta property="og:description"         content="<?php __e((!empty($fb_description) ? $fb_description : '')); ?>" />
    <meta property="og:image"               content="<?php if (!empty($product['images'])) { ?><?php foreach ($product['images'] as $image): ?><?php echo base_url($image['url']); ?><?php endforeach; ?><?php } else { ?><?php echo base_url('upload/default.jpg'); ?><?php } ?>" />


        <?php
        //*
        ?>
        <link href="<?php echo base_url(); ?>frontassets/assets/css/sh_style.min.css" rel="stylesheet">


        <?php
        /* / 
          ?>
          <link href="<?php echo base_url(); ?>frontassets/assets/css/bootstrap.css" rel="stylesheet">
          <link id="pagestyle" rel="stylesheet" type="text/css" href="<?php echo base_url(); ?>/frontassets/assets/css/skin-5.css">

          <link href="<?php echo base_url(); ?>frontassets/assets/css/style.css" rel="stylesheet">

          <link href="<?php echo base_url(); ?>frontassets/assets/css/blog.css" rel="stylesheet">
          <link href="<?php echo base_url(); ?>frontassets/assets/css/my_style.css?<?php echo date('l jS \of F Y h:i:s A'); ?>" rel="stylesheet">
          <link href="<?php echo base_url(); ?>frontassets/assets/css/responsive.css?<?php echo date('l jS \of F Y h:i:s A'); ?>" rel="stylesheet">
          <!-- styles needed by footable  -->
          <link href="<?php echo base_url(); ?>frontassets/assets/css/footable-0.1.css" rel="stylesheet" type="text/css"/>
          <link href="<?php echo base_url(); ?>frontassets/assets/css/footable.sortable-0.1.css" rel="stylesheet" type="text/css"/>
          <?php
          /* */
        ?>




        <!-- Just for debugging purposes. -->        
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs.php5shiv/3.7.0.php5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
        <![endif]-->
        <!-- include pace script for automatic web page progress bar  -->
        <script>
            paceOptions = {
                elements: true
            };
        </script>
        <script src="<?php echo base_url(); ?>/frontassets/assets/js/pace.min.js"></script>
    </head>
    <body>        
        <?php $this->load->view('common/modals'); ?>
        <?php $this->load->view('common/megamenu'); ?>

        <!--start processing massage -->
        <div id="processingmassage">
            <div class="windows8">
                <div class="wBall" id="wBall_1">
                    <div class="wInnerBall"></div>
                </div>
                <div class="wBall" id="wBall_2">
                    <div class="wInnerBall"></div>
                </div>
                <div class="wBall" id="wBall_3">
                    <div class="wInnerBall"></div>
                </div>
                <div class="wBall" id="wBall_4">
                    <div class="wInnerBall"></div>
                </div>
                <div class="wBall" id="wBall_5">
                    <div class="wInnerBall"></div>
                </div>
            </div>
        </div>    
        <!--end processing massage-->


        <div class="container">
            <div class="msgbox" style="position: fixed; width: 1140px;left: 0px;right: 0px; z-index:2000;top:0px;margin:auto;"></div>
            <?php if ($this->session->flashdata('message') !== NULL) { ?>
                <div class="alert alert-success">
                    <strong>
                        <?php echo $this->session->flashdata('message'); ?>
                    </strong>
                </div>
            <?php } ?>
            <?php if ($this->session->flashdata('validation_error') !== NULL): ?>
                <div class="alert alert-danger">
                    <?php echo $this->session->flashdata('validation_error'); ?>                            
                </div>
            <?php endif; ?> 
        </div>

        <div class="container main-container headerOffset">
            <?php if (!isset($is_home)): ?>
                <div class="row">
                    <div class="breadcrumbDiv col-lg-12">
                        <a href="<?php echo base_url('compare'); ?>" class="pull-right compare_link <?php echo empty($compare_products) ? 'hide' : ''; ?>" style="padding-top: 5px;padding-right: 10px;">Compare Product</a>
                        <ul class="breadcrumb">
                            <li><a href="<?php echo base_url(); ?>">Home</a></li>
                            <?php
                            if (isset($breadcrumb)) {
                                foreach ($breadcrumb as $item) {
                                    echo "<li class='active'><a href='{$item['url']}'>{$item['title']}</a></li>";
                                }
                            } else if (isset($special_single_page) && isset($single_post) && !empty($single_page->PageTitle)) {
                                ?>
                                <li class="active"> <?php echo $single_page->PageTitle; ?> </li>
                            <?php } elseif (isset($single_post) && !empty($single_post->Title)) { ?>
                                <li class="active"><?php echo $single_post->Title; ?></li>
                            <?php } elseif (!empty($title)) { ?>
                                <li class="active">   <?php echo $title; ?>  </li>
                                <?php } ?>
                        </ul>
                    </div>
                </div>
            <?php endif; ?>