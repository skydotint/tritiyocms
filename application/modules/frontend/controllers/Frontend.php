<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

/**
 * @property Frontend_model $frontend_model frontend Model
 * @property Profile_model $profile_model Directory Model
 * @property Settings_model $settings_model Settings Model
 * @property Panel_model $panel_model Panel Model
 * @property Payments_model $payments_model Payments Model
 * @property Common_model $common_model Payments Model
 * @property WpShortcodes $WpShortcodes WpShortcodes
 * @property Shortcodes $Shortcodes Shortcodes
 *
 */
class Frontend extends MX_Controller {

    protected $data = array();
    protected $themename;
    private $status = array("status" => 0, "msg" => NULL);
    private $where = array();
    private $id;
    private $results = array();

    public function __construct() {
        parent::__construct();
        $this->load->model(array("common_model", "showrooms_model", "order_model", "profile_model", "settings_model", "panel_model", "term_model", "product_model", "frontend_model", "shortcodes/photogallery"));
        $this->load->library(array('ion_auth', 'form_validation', 'upload', 'initial', 'cart'));

        $this->data['settings'] = $this->get_settings();
        $this->data['blocks'] = $this->get_blocks();
        //owndebugger($this->data['blocks']);
        for ($i = 0; $i <= 35; $i++) {
            $this->data['block' . $i] = $this->search($this->data['blocks'], 'WidgetPosition', $i);
        }
        $this->data['pages'] = $this->get_webpages();
        $this->data['mainmenu'] = $this->get_menu_directly_from_db();
        $this->data['cart']['items'] = $this->cart->contents();
        $this->data['cart']['total'] = array_sum(array_column($this->data['cart']['items'], 'subtotal'));

        $this->data['compare_products'] = (array) $this->session->userdata('compared_list');
    }

    public function update_cart() {
        /*
         * Cart update function works here
         */
        $data = array();

        foreach ($this->input->post('rowid') as $rowid) {
            $qty = $this->input->post("qty_of_{$rowid}");
            $data[] = [
                'qty' => abs($qty? : 0),
                'rowid' => $rowid
            ];
        }
        $this->cart->update($data);
        redirect('cart', 'refresh');
    }

    /**
     * Sending Data to settings page
     */
    public function index() {
        $this->data['slider'] = $this->get_posts_by_category(46, 5);
        $this->data['products'] = $this->product_model->get_products(array('limit' => 4, 'order_field' => 'id', 'order_type' => 'desc'));

        $this->data['stricky_products'] = $this->product_model->get_stricky_product(4);


        $this->data['is_home'] = true;
        $this->load->view('common/header', $this->data);
        $this->load->view('index', $this->data);
        $this->load->view('common/footer', $this->data);
    }

    public function page() {
        if (!empty($this->uri->segment(1))) {
            $pageroute = $this->uri->segment(2);
            $single_page = $this->page_single($pageroute);
            if ($single_page->isSpecial == 1) {
                $str = $single_page->Description;
                $this->data['special_single_page'] = $this->shortcodes->parse($str);
            } else {
                $this->data['single_page'] = $single_page;
            }
            $this->data['title'] = (!empty($single_page->PageTitle) ? $single_page->PageTitle : '');
            $this->load->view('common/header', $this->data);
            $this->load->view('page', $this->data);
            $this->load->view('common/footer', $this->data);
        } else {
            redirect(base_url(), 'refresh');
        }
    }

    public function single_page() {
        if (!empty($this->uri->segment(1))) {
            $pageroute = $this->uri->segment(2);
            $this->data['single_post'] = $this->post_single($pageroute);
//owndebugger($this->data['single_post']);
            $this->data['title'] = (!empty($single_page->Title) ? $single_page->Title : '');
            $this->load->view('common/header', $this->data);
            $this->load->view('single', $this->data);
            $this->load->view('common/footer', $this->data);
        } else {
            redirect(base_url(), 'refresh');
        }
    }

