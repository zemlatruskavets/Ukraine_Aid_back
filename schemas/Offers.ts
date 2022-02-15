/* 
  *************************************************************************
  *************************************************************************

    NOTE: I'll update this overview later

    NAME
    Exchange.ts

    SUMMARY
    This defines the data that corresponds to exchanges within the 
    app (offers and requests).

    FIELDS
    1.
        1.1 name: subtype
        1.2 required: TRUE
        1.3 datatype: select
        1.4 description: categorizes the type of offer or request
    2.
        2.1 name: amount
        2.2 required: FALSE
        2.3 datatype: float
        2.4 description: if the exchange has monetary value, it is defined
    3. 
        3.1 name: message
        3.2 required: FALSE
        3.3 datatype: text
        3.4 description: a message to include with the offer/request
    4.
        4.1 name: time
        4.2 required: FALSE
        4.3 datatype: timestamp
        4.4 description: time of proposed exchange
    5.
        5.1 name: travelOrigin
        5.2 required: FALSE
        5.3 datatype: text
        5.4 description: starting point of traveller
    6.
        6.1 name: travelDestination
        6.2 required: FALSE
        6.3 datatype: text
        6.4 description: destination of traveller
    7.
        7.1 name: hostLocation
        7.2 required: FALSE
        7.3 datatype: text
        7.4 description: the place where someone is requesting/
                         offering a place to stay
    8.
        8.1 name: numberPeople
        8.2 required: FALSE
        8.3 datatype: integer
        8.4 description: the number of people the donor can accomodate
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

export const Offer = list({
  // access
  // fields
  fields: {
    // 1. category of offer
    category: text(),
    amount: integer(), // 2. monetary amount of offer/request
    message: text(), // 3. optional message to include
    time: timestamp(), // 4. time of proposed exchange
    travelOrigin: text(), // 5. starting location
    travelDestination: text(), // 6. final destination
    hostLocation: text(), // 7. location of host home
    startDate: text(), // 8. start date of hosting
    endDate: text(), // 9. end date of hosting
    numberPeople: integer(), // 8. number of guests/passengers
    // 9. person making the offer
    person: relationship({
      ref: 'Person.offers',
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
      initialColumns: ['category', 'person'],
    },
  },
});
