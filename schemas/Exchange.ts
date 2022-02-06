/* 
  *************************************************************************
  *************************************************************************

    NAME
    Exchange.ts

    SUMMARY
    This defines the data that corresponds to exchanges within the 
    app (offers and requests).

    FIELDS
    1. 
        1.1 name: type
        1.2 required: TRUE
        1.3 datatype: select
        1.4 description: categorizes whether exchange is offer or request
    2.
        2.1 name: subtype
        2.2 required: TRUE
        2.3 datatype: select
        2.4 description: categorizes the type of offer or request
    3.
        3.1 name: amount
        3.2 required: FALSE
        3.3 datatype: float
        3.4 description: if the exchange has monetary value, it is defined
    4. 
        4.1 name: message
        4.2 required: FALSE
        4.3 datatype: text
        4.4 description: a message to include with the offer/request
    5.
        5.1 name: time
        5.2 required: FALSE
        5.3 datatype: timestamp
        5.4 description: time of proposed exchange
    6.
        6.1 name: travelStart
        6.2 required: FALSE
        6.3 datatype: text
        6.4 description: starting point of traveller
    7.
        7.1 name: travelEnd
        7.2 required: FALSE
        7.3 datatype: text
        7.4 description: destination of traveller
    8.
        8.1 name: hostLocation
        8.2 required: FALSE
        8.3 datatype: text
        8.4 description: the place where someone is requesting/
                         offering a place to stay
    9.
        9.1 name: person
        9.2 required: TRUE
        9.3 datatype: relationship (to id in Person table)
        9.4 description: the person making the offer or request

  *************************************************************************
  *************************************************************************
*/

import { list } from '@keystone-next/keystone/schema';
import {
  select,
  text,
  integer,
  relationship,
  timestamp,
} from '@keystone-next/fields';

export const Exchange = list({
  // access
  // fields
  fields: {
    // 1. type of exchange
    type: select({
      isRequired: true,
      options: [
        { label: 'Request', value: 'Request' },
        { label: 'Offer', value: 'Offer' },
      ],
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    // 2. category of offer/request
    subtype: select({
      isRequired: true,
      options: [
        { label: 'Travel Expenses', value: 'Travel Expenses' },
        { label: 'Living Expenses', value: 'Living Expenses' },
        { label: 'Transport Offer', value: 'Transport Offer' },
        { label: 'Hosting Offer', value: 'Hosting Offer' },
        { label: 'Other', value: 'Other' },
      ],
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    amount: integer(), // 3. monetary amount of offer/request
    message: text(), // 4. optional message to include
    time: timestamp(), // 5. time of proposed exchange
    travelStart: text(), // 6. starting location
    travelEnd: text(), // 7. final destination
    hostLocation: text(), // 8. location of host home
    // 9. person making the offer/request
    person: relationship({
      ref: 'Person.exchange',
      ui: {
        displayMode: 'cards',
        cardFields: ['firstName', 'lastName', 'email'],
        inlineCreate: { fields: ['firstName', 'lastName', 'email'] },
        inlineEdit: { fields: ['firstName', 'lastName', 'email'] },
      },
    }),
  },
  ui: {
    listView: {
      initialColumns: ['type', 'subtype', 'person'],
    },
  },
});