    public function category_product($category_id = 0) {

        if ($category_id) {
            $category_id = (int) $category_id;
            $this->data['term'] = $this->term_model->get_category($category_id);

            $field = empty($this->input->get('order_field')) ? ' price ' : $this->input->get('order_field');
            $shorttype = empty($this->input->get('order_type')) ? ' ASC ' : $this->input->get('order_type');
            $options = array(
                'limit' => 12,
                'max_price' => (int) $this->input->get('max_price'),
                'min_price' => (int) $this->input->get('min_price'),
                'search_key' => $this->input->get('search_key'),
                'cat_id' => $category_id,
                'page_no' => (int) $this->input->get('page_no'),
                'order_field' => $field,
                'order_type' => $shorttype
            );

            $this->data['products'] = $this->product_model->get_products($options, true);
//            if (empty($this->data['products']['items'])) {
//                $this->data['may_like_products'] = $this->product_model->get_products(array('limit' => 12, 'cat_id' => $category_id));
//            }

            $this->data['title'] = (!empty($this->data['term']['name']) ? $this->data['term']['name'] : '');

            $this->load->view('common/header', $this->data);
            $this->load->view('shop/product_list', $this->data);
            $this->load->view('common/footer', $this->data);
        } else {
            redirect(base_url(), 'refresh');
        }
    }

    public function search_product() {

        $options = array(
            'limit' => 12,
            'max_price' => (int) $this->input->get('max_price'),
            'min_price' => (int) $this->input->get('min_price'),
            'search_key' => $this->input->get('search_key'),
            'page_no' => (int) $this->input->get('page_no'),
            'order_field' => $this->input->get('order_field'),
            'order_type' => $this->input->get('order_type')
        );
        if (!empty($this->input->get('cat_id'))) {
            $options['cat_id'] = $this->input->get('cat_id');
        }

        $this->data['products'] = $this->product_model->get_products($options, true);

//        if (empty($this->data['products']['items'])) {
//            $this->data['may_like_products'] = $this->product_model->get_products(array('limit' => 12));
//        }
        $this->data['breadcrumb'] = array(
            array('url' => 'search?search_key=' . urldecode($options['search_key']), 'title' => 'Search')
        );

        $this->load->view('common/header', $this->data);
        $this->load->view('shop/product_list', $this->data);
        $this->load->view('common/footer', $this->data);
    }

    public function single_product($product_id = 0) {

        $this->data['product'] = $this->product_model->get_product($product_id);
        
        

        if ($this->data['product']) {
            $this->data['product']['images'] = $this->product_model->get_product_imgs($this->data['product']['id']);
            $this->data['product']['categories'] = $this->product_model->get_product_categories($this->data['product']['id']);
            $this->data['similar_products'] = $this->product_model->get_products(array('limit' => 7, 'cat_id' => array_column($this->data['product']['categories'], 'id')));
	    $this->data['fb_description'] = (!empty($this->data['product']) ? $this->data['product']['description'] : '');
	    
	    
            /* Remove current product from semilar product list. Lazy way.
              array_walk( $this->data['similar_products'], function($values,$key){
              $is_same = $this->data['product']['id'] == $values['id'];
              if($is_same)
              unset($this->data['similar_products'][$key]);

              });
             */
            $this->data['title'] = (!empty($this->data['product']['name']) ? $this->data['product']['name'] : '');

            $this->load->view('common/header', $this->data);
            $this->load->view('shop/single_product', $this->data);
            $this->load->view('common/footer', $this->data);
        } else {
            redirect(base_url(), 'refresh');
        }
    }

    public function add_to_cart() {

        $product = $this->product_model->get_product($this->input->get('id'));
        if ($product) {

            if ($product['discount'] > 0) {
                $data = array(
                    'id' => $product['id'],
                    'qty' => ($this->input->get('qty') ? abs($this->input->get('qty')) : 1),
                    'price' => $product['price'] - (($product['price'] * $product['discount']) / 100), //current price
                    'regular_price' => $product['price'], //regular price
                    'delivery_charge' => $product['delivery_charge'],
                    'name' => $product['name'],
                    'code' => $product['code'],
                    'img' => $product['product_image'],
                    'discount' => $product['discount'],
                    'sku' => $product['sku']
                );

                // owndebugger($data);
            } else {
                $data = array(
                    'id' => $product['id'],
                    'qty' => ($this->input->get('qty') ? abs($this->input->get('qty')) : 1),
                    'price' => $product['price'], //current price
                    'regular_price' => $product['price'], //regular price
                    'delivery_charge' => $product['delivery_charge'],
                    'name' => $product['name'],
                    'code' => $product['code'],
                    'img' => $product['product_image'],
                    'discount' => $product['discount'],
                    'sku' => $product['sku']
                );
            }

            //owndebugger($data);
            $this->cart->insert($data);
            $this->status['status'] = 1;
            $this->status['msg'] = 'Successfully added to cart.';
        } else {
            $this->status['status'] = 0;
            $this->status['msg'] = 'Faild to add. Relaoad and try again';
        }
        /* New card content */
        $this->status['cart'] = array_values((array) $this->cart->contents());

        header('Content-type:Application/json');
        echo jsonEncode($this->status);
        //redirect('product/' . $product['id'] . '-' . url_title($product['name'], '-', TRUE));
    }

