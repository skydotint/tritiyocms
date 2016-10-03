<div class="row">
    <div class="col-sm-4 col-xs-12 s_left">
        <form class="showroomfilter">
            <div class="shop fix">
                <div class="shop_title fix">
                    <h4>Shop type</h4>
                </div>
                <div class="shop_radiobox fix ">
                    <p><input  name="shop_type[]" type="checkbox" value="1" checked="checked" /> Regal Showrooms</p>
                    <p ><input  name="shop_type[]" type="checkbox" value="2" checked="checked" /> Regal with best buy</p>
                    <p ><input  name="shop_type[]" type="checkbox" value="3" checked="checked" /> Dealer</p>
                </div>
            </div>

            <div class="division fix">
                <div class="divison_title fix">
                    <h4>District</h4>
                </div>
                <div class="division1 fix districts">
                    <select class="district_id" name="district_id">
                        <?php while (list($id, $name) = each($districts)): ?>
                            <option value="<?php echo $id; ?>"><?php echo $name; ?></option>
                        <?php endwhile; ?>
                    </select>
                </div>
            </div>
            <div class="search fix"><a class="btn btn-info showrooms_search_btn">Search</a></div>
    </form>
</div>

<div class="col-sm-4 col-xs-12">
    <div class="room_right_inner fix showroomlist">
        <?php $i = 0;
        while (list($key, $showroom) = each($showrooms)) :$i++
            ?>
            <div class="list1 fix">
                <ul>
                    <li><?php echo "{$i}. {$showroom['ShowroomName']}"; ?></li>
                    <li><?php echo $showroom['ShowroomAddress']; ?></li>
                    <li>Phone: <?php echo $showroom['Phone']; ?></li>
                </ul>
            </div>
<?php endwhile; ?>
    </div>
</div>

<div class="col-sm-4 col-xs-12">
    <div class="room_map_inner fix">
        <div id="googleMap" style="width:100%;height:400px;"><iframe height="450" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14606.93030142689!2d90.360714!3d23.756914000000002!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1465382795751" style="border:0" width="600"></iframe></div>
    </div>
</div>
</div>
