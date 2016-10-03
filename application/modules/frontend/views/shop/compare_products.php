<div class="row">
    <div class="col-sm-12">
        <?php if (empty($products)): ?>
            <div class="alert alert-warning">
                <h2>Sorry you didn't select any product to compare. To compare product please add first to compare list.</h2>
            </div>
        <?php else: ?>
            <div class="table-responsive">

                <style type="text/css">

                    .compare-table tr:first-child {
                        font-weight: 700;
                    }
                    .compare-table tr td{
                        width:25%;
                    } 
                    .compare-table tr td:first-child{

                        font-weight: 700;
                    }
                    .compare-table tr td.description{
                        overflow: auto;
                    }
                    .compare-table img{
                        max-width:250px;
                    }
                </style>

                <table class="table table-responsive compare-table">
                    <tr>
                        <td>Product name</td>
                        <?php foreach ($products as $product): ?>                       
                            <td><?php echo $product['name']; ?></td>
                        <?php endforeach; ?>
                    </tr>
                    <tr>
                        <td></td>
                        <?php foreach ($products as $product): ?>                       
                        <td><img  src="<?php echo base_url($product['product_image']); ?>"></td>
                        <?php endforeach; ?>
                    </tr>
                    <tr>
                        <td>Price </td>
                        <?php foreach ($products as $product): ?>                       
                            <td>TK. <?php echo $product['price']; ?>/=</td>
                        <?php endforeach; ?>
                    </tr>

                    <tr>
                        <td>Product code </td>
                        <?php foreach ($products as $product): ?>                       
                            <td><?php echo $product['code']; ?></td>
                        <?php endforeach; ?>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <?php foreach ($products as $product): ?>                       
                            <td class="desciption"><?php echo $product['description']; ?></td>
                        <?php endforeach; ?>
                    </tr>
                    <tr>
                        <td> Material </td>
                        <?php foreach ($products as $product): ?>                       
                            <td><?php echo $product['material']; ?></td>
                        <?php endforeach; ?>
                    </tr>
                    <tr>
                        <td>Color </td>
                        <?php foreach ($products as $product): ?>                       
                            <td><?php echo $product['color']; ?></td>
                        <?php endforeach; ?>
                    </tr>
                    <tr>
                        <td>Dimension </td>
                        <?php foreach ($products as $product): ?>                       
                            <td><?php echo $product['code']; ?></td>
                        <?php endforeach; ?>
                    </tr>
                    <tr>
                        <td>Delivery area </td>
                        <?php foreach ($products as $product): ?>                       
                            <td><?php echo $product['delivery_area']; ?></td>
                        <?php endforeach; ?>
                    </tr>

                    <tr>
                        <td>Delivery Time </td>
                        <?php foreach ($products as $product): ?>                       
                            <td><?php echo $product['delivery_time']; ?></td>
                        <?php endforeach; ?>
                    </tr>

                    <tr>
                        <td>Delivery Charge </td>
                        <?php foreach ($products as $product): ?>                       
                            <td>Free Shipping</td>
                        <?php endforeach; ?>
                    </tr>                    
                    <tr>
                        <td>Buy Now</td>
                        <?php foreach ($products as $product): ?>                       
                            <td> 
                                <a href="<?php echo base_url('add_to_cart/?id=' . $product['id']); ?>" class="btn btn-primary add_to_cart" data-id="<?php echo $product['id']; ?>">Add to cart</a>

                                <a class="btn btn-primary remove_from_compare" data-id="<?php echo $product['id']; ?>">Remove from compare</a>

                            </td>
                        <?php endforeach; ?>
                    </tr>

    <!--                <tr>
        <td>Remove From Compare</td>
                    <?php
                    //owndebugger($this->session->userdata('compared_list'));
                    ?>
                    <?php //foreach ($products as $product): ?>
            <td>
                <a title="Delete" class="remove_from_compare" data-id='<?php //echo $product['id'];  ?>' data-reload="true">
                    <i class="glyphicon glyphicon-trash fa-2x"></i>
                </a>
            </td>
                    <?php //endforeach; ?>
    </tr>
                    -->
                </table>
            </div>
        <?php endif; ?>
    </div>
</div>