    public function remove_from_cart() {
        $product_id = $this->input->get('id');

        $row_no = array_search($product_id, array_column(array_values($this->cart->contents()), 'id'));

        $data = array(
            'rowid' => array_keys($this->cart->contents())[$row_no],
            'qty' => 0
        );

        $this->cart->update($data);

        $this->status['status'] = 1;
        $this->status['msg'] = 'Successfully removed from cart.';

        /* New card content */
        $this->status['cart'] = array_values((array) $this->cart->contents());

        header('Content-type:Application/json');
        echo jsonEncode($this->status);
    }

    public function remove_from_compare() {


        $compared_list = (array) $this->session->userdata('compared_list');

        //* Easy Way

        $compared_list = (array) $this->session->userdata('compared_list');
        $compared_list = array_diff($compared_list, [$this->input->get('id')]);
        $this->session->set_userdata('compared_list', $compared_list);

        /* / Complex way
          $compared_list = (array) $this->session->userdata('compared_list');

          $compared_list = array_flip($compared_list);
          unset($compared_list[$this->input->get('id')]);
          $compared_list = array_flip($compared_list);
          $this->session->set_userdata('compared_list', $compared_list);
          // */

        $this->session->set_userdata('compared_list', $compared_list);

        $this->status['status'] = 1;
        $this->status['msg'] = 'Successfully removed from compare list.';

        header('Content-type:Application/json');
        echo jsonEncode($this->status);
    }

    public function view_cart() {
        $this->data['title'] = 'Cart';
        $this->load->view('common/header', $this->data);
        $this->load->view('shop/cart', $this->data);
        $this->load->view('common/footer', $this->data);
    }

    public function checkout($step = 0) {

        if ($step == 2) {
            $this->_checkout_step_2();
        } else if ($step == 3) {
            $this->_checkout_step_3();
        } else if ($step == 4) {
            $this->_checkout_step_4();
        } else if ($this->ion_auth->logged_in()) {
            $this->_checkout_step_2();
        } else {
            $this->_checkout_step_1();
        }
    }

    private function _checkout_step_1() {
        $this->data['breadcrumb'] = array(
            array('url' => 'checkout', 'title' => 'Signup')
        );

        $this->load->view('common/header', $this->data);
        $this->load->view('shop/signup', $this->data);
        $this->load->view('common/footer', $this->data);
    }

    private function _checkout_step_2() {
        if ($this->session->userdata('shiping_info')) {
            $this->data['cart']['shiping_info'] = $this->session->userdata('shiping_info');
        } else if ($this->ion_auth->logged_in()) {
            $this->data['userInformation'] = $this->ion_auth->user()->row();
            $this->data['userid'] = $this->data['userInformation']->id;
            $this->data['cart']['shiping_info'] = array(
                'full_name' => $this->data['userInformation']->first_name . ' ' . $this->data['userInformation']->last_name,
                'mobile_number' => $this->data['userInformation']->phone,
                'email' => $this->data['userInformation']->email,
                'shiping_address' => '',
                'additional_information' => ''
            );
        } else {
            $this->data['cart']['shiping_info'] = array(
                'full_name' => '',
                'mobile_number' => '',
                'email' => '',
                'shiping_address' => '',
                'additional_information' => ''
            );
        }
        $this->data['breadcrumb'] = array(
            array('url' => 'cart', 'title' => 'Cart'),
            array('url' => 'checkout/2', 'title' => 'Shiping Address')
        );

        $this->load->view('common/header', $this->data);
        $this->load->view('shop/checkout/step2', $this->data);
        $this->load->view('common/footer', $this->data);
    }

