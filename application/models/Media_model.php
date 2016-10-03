<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

/**
 * Class Profile_model
 *
 * @property Common_model $common_model Common models navigator
 */
class Media_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    public function insert($data) {
        $this->db->insert('media_file', $data);
        return $this->db->insert_id();
    }

    public function get_media($search_key = '', $last_id = 9999999) {

        $user_id = $this->ion_auth->get_user_id();
        $sql = "SELECT * FROM `media_file` "
                . "WHERE ( "
                . "          `idno` = '{$search_key}' OR "
                . "          `uploaded_by` = '{$search_key}' OR "
                . "           `type` LIKE '%{$search_key}%' ESCAPE '!' OR "
                . "          `file_name` LIKE '%{$search_key}%' ESCAPE '!' "
                . "      ) AND `idno` <= '{$last_id}' "
                . ((!$this->ion_auth->is_admin()) ? " AND uploaded_by = {$user_id} " : '')
                . " ORDER BY idno DESC"
                . "     LIMIT 20;";

        $result = $this->db->query($sql);
        return $result->result_object();
    }

    public function delete($idno) {
        $this->db->where('idno', $idno);

        if ($media = $this->db->get('media_file')->row_object()) {
            $file_path = realpath(BASEPATH . "../{$media->upload_dir}/{$media->idno}.{$media->extension}");
            if (file_exists($file_path)) {
                unlink($file_path);
            }
            $this->db->where('idno', $idno);
            return $this->db->delete('media_file');
        }
        return false;
    }

}
