import React from 'react';

import { HomePage } from '@keystone-next/admin-ui/pages/HomePage';
import { gql } from '@keystone-next/admin-ui/apollo';

export default function Home() {
  return (
    <HomePage
      query={gql`
        query {
          keystone {
            adminMeta {
              lists {
                key
                fields {
                  path
                  createView {
                    fieldMode
                  }
                }
              }
            }
          }
          Person: _allPeopleMeta {
            count
          }
          Picture: _allPicturesMeta {
            count
          }
          Offer: _allOffersMeta {
            count
          }
          Request: _allRequestsMeta {
            count
          }
          Exchange: _allExchangesMeta {
            count
          }
          Crime: _allCrimesMeta {
            count
          }
        }
      `}
    />
  );
}
