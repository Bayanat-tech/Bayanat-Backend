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
  },

  AUTHENTICATION: {
    APP_SECRET: String(process.env.APP_SECRET),
  },
  MESSAGES: {
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
    COUNTRY_WMS: {
      COUNTRY_ALREADY_EXISTS: "COUNTRY ALREADY EXISTS",
      COUNTRY_DOES_NOT_EXISTS: "COUNTRY DOES NOT EXISTS",
      COUNTRY_CREATED_SUCCESSFULLY: "COUNTRY ADDED SUCCESSFULLY",
      COUNTRY_UPDATED_SUCCESSFULLY: "COUNTRY UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_COUNTRY: "SELECT AT LEAST ONE COUNTRY",
      COUNTRY_DELETED_SUCCESSFULLY: "COUNTRY DELETED SUCCESSFULLY",
    },
     DEPARTMENT_WMS: {
      DEPARTMENT_ALREADY_EXISTS: "DEPARTMENT ALREADY EXISTS",
      DEPARTMENT_DOES_NOT_EXISTS: "DEPARTMENT DOES NOT EXISTS",
      DEPARTMENT_CREATED_SUCCESSFULLY: "DEPARTMENT ADDED SUCCESSFULLY",
      DEPARTMENT_UPDATED_SUCCESSFULLY: "DEPARTMENT UPDATED SUCCESSFULLY",
      SELECT_AT_LEAST_ONE_DEPARTMENT: "SELECT AT LEAST ONE DEPARTMENT",
      DEPARTMENT_DELETED_SUCCESSFULLY: "DEPARTMENT DELETED SUCCESSFULLY",
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
  STATUS: {
    USER: {
      DELETED: 0,
      ACTIVE: 1,
      INACTIVE: 2,
      ACTIVITY: {
        OFFLINE: 0,
        ONLINE: 1,
        IDOL: 2,
      },
    },
    CUSTOMER: {
      DELETED: 0,
      ACTIVE: 1,
      INACTIVE: 2,
    },
    COMPANY: { DELETED: 0, ACTIVE: 1, INACTIVE: 2 },
    JOB: {
      DELETED: 0,
      OPEN: 1,
      COMPLETED: 2,
      SUSPEND: 3,
    },
    FOLLOW_UP: {
      DELETED: 0,
      OPEN: 1,
      COMPLETED: 2,
    },
    JOB_EMAIL_AND_SMS: {
      DELETED: 0,
      ACTIVE: 1,
    },
    SCHEDULE_MESSAGE: {
      INCOMPLETE: 0,
      COMPLETED: 1,
      DELETED: 2,
    },
    JOB_CATEGORY: {
      DELETED: 0,
      ACTIVE: 1,
    },
    PUNCH: {
      DELETED: 0,
      ACTIVE: 1,
      INACTIVE: 2,
    },
    MATERIAL: {
      DELETED: 0,
      ACTIVE: 1,
    },
    SERVICE_AND_PRODUCT: {
      DELETED: 0,
      ACTIVE: 1,
    },
    NOTE: {
      DELETED: 0,
      ACTIVE: 1,
    },
    LOG: { DELETED: 0, ACTIVE: 1 },
    SETTING: {
      DELETED: 0,
      ACTIVE: 1,
    },
    PAYROLL: {
      DELETED: 0,
      ACTIVE: 1,
    },
    TWILIO: {
      DELETED: 0,
      ACTIVE: 1,
    },
    TEMPLATE: {
      ACTIVE: 1,
      INACTIVE: 2,
    },
    INVOICES: {
      DELETED: 0,
      ACTIVE: 1,
    },
    STRIPE_SUBSCRIPTION: {
      TRIALING: "trialing",
      ACTIVE: "active",
    },
    AUTO_APPOINTMENT: {
      DELETED: 0,
      ACTIVE: 1,
    },
  },
};
