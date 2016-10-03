
<li class="vn">
    <a><i class="fa fa-cart-plus" aria-hidden="true"></i>Order management<span class="fa fa-chevron-down"></span></a>
    <ul style="display: none;" class="nav child_menu">
        <li><a href="<?php __menu('order/all/list'); ?>">All Order</a></li>
        <li><a href="<?php __menu('order/order_placed/list'); ?>">Order Placed</a></li> 
        <li><a href="<?php __menu('order/processing/list'); ?>">Order Processing</a></li>
        <li><a href="<?php __menu('order/done/list'); ?>">Order Done</a></li>
        <li><a href="<?php __menu('order/deleted/list'); ?>" class="danger">Order Deleted</a></li>
    </ul>
</li>


<li class="vn">
    <a><i class="fa fa-picture-o"></i> Posts <span class="fa fa-chevron-down"></span></a>
    <ul style="display: none;" class="nav child_menu">
        <li><a href="<?php __menu("addpost"); ?>">Add new post</a></li>
        <li><a href="<?php __menu("searchandedit"); ?>">Search and Edit</a></li>
        <li><a href="<?php __menu("post"); ?>">View Posts</a></li>        
        <li><a href="<?php __menu("addcategory") ?>">Add new category</a></li>
        <li><a href="<?php __menu("viewcategories") ?>">View categories</a></li>
    </ul>
</li>
<li class="vn">
    <a><i class="fa fa-picture-o"></i> Pages <span class="fa fa-chevron-down"></span></a>
    <ul style="display: none;" class="nav child_menu">
        <li><a href="<?php __menu('addnewpage'); ?>">Add New Page</a></li>
        <li><a href="<?php __menu('viewpages'); ?>">All Pages</a></li>
    </ul>
</li>
<li class="vn">
    <a href="<?php __menu('media'); ?>"><i class="fa fa-file-image-o"></i>Media </span></a>
</li>

<li class="vn">
    <a><i class="fa fa-ship" ></i> Products <span class="fa fa-chevron-down"></span></a>
    <ul style="display: none;" class="nav child_menu">
        <li><a href="<?php __menu('addnewproduct'); ?>">Add New Products</a></li>
        <li><a href="<?php __menu('productlist'); ?>">All Products</a></li>
        <li><a href="<?php __menu('addnewcategory'); ?>">Add new category</a></li>
        <li><a href="<?php __menu('categories'); ?>">All Categories</a></li>
    </ul>
</li>

<li class="vn">
    <a><i class="fa fa-building"></i> Show Rooms <span class="fa fa-chevron-down"></span></a>
    <ul style="display: none;" class="nav child_menu">
        <li><a href="<?php __menu('showrooms'); ?>">Show Rooms</a></li>
    </ul>    
</li>
