<div class="row">
    <div class="col-lg-3 col-md-3 col-sm-12">
        <div class="panel-group" id="accordionNo">
            <!--Category-->
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" href="#collapseCategory" class="collapseWill active ">
                            <span class="pull-left"> <i class="fa fa-caret-right"></i></span> Category 
                        </a>
                    </h4>
                </div>
                <div id="collapseCategory" class="panel-collapse collapse in">
                    <div class="panel-body">
                        <ul class="nav nav-pills nav-stacked tree">

                            <li>
                                <?php
                                $product_categories = $this->term_model->get_categories();
                                $parent_column = array_column($product_categories, 'parent_id');
                                $top_cat_keys = array_keys($parent_column, 50);
                                ?>
                                <?php
                                foreach ($top_cat_keys as $key):
                                    $top_category = $product_categories[$key];
                                    ?>
                                </li>
                                <li class="dropdown-tree">
                                    <a data-cat_id="<?php
                                    echo $top_category['id'];
                                    ;
                                    ?>" class="dropdown-tree-a">
                                        <span class="badge pull-right"><?php echo $top_category['total_product']; ?></span>
                                        <?php echo $top_category['name']; ?>
                                    </a>
                                    <ul class="category-level-2 dropdown-menu-tree">
                                        <?php
                                        $sub_column = array_column($product_categories, 'parent_id');
                                        $sub_cat_keys = array_keys($parent_column, $top_category['id']);
                                        foreach ($sub_cat_keys as $key):
                                            $sub_category = $product_categories[$key];
                                            ?>
                                            <li> 
                                                <span class="badge pull-right"><?php echo $sub_category['total_product']; ?></span>

                                                <a data-cat_id="<?php
                                                echo $sub_category['id'];
                                                ;
                                                ?>" href="<?php echo base_url("category/{$sub_category['id']}-" . url_title($sub_category['name'])); ?>"><?php echo $sub_category['name']; ?></a></li>
                                            <?php endforeach; ?>
                                    </ul>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>
            </div>
            <!--/Category menu end-->

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title"
                        <a class="collapseWill" data-toggle="collapse" href="#collapsePrice"><span class="pull-left"><i class="fa fa-caret-right"></i></span> &nbsp;Price</a> 
                        <!--<span class="pull-right clearFilter  label-danger"> Clear </span>-->
                    </h4>
                </div>
                <div id="collapsePrice" class="panel-collapse collapse">
                    <div class="panel-body priceFilterBody">
                        <label class="price_filter">
                            <input type="radio" name="price_filter" data-min_price="0" data-max_price="2000000"/>
                            Any Price</label>
                        <br>
                        <label class="price_filter">
                            <input type="radio" name="price_filter"  data-min_price="0" data-max_price="3000"/>
                            Under 3000TK</label>
                        <br>
                        <label class="price_filter">
                            <input type="radio" name="price_filter" data-min_price="3000" data-max_price="5000"/>
                            3000 TK - 5000TK</label>
                        <br>
                        <label class="price_filter">
                            <input type="radio" name="price_filter" data-min_price="5000" data-max_price="10000"/>
                            5,000TK -  10,000TK</label>
                        <br>
                        <label class="price_filter">
                            <input type="radio" name="price_filter" data-min_price="10000" data-max_price="20000"/>
                            10,000TK - 20,000TK</label>
                        <br>
                        <label class="price_filter">
                            <input type="radio" name="price_filter" data-min_price="20000" data-max_price="30000"/>
                            20,000TK - 30,000TK</label>
                        <br>
                        <label class="price_filter">
                            <input type="radio" name="price_filter" data-min_price="30000" data-max_price="2000000"/>
                            Abobe 30,000TK</label>
                        <br>

                        <!--                        <label class="price_filter">
                                                    <input type="radio" name="price_filter" data-min_price="0" data-max_price="2000000" disabled checked />
                                                    Don't know</label>
                                                <hr>
                                                <p>Enter a Price range </p>
                                                <form class="form-inline">
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="min_price_filter" placeholder="5,000">
                                                    </div>
                                                    <div class="form-group sp"> -</div>
                                                    <div class="form-group">
                                                        <input type="text" class="form-control" id="max_price_filter" placeholder="7,000">
                                                    </div>
                                                    <button id="filter_by_price" type="submit" class="btn btn-default pull-right">check</button>
                                                </form>-->
                    </div>
                </div>
            </div>

        </div>
    </div>
    <script type="text/javascript">

        /*Product Filter Object Used by _ecommerce.js #product_filter*/
        var product_filter = {
            order_field: "price",
            order_type: "asc",
            max_price: 0,
            min_price: 0,
            search_key: "<?php echo $this->input->get('search_key'); ?>",
            cat_id: <?php echo (isset($term['id']) ? $term['id'] : 59); ?>,
            page_no: 1
        }

    </script>

    <div class="col-lg-9 col-md-9 col-sm-12">
        <div class="w100 productFilter clearfix">
            <p class="pull-left category_top_p"><?php __e((!empty($title) ? $title : '')); ?></p>

            <div class="pull-right ">
                <div class="change-order pull-right">
                    <select id="productorderby" class="form-control" name="productorderby" style="width:auto;">                        
                        <option value="priceasc" data-field='price' data-type='asc'>Sort by price: low to high</option>                        
                        <option value="pricedesc" data-field='price' data-type='desc'>Sort by price: high to low</option>
                        <option value="id" data-field='id' data-type='desc'>Sort by newest</option>
                    </select> 
                </div>

                <div class="change-view pull-right">
                    <a href="#" title="Grid" class="grid-view">
                        <img src="<?php echo base_url(); ?>frontassets/images/2.png" class="icon1"  alt="" />
                    </a>
                    <a href="#" title="List" class="list-view ">
                        <img src="<?php echo base_url(); ?>frontassets/images/1.png" class="icon2" alt="" />
                    </a>
                </div>


            </div>
        </div>
        <div id="product_list_html">
            <?php $this->load->view('product_list_html'); ?>
        </div>
        <div id="product_pagination_html">
            <?php $this->load->view('product_pagination_html'); ?>
        </div>



    </div>
    <!--/right column end-->
</div>
