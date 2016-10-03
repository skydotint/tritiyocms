<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

class Order_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function place_order(Array $order_master, Array $order_detail_items = array()) {
        $secret_key = random_string('sha1', 32);
        $order_master['secret_key'] = $secret_key;

        $this->db->insert('ecommerce_order_master', $order_master);
        $order_id = $this->db->insert_id();
        $this->db->update('ecommerce_order_master', array('order_id' => $order_id), " id = {$order_id} ", 1);
        foreach ($order_detail_items as $item) {
            $order_details[] = array(
                'id' => NULL,
                'master_id' => $order_id,
                'product_id' => $item['id'],
                'product_name' => $item['name'],
                'product_code' => $item['code'],
                'qty' => $item['qty'],
                'price' => $item['price'],
                'delivery_charge' => $item['delivery_charge'],
                'discount' => $item['discount'],
                'image' => $item['img'],
                'regular_price' => $item['regular_price']
            );
        }
        $this->db->insert_batch('ecommerce_order_details', $order_details);

        return array($order_id, $secret_key);
    }

    public function get_order($order_id, $secret_key) {
        $this->db->where('order_id', $order_id);
        $this->db->where('secret_key', $secret_key);

        if ($master = $this->db->get('ecommerce_order_master')->row_array()) {

//            $sql = <<<SQL
//                    select * from products inner join 
//                            (
//                                SELECT *,( SELECT concat(upload_dir,'/',idno,'.',extension ) 
//                                FROM media_file 
//                                WHERE idno = q.img_id LIMIT 0,1) AS media_url 
//                                FROM (
//                                    SELECT *,(select product_image_id 
//                                    From products 
//                                    where id = ecommerce_order_details.product_id
//                                    ) AS img_id FROM ecommerce_order_details WHERE master_id = {$master['id']} ) AS q) as tt
//ON tt.product_id = products.id;
//SQL;

            $sql = "SELECT *,image as media_url FROM ecommerce_order_details WHERE master_id = {$master['id']}";

            $result = $this->db->query($sql);

            $details = $result->result_array();
            return array(
                'master' => $master,
                'details' => $details
            );
        }
        return FALSE;
    }

    public function get_orders($options) {
        $sql = "SELECT * FROM `ecommerce_order_master` "
                . "INNER JOIN ( SELECT sum(price)as total ,master_id  FROM `ecommerce_order_details` group by master_id )as details "
                . "where ecommerce_order_master.id = details.master_id "
                . (isset($options['order_status']) ? " && order_status = '{$options['order_status']}' " : '')
                . (isset($options['user_id']) ? " && user_id = '{$options['user_id']}' " : '')
                . "GROUP by order_id ORDER BY order_id DESC";

        $x = $this->db->query($sql);

        return $x->result_array();
    }

    public function move_to($order_id, $type) {
       return $this->db->set('order_status',$type)
                ->where('id',$order_id)
                ->update('ecommerce_order_master');
    }

}
