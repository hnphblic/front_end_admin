export class Constants {
  
  public static readonly DOMAIN ="http://localhost:9292/api/v1";
  // public static readonly DOMAIN ="http://localhost:9292/api/v1";

  // users 
  public static readonly PATH_API_LOGIN = Constants.DOMAIN + "/admin/login";
  public static readonly PATH_API_UPDATE_PASSWORD = Constants.DOMAIN + "/admin/change_password";
  public static readonly PATH_API_VALIDATE_PASSWORD = Constants.DOMAIN + "/admin/check_valid_password";
  public static readonly PATH_API_GET_INFO_FILE_DOWNLOAD = Constants.DOMAIN + "/admin/file_of_user?action=download";
  public static readonly PATH_API_GET_INFO_FILE_UPLOAD = Constants.DOMAIN + "/admin/file_of_user?action=upload";
  public static readonly PATH_API_DETAIL_USER = Constants.DOMAIN + "/admin/admin_info";
  public static readonly PATH_API_HISTORY = Constants.DOMAIN + "/admin/file_history_user";
  public static readonly PATH_API_LIST_FILE_APPROVAL = Constants.DOMAIN + "/admin/list_approval_file";
  public static readonly PATH_API_UPDATE_SWITCH_VIEW = Constants.DOMAIN + "/admin/update_switch_view";
  public static readonly PATH_DETAIL_USER = Constants.DOMAIN + "/admin/admin_info";
  public static readonly PATH_UPDATE_USER_INFO = Constants.DOMAIN + "/admin/update_user";
  public static readonly PATH_API_RESET_PASSWORD = Constants.DOMAIN + "/admin/reset_password";
  public static readonly PATH_REQUEST_NEED_TO_APPROVAL = Constants.DOMAIN + "/admin/request_need_to_approval";
  public static readonly PATH_LIST_FILE_APPROVAL = Constants.DOMAIN + "/admin/list_approval_file";
  public static readonly PATH_API_SESSION_INFO = Constants.DOMAIN + "/users/session_info";
  public static readonly PATH_API_GET_USER_ROLE = Constants.DOMAIN + "/users/get_user_role";
  
  // modem
  public static readonly PATH_API_LOAD_MODEM = Constants.DOMAIN + "/modem/load_modem";
  public static readonly PATH_API_DELETE_MODEM = Constants.DOMAIN + "/modem/delete_modem";
  public static readonly PATH_API_CONNECT_MODEM = Constants.DOMAIN + "/modem/check_modem";
  public static readonly PATH_API_LOAD_PHONE = Constants.DOMAIN + "/modem/load_phone";
  public static readonly PATH_API_TRANSFER = Constants.DOMAIN + "/modem/download";
  
  // Phone
  public static readonly PATH_API_DELETE_PHONE = Constants.DOMAIN + "/file/download";

  // system
  public static readonly PATH_API_SYSTEM_PARAM = Constants.DOMAIN + "/system";
  public static readonly PATH_API_GET_SERVICE_POLICY = Constants.DOMAIN + "/system/service_policy";
  public static readonly PATH_API_GET_INFO_FILE_POLICY = Constants.DOMAIN + "/system/approval_policy";
  public static readonly PATH_API_CHECK_NETWORK = Constants.DOMAIN + "/system/check_network";
  public static readonly PATH_API_MASTER_DIVISION = Constants.DOMAIN + "/system/master_division";
  public static readonly PATH_API_CHECK_CAN_UPLOAD = Constants.DOMAIN + "/admin/can_upload";

  // s
  public static readonly PATH_API_ADD_FORWARD_FILE = Constants.DOMAIN + "/add_file_to_download";
  public static readonly PATH_API_UPDATE_USER_INFO = Constants.DOMAIN + "/update_user_info";
  public static readonly PATH_API_UPDATE_AFTER_REJECT_APPROVE = Constants.DOMAIN + "/update_file_reject_approve";
  public static readonly PATH_API_UPDATE_AFTER_APPROVAL_FILE = Constants.DOMAIN + "/update_file_approval";
  public static readonly PATH_API_SEND_MAIL_SERVICE = Constants.DOMAIN + "/send_mail_service";
  public static readonly PATH_PREVIEW_FILE = Constants.DOMAIN + "/file/preview?file_id=";
  public static readonly PATH_API_SEND_MAIL = Constants.DOMAIN + "/email/noti_upload_info";


  public static readonly NAME_TOKEN = "token";
  public static readonly IP = "ip";
  public static readonly LANGUAGE = "language";
  public static readonly VALUE_IS_INSIDE = "true";
  public static readonly ID = "id";
  public static readonly MESSAGE_SUCCESS = "Success";
  public static readonly MESSAGE_ERROR = "Error";
  public static readonly LANGUAGE_EN = "en";
  public static readonly LANGUAGE_JA = "ja";
  public static readonly CANCLE_EVENT = "cancle";

  public static readonly FILE_PREVIEW_ID = "filePreviewId";

  public static readonly SWITCH_VIEW = "switch_view";

  public static readonly Inside = 0;
  public static readonly Outside = 1;



  // key in i18n
  public static readonly KEY_CONFIG = "CONFIG";
  public static readonly VALUE_TRUE = "TRUE";
  public static readonly VALUE_FALSE = "FALSE";

  public static readonly TITLE_HEADER_EN = "Logging in as ";
  public static readonly TITLE_HEADER_JA = "にログイン中";


  public static readonly LOGIN_JA = "ログイン";
  public static readonly LOGIN_EN = " Login";
  // link redirect
  
  public static readonly LINK_LOGIN = "/login";
  public static readonly LINK_TIME_OUT = "/timeout";
  public static readonly LINK_CHANGE_PASSWORD = "/change-password";
  public static readonly LINK_RESET_PASSWORD = "/reset-password";
  public static readonly LINK_COMPLATE_RESET_PASSWORD = "/complete-reset-password";
  public static readonly LINK_UPLOAD_FILE = "/upload-file";
  public static readonly LINK_MAIN = "/main";
  public static readonly SCREEN_CODE_CHANGE_PASSWORD = 0;
  public static readonly SCREEN_CODE_RESET_PASSWORD = 1;
  public static readonly LINK_DOWNLOAD_FILE = "/list-file-download";
  public static readonly LINK_DETAIL_USER = "/detail-user";
  public static readonly LINK_HISTORY_UPLOAD = "/history-upload";
  public static readonly LINK_HISTORY_APP = "/history";
  public static readonly LINK_LOGOUT = "/logout";
  public static readonly LINK_LIST_APPLY_APPROVAL = "/list-apply-approval";
  public static readonly LINK_LIST_FILE_DOWNLOAD = "/list-file-download";
  public static readonly LINK_PREVIEW = "/preview";
  public static readonly LINK_SYSTEM_ERROR = "/system-error";

  // message 
  public static readonly MSG_COM_0002 = "MESSAGE.MSG_COM_0002";
  public static readonly MSG_MEM_0001 = "MESSAGE.MSG_MEM_0001";
  public static readonly MSG_MEM_0003 = "MESSAGE.MSG_MEM_0003";
  public static readonly MSG_MEM_0004 = "MESSAGE.MSG_MEM_0004";
  public static readonly MSG_MEM_0006 = "MESSAGE.MSG_MEM_0006";
  public static readonly MSG_MEM_0007 = "MESSAGE.MSG_MEM_0007";
  public static readonly MSG_PASSWORD_VALID = "New password is valid";
  public static readonly MSG_COM_0001 = "MESSAGE.MSG_COM_0001";
  public static readonly MSG_MEM_0002 = "MESSAGE.MSG_MEM_0002";
  public static readonly MSG_MEM_0005 = "MESSAGE.MSG_MEM_0005";
  public static readonly MSG_DRAG = "COMMON.DRAG";
  public static readonly MSG_MEM_0012_FIRST = "MESSAGE.MSG_MEM_0012_FIRST";
  public static readonly MSG_MEM_0012_END = "MESSAGE.MSG_MEM_0012_END";

  //error
  public static readonly ERR_COM_0001 = "ERROR.ERR_COM_0001";
  public static readonly ERR_COM_0002 = "ERROR.ERR_COM_0004";
  public static readonly ERR_COM_0003 = "ERROR.ERR_COM_0003";
  public static readonly ERR_COM_0004 = "ERROR.ERR_COM_0004";
  public static readonly ERR_COM_0006 = "ERROR.ERR_COM_0006";
  public static readonly ERR_COM_0008 = "ERROR.ERR_COM_0008";
  public static readonly ERR_COM_0009 = "ERROR.ERR_COM_0009";
  public static readonly ERR_COM_0010 = "ERROR.ERR_COM_0010";
  public static readonly ERR_COM_0005 = "ERROR.ERR_COM_0005";
  public static readonly ERR_MEM_0003 = "ERROR.ERR_MEM_0003";
  public static readonly ERR_MEM_0005 = "ERROR.ERR_MEM_0005";
  public static readonly ERR_MEM_0006 = "ERROR.ERR_MEM_0006";
  public static readonly ERR_MEM_0007 = "ERROR.ERR_MEM_0007";
  public static readonly ERR_MEM_0008 = "ERROR.ERR_MEM_0008";
  public static readonly ERR_MEM_0014 = "ERROR.ERR_MEM_0014";
  public static readonly ERR_MEM_0015 = "ERROR.ERR_MEM_0015";
  public static readonly ERR_MEM_0016 = "ERROR.ERR_MEM_0016";
  public static readonly ERR_MEM_0017 = "ERROR.ERR_MEM_0017";
  public static readonly ERR_MEM_0003_FIRST = "ERROR.ERR_MEM_0003_FIRST";
  public static readonly ERR_MEM_0003_LAST = "ERROR.ERR_MEM_0003_LAST";
  public static readonly ERR_MEM_0005_FIRST = "ERROR.ERR_MEM_0005_FIRST";
  public static readonly ERR_MEM_0005_LAST = "ERROR.ERR_MEM_0005_LAST";
  public static readonly ERR_MEM_0006_FIRST = "ERROR.ERR_MEM_0006_FIRST";
  public static readonly ERR_MEM_0006_LAST = "ERROR.ERR_MEM_0006_LAST";
  public static readonly ERR_MEM_0007_FIRST = "ERROR.ERR_MEM_0007_FIRST";
  public static readonly ERR_MEM_0007_LAST = "ERROR.ERR_MEM_0007_LAST";
  public static readonly ERR_MEM_0008_FIRST = "ERROR.ERR_MEM_0008_FIRST";
  public static readonly ERR_MEM_0008_LAST = "ERROR.ERR_MEM_0008_LAST";
  public static readonly ERR_MEM_0009 = "ERROR.ERR_MEM_0009";
  public static readonly ERR_MEM_0010 = "ERROR.ERR_MEM_0010";
  public static readonly ERR_MEM_0013 = "ERROR.ERR_MEM_0013";
  public static readonly ERR_MEM_0014_FIRST = "ERROR.ERR_MEM_0014_FIRST";
  public static readonly ERR_MEM_0014_LAST = "ERROR.ERR_MEM_0014_LAST";
  public static readonly ERR_MEM_0015_FIRST = "ERROR.ERR_MEM_0015_FIRST";
  public static readonly ERR_MEM_0015_LAST = "ERROR.ERR_MEM_0015_LAST";
  public static readonly ERR_MEM_0016_FIRST = "ERROR.ERR_MEM_0016_FIRST";
  public static readonly ERR_MEM_0016_LAST = "ERROR.ERR_MEM_0016_LAST";
  public static readonly ERR_MEM_0017_FIRST = "ERROR.ERR_MEM_0017_FIRST";
  public static readonly ERR_MEM_0017_LAST = "ERROR.ERR_MEM_0017_LAST";
  public static readonly ERR_MEM_0018 = "ERROR.ERR_MEM_0018";

  public static readonly ERR_VAL_0001 = "ERROR.ERR_VAL_0001";
  public static readonly ERR_VAL_0001_PASSWORD = "ERROR.ERR_VAL_0001_PASSWORD";
  public static readonly ERR_VAL_0001_NEW_PASSWORD = "ERROR.ERR_VAL_0001_NEW_PASSWORD";
  public static readonly ERR_VAL_0001_PASSWORDCONFIRM = "ERROR.ERR_VAL_0001_PASSWORDCONFIRM";
  public static readonly ERR_VAL_0002_PASSWORD = "ERROR.ERR_VAL_0002_PASSWORD";
  public static readonly ERR_VAL_0005_PASSWORD = "ERROR.ERR_VAL_0005_PASSWORD";
  public static readonly ERR_VAL_0003 = "ERROR.ERR_VAL_0003";
  public static readonly ERR_VAL_0004 = "ERROR.ERR_VAL_0004";
  public static readonly ERR_VAL_0005 = "ERROR.ERR_VAL_0005";
  public static readonly ERR_VAL_0001_USERID = "ERROR.ERR_VAL_0001_USERID";
  public static readonly ERR_VAL_0002_USERID = "ERROR.ERR_VAL_0002_USERID";
  public static readonly ERR_VAL_0005_USERID = "ERROR.ERR_VAL_0005_USERID";
  public static readonly ERR_VAL_0001_MAIL = "ERROR.ERR_VAL_0001_MAIL";
  public static readonly ERR_VAL_0002_MAIL = "ERROR.ERR_VAL_0002_MAIL";
  public static readonly ERR_VAL_0005_MAIL = "ERROR.ERR_VAL_0005_MAIL";
  public static readonly ERR_VAL_0001_NAME = "ERROR.ERR_VAL_0001_NAME";
  public static readonly ERR_VAL_0005_NAME = "ERROR.ERR_VAL_0005_NAME";
  public static readonly ERR_VAL_0001_COMMENT = "ERROR.ERR_VAL_0001_COMMENT";
  public static readonly ERR_VAL_0005_COMMENT = "ERROR.ERR_VAL_0005_COMMENT";

  // mark pass screen main in local storage

  public static readonly CAN_GO_TO_UPLOAD = "can_upload";

  public static readonly CAN_FORWARD = "can_forward";
  public static readonly CAN_DOWNLOAD = "can_download";
  public static readonly PASS_UPLOAD = "pass_upload";
  // value page
  public static readonly LIMIT_RECORD_PAGE = 20;
  // sort
  public static readonly SORT_ASC = "asc";
  public static readonly SORT_DESC = "desc";
  
  public static readonly SORT_VALUE_DEFAULT_HISTORY_UPLOAD = 2;
  public static readonly SORT_FIELD_DEFAULT_UPLOAD = "name";
  public static readonly SORT_VALUE_DEFAULT_UPLOAD = 1;
  public static readonly SORT_FIELD_DEFAULT_HISTORY_UPLOAD = "timeUpload";
  public static readonly SORT_FIELD_DEFAULT_HISTORY = "date";
  public static readonly SORT_VALUE_DEFAULT_HISTORY = 2;
  public static readonly SORT_FIELD_DEFAULT_APPLY_APPROVAL = "createDate";
  public static readonly SORT_VALUE_DEFAULT_APPLY_APPROVAL = 1;
  public static readonly SORT_FIELD_DEFAULT_DOWNLOAD = "name";
  public static readonly SORT_VALUE_DEFAULT_DOWNLOAD = 1;

  public static readonly SORT_FIELD_SIZE = "size";
  public static readonly SORT_FIELD_DATE = "date";
  public static readonly SORT_FIELD_FILE_NAME = "name";
  public static readonly SORT_FIELD_SYSTEM_ID = "systemId";
  public static readonly SORT_FIELD_ACTION = "action";
  public static readonly SORT_FIELD_USER_ID_REQUEST = "userIdRequest";
  public static readonly SORT_FIELD_USER_ID_APPROVAL = "userIdApproval";

  public static readonly STATUS_WAIT_APPROVAL_AFTER_SORT = false;
  public static readonly SORT_FIELD_STATUS = "status";

  public static readonly TYPE_APPROVALE_ONE = "one";
  public static readonly TYPE_APPROVALE_ALL = "all";
  //
  public static readonly MAX_NUMBER_LENGTH_MAIL = 128;
  public static readonly MAX_NUMBER_LENGTH_NAME = 128;
  public static readonly MAX_NUMBER_LENGTH_USER_ID = 128;
  public static readonly MAX_NUMBER_LENGTH_COMMENT = 1000;
  public static readonly MAX_NUMBER_PASSWORD = 64;
}
