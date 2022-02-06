import { list } from '@keystone-next/keystone/schema';
import {
  select,
  text,
  relationship,
  timestamp,
  password,
} from '@keystone-next/fields';

export const Person = list({
  // access
  // fields
  fields: {
    firstName: text({ isRequired: true }),
    lastName: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    home: text(),
    signUpDate: timestamp(),
    companions: relationship({ ref: 'Person', many: true }),
    crimes: relationship({ ref: 'Crime.person', many: true }),
    offers: relationship({ ref: 'Offer.person', many: true }),
    requests: relationship({ ref: 'Request.person', many: true }),
    exchange: relationship({ ref: 'Exchange.person', many: true }),
    message: text(),
    profilePhoto: relationship({
      ref: 'Picture.person',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
    // social media
    // whatsApp: text({ isUnique: true }),
    // viber: text({ isUnique: true }),
    // instagram: text({ isUnique: true }),
    // facebook: text({ isUnique: true }),
    // telegram: text({ isUnique: true }),
  },
  ui: {
    listView: {
      initialColumns: ['email', 'firstName', 'lastName', 'home'],
    },
  },
});
