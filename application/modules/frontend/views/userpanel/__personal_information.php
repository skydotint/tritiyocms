<div class="row">
    <div class="col-lg-9 col-md-9 col-sm-7">
        <h1 class="section-title-inner"><span><i class="fa fa-unlock-alt"></i> My account </span></h1>

        <div class="row userInfo">
            <div class="col-xs-12 col-sm-12">
                <!-- <p> Your account has been created. </p> -->

                <h2 class="block-title-2">
                    <span>Welcome to your account. Here you can manage all of your personal information and orders.</span>
                </h2>
                <ul class="myAccountList row">
                    <li class="col-lg-2 col-md-2 col-sm-3 col-xs-4  text-center ">
                        <div class="thumbnail equalheight">
                            <a title="Orders" href="<?php echo base_url('myaccount'); ?>">
                                <i class="fa fa-calendar"></i> Order history 
                            </a>
                        </div>
                    </li> 
                    <li class="col-lg-2 col-md-2 col-sm-3 col-xs-4  text-center ">
                        <div class="thumbnail equalheight">
                            <a title="Personal information" href="<?php echo base_url('perosnal_information'); ?>">
                                <i class="fa fa-cog"></i> Personal information
                            </a>
                        </div>
                    </li>
                </ul>
                <div class="">
                    <?php if( validation_errors()): ?>   
                    <div class="alert alert-danger"> <?php echo validation_errors(); ?></div>
                    <?php endif; ?>
                    <?php //owndebugger($userInformation); ?>
                    <form class="form-horizontal" role="form" action="<?php echo base_url('personal_information'); ?>" method="post">
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="email">Email :</label>
                            <div class="col-sm-10"> 
                                <input type="email" class="form-control" readonly id="email" name="email" placeholder="Enter email" value="<?php echo $userInformation->email; ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="full_name">Full Name:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="full_name" name="full_name" placeholder="Enter full name" value="<?php echo $userInformation->full_name_en; ?>">
                            </div>
                        </div>
                        
                         <div class="form-group">
                            <label class="control-label col-sm-2" for="phone">Phone:</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="phone" name="phone" placeholder="Enter mobile" value="<?php echo $userInformation->phone; ?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="address">Address :</label>
                            <div class="col-sm-10"> 
                                <textarea class="form-control" name="address"><?php echo $userInformation->address; ?></textarea>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label class="control-label col-sm-2" for="password">Password :</label>
                            <div class="col-sm-10"> 
                                <input type="password" name="password" class="form-control" id="password" placeholder="Enter password">
                          
                            </div>
                        </div>
                        
                        
                        
                    
                        <div class="form-group"> 
                            <div class="col-sm-offset-2 col-sm-10">
                                <button type="submit" class="btn btn-default">Save Change</button>
                            </div>
                        </div>
                    </form>



                </div>
                <div class="clear clearfix"></div>
            </div>
        </div>
        <!--/row end-->

    </div>
    <div class="col-lg-3 col-md-3 col-sm-5"></div>
</div>
<!--/row-->
