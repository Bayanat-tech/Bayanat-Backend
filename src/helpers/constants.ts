import * as dotenv from "dotenv";
dotenv.config();

export default {
  TABLE: {
    SEC_LOGIN: "SEC_LOGIN",
    MS_COUNTRY: "MS_COUNTRY",
    MS_DEPARTMENT: "MS_DEPARTMENT",
    MS_TERRITORY: "MS_TERRITORY",
    MS_CURRENCY: "MS_CURRENCY",
    MS_SALESMAN: "MS_SALESMAN",
    MS_SITE: "MS_SITE",
    MS_INDUSTRY_SECTOR: "MS_INDUSTRY_SECTOR",
    MS_PS_FLOW_MASTER: "MS_PS_FLOW_MASTER",
    SEC_ROLE_MASTER: "SEC_ROLE_MASTER",
    MS_PS_COST: "MS_PS_COST",
    MS_STORAGE: "MS_STORAGE_CHARGE",
    MS_ACTIVITY: "MS_ACTIVITY",
    MS_ACTIVITY_BILLING: "MS_ACTIVITY_BILLING",
    MS_PRINCIPAL: "MS_PRINCIPAL",
    MS_PRINCIPAL_CONTACT_DETL: "MS_PRINCIPAL_CONTACT_DETL",
    UPLOADED_FILES_DLTS: "UPLOADED_FILES_DLTS",
    MS_LOCATION: "MS_LOCATION",
    MS_ACTIVITY_UOC: "MS_ACTIVITY_UOC",
<<<<<<< HEAD
    MS_SUPPLIER: "MS_SUPPLIER",
    MS_PRODBRAND: "MS_PRODBRAND",
    MS_PRODGROUP: "MS_PRODGROUP",
    MS_MANUFACTURER: "MS_MANUFACTURER",
=======
    MS_ACTIVITY_GROUP: "MS_ACTIVITY_GROUP",
    MS_PS_PROJECT_MASTER: "MS_PS_PROJECT_MASTER",
    MS_PS_ITEM_MASTER: "MS_PS_ITEM_MASTER",
  },
  VIEW: {
    VW_MS_PRIN_LIST_DATA: "VW_MS_PRIN_LIST_DATA",
>>>>>>> qa
  },

  AUTHENTICATION: {
    APP_SECRET: String(process.env.APP_SECRET),
  },
  MESSAGES: {
    BAD_REQUEST: "Bad Request",
    INTERNAL_SERVER_ERROR: "Internal server error",
    UNAUTHORIZED: "Unauthorized",
    FORBIDDEN: "Forbidden",
    PERMISSION_DENIED: "Permission denied!",
    SOMETHING_WENT_WRONG: "Something went wrong",
    INVALID_TOKEN: "Invalid token",
    TOKEN_EXPIRED: "This token has been expired",
    LAT_LONG_REQUIRED: "Latitude and Longitude are required",
    FILTER_IS_REQUIRED: "Filter is required",
    INVALID_ID: "Invalid ID",
    ALREADY_EXISTS: "ALREADY EXISTS",
    DOES_NOT_EXISTS: "DOES NOT EXISTS",
    CREATED_SUCCESSFULLY: "ADDED SUCCESSFULLY",
    UPDATED_SUCCESSFULLY: "UPDATED SUCCESSFULLY",
    SELECT_AT_LEAST_ONE: "SELECT AT LEAST ONE",
    DELETED_SUCCESSFULLY: "DELETED SUCCESSFULLY",
    COUNTRY_WMS: {
      COUNTRY_ALREADY_EXISTS: "COUNTRY ALREADY EXISTS",
      COUNTRY_DOES_NOT_EXISTS: "COUNTRY DOES NOT EXISTS",
      COUNTRY_CREATED_SUCCESSFULLY: "COUNTRY ADDED SUCCESSFULLY",
      COUNTRY_UPDATED_SUCCESSFULLY: "COUNTRY UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_COUNTRY: "SELECT AT LEAST ONE COUNTRY",
      COUNTRY_DELETED_SUCCESSFULLY: "COUNTRY DELETED SUCCESSFULLY",
    },

    MANUFACTURER_WMS: {
      MANUFACTURER_ALREADY_EXISTS: "MANUFACTURER ALREADY EXISTS",
      MANUFACTURER_DOES_NOT_EXISTS: "MANUFACTURER DOES NOT EXISTS",
      MANUFACTURER_CREATED_SUCCESSFULLY: "MANUFACTURER ADDED SUCCESSFULLY",
      MANUFACTURER_UPDATED_SUCCESSFULLY: "MANUFACTURER UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_MANUFACTURER: "SELECT AT LEAST ONE MANUFACTURER",
      MANUFACTURER_DELETED_SUCCESSFULLY: "MANUFACTURER DELETED SUCCESSFULLY",
    },

    GROUP_WMS: {
      GROUP_ALREADY_EXISTS: "GROUP ALREADY EXISTS",
      GROUP_DOES_NOT_EXISTS: "GROUP DOES NOT EXISTS",
      GROUP_CREATED_SUCCESSFULLY: "GROUP ADDED SUCCESSFULLY",
      GROUP_UPDATED_SUCCESSFULLY: "GROUP UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_GROUP: "SELECT AT LEAST ONE GROUP",
      GROUP_DELETED_SUCCESSFULLY: "GROUP DELETED SUCCESSFULLY",
    },

    BRAND_WMS: {
      BRAND_ALREADY_EXISTS: "BRAND ALREADY EXISTS",
      BRAND_DOES_NOT_EXISTS: "BRAND DOES NOT EXISTS",
      BRAND_CREATED_SUCCESSFULLY: "BRAND ADDED SUCCESSFULLY",
      BRAND_UPDATED_SUCCESSFULLY: "BRAND UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_BRAND: "SELECT AT LEAST ONE BRAND",
      BRAND_DELETED_SUCCESSFULLY: "BRAND DELETED SUCCESSFULLY",
    },

    CURRENCY_WMS: {
      CURRENCY_ALREADY_EXISTS: "CURRENCY ALREADY EXISTS",
      CURRENCY_DOES_NOT_EXISTS: "CURRENCY DOES NOT EXISTS",
      CURRENCY_CREATED_SUCCESSFULLY: "CURRENCY ADDED SUCCESSFULLY",
      CURRENCY_UPDATED_SUCCESSFULLY: "CURRENCY UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_CURRENCY: "SELECT AT LEAST ONE CURRENCY",
      CURRENCY_DELETED_SUCCESSFULLY: "CURRENCY DELETED SUCCESSFULLY",
    },

    SUPPLIER_WMS: {
      SUPPLIER_ALREADY_EXISTS: "SUPPLIER ALREADY EXISTS",
      SUPPLIER_DOES_NOT_EXISTS: "SUPPLIER DOES NOT EXISTS",
      SUPPLIER_CREATED_SUCCESSFULLY: "SUPPLIER ADDED SUCCESSFULLY",
      SUPPLIER_UPDATED_SUCCESSFULLY: "SUPPLIER UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_SUPPLIER: "SELECT AT LEAST ONE SUPPLIER",
      SUPPLIER_DELETED_SUCCESSFULLY: "SUPPLIER DELETED SUCCESSFULLY",
    },

    INDUSTRYSECTOR_WMS: {
      INDUSTRYSECTOR_ALREADY_EXISTS: "INDUSTRYSECTOR ALREADY EXISTS",
      INDUSTRYSECTOR_DOES_NOT_EXISTS: "INDUSTRYSECTOR DOES NOT EXISTS",
      INDUSTRYSECTOR_CREATED_SUCCESSFULLY: "INDUSTRYSECTOR ADDED SUCCESSFULLY",
      INDUSTRYSECTOR_UPDATED_SUCCESSFULLY:
        "INDUSTRYSECTOR UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_INDUSTRYSECTOR: "SELECT AT LEAST ONE INDUSTRYSECTOR",
      INDUSTRYSECTOR_DELETED_SUCCESSFULLY:
        "INDUSTRYSECTOR DELETED SUCCESSFULLY",
    },
    DEPARTMENT_WMS: {
      DEPARTMENT_ALREADY_EXISTS: "DEPARTMENT ALREADY EXISTS",
      DEPARTMENT_DOES_NOT_EXISTS: "DEPARTMENT DOES NOT EXISTS",
      DEPARTMENT_CREATED_SUCCESSFULLY: "DEPARTMENT ADDED SUCCESSFULLY",
      DEPARTMENT_UPDATED_SUCCESSFULLY: "DEPARTMENT UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_DEPARTMENT: "SELECT AT LEAST ONE DEPARTMENT",
      DEPARTMENT_DELETED_SUCCESSFULLY: "DEPARTMENT DELETED SUCCESSFULLY",
    },
    FLOWMASTER_PF: {
      FLOWMASTER_ALREADY_EXISTS: "FLOWMASTER ALREADY EXISTS",
      FLOWMASTER_DOES_NOT_EXISTS: "FLOWMASTER DOES NOT EXISTS",
      FLOWMASTER_CREATED_SUCCESSFULLY: "FLOWMASTER ADDED SUCCESSFULLY",
      FLOWMASTER_UPDATED_SUCCESSFULLY: "FLOWMASTER UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_FLOWMASTER: "SELECT AT LEAST ONE FLOWMASTER",
      FLOWMASTER_DELETED_SUCCESSFULLY: "FLOWMASTER DELETED SUCCESSFULLY",
    },
    ROLEMASTER_WMS: {
      ROLEMASTER_ALREADY_EXISTS: "ROLEMASTER ALREADY EXISTS",
      ROLEMASTER_DOES_NOT_EXISTS: "ROLEMASTER DOES NOT EXISTS",
      ROLEMASTER_CREATED_SUCCESSFULLY: "ROLEMASTER ADDED SUCCESSFULLY",
      ROLEMASTER_UPDATED_SUCCESSFULLY: "ROLEMASTER UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_ROLEMASTER: "SELECT AT LEAST ONE ROLEMASTER",
      ROLEMASTER_DELETED_SUCCESSFULLY: "ROLEMASTER DELETED SUCCESSFULLY",
    },
    SECMASTER_WMS: {
      SECMASTER_ALREADY_EXISTS: "SECMASTER ALREADY EXISTS",
      SECMASTER_DOES_NOT_EXISTS: "SECMASTER DOES NOT EXISTS",
      SECMASTER_CREATED_SUCCESSFULLY: "SECMASTER ADDED SUCCESSFULLY",
      SECMASTER_UPDATED_SUCCESSFULLY: "SECMASTER UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_ROLEMASTER: "SELECT AT LEAST ONE ROLEMASTER",
      SECMASTER_DELETED_SUCCESSFULLY: "SECMASTER DELETED SUCCESSFULLY",
    },
    COSTMASTER_PF: {
      COSTMASTER_ALREADY_EXISTS: "COSTMASTER ALREADY EXISTS",
      COSTMASTER_DOES_NOT_EXISTS: "COSTMASTER DOES NOT EXISTS",
      COSTMASTER_CREATED_SUCCESSFULLY: "COSTMASTER ADDED SUCCESSFULLY",
      COSTMASTER_UPDATED_SUCCESSFULLY: "COSTMASTER UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_COSTMASTER: "SELECT AT LEAST ONE COSTMASTER",
      COSTMASTER_DELETED_SUCCESSFULLY: "COSTMASTER DELETED SUCCESSFULLY",
    },
    
    ITEMMASTER_PF: {
      ITEMMASTER_ALREADY_EXISTS: "COSTMASTER ALREADY EXISTS",
      ITEMMASTER_DOES_NOT_EXISTS: "COSTMASTER DOES NOT EXISTS",
      ITEMMASTER_CREATED_SUCCESSFULLY: "COSTMASTER ADDED SUCCESSFULLY",
      ITEMMASTER_UPDATED_SUCCESSFULLY: "COSTMASTER UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_COSTMASTER: "SELECT AT LEAST ONE COSTMASTER",
      ITEMMASTER_DELETED_SUCCESSFULLY: "COSTMASTER DELETED SUCCESSFULLY",
    },

    LOCATION_WMS: {
      LOCATION_ALREADY_EXISTS: "LOCATION ALREADY EXISTS",
      LOCATION_DOES_NOT_EXISTS: "LOCATION DOES NOT EXISTS",
      LOCATION_CREATED_SUCCESSFULLY: "LOCATION ADDED SUCCESSFULLY",
      LOCATION_UPDATED_SUCCESSFULLY: "LOCATION UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_LOCATION: "SELECT AT LEAST ONE LOCATION",
      LOCATION_DELETED_SUCCESSFULLY: "LOCATION DELETED SUCCESSFULLY",
    },
    ACTIVITY_GROUP_WMS: {
      ACTIVITY_GROUP_ALREADY_EXISTS: "ACTIVITY GROUP ALREADY EXISTS",
      ACTIVITY_GROUP_DOES_NOT_EXISTS: "ACTIVITY GROUP DOES NOT EXISTS",
      ACTIVITY_GROUP_CREATED_SUCCESSFULLY: "ACTIVITY GROUP ADDED SUCCESSFULLY",
      ACTIVITY_GROUP_UPDATED_SUCCESSFULLY:
        "ACTIVITY GROUP UPDATED SUCCESSFULLY",
      ACTIVITY_GROUP_AT_LEAST_ONE_ACTIVITY_GROUP:
        "SELECT AT LEAST ONE ACTIVITY GROUP",
      ACTIVITY_GROUP_DELETED_SUCCESSFULLY:
        "ACTIVITY GROUP DELETED SUCCESSFULLY",
    },
    USER: {
      EMAIL_IS_REQUIRED: "Email is required",
      REQUEST_USER_NOT_FOUND: "Request user not found",
      USER_NOT_FOUND: "User not found",
      PASSWORD_NOT_MATCH: "Password not matched",
      INVALID_PASSWORD: "Invalid password",
      YOU_CAN_NOT_USE_THIS_EMAIL: "You cannot use this email",
      USER_EXIST: "User already exist",
      USER_EXIST_WITH_EMAIL: "User already exists with this email",
      USER_EXIST_WITH_EMAIL_AND_INACTIVATED:
        "User already exists with this email and it's inactivated",
      ESTIMATOR_NOT_FOUND: "Estimator not found",
      FIELD_WORKER_NOT_FOUND: "Field Worker not found",
      PUNCH_NOT_FOUND: "Punch not found",
      CLOCK_IN_NOT_FOUND: "Clock in not found",
      ALREADY_CLOCKED_IN: "Already clocked in",
      ALREADY_CLOCKED_OUT: "Already clocked out",
      REIMBURSED_USER_NOT_FOUND: "Reimbursed user not found",
      EMAIL_NOT_VERIFIED: "Email is not verified",
      EMAIL_ALREADY_VERIFIED: "Email is already verified",
      INVALID_OTP: "Invalid OTP",
    },
    CUSTOMER: {
      CUSTOMER_NOT_FOUND: "Customer not found",
      CUSTOMER_EXIST: "Customer already exist",
    },
    CALENDAR: {
      CALENDAR_NOT_FOUND: "Calendar not found",
    },
    COMPANY: {
      COMPANY_NOT_FOUND: "Company not found",
      SAME_EMAIL_FOR_COMPANY_AND_ADMIN:
        "Email should be the same for company and admin",
    },
  },
  DATABASE: {
    NAME: String(process.env.DATABASE_NAME),
    USER: String(process.env.DATABASE_USERNAME),
    PASSWORD: String(process.env.DATABASE_PASSWORD),
    HOST: String(process.env.DATABASE_HOST),
    DIALECT: String(process.env.DATABASE_DIALECT),
  },
  STATUS_CODES: {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500,
  },

  AWS_S3_CREDENTIALS: {
    ACCESS_KEY: String(process.env.S3_ACCESS_KEY),
    SECRET_ACCESS_KEY: String(process.env.S3_SECRET_ACCESS_KEY),
    S3_BUCKET: String(process.env.S3_BUCKET_NAME),
    REGION: String(process.env.S3_REGION),
    AWS_S3_URL: (file_name: string) => `${process.env.AWS_S3_URL}/${file_name}`,
  },
  }
