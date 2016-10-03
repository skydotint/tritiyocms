<div class="row">
    <div class="col-lg-9 col-md-9 col-sm-7 col-xs-6 col-xxs-12 text-center-xs">
        <h1 class="section-title-inner"><span><i
                    class="glyphicon glyphicon-shopping-cart"></i> Shopping cart </span></h1>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-5 rightSidebar col-xs-6 col-xxs-12 text-center-xs">
        <h4 class="caps"><a href="<?php echo base_url(); ?>"><i class="fa fa-chevron-left"></i> Back to shopping </a></h4>
    </div>
</div>
<!--/.row-->
<form action="update_cart" method="post">
    <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-7">
            <div class="row userInfo">
                <div class="col-xs-12 col-sm-12">
                    <div class="cartContent w100">
                        <table class="cartTable bigCartTable table-responsive" style="width:100%">
                            <thead>

                                <tr class="CartProduct cartTableHeader">
                                    <td style="width:15%"> Product</td>
                                    <td style="width:40%">Details</td>
                                    <td style="width:10%" class="delete">&nbsp;</td>
                                    <td style="width:10%">QNT</td>

                                    <td style="width:15%">Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                <?php
                                foreach ($cart['items'] as $item):
                                    $product_url = base_url('product/' . $item['id'] . '-' . url_title($item['name'], '-', TRUE));
                                    ?>
                                    <tr class="CartProduct">
                                        <td class="CartProductThumb">
                                            <div><a href="<?php echo $product_url; ?>"><img src="<?php echo base_url((isset($item['img']) ? $item['img'] : 'uploads/default.jpg')); ?>" alt="img"></a>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="CartDescription">
                                                <h4><a href="product-details.php"><?php echo $item['name']; ?></a></h4>
                                               <!-- <span class="size">12 x 1.5 L</span>-->

                                                <div class="price"><span>TK. <?php echo makeCurrency($item['price']); ?> /=</span></div>
                                            </div>
                                        </td>
                                        <td class="delete">
                                            <a title="Delete" class="remove_from_cart" data-id='<?php echo $item['id']; ?>' data-reload="true">
                                                <i class="glyphicon glyphicon-trash fa-2x"></i>
                                            </a>
                                        </td>
                                        <td>
                                            <input type="number" name="qty_of_<?php echo $item['rowid']; ?>" value="<?php echo $item['qty']; ?>" style="width:40px;">
                                            <input type="hidden"    name="rowid[]" value="<?php echo $item['rowid']; ?>" />
                                        </td>

                                        <td class="price">TK. <?php echo makeCurrency($item['subtotal']); ?>/=</td>
                                    </tr>
                                <?php endforeach; ?>                          
                            </tbody>
                        </table>
                    </div>
                    <!--cartContent-->

                    <div class="cartFooter w100">
                        <div class="box-footer">
                            <div class="pull-left"><a href="<?php echo base_url(); ?>" class="btn btn-default"> <i
                                        class="fa fa-arrow-left"></i> &nbsp; Continue shopping </a></div>
                            <div class="pull-right">
                                <a href="<?php echo base_url('cart'); ?>" class="btn btn-default" >Refresh</a>
                                <button type="submit" class="btn btn-default"><i class="fa fa-undo"></i> &nbsp; Update
                                    cart
                                </button>

                            </div>
                        </div>
                    </div>
                    <!--/ cartFooter -->

                </div>
            </div>
            <!--/row end-->

        </div>
        <div class="col-lg-3 col-md-3 col-sm-5 rightSidebar">
            <div class="contentBox">
                <div class="w100 costDetails">
                    <div class="table-block" id="order-detail-content">

                        <div class="w100 cartMiniTable">
                            <table id="cart-summary" class="std table">
                                <tbody>
                                    <tr>
                                        <td>Total products</td>
                                        <td class="price">TK. <span class="carttotal"><?php echo currency($cart['total']); ?></span>/=</td>
                                    </tr>
                                    <tr style="">
                                        <td>Shipping</td>
                                        <td class="price"><span class="success">Free shipping!</span></td>
                                    </tr>
                                    <tr class="cart-total-price ">
                                        <td>Total.</td>
                                        <td class="price">TK. <span class="carttotal"><?php echo currency($cart['total']); ?></span>/=</td>
                                    </tr>
                                    <?php /* ?>
                                      <tr>
                                      <td>Total tax</td>
                                      <td class="price" id="total-tax">$0.00</td>
                                      </tr>
                                      <tr>
                                      <td> Total</td>
                                      <td class=" site-color" id="total-price">$216.51</td>
                                      </tr>

                                      <tr>
                                      <td colspan="2">
                                      <div class="input-append couponForm">
                                      <input class="col-lg-8" id="appendedInputButton" type="text"
                                      placeholder="Coupon code">
                                      <button class="col-lg-4 btn btn-success" type="button">Apply!</button>
                                      </div>
                                      </td>
                                      </tr>
                                      <?php
                                      /* */
                                    ?>

                                </tbody>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                        <a class="btn btn-primary btn-lg btn-block "
                           title="checkout" href="<?php echo base_url('checkout'); ?>"
                           style="margin-bottom:20px"> Proceed to
                            checkout &nbsp; <i class="fa fa-arrow-right"></i> </a>
                    </div>
                </div>
            </div>
            <!-- End popular -->

        </div>
        <!--/rightSidebar-->

    </div>
</form>
<!--/row-->

<div style="clear:both"></div>
