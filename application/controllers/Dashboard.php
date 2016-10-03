<?php
if (!defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @property Profile_model $profile_model Profile Model
 * @property Common_model $common_model Common Model
 * @property Settings_model $settings_model Settings Model
 * @property Ion_auth $ion_auth ion_auth
 * @property Admin_model $admin_model admin_model
 */
class Dashboard extends MY_Controller
{

    protected $data;

    public function __construct()
    {    	
        parent::__construct();
        $this->load->model(array("common_model","profile_model","admin_model"));
        $this->load->library('HybridAuthLib');
    }

    public function index()
    {
        if ($this->ion_auth->logged_in()) {
            $this->data['userInformation'] = $this->ion_auth->user()->row();
            //owndebugger($this->data['userInformation']);
        }
        $this->data['loggedinuserinformation'] = $this->basic_information_of_mine($this->data['userInformation']->id);
        $this->data['title'] = "Dashboard";
        $this->data['userid'] = $this->data['userInformation']->id;
        //$this->data['biodata'] = $this->common_model->get_user_single_informations_by_user_id($this->data['userid']);
        $this->data['userinformation'] = $this->basic_information_of_mine($this->data['userid']);
        $this->data['personalinformation'] = $this->settings_model->getPersonalInformation($this->data['userid']);
        

        $this->load->view('layouts/header', $this->data);
        $this->load->view('profile/dashboard', $this->data);
        $this->load->view('layouts/footer', $this->data);
    }

    /* This is modified code */
    public function social_login()
    {
    
    	if ($this->ion_auth->logged_in()) {
    		$this->data['userInformation'] = $this->ion_auth->user()->row();
    	}
    	$this->data['loggedinuserinformation'] = $this->basic_information_of_mine($this->data['userInformation']->id);
    	$this->data['userid'] = $this->data['userInformation']->id;
    	
    	$this->data["facebook_status"] = $this->admin_model->getStoredHybridSession($this->data['userid'], "Facebook");
    	
    	if(!empty($this->data['facebook_status'][0])) {
	    	if($this->data["facebook_status"] != "0") {
	    		$this->data["facebook_profile"] = $this->get_profile("Facebook");
	    		//owndebugger($this->data['facebook_profile']);
	    	}
    	} else {
    		$this->data["facebook_profile"] = 0;
    	}
    	$this->data['title'] = "Social Login";
    
    	$this->load->view('layouts/header', $this->data);
    	$this->load->view('settings/social_login', $this->data);
    	$this->load->view('layouts/footer', $this->data);
    }
    
    
    public function get_profile($provider) {
    	$profile_data = "";
    	$status = $this->input->post("status", true);
    	if($this->ion_auth->logged_in()) {
    		$this->data['userInformation'] = $this->ion_auth->user()->row();
    	}
    	$this->data['userid'] = $this->data['userInformation']->id;
    
    	$this->data['userid'] = $this->data['userInformation']->id;
    	$hybridauth_session_data = $this->admin_model->getStoredHybridSession($this->data['userid'], $provider);
    	$hybridauth_session_total = $this->admin_model->getStoredHybridSessionTotal($this->data['userid'], $provider);
    
    	if(! empty($hybridauth_session_data )) {
    		$this->hybridauthlib->restoreSessionData($hybridauth_session_data[0] ['hybridauth_session']);
    		try {
    			$facebook = $this->hybridauthlib->getAdapter($provider);
    			if($this->hybridauthlib->providerEnabled($provider )) {
    				$service = $this->hybridauthlib->authenticate($provider);
    				if($service->isUserConnected()) {
    					$profile_data = $facebook->getUserProfile();
    					// owndebugger($this->data['user_profile']);
    				} else {
    					show_error('Cannot authenticate user');
    				}
    			} else {
    				show_404($_SERVER ['REQUEST_URI']);
    			}
    		} catch(Exception $e ) {
    			echo "Ooophs, we got an error: " . $e->getMessage();
    		}
    	}
    	return $profile_data;
    }
    public function basic_information_of_mine($id)
    {
        return $this->profile_model->getUsersInformation($id);
    }

    public function personal_information_of_mine($id)
    {
        return $this->profile_model->getPersonalInformation($id);
    }
}
