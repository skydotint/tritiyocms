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
class Common extends MX_Controller {

    protected $data = array();
    protected $themename;
    private $status = array("status" => 0, "msg" => NULL);
    private $where = array();
    private $id;
    private $results = array();
    
    public function __construct() {
        parent::__construct();
        $this->load->model(array("common_model", "order_model", "profile_model", "settings_model", "panel_model", "term_model", "product_model", "frontend_model", "shortcodes/photogallery"));
        $this->load->library(array('ion_auth', 'form_validation', 'upload', 'initial', 'cart'));
    }

    public function send_contact_email() {
        $to = 'skydotint@gmail.com';
        $sender_name = $this->input->post('fullname');
        $sender_phone = $this->input->post('phonenumber');
        $sender_email = 'takeitkhan@gmail.com';
        $sender_message = $this->input->post('message');

        $subject = 'Message from ' . (!empty($sender_name) ? $sender_name : ' web form');

        $headers = "From: Regal Furniture\r\n";
        $headers .= "Reply-To: " . strip_tags($sender_email) . "\r\n";
        //$headers .= "CC: ". ADMINEMAIL."\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

        $message = '<html><body>';
        $message .= et_header(COMPANYNAME);
        $content = '<b> ' . (!empty($sender_name) ? $sender_name : $sender_email) . '</b>, contacted through the <span style="">' . COMPANYNAME . ' web form.</span><br/><br/>';
        $message .= et_row($content);
        $con1 = 'Phone number: ' . (!empty($sender_phone) ? $sender_phone : '');
        $message .= et_row($con1);
        $con2 = 'Email Address: ' . (!empty($sender_email) ? $sender_email : '');
        $message .= et_row($con2);
        $message .= et_footer(COMPANYNAME);
        $message .= "</body></html>";

        if (!empty($sender_email)) {
            $sendornot = @mail($to, $subject, $message, $headers);
            if ($sendornot == 1) {
                $this->status['status'] = 1;
                $this->status['msg'] = "Mail sent successfully";
            } else {
                $this->status['status'] = 0;
                $this->status['msg'] = "Mail sent failed";
            }
            echo jsonEncode($this->status);
        } else {
            $this->status['msg'] = 'Please enter email address and try again.';
            echo jsonEncode($this->status);
        }
    }

}

?>