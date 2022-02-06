import { list } from '@keystone-next/keystone/schema';
import { text, relationship, timestamp } from '@keystone-next/fields';

export const Crime = list({
  // access
  // fields
  fields: {
    category: text(),
    title: text({ isRequired: true }),
    location: text({ isRequired: true }),
    time: timestamp({ isRequired: true }),
    witnesses: relationship({ ref: 'Person', many: true }),
    description: text(),
    person: relationship({ ref: 'Person.crimes' }),
    evidence: relationship({
      ref: 'Picture.crime',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'altText'],
        inlineCreate: { fields: ['image', 'altText'] },
        inlineEdit: { fields: ['image', 'altText'] },
      },
    }),
  },
  ui: {
    listView: {
      initialColumns: ['title', 'location', 'time'],
    },
  },
});
