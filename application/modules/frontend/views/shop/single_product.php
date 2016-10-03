<div class="row transitionfx">
    <!-- left column -->
    <div class="col-lg-6 col-md-6 col-sm-6">
        <!-- product Image and Zoom -->
        <div class="main-image sp-wrap col-lg-12 no-padding">
            <?php if (!empty($product['images'])) { ?>
                <?php foreach ($product['images'] as $image): ?>
                    <a href="<?php echo base_url($image['url']); ?>"><img src="<?php echo base_url($image['url']); ?>" class="img-responsive" alt="img"></a>
                <?php endforeach; ?>
            <?php } else { ?>                    
                <a href="<?php echo base_url('upload/default.jpg'); ?>"><img src="<?php echo base_url('upload/default.jpg'); ?>" class="img-responsive" alt="img"></a>
            <?php } ?>
        </div>
    </div>
    <!--/ left column end -->

    <!-- right column -->
    <div class="col-lg-6 col-md-6 col-sm-5">
            
        <h1 class="product-title"> <?php echo $product['name']; ?></h1>
        <h3>Item Name: <?php echo $product['sku']; ?>    </h3>
        <hr> 
        <?php if ($product['discount'] > 0): ?>
            <del> <h2 class="product_price">Regular Price : Tk.<?php echo $product['price']; ?>/- </h2> </del>
            <h2 class="product_price">Offer Price : Tk. <?php echo $product['price'] - ($product['price'] * $product['discount'] ) / 100; ?>/-</h2> 
           
        <?php else: ?>
            <h2 class="product_price">Regular Price : Tk. <?php echo $product['price']; ?>/-</h2> 
        <?php endif; ?>
        <ul class="list-unstyled">
            <?php if (!empty($product['material'])) { ?> <li>Material      : <?php echo $product['material']; ?></li> <?php } ?>
            <!-- <?php if (!empty($product['name'])) { ?>  <li>Item Name     : <?php echo $product['name']; ?></li> <?php } ?> -->
            <?php if (!empty($product['code'])) { ?> <li>Product Code  :  <?php echo $product['code']; ?></li> <?php } ?>
            <?php if (!empty($product['color'])) { ?>  <li>Color         : <?php echo $product['color']; ?></li> <?php } ?>
            <?php if (!empty($product['dimension'])) { ?>  <li>Dimension     : <?php echo $product['dimension']; ?></li> <?php } ?>

            <?php if (!empty($product['delivery_area'])) { ?> <li>Delivery Area :  <?php echo $product['delivery_area']; ?></li> <?php } ?>
            <?php if (!empty($product['delivery_charge'])) { ?>  <li>Delivery Charge : <?php echo $product['delivery_charge']; ?></li> <?php } ?>
            <?php if (!empty($product['delivery_time'])) { ?> <li>Delivery Times :  <?php echo $product['delivery_time']; ?></li> <?php } ?>
        </ul>

        <br/>
        <!--        <div class="rating">
                    <p>
                        <span><i class="fa fa-star"></i></span> 
                        <span><i class="fa fa-star"></i></span> 
                        <span><i class="fa fa-star"></i></span> 
                        <span><i class="fa fa-star"></i></span> 
                        <span><i class="fa fa-star-o "></i></span> 
                        <span class="ratingInfo">
                        <span> / </span>
                        <a data-target="#modal-review" data-toggle="modal"> Write a review</a> 
                        </span>
                    </p>
                </div>-->

        <div class="productFilter productFilterLook2">
            <div class="row">
                <div class="col-lg-6 col-sm-6 col-xs-6">
                    <div class="filterBox">
                        <select class="form-control qty" name="qty">
                            <option value="1" selected>Quantity</option>
                            <option value="1" >1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                    </div>
                </div>
                <!--
                <div class="col-lg-6 col-sm-6 col-xs-6">
                    <div class="filterBox">
                        <select class="form-control">
                            <option value="strawberries" selected>Size</option>
                            <option value="mango">XL</option>
                            <option value="bananas">XXL</option>
                            <option value="watermelon">M</option>
                            <option value="apples">L</option>
                            <option value="apples">S</option>
                        </select>
                    </div>
                </div>
                -->
            </div>
        </div>
        <!-- productFilter -->

        <div class="cart-actions">
            <div class="addto row">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6"><a class="btn btn-default add_to_cart " data-id="<?php echo $product['id']; ?>">Add to cart</a>
                </div>                
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-6"><a data-id="<?php echo $product['id']; ?>" data-productid="<?php echo $product['id']; ?>" class="add-to-compare btn btn-default">Compare</a>
                </div>
            </div>
            <div style="clear:both"></div>
            <h3 class="incaps"><i class="fa fa fa-check-circle-o color-in"></i> In stock</h3>
            <h3 style="display:none" class="incaps"><i class="fa fa-minus-circle color-out"></i> Out of stock</h3>

            <h3 class="incaps"><i class="glyphicon glyphicon-lock"></i> Secure online ordering</h3>
        </div>
        <!--/.cart-actions-->
        <div class="clear"></div>
        <!--/.product-share-->

    </div>
    <!--/ right column end -->

