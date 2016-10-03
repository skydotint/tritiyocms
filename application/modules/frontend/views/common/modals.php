<div class="modal signUpContent fade" id="ModalLogin" tabindex="-1" role="dialog">
    <div class="modal-dialog ">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"> &times; </button>
                <h3 class="modal-title-site text-center"> Sign In </h3>
				
            </div>
            <div class="modal-body">
                <?php echo form_open("login"); ?>
                <div class="form-group login-username">
                    <div>
                        <?php
                        $data = array(
                            'name' => 'identity',
                            'class' => 'form-control input',
                            'id' => 'login-user',
                            'type' => 'text',
                            'required' => 'required',
                            'placeholder' => 'Enter Email'
                        );
                        echo form_input($data);
                        ?>                        
                    </div>
                </div>
                <div class="form-group login-password">
                    <div>
                        <?php
                        $data = array(
                            'name' => 'password',
                            'class' => 'form-control input',
                            'id' => 'password',
                            'type' => 'password',
                            'min-length' => '8',
                            'max-length' => '12',
                            'pattern' => ".{8,12}",
                            'title' => "Minimum 8 characters and maximum 12 characters",
                            'placeholder' => 'Enter Password'
                        );
                        echo form_input($data);
                        ?>
                    </div>
                </div>
                <div class="form-group">
                    <div>
                        <div class="checkbox login-remember">
                            <label style="padding-left:30px;">
                                <?php echo form_checkbox('remember', '1', FALSE, 'id="remember" class="flat"'); ?>
                                Remember Me 
                            </label>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <?php echo form_submit('submit', 'Sign In', 'class="btn  btn-block btn-lg btn-primary"'); ?>                        
                    </div>
                </div>
                <?php echo form_close(); ?>
            </div>


            <div class="modal-footer">
                <p class="text-center"> Not here before? 
                    <a data-toggle="modal" data-dismiss="modal" href="#ModalSignup"> 
                        Sign Up.
                    </a>
                    <br>
                    <a href="forgot-password.php"> Lost your password?</a>
                </p>
            </div>
        </div>
    </div>
</div>
<div class="modal signUpContent fade" id="ModalSignup" tabindex="-1" role="dialog">		
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true"> &times; </button>
                <h3 class="modal-title-site text-center"> REGISTER </h3>
            </div>
            <div class="modal-body">

                <?php echo form_open("register", array('id' => 'signupForm', 'class' => 'form-inlin')); ?>
                <div class="form-group reg-username">
                    <div>
                        <?php
                        $data = array(
                            'type' => 'text',
                            'name' => 'full_name_en',
                            'id' => 'full_name',
                            'placeholder' => 'Enter Full Name',
                            'required' => 'required',
                            'class' => 'form-control input'
                        );
                        echo form_input($data);
                        ?>
                    </div>
                </div>
                <div class="form-group reg-email">
                    <div>                        
                        <?php
                        $data = array(
                            'type' => 'email',
                            'name' => 'email',
                            'id' => 'signup_email',
                            'required' => 'required',
                            'placeholder' => 'Enter Email Address',
                            'class' => 'form-control input'
                        );
                        echo form_input($data);
                        ?>
                    </div>
                </div>
                <div class="form-group reg-password">
                    <div>
                        <?php
                        $data = array(
                            'type' => 'password',
                            'name' => 'password',
                            'id' => 'password',
                            'required' => 'required',
                            'placeholder' => 'Password',
                            'min-length' => '8',
                            'max-length' => '12',
                            'pattern' => ".{8,12}",
                            'title' => "Minimum 8 characters and maximum 12 characters",
                            'class' => 'form-control input'
                        );
                        echo form_input($data);
                        ?>
                    </div>
                </div>
                <div class="form-group reg-password">
                    <div>
                        <?php
                        $data = array(
                            'type' => 'password',
                            'name' => 'password_confirm',
                            'id' => 'password_confirm',
                            'required' => 'required',
                            'placeholder' => 'Confirm password',
                            'min-length' => '8',
                            'max-length' => '12',
                            'pattern' => ".{8,12}",
                            'title' => "Minimum 8 characters and maximum 12 characters",
                            'class' => 'form-control input'
                        );
                        echo form_input($data);
                        ?>
                    </div>
                </div>
                <div>
                    <div>
                        <?php echo form_submit('submit', 'REGISTER', array('id' => 'get_started', 'class' => 'btn  btn-block btn-lg btn-primary')); ?>                        
                    </div>
                </div>
                <?php echo form_close(); ?>
            </div>
            <div class="modal-footer">
                <p class="text-center"> 
                    Already member? 
                    <a data-toggle="modal" data-dismiss="modal" href="#ModalLogin">Sign in </a>
                </p>
            </div>
        </div>                
    </div>            
</div>
<div id="header" class="megamenu" role="navigation">
    <div class="navbar-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="logo">
                        <a href="<?php __e(base_url()); ?>">
                            <img src="<?php __e(base_url() . 'uploads/settings/' . $settings->InstituteLogo); ?>" alt="logo"/>
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">                            
                    <div class="search_box">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class=""><span><a href="<?php __menu('page/about-us'); ?>">About us</a> | <a href="<?php __menu('page/contact-us'); ?>">Contact us</a></span></div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12">
                                <form class="navbar-form" role="search" method="get" action="<?php echo base_url('search') ?>">
                                    <div class="input-group add-on">
                                        <input type="text" value="<?php echo $this->input->get('search_key'); ?>" class="form-control" name="search_key" id="srch-term">
                                        <div class="input-group-btn">
                                            <button class="btn btn-default" type="submit">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <div class="header_right">
                        <div class="s_icon social">
                            <ul class="list-inline">
                                <li><a href=""><i class="fa fa-facebook"></i></a></li>
                                <li><a href=""><i class="fa fa-youtube"></i></a></li>
                            </ul>
                        </div>
                        <div class="clearfix"></div>
                        <div class="hotline">Hotline: +8802098210</div>
                        <div class="clearfix"></div>
                        <div class="sign">                            
                            <ul class="userMenu">
                                <?php if ($this->ion_auth->logged_in()) { ?>
                                    <li>
                                        <a href="<?php echo base_url('myaccount'); ?>">
                                            <span class=""> My Account</span> 
                                            <i class="glyphicon glyphicon-user hide visible-xs "></i>
                                        </a>
                                    </li>
                                    <li class="">
                                        <a href="<?php echo base_url('logout'); ?>">Sign out</a>
                                    </li>
                                <?php } else { ?>
                                    <li>
                                        <a href="#" data-toggle="modal" data-target="#ModalLogin"> 
                                            <span class="">Sign In</span>
                                            <i class="glyphicon glyphicon-log-in hide visible-xs hidden-xs"></i>
                                        </a>
                                    </li> 					
                                    <li class="">
                                        <a href="#" data-toggle="modal" data-target="#ModalSignup"> 
                                            Create Account 
                                        </a>
                                    </li>
                                <?php } ?>
								 <li class="sm-cart-menu">
                                        <a href="<?php echo base_url('cart'); ?>" > 
                                            Checkout
                                        </a>
                                 </li>						
								
                            </ul>                            
                        </div>									
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>