    private function _checkout_step_3() {
        $this->data['payment_info'] = $this->session->userdata('payment_info');


        $this->data['breadcrumb'] = array(
            array('url' => 'cart', 'title' => 'Cart'),
            array('url' => 'checkout/3', 'title' => 'Payment Information')
        );

        $this->load->view('common/header', $this->data);
        $this->load->view('shop/checkout/step3', $this->data);
        $this->load->view('common/footer', $this->data);
    }

    private function _checkout_step_4() {
        $order_status = $this->_order_validity();
        if ($order_status['flag'] == false) {
            redirect($order_status['redirect'], 'refresh');
        }

        $this->data['breadcrumb'] = array(
            array('url' => 'cart', 'title' => 'Cart'),
            array('url' => 'checkout/4', 'title' => 'Order Confirmation')
        );

        $this->load->view('common/header', $this->data);
        $this->load->view('shop/checkout/step4', $this->data);
        $this->load->view('common/footer', $this->data);
    }

    public function update_shiping_address() {
        $this->load->library('form_validation');

        $shiping_info = array(
            'full_name' => $this->input->post('full_name'),
            'mobile_number' => $this->input->post('mobile_number'),
            'email' => $this->input->post('email'),
            'shiping_address' => $this->input->post('shiping_address'),
            'additional_information' => $this->input->post('additional_information')
        );

        $this->session->set_userdata('shiping_info', $shiping_info);

        $this->form_validation->set_rules('full_name', 'Full Name', 'required');
        $this->form_validation->set_rules('mobile_number', 'Password', 'required');
        $this->form_validation->set_rules('shiping_address', 'Email', 'required');


        if ($this->form_validation->run()) {
            redirect('checkout/3', 'refresh');
        } else {
            redirect('checkout/2', 'refresh');
        }
    }

    public function update_payment_info() {
        $active_payment_method = array(
            '1' => 'Cash on delivery',
            '2' => 'Bkash'
        );

        /* Collecting Data from user form */
        $payment = array(
            'payment_method' => $this->input->post('payment_method'),
            'payment_parameter' => $this->input->post('payment_parameter'),
            'payment_term' => $this->input->post('payment_term')
        );

        /* Checking Validity */
        $valid = TRUE;

        $x = $payment['payment_method'];

        if (!in_array($payment['payment_method'], array_keys($active_payment_method))) {
            /* Invalid Payment Method */
            $valid = FALSE;
        } else if ($payment['payment_term'] == null || !in_array($payment['payment_method'], $payment['payment_term'])) {
            /* Term And COndition Not Checcked */
            $valid = FALSE;
        }


        if ($valid) {
            $payment_info = array(
                'payment_method' => $payment['payment_method'],
                'payment_method_name' => $active_payment_method[$payment['payment_method']],
                'payment_parameter' => $payment['payment_parameter'],
                'payment_term' => $payment['payment_method'],
            );
            $this->session->set_userdata('payment_info', $payment_info);
            redirect('checkout/4', 'refresh');
        } else {
            $temp = "<strong>Payment option not selected!</strong> You have to select payment option and have to agree payment term and condition.";
            $this->session->set_flashdata('validation_error', $temp);
            redirect('checkout/3', 'refresh');
        }
    }

    public function confirm_order() {
        /* Invalid Order sor redirected */
        $order_status = $this->_order_validity();
        if ($order_status['flag'] == false) {
            redirect($order_status['redirect'], 'refresh');
        }


        /* Checking User is already loged in */
        if ($this->ion_auth->logged_in()) {
            $this->data['userInformation'] = $this->ion_auth->user()->row();
            $this->data['userid'] = $this->data['userInformation']->id;
        }


        /* Collecting Payment/Shiping/Card Information from session */
        $shiping_info = $this->session->userdata('shiping_info');
        $payment_info = $this->session->userdata('payment_info');
        $cart = $this->data['cart'];

        /* Generating Data for Order Master Table */
        $order_master = array(
            'order_id' => 6,
            'customer_name' => $shiping_info['full_name'],
            'contuct_number' => $shiping_info['mobile_number'],
            'email_address' => $shiping_info['email'],
            'shiping_address' => $shiping_info['shiping_address'],
            'payment_method_name' => $payment_info['payment_method_name'],
            'payment_term_status' => 'checked',
            'payment_parameter' => $payment_info['payment_parameter'],
            'order_status' => 'order_placed',
            'param' => jsonEncode(array()),
            'user_id' => isset($this->data['userid']) ? $this->data['userid'] : 0
        );

        /* Place Order */
        list($order_id, $secret_key) = $this->order_model->place_order($order_master, $this->data['cart']['items']);


        /* Storeing Order Data for View and maile to user */
        $this->data['order'] = array(
            'id' => $order_id,
            'shiping_info' => $shiping_info,
            'payment_info' => $payment_info,
            'cart' => $cart,
        );

        /* Clearing Session Cart/Payment/Shiping Information */
        $this->session->unset_userdata('shiping_info');
        $this->session->unset_userdata('payment_info');
        $this->cart->destroy();

        redirect("view_invoice/{$order_id}/{$secret_key}");
    }

