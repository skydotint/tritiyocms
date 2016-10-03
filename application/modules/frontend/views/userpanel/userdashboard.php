<div class="row">
    <div class="col-lg-9 col-md-9 col-sm-7">
        <h1 class="section-title-inner"><span><i class="fa fa-unlock-alt"></i> My account </span></h1>

        <div class="row userInfo">
            <div class="col-xs-12 col-sm-12">
                <!-- <p> Your account has been created. </p> -->

                <h2 class="block-title-2">
                    <span>Welcome to your account. Here you can manage all of your personal information and orders.</span>
                </h2>
                <ul class="myAccountList row">
                    <li class="col-lg-2 col-md-2 col-sm-3 col-xs-4  text-center ">
                        <div class="thumbnail equalheight">
                            <a title="Orders" href="<?php echo base_url('myaccount'); ?>">
                                <i class="fa fa-calendar"></i> Order history 
                            </a>
                        </div>
                    </li> 
                    <li class="col-lg-2 col-md-2 col-sm-3 col-xs-4  text-center ">
                        <div class="thumbnail equalheight">
                            <a title="Personal information" href="<?php echo base_url('personal_information'); ?>">
                                <i class="fa fa-cog"></i> Personal information
                            </a>
                        </div>
                    </li>
                            <?php if ($this->ion_auth->in_group([1])): ?>
                     <li class="col-lg-2 col-md-2 col-sm-3 col-xs-4  text-center ">
                        <div class="thumbnail equalheight">
                            <a title="Administrator Dashboard" href="<?php echo base_url('dashboard'); ?>">
                                <i class="fa fa-tachometer" aria-hidden="true"></i>Dashboard
                            </a>
                        </div>
                    </li>
                    <?php endif; ?>
                    
                </ul>
                <div class="table-responsive">
                    <table class="table table-responsive">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Order time</th>
                                <th>Customer Name</th>
                                <th>Payment Method</th>
                                <th>Order Status</th>
                                <th>Total Amount</th>
                                <td></td>
                                   
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($orders as $order): ?>
                                <tr>
                                    <td><?php echo $order['order_id']; ?></td>
                                   <td><?php echo  $order['order_time'] ; ?></td>
                                    <td><?php echo $order['customer_name']; ?></td>
                                   <td><?php echo $order['payment_method_name']; ?></td>
                                   <td><?php
                                        switch ($order['order_status']) {
                                            case 'order_placed':
                                                echo "Order placed";
                                                break;
                                        }
                                        ?></td>
                                   <td><?php echo $order['total']; ?></td>
                                   <td><a href="<?php echo base_url('view_invoice/'.$order['id'].'/'.$order['secret_key']); ?>" class="btn btn-default" target="_balnk"><span class="fa fa-eye"></span> View Invoice</a></td>
                                   
                                </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
                <div class="clear clearfix"></div>
            </div>
        </div>
        <!--/row end-->

    </div>
    <div class="col-lg-3 col-md-3 col-sm-5"></div>
</div>
<!--/row-->
