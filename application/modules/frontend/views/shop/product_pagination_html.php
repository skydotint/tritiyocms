<?php if (!empty($products['items'])) { ?>
    <div class="w100 categoryFooter">
       
        <?php
        $item_per_page = 12;
        $current_page = (int) $this->input->get('page_no');
        $current_page = ($current_page <= 1) ? 1 : $current_page;

        if ($products['total'] > $item_per_page):

            $total_page = ceil($products['total'] / $item_per_page);


            if (isset($term)) {
                $page_url = base_url('category/' . $term['id'] . '-' . url_title($term['name'], '-', true));
            } else {
                $page_url = base_url('search');
            }
            $page_url .= '?search_key=' . urlencode($this->input->get('search_key'));
            $page_url .= '&max_price=' . urlencode($this->input->get('max_price'));
            $page_url .= '&min_price=' . urlencode($this->input->get('min_price'));
            $page_url .= '&cat_id=' . urlencode($this->input->get('cat_id'));
            $page_url .= '&order_field=' . urlencode($this->input->get('order_field'));
            $page_url .= '&order_type=' . urlencode($this->input->get('order_type'));           
            ?>
            <div class="pagination pull-left no-margin-top">
                <ul class="pagination no-margin-top">
                    <?php if ($current_page > 1): ?>
                        <li><a href="<?php echo $page_url . "&page_no=" . ($current_page - 1); ?>">«</a></li>
                    <?php endif; ?>
                    <?php
                    $start_page = ($current_page > 6) ? $current_page - 5 : 1;
                    for ($i = $start_page, $j = 1; $i <= $total_page && $j < 11; $i++, $j++) :
                        ?>
                        <li <?php echo ($i == $current_page) ? ' class="active" ' : ''; ?>><a href="<?php echo $page_url . "&page_no={$i}"; ?>" ><?php echo $i; ?></a></li>
                    <?php endfor; ?> 
                    <?php if ($current_page < $total_page) : ?>
                        <li><a href="<?php echo $page_url . "&page_no=" . ($current_page + 1); ?>">»</a></li>
                    <?php endif; ?>
                </ul>
            </div>
        <?php endif; ?>

        <div class="pull-right pull-right col-sm-4 col-xs-12 no-padding text-right text-left-xs">
            <p>Showing <?php
                $x = ($current_page - 1) * $item_per_page + 1;
                $y = ($current_page - 1) * $item_per_page + $item_per_page;


                $y = ($products['total'] < $y) ? $products['total'] : $y;

                echo "{$x} to {$y}";
                ?> of <?php echo $products['total']; ?> results</p>
        </div>
    </div>
<?php } ?>