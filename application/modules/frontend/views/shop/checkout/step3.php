

<div class="row">
    <div class="col-lg-9 col-md-9 col-sm-7 col-xs-6 col-xxs-12 text-center-xs">
        <h1 class="section-title-inner"><span><i class="glyphicon glyphicon-shopping-cart"></i> Checkout</span></h1>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-5 rightSidebar col-xs-6 col-xxs-12 text-center-xs">
        <h4 class="caps"><a href="category.php"><i class="fa fa-chevron-left"></i> Back to shopping </a></h4>
    </div>
</div>

<form action="<?php echo base_url('update_payment_info'); ?>" method="post">
    <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-12">
            <div class="row userInfo">
                <div class="col-xs-12 col-sm-12">

                    <div class="w100 clearfix">
                        <ul class="orderStep orderStepLook2">
                            <li ><a href="<?php echo base_url('checkout/2'); ?>"> <i class="fa fa-map-marker "></i> <span> Shipping Address</span></a></li>
                            <li class="active"><a href="<?php echo base_url('checkout/3'); ?>"><i class="fa fa-money  "> </i><span>Payment</span> </a></li>
                            <li><a href="<?php echo base_url('checkout/4'); ?>"><i class="fa fa-check-square "> </i><span>Confirm Order</span></a></li>
                        </ul>
                        <!--orderStep-->
                    </div>

                    <div class="w100 clearfix">
                        <div class="row userInfo">
                            <div class="col-lg-12">
                                <h2 class="block-title-2"> Payment method </h2>

                                <p>Please select the preferred Payment method to use on this order.</p>
                                <hr>
                            </div>
                            <div class="col-xs-12 col-sm-12">
                                <div class="paymentBox">
                                    <div class="panel-group paymentMethod" id="accordion">
                                        <div class="panel panel-default">
                                            <div class="panel-heading panel-heading-custom">
                                                <h4 class="panel-title"><a class="cashOnDelivery" data-toggle="collapse"
                                                                           data-parent="#accordion" href="#collapseOne">
                                                        <span class="numberCircuil">Option 1</span> <strong> Cash on
                                                            Delivery</strong> </a></h4>
                                            </div>
                                            <div id="collapseOne" class="panel-collapse collapse in">
                                                <div class="panel-body">
                                                    <p>All transactions are secure and encrypted, and we neverstor To
                                                        learn more, please view our privacy policy.</p>
                                                    <br>
                                                    <label  for="payment_method">
                                                        <input name="payment_method"  required="required" value="1" id="payment_method" type="radio" <?php echo (is_array($payment_info) && $payment_info['payment_method'] == 1) ? 'checked' : ''; ?>>    
                                                        Cash On Delivery </label>

                                                    <div class="form-group">
                                                        <label for="payment_parameter">Add Comments About Your Order</label>
                                                        <textarea id="payment_parameter" class="form-control"
                                                                  name="payment_parameter" cols="26" rows="3"><?php echo (is_array($payment_info) && $payment_info['payment_parameter']) ? $payment_info['payment_parameter'] : ''; ?></textarea>
                                                    </div>
                                                    <div class="form-group clearfix">
                                                        <label for="payment_term">
                                                            <input name="payment_term[]" value="1" id="checkboxes-1" value="1" required="required"
                                                                   type="checkbox" <?php echo (is_array($payment_info) && $payment_info['payment_term'] == 1) ? ' checked ' : ''; ?>>
                                                            I have read and agree to the <a
                                                                >Terms & Conditions</a>
                                                        </label>
                                                    </div>
                                                    <div class="pull-right"><button type="submit" class="btn btn-primary btn-small "> Order &nbsp; <i class="fa fa-arrow-circle-right"></i> </button></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!--/row-->

                            </div>
                        </div>
                    </div>
                    <!--/row end-->

                    <div class="cartFooter w100">
                        <div class="box-footer">
                            <div class="pull-left"><a class="btn btn-default" href="checkout/checkout-3.php"> <i
                                        class="fa fa-arrow-left"></i> &nbsp; Billing address </a></div>
                        </div>
                    </div>
                </div>

                <!--/ cartFooter -->

            </div>
        </div>
        <!--/row end-->

        <div class="col-lg-3 col-md-3 col-sm-12 rightSidebar">
            <div class="w100 cartMiniTable">
                <table id="cart-summary" class="std table">
                    <tbody>

                        <tr>
                            <td>Total products</td>
                            <td class="price">TK. <span class="carttotal"><?php echo currency($cart['total']); ?>/=</span></td>
                        </tr>

                        <tr style="">
                            <td>Shipping</td>
                            <td class="price"><span class="success">Free shipping!</span></td>
                        </tr>
                        <?php /*
                          <tr class="cart-total-price ">
                          <td>Total (tax excl.)</td>
                          <td class="price">$216.51</td>
                          </tr>
                          <tr>
                          <td>Total tax</td>
                          <td class="price" id="total-tax">$0.00</td>
                          </tr>
                         * */
                        ?>
                        <tr>
                            <td> Total</td>
                            <td class=" site-color" id="total-price"> <span class="carttotal"><?php echo currency($cart['total']); ?>/=</span></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
        <!--/rightSidebar-->
    </div>
    <!--/row-->
</form>
