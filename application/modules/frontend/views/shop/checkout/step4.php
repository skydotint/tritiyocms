
<div class="row">
    <div class="col-lg-9 col-md-9 col-sm-7 col-xs-6 col-xxs-12 text-center-xs">
        <h1 class="section-title-inner"><span><i class="glyphicon glyphicon-shopping-cart"></i> Checkout</span></h1>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-5 rightSidebar col-xs-6 col-xxs-12 text-center-xs">
        <h4 class="caps"><a href="category.php"><i class="fa fa-chevron-left"></i> Back to shopping </a></h4>
    </div>
</div>
<form action="<?php echo base_url('confirm_order'); ?>" method="post">

    <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-12">
            <div class="row userInfo">
                <div class="col-xs-12 col-sm-12">
                    <div class="w100 clearfix">
                        <ul class="orderStep orderStepLook2">
                            <li ><a href="<?php echo base_url('checkout/2'); ?>"> <i class="fa fa-map-marker "></i> <span> Shipping Address</span></a></li>
                            <li ><a href="<?php echo base_url('checkout/3'); ?>"><i class="fa fa-money  "> </i><span>Payment</span> </a></li>
                            <li class="active"><a href="<?php echo base_url('checkout/4'); ?>"><i class="fa fa-check-square "> </i><span>Confirm Order</span></a></li>
                        </ul>
                        <!--orderStep-->
                    </div>


                    <div class="w100 clearfix">


                        <div class="row userInfo">
                            <div class="col-lg-12">
                                <h2 class="block-title-2"> Review Order </h2>
                            </div>                   
                            <div class="col-xs-12 col-sm-12">
                                <div class="cartContent w100 checkoutReview ">
                                    <table class="cartTable table-responsive" style="width:100%">
                                        <tbody>
                                            <tr class="CartProduct cartTableHeader">
                                                <th style="width:15%"> Product</th>
                                                <th class="checkoutReviewTdDetails">Details</th>
                                                <th style="width:10%">Unit Price</th>
                                                <th class="hidden-xs" style="width:5%">QNT</th>
                                               <!-- <th class="hidden-xs" style="width:10%">Discount</th> -->
                                                <th style="width:15%">Total</th>
                                            </tr>
                                            <?php
                                            foreach ($cart['items'] as $item):
                                                $product_url = base_url("product/{$item['id']}-" . url_title($item['name'], '-', TRUE));
                                                ?>
                                                <tr class="CartProduct">
                                                    <td class="CartProductThumb">
                                                        <div><a href="<?php echo $product_url; ?>"><img src="<?php echo base_url($item['img']); ?>" alt="product-details"></a></div>
                                                    </td>
                                                    <td>
                                                        <div class="CartDescription">
                                                            <h4><a href="<?php echo $product_url; ?>"><?php echo $item['name']; ?> </a></h4>
                                                            <span class="size"><?php echo $item['code']; ?></span>
                                                        </div>
                                                    </td>
                                                    <td class="delete">
                                                        <div class="price "><?php echo currency($item['price']); ?></div>
                                                    </td>
                                                    <td class="hidden-xs"><?php echo $item['qty']; ?></td>
                                                   <!-- <td class="hidden-xs"><?php echo currency(0); ?></td> -->
                                                    <td class="price">TK.<?php echo currency($item['subtotal']); ?>/=</td>
                                                </tr>
                                            <?php endforeach; ?>
                                        </tbody>
                                    </table>
                                </div>
                                <!--cartContent-->
                                
                                <div class="w100 costDetails">
                                    <div class="table-block" id="order-detail-content">
                                        <table class="std table" id="cart-summary">
                                            <tr>
                                                <td>Total products</td>
                                                <td class="price">TK.<?php  echo makeCurrency($cart['total']); ?></td>
                                            </tr>
                                            <tr style="">
                                                <td>Shipping</td>
                                                <td class="price"><span class="success">Free shipping!</span></td>
                                            </tr>
                                            <!--
                                            <tr class="cart-total-price ">
                                                <td>Total (tax excl.)</td>
                                                <td class="price">$216.51</td>
                                            </tr>
                                            <tr>
                                                <td>Total tax</td>
                                                <td class="price">0.00</td>
                                            </tr>
                                            -->
                                            <tr>
                                                <td> Total</td>
                                                <td class="price">TK.<?php  echo makeCurrency($cart['total']); ?></td>
                                            </tr>
                                            <tbody>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <!--/costDetails-->
                            </div>
                        </div>
                    </div>
                    <!--/row end-->
                    <div class="cartFooter w100">
                        <div class="box-footer">
                            <div class="pull-left"><a class="btn btn-default" href="<?php base_url('checkout/3'); ?>">
                                    <i class="fa fa-arrow-left"></i> &nbsp; Payment method </a>
                            </div>


                            <div class="pull-right">
                                <button type="submit" class="btn btn-primary btn-small ">
                                    Confirm Order &nbsp; <i class="fa fa-check"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!--/ cartFooter -->
                </div>
            </div>
        </div>
        <!--/row end-->
        <div class="col-lg-3 col-md-3 col-sm-12 rightSidebar">

            <div class="w100 cartMiniTable">
                <table class="std table">
                    <tbody>
                        <tr>
                            <td>Total products</td>
                            <td class="price">TK. <span class="carttotal"><?php echo currency($cart['total']); ?>/=</span></td>
                        </tr>
                        <tr style="">
                            <td>Shipping</td>
                            <td class="price"><span class="success">Free shipping!</span></td>
                        </tr>
                        <!--
                        <tr class="cart-total-price ">
                            <td>Total (tax excl.)</td>
                            <td class="price">$216.51</td>
                        </tr>
                        <tr>
                            <td>Total tax</td>
                            <td class="price" id="total-tax">$0.00</td>
                        </tr>
                        -->
                        <tr>
                            <td> Total</td>
                            <td class=" site-color" id="total-price"><span class="carttotal"><?php echo currency($cart['total']); ?>/=</span></td>
                        </tr>


                    </tbody>
                    <tbody>
                    </tbody>
                </table>
            </div>

        </div>
        <!--/rightSidebar-->

    </div>
</form>