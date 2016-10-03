<?php
if (empty($products['items'])) {
    __e('<div class="alert alert-warning"><h3>Product you are looking for not available.</h3></div>' . (empty($may_like_products) && FALSE ? '<b>But you may like<b><br/><br/>' : ''));
    if (!empty($may_like_products) && false) {
        ?>
        <div class="row  categoryProduct xsResponse clearfix">

            <?php
            foreach ($may_like_products as $product) {

                $this->load->view('shop/product_loop', array('product' => $product));
            }
            ?>
        </div>
        <?php
    }
} else {
    ?>
    <div class="row  categoryProduct xsResponse clearfix">
        <?php
        foreach ($products['items'] as $product) {
            $this->load->view('shop/product_loop', array('product' => $product));
        }
        ?>
    </div>
    <?php } ?>