    public function view_invoice($order_id = 0, $secret_key = '') {
        // echo "Order id: $order_id adn Secret_key = $secret_key";
        $this->data['base_url'] = base_url();
        $this->data['order'] = $this->order_model->get_order($order_id, $secret_key);

        if ($this->data['order']) {

            $this->load->view('shop/invoice', $this->data);
        } else {
            redirect(base_url(), 'refresh');
        }
    }

    private function _order_validity() {
        $shiping_info = $this->session->userdata('shiping_info');
        $payment_info = $this->session->userdata('payment_info');
        $cart = $this->data['cart'];
        $return = array(
            'flag' => TRUE,
            'redirect' => ''
        );

        if ($cart['total'] <= 0) {
            $return = array(
                'flag' => FALSE,
                'redirect' => ''
            );
            $temp = "<strong>Invalid.</strong> Please some product to your cart then try to place order.";
            $this->session->set_flashdata('validation_error', $temp);
        } else if (empty($shiping_info) OR empty($shiping_info['full_name']) OR empty($shiping_info['mobile_number']) OR empty($shiping_info['shiping_address'])) {
            $return = array(
                'flag' => FALSE,
                'redirect' => 'checkout/2'
            );
            $temp = "<strong>Required!</strong> You have to fill up valid <strong>Full Name</strong>, <strong>Mobile Number</strong> and <strong>Shipping Address</strong>";
            $this->session->set_flashdata('validation_error', $temp);
        } else if (empty($payment_info) OR empty($payment_info['payment_method']) OR empty($payment_info['payment_term'])) {
            $return = array(
                'flag' => FALSE,
                'redirect' => 'checkout/3'
            );
            $temp = "<strong>Payment option not selected!</strong> You have to select payment option and have to agree payment term and condition.";
            $this->session->set_flashdata('validation_error', $temp);
        }
        return $return;
    }

    public function order_list() {
        if (!$this->ion_auth->logged_in()) {
            redirect(base_url(), 'refresh');
        } else {
            if ($this->ion_auth->logged_in()) {
                $this->data['userInformation'] = $this->ion_auth->user()->row();
            }
        }
    }

    /** Login & Registered * */
    public function my_account() {
        $this->_authenticate();

        $this->data['breadcrumb'] = array(
            array('url' => 'myaccount', 'title' => 'My Account'),
            array('url' => 'myaccount', 'title' => 'Order List')
        );
        $this->data['orders'] = $this->order_model->get_orders(['user_id' => $this->data['userInformation']->id]);

        $this->load->view('common/header', $this->data);
        $this->load->view('userpanel/userdashboard', $this->data);
        $this->load->view('common/footer', $this->data);
    }

    /** My Pesonal Information */
    public function personal_information() {
        $this->_authenticate();

        $this->data['breadcrumb'] = array(
            array('url' => 'myaccount', 'title' => 'My Account'),
            array('url' => 'personal_information', 'title' => 'Personal Information')
        );

        $this->form_validation->set_rules('full_name', 'Full Name', 'trim|required|min_length[3]|max_length[20]');
        $this->form_validation->set_rules('phone', 'Phone', 'trim|required|min_length[6]|max_length[30]');
        $this->form_validation->set_rules('address', 'Address', 'trim|required|min_length[20]');
        $this->form_validation->set_rules('password', 'password', 'trim|required|min_length[5]|max_length[20]');


        if ($this->form_validation->run()) {
            $data = [
                'full_name_en' => $this->input->post('full_name'),
                'phone' => $this->input->post('phone'),
                'address' => $this->input->post('address'),
                'password' => $this->input->post('password')
            ];


            if ($this->ion_auth->update($this->data['userInformation']->id, $data)) {
                $this->data['userInformation'] = $this->ion_auth->user()->row();
            }
        }
        // $this->data['userInformation'];
        $this->load->view('common/header', $this->data);
        $this->load->view('userpanel/personal_information', $this->data);
        $this->load->view('common/footer', $this->data);
    }

