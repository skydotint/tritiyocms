<div class="row">
    <div class="col-lg-9 col-md-9 col-sm-7 col-xs-6 col-xxs-12 text-center-xs">
        <h1 class="section-title-inner"><span><i class="glyphicon glyphicon-shopping-cart"></i> Checkout</span></h1>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-5 rightSidebar col-xs-6 col-xxs-12 text-center-xs">
        <h4 class="caps"><a href="category.php"><i class="fa fa-chevron-left"></i> Back to shopping </a></h4>
    </div>
</div>
<!--/.row-->
<form action="<?php echo base_url('update_shiping_address'); ?>" method="post">

    <div class="row">
        <div class="col-lg-9 col-md-9 col-sm-12">
            <div class="row userInfo">
                <div class="col-xs-12 col-sm-12">
                    <div class="w100 clearfix">
                        <ul class="orderStep orderStepLook2">
                            <li class="active"><a href="<?php echo base_url('checkout/2'); ?>"> <i class="fa fa-map-marker "></i> <span> Shipping Address</span></a></li>
                            <li><a href="<?php echo base_url('checkout/3'); ?>"><i class="fa fa-money  "> </i><span>Payment</span> </a></li>
                            <li><a href="<?php echo base_url('checkout/4'); ?>"><i class="fa fa-check-square "> </i><span>Confirm Order</span></a></li>
                        </ul>
                        <!--/.orderStep end-->
                    </div>


                    <div class="w100 clearfix">

                        <div class="row userInfo">
                            <div class="col-lg-12">
                                <h2 class="block-title-2"> To add a new address, please fill out the form below. </h2>
                            </div>

                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group required">
                                    <label for="full_name">Full Name<sup>*</sup> </label>
                                    <input value="<?php echo $cart['shiping_info']['full_name']; ?>" name ="full_name" required type="text" class="form-control" id="full_name"
                                           placeholder="Full Name">
                                </div>
                                <div class="form-group required">
                                    <label for="mobile_number">Mobile Number<sup>*</sup> </label>
                                    <input value="<?php echo $cart['shiping_info']['mobile_number']; ?>" name="mobile_number"  required type="text" pattern="[0][1][1-9]{1}[0-9]{8}" title="Mobile number must be 11 charecter.(Bangladeshi Number formate)"class="form-control" id="mobile_number"
                                           placeholder="Mobile Number">
                                </div>

                                <div class="form-group">
                                    <label for="email">Email </label>
                                    <input value="<?php echo $cart['shiping_info']['email']; ?>" name="email"   type="text" class="form-control" id="email" placeholder="Email">
                                </div>

                                <div class="form-group">
                                    <label for="shiping_address">Shipping address</label>
                                    <textarea name="shiping_address" class="form-control" required=""><?php echo $cart['shiping_info']['shiping_address']; ?></textarea>
                                </div>
                            </div>
                            <div class="col-xs-12 col-sm-6">
                                <div class="form-group">
                                    <label for="additional_information">Additional information/Instruction</label>
                                    <textarea rows="3" cols="26" name="additional_information"
                                              class="form-control" id="additional_information"><?php echo $cart['shiping_info']['additional_information']; ?></textarea>
                                </div>
                            </div>

                        </div>
                        <!--/row end-->

                    </div>
                    <div class="cartFooter w100">
                        <div class="box-footer">
                            <div class="pull-left"><a class="btn btn-default" href="<?php echo base_url('cart'); ?>"> <i
                                        class="fa fa-arrow-left"></i> &nbsp; Back to Cart </a></div>
                            <div class="pull-right"><button type="submit" class="btn btn-primary btn-small">
                                    Next &nbsp; <i class="fa fa-arrow-circle-right"></i> </button></div>
                        </div>
                    </div>
                    <!--/ cartFooter -->

                </div>
            </div>
            <!--/row end-->

        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 rightSidebar">
            <div class="w100 cartMiniTable">
                <table id="cart-summary" class="std table">
                    <tbody>

                        <tr>
                            <td>Total products</td>
                            <td class="price"> <span class="carttotal">TK. <?php echo currency($cart['total']); ?>/=</span></td>
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
                         * 
                         */ ?>
                        <tr>
                            <td> Total</td>
                            <td class=" site-color" id="total-price"><span class="carttotal"><?php echo currency($cart['total']); ?></span></td>
                        </tr>
                    </tbody>
                    <tbody>
                    </tbody>
                </table>
            </div>
            <!--  /cartMiniTable-->
        </div>
        <!--/rightSidebar-->
    </div>
    <!--/row-->
</form>
