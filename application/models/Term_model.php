<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

/**
 * Class Profile_model
 *
 */
class Term_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function insert($data) {
        $this->db->insert('term', $data);
        return $this->db->insert_id();
    }

    public function get_categories() {

        $result=$this->db->select('*,(SELECT count(*) as total_product from relation WHERE relation_type = 2 && relation_value = term.id) as total_product ')
                        ->from('term')
                        ->where('type', 'category')
                        ->order_by('name', 'asc')
                        ->get()
                        ->result_array();
        return $result;
    }

    public function get_category($cat_id) {        
        return $this->db->select('*')
                        ->from('term')
                        ->where('type', 'category')                        
                        ->where('id', $cat_id)
                        ->get()
                        ->row_array();
    }

}