    public function showrooms() {
        $this->data['title'] = "Show rooms";
        $this->data['breadcrumb'] = array(
            array('url' => 'regal_showrooms', 'title' => 'Showrooms')
        );
        $this->data['districts'] = $this->common_model->get_districts();
        $this->data['showrooms'] = $this->showrooms_model->get_showrooms();

        return $this->load->view('shop/showrooms', $this->data, true);
        // $this->load->view('common/footer', $this->data);
    }

    public function get_showrooms() {

        header('Content-type:application/json');
        $showrooms = $this->showrooms_model->get_showrooms($this->input->get());
        // owndebugger($showrooms);
        // die();
        echo jsonEncode($showrooms);
    }

    public function register() {
        $this->data['title'] = "Create an user";

        $tables = $this->config->item('tables', 'ion_auth');
        $identity_column = $this->config->item('identity', 'ion_auth');
        $this->data['identity_column'] = $identity_column;

        // validate form input
        if ($identity_column !== 'email') {
            $this->form_validation->set_rules('identity', $this->lang->line('create_user_validation_identity_label'), 'required|is_unique[' . $tables['users'] . '.' . $identity_column . ']');
            $this->form_validation->set_rules('email', $this->lang->line('create_user_validation_email_label'), 'required|valid_email');
        } else {
            $this->form_validation->set_rules('email', $this->lang->line('create_user_validation_email_label'), 'required|valid_email|is_unique[' . $tables['users'] . '.email]');
        }
        $this->form_validation->set_rules('password', $this->lang->line('create_user_validation_password_label'), 'required|min_length[' . $this->config->item('min_password_length', 'ion_auth') . ']|max_length[' . $this->config->item('max_password_length', 'ion_auth') . ']|matches[password_confirm]');
        $this->form_validation->set_rules('password_confirm', $this->lang->line('create_user_validation_password_confirm_label'), 'required');

        if ($this->form_validation->run() == true) {
            $email = strtolower($this->input->post('email'));
            $identity = ($identity_column === 'email') ? $email : $this->input->post('identity');
            $password = $this->input->post('password');

            $additional_data = array(
                'full_name_en' => $this->input->post('full_name_en')
            );
        }
        if ($this->form_validation->run() == true && $this->ion_auth->register($identity, $password, $email, $additional_data)) {
            // check to see if we are creating the user
            // redirect them back to the admin page
            $this->session->set_flashdata('message', 'Your account created successfully. Check your email address to active your account.');
            redirect('authentication', 'checkout');
        } else {
            // display the create user form
            // set the flash data error message if there is one
            $this->data['message'] = (validation_errors() ? validation_errors() : ($this->ion_auth->errors() ? $this->ion_auth->errors() : $this->session->flashdata('message')));

            $this->data['identity'] = array(
                'name' => 'identity',
                'id' => 'identity',
                'type' => 'text',
                'value' => $this->form_validation->set_value('identity'),
            );
            $this->data['email'] = array(
                'name' => 'email',
                'id' => 'email',
                'type' => 'text',
                'value' => $this->form_validation->set_value('email'),
            );
            $this->data['password'] = array(
                'name' => 'password',
                'id' => 'password',
                'type' => 'password',
                'value' => $this->form_validation->set_value('password'),
            );
            $this->data['password_confirm'] = array(
                'name' => 'password_confirm',
                'id' => 'password_confirm',
                'type' => 'password',
                'value' => $this->form_validation->set_value('password_confirm'),
            );

            $this->session->set_flashdata('message', 'Something went wrong. System unable to create your account. Try again or contact with us.');
            redirect('authentication', 'checkout');
        }
    }

    /**
     * @return mixed
     */
    public function get_settings() {
        $row = $this->settings_model->getSystemSettings();
        return $row[0];
    }

    /**
     * @return array
     */
    public function get_blocks() {
        $blocks = $this->settings_model->getBlocks(1);
        return $blocks;
    }

