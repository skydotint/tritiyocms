<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Order extends CI_Controller {

    public function __construct() {
        parent::__construct();
        if (!$this->ion_auth->logged_in()) {
            redirect(base_url() . 'auth/login', 'refresh');
        }
        $this->load->model('order_model');
        $this->data['userInformation'] = $this->ion_auth->user()->row();
        $this->data['userid'] = $this->data['userInformation']->id;
    }
    
    
    public function order_list($type = 'order_placed') {
        $data = ($type=='all')?[]:['order_status' => $type];
        $this->data['orders'] = $this->order_model->get_orders($data);
        $this->data['type'] = $type;
        $this->data['title'] = "Order Manegment";
        $this->load->view('layouts/header', $this->data);
        $this->load->view('order/list', $this->data);
        $this->load->view('layouts/footer', $this->data);
    }

    public function move_to($order_id, $type) {
        if ($this->ion_auth->is_admin())
            $this->order_model->move_to($order_id, $type);
        else
            redirect(base_url(), 'refresh');
    }

}
