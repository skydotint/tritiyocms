<div class="x_panel">
    <div class="x_title">
        <div class="col-sm-9"><h3>Add new Category</h3></div>
        <div class="clearfix"></div>
    </div>
    <div class="x_content" style="display: block;">
        <?php echo $this->session->flashdata('msg'); ?>

        <form class="form-horizontal" role="form" id="add_new_category">
            <div class="form-group">
                <label class="control-label col-sm-2" for="email">Category name:</label>
                <div class="col-sm-10">
                    <input type="text" name="name"  pattern=".{3,50}"  required title="3 characters minimum" class="form-control" id="name" placeholder="Caterogy name">
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">Description:</label>
                <div class="col-sm-10"> 
                    <textarea name="description" class="form-control"></textarea>
                </div>
            </div>
            <div class="form-group">
                <label class="control-label col-sm-2" for="pwd">Parents:</label>
                <div class="col-sm-10"> 
                    <select  name="parent_id" class="form-control">
                        <option selected="selected" value="0">No Parent</option>                             
                        <?php echo select_option_html($categories); ?>        
                    </select>
                </div>
            </div>
            <div class="form-group"> 
                <div class="col-sm-offset-2 col-sm-10">
                    <input type="submit" class="btn btn-default" value="Save Category"/>
                </div>
            </div>
        </form>
    </div>
</div>