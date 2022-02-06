/* 
  *************************************************************************
  *************************************************************************

    NAME
    keystone.ts

    SUMMARY
    This file summarizes the backend content and settings.

    FLOW
    1. import libraries and data
    2. define backend parameters
    3. define initial authentication settings
    4. specify backend configuration

  *************************************************************************
  *************************************************************************
*/

/* 
  ---------------------
  1. import statements
  ---------------------
*/

// external libraries
import { createAuth } from '@keystone-next/auth';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';

// datatypes
import { Person } from './schemas/Person';
import { Picture } from './schemas/Picture';
import { Offer } from './schemas/Offers';
import { Request } from './schemas/Requests';
import { Exchange } from './schemas/Exchange';
import { Crime } from './schemas/Crimes';

// config information
import 'dotenv/config';
import { sendPasswordResetEmail } from './lib/mail';

/* 
  ------------------
  2. backend params
  ------------------
*/
const databaseURL = process.env.DATABASE_URL;

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 14, // stay logged in for 14 days
  secret: process.env.COOKIE_SECRET,
};

/* 
  ----------------
  3. initial auth
  ----------------
*/
// define the information required for initial access
const { withAuth } = createAuth({
  listKey: 'Person',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['firstName', 'lastName', 'email', 'password'],
  },
  passwordResetLink: {
    async sendToken(args) {
      // send the email
      await sendPasswordResetEmail(args.token, args.identity);
    },
  },
});

/* 
  ------------------
  4. backend config
  ------------------
*/
export default withAuth(
  config({
    // origin restrictions on loading content
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    // this is the  connector to the database
    db: {
      adapter: 'mongoose',
      url: databaseURL,
    },
    // these are all the datatypes in the app
    lists: createSchema({
      Person,
      Picture,
      Offer,
      Request,
      Exchange,
      Crime,
    }),
    // define who can see the backend UI
    ui: {
      isAccessAllowed: ({ session }) => !!session?.data,
    },
    // information associated with each session
    session: withItemData(statelessSessions(sessionConfig), {
      Person: 'id firstName lastName email', // return this info for each session
    }),
  })
);
