<div class="row">

    <div class="col-lg-12 col-md-12  col-sm-12">

        <h1 class="section-title-inner"><span><i class="fa fa-lock"></i> Authentication</span></h1>

        <div class="row userInfo">
            <div class="col-xs-12 col-sm-4">
                <h2 class="block-title-2"> Create an account </h2>

               <?php echo form_open("register", array('id' => 'signupForm', 'class' => 'form-inlin')); ?>
                   <div class="form-group">
                        <label for="exampleInputName">Name</label>
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
                    <div class="form-group">
                        <label for="InputEmail1">Email address</label> <?php
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
                <div class="form-group">
                    <label for="password">Password</label>
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
                    <div class="form-group">
                        <label for="InputPassword1">Confirm Password</label>
                         <?php
                        $data = array(
                            'type' => 'password',
                            'name' => 'password_confirm',
                            'id' => 'password_confirm',
                            'required' => 'required',
                            'min-length' => '8',
                            'max-length' => '12',
                            'pattern' => ".{8,12}",
                            'title'=>"Minimum 8 characters and maximum 12 characters",
                            'placeholder' => 'Confirm Password',
                            'class' => 'form-control input'
                        );
                        echo form_input($data);
                        ?>
                    </div>
                      <?php echo form_submit('submit', 'REGISTER', array('id' => 'get_started', 'class' => 'btn  btn-block btn-lg btn-primary')); ?>                        
          
                <?php echo form_close(); ?>         

            </div>


            <div class="col-xs-12 col-sm-4">
                <h2 class="block-title-2"><span>Already registered?</span></h2>


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
                            'title'=>"Minimum 8 characters and maximum 12 characters",
                            'placeholder' => 'Enter Password'
                        );
                        echo form_input($data);
                        ?>
                    </div>
                </div>
                <div class="form-group">
                    <div>
                        <div class="checkbox login-remember">
                            <label>
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
            <div class="col-xs-12 col-sm-4">
                <h2 class="block-title-2"><span>Checkout as Guest</span></h2>

                <p>Don't have an account and you don't want to register? Checkout as a guest instead!</p>
                <a href="<?php echo base_url(); ?>checkout/2" class="btn btn-primary"><i class="fa fa-sign-in"></i> Checkout as
                    Guest</a></div>
        </div>
        <!--/row end-->

    </div>
</div>
<!--/row-->