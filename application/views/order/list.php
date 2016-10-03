<br><br><br><br>
<div class="panel panel-default">
    <div class="panel-heading">
        <?php echo ucfirst(str_replace('_', ' ', $type)); ?> Order List
    </div>
    <div class="panel-body">
        <div class="table-responsive text-left" style="padding-bottom:200px;">
            <table class="table table-bordered table-condensed table-hover table-striped">
                <thead>
                    <tr>
                        <th>Order id</th>
                        <th>Order Date</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Shipping address</th>
                        <th>Payment Method</th>
                         <th>Status</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <?php foreach ($orders as $order): ?>
                    <tr>
                        <td ><?php echo $order['order_id']; ?></td>
                        <td><?php echo date("F j, Y, g:i a",strtotime($order['order_time'])); ?></td>
                        <td><?php echo $order['customer_name']; ?></td>
                        <td><?php echo $order['contuct_number']; ?></td>
                        <td><?php echo $order['email_address']; ?></td>
                        <td><?php echo $order['shiping_address']; ?></td>
                        <td><?php echo $order['payment_method_name']; ?></td>
                        <td><?php echo ucfirst(str_replace('_', ' ', $order['order_status'])); ?></td>
                        <td><?php echo makeCurrency($order['total']); ?></td>
                        <td>
                            <div class="btn-group">
                                <a target="_blank" href="<?php echo base_url("view_invoice/{$order['order_id']}/{$order['secret_key']}") ?>" class="btn btn-primary"><i class="fa fa-eye" aria-hidden="true"></i> View</a>                      
                                <div class="btn-group">
                                    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                        Move to <span class="caret"></span></button>
                                    <ul id="move_order" class="dropdown-menu pull-right" role="menu">
                                        <li><a href="<?php echo base_url("order/move_to_place_order/{$order['order_id']}") ?>">Place Order</a></li>
                                        <li><a href="<?php echo base_url("order/move_to_processing/{$order['order_id']}") ?>">Processing</a></li>
                                        <li><a href="<?php echo base_url("order/move_to_done/{$order['order_id']}") ?>">Done</a></li>
                                        <li><a href="<?php echo base_url("order/move_to_deleted/{$order['order_id']}") ?>">Delete Order</a></li>
                                    </ul>
                                </div>
                            </div>


                        </td>        
                    </tr>
                <?php endforeach; ?>
            </table>
        </div>
    </div>
</div>
<!--
// (
//            [id] => 49
//            [order_id] => 49
//            [customer_name] => Hello
//            [contuct_number] => 01923666689
//            [email_address] => hellobabu123@gmail.com
//            [shiping_address] => Dhaka. Bangladesh
//            [order_time] => 2016-07-04 15:49:12
//            [payment_method_name] => Cash on delivery
//            [payment_term_status] => checked
//            [payment_parameter] => 
//            [order_status] => processing
//            [param] => []
//            [secret_key] => a227ae5f21134df3ebfb797fb92564e869ba4d96
//            [user_id] => 0
//            [total] => 31000.00
//            [master_id] => 49
//        )-->