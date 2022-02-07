import { InitPage } from '@keystone-next/auth/pages/InitPage';
import React from 'react';
import { gql } from '@keystone-next/admin-ui/apollo';

const fieldPaths = ['firstName', 'lastName', 'email', 'password'];

export default function Init() {
  return (
    <InitPage
      listKey="Person"
      fieldPaths={fieldPaths}
      showKeystoneSignup={true}
    />
  );
}
