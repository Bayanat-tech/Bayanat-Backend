import * as dotenv from "dotenv";
dotenv.config();

export default {
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