    function search($array, $searchkey, $value) {
        if (is_array($array)) {
            foreach ($array as $key => $block) {
                $blockvar = (array) $block;
                if ($blockvar[$searchkey] == $value)
                    return $block;
            }
        }
        return false;
    }

//public function get_widget($blocks, widgetposition, 0)
    public function get_widget($array, $key, $value) {
        owndebugger($array);
        foreach ($array as $key => $block) {
//owndebugger($block);
            if ($block[$key] == $value) {
                return $key;
            }
        }
        return false;
    }

    /**
     * @param $id
     * @return array|bool
     */
    public function get_block($id) {
        $block = $this->settings_model->getBlock($id);
        return $block;
    }

    /**
     * @return array
     */
    public function get_webpages() {
        return $this->frontend_model->getAllPagesFrontend();
    }

    public function get_webpages_by_id($pageid) {
        return $this->frontend_model->getPageById($pageid);
    }

    public function get_sub_webpages($parent_id) {
        return $this->frontend_model->getAllSubPagesFrontend($parent_id);
    }

    public function get_menu_directly_from_db() {
        $menus = $this->frontend_model->getMainMenuFromDbDirectly();
        if (!empty($menus)) {
            $html = '<ul class="nav navbar-nav">';
            foreach ((array) $menus as $menu) {
                if ($menu->isMegaMenu == 1) {
                    $html .= '<li class="dropdown megamenu-80width ' . (($this->uri->segment(1) == 'category') ? ' active' : '') . '">';
                    $html .= '<a data-toggle="dropdown" class="dropdown-toggle" href="#">';
                    $html .= $menu->PageTitle;
                    $html .= '<b class="caret"></b></a>';
                    $html .= '<ul class="dropdown-menu">';
                    $html .= '<li class="megamenu-content">';
                    $html .= $menu->Description;
                    $html .= '</li>';
                    $html .= '</ul>';
                    $html .= '</li>';
                }

                if (!empty($menu->Childs)) {
                    $html .= '<li class="dropdown "><a href="' . base_url() . 'page/' . $menu->PageRoute . '" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' . $menu->PageTitle . ' <span class="caret"></span></a>';
                } else {
                    if ($menu->isMegaMenu == 0) {
                        $html .= '<li class="' . (($this->uri->segment(1) == 'page') && ($this->uri->segment(2) == $menu->PageRoute) ? ' active' : '') . '"><a href="' . base_url() . 'page/' . $menu->PageRoute . '">' . $menu->PageTitle . '</a></li>';
                    }
                }
                if (!empty($menu->Childs)) {
                    $childs = explode('|', $menu->Childs);
                    $html .= '<ul class="dropdown-menu">';
                    foreach ($childs as $child) {
                        $menu = explode(';', $child);
                        $html .= '<li><a href="' . base_url() . 'page/' . trim($menu[1]) . '">' . $menu[2] . '</a></li>';
                    }
                    $html .= '</ul>';
                }
                if (!empty($menu->Childs)) {
                    $html .= '</li>';
                } else {
                    
                }
                $html .= '</li>';
            }
            $html .= '</ul>';

            return $html;
        }
    }

    public function get_secondary_menu_directly_from_db() {
        $menus = $this->frontend_model->getSecondaryMenuFromDbDirectly();
        if (!empty($menus)) {
            $html = '<nav class="navbar">';
            $html .= '<div id="navbar" class="secondary navbar-collapse collapse">';
            $html .= '<ul class="nav navbar-nav">';

            foreach ((array) $menus as $menu) {
                if (!empty($menu->Childs)) {
                    $html .= '<li class="dropdown"><a href="' . base_url() . 'page/' . trim($menu->PageId) . '/' . $menu->PageRoute . '" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' . $menu->PageTitle . ' <span class="caret"></span></a>';
                } else {
                    $html .= '<li><a href="' . base_url() . 'page/' . trim($menu->PageId) . '/' . $menu->PageRoute . '">' . $menu->PageTitle . '</a></li>';
                }
                if (!empty($menu->Childs)) {
                    $childs = explode('|', $menu->Childs);
                    $html .= '<ul class="dropdown-menu">';
                    foreach ($childs as $child) {
                        $menu = explode(';', $child);
                        $html .= '<li><a href="' . base_url() . 'page/' . trim($menu[0]) . '/' . trim($menu[1]) . '">' . $menu[2] . '</a></li>';
                    }
                    $html .= '</ul>';
                }
                if (!empty($menu->Childs)) {
                    $html .= '</li>';
                } else {
                    
                }
                $html .= '</li>';
            }
            $html .= '</ul></div></nav>';

            return $html;
        }
    }

