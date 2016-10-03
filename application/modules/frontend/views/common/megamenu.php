<div class="navbar navbar-tshop megamenu problem_menu fixed_menu" role="navigation">
    <div class="container">
        <div class="row">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav_bar"> 
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <?php echo '<a class="navbar-brand ' . ((!$this->uri->segment(1)) ? ' active' : '') . '"  href="' . base_url() . '">Home</a>'; ?>
            </div>
            <div id="nav_bar" class="navbar-collapse collapse"> 
                <?php echo $mainmenu; ?>
                <div class="nav navbar-nav navbar-right hidden-xs">
                    <div class="dropdown  cartMenu ">  
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"> 
                            <i class="fa fa-shopping-cart"> </i> 
                            <span class="cartRespons"> Cart (৳ <span class="carttotal"><?php echo makeCurrency($cart['total']); ?></span>) </span>
                            <?php if ($cart['total']): ?><b class="caret"></b><?php endif; ?>
                        </a>
                        <span class="minicart">
                            <?php if ($cart['total'] or true): ?>
                                <div class="dropdown-menu col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                    <div class="w100 miniCartTable scroll-pane">
                                        <table>
                                            <tbody>
                                                <?php
                                                foreach ($cart['items'] as $item):
                                                    $product_url = base_url('product/' . $item['id'] . '-' . url_title($item['name'], '-', TRUE));
                                                    ?>                                        
                                                    <tr class="miniCartProduct">
                                                        <td style="width:20%" class="miniCartProductThumb">
                                                            <div><a href="<?php echo $product_url; ?>"> <img src="<?php echo base_url((isset($item['img']) ? $item['img'] : 'uploads/default.jpg')); ?>" alt="procuct">
                                                                </a></div>
                                                        </td>
                                                        <td style="width:40%">
                                                            <div class="miniCartDescription">
                                                                <h4><a href="<?php echo $product_url; ?>"><?php echo $item['name']; ?></a></h4>
                                                               <!-- <span class="size"> <?php echo $item['name']; ?> </span> --> 
                                                                <div class="price"><span> <?php echo currency($item['price']); ?> TK </span></div>
                                                            </div>
                                                        </td>
                                                        <td style="width:10%" class="miniCartQuantity"><a> X <?php echo $item['qty']; ?> </a></td>
                                                        <td style="width:15%" class="miniCartSubtotal"><span> ৳<?php echo currency($item['subtotal']); ?> </span></td>
                                                        <td style="width:5%" class="delete"><a class="remove_from_cart" data-id="<?php echo $item['id']; ?>"> x </a></td>
                                                    </tr>   
                                                <?php endforeach; ?>

                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="miniCartFooter text-right">
                                        <h3 class="text-right subtotal"> Subtotal: <span class="carttotal"><?php echo $cart['total']; ?></span> TK </h3>
                                        <a class="btn btn-sm btn-danger" href="<?php echo base_url('cart'); ?>"><i class="fa fa-shopping-cart"></i> 
                                            VIEW CART
                                        </a>
                                        <a href="<?php echo base_url('cart'); ?>" class="btn btn-sm btn-primary"> CHECKOUT </a>
                                    </div>
                                </div>
                            <?php endif; ?>
                        </span>
                    </div>                        
                </div>
            </div>
        </div>            
    </div>
</div>
<div class="clearfix" style="margin-top: 20px;"></div>