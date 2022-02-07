type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type PersonRelateToManyInput = {
  readonly create?: ReadonlyArray<PersonCreateInput | null> | null;
  readonly connect?: ReadonlyArray<PersonWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<PersonWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CrimeRelateToManyInput = {
  readonly create?: ReadonlyArray<CrimeCreateInput | null> | null;
  readonly connect?: ReadonlyArray<CrimeWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<CrimeWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type OfferRelateToManyInput = {
  readonly create?: ReadonlyArray<OfferCreateInput | null> | null;
  readonly connect?: ReadonlyArray<OfferWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<OfferWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type RequestRelateToManyInput = {
  readonly create?: ReadonlyArray<RequestCreateInput | null> | null;
  readonly connect?: ReadonlyArray<RequestWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<RequestWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type ExchangeRelateToManyInput = {
  readonly create?: ReadonlyArray<ExchangeCreateInput | null> | null;
  readonly connect?: ReadonlyArray<ExchangeWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<ExchangeWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PictureRelateToOneInput = {
  readonly create?: PictureCreateInput | null;
  readonly connect?: PictureWhereUniqueInput | null;
  readonly disconnect?: PictureWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PersonWhereInput = {
  readonly AND?: ReadonlyArray<PersonWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PersonWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly firstName?: Scalars['String'] | null;
  readonly firstName_not?: Scalars['String'] | null;
  readonly firstName_contains?: Scalars['String'] | null;
  readonly firstName_not_contains?: Scalars['String'] | null;
  readonly firstName_starts_with?: Scalars['String'] | null;
  readonly firstName_not_starts_with?: Scalars['String'] | null;
  readonly firstName_ends_with?: Scalars['String'] | null;
  readonly firstName_not_ends_with?: Scalars['String'] | null;
  readonly firstName_i?: Scalars['String'] | null;
  readonly firstName_not_i?: Scalars['String'] | null;
  readonly firstName_contains_i?: Scalars['String'] | null;
  readonly firstName_not_contains_i?: Scalars['String'] | null;
  readonly firstName_starts_with_i?: Scalars['String'] | null;
  readonly firstName_not_starts_with_i?: Scalars['String'] | null;
  readonly firstName_ends_with_i?: Scalars['String'] | null;
  readonly firstName_not_ends_with_i?: Scalars['String'] | null;
  readonly firstName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly firstName_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly lastName?: Scalars['String'] | null;
  readonly lastName_not?: Scalars['String'] | null;
  readonly lastName_contains?: Scalars['String'] | null;
  readonly lastName_not_contains?: Scalars['String'] | null;
  readonly lastName_starts_with?: Scalars['String'] | null;
  readonly lastName_not_starts_with?: Scalars['String'] | null;
  readonly lastName_ends_with?: Scalars['String'] | null;
  readonly lastName_not_ends_with?: Scalars['String'] | null;
  readonly lastName_i?: Scalars['String'] | null;
  readonly lastName_not_i?: Scalars['String'] | null;
  readonly lastName_contains_i?: Scalars['String'] | null;
  readonly lastName_not_contains_i?: Scalars['String'] | null;
  readonly lastName_starts_with_i?: Scalars['String'] | null;
  readonly lastName_not_starts_with_i?: Scalars['String'] | null;
  readonly lastName_ends_with_i?: Scalars['String'] | null;
  readonly lastName_not_ends_with_i?: Scalars['String'] | null;
  readonly lastName_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly lastName_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly home?: Scalars['String'] | null;
  readonly home_not?: Scalars['String'] | null;
  readonly home_contains?: Scalars['String'] | null;
  readonly home_not_contains?: Scalars['String'] | null;
  readonly home_starts_with?: Scalars['String'] | null;
  readonly home_not_starts_with?: Scalars['String'] | null;
  readonly home_ends_with?: Scalars['String'] | null;
  readonly home_not_ends_with?: Scalars['String'] | null;
  readonly home_i?: Scalars['String'] | null;
  readonly home_not_i?: Scalars['String'] | null;
  readonly home_contains_i?: Scalars['String'] | null;
  readonly home_not_contains_i?: Scalars['String'] | null;
  readonly home_starts_with_i?: Scalars['String'] | null;
  readonly home_not_starts_with_i?: Scalars['String'] | null;
  readonly home_ends_with_i?: Scalars['String'] | null;
  readonly home_not_ends_with_i?: Scalars['String'] | null;
  readonly home_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly home_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly signUpDate?: Scalars['String'] | null;
  readonly signUpDate_not?: Scalars['String'] | null;
  readonly signUpDate_lt?: Scalars['String'] | null;
  readonly signUpDate_lte?: Scalars['String'] | null;
  readonly signUpDate_gt?: Scalars['String'] | null;
  readonly signUpDate_gte?: Scalars['String'] | null;
  readonly signUpDate_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly signUpDate_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly companions_every?: PersonWhereInput | null;
  readonly companions_some?: PersonWhereInput | null;
  readonly companions_none?: PersonWhereInput | null;
  readonly crimes_every?: CrimeWhereInput | null;
  readonly crimes_some?: CrimeWhereInput | null;
  readonly crimes_none?: CrimeWhereInput | null;
  readonly offers_every?: OfferWhereInput | null;
  readonly offers_some?: OfferWhereInput | null;
  readonly offers_none?: OfferWhereInput | null;
  readonly requests_every?: RequestWhereInput | null;
  readonly requests_some?: RequestWhereInput | null;
  readonly requests_none?: RequestWhereInput | null;
  readonly exchange_every?: ExchangeWhereInput | null;
  readonly exchange_some?: ExchangeWhereInput | null;
  readonly exchange_none?: ExchangeWhereInput | null;
  readonly message?: Scalars['String'] | null;
  readonly message_not?: Scalars['String'] | null;
  readonly message_contains?: Scalars['String'] | null;
  readonly message_not_contains?: Scalars['String'] | null;
  readonly message_starts_with?: Scalars['String'] | null;
  readonly message_not_starts_with?: Scalars['String'] | null;
  readonly message_ends_with?: Scalars['String'] | null;
  readonly message_not_ends_with?: Scalars['String'] | null;
  readonly message_i?: Scalars['String'] | null;
  readonly message_not_i?: Scalars['String'] | null;
  readonly message_contains_i?: Scalars['String'] | null;
  readonly message_not_contains_i?: Scalars['String'] | null;
  readonly message_starts_with_i?: Scalars['String'] | null;
  readonly message_not_starts_with_i?: Scalars['String'] | null;
  readonly message_ends_with_i?: Scalars['String'] | null;
  readonly message_not_ends_with_i?: Scalars['String'] | null;
  readonly message_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly message_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly profilePhoto?: PictureWhereInput | null;
  readonly profilePhoto_is_null?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type PersonWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPeopleBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'firstName_ASC'
  | 'firstName_DESC'
  | 'lastName_ASC'
  | 'lastName_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'home_ASC'
  | 'home_DESC'
  | 'signUpDate_ASC'
  | 'signUpDate_DESC'
  | 'companions_ASC'
  | 'companions_DESC'
  | 'crimes_ASC'
  | 'crimes_DESC'
  | 'offers_ASC'
  | 'offers_DESC'
  | 'requests_ASC'
  | 'requests_DESC'
  | 'exchange_ASC'
  | 'exchange_DESC'
  | 'message_ASC'
  | 'message_DESC'
  | 'profilePhoto_ASC'
  | 'profilePhoto_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type PersonUpdateInput = {
  readonly firstName?: Scalars['String'] | null;
  readonly lastName?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly home?: Scalars['String'] | null;
  readonly signUpDate?: Scalars['String'] | null;
  readonly companions?: PersonRelateToManyInput | null;
  readonly crimes?: CrimeRelateToManyInput | null;
  readonly offers?: OfferRelateToManyInput | null;
  readonly requests?: RequestRelateToManyInput | null;
  readonly exchange?: ExchangeRelateToManyInput | null;
  readonly message?: Scalars['String'] | null;
  readonly profilePhoto?: PictureRelateToOneInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type PeopleUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PersonUpdateInput | null;
};

export type PersonCreateInput = {
  readonly firstName?: Scalars['String'] | null;
  readonly lastName?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly home?: Scalars['String'] | null;
  readonly signUpDate?: Scalars['String'] | null;
  readonly companions?: PersonRelateToManyInput | null;
  readonly crimes?: CrimeRelateToManyInput | null;
  readonly offers?: OfferRelateToManyInput | null;
  readonly requests?: RequestRelateToManyInput | null;
  readonly exchange?: ExchangeRelateToManyInput | null;
  readonly message?: Scalars['String'] | null;
  readonly profilePhoto?: PictureRelateToOneInput | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type PeopleCreateInput = {
  readonly data?: PersonCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type PersonRelateToOneInput = {
  readonly create?: PersonCreateInput | null;
  readonly connect?: PersonWhereUniqueInput | null;
  readonly disconnect?: PersonWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CrimeRelateToOneInput = {
  readonly create?: CrimeCreateInput | null;
  readonly connect?: CrimeWhereUniqueInput | null;
  readonly disconnect?: CrimeWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PictureWhereInput = {
  readonly AND?: ReadonlyArray<PictureWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PictureWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly person?: PersonWhereInput | null;
  readonly person_is_null?: Scalars['Boolean'] | null;
  readonly crime?: CrimeWhereInput | null;
  readonly crime_is_null?: Scalars['Boolean'] | null;
};

export type PictureWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPicturesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'person_ASC'
  | 'person_DESC'
  | 'crime_ASC'
  | 'crime_DESC';

export type PictureUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly person?: PersonRelateToOneInput | null;
  readonly crime?: CrimeRelateToOneInput | null;
};

export type PicturesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PictureUpdateInput | null;
};

export type PictureCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly person?: PersonRelateToOneInput | null;
  readonly crime?: CrimeRelateToOneInput | null;
};

export type PicturesCreateInput = {
  readonly data?: PictureCreateInput | null;
};

export type OfferWhereInput = {
  readonly AND?: ReadonlyArray<OfferWhereInput | null> | null;
  readonly OR?: ReadonlyArray<OfferWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly category?: Scalars['String'] | null;
  readonly category_not?: Scalars['String'] | null;
  readonly category_contains?: Scalars['String'] | null;
  readonly category_not_contains?: Scalars['String'] | null;
  readonly category_starts_with?: Scalars['String'] | null;
  readonly category_not_starts_with?: Scalars['String'] | null;
  readonly category_ends_with?: Scalars['String'] | null;
  readonly category_not_ends_with?: Scalars['String'] | null;
  readonly category_i?: Scalars['String'] | null;
  readonly category_not_i?: Scalars['String'] | null;
  readonly category_contains_i?: Scalars['String'] | null;
  readonly category_not_contains_i?: Scalars['String'] | null;
  readonly category_starts_with_i?: Scalars['String'] | null;
  readonly category_not_starts_with_i?: Scalars['String'] | null;
  readonly category_ends_with_i?: Scalars['String'] | null;
  readonly category_not_ends_with_i?: Scalars['String'] | null;
  readonly category_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly category_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly amount?: Scalars['Int'] | null;
  readonly amount_not?: Scalars['Int'] | null;
  readonly amount_lt?: Scalars['Int'] | null;
  readonly amount_lte?: Scalars['Int'] | null;
  readonly amount_gt?: Scalars['Int'] | null;
  readonly amount_gte?: Scalars['Int'] | null;
  readonly amount_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly amount_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly message?: Scalars['String'] | null;
  readonly message_not?: Scalars['String'] | null;
  readonly message_contains?: Scalars['String'] | null;
  readonly message_not_contains?: Scalars['String'] | null;
  readonly message_starts_with?: Scalars['String'] | null;
  readonly message_not_starts_with?: Scalars['String'] | null;
  readonly message_ends_with?: Scalars['String'] | null;
  readonly message_not_ends_with?: Scalars['String'] | null;
  readonly message_i?: Scalars['String'] | null;
  readonly message_not_i?: Scalars['String'] | null;
  readonly message_contains_i?: Scalars['String'] | null;
  readonly message_not_contains_i?: Scalars['String'] | null;
  readonly message_starts_with_i?: Scalars['String'] | null;
  readonly message_not_starts_with_i?: Scalars['String'] | null;
  readonly message_ends_with_i?: Scalars['String'] | null;
  readonly message_not_ends_with_i?: Scalars['String'] | null;
  readonly message_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly message_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly time?: Scalars['String'] | null;
  readonly time_not?: Scalars['String'] | null;
  readonly time_lt?: Scalars['String'] | null;
  readonly time_lte?: Scalars['String'] | null;
  readonly time_gt?: Scalars['String'] | null;
  readonly time_gte?: Scalars['String'] | null;
  readonly time_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly time_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly travelOrigin?: Scalars['String'] | null;
  readonly travelOrigin_not?: Scalars['String'] | null;
  readonly travelOrigin_contains?: Scalars['String'] | null;
  readonly travelOrigin_not_contains?: Scalars['String'] | null;
  readonly travelOrigin_starts_with?: Scalars['String'] | null;
  readonly travelOrigin_not_starts_with?: Scalars['String'] | null;
  readonly travelOrigin_ends_with?: Scalars['String'] | null;
  readonly travelOrigin_not_ends_with?: Scalars['String'] | null;
  readonly travelOrigin_i?: Scalars['String'] | null;
  readonly travelOrigin_not_i?: Scalars['String'] | null;
  readonly travelOrigin_contains_i?: Scalars['String'] | null;
  readonly travelOrigin_not_contains_i?: Scalars['String'] | null;
  readonly travelOrigin_starts_with_i?: Scalars['String'] | null;
  readonly travelOrigin_not_starts_with_i?: Scalars['String'] | null;
  readonly travelOrigin_ends_with_i?: Scalars['String'] | null;
  readonly travelOrigin_not_ends_with_i?: Scalars['String'] | null;
  readonly travelOrigin_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly travelOrigin_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly travelDestination?: Scalars['String'] | null;
  readonly travelDestination_not?: Scalars['String'] | null;
  readonly travelDestination_contains?: Scalars['String'] | null;
  readonly travelDestination_not_contains?: Scalars['String'] | null;
  readonly travelDestination_starts_with?: Scalars['String'] | null;
  readonly travelDestination_not_starts_with?: Scalars['String'] | null;
  readonly travelDestination_ends_with?: Scalars['String'] | null;
  readonly travelDestination_not_ends_with?: Scalars['String'] | null;
  readonly travelDestination_i?: Scalars['String'] | null;
  readonly travelDestination_not_i?: Scalars['String'] | null;
  readonly travelDestination_contains_i?: Scalars['String'] | null;
  readonly travelDestination_not_contains_i?: Scalars['String'] | null;
  readonly travelDestination_starts_with_i?: Scalars['String'] | null;
  readonly travelDestination_not_starts_with_i?: Scalars['String'] | null;
  readonly travelDestination_ends_with_i?: Scalars['String'] | null;
  readonly travelDestination_not_ends_with_i?: Scalars['String'] | null;
  readonly travelDestination_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly travelDestination_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly hostLocation?: Scalars['String'] | null;
  readonly hostLocation_not?: Scalars['String'] | null;
  readonly hostLocation_contains?: Scalars['String'] | null;
  readonly hostLocation_not_contains?: Scalars['String'] | null;
  readonly hostLocation_starts_with?: Scalars['String'] | null;
  readonly hostLocation_not_starts_with?: Scalars['String'] | null;
  readonly hostLocation_ends_with?: Scalars['String'] | null;
  readonly hostLocation_not_ends_with?: Scalars['String'] | null;
  readonly hostLocation_i?: Scalars['String'] | null;
  readonly hostLocation_not_i?: Scalars['String'] | null;
  readonly hostLocation_contains_i?: Scalars['String'] | null;
  readonly hostLocation_not_contains_i?: Scalars['String'] | null;
  readonly hostLocation_starts_with_i?: Scalars['String'] | null;
  readonly hostLocation_not_starts_with_i?: Scalars['String'] | null;
  readonly hostLocation_ends_with_i?: Scalars['String'] | null;
  readonly hostLocation_not_ends_with_i?: Scalars['String'] | null;
  readonly hostLocation_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly hostLocation_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly startDate?: Scalars['String'] | null;
  readonly startDate_not?: Scalars['String'] | null;
  readonly startDate_contains?: Scalars['String'] | null;
  readonly startDate_not_contains?: Scalars['String'] | null;
  readonly startDate_starts_with?: Scalars['String'] | null;
  readonly startDate_not_starts_with?: Scalars['String'] | null;
  readonly startDate_ends_with?: Scalars['String'] | null;
  readonly startDate_not_ends_with?: Scalars['String'] | null;
  readonly startDate_i?: Scalars['String'] | null;
  readonly startDate_not_i?: Scalars['String'] | null;
  readonly startDate_contains_i?: Scalars['String'] | null;
  readonly startDate_not_contains_i?: Scalars['String'] | null;
  readonly startDate_starts_with_i?: Scalars['String'] | null;
  readonly startDate_not_starts_with_i?: Scalars['String'] | null;
  readonly startDate_ends_with_i?: Scalars['String'] | null;
  readonly startDate_not_ends_with_i?: Scalars['String'] | null;
  readonly startDate_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly startDate_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly endDate?: Scalars['String'] | null;
  readonly endDate_not?: Scalars['String'] | null;
  readonly endDate_contains?: Scalars['String'] | null;
  readonly endDate_not_contains?: Scalars['String'] | null;
  readonly endDate_starts_with?: Scalars['String'] | null;
  readonly endDate_not_starts_with?: Scalars['String'] | null;
  readonly endDate_ends_with?: Scalars['String'] | null;
  readonly endDate_not_ends_with?: Scalars['String'] | null;
  readonly endDate_i?: Scalars['String'] | null;
  readonly endDate_not_i?: Scalars['String'] | null;
  readonly endDate_contains_i?: Scalars['String'] | null;
  readonly endDate_not_contains_i?: Scalars['String'] | null;
  readonly endDate_starts_with_i?: Scalars['String'] | null;
  readonly endDate_not_starts_with_i?: Scalars['String'] | null;
  readonly endDate_ends_with_i?: Scalars['String'] | null;
  readonly endDate_not_ends_with_i?: Scalars['String'] | null;
  readonly endDate_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly endDate_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly numberPeople?: Scalars['Int'] | null;
  readonly numberPeople_not?: Scalars['Int'] | null;
  readonly numberPeople_lt?: Scalars['Int'] | null;
  readonly numberPeople_lte?: Scalars['Int'] | null;
  readonly numberPeople_gt?: Scalars['Int'] | null;
  readonly numberPeople_gte?: Scalars['Int'] | null;
  readonly numberPeople_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly numberPeople_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly person?: PersonWhereInput | null;
  readonly person_is_null?: Scalars['Boolean'] | null;
};

export type OfferWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortOffersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'category_ASC'
  | 'category_DESC'
  | 'amount_ASC'
  | 'amount_DESC'
  | 'message_ASC'
  | 'message_DESC'
  | 'time_ASC'
  | 'time_DESC'
  | 'travelOrigin_ASC'
  | 'travelOrigin_DESC'
  | 'travelDestination_ASC'
  | 'travelDestination_DESC'
  | 'hostLocation_ASC'
  | 'hostLocation_DESC'
  | 'startDate_ASC'
  | 'startDate_DESC'
  | 'endDate_ASC'
  | 'endDate_DESC'
  | 'numberPeople_ASC'
  | 'numberPeople_DESC'
  | 'person_ASC'
  | 'person_DESC';

export type OfferUpdateInput = {
  readonly category?: Scalars['String'] | null;
  readonly amount?: Scalars['Int'] | null;
  readonly message?: Scalars['String'] | null;
  readonly time?: Scalars['String'] | null;
  readonly travelOrigin?: Scalars['String'] | null;
  readonly travelDestination?: Scalars['String'] | null;
  readonly hostLocation?: Scalars['String'] | null;
  readonly startDate?: Scalars['String'] | null;
  readonly endDate?: Scalars['String'] | null;
  readonly numberPeople?: Scalars['Int'] | null;
  readonly person?: PersonRelateToOneInput | null;
};

export type OffersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: OfferUpdateInput | null;
};

export type OfferCreateInput = {
  readonly category?: Scalars['String'] | null;
  readonly amount?: Scalars['Int'] | null;
  readonly message?: Scalars['String'] | null;
  readonly time?: Scalars['String'] | null;
  readonly travelOrigin?: Scalars['String'] | null;
  readonly travelDestination?: Scalars['String'] | null;
  readonly hostLocation?: Scalars['String'] | null;
  readonly startDate?: Scalars['String'] | null;
  readonly endDate?: Scalars['String'] | null;
  readonly numberPeople?: Scalars['Int'] | null;
  readonly person?: PersonRelateToOneInput | null;
};

export type OffersCreateInput = {
  readonly data?: OfferCreateInput | null;
};

export type RequestWhereInput = {
  readonly AND?: ReadonlyArray<RequestWhereInput | null> | null;
  readonly OR?: ReadonlyArray<RequestWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly category?: Scalars['String'] | null;
  readonly category_not?: Scalars['String'] | null;
  readonly category_contains?: Scalars['String'] | null;
  readonly category_not_contains?: Scalars['String'] | null;
  readonly category_starts_with?: Scalars['String'] | null;
  readonly category_not_starts_with?: Scalars['String'] | null;
  readonly category_ends_with?: Scalars['String'] | null;
  readonly category_not_ends_with?: Scalars['String'] | null;
  readonly category_i?: Scalars['String'] | null;
  readonly category_not_i?: Scalars['String'] | null;
  readonly category_contains_i?: Scalars['String'] | null;
  readonly category_not_contains_i?: Scalars['String'] | null;
  readonly category_starts_with_i?: Scalars['String'] | null;
  readonly category_not_starts_with_i?: Scalars['String'] | null;
  readonly category_ends_with_i?: Scalars['String'] | null;
  readonly category_not_ends_with_i?: Scalars['String'] | null;
  readonly category_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly category_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly amount?: Scalars['Int'] | null;
  readonly amount_not?: Scalars['Int'] | null;
  readonly amount_lt?: Scalars['Int'] | null;
  readonly amount_lte?: Scalars['Int'] | null;
  readonly amount_gt?: Scalars['Int'] | null;
  readonly amount_gte?: Scalars['Int'] | null;
  readonly amount_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly amount_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly message?: Scalars['String'] | null;
  readonly message_not?: Scalars['String'] | null;
  readonly message_contains?: Scalars['String'] | null;
  readonly message_not_contains?: Scalars['String'] | null;
  readonly message_starts_with?: Scalars['String'] | null;
  readonly message_not_starts_with?: Scalars['String'] | null;
  readonly message_ends_with?: Scalars['String'] | null;
  readonly message_not_ends_with?: Scalars['String'] | null;
  readonly message_i?: Scalars['String'] | null;
  readonly message_not_i?: Scalars['String'] | null;
  readonly message_contains_i?: Scalars['String'] | null;
  readonly message_not_contains_i?: Scalars['String'] | null;
  readonly message_starts_with_i?: Scalars['String'] | null;
  readonly message_not_starts_with_i?: Scalars['String'] | null;
  readonly message_ends_with_i?: Scalars['String'] | null;
  readonly message_not_ends_with_i?: Scalars['String'] | null;
  readonly message_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly message_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly time?: Scalars['String'] | null;
  readonly time_not?: Scalars['String'] | null;
  readonly time_lt?: Scalars['String'] | null;
  readonly time_lte?: Scalars['String'] | null;
  readonly time_gt?: Scalars['String'] | null;
  readonly time_gte?: Scalars['String'] | null;
  readonly time_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly time_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly travelOrigin?: Scalars['String'] | null;
  readonly travelOrigin_not?: Scalars['String'] | null;
  readonly travelOrigin_contains?: Scalars['String'] | null;
  readonly travelOrigin_not_contains?: Scalars['String'] | null;
  readonly travelOrigin_starts_with?: Scalars['String'] | null;
  readonly travelOrigin_not_starts_with?: Scalars['String'] | null;
  readonly travelOrigin_ends_with?: Scalars['String'] | null;
  readonly travelOrigin_not_ends_with?: Scalars['String'] | null;
  readonly travelOrigin_i?: Scalars['String'] | null;
  readonly travelOrigin_not_i?: Scalars['String'] | null;
  readonly travelOrigin_contains_i?: Scalars['String'] | null;
  readonly travelOrigin_not_contains_i?: Scalars['String'] | null;
  readonly travelOrigin_starts_with_i?: Scalars['String'] | null;
  readonly travelOrigin_not_starts_with_i?: Scalars['String'] | null;
  readonly travelOrigin_ends_with_i?: Scalars['String'] | null;
  readonly travelOrigin_not_ends_with_i?: Scalars['String'] | null;
  readonly travelOrigin_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly travelOrigin_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly travelDestination?: Scalars['String'] | null;
  readonly travelDestination_not?: Scalars['String'] | null;
  readonly travelDestination_contains?: Scalars['String'] | null;
  readonly travelDestination_not_contains?: Scalars['String'] | null;
  readonly travelDestination_starts_with?: Scalars['String'] | null;
  readonly travelDestination_not_starts_with?: Scalars['String'] | null;
  readonly travelDestination_ends_with?: Scalars['String'] | null;
  readonly travelDestination_not_ends_with?: Scalars['String'] | null;
  readonly travelDestination_i?: Scalars['String'] | null;
  readonly travelDestination_not_i?: Scalars['String'] | null;
  readonly travelDestination_contains_i?: Scalars['String'] | null;
  readonly travelDestination_not_contains_i?: Scalars['String'] | null;
  readonly travelDestination_starts_with_i?: Scalars['String'] | null;
  readonly travelDestination_not_starts_with_i?: Scalars['String'] | null;
  readonly travelDestination_ends_with_i?: Scalars['String'] | null;
  readonly travelDestination_not_ends_with_i?: Scalars['String'] | null;
  readonly travelDestination_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly travelDestination_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly numberPeople?: Scalars['Int'] | null;
  readonly numberPeople_not?: Scalars['Int'] | null;
  readonly numberPeople_lt?: Scalars['Int'] | null;
  readonly numberPeople_lte?: Scalars['Int'] | null;
  readonly numberPeople_gt?: Scalars['Int'] | null;
  readonly numberPeople_gte?: Scalars['Int'] | null;
  readonly numberPeople_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly numberPeople_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly hostLocation?: Scalars['String'] | null;
  readonly hostLocation_not?: Scalars['String'] | null;
  readonly hostLocation_contains?: Scalars['String'] | null;
  readonly hostLocation_not_contains?: Scalars['String'] | null;
  readonly hostLocation_starts_with?: Scalars['String'] | null;
  readonly hostLocation_not_starts_with?: Scalars['String'] | null;
  readonly hostLocation_ends_with?: Scalars['String'] | null;
  readonly hostLocation_not_ends_with?: Scalars['String'] | null;
  readonly hostLocation_i?: Scalars['String'] | null;
  readonly hostLocation_not_i?: Scalars['String'] | null;
  readonly hostLocation_contains_i?: Scalars['String'] | null;
  readonly hostLocation_not_contains_i?: Scalars['String'] | null;
  readonly hostLocation_starts_with_i?: Scalars['String'] | null;
  readonly hostLocation_not_starts_with_i?: Scalars['String'] | null;
  readonly hostLocation_ends_with_i?: Scalars['String'] | null;
  readonly hostLocation_not_ends_with_i?: Scalars['String'] | null;
  readonly hostLocation_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly hostLocation_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly person?: PersonWhereInput | null;
  readonly person_is_null?: Scalars['Boolean'] | null;
};

export type RequestWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortRequestsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'category_ASC'
  | 'category_DESC'
  | 'amount_ASC'
  | 'amount_DESC'
  | 'message_ASC'
  | 'message_DESC'
  | 'time_ASC'
  | 'time_DESC'
  | 'travelOrigin_ASC'
  | 'travelOrigin_DESC'
  | 'travelDestination_ASC'
  | 'travelDestination_DESC'
  | 'numberPeople_ASC'
  | 'numberPeople_DESC'
  | 'hostLocation_ASC'
  | 'hostLocation_DESC'
  | 'person_ASC'
  | 'person_DESC';

export type RequestUpdateInput = {
  readonly category?: Scalars['String'] | null;
  readonly amount?: Scalars['Int'] | null;
  readonly message?: Scalars['String'] | null;
  readonly time?: Scalars['String'] | null;
  readonly travelOrigin?: Scalars['String'] | null;
  readonly travelDestination?: Scalars['String'] | null;
  readonly numberPeople?: Scalars['Int'] | null;
  readonly hostLocation?: Scalars['String'] | null;
  readonly person?: PersonRelateToOneInput | null;
};

export type RequestsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: RequestUpdateInput | null;
};

export type RequestCreateInput = {
  readonly category?: Scalars['String'] | null;
  readonly amount?: Scalars['Int'] | null;
  readonly message?: Scalars['String'] | null;
  readonly time?: Scalars['String'] | null;
  readonly travelOrigin?: Scalars['String'] | null;
  readonly travelDestination?: Scalars['String'] | null;
  readonly numberPeople?: Scalars['Int'] | null;
  readonly hostLocation?: Scalars['String'] | null;
  readonly person?: PersonRelateToOneInput | null;
};

export type RequestsCreateInput = {
  readonly data?: RequestCreateInput | null;
};

export type ExchangeWhereInput = {
  readonly AND?: ReadonlyArray<ExchangeWhereInput | null> | null;
  readonly OR?: ReadonlyArray<ExchangeWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly type?: Scalars['String'] | null;
  readonly type_not?: Scalars['String'] | null;
  readonly type_contains?: Scalars['String'] | null;
  readonly type_not_contains?: Scalars['String'] | null;
  readonly type_starts_with?: Scalars['String'] | null;
  readonly type_not_starts_with?: Scalars['String'] | null;
  readonly type_ends_with?: Scalars['String'] | null;
  readonly type_not_ends_with?: Scalars['String'] | null;
  readonly type_i?: Scalars['String'] | null;
  readonly type_not_i?: Scalars['String'] | null;
  readonly type_contains_i?: Scalars['String'] | null;
  readonly type_not_contains_i?: Scalars['String'] | null;
  readonly type_starts_with_i?: Scalars['String'] | null;
  readonly type_not_starts_with_i?: Scalars['String'] | null;
  readonly type_ends_with_i?: Scalars['String'] | null;
  readonly type_not_ends_with_i?: Scalars['String'] | null;
  readonly type_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly type_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly subtype?: Scalars['String'] | null;
  readonly subtype_not?: Scalars['String'] | null;
  readonly subtype_contains?: Scalars['String'] | null;
  readonly subtype_not_contains?: Scalars['String'] | null;
  readonly subtype_starts_with?: Scalars['String'] | null;
  readonly subtype_not_starts_with?: Scalars['String'] | null;
  readonly subtype_ends_with?: Scalars['String'] | null;
  readonly subtype_not_ends_with?: Scalars['String'] | null;
  readonly subtype_i?: Scalars['String'] | null;
  readonly subtype_not_i?: Scalars['String'] | null;
  readonly subtype_contains_i?: Scalars['String'] | null;
  readonly subtype_not_contains_i?: Scalars['String'] | null;
  readonly subtype_starts_with_i?: Scalars['String'] | null;
  readonly subtype_not_starts_with_i?: Scalars['String'] | null;
  readonly subtype_ends_with_i?: Scalars['String'] | null;
  readonly subtype_not_ends_with_i?: Scalars['String'] | null;
  readonly subtype_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly subtype_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly amount?: Scalars['Int'] | null;
  readonly amount_not?: Scalars['Int'] | null;
  readonly amount_lt?: Scalars['Int'] | null;
  readonly amount_lte?: Scalars['Int'] | null;
  readonly amount_gt?: Scalars['Int'] | null;
  readonly amount_gte?: Scalars['Int'] | null;
  readonly amount_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly amount_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly message?: Scalars['String'] | null;
  readonly message_not?: Scalars['String'] | null;
  readonly message_contains?: Scalars['String'] | null;
  readonly message_not_contains?: Scalars['String'] | null;
  readonly message_starts_with?: Scalars['String'] | null;
  readonly message_not_starts_with?: Scalars['String'] | null;
  readonly message_ends_with?: Scalars['String'] | null;
  readonly message_not_ends_with?: Scalars['String'] | null;
  readonly message_i?: Scalars['String'] | null;
  readonly message_not_i?: Scalars['String'] | null;
  readonly message_contains_i?: Scalars['String'] | null;
  readonly message_not_contains_i?: Scalars['String'] | null;
  readonly message_starts_with_i?: Scalars['String'] | null;
  readonly message_not_starts_with_i?: Scalars['String'] | null;
  readonly message_ends_with_i?: Scalars['String'] | null;
  readonly message_not_ends_with_i?: Scalars['String'] | null;
  readonly message_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly message_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly time?: Scalars['String'] | null;
  readonly time_not?: Scalars['String'] | null;
  readonly time_lt?: Scalars['String'] | null;
  readonly time_lte?: Scalars['String'] | null;
  readonly time_gt?: Scalars['String'] | null;
  readonly time_gte?: Scalars['String'] | null;
  readonly time_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly time_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly travelStart?: Scalars['String'] | null;
  readonly travelStart_not?: Scalars['String'] | null;
  readonly travelStart_contains?: Scalars['String'] | null;
  readonly travelStart_not_contains?: Scalars['String'] | null;
  readonly travelStart_starts_with?: Scalars['String'] | null;
  readonly travelStart_not_starts_with?: Scalars['String'] | null;
  readonly travelStart_ends_with?: Scalars['String'] | null;
  readonly travelStart_not_ends_with?: Scalars['String'] | null;
  readonly travelStart_i?: Scalars['String'] | null;
  readonly travelStart_not_i?: Scalars['String'] | null;
  readonly travelStart_contains_i?: Scalars['String'] | null;
  readonly travelStart_not_contains_i?: Scalars['String'] | null;
  readonly travelStart_starts_with_i?: Scalars['String'] | null;
  readonly travelStart_not_starts_with_i?: Scalars['String'] | null;
  readonly travelStart_ends_with_i?: Scalars['String'] | null;
  readonly travelStart_not_ends_with_i?: Scalars['String'] | null;
  readonly travelStart_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly travelStart_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly travelEnd?: Scalars['String'] | null;
  readonly travelEnd_not?: Scalars['String'] | null;
  readonly travelEnd_contains?: Scalars['String'] | null;
  readonly travelEnd_not_contains?: Scalars['String'] | null;
  readonly travelEnd_starts_with?: Scalars['String'] | null;
  readonly travelEnd_not_starts_with?: Scalars['String'] | null;
  readonly travelEnd_ends_with?: Scalars['String'] | null;
  readonly travelEnd_not_ends_with?: Scalars['String'] | null;
  readonly travelEnd_i?: Scalars['String'] | null;
  readonly travelEnd_not_i?: Scalars['String'] | null;
  readonly travelEnd_contains_i?: Scalars['String'] | null;
  readonly travelEnd_not_contains_i?: Scalars['String'] | null;
  readonly travelEnd_starts_with_i?: Scalars['String'] | null;
  readonly travelEnd_not_starts_with_i?: Scalars['String'] | null;
  readonly travelEnd_ends_with_i?: Scalars['String'] | null;
  readonly travelEnd_not_ends_with_i?: Scalars['String'] | null;
  readonly travelEnd_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly travelEnd_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly hostLocation?: Scalars['String'] | null;
  readonly hostLocation_not?: Scalars['String'] | null;
  readonly hostLocation_contains?: Scalars['String'] | null;
  readonly hostLocation_not_contains?: Scalars['String'] | null;
  readonly hostLocation_starts_with?: Scalars['String'] | null;
  readonly hostLocation_not_starts_with?: Scalars['String'] | null;
  readonly hostLocation_ends_with?: Scalars['String'] | null;
  readonly hostLocation_not_ends_with?: Scalars['String'] | null;
  readonly hostLocation_i?: Scalars['String'] | null;
  readonly hostLocation_not_i?: Scalars['String'] | null;
  readonly hostLocation_contains_i?: Scalars['String'] | null;
  readonly hostLocation_not_contains_i?: Scalars['String'] | null;
  readonly hostLocation_starts_with_i?: Scalars['String'] | null;
  readonly hostLocation_not_starts_with_i?: Scalars['String'] | null;
  readonly hostLocation_ends_with_i?: Scalars['String'] | null;
  readonly hostLocation_not_ends_with_i?: Scalars['String'] | null;
  readonly hostLocation_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly hostLocation_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly person?: PersonWhereInput | null;
  readonly person_is_null?: Scalars['Boolean'] | null;
};

export type ExchangeWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortExchangesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'type_ASC'
  | 'type_DESC'
  | 'subtype_ASC'
  | 'subtype_DESC'
  | 'amount_ASC'
  | 'amount_DESC'
  | 'message_ASC'
  | 'message_DESC'
  | 'time_ASC'
  | 'time_DESC'
  | 'travelStart_ASC'
  | 'travelStart_DESC'
  | 'travelEnd_ASC'
  | 'travelEnd_DESC'
  | 'hostLocation_ASC'
  | 'hostLocation_DESC'
  | 'person_ASC'
  | 'person_DESC';

export type ExchangeUpdateInput = {
  readonly type?: Scalars['String'] | null;
  readonly subtype?: Scalars['String'] | null;
  readonly amount?: Scalars['Int'] | null;
  readonly message?: Scalars['String'] | null;
  readonly time?: Scalars['String'] | null;
  readonly travelStart?: Scalars['String'] | null;
  readonly travelEnd?: Scalars['String'] | null;
  readonly hostLocation?: Scalars['String'] | null;
  readonly person?: PersonRelateToOneInput | null;
};

export type ExchangesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: ExchangeUpdateInput | null;
};

export type ExchangeCreateInput = {
  readonly type?: Scalars['String'] | null;
  readonly subtype?: Scalars['String'] | null;
  readonly amount?: Scalars['Int'] | null;
  readonly message?: Scalars['String'] | null;
  readonly time?: Scalars['String'] | null;
  readonly travelStart?: Scalars['String'] | null;
  readonly travelEnd?: Scalars['String'] | null;
  readonly hostLocation?: Scalars['String'] | null;
  readonly person?: PersonRelateToOneInput | null;
};

export type ExchangesCreateInput = {
  readonly data?: ExchangeCreateInput | null;
};

export type PictureRelateToManyInput = {
  readonly create?: ReadonlyArray<PictureCreateInput | null> | null;
  readonly connect?: ReadonlyArray<PictureWhereUniqueInput | null> | null;
  readonly disconnect?: ReadonlyArray<PictureWhereUniqueInput | null> | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type CrimeWhereInput = {
  readonly AND?: ReadonlyArray<CrimeWhereInput | null> | null;
  readonly OR?: ReadonlyArray<CrimeWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly category?: Scalars['String'] | null;
  readonly category_not?: Scalars['String'] | null;
  readonly category_contains?: Scalars['String'] | null;
  readonly category_not_contains?: Scalars['String'] | null;
  readonly category_starts_with?: Scalars['String'] | null;
  readonly category_not_starts_with?: Scalars['String'] | null;
  readonly category_ends_with?: Scalars['String'] | null;
  readonly category_not_ends_with?: Scalars['String'] | null;
  readonly category_i?: Scalars['String'] | null;
  readonly category_not_i?: Scalars['String'] | null;
  readonly category_contains_i?: Scalars['String'] | null;
  readonly category_not_contains_i?: Scalars['String'] | null;
  readonly category_starts_with_i?: Scalars['String'] | null;
  readonly category_not_starts_with_i?: Scalars['String'] | null;
  readonly category_ends_with_i?: Scalars['String'] | null;
  readonly category_not_ends_with_i?: Scalars['String'] | null;
  readonly category_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly category_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title?: Scalars['String'] | null;
  readonly title_not?: Scalars['String'] | null;
  readonly title_contains?: Scalars['String'] | null;
  readonly title_not_contains?: Scalars['String'] | null;
  readonly title_starts_with?: Scalars['String'] | null;
  readonly title_not_starts_with?: Scalars['String'] | null;
  readonly title_ends_with?: Scalars['String'] | null;
  readonly title_not_ends_with?: Scalars['String'] | null;
  readonly title_i?: Scalars['String'] | null;
  readonly title_not_i?: Scalars['String'] | null;
  readonly title_contains_i?: Scalars['String'] | null;
  readonly title_not_contains_i?: Scalars['String'] | null;
  readonly title_starts_with_i?: Scalars['String'] | null;
  readonly title_not_starts_with_i?: Scalars['String'] | null;
  readonly title_ends_with_i?: Scalars['String'] | null;
  readonly title_not_ends_with_i?: Scalars['String'] | null;
  readonly title_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly title_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly location?: Scalars['String'] | null;
  readonly location_not?: Scalars['String'] | null;
  readonly location_contains?: Scalars['String'] | null;
  readonly location_not_contains?: Scalars['String'] | null;
  readonly location_starts_with?: Scalars['String'] | null;
  readonly location_not_starts_with?: Scalars['String'] | null;
  readonly location_ends_with?: Scalars['String'] | null;
  readonly location_not_ends_with?: Scalars['String'] | null;
  readonly location_i?: Scalars['String'] | null;
  readonly location_not_i?: Scalars['String'] | null;
  readonly location_contains_i?: Scalars['String'] | null;
  readonly location_not_contains_i?: Scalars['String'] | null;
  readonly location_starts_with_i?: Scalars['String'] | null;
  readonly location_not_starts_with_i?: Scalars['String'] | null;
  readonly location_ends_with_i?: Scalars['String'] | null;
  readonly location_not_ends_with_i?: Scalars['String'] | null;
  readonly location_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly location_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly time?: Scalars['String'] | null;
  readonly time_not?: Scalars['String'] | null;
  readonly time_lt?: Scalars['String'] | null;
  readonly time_lte?: Scalars['String'] | null;
  readonly time_gt?: Scalars['String'] | null;
  readonly time_gte?: Scalars['String'] | null;
  readonly time_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly time_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly witnesses_every?: PersonWhereInput | null;
  readonly witnesses_some?: PersonWhereInput | null;
  readonly witnesses_none?: PersonWhereInput | null;
  readonly description?: Scalars['String'] | null;
  readonly description_not?: Scalars['String'] | null;
  readonly description_contains?: Scalars['String'] | null;
  readonly description_not_contains?: Scalars['String'] | null;
  readonly description_starts_with?: Scalars['String'] | null;
  readonly description_not_starts_with?: Scalars['String'] | null;
  readonly description_ends_with?: Scalars['String'] | null;
  readonly description_not_ends_with?: Scalars['String'] | null;
  readonly description_i?: Scalars['String'] | null;
  readonly description_not_i?: Scalars['String'] | null;
  readonly description_contains_i?: Scalars['String'] | null;
  readonly description_not_contains_i?: Scalars['String'] | null;
  readonly description_starts_with_i?: Scalars['String'] | null;
  readonly description_not_starts_with_i?: Scalars['String'] | null;
  readonly description_ends_with_i?: Scalars['String'] | null;
  readonly description_not_ends_with_i?: Scalars['String'] | null;
  readonly description_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly description_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly person?: PersonWhereInput | null;
  readonly person_is_null?: Scalars['Boolean'] | null;
  readonly evidence_every?: PictureWhereInput | null;
  readonly evidence_some?: PictureWhereInput | null;
  readonly evidence_none?: PictureWhereInput | null;
};

export type CrimeWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortCrimesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'category_ASC'
  | 'category_DESC'
  | 'title_ASC'
  | 'title_DESC'
  | 'location_ASC'
  | 'location_DESC'
  | 'time_ASC'
  | 'time_DESC'
  | 'witnesses_ASC'
  | 'witnesses_DESC'
  | 'description_ASC'
  | 'description_DESC'
  | 'person_ASC'
  | 'person_DESC'
  | 'evidence_ASC'
  | 'evidence_DESC';

export type CrimeUpdateInput = {
  readonly category?: Scalars['String'] | null;
  readonly title?: Scalars['String'] | null;
  readonly location?: Scalars['String'] | null;
  readonly time?: Scalars['String'] | null;
  readonly witnesses?: PersonRelateToManyInput | null;
  readonly description?: Scalars['String'] | null;
  readonly person?: PersonRelateToOneInput | null;
  readonly evidence?: PictureRelateToManyInput | null;
};

export type CrimesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: CrimeUpdateInput | null;
};

export type CrimeCreateInput = {
  readonly category?: Scalars['String'] | null;
  readonly title?: Scalars['String'] | null;
  readonly location?: Scalars['String'] | null;
  readonly time?: Scalars['String'] | null;
  readonly witnesses?: PersonRelateToManyInput | null;
  readonly description?: Scalars['String'] | null;
  readonly person?: PersonRelateToOneInput | null;
  readonly evidence?: PictureRelateToManyInput | null;
};

export type CrimesCreateInput = {
  readonly data?: CrimeCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialPersonInput = {
  readonly firstName?: Scalars['String'] | null;
  readonly lastName?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type PasswordResetRequestErrorCode =
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES';

export type PasswordResetRedemptionErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'TOKEN_NOT_SET'
  | 'TOKEN_MISMATCH'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_REDEEMED';

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type PersonListTypeInfo = {
  key: 'Person';
  fields:
    | 'id'
    | 'firstName'
    | 'lastName'
    | 'email'
    | 'password'
    | 'home'
    | 'signUpDate'
    | 'companions'
    | 'crimes'
    | 'offers'
    | 'requests'
    | 'exchange'
    | 'message'
    | 'profilePhoto'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly firstName?: string | null;
    readonly lastName?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly home?: string | null;
    readonly signUpDate?: Date | null;
    readonly companions?: string | null;
    readonly crimes?: string | null;
    readonly offers?: string | null;
    readonly requests?: string | null;
    readonly exchange?: string | null;
    readonly message?: string | null;
    readonly profilePhoto?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: PersonWhereInput;
    create: PersonCreateInput;
    update: PersonUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PersonWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPeopleBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PersonListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PersonListTypeInfo,
    PersonListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PersonListTypeInfo,
  PersonListTypeInfo['fields']
>;

export type PictureListTypeInfo = {
  key: 'Picture';
  fields: 'id' | 'image' | 'altText' | 'person' | 'crime';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly person?: string | null;
    readonly crime?: string | null;
  };
  inputs: {
    where: PictureWhereInput;
    create: PictureCreateInput;
    update: PictureUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PictureWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPicturesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PictureListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PictureListTypeInfo,
    PictureListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PictureListTypeInfo,
  PictureListTypeInfo['fields']
>;

export type OfferListTypeInfo = {
  key: 'Offer';
  fields:
    | 'id'
    | 'category'
    | 'amount'
    | 'message'
    | 'time'
    | 'travelOrigin'
    | 'travelDestination'
    | 'hostLocation'
    | 'startDate'
    | 'endDate'
    | 'numberPeople'
    | 'person';
  backing: {
    readonly id: string;
    readonly category?: string | null;
    readonly amount?: number | null;
    readonly message?: string | null;
    readonly time?: Date | null;
    readonly travelOrigin?: string | null;
    readonly travelDestination?: string | null;
    readonly hostLocation?: string | null;
    readonly startDate?: string | null;
    readonly endDate?: string | null;
    readonly numberPeople?: number | null;
    readonly person?: string | null;
  };
  inputs: {
    where: OfferWhereInput;
    create: OfferCreateInput;
    update: OfferUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: OfferWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortOffersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type OfferListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    OfferListTypeInfo,
    OfferListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  OfferListTypeInfo,
  OfferListTypeInfo['fields']
>;

export type RequestListTypeInfo = {
  key: 'Request';
  fields:
    | 'id'
    | 'category'
    | 'amount'
    | 'message'
    | 'time'
    | 'travelOrigin'
    | 'travelDestination'
    | 'numberPeople'
    | 'hostLocation'
    | 'person';
  backing: {
    readonly id: string;
    readonly category?: string | null;
    readonly amount?: number | null;
    readonly message?: string | null;
    readonly time?: Date | null;
    readonly travelOrigin?: string | null;
    readonly travelDestination?: string | null;
    readonly numberPeople?: number | null;
    readonly hostLocation?: string | null;
    readonly person?: string | null;
  };
  inputs: {
    where: RequestWhereInput;
    create: RequestCreateInput;
    update: RequestUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: RequestWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortRequestsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type RequestListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    RequestListTypeInfo,
    RequestListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  RequestListTypeInfo,
  RequestListTypeInfo['fields']
>;

export type ExchangeListTypeInfo = {
  key: 'Exchange';
  fields:
    | 'id'
    | 'type'
    | 'subtype'
    | 'amount'
    | 'message'
    | 'time'
    | 'travelStart'
    | 'travelEnd'
    | 'hostLocation'
    | 'person';
  backing: {
    readonly id: string;
    readonly type?: string | null;
    readonly subtype?: string | null;
    readonly amount?: number | null;
    readonly message?: string | null;
    readonly time?: Date | null;
    readonly travelStart?: string | null;
    readonly travelEnd?: string | null;
    readonly hostLocation?: string | null;
    readonly person?: string | null;
  };
  inputs: {
    where: ExchangeWhereInput;
    create: ExchangeCreateInput;
    update: ExchangeUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: ExchangeWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortExchangesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type ExchangeListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    ExchangeListTypeInfo,
    ExchangeListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  ExchangeListTypeInfo,
  ExchangeListTypeInfo['fields']
>;

export type CrimeListTypeInfo = {
  key: 'Crime';
  fields:
    | 'id'
    | 'category'
    | 'title'
    | 'location'
    | 'time'
    | 'witnesses'
    | 'description'
    | 'person'
    | 'evidence';
  backing: {
    readonly id: string;
    readonly category?: string | null;
    readonly title?: string | null;
    readonly location?: string | null;
    readonly time?: Date | null;
    readonly witnesses?: string | null;
    readonly description?: string | null;
    readonly person?: string | null;
    readonly evidence?: string | null;
  };
  inputs: {
    where: CrimeWhereInput;
    create: CrimeCreateInput;
    update: CrimeUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: CrimeWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortCrimesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type CrimeListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    CrimeListTypeInfo,
    CrimeListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  CrimeListTypeInfo,
  CrimeListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly Person: PersonListTypeInfo;
  readonly Picture: PictureListTypeInfo;
  readonly Offer: OfferListTypeInfo;
  readonly Request: RequestListTypeInfo;
  readonly Exchange: ExchangeListTypeInfo;
  readonly Crime: CrimeListTypeInfo;
};
