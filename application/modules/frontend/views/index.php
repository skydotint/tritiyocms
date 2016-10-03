<div class="row">
    <?php //owndebugger($blocks); ?>
    <div class="banner">
        <?php $this->load->view('slider'); ?>
    </div>
    <!--/.banner style1-->



    <div class="container main-container">
        <div class="morePost row featuredPostContainer style2 globalPaddingTop">
            <div class="container">
                        
                  <?php 
                  $temp = $products;
                  $products = $stricky_products; ?>
                            <h3>Exclusive Products</h3>
                            <div class="row xsResponse">
                                <?php
                                foreach ($products as $product) {
                                    $product['images'] = $this->product_model->get_product_imgs($product['id']);
                                    $product['url'] = base_url('product/' . $product['id'] . '-' . url_title($product['name'], '-', TRUE));
                                    ?>
                                    <div class="item itemauto  col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                        <div class="product">
                                            <div class="imageHover">
                                                <a href="<?php echo $product['url']; ?>">
                                                    <?php if (!empty($product['images'])) { ?>
                                                        <img src="<?php echo base_url($product['images'][0]['url']); ?>" alt="img" class="img-responsive primaryImage">
                                                        <img src="<?php echo base_url(isset($product['images'][1]) ? $product['images'][1]['url'] : $product['images'][0]['url']); ?>" alt="img" class="img-responsive secondaryImage">

                                                    <?php } else { ?>
                                                        <img src="<?php echo base_url(); ?>uploads/default.png" alt="img" class="img-responsive primaryImage">
                                                        <img src="<?php echo base_url(); ?>uploads/default1.png" alt="img" class="img-responsive secondaryImage">
                                                    <?php } ?>
                                                </a>
                                                <?php if ($product['discount'] > 0) { ?>
                                                    <div class="promotion">
                                                        <span class="discount"><?php echo $product['discount']; ?> % OFF</span>
                                                    </div>

                                                <?php } ?>
                                            </div>
											<div class="description">
												<h4>
													<a href="<?php echo $product['url']; ?>">
														<?php __e((!empty($product['name']) ? $product['name'] : '')); ?><br>
														<?php __e($product['sku']); ?>
													</a>
												</h4>
											</div>
                                            <div class="price">
                                                <div class="row">
                                                    <div class="col-lg-7 col-md-6 col-sm-8 col-xs-8">
                                                        <?php if ($product['discount'] > 0) : ?>
                                                            <span style="color:#FA7163;font-weight: bold;">৳ <?php __e(makeCurrency(!empty($product['price']) ? makeCurrency($product['price'] - ($product['price'] * $product['discount']) / 100) : '')); ?></span><br/>
                                                            <del><span style="color:#D2CCDE;font-weight: bold;">৳ <?php __e(makeCurrency($product['price'])); ?></span></del><br/>

                                                        <?php else: ?>
                                                            <span style="color:#FA7163;font-weight: bold;">৳ <?php __e(makeCurrency($product['price'])); ?></span>
                                                        <?php endif; ?>
                                                    </div>
                                                    <div class="col-lg-5 col-md-6 col-sm-4 col-xs-4">
                                                        <a href="<?php echo base_url('add_to_cart?id=' . $product['id']); ?>" class="btn btn-primary add_to_cart" data-id="<?php echo $product['id']; ?>">
                                                            <span class="add2cart">
                                                                <i class="glyphicon glyphicon-shopping-cart"> </i> Buy 
                                                            </span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                <?php } ?>
                            </div>
                            <div class="clearfix" style="margin: 40px 0 0 0;"></div>
                
                
                
                
                <?php $products = $temp; ?>
                
                
                
                <h3>Latest Products</h3>
                <div class="row xsResponse">
                    <?php
                    foreach ($products as $product) {
                        $product['images'] = $this->product_model->get_product_imgs($product['id']);
                        $product['url'] = base_url('product/' . $product['id'] . '-' . url_title($product['name'], '-', TRUE));
                        ?>
                        <div class="item itemauto  col-lg-3 col-md-3 col-sm-6 col-xs-6">
                            <div class="product">
                                <div class="imageHover">
                                    <a href="<?php echo $product['url']; ?>">
                                        <?php if (!empty($product['images'])) { ?>
                                            <img src="<?php echo base_url($product['images'][0]['url']); ?>" alt="img" class="img-responsive primaryImage">
                                            <img src="<?php echo base_url(isset($product['images'][1]) ? $product['images'][1]['url'] : $product['images'][0]['url']); ?>" alt="img" class="img-responsive secondaryImage">

                                        <?php } else { ?>
                                            <img src="<?php echo base_url(); ?>uploads/default.png" alt="img" class="img-responsive primaryImage">
                                            <img src="<?php echo base_url(); ?>uploads/default1.png" alt="img" class="img-responsive secondaryImage">
                                        <?php } ?>
                                    </a>
                                    <?php if ($product['discount'] > 0) { ?>
                                        <div class="promotion">
                                            <span class="discount"><?php echo $product['discount']; ?> % OFF</span>
                                        </div>

                                    <?php } ?>
                                </div>
								<div class="description">
                                <h4>
                                    <a href="<?php echo $product['url']; ?>">
                                        <?php __e((!empty($product['name']) ? $product['name'] : '')); ?><br>
                                                    <?php __e($product['sku']); ?>
                                    </a>
                                </h4>
								</div>
                                <div class="price">
                                    <div class="row">
                                        <div class="col-lg-7 col-md-6 col-sm-8 col-xs-8">
                                            <?php if ($product['discount'] > 0) : ?>
                                                <span style="color:#FA7163;font-weight: bold;">৳ <?php __e(makeCurrency(!empty($product['price']) ? makeCurrency($product['price'] - ($product['price'] * $product['discount']) / 100) : '')); ?></span><br/>
                                                <del><span style="color:#D2CCDE;font-weight: bold;">৳ <?php __e(makeCurrency($product['price'])); ?></span></del><br/>

                                            <?php else: ?>
                                                <span style="color:#FA7163;font-weight: bold;">৳ <?php __e(makeCurrency($product['price'])); ?></span>
                                            <?php endif; ?>
                                        </div>
                                        <div class="col-lg-5 col-md-6 col-sm-4 col-xs-4">
                                            <a href="<?php echo base_url('add_to_cart?id=' . $product['id']); ?>" class="btn btn-primary add_to_cart" data-id="<?php echo $product['id']; ?>">
                                                <span class="add2cart">
                                                    <i class="glyphicon glyphicon-shopping-cart"> </i> Buy 
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php } ?>
                </div>
                <div class="clearfix" style="margin: 40px 0 0 0;"></div>

              




                            <div class="width100 section-block">
                                <h3>WHY CHOOSE OUR PRODUCTS</h3>

                                <div class="row">
                                    <div class="col-lg-12">
                                        <ul class="no-margin brand-carousel owl-carousel owl-theme">
                                            <?php __block($block16); ?>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix" style="margin: 40px 0 0 0;"></div>
                        </div>
                    </div>
                </div>
            </div>