</div>
<!--/.row-->
<div class="row" style="margin-top: 70px;">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div class="product-tab w100 clearfix">
            <ul class="nav nav-tabs">
                <li class="active"><a href="#Description" data-toggle="tab">Description</a></li>
                <div class="socialIcon pull-right" style="margin-right: -10px;">
                    <strong>SHARE</strong> &nbsp;&nbsp;&nbsp;
                    <?php $encoded_url = urlencode(base_url('product/' . $product['id'] . '-' . url_title($product['name'], '-', true))); ?>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $encoded_url; ?>"><i class="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/home?status=<?php echo $encoded_url ?>"> <i class="fa fa-twitter"></i></a>
                    <!--<a href="https://plus.google.com/share?url=<?php //echo $encoded_url       ?>"> <i class="fa fa-google-plus"></i></a>-->
                    <!--<a href="https://pinterest.com/pin/create/button/?<?php //echo "url={$encoded_url}&media=".base_url($product['product_image'])."&description=".  urlencode($product['name'] . '-'. $product['description']);       ?>>"><i class="fa fa-pinterest"></i></a>-->
                </div>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="Description">
                    <?php if (!empty($product['description'])) { ?>
                        <p>Product details : <br/> <?php echo $product['description']; ?></p>
                    <?php } ?>
                </div>
            </div>
            <!-- /.tab content -->
        </div>
        <!--/.product-tab-->
    </div>
</div>

<?php if (!empty($similar_products)): ?>
    <div class="recommended">
        <h1> YOU MAY ALSO LIKE </h1>

        <div id="SimilarProductSlider">
            <?php
            foreach ($similar_products as $semilar_product):
                if ($semilar_product['id'] == $product['id']) {
                    continue;
                }
                ?>
                <div class="item">
                    <div class="product">
                        <a href="<?php echo base_url('product/' . $semilar_product['id'] . '-' . url_title($semilar_product['name'], '-', TRUE)); ?>" class="product-image"><img src="<?php echo base_url($semilar_product['product_image']); ?>" alt="img"> </a>

                        <div class="description">


                            <h4><a href="<?php echo base_url('product/' . $semilar_product['id'] . '-' . url_title($semilar_product['name'], '-', TRUE)); ?>"><?php echo $semilar_product['name']; ?><br><?php __e($product['sku']); ?></a></h4>
                            <div class="price">
                                <?php if ($semilar_product['discount'] > 0) : ?>
                                    <span style="color:#FA7163;font-weight: bold;">৳ <?php __e(makeCurrency(!empty($semilar_product['price']) ? makeCurrency($semilar_product['price'] - ($semilar_product['price'] * $semilar_product['discount']) / 100) : '')); ?></span><br/>
                                    <del><span style="color:#D2CCDE;font-weight: bold;">৳ <?php __e(makeCurrency($semilar_product['price'])); ?></span></del><br/>

                                <?php else: ?>
                                    <span style="color:#FA7163;font-weight: bold;">৳ <?php __e(makeCurrency($semilar_product['price'])); ?></span>
                                <?php endif; ?>

                            </div>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
            <!--/.item-->
        </div>
        <!--/.recommended-->

    </div>
<?php endif; ?>