    public function get_all_posts_by_cat_id($id) {
        return $this->settings_model->getAllPostsByCatId($id);
    }

    public function get_photos_by_cat_id_and_limits() {
        return $this->settings_model->getPhotosByCatIdAndLimit();
    }

    public function page_single($pageroute) {
        $pageroute = (!empty($pageroute) ? $pageroute : $this->uri->segment(2));
        $return = $this->frontend_model->getPageByRoute($pageroute);
        if (isset($return[0]))
            return $return[0];
        else
            redirect(base_url());
    }

    public function post_single($postid) {
        $postid = (isset($postid) ? $postid : $_GET['post_id']);
        $return = $this->frontend_model->getPostByRoute($postid);
        if (isset($return[0]))
            return $return[0];
        else
            redirect(base_url());
    }

    public function get_applicant_if_exists($id) {
        return $this->profile_model->getPersonalInformation($id);
    }

    public function get_posts_by_category($id, $limit = NULL) {
        return $this->frontend_model->getAllPostsByCategoryId($id, $limit);
    }

    public function get_posts_with_limit() {
        return $this->frontend_model->getAllPostsFronts();
    }

    public function get_posts_by_cat($id, $limit = NULL) {
        return $this->frontend_model->getAllPostsByCatId($id, $limit);
    }

    private function _authenticate() {
        if (!$this->ion_auth->logged_in()) {
            redirect('signup', 'refresh');
        }
        $this->data['userInformation'] = $this->ion_auth->user()->row();
        $this->data['userid'] = $this->data['userInformation']->id;
    }

    public function products_html() {
        $options = array(
            'limit' => 12,
            'max_price' => (int) $this->input->get('max_price'),
            'min_price' => (int) $this->input->get('min_price'),
            'search_key' => $this->input->get('search_key'),
            'cat_id' => (int) $this->input->get('cat_id'),
            'page_no' => (int) $this->input->get('page_no'),
            'order_field' => $this->input->get('order_field'),
            'order_type' => $this->input->get('order_type')
        );


        $this->data['products'] = $this->product_model->get_products($options, true);
        $this->data['products']['term'] = $this->term_model->get_category($options['cat_id']);

//        if (empty($this->data['products']['items'])) {
//            $this->data['may_like_products'] = $this->product_model->get_products(array('limit' => 12));
//        }

        $json = (object) array(
                    'term' => $this->data['products']['term'],
                    'product_list_html' => $this->load->view('shop/product_list_html', $this->data, true),
                    'product_pagination_html' => $this->load->view('shop/product_pagination_html', $this->data, true)
        );

        header('Content-type:application/json');
        echo json_encode($json);
    }

    public function add_to_compare() {
        /* Adding Item to data */
        $this->data['compare_products'][] = $this->input->get('product_id');

        /* Setting Data */
        $this->session->set_userdata('compared_list', array_unique($this->data['compare_products']));

        /* Return status */
        header('Content-type: application/json');
        echo jsonEncode([
            'msg' => ' Your product added to compare list.',
            'status' => 1,
            'compare_products' => $this->data['compare_products']
        ]);
    }

    public function compare_products() {
        $this->data['breadcrumb'] = array(
            array('url' => 'compare', 'title' => 'Compare')
        );

        $compared_list = array_reverse($this->data['compare_products']);


        $i = 0;
        $this->data['products'] = array();
        foreach ($compared_list as $product_id) {
            if ($i++ >= 3)
                break;
            $this->data['products'][] = $this->product_model->get_product($product_id);
        }

        $this->load->view('common/header', $this->data);
        $this->load->view('shop/compare_products', $this->data);
        $this->load->view('common/footer', $this->data);
    }

    public function download_pdf($order_id = 66, $secret_key = '1764ac8cefca9f1473f6d9d8d79ab72ab16375bb') {
        $this->data['order'] = $this->order_model->get_order($order_id, $secret_key);
        $this->data['base_url'] = base_url();
        $x = $this->load->view('shop/invoice', $this->data, true);



        require_once APPPATH . 'third_party/dompdf/vendor/autoload.php';
        $dompdf = new \Dompdf\Dompdf();
        $dompdf->loadHtml($x);
        $dompdf->setPaper('A4', 'landscape');
        $dompdf->render();
        $dompdf->stream();
    }

}

?>