<!DOCTYPE HTML>
<html lang="en-US">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">        
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="assets/ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="assets/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="assets/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="ico/apple-touch-icon-57-precomposed.png">
        <link rel="shortcut icon" href="assets/ico/favicon.png">
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
        <title>Regal Furniture</title>
        <!--
        <base href="http://aponstore.com/projects/regal/">
        <link href="assets/bootstrap/css/bootstrap.css" rel="stylesheet">
        <link id="pagestyle" rel="stylesheet" type="text/css" href="assets/css/skin-5.css">        
        <link href="assets/css/style.css" rel="stylesheet">
        <link href="my_style.css" rel="stylesheet">

        <!-- styles needed by footable  --
        <link href="assets/css/footable-0.1.css" rel="stylesheet" type="text/css"/>
        <link href="assets/css/footable.sortable-0.1.css" rel="stylesheet" type="text/css"/>
        -->
        <style>
            @media print {
                .hide-print {display:none}
            }
            body{
                background-color:#eee;
                font-family: 'Roboto', sans-serif;
                font-size:12px;
            }

            .row:before,
            .row:after{
                display: table;
                content: " ";
                clear: both;
            }
            .container{
                width:960px;
                margin:auto;
                background-color:#fff;
                padding:15px;
            }
            .mb{
                margin-bottom: 10px;
            }
            .col{
                width:50%;
                display: inline-block;
                box-sizing: border-box;
                float:left;

            }
            .col:first-child{
                padding-right: 10px;
            }
            .col:last-child{
                padding-left:10px;
            }
            .col:after{
                height: 100%;
            }
            .panel-heading{
                background-color: #e9e9e9;
                padding:10px;
                border:1px solid #eee;
                border-radius:5px 5px 0 0; 

            }
            .panel-body{
                padding:0 10px;
                padding-top:10px;
                border-bottom: 1px solid #eee;
                border-left: 1px solid #eee;
                border-right: 1px solid #eee;
                border-radius:0px 0px 5px 5px; 
            }
            .panel-body p:first-child{
                margin-top: 0px;
            }

            img{
                width:150px;
            }
            h4{
                margin:3px 0px;
            }
            #invoice {

                border-collapse: collapse;
                width: 100%;
            }

            #invoice td, #invoice th {
                border: 1px solid #ddd;
                padding: 8px;
            }

            #invoice th {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                background-color: #eee;
                color: #000;
            }
            .text-right{
                text-align: right;
            }
            .text-center{
                text-align: center;
            }



        </style>
    </head>
    <body>       

        <?php // var_dump($order); ?>
        <div class="container">
            <button class="hide-print" style="float:right;"onclick="window.print();">Print</button>
            <div class="row">
                <div class="col mb">
                    <img src="<?php echo base_url() ?>uploads/settings/logo.png"><br>
                </div>
            </div>
            <div class="row mb">
                <div class="panel-heading">Order Summary</div>
                <div class="panel-body">
                    <p><strong>Status</strong> # <?php echo ucfirst(str_replace('_', ' ', $order['master']['order_status'])); ?></p>
                    <p><strong>Order Date</strong> # <?php echo date('l, F d, Y', strtotime($order['master']['order_time'])) ?></p>
                    <p><strong>Order Number</strong> # <?php echo $order['master']['order_id']; ?> </p>   
                </div>
            </div>
            <div class="row">
                <div class="col mb">
                    <div class="panel">
                        <div class="panel-heading">Billing Shipping Address</div>
                        <div class="panel-body">
                            <p><strong>Customer Name</strong> # <?php echo $order['master']['customer_name']; ?></p>
                            <p><strong>Customer Mobile</strong> # <?php echo $order['master']['shiping_address']; ?></p>
                            <p><address><strong>Address</strong> # <?php echo $order['master']['shiping_address']; ?></address></p> 
                        </div>
                    </div>
                </div>
                <div class="col mb">
                    <div class="panel">
                        <div class="panel-heading">Payment Information</div>
                        <div class="panel-body">
                            <p><strong>Payment Method</strong># <?php echo $order['master']['payment_method_name']; ?></p>
                            <p><strong>Payment Information</strong># <?php echo $order['master']['payment_parameter']; ?></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="order-table">
                <table id="invoice">
                    <thead>
                        <tr><th colspan="5">Order Details</th></tr>
                        <tr>
                            <th>Product Details</th>
                            <th  style="width:20%;text-align: center;" >URL</th>
                            <th style="width:15%;text-align: center;">Price</th>
                            <th  style="width:15%;text-align: center;">Quantity</th>
                            <th  style="width:20%;text-align: center;" >Amount</th>                           
                        </tr>
                    </thead>
                    <tbody>

                        <?php
                        $total = 0;
                        //var_dump($order['details'][0]);
                        foreach ($order['details'] as $item) {
                            ?>

                            <tr>
                                <td>
                                    <img src="<?php echo base_url($item['media_url']); ?>">
                                    <h4><?php echo $item['product_name']; ?></h4>                                    
                                    <!-- Product SKU :<?php echo $item['sku']; ?><br/> -->
                                    Product Code :  <?php echo $item['product_code']; ?><br/>
                                    <?php if ($item['discount'] > 0): ?>
                                        Discount : <?php echo $item['discount']; ?>%<br>
                                        Regular Price :<Del> <?php echo makeCurrency($item['regular_price']); ?>/=<br/></del>
                                        Discount Price :<?php echo makeCurrency($price = $item['price']); ?>/= <br/>
                                    <?php else: ?>
                                        Regular Price :<?php
                                        $price = (int) $item['price'];
                                        echo makeCurrency($price);
                                        ?>/=<br/>
                                    <?php endif; ?>

                                </td>
                                <td><?= base_url("/product/{$item['id']}"); ?></td>
                                <td class="text-center"><?= makeCurrency($price); ?>/=</td>
                                <td class="text-center"><?php echo $item['qty']; ?></td>
                                <td class="text-right"><?php
                                    $total += (int) ($price * $item['qty']);
                                    echo makeCurrency($total);
                                    ?>/=</td>                           
                            </tr>

                        <?php } ?>    
                            

                        <tr>
                            <td colspan="4" style="text-align: right;min-height: 100px;">Total <br> <br> Shipping charge  <br><br><br></td>
                            <td colspan="1" class="text-right"><?= makeCurrency($total) ?>/=<br/> <br>Free  <br><br><br></td>

                        </tr>

                        <tr style="min-height:100px;">
                            <th colspan="4" style="text-align: right;">Grand Total</th>
                            <th colspan="1" style="text-align: right;"><?= makeCurrency($total); ?>/=</th>

                        </tr>
                    </tbody>
                </table>
            </div>

            <p class="text-right">  <button class="hide-print" onclick="window.print();">Print</button></p>
        </div>

    </body>
</html>