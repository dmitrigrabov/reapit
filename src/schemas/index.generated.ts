import { z } from 'zod'

export const httpStatusCode = z.number().int()
/** Model for exposing error details to API consumers */
export const apiErrorModel = z.object({
  statusCode: z.number().int().optional(),
  /** The date and time that this error event occurred */
  dateTime: z.string().optional(),
  /** The detailed information regarding this error event */
  description: z.string().optional()
})
export const linkModel = z.object({ href: z.string().optional() })
/** Represents an unmapped requirement type */
export const unmappedRequirementModel = z.object({
  /** The type of unmapped requirement */ type: z.string().optional(),
  /** The value associated to the unmapped type */ value: z.string().optional()
})
/** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
export const applicantLeaseRemaining = z.object({
  /** The minimum number of years that must remain on the lease of a leasehold property */
  min: z.number().int().optional(),
  /** The maximum number of years that must remain on the lease of a leasehold property */
  max: z.number().int().optional()
})
/** The details specific to applicants with a marketingMode of buying */
export const applicantBuyingModel = z.object({
  /** The lower bound of the applicant's budget */
  priceFrom: z.number().int().optional(),
  /** The upper bound of the applicant's budget */
  priceTo: z.number().int().optional(),
  /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).optional(),
  /** The identifier of the applicant's buying reason */
  reasonId: z.string().optional(),
  /** The identifier of the applicant's selling position */
  positionId: z.string().optional(),
  /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
  tenure: z.array(z.string()).optional(),
  /** The date when the applicant's current mortgage expires/is due for renewal */
  mortgageExpiry: z.string().optional(),
  /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
  leaseRemaining: z
    .object({
      /** The minimum number of years that must remain on the lease of a leasehold property */
      min: z.number().int().optional(),
      /** The maximum number of years that must remain on the lease of a leasehold property */
      max: z.number().int().optional()
    })
    .optional()
})
/** The details specific to applicants with a marketingMode of renting */
export const applicantRentingModel = z.object({
  /** The date the applicant is looking to move to a new property */
  moveDate: z.string().optional(),
  /** The applicant's preferred letting term (long/short/any) */
  term: z.string().optional(),
  /** The lower bound of the applicant's budget */
  rentFrom: z.number().optional(),
  /** The upper bound of the applicant's budget */
  rentTo: z.number().optional(),
  /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
  rentFrequency: z.string().optional(),
  /** A list of property furnishing requirements taken from the full listing of the associated department. Only applicable to applicants with a marketingMode of renting */
  furnishing: z.array(z.string()).optional(),
  /** The identifier of the applicant's renting position */
  positionId: z.string().optional()
})
/** The applicant's outdoor space requirements */
export const applicantExternalAreaModel = z.object({
  /** The unit of area that each amount corresponds to (acres/hectares) */
  type: z.string().optional(),
  /** The minimum unit value of outside space that the applicant is looking for */
  amountFrom: z.number().optional(),
  /** The maximum unit value of outside space that the applicant is looking for */
  amountTo: z.number().optional()
})
/** The applicant's indoor space requirements */
export const applicantInternalAreaModel = z.object({
  /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
  type: z.string().optional(),
  /** The unit value of inside space that the applicant is looking for */
  amount: z.number().optional()
})
/** An applicant's source of enquiry */
export const applicantSourceModel = z.object({
  /** The unique identifier of the applicant's source */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** An applicant's commercial details */
export const applicantCommercialModel = z.object({
  /** The commercial use requirements (eg a1, a2, b1), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  useClass: z.array(z.string()).optional(),
  /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  floorLevel: z.array(z.string()).optional()
})
/** Details of regional information specific to Guernsey */
export const applicantGuernseyModel = z.object({
  /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
  market: z.array(z.string()).optional()
})
/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const applicantRegionalModel = z.object({
  /** Details of regional information specific to Guernsey */
  ggy: z
    .object({
      /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
      market: z.array(z.string()).optional()
    })
    .optional()
})
/** Representation of the physical address of a building or premise */
export const applicantContactAddressModel = z.object({
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  countryId: z.string().optional()
})
/** Representation of additional contact details */
export const additionalContactDetailModel = z.object({
  /** The type of contact detail */ type: z.string().optional(),
  /** The contact detail */ value: z.string().optional()
})
/** A summarised view of the details of a contact or company associated to an applicant */
export const applicantContactModel = z.object({
  /** The unique identifier of the contact or company */
  id: z.string().optional(),
  /** The complete name of the contact or company */
  name: z.string().optional(),
  /** The title of the contact (Available when 'type' is 'contact') */
  title: z.string().optional(),
  /** The forename of the contact (Available when 'type' is 'contact') */
  forename: z.string().optional(),
  /** The surname of the contact (Available when 'type' is 'contact') */
  surname: z.string().optional(),
  /** The date of birth of the contact (Available when 'type' is 'contact') */
  dateOfBirth: z.string().optional(),
  /** The type of the contact (company/contact) */ type: z.string().optional(),
  /** The home phone number of the contact or company */
  homePhone: z.string().optional(),
  /** The work phone number of the contact or company */
  workPhone: z.string().optional(),
  /** The mobile phone number of the contact or company */
  mobilePhone: z.string().optional(),
  /** The email address of the contact or company */
  email: z.string().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked) */
  marketingConsent: z.string().optional(),
  /** A flag denoting whether or not this relationship is archived */
  fromArchive: z.boolean().optional(),
  /** Representation of the physical address of a building or premise */
  primaryAddress: z
    .object({
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides within */
      countryId: z.string().optional()
    })
    .optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z
    .array(
      /** Representation of additional contact details */
      z.object({
        /** The type of contact detail */ type: z.string().optional(),
        /** The contact detail */ value: z.string().optional()
      })
    )
    .optional()
})
/** Representation of an applicant */
export const applicantModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the applicant */ id: z.string().optional(),
  /** The date and time when the applicant was created */
  created: z.string().optional(),
  /** The date and time when the applicant was last modified */
  modified: z.string().optional(),
  /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
  marketingMode: z.string().optional(),
  /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant */
  currency: z.string().optional(),
  /** A flag determining whether or not the applicant is actively looking for a property */
  active: z.boolean().optional(),
  /** A free text field describing any adhoc buying or renting requirements */
  notes: z.string().optional(),
  /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  sellingStatus: z.string().optional(),
  /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  sellingPosition: z.string().optional(),
  /** The status id of the applicant */ statusId: z.string().optional(),
  /** The date when the applicant was last contacted */
  lastCall: z.string().optional(),
  /** The date when the applicant is next due to be contacted */
  nextCall: z.string().optional(),
  /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  departmentId: z.string().optional(),
  /** The unique identifier of the solicitor associated to the applicant */
  solicitorId: z.string().optional(),
  /** A flag determining whether or not the applicant is a potential client */
  potentialClient: z.boolean().optional(),
  /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  type: z.array(z.string()).optional(),
  /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  style: z.array(z.string()).optional(),
  /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  situation: z.array(z.string()).optional(),
  /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  parking: z.array(z.string()).optional(),
  /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  age: z.array(z.string()).optional(),
  /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  locality: z.array(z.string()).optional(),
  /** The applicant's special feature property requirements (eg swimmingPool, tennisCourt), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  specialFeatures: z.array(z.string()).optional(),
  /** The requirements associated to the applicant which are not currently mapped. These are defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  unmappedRequirements: z
    .array(
      /** Represents an unmapped requirement type */
      z.object({
        /** The type of unmapped requirement */ type: z.string().optional(),
        /** The value associated to the unmapped type */
        value: z.string().optional()
      })
    )
    .optional(),
  /** The minimum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bedroomsMin: z.number().int().optional(),
  /** The maximum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bedroomsMax: z.number().int().optional(),
  /** The minimum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  receptionsMin: z.number().int().optional(),
  /** The maximum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  receptionsMax: z.number().int().optional(),
  /** The minimum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bathroomsMin: z.number().int().optional(),
  /** The maximum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bathroomsMax: z.number().int().optional(),
  /** The minimum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  parkingSpacesMin: z.number().int().optional(),
  /** The maximum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  parkingSpacesMax: z.number().int().optional(),
  /** The applicant's location type (areas/addresses/none) */
  locationType: z.string().optional(),
  /** The applicant's location options */
  locationOptions: z.array(z.string()).optional(),
  /** The date and time the applicant was archived */
  archivedOn: z.string().optional(),
  /** A flag denoting whether or not this applicant is archived */
  fromArchive: z.boolean().optional(),
  /** The details specific to applicants with a marketingMode of buying */
  buying: z
    .object({
      /** The lower bound of the applicant's budget */
      priceFrom: z.number().int().optional(),
      /** The upper bound of the applicant's budget */
      priceTo: z.number().int().optional(),
      /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
      decoration: z.array(z.string()).optional(),
      /** The identifier of the applicant's buying reason */
      reasonId: z.string().optional(),
      /** The identifier of the applicant's selling position */
      positionId: z.string().optional(),
      /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
      tenure: z.array(z.string()).optional(),
      /** The date when the applicant's current mortgage expires/is due for renewal */
      mortgageExpiry: z.string().optional(),
      /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
      leaseRemaining: z
        .object({
          /** The minimum number of years that must remain on the lease of a leasehold property */
          min: z.number().int().optional(),
          /** The maximum number of years that must remain on the lease of a leasehold property */
          max: z.number().int().optional()
        })
        .optional()
    })
    .optional(),
  /** The details specific to applicants with a marketingMode of renting */
  renting: z
    .object({
      /** The date the applicant is looking to move to a new property */
      moveDate: z.string().optional(),
      /** The applicant's preferred letting term (long/short/any) */
      term: z.string().optional(),
      /** The lower bound of the applicant's budget */
      rentFrom: z.number().optional(),
      /** The upper bound of the applicant's budget */
      rentTo: z.number().optional(),
      /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
      rentFrequency: z.string().optional(),
      /** A list of property furnishing requirements taken from the full listing of the associated department. Only applicable to applicants with a marketingMode of renting */
      furnishing: z.array(z.string()).optional(),
      /** The identifier of the applicant's renting position */
      positionId: z.string().optional()
    })
    .optional(),
  /** The applicant's outdoor space requirements */
  externalArea: z
    .object({
      /** The unit of area that each amount corresponds to (acres/hectares) */
      type: z.string().optional(),
      /** The minimum unit value of outside space that the applicant is looking for */
      amountFrom: z.number().optional(),
      /** The maximum unit value of outside space that the applicant is looking for */
      amountTo: z.number().optional()
    })
    .optional(),
  /** The applicant's indoor space requirements */
  internalArea: z
    .object({
      /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
      type: z.string().optional(),
      /** The unit value of inside space that the applicant is looking for */
      amount: z.number().optional()
    })
    .optional(),
  /** An applicant's source of enquiry */
  source: z
    .object({
      /** The unique identifier of the applicant's source */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** An applicant's commercial details */
  commercial: z
    .object({
      /** The commercial use requirements (eg a1, a2, b1), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      useClass: z.array(z.string()).optional(),
      /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      floorLevel: z.array(z.string()).optional()
    })
    .optional(),
  /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  regional: z
    .object({
      /** Details of regional information specific to Guernsey */
      ggy: z
        .object({
          /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
          market: z.array(z.string()).optional()
        })
        .optional()
    })
    .optional(),
  /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).optional(),
  /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
  related: z
    .array(
      /** A summarised view of the details of a contact or company associated to an applicant */
      z.object({
        /** The unique identifier of the contact or company */
        id: z.string().optional(),
        /** The complete name of the contact or company */
        name: z.string().optional(),
        /** The title of the contact (Available when 'type' is 'contact') */
        title: z.string().optional(),
        /** The forename of the contact (Available when 'type' is 'contact') */
        forename: z.string().optional(),
        /** The surname of the contact (Available when 'type' is 'contact') */
        surname: z.string().optional(),
        /** The date of birth of the contact (Available when 'type' is 'contact') */
        dateOfBirth: z.string().optional(),
        /** The type of the contact (company/contact) */
        type: z.string().optional(),
        /** The home phone number of the contact or company */
        homePhone: z.string().optional(),
        /** The work phone number of the contact or company */
        workPhone: z.string().optional(),
        /** The mobile phone number of the contact or company */
        mobilePhone: z.string().optional(),
        /** The email address of the contact or company */
        email: z.string().optional(),
        /** The marketing consent status of the contact (grant/deny/notAsked) */
        marketingConsent: z.string().optional(),
        /** A flag denoting whether or not this relationship is archived */
        fromArchive: z.boolean().optional(),
        /** Representation of the physical address of a building or premise */
        primaryAddress: z
          .object({
            /** The building name */ buildingName: z.string().optional(),
            /** The building number */ buildingNumber: z.string().optional(),
            /** The first line of the address */ line1: z.string().optional(),
            /** The second line of the address */ line2: z.string().optional(),
            /** The third line of the address */ line3: z.string().optional(),
            /** The fourth line of the address */ line4: z.string().optional(),
            /** The postcode */ postcode: z.string().optional(),
            /** The ISO-3166 country code that the address resides within */
            countryId: z.string().optional()
          })
          .optional(),
        /** A collection of additional contact details */
        additionalContactDetails: z
          .array(
            /** Representation of additional contact details */
            z.object({
              /** The type of contact detail */ type: z.string().optional(),
              /** The contact detail */ value: z.string().optional()
            })
          )
          .optional()
      })
    )
    .optional(),
  /** App specific metadata that has been set against the applicant */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the applicant. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const pagingLinkModel = z.object({ href: z.string().optional() })
export const applicantModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an applicant */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the applicant */ id: z.string().optional(),
        /** The date and time when the applicant was created */
        created: z.string().optional(),
        /** The date and time when the applicant was last modified */
        modified: z.string().optional(),
        /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
        marketingMode: z.string().optional(),
        /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant */
        currency: z.string().optional(),
        /** A flag determining whether or not the applicant is actively looking for a property */
        active: z.boolean().optional(),
        /** A free text field describing any adhoc buying or renting requirements */
        notes: z.string().optional(),
        /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
        sellingStatus: z.string().optional(),
        /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
        sellingPosition: z.string().optional(),
        /** The status id of the applicant */ statusId: z.string().optional(),
        /** The date when the applicant was last contacted */
        lastCall: z.string().optional(),
        /** The date when the applicant is next due to be contacted */
        nextCall: z.string().optional(),
        /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
        departmentId: z.string().optional(),
        /** The unique identifier of the solicitor associated to the applicant */
        solicitorId: z.string().optional(),
        /** A flag determining whether or not the applicant is a potential client */
        potentialClient: z.boolean().optional(),
        /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        type: z.array(z.string()).optional(),
        /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        style: z.array(z.string()).optional(),
        /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        situation: z.array(z.string()).optional(),
        /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        parking: z.array(z.string()).optional(),
        /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        age: z.array(z.string()).optional(),
        /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        locality: z.array(z.string()).optional(),
        /** The applicant's special feature property requirements (eg swimmingPool, tennisCourt), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
        specialFeatures: z.array(z.string()).optional(),
        /** The requirements associated to the applicant which are not currently mapped. These are defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
        unmappedRequirements: z
          .array(
            /** Represents an unmapped requirement type */
            z.object({
              /** The type of unmapped requirement */
              type: z.string().optional(),
              /** The value associated to the unmapped type */
              value: z.string().optional()
            })
          )
          .optional(),
        /** The minimum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        bedroomsMin: z.number().int().optional(),
        /** The maximum number of bedrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        bedroomsMax: z.number().int().optional(),
        /** The minimum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        receptionsMin: z.number().int().optional(),
        /** The maximum number of reception rooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        receptionsMax: z.number().int().optional(),
        /** The minimum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        bathroomsMin: z.number().int().optional(),
        /** The maximum number of bathrooms the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        bathroomsMax: z.number().int().optional(),
        /** The minimum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        parkingSpacesMin: z.number().int().optional(),
        /** The maximum number of parking spaces the applicant requires. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        parkingSpacesMax: z.number().int().optional(),
        /** The applicant's location type (areas/addresses/none) */
        locationType: z.string().optional(),
        /** The applicant's location options */
        locationOptions: z.array(z.string()).optional(),
        /** The date and time the applicant was archived */
        archivedOn: z.string().optional(),
        /** A flag denoting whether or not this applicant is archived */
        fromArchive: z.boolean().optional(),
        /** The details specific to applicants with a marketingMode of buying */
        buying: z
          .object({
            /** The lower bound of the applicant's budget */
            priceFrom: z.number().int().optional(),
            /** The upper bound of the applicant's budget */
            priceTo: z.number().int().optional(),
            /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
            decoration: z.array(z.string()).optional(),
            /** The identifier of the applicant's buying reason */
            reasonId: z.string().optional(),
            /** The identifier of the applicant's selling position */
            positionId: z.string().optional(),
            /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
            tenure: z.array(z.string()).optional(),
            /** The date when the applicant's current mortgage expires/is due for renewal */
            mortgageExpiry: z.string().optional(),
            /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
            leaseRemaining: z
              .object({
                /** The minimum number of years that must remain on the lease of a leasehold property */
                min: z.number().int().optional(),
                /** The maximum number of years that must remain on the lease of a leasehold property */
                max: z.number().int().optional()
              })
              .optional()
          })
          .optional(),
        /** The details specific to applicants with a marketingMode of renting */
        renting: z
          .object({
            /** The date the applicant is looking to move to a new property */
            moveDate: z.string().optional(),
            /** The applicant's preferred letting term (long/short/any) */
            term: z.string().optional(),
            /** The lower bound of the applicant's budget */
            rentFrom: z.number().optional(),
            /** The upper bound of the applicant's budget */
            rentTo: z.number().optional(),
            /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
            rentFrequency: z.string().optional(),
            /** A list of property furnishing requirements taken from the full listing of the associated department. Only applicable to applicants with a marketingMode of renting */
            furnishing: z.array(z.string()).optional(),
            /** The identifier of the applicant's renting position */
            positionId: z.string().optional()
          })
          .optional(),
        /** The applicant's outdoor space requirements */
        externalArea: z
          .object({
            /** The unit of area that each amount corresponds to (acres/hectares) */
            type: z.string().optional(),
            /** The minimum unit value of outside space that the applicant is looking for */
            amountFrom: z.number().optional(),
            /** The maximum unit value of outside space that the applicant is looking for */
            amountTo: z.number().optional()
          })
          .optional(),
        /** The applicant's indoor space requirements */
        internalArea: z
          .object({
            /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
            type: z.string().optional(),
            /** The unit value of inside space that the applicant is looking for */
            amount: z.number().optional()
          })
          .optional(),
        /** An applicant's source of enquiry */
        source: z
          .object({
            /** The unique identifier of the applicant's source */
            id: z.string().optional(),
            /** The source type (office/source) */ type: z.string().optional()
          })
          .optional(),
        /** An applicant's commercial details */
        commercial: z
          .object({
            /** The commercial use requirements (eg a1, a2, b1), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
            useClass: z.array(z.string()).optional(),
            /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
            floorLevel: z.array(z.string()).optional()
          })
          .optional(),
        /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
        regional: z
          .object({
            /** Details of regional information specific to Guernsey */
            ggy: z
              .object({
                /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
                market: z.array(z.string()).optional()
              })
              .optional()
          })
          .optional(),
        /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
        officeIds: z.array(z.string()).optional(),
        /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
        negotiatorIds: z.array(z.string()).optional(),
        /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
        related: z
          .array(
            /** A summarised view of the details of a contact or company associated to an applicant */
            z.object({
              /** The unique identifier of the contact or company */
              id: z.string().optional(),
              /** The complete name of the contact or company */
              name: z.string().optional(),
              /** The title of the contact (Available when 'type' is 'contact') */
              title: z.string().optional(),
              /** The forename of the contact (Available when 'type' is 'contact') */
              forename: z.string().optional(),
              /** The surname of the contact (Available when 'type' is 'contact') */
              surname: z.string().optional(),
              /** The date of birth of the contact (Available when 'type' is 'contact') */
              dateOfBirth: z.string().optional(),
              /** The type of the contact (company/contact) */
              type: z.string().optional(),
              /** The home phone number of the contact or company */
              homePhone: z.string().optional(),
              /** The work phone number of the contact or company */
              workPhone: z.string().optional(),
              /** The mobile phone number of the contact or company */
              mobilePhone: z.string().optional(),
              /** The email address of the contact or company */
              email: z.string().optional(),
              /** The marketing consent status of the contact (grant/deny/notAsked) */
              marketingConsent: z.string().optional(),
              /** A flag denoting whether or not this relationship is archived */
              fromArchive: z.boolean().optional(),
              /** Representation of the physical address of a building or premise */
              primaryAddress: z
                .object({
                  /** The building name */ buildingName: z.string().optional(),
                  /** The building number */
                  buildingNumber: z.string().optional(),
                  /** The first line of the address */
                  line1: z.string().optional(),
                  /** The second line of the address */
                  line2: z.string().optional(),
                  /** The third line of the address */
                  line3: z.string().optional(),
                  /** The fourth line of the address */
                  line4: z.string().optional(),
                  /** The postcode */ postcode: z.string().optional(),
                  /** The ISO-3166 country code that the address resides within */
                  countryId: z.string().optional()
                })
                .optional(),
              /** A collection of additional contact details */
              additionalContactDetails: z
                .array(
                  /** Representation of additional contact details */
                  z.object({
                    /** The type of contact detail */
                    type: z.string().optional(),
                    /** The contact detail */ value: z.string().optional()
                  })
                )
                .optional()
            })
          )
          .optional(),
        /** App specific metadata that has been set against the applicant */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the applicant. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
export const createApplicantLeaseRemaining = z.object({
  /** The minimum number of years that must remain on the lease of a leasehold property */
  min: z.number().int().optional(),
  /** The maximum number of years that must remain on the lease of a leasehold property */
  max: z.number().int().optional()
})
/** The details specific to applicants with a marketingMode of buying */
export const createApplicantBuyingModel = z.object({
  /** The identifier of the applicant's buying reason */
  reasonId: z.string().optional(),
  /** The identifier of the applicant's selling position */
  positionId: z.string().optional(),
  /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
  priceFrom: z.number().int().optional(),
  /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
  priceTo: z.number().int().optional(),
  /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).optional(),
  /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
  tenure: z.array(z.string()).optional(),
  /** The date when the applicant's current mortgage expires/is due for renewal */
  mortgageExpiry: z.string().optional(),
  /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
  leaseRemaining: z
    .object({
      /** The minimum number of years that must remain on the lease of a leasehold property */
      min: z.number().int().optional(),
      /** The maximum number of years that must remain on the lease of a leasehold property */
      max: z.number().int().optional()
    })
    .optional()
})
/** The details specific to applicants with a marketingMode of renting */
export const createApplicantRentingModel = z.object({
  /** The date the applicant is looking to move to a new property */
  moveDate: z.string().optional(),
  /** The applicant's preferred letting term (long/short/any) */
  term: z.string().optional(),
  /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
  rentFrom: z.number().optional(),
  /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
  rentTo: z.number().optional(),
  /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
  rentFrequency: z.string().optional(),
  /** A list of property furnishing requirements taken from the full listing of the associated department */
  furnishing: z.array(z.string()).optional(),
  /** The identifier of the applicant's renting position */
  positionId: z.string().optional()
})
/** The applicant's outdoor space requirements */
export const createApplicantExternalAreaModel = z.object({
  /** The unit of area that each amount corresponds to (acres/hectares) */
  type: z.string().optional(),
  /** The minimum unit value of outside space that the applicant is looking for */
  amountFrom: z.number().optional(),
  /** The maximum unit value of outside space that the applicant is looking for */
  amountTo: z.number().optional()
})
/** The applicant's indoor space requirements */
export const createApplicantInternalAreaModel = z.object({
  /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
  type: z.string().optional(),
  /** The unit value of inside space that the applicant is looking for */
  amount: z.number().optional()
})
/** An applicant's source of enquiry */
export const createApplicantSourceModel = z.object({
  /** The unique identifier of the applicant's source */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** Details of regional information specific to Guernsey */
export const createApplicantGuernseyModel = z.object({
  /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
  market: z.array(z.string()).optional()
})
/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const createApplicantRegionalModel = z.object({
  /** Details of regional information specific to Guernsey */
  ggy: z
    .object({
      /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
      market: z.array(z.string()).optional()
    })
    .optional()
})
/** Request body used to create a relationship between an applicant and a contact or company */
export const createApplicantContactRelationshipModel = z.object({
  /** The unique identifier of the contact or company to create a relationship with */
  associatedId: z.string(),
  /** The type of relationship to create (contact/company) */
  associatedType: z.string().optional()
})
/** Request body used to create a new applicant */
export const createApplicantModel = z.object({
  /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
  marketingMode: z.string(),
  /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant
Where not specified this will default to the customer's base currency */
  currency: z.string().optional(),
  /** A flag determining whether or not the applicant is actively looking for a property */
  active: z.boolean().optional(),
  /** A free text field describing any adhoc buying or renting requirements */
  notes: z.string().optional(),
  /** The status id of the applicant */ statusId: z.string().optional(),
  /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  sellingStatus: z.string().optional(),
  /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  sellingPosition: z.string().optional(),
  /** The date when the applicant was last contacted */
  lastCall: z.string().optional(),
  /** The date when the applicant is next due to be contacted */
  nextCall: z.string().optional(),
  /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  departmentId: z.string(),
  /** The unique identifier of the solicitor associated to the applicant */
  solicitorId: z.string().optional(),
  /** A flag determining whether or not the applicant is a potential client */
  potentialClient: z.boolean().optional(),
  /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  type: z.array(z.string()).optional(),
  /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  style: z.array(z.string()).optional(),
  /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  situation: z.array(z.string()).optional(),
  /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  parking: z.array(z.string()).optional(),
  /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  age: z.array(z.string()).optional(),
  /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  locality: z.array(z.string()).optional(),
  /** The applicant's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  specialFeatures: z.array(z.string()).optional(),
  /** The minimum number of bedrooms the applicant requires */
  bedroomsMin: z.number().int().optional(),
  /** The maximum number of bedrooms the applicant requires */
  bedroomsMax: z.number().int().optional(),
  /** The minimum number of reception rooms the applicant requires */
  receptionsMin: z.number().int().optional(),
  /** The maximum number of reception rooms the applicant requires */
  receptionsMax: z.number().int().optional(),
  /** The minimum number of bathrooms the applicant requires */
  bathroomsMin: z.number().int().optional(),
  /** The maximum number of bathrooms the applicant requires */
  bathroomsMax: z.number().int().optional(),
  /** The minimum number of parking spaces the applicant requires */
  parkingSpacesMin: z.number().int().optional(),
  /** The maximum number of parking spaces the applicant requires */
  parkingSpacesMax: z.number().int().optional(),
  /** The applicant's location type (areas/addresses/none) */
  locationType: z.string().optional(),
  /** The applicant's location options */
  locationOptions: z.array(z.string()).optional(),
  /** The details specific to applicants with a marketingMode of buying */
  buying: z
    .object({
      /** The identifier of the applicant's buying reason */
      reasonId: z.string().optional(),
      /** The identifier of the applicant's selling position */
      positionId: z.string().optional(),
      /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
      priceFrom: z.number().int().optional(),
      /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
      priceTo: z.number().int().optional(),
      /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
      decoration: z.array(z.string()).optional(),
      /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
      tenure: z.array(z.string()).optional(),
      /** The date when the applicant's current mortgage expires/is due for renewal */
      mortgageExpiry: z.string().optional(),
      /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
      leaseRemaining: z
        .object({
          /** The minimum number of years that must remain on the lease of a leasehold property */
          min: z.number().int().optional(),
          /** The maximum number of years that must remain on the lease of a leasehold property */
          max: z.number().int().optional()
        })
        .optional()
    })
    .optional(),
  /** The details specific to applicants with a marketingMode of renting */
  renting: z
    .object({
      /** The date the applicant is looking to move to a new property */
      moveDate: z.string().optional(),
      /** The applicant's preferred letting term (long/short/any) */
      term: z.string().optional(),
      /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
      rentFrom: z.number().optional(),
      /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
      rentTo: z.number().optional(),
      /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
      rentFrequency: z.string().optional(),
      /** A list of property furnishing requirements taken from the full listing of the associated department */
      furnishing: z.array(z.string()).optional(),
      /** The identifier of the applicant's renting position */
      positionId: z.string().optional()
    })
    .optional(),
  /** The applicant's outdoor space requirements */
  externalArea: z
    .object({
      /** The unit of area that each amount corresponds to (acres/hectares) */
      type: z.string().optional(),
      /** The minimum unit value of outside space that the applicant is looking for */
      amountFrom: z.number().optional(),
      /** The maximum unit value of outside space that the applicant is looking for */
      amountTo: z.number().optional()
    })
    .optional(),
  /** The applicant's indoor space requirements */
  internalArea: z
    .object({
      /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
      type: z.string().optional(),
      /** The unit value of inside space that the applicant is looking for */
      amount: z.number().optional()
    })
    .optional(),
  /** An applicant's source of enquiry */
  source: z
    .object({
      /** The unique identifier of the applicant's source */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  regional: z
    .object({
      /** Details of regional information specific to Guernsey */
      ggy: z
        .object({
          /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
          market: z.array(z.string()).optional()
        })
        .optional()
    })
    .optional(),
  /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()),
  /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()),
  /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
  related: z.array(
    /** Request body used to create a relationship between an applicant and a contact or company */
    z.object({
      /** The unique identifier of the contact or company to create a relationship with */
      associatedId: z.string(),
      /** The type of relationship to create (contact/company) */
      associatedType: z.string().optional()
    })
  ),
  /** App specific metadata to set against the applicant */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Model for validation failure */
export const validationMessageModel = z.object({
  /** Gets the field that the message applies to */
  field: z.string().optional(),
  /** Gets the validation failure message to issue to the client */
  message: z.string().optional()
})
/** Represents a one or more messages for fields that have failed a given validation action */
export const validationErrorModel = z.object({
  statusCode: z.number().int().optional(),
  /** The date and time that this error event occurred */
  dateTime: z.string().optional(),
  /** The detailed information regarding this error event */
  description: z.string().optional(),
  /** Gets or sets the list of validation errors. */
  errors: z
    .array(
      /** Model for validation failure */
      z.object({
        /** Gets the field that the message applies to */
        field: z.string().optional(),
        /** Gets the validation failure message to issue to the client */
        message: z.string().optional()
      })
    )
    .optional()
})
/** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
export const updateApplicantLeaseRemaining = z.object({
  /** The minimum number of years that must remain on the lease of a leasehold property */
  min: z.number().int().optional(),
  /** The maximum number of years that must remain on the lease of a leasehold property */
  max: z.number().int().optional()
})
/** The details specific to applicants with a marketingMode of buying */
export const updateApplicantBuyingModel = z.object({
  /** The identifier of the applicant's buying reason */
  reasonId: z.string().optional(),
  /** The identifier of the applicant's selling position */
  positionId: z.string().optional(),
  /** The lower bound of the applicant's budget */
  priceFrom: z.number().int().optional(),
  /** The upper bound of the applicant's budget */
  priceTo: z.number().int().optional(),
  /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).optional(),
  /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
  tenure: z.array(z.string()).optional(),
  /** The date when the applicant's current mortgage expires/is due for renewal */
  mortgageExpiry: z.string().optional(),
  /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
  leaseRemaining: z
    .object({
      /** The minimum number of years that must remain on the lease of a leasehold property */
      min: z.number().int().optional(),
      /** The maximum number of years that must remain on the lease of a leasehold property */
      max: z.number().int().optional()
    })
    .optional()
})
/** The details specific to applicants with a marketingMode of renting */
export const updateApplicantRentingModel = z.object({
  /** The date the applicant is looking to move to a new property */
  moveDate: z.string().optional(),
  /** The applicant's preferred letting term (long/short/any) */
  term: z.string().optional(),
  /** The lower bound of the applicant's budget */
  rentFrom: z.number().optional(),
  /** The upper bound of the applicant's budget */
  rentTo: z.number().optional(),
  /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
  rentFrequency: z.string().optional(),
  /** A list of property furnishing requirements taken from the full listing of the associated department */
  furnishing: z.array(z.string()).optional(),
  /** The identifier of the applicant's renting position */
  positionId: z.string().optional()
})
/** The applicant's outdoor space requirements */
export const updateApplicantExternalAreaModel = z.object({
  /** The unit of area that each amount corresponds to (acres/hectares) */
  type: z.string().optional(),
  /** The minimum unit value of outside space that the applicant is looking for */
  amountFrom: z.number().optional(),
  /** The maximum unit value of outside space that the applicant is looking for */
  amountTo: z.number().optional()
})
/** The applicant's indoor space requirements */
export const updateApplicantInternalAreaModel = z.object({
  /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
  type: z.string().optional(),
  /** The unit value of inside space that the applicant is looking for */
  amount: z.number().optional()
})
/** An applicant's source of enquiry */
export const updateApplicantSourceModel = z.object({
  /** The unique identifier of the applicant's source */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** Details of regional information specific to Guernsey */
export const updateApplicantGuernseyModel = z.object({
  /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
  market: z.array(z.string()).optional()
})
/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const updateApplicantRegionalModel = z.object({
  /** Details of regional information specific to Guernsey */
  ggy: z
    .object({
      /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
      market: z.array(z.string()).optional()
    })
    .optional()
})
/** Request body used to update an existing applicant */
export const updateApplicantModel = z.object({
  /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
  marketingMode: z.string().optional(),
  /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant
Where not specified this will default to the customer's base currency */
  currency: z.string().optional(),
  /** A flag determining whether or not the applicant is actively looking for a property */
  active: z.boolean().optional(),
  /** A free text field describing any adhoc buying or renting requirements */
  notes: z.string().optional(),
  /** The status id of the applicant */ statusId: z.string().optional(),
  /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  sellingStatus: z.string().optional(),
  /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
  sellingPosition: z.string().optional(),
  /** The date when the applicant was last contacted */
  lastCall: z.string().optional(),
  /** The date when the applicant is next due to be contacted */
  nextCall: z.string().optional(),
  /** The unique identifier of the department that the applicant requirements are associated with. The applicant will only match to properties with the same value */
  departmentId: z.string().optional(),
  /** The unique identifier of the solicitor associated to the applicant */
  solicitorId: z.string().optional(),
  /** A flag determining whether or not the applicant is a potential client */
  potentialClient: z.boolean().optional(),
  /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  type: z.array(z.string()).optional(),
  /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  style: z.array(z.string()).optional(),
  /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  situation: z.array(z.string()).optional(),
  /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  parking: z.array(z.string()).optional(),
  /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  age: z.array(z.string()).optional(),
  /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  locality: z.array(z.string()).optional(),
  /** The applicant's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  specialFeatures: z.array(z.string()).optional(),
  /** The minimum number of bedrooms the applicant requires */
  bedroomsMin: z.number().int().optional(),
  /** The maximum number of bedrooms the applicant requires */
  bedroomsMax: z.number().int().optional(),
  /** The minimum number of reception rooms the applicant requires */
  receptionsMin: z.number().int().optional(),
  /** The maximum number of reception rooms the applicant requires */
  receptionsMax: z.number().int().optional(),
  /** The minimum number of bathrooms the applicant requires */
  bathroomsMin: z.number().int().optional(),
  /** The maximum number of bathrooms the applicant requires */
  bathroomsMax: z.number().int().optional(),
  /** The minimum number of parking spaces the applicant requires */
  parkingSpacesMin: z.number().int().optional(),
  /** The maximum number of parking spaces the applicant requires */
  parkingSpacesMax: z.number().int().optional(),
  /** The applicant's location type (areas/addresses/none) */
  locationType: z.string().optional(),
  /** The applicant's location options */
  locationOptions: z.array(z.string()).optional(),
  /** The details specific to applicants with a marketingMode of buying */
  buying: z
    .object({
      /** The identifier of the applicant's buying reason */
      reasonId: z.string().optional(),
      /** The identifier of the applicant's selling position */
      positionId: z.string().optional(),
      /** The lower bound of the applicant's budget */
      priceFrom: z.number().int().optional(),
      /** The upper bound of the applicant's budget */
      priceTo: z.number().int().optional(),
      /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
      decoration: z.array(z.string()).optional(),
      /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
      tenure: z.array(z.string()).optional(),
      /** The date when the applicant's current mortgage expires/is due for renewal */
      mortgageExpiry: z.string().optional(),
      /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
      leaseRemaining: z
        .object({
          /** The minimum number of years that must remain on the lease of a leasehold property */
          min: z.number().int().optional(),
          /** The maximum number of years that must remain on the lease of a leasehold property */
          max: z.number().int().optional()
        })
        .optional()
    })
    .optional(),
  /** The details specific to applicants with a marketingMode of renting */
  renting: z
    .object({
      /** The date the applicant is looking to move to a new property */
      moveDate: z.string().optional(),
      /** The applicant's preferred letting term (long/short/any) */
      term: z.string().optional(),
      /** The lower bound of the applicant's budget */
      rentFrom: z.number().optional(),
      /** The upper bound of the applicant's budget */
      rentTo: z.number().optional(),
      /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
      rentFrequency: z.string().optional(),
      /** A list of property furnishing requirements taken from the full listing of the associated department */
      furnishing: z.array(z.string()).optional(),
      /** The identifier of the applicant's renting position */
      positionId: z.string().optional()
    })
    .optional(),
  /** The applicant's outdoor space requirements */
  externalArea: z
    .object({
      /** The unit of area that each amount corresponds to (acres/hectares) */
      type: z.string().optional(),
      /** The minimum unit value of outside space that the applicant is looking for */
      amountFrom: z.number().optional(),
      /** The maximum unit value of outside space that the applicant is looking for */
      amountTo: z.number().optional()
    })
    .optional(),
  /** The applicant's indoor space requirements */
  internalArea: z
    .object({
      /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
      type: z.string().optional(),
      /** The unit value of inside space that the applicant is looking for */
      amount: z.number().optional()
    })
    .optional(),
  /** An applicant's source of enquiry */
  source: z
    .object({
      /** The unique identifier of the applicant's source */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  regional: z
    .object({
      /** Details of regional information specific to Guernsey */
      ggy: z
        .object({
          /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
          market: z.array(z.string()).optional()
        })
        .optional()
    })
    .optional(),
  /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).optional(),
  /** App specific metadata to set against the applicant */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Representation of a relationship between an applicant and a contact or company */
export const applicantContactRelationshipModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the applicant relationship */
  id: z.string().optional(),
  /** The date and time when the relationship was created */
  created: z.string().optional(),
  /** The date and time when the relationship was last modified */
  modified: z.string().optional(),
  /** The unique identifier of the applicant */
  applicantId: z.string().optional(),
  /** The type of related entity (contact/company) */
  associatedType: z.string().optional(),
  /** The unique identifier of the related contact or company */
  associatedId: z.string().optional(),
  /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent applicant entity */
  isMain: z.boolean().optional(),
  /** A flag denoting whether or not this relationship is archived */
  fromArchive: z.boolean().optional()
})
export const applicantContactRelationshipModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a relationship between an applicant and a contact or company */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the applicant relationship */
        id: z.string().optional(),
        /** The date and time when the relationship was created */
        created: z.string().optional(),
        /** The date and time when the relationship was last modified */
        modified: z.string().optional(),
        /** The unique identifier of the applicant */
        applicantId: z.string().optional(),
        /** The type of related entity (contact/company) */
        associatedType: z.string().optional(),
        /** The unique identifier of the related contact or company */
        associatedId: z.string().optional(),
        /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent applicant entity */
        isMain: z.boolean().optional(),
        /** A flag denoting whether or not this relationship is archived */
        fromArchive: z.boolean().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create or update a relationship between an applicant and a contact or company */
export const insertApplicantContactRelationshipModel = z.object({
  /** The unique identifier of the contact or company to create a relationship with */
  associatedId: z.string().optional(),
  /** The type of relationship to create (contact/company) */
  associatedType: z.string().optional(),
  /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
  isMain: z.boolean().optional()
})
/** Representation of an area that properties reside in, or applicants are looking to buy/rent in */
export const areaModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the area */ id: z.string().optional(),
  /** The date and time when the area was created */
  created: z.string().optional(),
  /** The date and time when the area was last modified */
  modified: z.string().optional(),
  /** The name of the area */ name: z.string().optional(),
  /** A flag denoting whether the area can currently be selected against properties and applicants */
  active: z.boolean().optional(),
  /** The type of area (postcodes/polygon/group) */ type: z.string().optional(),
  /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
  area: z.array(z.string()).optional(),
  /** A collection of unique identifiers of departments associated to the area */
  departmentIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of parent area groups that this area is part of
This information can be used to understand the area hierarchy in a customer's system */
  parentIds: z.array(z.string()).optional(),
  /** The ETag for the current version of the area. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const areaModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an area that properties reside in, or applicants are looking to buy/rent in */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the area */ id: z.string().optional(),
        /** The date and time when the area was created */
        created: z.string().optional(),
        /** The date and time when the area was last modified */
        modified: z.string().optional(),
        /** The name of the area */ name: z.string().optional(),
        /** A flag denoting whether the area can currently be selected against properties and applicants */
        active: z.boolean().optional(),
        /** The type of area (postcodes/polygon/group) */
        type: z.string().optional(),
        /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
        area: z.array(z.string()).optional(),
        /** A collection of unique identifiers of departments associated to the area */
        departmentIds: z.array(z.string()).optional(),
        /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
        officeIds: z.array(z.string()).optional(),
        /** A collection of unique identifiers of parent area groups that this area is part of
This information can be used to understand the area hierarchy in a customer's system */
        parentIds: z.array(z.string()).optional(),
        /** The ETag for the current version of the area. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new area */
export const createAreaModel = z.object({
  /** The name of the area */ name: z.string(),
  /** The type of area (postcodes/polygon/group) */ type: z.string(),
  /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
  area: z.array(z.string()),
  /** A collection of unique identifiers of departments associated to the area */
  departmentIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional(),
  /** The unique identifier of the parent area, if the area should be registered as a child area/group in an existing area group */
  parentId: z.string().optional()
})
/** Request body used to update an existing area */
export const updateAreaModel = z.object({
  /** The name of the area */ name: z.string().optional(),
  /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
  area: z.array(z.string()).optional(),
  /** A collection of unique identifiers of departments associated to the area */
  departmentIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional()
})
/** Representation of an appointments recurrence details */
export const recurrenceModel = z.object({
  /** The recurrence interval */ interval: z.number().int().optional(),
  /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
  type: z.string().optional(),
  /** The date and time of the last occurrence of the appointment */
  until: z.string().optional()
})
/** Follow up information relating to an appointment */
export const appointmentFollowUpModel = z.object({
  /** The date when the appointment should be followed up */
  due: z.string().optional(),
  /** The unique identifier of a pre-defined follow up response type */
  responseId: z.string().optional(),
  /** Free text internal follow up notes to be stored against the appointment */
  notes: z.string().optional()
})
/** A summarised view of the details of a contact associated to an appointment attendee */
export const appointmentContactModel = z.object({
  /** The unique identifier of the contact */ id: z.string().optional(),
  /** The name of the contact */ name: z.string().optional(),
  /** The home phone number of the contact */ homePhone: z.string().optional(),
  /** The work phone number of the contact */ workPhone: z.string().optional(),
  /** The mobile phone number of the contact */
  mobilePhone: z.string().optional(),
  /** The email address of the contact */ email: z.string().optional(),
  /** A flag determining if the related contact is archived */
  fromArchive: z.boolean().optional()
})
/** An appointment attendee */
export const appointmentAttendeeModel = z.object({
  /** The unique identifier of the attendee */ id: z.string().optional(),
  /** The type of attendee */ type: z.string().optional(),
  /** A collection of contacts relating to the attendee */
  contacts: z
    .array(
      /** A summarised view of the details of a contact associated to an appointment attendee */
      z.object({
        /** The unique identifier of the contact */ id: z.string().optional(),
        /** The name of the contact */ name: z.string().optional(),
        /** The home phone number of the contact */
        homePhone: z.string().optional(),
        /** The work phone number of the contact */
        workPhone: z.string().optional(),
        /** The mobile phone number of the contact */
        mobilePhone: z.string().optional(),
        /** The email address of the contact */ email: z.string().optional(),
        /** A flag determining if the related contact is archived */
        fromArchive: z.boolean().optional()
      })
    )
    .optional()
})
/** A view of the documents associated to the appointment */
export const appointmentDocumentModel = z.object({
  /** The unique identifier of the draft property inspection report document */
  draftPropertyInspectionReportId: z.string().optional(),
  /** The unique identifier of the final property inspection report document */
  finalPropertyInspectionReportId: z.string().optional()
})
/** Representation of a calendar appointment */
export const appointmentModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the appointment */ id: z.string().optional(),
  /** The date and time when the appointment was created */
  created: z.string().optional(),
  /** The date and time when the appointment was last modified */
  modified: z.string().optional(),
  /** The date and time when the appointment will start */
  start: z.string().optional(),
  /** The date and time when the appointment will end */
  end: z.string().optional(),
  /** The unique identifier of the appointment type */
  typeId: z.string().optional(),
  /** A free text description about the appointment */
  description: z.string().optional(),
  /** A flag denoting whether or not the appointment recurs */
  recurring: z.boolean().optional(),
  /** Representation of an appointments recurrence details */
  recurrence: z
    .object({
      /** The recurrence interval */ interval: z.number().int().optional(),
      /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
      type: z.string().optional(),
      /** The date and time of the last occurrence of the appointment */
      until: z.string().optional()
    })
    .optional(),
  /** A flag denoting whether or not the appointment has been cancelled */
  cancelled: z.boolean().optional(),
  /** Follow up information relating to an appointment */
  followUp: z
    .object({
      /** The date when the appointment should be followed up */
      due: z.string().optional(),
      /** The unique identifier of a pre-defined follow up response type */
      responseId: z.string().optional(),
      /** Free text internal follow up notes to be stored against the appointment */
      notes: z.string().optional()
    })
    .optional(),
  /** The unique identifier of the property related to the appointment */
  propertyId: z.string().optional(),
  /** The unique identifier of the negotiator that organised the appointment */
  organiserId: z.string().optional(),
  /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional(),
  /** An appointment attendee */
  attendee: z
    .object({
      /** The unique identifier of the attendee */ id: z.string().optional(),
      /** The type of attendee */ type: z.string().optional(),
      /** A collection of contacts relating to the attendee */
      contacts: z
        .array(
          /** A summarised view of the details of a contact associated to an appointment attendee */
          z.object({
            /** The unique identifier of the contact */
            id: z.string().optional(),
            /** The name of the contact */ name: z.string().optional(),
            /** The home phone number of the contact */
            homePhone: z.string().optional(),
            /** The work phone number of the contact */
            workPhone: z.string().optional(),
            /** The mobile phone number of the contact */
            mobilePhone: z.string().optional(),
            /** The email address of the contact */
            email: z.string().optional(),
            /** A flag determining if the related contact is archived */
            fromArchive: z.boolean().optional()
          })
        )
        .optional()
    })
    .optional(),
  /** The attendance status of the appointment (notSet/noShow/attended) */
  attended: z.string().optional(),
  /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
  accompanied: z.boolean().optional(),
  /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
  isRepeat: z.boolean().optional(),
  /** A flag denoting whether or not the appointment is virtual */
  virtual: z.boolean().optional(),
  /** A flag denoting whether or not the main negotiator has confirmed their attendance */
  negotiatorConfirmed: z.boolean().optional(),
  /** A flag denoting whether or not the attendee has confirmed their attendance */
  attendeeConfirmed: z.boolean().optional(),
  /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
  propertyConfirmed: z.boolean().optional(),
  /** A flag determining whether or not the appointment is archived */
  fromArchive: z.boolean().optional(),
  /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
  otherAgentId: z.string().optional(),
  /** A view of the documents associated to the appointment */
  documents: z
    .object({
      /** The unique identifier of the draft property inspection report document */
      draftPropertyInspectionReportId: z.string().optional(),
      /** The unique identifier of the final property inspection report document */
      finalPropertyInspectionReportId: z.string().optional()
    })
    .optional(),
  /** App specific metadata that has been set against the appointment */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The requested extras fields */
  extrasField: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the appointment. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const appointmentModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a calendar appointment */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the appointment */
        id: z.string().optional(),
        /** The date and time when the appointment was created */
        created: z.string().optional(),
        /** The date and time when the appointment was last modified */
        modified: z.string().optional(),
        /** The date and time when the appointment will start */
        start: z.string().optional(),
        /** The date and time when the appointment will end */
        end: z.string().optional(),
        /** The unique identifier of the appointment type */
        typeId: z.string().optional(),
        /** A free text description about the appointment */
        description: z.string().optional(),
        /** A flag denoting whether or not the appointment recurs */
        recurring: z.boolean().optional(),
        /** Representation of an appointments recurrence details */
        recurrence: z
          .object({
            /** The recurrence interval */
            interval: z.number().int().optional(),
            /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
            type: z.string().optional(),
            /** The date and time of the last occurrence of the appointment */
            until: z.string().optional()
          })
          .optional(),
        /** A flag denoting whether or not the appointment has been cancelled */
        cancelled: z.boolean().optional(),
        /** Follow up information relating to an appointment */
        followUp: z
          .object({
            /** The date when the appointment should be followed up */
            due: z.string().optional(),
            /** The unique identifier of a pre-defined follow up response type */
            responseId: z.string().optional(),
            /** Free text internal follow up notes to be stored against the appointment */
            notes: z.string().optional()
          })
          .optional(),
        /** The unique identifier of the property related to the appointment */
        propertyId: z.string().optional(),
        /** The unique identifier of the negotiator that organised the appointment */
        organiserId: z.string().optional(),
        /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
        negotiatorIds: z.array(z.string()).optional(),
        /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
        officeIds: z.array(z.string()).optional(),
        /** An appointment attendee */
        attendee: z
          .object({
            /** The unique identifier of the attendee */
            id: z.string().optional(),
            /** The type of attendee */ type: z.string().optional(),
            /** A collection of contacts relating to the attendee */
            contacts: z
              .array(
                /** A summarised view of the details of a contact associated to an appointment attendee */
                z.object({
                  /** The unique identifier of the contact */
                  id: z.string().optional(),
                  /** The name of the contact */ name: z.string().optional(),
                  /** The home phone number of the contact */
                  homePhone: z.string().optional(),
                  /** The work phone number of the contact */
                  workPhone: z.string().optional(),
                  /** The mobile phone number of the contact */
                  mobilePhone: z.string().optional(),
                  /** The email address of the contact */
                  email: z.string().optional(),
                  /** A flag determining if the related contact is archived */
                  fromArchive: z.boolean().optional()
                })
              )
              .optional()
          })
          .optional(),
        /** The attendance status of the appointment (notSet/noShow/attended) */
        attended: z.string().optional(),
        /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
        accompanied: z.boolean().optional(),
        /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
        isRepeat: z.boolean().optional(),
        /** A flag denoting whether or not the appointment is virtual */
        virtual: z.boolean().optional(),
        /** A flag denoting whether or not the main negotiator has confirmed their attendance */
        negotiatorConfirmed: z.boolean().optional(),
        /** A flag denoting whether or not the attendee has confirmed their attendance */
        attendeeConfirmed: z.boolean().optional(),
        /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
        propertyConfirmed: z.boolean().optional(),
        /** A flag determining whether or not the appointment is archived */
        fromArchive: z.boolean().optional(),
        /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
        otherAgentId: z.string().optional(),
        /** A view of the documents associated to the appointment */
        documents: z
          .object({
            /** The unique identifier of the draft property inspection report document */
            draftPropertyInspectionReportId: z.string().optional(),
            /** The unique identifier of the final property inspection report document */
            finalPropertyInspectionReportId: z.string().optional()
          })
          .optional(),
        /** App specific metadata that has been set against the appointment */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The requested extras fields */
        extrasField: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the appointment. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Represents an external attendee on an appointment */
export const createAppointmentAttendeeModel = z.object({
  /** The unique identifier of the attendee */ id: z.string().optional(),
  /** The type of attendee (applicant/contact/landlord/tenant) */
  type: z.string().optional()
})
/** Details of an appointment's recurrence pattern */
export const createAppointmentRecurrenceModel = z.object({
  /** The numeric value denoting how often the appointment will recur */
  interval: z.number().int().optional(),
  /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
  type: z.string().optional(),
  /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
  until: z.string().optional()
})
/** A view of the documents associated to the appointment */
export const createAppointmentDocumentModel = z.object({
  /** The unique identifier of the draft property inspection report document */
  draftPropertyInspectionReportId: z.string().optional(),
  /** The unique identifier of the final property inspection report document */
  finalPropertyInspectionReportId: z.string().optional()
})
/** Request body used to create a new calendar appointment */
export const createAppointmentModel = z.object({
  /** The date and time when the appointment will start */ start: z.string(),
  /** The date and time when the appointment will end */ end: z.string(),
  /** The date when the appointment should be followed up */
  followUpOn: z.string().optional(),
  /** The unique identifier of the appointment type */ typeId: z.string(),
  /** A free text description about the appointment */
  description: z.string().optional(),
  /** The unique identifier of the negotiator that organised the appointment */
  organiserId: z.string().optional(),
  /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional(),
  /** Represents an external attendee on an appointment */
  attendee: z
    .object({
      /** The unique identifier of the attendee */ id: z.string().optional(),
      /** The type of attendee (applicant/contact/landlord/tenant) */
      type: z.string().optional()
    })
    .optional(),
  /** The unique identifier of the property related to the appointment */
  propertyId: z.string().optional(),
  /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
  otherAgentId: z.string().optional(),
  /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
  accompanied: z.boolean().optional(),
  /** A flag denoting whether or not the main negotiator has confirmed their attendance */
  negotiatorConfirmed: z.boolean().optional(),
  /** A flag denoting whether or not the attendee has confirmed their attendance */
  attendeeConfirmed: z.boolean().optional(),
  /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
  propertyConfirmed: z.boolean().optional(),
  /** A flag denoting whether or not the appointment is virtual */
  virtual: z.boolean().optional(),
  /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
  isRepeat: z.boolean().optional(),
  /** The attendance status of the appointment (notSet/noShow/attended) */
  attended: z.string().optional(),
  /** Details of an appointment's recurrence pattern */
  recurrence: z
    .object({
      /** The numeric value denoting how often the appointment will recur */
      interval: z.number().int().optional(),
      /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
      type: z.string().optional(),
      /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
      until: z.string().optional()
    })
    .optional(),
  /** A view of the documents associated to the appointment */
  documents: z
    .object({
      /** The unique identifier of the draft property inspection report document */
      draftPropertyInspectionReportId: z.string().optional(),
      /** The unique identifier of the final property inspection report document */
      finalPropertyInspectionReportId: z.string().optional()
    })
    .optional(),
  /** App specific metadata to set against the appointment */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Represents an external attendee on an appointment */
export const updateAppointmentAttendeeModel = z.object({
  /** The unique identifier of the attendee. To clear an attendee this can be passed as an empty string. */
  id: z.string().optional(),
  /** The type of attendee (applicant/contact/landlord/tenant) */
  type: z.string().optional(),
  /** A flag denoting whether or not the attendee has confirmed their attendance */
  confirmed: z.boolean().optional()
})
/** Represents the follow up information on a single appointment */
export const updateAppointmentFollowUpModel = z.object({
  /** The unique identifier of a pre-defined follow up response type */
  responseId: z.string().optional(),
  /** The internal follow up notes to be stored against the appointment */
  notes: z.string().optional()
})
/** Details of an appointment's recurrence pattern */
export const updateAppointmentRecurrenceModel = z.object({
  /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
  type: z.string().optional(),
  /** The numeric value denoting how often the appointment will recur */
  interval: z.number().int().optional(),
  /** The date and time of the last occurrence of the appointment */
  until: z.string().optional()
})
/** A view of the documents associated to the appointment */
export const updateAppointmentDocumentModel = z.object({
  /** The unique identifier of the draft property inspection report document */
  draftPropertyInspectionReportId: z.string().optional(),
  /** The unique identifier of the final property inspection report document */
  finalPropertyInspectionReportId: z.string().optional()
})
/** Request body used to update an existing calendar appointment */
export const updateAppointmentModel = z.object({
  /** The date and time when the appointment will start */
  start: z.string().optional(),
  /** The date and time when the appointment will end */
  end: z.string().optional(),
  /** The date when the appointment should be followed up */
  followUpOn: z.string().optional(),
  /** The unique identifier of the appointment type */
  typeId: z.string().optional(),
  /** A free text description about the appointment */
  description: z.string().optional(),
  /** The unique identifier of the property related to the appointment */
  propertyId: z.string().optional(),
  /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
  otherAgentId: z.string().optional(),
  /** The unique identifier of the negotiator that organised the appointment */
  organiserId: z.string().optional(),
  /** A flag denoting whether or not the appointment has been cancelled */
  cancelled: z.boolean().optional(),
  /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional(),
  /** Represents an external attendee on an appointment */
  attendee: z
    .object({
      /** The unique identifier of the attendee. To clear an attendee this can be passed as an empty string. */
      id: z.string().optional(),
      /** The type of attendee (applicant/contact/landlord/tenant) */
      type: z.string().optional(),
      /** A flag denoting whether or not the attendee has confirmed their attendance */
      confirmed: z.boolean().optional()
    })
    .optional(),
  /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
  accompanied: z.boolean().optional(),
  /** A flag denoting whether or not the appointment is virtual */
  virtual: z.boolean().optional(),
  /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
  isRepeat: z.boolean().optional(),
  /** A flag denoting whether or not the main negotiator has confirmed their attendance */
  negotiatorConfirmed: z.boolean().optional(),
  /** A flag denoting whether or not the attendee has confirmed their attendance */
  attendeeConfirmed: z.boolean().optional(),
  /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
  propertyConfirmed: z.boolean().optional(),
  /** The attendance status of the appointment (notSet/noShow/attended) */
  attended: z.string().optional(),
  /** Represents the follow up information on a single appointment */
  followUp: z
    .object({
      /** The unique identifier of a pre-defined follow up response type */
      responseId: z.string().optional(),
      /** The internal follow up notes to be stored against the appointment */
      notes: z.string().optional()
    })
    .optional(),
  /** Details of an appointment's recurrence pattern */
  recurrence: z
    .object({
      /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
      type: z.string().optional(),
      /** The numeric value denoting how often the appointment will recur */
      interval: z.number().int().optional(),
      /** The date and time of the last occurrence of the appointment */
      until: z.string().optional()
    })
    .optional(),
  /** A view of the documents associated to the appointment */
  documents: z
    .object({
      /** The unique identifier of the draft property inspection report document */
      draftPropertyInspectionReportId: z.string().optional(),
      /** The unique identifier of the final property inspection report document */
      finalPropertyInspectionReportId: z.string().optional()
    })
    .optional(),
  /** App specific metadata to set against the appointment */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Representation of a calendar appointment */
export const openHouseAttendeeModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the open house attendee */
  id: z.string().optional(),
  /** The unique identifier of the open house appointment */
  openHouseId: z.string().optional(),
  /** The date and time when the open house attendee was created */
  created: z.string().optional(),
  /** The date and time when the open house attendee was last modified */
  modified: z.string().optional(),
  /** The notes taken regarding the open house attendee */
  notes: z.string().optional(),
  /** The open house attendees interest level (veryInterested/notInterested/possibleInterest) */
  interestLevel: z.string().optional(),
  /** An appointment attendee */
  attendee: z
    .object({
      /** The unique identifier of the attendee */ id: z.string().optional(),
      /** The type of attendee */ type: z.string().optional(),
      /** A collection of contacts relating to the attendee */
      contacts: z
        .array(
          /** A summarised view of the details of a contact associated to an appointment attendee */
          z.object({
            /** The unique identifier of the contact */
            id: z.string().optional(),
            /** The name of the contact */ name: z.string().optional(),
            /** The home phone number of the contact */
            homePhone: z.string().optional(),
            /** The work phone number of the contact */
            workPhone: z.string().optional(),
            /** The mobile phone number of the contact */
            mobilePhone: z.string().optional(),
            /** The email address of the contact */
            email: z.string().optional(),
            /** A flag determining if the related contact is archived */
            fromArchive: z.boolean().optional()
          })
        )
        .optional()
    })
    .optional(),
  /** The ETag for the current version of the open house attendee. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const openHouseAttendeeModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a calendar appointment */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the open house attendee */
        id: z.string().optional(),
        /** The unique identifier of the open house appointment */
        openHouseId: z.string().optional(),
        /** The date and time when the open house attendee was created */
        created: z.string().optional(),
        /** The date and time when the open house attendee was last modified */
        modified: z.string().optional(),
        /** The notes taken regarding the open house attendee */
        notes: z.string().optional(),
        /** The open house attendees interest level (veryInterested/notInterested/possibleInterest) */
        interestLevel: z.string().optional(),
        /** An appointment attendee */
        attendee: z
          .object({
            /** The unique identifier of the attendee */
            id: z.string().optional(),
            /** The type of attendee */ type: z.string().optional(),
            /** A collection of contacts relating to the attendee */
            contacts: z
              .array(
                /** A summarised view of the details of a contact associated to an appointment attendee */
                z.object({
                  /** The unique identifier of the contact */
                  id: z.string().optional(),
                  /** The name of the contact */ name: z.string().optional(),
                  /** The home phone number of the contact */
                  homePhone: z.string().optional(),
                  /** The work phone number of the contact */
                  workPhone: z.string().optional(),
                  /** The mobile phone number of the contact */
                  mobilePhone: z.string().optional(),
                  /** The email address of the contact */
                  email: z.string().optional(),
                  /** A flag determining if the related contact is archived */
                  fromArchive: z.boolean().optional()
                })
              )
              .optional()
          })
          .optional(),
        /** The ETag for the current version of the open house attendee. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new open house attendee */
export const createOpenHouseAttendeeModel = z.object({
  /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
  interestLevel: z.string().optional(),
  /** Notes on this open house attendee */ notes: z.string().optional(),
  /** Represents an external attendee on an appointment */
  attendee: z
    .object({
      /** The unique identifier of the attendee */ id: z.string().optional(),
      /** The type of attendee (applicant/contact/landlord/tenant) */
      type: z.string().optional()
    })
    .optional()
})
/** Request body used to upda te a new open house attendee */
export const updateOpenHouseAttendeeModel = z.object({
  /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
  interestLevel: z.string().optional(),
  /** Notes on this open house attendee */ notes: z.string().optional()
})
/** Representation of the physical address of a building or premise */
export const companyAddressModel = z.object({
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  country: z.string().optional()
})
/** Representation of the payments and terms configuration for a company */
export const companyPaymentsModel = z.object({
  /** The identifier of the nominal code selected in the payments and terms configuration */
  nominalAccountId: z.string().optional()
})
/** Representation of additional contact details */
export const additionalCompanyContactDetailsModel = z.object({
  /** The type of contact detail */ type: z.string().optional(),
  /** The contact detail */ value: z.string().optional()
})
/** Representation of the roles that an individual companies possesses */
export const companyRoleModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the relationship */ id: z.string().optional(),
  /** The date and time when the relationship was created */
  created: z.string().optional(),
  /** The date and time when the relationship was last modified */
  modified: z.string().optional(),
  /** The unique identifier of the related company */
  companyId: z.string().optional(),
  /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
  associatedType: z.string().optional(),
  /** The unique identifier of the related entity */
  associatedId: z.string().optional(),
  /** Flag to determine if this role on the system is now archived */
  fromArchive: z.boolean().optional()
})
/** Representation of a company */
export const companyModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the company */ id: z.string().optional(),
  /** The date and time when the company was created */
  created: z.string().optional(),
  /** The date and time when the company was last modified */
  modified: z.string().optional(),
  /** The name of the company */ name: z.string().optional(),
  /** The branch name of the company */ branch: z.string().optional(),
  /** A free text field containing notes that describe the company's business or service offering */
  notes: z.string().optional(),
  /** A flag determining whether or not the company is currently active */
  active: z.boolean().optional(),
  /** The marketing consent status of the company (deny/notAsked) */
  marketingConsent: z.string().optional(),
  /** A flag determining whether or not the company is VAT registered */
  vatRegistered: z.boolean().optional(),
  /** A collection of unique identifiers of company types that categorise the type of business the company operates */
  typeIds: z.array(z.string()).optional(),
  /** The unique identifier of a supplier type, if the company is a supplier */
  supplierTypeId: z.string().optional(),
  /** The work phone number of the company */ workPhone: z.string().optional(),
  /** The mobile phone number of the company */
  mobilePhone: z.string().optional(),
  /** The email address of the company */ email: z.string().optional(),
  /** The date and time the company was archived */
  archivedOn: z.string().optional(),
  /** A flag determining whether or not the company is archived */
  fromArchive: z.boolean().optional(),
  /** Representation of the physical address of a building or premise */
  address: z
    .object({
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides within */
      country: z.string().optional()
    })
    .optional(),
  /** Representation of the payments and terms configuration for a company */
  payments: z
    .object({
      /** The identifier of the nominal code selected in the payments and terms configuration */
      nominalAccountId: z.string().optional()
    })
    .optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z
    .array(
      /** Representation of additional contact details */
      z.object({
        /** The type of contact detail */ type: z.string().optional(),
        /** The contact detail */ value: z.string().optional()
      })
    )
    .optional(),
  /** A collection of unique identifiers of offices attached to the company. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of negotiators attached to the company. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).optional(),
  /** A flag determining whether or not the company is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().optional(),
  /** A flag determining whether or not the company is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().optional(),
  /** A flag determining whether or not the company is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().optional(),
  /** A flag determining whether or not the company is happy to receive communications by SMS */
  communicationPreferenceSms: z.boolean().optional(),
  /** App specific metadata that has been set against the company */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the company. Used for managing update concurrency */
  _eTag: z.string().optional(),
  /** A list of relationships belonging to the company. This is later removed from the response */
  relationships: z
    .array(
      /** Representation of the roles that an individual companies possesses */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the relationship */
        id: z.string().optional(),
        /** The date and time when the relationship was created */
        created: z.string().optional(),
        /** The date and time when the relationship was last modified */
        modified: z.string().optional(),
        /** The unique identifier of the related company */
        companyId: z.string().optional(),
        /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
        associatedType: z.string().optional(),
        /** The unique identifier of the related entity */
        associatedId: z.string().optional(),
        /** Flag to determine if this role on the system is now archived */
        fromArchive: z.boolean().optional()
      })
    )
    .optional()
})
export const companyModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a company */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the company */ id: z.string().optional(),
        /** The date and time when the company was created */
        created: z.string().optional(),
        /** The date and time when the company was last modified */
        modified: z.string().optional(),
        /** The name of the company */ name: z.string().optional(),
        /** The branch name of the company */ branch: z.string().optional(),
        /** A free text field containing notes that describe the company's business or service offering */
        notes: z.string().optional(),
        /** A flag determining whether or not the company is currently active */
        active: z.boolean().optional(),
        /** The marketing consent status of the company (deny/notAsked) */
        marketingConsent: z.string().optional(),
        /** A flag determining whether or not the company is VAT registered */
        vatRegistered: z.boolean().optional(),
        /** A collection of unique identifiers of company types that categorise the type of business the company operates */
        typeIds: z.array(z.string()).optional(),
        /** The unique identifier of a supplier type, if the company is a supplier */
        supplierTypeId: z.string().optional(),
        /** The work phone number of the company */
        workPhone: z.string().optional(),
        /** The mobile phone number of the company */
        mobilePhone: z.string().optional(),
        /** The email address of the company */ email: z.string().optional(),
        /** The date and time the company was archived */
        archivedOn: z.string().optional(),
        /** A flag determining whether or not the company is archived */
        fromArchive: z.boolean().optional(),
        /** Representation of the physical address of a building or premise */
        address: z
          .object({
            /** The building name */ buildingName: z.string().optional(),
            /** The building number */ buildingNumber: z.string().optional(),
            /** The first line of the address */ line1: z.string().optional(),
            /** The second line of the address */ line2: z.string().optional(),
            /** The third line of the address */ line3: z.string().optional(),
            /** The fourth line of the address */ line4: z.string().optional(),
            /** The postcode */ postcode: z.string().optional(),
            /** The ISO-3166 country code that the address resides within */
            country: z.string().optional()
          })
          .optional(),
        /** Representation of the payments and terms configuration for a company */
        payments: z
          .object({
            /** The identifier of the nominal code selected in the payments and terms configuration */
            nominalAccountId: z.string().optional()
          })
          .optional(),
        /** A collection of additional contact details */
        additionalContactDetails: z
          .array(
            /** Representation of additional contact details */
            z.object({
              /** The type of contact detail */ type: z.string().optional(),
              /** The contact detail */ value: z.string().optional()
            })
          )
          .optional(),
        /** A collection of unique identifiers of offices attached to the company. The first item in the collection is considered the primary office */
        officeIds: z.array(z.string()).optional(),
        /** A collection of unique identifiers of negotiators attached to the company. The first item in the collection is considered the primary negotiator */
        negotiatorIds: z.array(z.string()).optional(),
        /** A flag determining whether or not the company is happy to receive communications by letter */
        communicationPreferenceLetter: z.boolean().optional(),
        /** A flag determining whether or not the company is happy to receive communications by email */
        communicationPreferenceEmail: z.boolean().optional(),
        /** A flag determining whether or not the company is happy to receive communications by phone */
        communicationPreferencePhone: z.boolean().optional(),
        /** A flag determining whether or not the company is happy to receive communications by SMS */
        communicationPreferenceSms: z.boolean().optional(),
        /** App specific metadata that has been set against the company */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the company. Used for managing update concurrency */
        _eTag: z.string().optional(),
        /** A list of relationships belonging to the company. This is later removed from the response */
        relationships: z
          .array(
            /** Representation of the roles that an individual companies possesses */
            z.object({
              _links: z
                .record(z.string(), z.object({ href: z.string().optional() }))
                .optional(),
              _embedded: z.record(z.string(), z.object({})).optional(),
              /** The unique identifier of the relationship */
              id: z.string().optional(),
              /** The date and time when the relationship was created */
              created: z.string().optional(),
              /** The date and time when the relationship was last modified */
              modified: z.string().optional(),
              /** The unique identifier of the related company */
              companyId: z.string().optional(),
              /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
              associatedType: z.string().optional(),
              /** The unique identifier of the related entity */
              associatedId: z.string().optional(),
              /** Flag to determine if this role on the system is now archived */
              fromArchive: z.boolean().optional()
            })
          )
          .optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body to set the address of a new company */
export const createCompanyAddressModel = z.object({
  /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
  type: z.string().optional(),
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  countryId: z.string().optional()
})
/** Request body used to create a new company */
export const createCompanyModel = z.object({
  /** The name of the company */ name: z.string(),
  /** The branch name of the company */ branch: z.string().optional(),
  /** A free text field containing notes that describe the company's business or service offering */
  notes: z.string().optional(),
  /** A flag determining whether or not the company is currently active */
  active: z.boolean().optional(),
  /** The marketing consent status of the company (deny/notAsked) */
  marketingConsent: z.string().optional(),
  /** A flag determining whether or not the company is VAT registered */
  vatRegistered: z.boolean().optional(),
  /** A collection of unique identifiers of company types that categorise the type of business the company operates */
  typeIds: z.array(z.string()),
  /** The unique identifier of a supplier type, if the company is a supplier */
  supplierTypeId: z.string().optional(),
  /** The work phone number of the company. (Required when no other company or address details are provided) */
  workPhone: z.string().optional(),
  /** The mobile phone number of the company. (Required when no other company or address details are provided) */
  mobilePhone: z.string().optional(),
  /** The email address of the company. (Required when no other company or address details are provided) */
  email: z.string().optional(),
  /** Request body to set the address of a new company */
  address: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().optional(),
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides within */
      countryId: z.string().optional()
    })
    .optional(),
  /** A flag determining whether or not the company is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().optional(),
  /** A flag determining whether or not the company is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().optional(),
  /** A flag determining whether or not the company is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().optional(),
  /** A flag determining whether or not the company is happy to receive communications by SMS */
  communicationPreferenceSms: z.boolean().optional(),
  /** App specific metadata to set against the company */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body to set the address of an existing company */
export const updateCompanyAddressModel = z.object({
  /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
  type: z.string().optional(),
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  countryId: z.string().optional()
})
/** Request body used to update an existing company */
export const updateCompanyModel = z.object({
  /** The name of the company */ name: z.string().optional(),
  /** The branch name of the company */ branch: z.string().optional(),
  /** A free text field containing notes that describe the company's business or service offering */
  notes: z.string().optional(),
  /** A flag determining whether or not the company is currently active */
  active: z.boolean().optional(),
  /** The marketing consent status of the company (deny/notAsked) */
  marketingConsent: z.string().optional(),
  /** A flag determining whether or not the company is VAT registered */
  vatRegistered: z.boolean().optional(),
  /** A collection of unique identifiers of company types that categorise the type of business the company operates */
  typeIds: z.array(z.string()).optional(),
  /** The unique identifier of a supplier type, if the company is a supplier */
  supplierTypeId: z.string().optional(),
  /** The work phone number of the company */ workPhone: z.string().optional(),
  /** The mobile phone number of the company */
  mobilePhone: z.string().optional(),
  /** The email address of the company */ email: z.string().optional(),
  /** Request body to set the address of an existing company */
  address: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().optional(),
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides within */
      countryId: z.string().optional()
    })
    .optional(),
  /** A flag determining whether or not the company is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().optional(),
  /** A flag determining whether or not the company is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().optional(),
  /** A flag determining whether or not the company is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().optional(),
  /** A flag determining whether or not the company is happy to receive communications by SMS */
  communicationPreferenceSms: z.boolean().optional(),
  /** App specific metadata to set against the company */
  metadata: z.record(z.string(), z.object({})).optional()
})
export const companyRoleModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of the roles that an individual companies possesses */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the relationship */
        id: z.string().optional(),
        /** The date and time when the relationship was created */
        created: z.string().optional(),
        /** The date and time when the relationship was last modified */
        modified: z.string().optional(),
        /** The unique identifier of the related company */
        companyId: z.string().optional(),
        /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
        associatedType: z.string().optional(),
        /** The unique identifier of the related entity */
        associatedId: z.string().optional(),
        /** Flag to determine if this role on the system is now archived */
        fromArchive: z.boolean().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Representation of a staff member */
export const staffModel = z.object({
  /** The staff member's name */ name: z.string().optional(),
  /** A flag determining whether or not the staff member is currently active */
  active: z.boolean().optional(),
  /** The staff member's job title */ jobTitle: z.string().optional(),
  /** The staff member's work phone */ workPhone: z.string().optional(),
  /** The staff member's mobile phone */ mobilePhone: z.string().optional(),
  /** The staff member's email */ email: z.string().optional(),
  /** The staff member's preferred salutation */
  salutation: z.string().optional()
})
export const staffModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a staff member */
      z.object({
        /** The staff member's name */ name: z.string().optional(),
        /** A flag determining whether or not the staff member is currently active */
        active: z.boolean().optional(),
        /** The staff member's job title */ jobTitle: z.string().optional(),
        /** The staff member's work phone */ workPhone: z.string().optional(),
        /** The staff member's mobile phone */
        mobilePhone: z.string().optional(),
        /** The staff member's email */ email: z.string().optional(),
        /** The staff member's preferred salutation */
        salutation: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Representation of a configuration item */
export const listItemModel = z.object({
  /** The unique identifier of the list item */ id: z.string().optional(),
  /** The textual value for the list item */ value: z.string().optional()
})
/** Representation of all of the available configurable items */
export const typeModel = z.object({
  /** A list of configurable agency types */
  agencyTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable appointment types */
  appointmentTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable applicant statuses */
  applicantStatuses: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable board statuses */
  boardStatuses: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable buying positions */
  buyingPositions: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable buying reasons */
  buyingReasons: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable certificate types */
  certificateTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable company types */
  companyTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable contact categories */
  contactCategories: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable document types */
  documentTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable identity document types */
  identityDocumentTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable journal entry types */
  journalEntryTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable key types */
  keyTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable follow up responses */
  followUpResponses: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable selling reasons */
  sellingReasons: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable rent insurance cancellation reasons */
  rentInsuranceCancellationReasons: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable renting positions */
  rentingPositions: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable supplier types */
  supplierTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable task types */
  taskTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable tenancy legal status */
  tenancyLegalStatuses: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable tenancy types */
  tenancyTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable vendor types */
  vendorTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional(),
  /** A list of configurable works order types */
  worksOrderTypes: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional()
})
/** Representation of a certificate type */
export const certificateTypeModel = z.object({
  /** The unique identifier of the list item */ id: z.string().optional(),
  /** The textual value for the list item */ value: z.string().optional(),
  /** The configurable statuses associated to the certificate type */
  statuses: z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .optional()
})
/** Representation of detail properties configuration item
configuration */
export const listItemDetailModel = z.object({
  /** The unique identifier of the list item */ id: z.string().optional(),
  /** The textual value for the list item */ value: z.string().optional(),
  /** A flag determining the status */ active: z.boolean().optional(),
  /** A collection of unique identifiers of offices associated */
  officeIds: z.array(z.string()).optional()
})
/** Terminologies associated with the properties */
export const propertyTerminologyModel = z.object({
  /** A flag denoting whether the agent's CRM is configured to use "Sold STC/SSTC" terminology instead of "Under Offer" */
  useSoldStc: z.boolean().optional(),
  /** A flag denoting whether the agent's CRM is configured to use "Market Appraisal" terminology instead of "Valuation" */
  useMarketAppraisal: z.boolean().optional()
})
/** Representation of the configuration settings for terminology */
export const terminologyModel = z.object({
  /** Terminologies associated with the properties */
  properties: z
    .object({
      /** A flag denoting whether the agent's CRM is configured to use "Sold STC/SSTC" terminology instead of "Under Offer" */
      useSoldStc: z.boolean().optional(),
      /** A flag denoting whether the agent's CRM is configured to use "Market Appraisal" terminology instead of "Valuation" */
      useMarketAppraisal: z.boolean().optional()
    })
    .optional()
})
/** Representation of a contact's source */
export const contactSourceModel = z.object({
  /** The unique identifier of the source of the contact */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** Representation of the physical address of a building or premise */
export const contactAddressModel = z.object({
  /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
  type: z.string().optional(),
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides in */
  countryId: z.string().optional()
})
/** Representation of the roles that an individual contacts possesses */
export const contactRoleModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the relationship */ id: z.string().optional(),
  /** The date and time when the relationship was created */
  created: z.string().optional(),
  /** The date and time when the relationship was last modified */
  modified: z.string().optional(),
  /** The unique identifier of the related contact */
  contactId: z.string().optional(),
  /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
  associatedType: z.string().optional(),
  /** The unique identifier of the related entity */
  associatedId: z.string().optional(),
  /** Flag to determine if this role on the system is now archived */
  fromArchive: z.boolean().optional()
})
/** Representation of an individual contact */
export const contactModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the contact */ id: z.string().optional(),
  /** The date and time when the contact was created */
  created: z.string().optional(),
  /** The date and time when the contact was last modified */
  modified: z.string().optional(),
  /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
  title: z.string().optional(),
  /** The contact's forename */ forename: z.string().optional(),
  /** The contact's surname */ surname: z.string().optional(),
  /** The contact's date of birth */ dateOfBirth: z.string().optional(),
  /** A flag determining whether or not the contact is currently active */
  active: z.boolean().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked) */
  marketingConsent: z.string().optional(),
  /** The status of the last identity check performed against the contact (pass/fail/pending/cancelled/warnings/unchecked) */
  identityCheck: z.string().optional(),
  /** Representation of a contact's source */
  source: z
    .object({
      /** The unique identifier of the source of the contact */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** The home phone number of the contact */ homePhone: z.string().optional(),
  /** The work phone number of the contact */ workPhone: z.string().optional(),
  /** The mobile phone number of the contact */
  mobilePhone: z.string().optional(),
  /** The email address of the contact */ email: z.string().optional(),
  /** The date and time the contact was archived */
  archivedOn: z.string().optional(),
  /** A flag determining whether or not the contact is archived */
  fromArchive: z.boolean().optional(),
  /** Representation of the physical address of a building or premise */
  primaryAddress: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().optional(),
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides in */
      countryId: z.string().optional()
    })
    .optional(),
  /** Representation of the physical address of a building or premise */
  secondaryAddress: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().optional(),
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides in */
      countryId: z.string().optional()
    })
    .optional(),
  /** Representation of the physical address of a building or premise */
  workAddress: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().optional(),
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides in */
      countryId: z.string().optional()
    })
    .optional(),
  /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).optional(),
  /** A collection of categories associated to the contact. */
  categoryIds: z.array(z.string()).optional(),
  /** A flag determining whether or not the contact is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by SMS */
  communicationPreferenceSMS: z.boolean().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z
    .array(
      /** Representation of additional contact details */
      z.object({
        /** The type of contact detail */ type: z.string().optional(),
        /** The contact detail */ value: z.string().optional()
      })
    )
    .optional(),
  /** App specific metadata that has been set against the contact */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the contact. Used for managing update concurrency */
  _eTag: z.string().optional(),
  /** The requested extras fields */
  extrasField: z.record(z.string(), z.object({})).optional(),
  /** A list of relationships belonging to the contact. This is later removed from the response */
  relationships: z
    .array(
      /** Representation of the roles that an individual contacts possesses */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the relationship */
        id: z.string().optional(),
        /** The date and time when the relationship was created */
        created: z.string().optional(),
        /** The date and time when the relationship was last modified */
        modified: z.string().optional(),
        /** The unique identifier of the related contact */
        contactId: z.string().optional(),
        /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
        associatedType: z.string().optional(),
        /** The unique identifier of the related entity */
        associatedId: z.string().optional(),
        /** Flag to determine if this role on the system is now archived */
        fromArchive: z.boolean().optional()
      })
    )
    .optional()
})
export const contactModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an individual contact */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the contact */ id: z.string().optional(),
        /** The date and time when the contact was created */
        created: z.string().optional(),
        /** The date and time when the contact was last modified */
        modified: z.string().optional(),
        /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
        title: z.string().optional(),
        /** The contact's forename */ forename: z.string().optional(),
        /** The contact's surname */ surname: z.string().optional(),
        /** The contact's date of birth */ dateOfBirth: z.string().optional(),
        /** A flag determining whether or not the contact is currently active */
        active: z.boolean().optional(),
        /** The marketing consent status of the contact (grant/deny/notAsked) */
        marketingConsent: z.string().optional(),
        /** The status of the last identity check performed against the contact (pass/fail/pending/cancelled/warnings/unchecked) */
        identityCheck: z.string().optional(),
        /** Representation of a contact's source */
        source: z
          .object({
            /** The unique identifier of the source of the contact */
            id: z.string().optional(),
            /** The source type (office/source) */ type: z.string().optional()
          })
          .optional(),
        /** The home phone number of the contact */
        homePhone: z.string().optional(),
        /** The work phone number of the contact */
        workPhone: z.string().optional(),
        /** The mobile phone number of the contact */
        mobilePhone: z.string().optional(),
        /** The email address of the contact */ email: z.string().optional(),
        /** The date and time the contact was archived */
        archivedOn: z.string().optional(),
        /** A flag determining whether or not the contact is archived */
        fromArchive: z.boolean().optional(),
        /** Representation of the physical address of a building or premise */
        primaryAddress: z
          .object({
            /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
            type: z.string().optional(),
            /** The building name */ buildingName: z.string().optional(),
            /** The building number */ buildingNumber: z.string().optional(),
            /** The first line of the address */ line1: z.string().optional(),
            /** The second line of the address */ line2: z.string().optional(),
            /** The third line of the address */ line3: z.string().optional(),
            /** The fourth line of the address */ line4: z.string().optional(),
            /** The postcode */ postcode: z.string().optional(),
            /** The ISO-3166 country code that the address resides in */
            countryId: z.string().optional()
          })
          .optional(),
        /** Representation of the physical address of a building or premise */
        secondaryAddress: z
          .object({
            /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
            type: z.string().optional(),
            /** The building name */ buildingName: z.string().optional(),
            /** The building number */ buildingNumber: z.string().optional(),
            /** The first line of the address */ line1: z.string().optional(),
            /** The second line of the address */ line2: z.string().optional(),
            /** The third line of the address */ line3: z.string().optional(),
            /** The fourth line of the address */ line4: z.string().optional(),
            /** The postcode */ postcode: z.string().optional(),
            /** The ISO-3166 country code that the address resides in */
            countryId: z.string().optional()
          })
          .optional(),
        /** Representation of the physical address of a building or premise */
        workAddress: z
          .object({
            /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
            type: z.string().optional(),
            /** The building name */ buildingName: z.string().optional(),
            /** The building number */ buildingNumber: z.string().optional(),
            /** The first line of the address */ line1: z.string().optional(),
            /** The second line of the address */ line2: z.string().optional(),
            /** The third line of the address */ line3: z.string().optional(),
            /** The fourth line of the address */ line4: z.string().optional(),
            /** The postcode */ postcode: z.string().optional(),
            /** The ISO-3166 country code that the address resides in */
            countryId: z.string().optional()
          })
          .optional(),
        /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
        officeIds: z.array(z.string()).optional(),
        /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
        negotiatorIds: z.array(z.string()).optional(),
        /** A collection of categories associated to the contact. */
        categoryIds: z.array(z.string()).optional(),
        /** A flag determining whether or not the contact is happy to receive communications by letter */
        communicationPreferenceLetter: z.boolean().optional(),
        /** A flag determining whether or not the contact is happy to receive communications by email */
        communicationPreferenceEmail: z.boolean().optional(),
        /** A flag determining whether or not the contact is happy to receive communications by phone */
        communicationPreferencePhone: z.boolean().optional(),
        /** A flag determining whether or not the contact is happy to receive communications by SMS */
        communicationPreferenceSMS: z.boolean().optional(),
        /** A collection of additional contact details */
        additionalContactDetails: z
          .array(
            /** Representation of additional contact details */
            z.object({
              /** The type of contact detail */ type: z.string().optional(),
              /** The contact detail */ value: z.string().optional()
            })
          )
          .optional(),
        /** App specific metadata that has been set against the contact */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the contact. Used for managing update concurrency */
        _eTag: z.string().optional(),
        /** The requested extras fields */
        extrasField: z.record(z.string(), z.object({})).optional(),
        /** A list of relationships belonging to the contact. This is later removed from the response */
        relationships: z
          .array(
            /** Representation of the roles that an individual contacts possesses */
            z.object({
              _links: z
                .record(z.string(), z.object({ href: z.string().optional() }))
                .optional(),
              _embedded: z.record(z.string(), z.object({})).optional(),
              /** The unique identifier of the relationship */
              id: z.string().optional(),
              /** The date and time when the relationship was created */
              created: z.string().optional(),
              /** The date and time when the relationship was last modified */
              modified: z.string().optional(),
              /** The unique identifier of the related contact */
              contactId: z.string().optional(),
              /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
              associatedType: z.string().optional(),
              /** The unique identifier of the related entity */
              associatedId: z.string().optional(),
              /** Flag to determine if this role on the system is now archived */
              fromArchive: z.boolean().optional()
            })
          )
          .optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to set the source of a new contact */
export const createContactSourceModel = z.object({
  /** The unique identifier of the source of the contact */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** Request body used to set an address against a new contact */
export const createContactAddressModel = z.object({
  /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
  type: z.string().optional(),
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides in */
  countryId: z.string().optional()
})
/** Request body used to create a new contact */
export const createContactModel = z.object({
  /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
  title: z.string().optional(),
  /** The contact's forename */ forename: z.string().optional(),
  /** The contact's surname */ surname: z.string(),
  /** The contact's date of birth */ dateOfBirth: z.string().optional(),
  /** A flag determining whether or not the contact is currently active */
  active: z.boolean().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked) */
  marketingConsent: z.string(),
  /** Request body used to set the source of a new contact */
  source: z
    .object({
      /** The unique identifier of the source of the contact */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** The home phone number of the contact (Required when no other contact details are provided) */
  homePhone: z.string().optional(),
  /** The work phone number of the contact (Required when no other contact details are provided) */
  workPhone: z.string().optional(),
  /** The mobile phone number of the contact (Required when no other contact details are provided) */
  mobilePhone: z.string().optional(),
  /** The email address of the contact (Required when no other contact details are provided) */
  email: z.string().optional(),
  /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()),
  /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()),
  /** A collection of categories associated to the contact. */
  categoryIds: z.array(z.string()).optional(),
  /** Request body used to set an address against a new contact */
  primaryAddress: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().optional(),
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides in */
      countryId: z.string().optional()
    })
    .optional(),
  /** Request body used to set an address against a new contact */
  secondaryAddress: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().optional(),
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides in */
      countryId: z.string().optional()
    })
    .optional(),
  /** Request body used to set an address against a new contact */
  workAddress: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().optional(),
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides in */
      countryId: z.string().optional()
    })
    .optional(),
  /** A flag determining whether or not the contact is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by SMS */
  communicationPreferenceSMS: z.boolean().optional(),
  /** App specific metadata to set against the contact */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body used to update the source of an existing contact */
export const updateContactSourceModel = z.object({
  /** The unique identifier of the source of the contact */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** Request body used to update an address on an existing contact */
export const updateContactAddressModel = z.object({
  /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
  type: z.string().optional(),
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the adderess resides in */
  countryId: z.string().optional()
})
/** Request body used to update an existing contact */
export const updateContactModel = z.object({
  /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
  title: z.string().optional(),
  /** The contact's forename */ forename: z.string().optional(),
  /** The contact's surname */ surname: z.string().optional(),
  /** The contact's date of birth */ dateOfBirth: z.string().optional(),
  /** A flag determining whether or not the contact is currently active */
  active: z.boolean().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked) */
  marketingConsent: z.string().optional(),
  /** Request body used to update the source of an existing contact */
  source: z
    .object({
      /** The unique identifier of the source of the contact */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** The home phone number of the contact */ homePhone: z.string().optional(),
  /** The work phone number of the contact */ workPhone: z.string().optional(),
  /** The mobile phone number of the contact */
  mobilePhone: z.string().optional(),
  /** The email address of the contact */ email: z.string().optional(),
  /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
  negotiatorIds: z.array(z.string()).optional(),
  /** A collection of categories associated to the contact. */
  categoryIds: z.array(z.string()).optional(),
  /** Request body used to update an address on an existing contact */
  primaryAddress: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().optional(),
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the adderess resides in */
      countryId: z.string().optional()
    })
    .optional(),
  /** Request body used to update an address on an existing contact */
  secondaryAddress: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().optional(),
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the adderess resides in */
      countryId: z.string().optional()
    })
    .optional(),
  /** Request body used to update an address on an existing contact */
  workAddress: z
    .object({
      /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
      type: z.string().optional(),
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the adderess resides in */
      countryId: z.string().optional()
    })
    .optional(),
  /** A flag determining whether or not the contact is happy to receive communications by letter */
  communicationPreferenceLetter: z.boolean().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by email */
  communicationPreferenceEmail: z.boolean().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by phone */
  communicationPreferencePhone: z.boolean().optional(),
  /** A flag determining whether or not the contact is happy to receive communications by SMS */
  communicationPreferenceSMS: z.boolean().optional(),
  /** A flag determining whether the contact is archived */
  fromArchive: z.boolean().optional(),
  /** App specific metadata to set against the contact */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z.record(z.string(), z.string()).optional()
})
export const contactRoleModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of the roles that an individual contacts possesses */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the relationship */
        id: z.string().optional(),
        /** The date and time when the relationship was created */
        created: z.string().optional(),
        /** The date and time when the relationship was last modified */
        modified: z.string().optional(),
        /** The unique identifier of the related contact */
        contactId: z.string().optional(),
        /** The type of related entity (applicant/landlord/offer/tenancy/vendor) */
        associatedType: z.string().optional(),
        /** The unique identifier of the related entity */
        associatedId: z.string().optional(),
        /** Flag to determine if this role on the system is now archived */
        fromArchive: z.boolean().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Representation of an individual contact subscription */
export const contactSubscriptionModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the subscription */ id: z.string().optional(),
  /** The unique identifier of the contact the subscription is associated with */
  contactId: z.string().optional(),
  /** The name of the subscription */ name: z.string().optional(),
  /** The name of the group this subscription belongs to, if applicable */
  group: z.string().optional(),
  /** The status of the subscription (subscribed/unsubscribed) */
  status: z.string().optional(),
  /** The type of subscription (mailing/event) */ type: z.string().optional(),
  /** The date and time when the subscription was started for the associated contact */
  subscribedOn: z.string().optional(),
  /** The date and time when the subscription was terminated for the associated contact */
  unsubscribedOn: z.string().optional()
})
export const contactSubscriptionModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an individual contact subscription */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the subscription */
        id: z.string().optional(),
        /** The unique identifier of the contact the subscription is associated with */
        contactId: z.string().optional(),
        /** The name of the subscription */ name: z.string().optional(),
        /** The name of the group this subscription belongs to, if applicable */
        group: z.string().optional(),
        /** The status of the subscription (subscribed/unsubscribed) */
        status: z.string().optional(),
        /** The type of subscription (mailing/event) */
        type: z.string().optional(),
        /** The date and time when the subscription was started for the associated contact */
        subscribedOn: z.string().optional(),
        /** The date and time when the subscription was terminated for the associated contact */
        unsubscribedOn: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to update an existing contact subscription */
export const updateContactSubscriptionModel = z.object({
  /** The status of the subscription (subscribed/unsubscribed) */
  status: z.string().optional()
})
/** Representation of a check list item */
export const checkListItemModel = z.object({
  /** The name of the check list item */ name: z.string().optional(),
  /** A flag to determine if the item is completed */
  completed: z.boolean().optional(),
  /** The date when the item was completed */
  completedDate: z.string().optional()
})
/** Representation of an offers sales progression information */
export const conveyancingModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the offer */ id: z.string().optional(),
  /** The date and time when the offer was created */
  created: z.string().optional(),
  /** The date and time when the offer was modified */
  modified: z.string().optional(),
  /** Flag set to true if this offer is external */
  isExternal: z.boolean().optional(),
  /** The unique identifier of the property that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
  propertyId: z.string().optional(),
  /** The address of the property that this offer is associated to */
  propertyAddress: z.string().optional(),
  /** The full name of the vendor of the property */
  vendor: z.string().optional(),
  /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
  vendorId: z.string().optional(),
  /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
  vendorSolicitorId: z.string().optional(),
  /** The full name of the buyer who has submitted the offer */
  buyer: z.string().optional(),
  /** The unique identifier of the contact that represents this buyer. Empty if the offer is external and relates to a property not instructed to the agent */
  buyerId: z.string().optional(),
  /** The unique identifier of the solicitor / conveyancer that the buyer has instructed */
  buyerSolicitorId: z.string().optional(),
  /** The name of the agent who is marketing the property, where the offer is external and and relates to a property not instructed to the agent */
  externalAgent: z.string().optional(),
  /** The unique identifier of the agent company that holds the property instruction */
  externalAgentId: z.string().optional(),
  /** The unique identifier of the offer that sits above this one in the chain (where known) */
  upwardChainId: z.string().optional(),
  /** The unique identifier of the offer that sits below this one in the chain (where known) */
  downwardChainId: z.string().optional(),
  /** The date when the fixtures and fittings form has been completed */
  fixturesAndFittingsCompleted: z.string().optional(),
  /** The date when the title deeds were requested from land registry */
  deedsRequested: z.string().optional(),
  /** The date when the title deeds were received from land registry */
  deedsReceived: z.string().optional(),
  /** The date when the legal enquiries raised by the buyers solicitor were sent */
  enquiriesSent: z.string().optional(),
  /** The date when the legal enquiries raised by the buyers solicitor were answered */
  enquiriesAnswered: z.string().optional(),
  /** The date when the buyer paid for conveyancing searches */
  searchesPaid: z.string().optional(),
  /** The date when conveyancing searches were applied for */
  searchesApplied: z.string().optional(),
  /** The date when conveyancing searches were received for */
  searchesReceived: z.string().optional(),
  /** The date when the draft contract was sent */
  contractSent: z.string().optional(),
  /** The date when the draft contract was received */
  contractReceived: z.string().optional(),
  /** The date when the contract was approved */
  contractApproved: z.string().optional(),
  /** The date when the vendor signed the approved contract */
  contractVendorSigned: z.string().optional(),
  /** The date when the buyer signed the approved contract */
  contractBuyerSigned: z.string().optional(),
  /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
  mortgageRequired: z.string().optional(),
  /** The loan to value percentage of the mortgage required */
  mortgageLoanPercentage: z.number().int().optional(),
  /** The date when the mortgage application was submitted */
  mortgageSubmitted: z.string().optional(),
  /** The date when the mortgage offer was received */
  mortgageOfferReceived: z.string().optional(),
  /** The unique identifier of the company who will provide the mortgage */
  mortgageLenderId: z.string().optional(),
  /** The unique identifier of the company who brokered the mortgage */
  mortgageBrokerId: z.string().optional(),
  /** The date of the mortgage valuation/survey */
  mortgageSurveyDate: z.string().optional(),
  /** The unique identifier of the company who will perform the mortgage valuation/survey */
  mortgageSurveyorId: z.string().optional(),
  /** Indication of whether the buyer requires that an additional survey take place  (yes/no/unknown) */
  additionalSurveyRequired: z.string().optional(),
  /** The date of the additional survey */
  additionalSurveyDate: z.string().optional(),
  /** The unique identifier of the company who will perform the additional survey */
  additionalSurveyorId: z.string().optional(),
  /** The date when the vendor conveyancer confirms the exchange */
  exchangedVendor: z.string().optional(),
  /** The date when the buyer conveyancer confirms the exchange */
  exchangedBuyer: z.string().optional(),
  /** The date when the sale completed */ completion: z.string().optional(),
  /** Check list items to be completed as part of the sales progression process */
  checkListItems: z
    .array(
      /** Representation of a check list item */
      z.object({
        /** The name of the check list item */ name: z.string().optional(),
        /** A flag to determine if the item is completed */
        completed: z.boolean().optional(),
        /** The date when the item was completed */
        completedDate: z.string().optional()
      })
    )
    .optional(),
  /** The ETag for the current version of this conveyancing record. Used for managing update concurrency */
  _eTag: z.string().optional(),
  /** App specific metadata that has been set against this conveyancing record */
  metadata: z.record(z.string(), z.object({})).optional()
})
export const conveyancingModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an offers sales progression information */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the offer */ id: z.string().optional(),
        /** The date and time when the offer was created */
        created: z.string().optional(),
        /** The date and time when the offer was modified */
        modified: z.string().optional(),
        /** Flag set to true if this offer is external */
        isExternal: z.boolean().optional(),
        /** The unique identifier of the property that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
        propertyId: z.string().optional(),
        /** The address of the property that this offer is associated to */
        propertyAddress: z.string().optional(),
        /** The full name of the vendor of the property */
        vendor: z.string().optional(),
        /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
        vendorId: z.string().optional(),
        /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
        vendorSolicitorId: z.string().optional(),
        /** The full name of the buyer who has submitted the offer */
        buyer: z.string().optional(),
        /** The unique identifier of the contact that represents this buyer. Empty if the offer is external and relates to a property not instructed to the agent */
        buyerId: z.string().optional(),
        /** The unique identifier of the solicitor / conveyancer that the buyer has instructed */
        buyerSolicitorId: z.string().optional(),
        /** The name of the agent who is marketing the property, where the offer is external and and relates to a property not instructed to the agent */
        externalAgent: z.string().optional(),
        /** The unique identifier of the agent company that holds the property instruction */
        externalAgentId: z.string().optional(),
        /** The unique identifier of the offer that sits above this one in the chain (where known) */
        upwardChainId: z.string().optional(),
        /** The unique identifier of the offer that sits below this one in the chain (where known) */
        downwardChainId: z.string().optional(),
        /** The date when the fixtures and fittings form has been completed */
        fixturesAndFittingsCompleted: z.string().optional(),
        /** The date when the title deeds were requested from land registry */
        deedsRequested: z.string().optional(),
        /** The date when the title deeds were received from land registry */
        deedsReceived: z.string().optional(),
        /** The date when the legal enquiries raised by the buyers solicitor were sent */
        enquiriesSent: z.string().optional(),
        /** The date when the legal enquiries raised by the buyers solicitor were answered */
        enquiriesAnswered: z.string().optional(),
        /** The date when the buyer paid for conveyancing searches */
        searchesPaid: z.string().optional(),
        /** The date when conveyancing searches were applied for */
        searchesApplied: z.string().optional(),
        /** The date when conveyancing searches were received for */
        searchesReceived: z.string().optional(),
        /** The date when the draft contract was sent */
        contractSent: z.string().optional(),
        /** The date when the draft contract was received */
        contractReceived: z.string().optional(),
        /** The date when the contract was approved */
        contractApproved: z.string().optional(),
        /** The date when the vendor signed the approved contract */
        contractVendorSigned: z.string().optional(),
        /** The date when the buyer signed the approved contract */
        contractBuyerSigned: z.string().optional(),
        /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
        mortgageRequired: z.string().optional(),
        /** The loan to value percentage of the mortgage required */
        mortgageLoanPercentage: z.number().int().optional(),
        /** The date when the mortgage application was submitted */
        mortgageSubmitted: z.string().optional(),
        /** The date when the mortgage offer was received */
        mortgageOfferReceived: z.string().optional(),
        /** The unique identifier of the company who will provide the mortgage */
        mortgageLenderId: z.string().optional(),
        /** The unique identifier of the company who brokered the mortgage */
        mortgageBrokerId: z.string().optional(),
        /** The date of the mortgage valuation/survey */
        mortgageSurveyDate: z.string().optional(),
        /** The unique identifier of the company who will perform the mortgage valuation/survey */
        mortgageSurveyorId: z.string().optional(),
        /** Indication of whether the buyer requires that an additional survey take place  (yes/no/unknown) */
        additionalSurveyRequired: z.string().optional(),
        /** The date of the additional survey */
        additionalSurveyDate: z.string().optional(),
        /** The unique identifier of the company who will perform the additional survey */
        additionalSurveyorId: z.string().optional(),
        /** The date when the vendor conveyancer confirms the exchange */
        exchangedVendor: z.string().optional(),
        /** The date when the buyer conveyancer confirms the exchange */
        exchangedBuyer: z.string().optional(),
        /** The date when the sale completed */
        completion: z.string().optional(),
        /** Check list items to be completed as part of the sales progression process */
        checkListItems: z
          .array(
            /** Representation of a check list item */
            z.object({
              /** The name of the check list item */
              name: z.string().optional(),
              /** A flag to determine if the item is completed */
              completed: z.boolean().optional(),
              /** The date when the item was completed */
              completedDate: z.string().optional()
            })
          )
          .optional(),
        /** The ETag for the current version of this conveyancing record. Used for managing update concurrency */
        _eTag: z.string().optional(),
        /** App specific metadata that has been set against this conveyancing record */
        metadata: z.record(z.string(), z.object({})).optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body for updating sales progression information on an existing offer */
export const updateConveyancingModel = z.object({
  /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
  vendorSolicitorId: z.string().optional(),
  /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
  buyerSolicitorId: z.string().optional(),
  /** The date when the fixtures and fittings form has been completed */
  fixturesAndFittingsCompleted: z.string().optional(),
  /** The date when the title deeds were requested from land registry */
  deedsRequested: z.string().optional(),
  /** The date when the title deeds were received from land registry */
  deedsReceived: z.string().optional(),
  /** The date when the legal enquiries raised by the buyers solicitor were sent */
  enquiriesSent: z.string().optional(),
  /** The date when the legal enquiries raised by the buyers solicitor were answered */
  enquiriesAnswered: z.string().optional(),
  /** The date when the buyer paid for conveyancing searches */
  searchesPaid: z.string().optional(),
  /** The date when conveyancing searches were applied for */
  searchesApplied: z.string().optional(),
  /** The date when conveyancing searches were received */
  searchesReceived: z.string().optional(),
  /** The date when the draft contract was sent */
  contractSent: z.string().optional(),
  /** The date when the draft contract was received */
  contractReceived: z.string().optional(),
  /** The date when the contract was approved */
  contractApproved: z.string().optional(),
  /** The date when the vendor signed the approved contract */
  contractVendorSigned: z.string().optional(),
  /** The date when the buyer signed the approved contract */
  contractBuyerSigned: z.string().optional(),
  /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
  mortgageRequired: z.string().optional(),
  /** The loan to value percentage of the mortgage required */
  mortgageLoanPercentage: z.number().int().optional(),
  /** The date when the mortgage application was submitted */
  mortgageSubmitted: z.string().optional(),
  /** The date when the mortgage offer was received */
  mortgageOfferReceived: z.string().optional(),
  /** The unique identifier of the company who will provide the mortgage */
  mortgageLenderId: z.string().optional(),
  /** The unique identifier of the company who brokered the mortgage */
  mortgageBrokerId: z.string().optional(),
  /** The date of the mortgage valuation/survey */
  mortgageSurveyDate: z.string().optional(),
  /** The unique identifier of the company who will perform the mortgage valuation/survey */
  mortgageSurveyorId: z.string().optional(),
  /** Indication of whether the buyer requires that an additional survey take place (yes/no/unknown) */
  additionalSurveyRequired: z.string().optional(),
  /** The date of the additional survey */
  additionalSurveyDate: z.string().optional(),
  /** The unique identifier of the company who will perform the additional survey */
  additionalSurveyorId: z.string().optional(),
  /** The date when the vendor conveyancer confirms the exchange */
  exchangedVendor: z.string().optional(),
  /** The date when the buyer conveyancer confirms the exchange */
  exchangedBuyer: z.string().optional(),
  /** The date when the sale completed */ completion: z.string().optional(),
  /** App specific metadata to set against this conveyancing record */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body for associating this offer to another one below it in the chain */
export const createDownwardLinkModel = z.object({
  /** The unique identifier of the offer below this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
  offerId: z.string().optional(),
  /** The address of the property below this one in the chain. (Required when 'offerId' is not provided) */
  propertyAddress: z.string().optional(),
  /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
  agent: z.string().optional(),
  /** The name of the buyer purchasing the property. (Required when 'offerId' is not provided) */
  buyer: z.string().optional(),
  /** The unique identifier of the solicitor / conveyancer that the buyer has instructed. (Required when 'offerId' is not provided) */
  buyerSolicitorId: z.string().optional()
})
/** Request body for associating this offer to another one above it in the chain */
export const createUpwardLinkModel = z.object({
  /** The unique identifier of the offer above this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
  offerId: z.string().optional(),
  /** The address of the property above this one in the chain. (Required when 'offerId' is not provided) */
  propertyAddress: z.string().optional(),
  /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
  agent: z.string().optional(),
  /** The name of the vendor selling the property. (Required when 'offerId' is not provided) */
  vendor: z.string().optional(),
  /** The unique identifier of the solicitor / conveyancer that the vendor has instructed. (Required when 'offerId' is not provided) */
  vendorSolicitorId: z.string().optional()
})
/** Representation of a department */
export const departmentModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the department */ id: z.string().optional(),
  /** The date and time when the department was created */
  created: z.string().optional(),
  /** The date and time when the department was last modified */
  modified: z.string().optional(),
  /** The name of the department */ name: z.string().optional(),
  /** A collection of property type values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  typeOptions: z.array(z.string()).optional(),
  /** A collection of property style values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  styleOptions: z.array(z.string()).optional(),
  /** A collection of property situation values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  situationOptions: z.array(z.string()).optional(),
  /** A collection of property parking values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  parkingOptions: z.array(z.string()).optional(),
  /** A collection of property age values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  ageOptions: z.array(z.string()).optional(),
  /** A collection of property locality values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  localityOptions: z.array(z.string()).optional(),
  /** A collection of special property feature values that will be presented by other services */
  specialFeaturesOptions: z.array(z.string()).optional(),
  /** A collection of commercial use class values that will be accepted by other services */
  commercialUseClassOptions: z.array(z.string()).optional(),
  /** A collection of commercial floor level values that will be accepted by other services */
  commercialFloorLevelOptions: z.array(z.string()).optional(),
  /** A flag to determing if the department has bedrooms configured */
  hasBedrooms: z.boolean().optional(),
  /** A flag to determing if the department has bathrooms configured */
  hasBathrooms: z.boolean().optional(),
  /** A flag to determing if the department has reception rooms configured */
  hasReceptionRooms: z.boolean().optional(),
  /** A flag to determing if the department has parking spaces configured */
  hasParkingSpaces: z.boolean().optional(),
  /** A flag to determing if the department allows the floor level property to be set */
  hasFloorLevelEnabled: z.boolean().optional(),
  /** A flag to determing if the department allows the internal floors property to be set */
  hasInternalFloorsEnabled: z.boolean().optional(),
  /** A flag to determing if the department allows the total floors property to be set */
  hasTotalFloorsEnabled: z.boolean().optional(),
  /** The ETag for the current version of the department. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const departmentModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a department */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the department */
        id: z.string().optional(),
        /** The date and time when the department was created */
        created: z.string().optional(),
        /** The date and time when the department was last modified */
        modified: z.string().optional(),
        /** The name of the department */ name: z.string().optional(),
        /** A collection of property type values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        typeOptions: z.array(z.string()).optional(),
        /** A collection of property style values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        styleOptions: z.array(z.string()).optional(),
        /** A collection of property situation values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        situationOptions: z.array(z.string()).optional(),
        /** A collection of property parking values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        parkingOptions: z.array(z.string()).optional(),
        /** A collection of property age values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        ageOptions: z.array(z.string()).optional(),
        /** A collection of property locality values that will be accepted by other services
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        localityOptions: z.array(z.string()).optional(),
        /** A collection of special property feature values that will be presented by other services */
        specialFeaturesOptions: z.array(z.string()).optional(),
        /** A collection of commercial use class values that will be accepted by other services */
        commercialUseClassOptions: z.array(z.string()).optional(),
        /** A collection of commercial floor level values that will be accepted by other services */
        commercialFloorLevelOptions: z.array(z.string()).optional(),
        /** A flag to determing if the department has bedrooms configured */
        hasBedrooms: z.boolean().optional(),
        /** A flag to determing if the department has bathrooms configured */
        hasBathrooms: z.boolean().optional(),
        /** A flag to determing if the department has reception rooms configured */
        hasReceptionRooms: z.boolean().optional(),
        /** A flag to determing if the department has parking spaces configured */
        hasParkingSpaces: z.boolean().optional(),
        /** A flag to determing if the department allows the floor level property to be set */
        hasFloorLevelEnabled: z.boolean().optional(),
        /** A flag to determing if the department allows the internal floors property to be set */
        hasInternalFloorsEnabled: z.boolean().optional(),
        /** A flag to determing if the department allows the total floors property to be set */
        hasTotalFloorsEnabled: z.boolean().optional(),
        /** The ETag for the current version of the department. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Representation of a document */
export const documentModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the document */ id: z.string().optional(),
  /** The date and time when the document was created */
  created: z.string().optional(),
  /** The date and time when the document was last modified */
  modified: z.string().optional(),
  /** The type of entity that the document is associated with */
  associatedType: z.string().optional(),
  /** A flag denoting whether or not the document is private */
  isPrivate: z.boolean().optional(),
  /** The unique identifier of the entity that the document is associated with */
  associatedId: z.string().optional(),
  /** The unique identifier of the type of document */
  typeId: z.string().optional(),
  /** The filename of the document */ name: z.string().optional(),
  /** App specific metadata that has been set against the document */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the document. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const documentModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a document */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the document */ id: z.string().optional(),
        /** The date and time when the document was created */
        created: z.string().optional(),
        /** The date and time when the document was last modified */
        modified: z.string().optional(),
        /** The type of entity that the document is associated with */
        associatedType: z.string().optional(),
        /** A flag denoting whether or not the document is private */
        isPrivate: z.boolean().optional(),
        /** The unique identifier of the entity that the document is associated with */
        associatedId: z.string().optional(),
        /** The unique identifier of the type of document */
        typeId: z.string().optional(),
        /** The filename of the document */ name: z.string().optional(),
        /** App specific metadata that has been set against the document */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the document. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new document */
export const createDocumentModel = z.object({
  /** The type of entity that the document is associated with (appliance/applicant/bankStatement/batch/certificate/contact/depositCertificate/estate/estateUnit/idCheck/keySet/landlord/nominalTransaction/property/supplierInvoice/tenancy/tenancyCheck/tenancyRenewal/worksOrder/renewalNegotiation) */
  associatedType: z.string(),
  /** The unique identifier of the entity that the document is associated with */
  associatedId: z.string(),
  /** The unique identifier of the type of document */ typeId: z.string(),
  /** The filename of the document */ name: z.string(),
  /** A flag denoting whether or not the document is private */
  isPrivate: z.boolean().optional(),
  /** The base64 encoded document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
This supports upto 6MB */
  fileData: z.string().optional(),
  /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
  fileUrl: z.string().optional(),
  /** App specific metadata to set against the document */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body used to update an existing document */
export const updateDocumentModel = z.object({
  /** The unique identifier of the type of document */
  typeId: z.string().optional(),
  /** The filename of the document */ name: z.string().optional(),
  /** A flag denoting whether or not the document is private */
  isPrivate: z.boolean().optional(),
  /** App specific metadata to set against the document */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body used to create pre signed urls to upload files between 6MB and 30MB */
export const createPreSignedUrlsModel = z.object({
  /** The number of pre signed urls to create */ amount: z.number().int()
})
/** Representation of the physical address of a building or premise */
export const enquiryAddressModel = z.object({
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  countryId: z.string().optional()
})
/** Request body used to create a buying enquiry */
export const enquiryBuyingModel = z.object({
  /** The lower bound of the prospective buyer's budget */
  priceFrom: z.number().int().optional(),
  /** The upper bound of the prospective buyer's budget */
  priceTo: z.number().int().optional()
})
/** The details specific to enquiries with a type of lettingsApplicant */
export const enquiryRentingModel = z.object({
  /** The lower bound of the prospective tenant's budget */
  rentFrom: z.number().optional(),
  /** The upper bound of the prospective tenant's budget */
  rentTo: z.number().optional(),
  /** How often the tenant would like to pay the rent (weekly/monthly/annually) */
  rentFrequency: z.string().optional()
})
/** Representation of an enquiry */
export const enquiryModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the enquiry */ id: z.number().int().optional(),
  /** The date and time when the enquiry was created */
  created: z.string().optional(),
  /** The date and time when the enquiry was last modified */
  modified: z.string().optional(),
  /** The title of the individual making the enquiry */
  title: z.string().optional(),
  /** The forename of the individual making the enquiry */
  forename: z.string().optional(),
  /** The surname of the individual making the enquiry */
  surname: z.string().optional(),
  /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
  enquiryType: z.string().optional(),
  /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
  message: z.string().optional(),
  /** The status of the enquiry (pending/added/rejected/alreadyExists/duplicateEntry/spam) */
  status: z.string().optional(),
  /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
  marketingConsent: z.string().optional(),
  /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
  position: z.string().optional(),
  /** The unique identifier of the office related to the enquiry */
  officeId: z.string().optional(),
  /** The unique identifier of the applicant related to the enquiry */
  applicantId: z.string().optional(),
  /** The unique identifier of the negotiator related to the enquiry */
  negotiatorId: z.string().optional(),
  /** The name of the source that the enquiry was generated by */
  sourceName: z.string().optional(),
  /** The home phone number of the individual making the enquiry */
  homePhone: z.string().optional(),
  /** The work phone number of the individual making the enquiry */
  workPhone: z.string().optional(),
  /** The mobile phone number of the individual making the enquiry */
  mobilePhone: z.string().optional(),
  /** The email of the individual making the enquiry */
  email: z.string().optional(),
  /** Representation of the physical address of a building or premise */
  address: z
    .object({
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides within */
      countryId: z.string().optional()
    })
    .optional(),
  /** Request body used to create a buying enquiry */
  buying: z
    .object({
      /** The lower bound of the prospective buyer's budget */
      priceFrom: z.number().int().optional(),
      /** The upper bound of the prospective buyer's budget */
      priceTo: z.number().int().optional()
    })
    .optional(),
  /** The details specific to enquiries with a type of lettingsApplicant */
  renting: z
    .object({
      /** The lower bound of the prospective tenant's budget */
      rentFrom: z.number().optional(),
      /** The upper bound of the prospective tenant's budget */
      rentTo: z.number().optional(),
      /** How often the tenant would like to pay the rent (weekly/monthly/annually) */
      rentFrequency: z.string().optional()
    })
    .optional(),
  /** The number of bedrooms the prospective buyer or tenant requires */
  bedrooms: z.number().int().optional(),
  /** A list of unique property identifiers that this enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
  propertyIds: z.array(z.string()).optional(),
  /** The ETag for the current version of the enquiry. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const enquiryModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an enquiry */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the enquiry */
        id: z.number().int().optional(),
        /** The date and time when the enquiry was created */
        created: z.string().optional(),
        /** The date and time when the enquiry was last modified */
        modified: z.string().optional(),
        /** The title of the individual making the enquiry */
        title: z.string().optional(),
        /** The forename of the individual making the enquiry */
        forename: z.string().optional(),
        /** The surname of the individual making the enquiry */
        surname: z.string().optional(),
        /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
        enquiryType: z.string().optional(),
        /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
        message: z.string().optional(),
        /** The status of the enquiry (pending/added/rejected/alreadyExists/duplicateEntry/spam) */
        status: z.string().optional(),
        /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
        marketingConsent: z.string().optional(),
        /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
        position: z.string().optional(),
        /** The unique identifier of the office related to the enquiry */
        officeId: z.string().optional(),
        /** The unique identifier of the applicant related to the enquiry */
        applicantId: z.string().optional(),
        /** The unique identifier of the negotiator related to the enquiry */
        negotiatorId: z.string().optional(),
        /** The name of the source that the enquiry was generated by */
        sourceName: z.string().optional(),
        /** The home phone number of the individual making the enquiry */
        homePhone: z.string().optional(),
        /** The work phone number of the individual making the enquiry */
        workPhone: z.string().optional(),
        /** The mobile phone number of the individual making the enquiry */
        mobilePhone: z.string().optional(),
        /** The email of the individual making the enquiry */
        email: z.string().optional(),
        /** Representation of the physical address of a building or premise */
        address: z
          .object({
            /** The building name */ buildingName: z.string().optional(),
            /** The building number */ buildingNumber: z.string().optional(),
            /** The first line of the address */ line1: z.string().optional(),
            /** The second line of the address */ line2: z.string().optional(),
            /** The third line of the address */ line3: z.string().optional(),
            /** The fourth line of the address */ line4: z.string().optional(),
            /** The postcode */ postcode: z.string().optional(),
            /** The ISO-3166 country code that the address resides within */
            countryId: z.string().optional()
          })
          .optional(),
        /** Request body used to create a buying enquiry */
        buying: z
          .object({
            /** The lower bound of the prospective buyer's budget */
            priceFrom: z.number().int().optional(),
            /** The upper bound of the prospective buyer's budget */
            priceTo: z.number().int().optional()
          })
          .optional(),
        /** The details specific to enquiries with a type of lettingsApplicant */
        renting: z
          .object({
            /** The lower bound of the prospective tenant's budget */
            rentFrom: z.number().optional(),
            /** The upper bound of the prospective tenant's budget */
            rentTo: z.number().optional(),
            /** How often the tenant would like to pay the rent (weekly/monthly/annually) */
            rentFrequency: z.string().optional()
          })
          .optional(),
        /** The number of bedrooms the prospective buyer or tenant requires */
        bedrooms: z.number().int().optional(),
        /** A list of unique property identifiers that this enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
        propertyIds: z.array(z.string()).optional(),
        /** The ETag for the current version of the enquiry. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a enquiries address */
export const createEnquiryAddressModel = z.object({
  /** Sets the building name */ buildingName: z.string().optional(),
  /** Sets the building number */ buildingNumber: z.string().optional(),
  /** Sets the first line of the address */ line1: z.string().optional(),
  /** Sets the second line of the address */ line2: z.string().optional(),
  /** Sets the third line of the address */ line3: z.string().optional(),
  /** Sets the fourth line of the address */ line4: z.string().optional(),
  /** Sets the postcode */ postcode: z.string().optional(),
  /** Sets the ISO-3166 country code that the address resides within */
  countryId: z.string().optional()
})
/** The details specific to a buying enquiry */
export const createEnquiryBuyingModel = z.object({
  /** The lower bound of the prospective buyer's budget */
  priceFrom: z.number().int().optional(),
  /** The upper bound of the prospective buyer's budget */
  priceTo: z.number().int().optional()
})
/** The details specific to renting enquiry. When type is renting. */
export const createEnquiryRentingModel = z.object({
  /** The lower bound of the prospective tenant's budget */
  rentFrom: z.number().int().optional(),
  /** The upper bound of the prospective tenant's budget */
  rentTo: z.number().int().optional(),
  /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
  rentFrequency: z.string().optional()
})
/** Request body used to create an enquiry */
export const createEnquiryModel = z.object({
  /** The title of the individual making the enquiry */ title: z.string(),
  /** The forename of the individual making the enquiry */ forename: z.string(),
  /** The surname of the individual making the enquiry */ surname: z.string(),
  /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
  position: z.string().optional(),
  /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
  enquiryType: z.string(),
  /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
  message: z.string(),
  /** The unique identifier of the related office */ officeId: z.string(),
  /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
  marketingConsent: z.string(),
  /** The name of the source that the enquiry was generated from */
  sourceName: z.string(),
  /** The home phone number of the individual making the enquiry (Required when no other contact details are given) */
  homePhone: z.string().optional(),
  /** The work phone number of the individual making the enquiry (Required when no other contact details are given) */
  workPhone: z.string().optional(),
  /** The mobile phone number of the individual making the enquiry (Required when no other contact details are given) */
  mobilePhone: z.string().optional(),
  /** The email of the individual making the enquiry (Required when no other contact details are given) */
  email: z.string().optional(),
  /** Request body used to create a enquiries address */
  address: z
    .object({
      /** Sets the building name */ buildingName: z.string().optional(),
      /** Sets the building number */ buildingNumber: z.string().optional(),
      /** Sets the first line of the address */ line1: z.string().optional(),
      /** Sets the second line of the address */ line2: z.string().optional(),
      /** Sets the third line of the address */ line3: z.string().optional(),
      /** Sets the fourth line of the address */ line4: z.string().optional(),
      /** Sets the postcode */ postcode: z.string().optional(),
      /** Sets the ISO-3166 country code that the address resides within */
      countryId: z.string().optional()
    })
    .optional(),
  /** The details specific to a buying enquiry */
  buying: z
    .object({
      /** The lower bound of the prospective buyer's budget */
      priceFrom: z.number().int().optional(),
      /** The upper bound of the prospective buyer's budget */
      priceTo: z.number().int().optional()
    })
    .optional(),
  /** The details specific to renting enquiry. When type is renting. */
  renting: z
    .object({
      /** The lower bound of the prospective tenant's budget */
      rentFrom: z.number().int().optional(),
      /** The upper bound of the prospective tenant's budget */
      rentTo: z.number().int().optional(),
      /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
      rentFrequency: z.string().optional()
    })
    .optional(),
  /** The number of bedrooms the prospective buyer or tenant requires */
  bedrooms: z.number().int().optional(),
  /** A list of unique property identifiers that the enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
  propertyIds: z.array(z.string()).optional()
})
/** Request body used to update an existing enquiry */
export const updateEnquiryModel = z.object({
  /** The unique identifier of the applicant associated to the enquiry */
  applicantId: z.string().optional(),
  /** The status of the enquiry (added/alreadyExists/duplicateEntry/pending/rejected/spam) */
  status: z.string().optional()
})
/** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
export const identityDocumentModel = z.object({
  /** The unique identifier of the identity document */
  documentId: z.string().optional(),
  /** The unique identifier of the type of identity document provided */
  typeId: z.string().optional(),
  /** The date when the document expires and becomes invalid */
  expiry: z.string().optional(),
  /** Details regarding the identity document (eg. passport number) */
  details: z.string().optional()
})
/** Representation of a contact identity check */
export const identityCheckModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the identity check */ id: z.string().optional(),
  /** The unique identifier of the contact associated to the identity check */
  contactId: z.string().optional(),
  /** The date and time when the identity check was created */
  created: z.string().optional(),
  /** The date and time when the identity check was last modified */
  modified: z.string().optional(),
  /** The date when the identity check was performed. This may differ to the date when the check was created */
  checkDate: z.string().optional(),
  /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
  status: z.string().optional(),
  /** The unique identifier of the negotiator that initiated the identity check */
  negotiatorId: z.string().optional(),
  /** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
  identityDocument1: z
    .object({
      /** The unique identifier of the identity document */
      documentId: z.string().optional(),
      /** The unique identifier of the type of identity document provided */
      typeId: z.string().optional(),
      /** The date when the document expires and becomes invalid */
      expiry: z.string().optional(),
      /** Details regarding the identity document (eg. passport number) */
      details: z.string().optional()
    })
    .optional(),
  /** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
  identityDocument2: z
    .object({
      /** The unique identifier of the identity document */
      documentId: z.string().optional(),
      /** The unique identifier of the type of identity document provided */
      typeId: z.string().optional(),
      /** The date when the document expires and becomes invalid */
      expiry: z.string().optional(),
      /** Details regarding the identity document (eg. passport number) */
      details: z.string().optional()
    })
    .optional(),
  /** App specific metadata that has been set against the identity check */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the identity check. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const identityCheckModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a contact identity check */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the identity check */
        id: z.string().optional(),
        /** The unique identifier of the contact associated to the identity check */
        contactId: z.string().optional(),
        /** The date and time when the identity check was created */
        created: z.string().optional(),
        /** The date and time when the identity check was last modified */
        modified: z.string().optional(),
        /** The date when the identity check was performed. This may differ to the date when the check was created */
        checkDate: z.string().optional(),
        /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
        status: z.string().optional(),
        /** The unique identifier of the negotiator that initiated the identity check */
        negotiatorId: z.string().optional(),
        /** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
        identityDocument1: z
          .object({
            /** The unique identifier of the identity document */
            documentId: z.string().optional(),
            /** The unique identifier of the type of identity document provided */
            typeId: z.string().optional(),
            /** The date when the document expires and becomes invalid */
            expiry: z.string().optional(),
            /** Details regarding the identity document (eg. passport number) */
            details: z.string().optional()
          })
          .optional(),
        /** Representation of a single identity document that was provided as part of a contact identity check (eg. passport) */
        identityDocument2: z
          .object({
            /** The unique identifier of the identity document */
            documentId: z.string().optional(),
            /** The unique identifier of the type of identity document provided */
            typeId: z.string().optional(),
            /** The date when the document expires and becomes invalid */
            expiry: z.string().optional(),
            /** Details regarding the identity document (eg. passport number) */
            details: z.string().optional()
          })
          .optional(),
        /** App specific metadata that has been set against the identity check */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the identity check. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
export const createIdentityDocumentModel = z.object({
  /** The unique identifier of the type of identity document provided */
  typeId: z.string(),
  /** The date when the document expires and becomes invalid */
  expiry: z.string().optional(),
  /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
  details: z.string().optional(),
  /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
  fileData: z.string().optional(),
  /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
  fileUrl: z.string().optional(),
  /** The filename to store the document as (Required when 'details' are not given) */
  name: z.string().optional()
})
/** Request body used to create a new contact identity check */
export const createIdentityCheckModel = z.object({
  /** The unique identifier of the contact associated to the identity check */
  contactId: z.string(),
  /** The date when the identity check was performed. This may differ to the date when the check was created */
  checkDate: z.string(),
  /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
  status: z.string(),
  /** The unique identifier of the negotiator that initiated the identity check */
  negotiatorId: z.string(),
  /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
  identityDocument1: z
    .object({
      /** The unique identifier of the type of identity document provided */
      typeId: z.string(),
      /** The date when the document expires and becomes invalid */
      expiry: z.string().optional(),
      /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
      details: z.string().optional(),
      /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
      fileData: z.string().optional(),
      /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
      fileUrl: z.string().optional(),
      /** The filename to store the document as (Required when 'details' are not given) */
      name: z.string().optional()
    })
    .optional(),
  /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
  identityDocument2: z
    .object({
      /** The unique identifier of the type of identity document provided */
      typeId: z.string(),
      /** The date when the document expires and becomes invalid */
      expiry: z.string().optional(),
      /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
      details: z.string().optional(),
      /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
      fileData: z.string().optional(),
      /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
      fileUrl: z.string().optional(),
      /** The filename to store the document as (Required when 'details' are not given) */
      name: z.string().optional()
    })
    .optional(),
  /** App specific metadata to set against the identity check */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body to update an identity document attached to an existing contact identity check */
export const updateIdentityDocumentModel = z.object({
  /** The unique identifier of the type of identity document provided */
  typeId: z.string().optional(),
  /** The date when the document expires and becomes invalid */
  expiry: z.string().optional(),
  /** Details regarding the identity document (eg. passport number) */
  details: z.string().optional(),
  /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
  fileData: z.string().optional(),
  /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
  fileUrl: z.string().optional(),
  /** The filename to store the document as */ name: z.string().optional()
})
/** Request body used to update an exist contact identity check */
export const updateIdentityCheckModel = z.object({
  /** The date when the identity check was performed. This may differ to the date when the check was created */
  checkDate: z.string().optional(),
  /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
  status: z.string().optional(),
  /** The unique identifier of the negotiator that initiated the identity check */
  negotiatorId: z.string().optional(),
  /** Request body to update an identity document attached to an existing contact identity check */
  identityDocument1: z
    .object({
      /** The unique identifier of the type of identity document provided */
      typeId: z.string().optional(),
      /** The date when the document expires and becomes invalid */
      expiry: z.string().optional(),
      /** Details regarding the identity document (eg. passport number) */
      details: z.string().optional(),
      /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
      fileData: z.string().optional(),
      /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
      fileUrl: z.string().optional(),
      /** The filename to store the document as */ name: z.string().optional()
    })
    .optional(),
  /** Request body to update an identity document attached to an existing contact identity check */
  identityDocument2: z
    .object({
      /** The unique identifier of the type of identity document provided */
      typeId: z.string().optional(),
      /** The date when the document expires and becomes invalid */
      expiry: z.string().optional(),
      /** Details regarding the identity document (eg. passport number) */
      details: z.string().optional(),
      /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
      fileData: z.string().optional(),
      /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
      fileUrl: z.string().optional(),
      /** The filename to store the document as */ name: z.string().optional()
    })
    .optional(),
  /** App specific metadata to set against the identity check */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Representation of an individual invoice */
export const invoiceModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** Unique identifier of the invoice */ id: z.string().optional(),
  /** The date and time when the invoice was created */
  created: z.string().optional(),
  /** The date and time when the invoice was last modified */
  modified: z.string().optional(),
  /** The invoice reference */ reference: z.string().optional(),
  /** Unique identifier of the negotiator associated with the invoice */
  negotiatorId: z.string().optional(),
  /** Unique identifier of the property associated with the invoice */
  propertyId: z.string().optional(),
  /** Description of the invoice */ description: z.string().optional(),
  /** The status of the invoice */ status: z.string().optional(),
  /** The date of the invoice */ date: z.string().optional(),
  /** The due date of the invoice */ dueDate: z.string().optional(),
  /** Flag indicating whether the invoice has been raised */
  isRaised: z.boolean().optional(),
  /** The net amount due for the invoice in the system base currency */
  netAmount: z.number().optional(),
  /** The amount of VAT due for the invoice in the system base currency */
  vatAmount: z.number().optional(),
  /** The value of the invoice outstanding in the system base currency */
  outstandingAmount: z.number().optional()
})
export const invoiceModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an individual invoice */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** Unique identifier of the invoice */ id: z.string().optional(),
        /** The date and time when the invoice was created */
        created: z.string().optional(),
        /** The date and time when the invoice was last modified */
        modified: z.string().optional(),
        /** The invoice reference */ reference: z.string().optional(),
        /** Unique identifier of the negotiator associated with the invoice */
        negotiatorId: z.string().optional(),
        /** Unique identifier of the property associated with the invoice */
        propertyId: z.string().optional(),
        /** Description of the invoice */ description: z.string().optional(),
        /** The status of the invoice */ status: z.string().optional(),
        /** The date of the invoice */ date: z.string().optional(),
        /** The due date of the invoice */ dueDate: z.string().optional(),
        /** Flag indicating whether the invoice has been raised */
        isRaised: z.boolean().optional(),
        /** The net amount due for the invoice in the system base currency */
        netAmount: z.number().optional(),
        /** The amount of VAT due for the invoice in the system base currency */
        vatAmount: z.number().optional(),
        /** The value of the invoice outstanding in the system base currency */
        outstandingAmount: z.number().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Representation of an invoice charge */
export const chargeModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the charge */ id: z.string().optional(),
  /** The date and time when the charge was created */
  created: z.string().optional(),
  /** The date and time when the charge was last modified */
  modified: z.string().optional(),
  /** The type of charge (charge/advertising) */ type: z.string().optional(),
  /** The unique identifier of the invoice with which this charge is associated */
  invoiceId: z.string().optional(),
  /** The unique identifier of the property with which this charge is associated */
  propertyId: z.string().optional(),
  /** The unique identifier of the negotiator with which this charge is associated */
  negotiatorId: z.string().optional(),
  /** The code representing the VAT applied to this charge */
  vatCode: z.string().optional(),
  /** Description of the charge */ description: z.string().optional(),
  /** The net amount */ netAmount: z.number().optional(),
  /** The VAT amount */ vatAmount: z.number().optional()
})
/** Representation of an individual credit */
export const creditModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** Unique identifier of the credit */ id: z.string().optional(),
  /** The date and time when the credit was created */
  created: z.string().optional(),
  /** The date and time when the credit was last modified */
  modified: z.string().optional(),
  /** Unique identifier of the negotiator associated with the credit */
  negotiatorId: z.string().optional(),
  /** Unique identifier of the property associated with the credit */
  propertyId: z.string().optional(),
  /** Unique identifier of the invoice associated with the credit */
  invoiceId: z.string().optional(),
  /** Description of the credit */ description: z.string().optional(),
  /** The date of the credit */ date: z.string().optional(),
  /** The net amount due for the credit in the system base currency */
  netAmount: z.number().optional(),
  /** The amount of VAT due for the credit in the system base currency */
  vatAmount: z.number().optional()
})
/** Representation of an individual payment */
export const paymentModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** Unique identifier of the payment */ id: z.string().optional(),
  /** The date and time when the payment was created */
  created: z.string().optional(),
  /** The date and time when the payment was last modified */
  modified: z.string().optional(),
  /** Unique identifier of the negotiator associated with the payment */
  negotiatorId: z.string().optional(),
  /** Unique identifier of the property associated with the payment */
  propertyId: z.string().optional(),
  /** Unique identifier of the invoice associated with the payment */
  invoiceId: z.string().optional(),
  /** Description of the payment */ description: z.string().optional(),
  /** The type of payment */ type: z.string().optional(),
  /** The date of the payment */ date: z.string().optional(),
  /** The net amount due for the payment in the system base currency */
  netAmount: z.number().optional(),
  /** The amount of VAT due for the payment in the system base currency */
  vatAmount: z.number().optional()
})
/** Detailed representation of an individual invoice */
export const invoiceDetailModel = z.object({
  /** Unique identifier of the invoice */ id: z.string().optional(),
  /** The date and time when the invoice was created */
  created: z.string().optional(),
  /** The date and time when the invoice was last modified */
  modified: z.string().optional(),
  /** The invoice reference */ reference: z.string().optional(),
  /** Unique identifier of the negotiator associated with the invoice */
  negotiatorId: z.string().optional(),
  /** Unique identifier of the property associated with the invoice */
  propertyId: z.string().optional(),
  /** Description of the invoice */ description: z.string().optional(),
  /** The status of the invoice */ status: z.string().optional(),
  /** The date of the invoice */ date: z.string().optional(),
  /** The due date of the invoice */ dueDate: z.string().optional(),
  /** Flag indicating whether the invoice has been raised */
  isRaised: z.boolean().optional(),
  /** The net amount due for the invoice in the system base currency */
  netAmount: z.number().optional(),
  /** The amount of VAT due for the invoice in the system base currency */
  vatAmount: z.number().optional(),
  /** The value of the invoice outstanding in the system base currency */
  outstandingAmount: z.number().optional(),
  /** Collection of charges associated with the invoice */
  charges: z
    .array(
      /** Representation of an invoice charge */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the charge */ id: z.string().optional(),
        /** The date and time when the charge was created */
        created: z.string().optional(),
        /** The date and time when the charge was last modified */
        modified: z.string().optional(),
        /** The type of charge (charge/advertising) */
        type: z.string().optional(),
        /** The unique identifier of the invoice with which this charge is associated */
        invoiceId: z.string().optional(),
        /** The unique identifier of the property with which this charge is associated */
        propertyId: z.string().optional(),
        /** The unique identifier of the negotiator with which this charge is associated */
        negotiatorId: z.string().optional(),
        /** The code representing the VAT applied to this charge */
        vatCode: z.string().optional(),
        /** Description of the charge */ description: z.string().optional(),
        /** The net amount */ netAmount: z.number().optional(),
        /** The VAT amount */ vatAmount: z.number().optional()
      })
    )
    .optional(),
  /** Collection of credits associated with the invoice */
  credits: z
    .array(
      /** Representation of an individual credit */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** Unique identifier of the credit */ id: z.string().optional(),
        /** The date and time when the credit was created */
        created: z.string().optional(),
        /** The date and time when the credit was last modified */
        modified: z.string().optional(),
        /** Unique identifier of the negotiator associated with the credit */
        negotiatorId: z.string().optional(),
        /** Unique identifier of the property associated with the credit */
        propertyId: z.string().optional(),
        /** Unique identifier of the invoice associated with the credit */
        invoiceId: z.string().optional(),
        /** Description of the credit */ description: z.string().optional(),
        /** The date of the credit */ date: z.string().optional(),
        /** The net amount due for the credit in the system base currency */
        netAmount: z.number().optional(),
        /** The amount of VAT due for the credit in the system base currency */
        vatAmount: z.number().optional()
      })
    )
    .optional(),
  /** Collection of payments associated with the invoice */
  payments: z
    .array(
      /** Representation of an individual payment */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** Unique identifier of the payment */ id: z.string().optional(),
        /** The date and time when the payment was created */
        created: z.string().optional(),
        /** The date and time when the payment was last modified */
        modified: z.string().optional(),
        /** Unique identifier of the negotiator associated with the payment */
        negotiatorId: z.string().optional(),
        /** Unique identifier of the property associated with the payment */
        propertyId: z.string().optional(),
        /** Unique identifier of the invoice associated with the payment */
        invoiceId: z.string().optional(),
        /** Description of the payment */ description: z.string().optional(),
        /** The type of payment */ type: z.string().optional(),
        /** The date of the payment */ date: z.string().optional(),
        /** The net amount due for the payment in the system base currency */
        netAmount: z.number().optional(),
        /** The amount of VAT due for the payment in the system base currency */
        vatAmount: z.number().optional()
      })
    )
    .optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional()
})
export const paymentModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an individual payment */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** Unique identifier of the payment */ id: z.string().optional(),
        /** The date and time when the payment was created */
        created: z.string().optional(),
        /** The date and time when the payment was last modified */
        modified: z.string().optional(),
        /** Unique identifier of the negotiator associated with the payment */
        negotiatorId: z.string().optional(),
        /** Unique identifier of the property associated with the payment */
        propertyId: z.string().optional(),
        /** Unique identifier of the invoice associated with the payment */
        invoiceId: z.string().optional(),
        /** Description of the payment */ description: z.string().optional(),
        /** The type of payment */ type: z.string().optional(),
        /** The date of the payment */ date: z.string().optional(),
        /** The net amount due for the payment in the system base currency */
        netAmount: z.number().optional(),
        /** The amount of VAT due for the payment in the system base currency */
        vatAmount: z.number().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
export const creditModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an individual credit */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** Unique identifier of the credit */ id: z.string().optional(),
        /** The date and time when the credit was created */
        created: z.string().optional(),
        /** The date and time when the credit was last modified */
        modified: z.string().optional(),
        /** Unique identifier of the negotiator associated with the credit */
        negotiatorId: z.string().optional(),
        /** Unique identifier of the property associated with the credit */
        propertyId: z.string().optional(),
        /** Unique identifier of the invoice associated with the credit */
        invoiceId: z.string().optional(),
        /** Description of the credit */ description: z.string().optional(),
        /** The date of the credit */ date: z.string().optional(),
        /** The net amount due for the credit in the system base currency */
        netAmount: z.number().optional(),
        /** The amount of VAT due for the credit in the system base currency */
        vatAmount: z.number().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
export const chargeModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an invoice charge */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the charge */ id: z.string().optional(),
        /** The date and time when the charge was created */
        created: z.string().optional(),
        /** The date and time when the charge was last modified */
        modified: z.string().optional(),
        /** The type of charge (charge/advertising) */
        type: z.string().optional(),
        /** The unique identifier of the invoice with which this charge is associated */
        invoiceId: z.string().optional(),
        /** The unique identifier of the property with which this charge is associated */
        propertyId: z.string().optional(),
        /** The unique identifier of the negotiator with which this charge is associated */
        negotiatorId: z.string().optional(),
        /** The code representing the VAT applied to this charge */
        vatCode: z.string().optional(),
        /** Description of the charge */ description: z.string().optional(),
        /** The net amount */ netAmount: z.number().optional(),
        /** The VAT amount */ vatAmount: z.number().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Representation of a journal entry */
export const journalEntryModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The date and time when the journal entry was created */
  created: z.string().optional(),
  /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
  propertyId: z.string().optional(),
  /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) */
  associatedType: z.string().optional(),
  /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property */
  associatedId: z.string().optional(),
  /** The type of journal entry */ typeId: z.string().optional(),
  /** The unique identifier of the negotiator that created the entry */
  negotiatorId: z.string().optional(),
  /** The textual description of the journal entry event */
  description: z.string().optional()
})
export const journalEntryModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a journal entry */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The date and time when the journal entry was created */
        created: z.string().optional(),
        /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
        propertyId: z.string().optional(),
        /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) */
        associatedType: z.string().optional(),
        /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property */
        associatedId: z.string().optional(),
        /** The type of journal entry */ typeId: z.string().optional(),
        /** The unique identifier of the negotiator that created the entry */
        negotiatorId: z.string().optional(),
        /** The textual description of the journal entry event */
        description: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body to create a journal entry */
export const createJournalEntryModel = z.object({
  /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
  typeId: z.string().optional(),
  /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
  propertyId: z.string().optional(),
  /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
  associatedType: z.string().optional(),
  /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
  associatedId: z.string().optional(),
  /** The textual description of the journal entry event */
  description: z.string(),
  /** The identifier of the negotiator recording the journal entry */
  negotiatorId: z.string().optional()
})
/** Representation of a landlord related journal entry */
export const landlordJournalEntryModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The date and time when the journal entry was created */
  created: z.string().optional(),
  /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
  propertyId: z.string().optional(),
  /** The unique identifier of the landlord the journal entry is related to. */
  landlordId: z.string().optional(),
  /** The type of journal entry */ type: z.string().optional(),
  /** The unique identifier of the negotiator that created the entry */
  negotiatorId: z.string().optional(),
  /** The textual description of the journal entry event */
  description: z.string().optional()
})
export const landlordJournalEntryModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a landlord related journal entry */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The date and time when the journal entry was created */
        created: z.string().optional(),
        /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type */
        propertyId: z.string().optional(),
        /** The unique identifier of the landlord the journal entry is related to. */
        landlordId: z.string().optional(),
        /** The type of journal entry */ type: z.string().optional(),
        /** The unique identifier of the negotiator that created the entry */
        negotiatorId: z.string().optional(),
        /** The textual description of the journal entry event */
        description: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body to create bulk journal entry */
export const createBulkJournalEntryModel = z.object({
  /** Collection of journal entries */
  createJournalEntry: z
    .array(
      /** Request body to create a journal entry */
      z.object({
        /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
        typeId: z.string().optional(),
        /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
        propertyId: z.string().optional(),
        /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
        associatedType: z.string().optional(),
        /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
        associatedId: z.string().optional(),
        /** The textual description of the journal entry event */
        description: z.string(),
        /** The identifier of the negotiator recording the journal entry */
        negotiatorId: z.string().optional()
      })
    )
    .optional()
})
/** Representation of a landlord's source */
export const landlordSourceModel = z.object({
  /** The unique identifier of the source of the landlord */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** Representation of the physical address of a building or premise */
export const landlordContactAddressModel = z.object({
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  countryId: z.string().optional()
})
/** A summarised view of the details of a contact associated to a landlord */
export const landlordContactModel = z.object({
  /** The unique identifier of the contact */ id: z.string().optional(),
  /** The complete name of the contact or company */
  name: z.string().optional(),
  /** The title of the contact (Available when 'type' is 'contact') */
  title: z.string().optional(),
  /** The forename of the contact (Available when 'type' is 'contact') */
  forename: z.string().optional(),
  /** The surname of the contact (Available when 'type' is 'contact') */
  surname: z.string().optional(),
  /** The date of birth of the contact (Available when 'type' is 'contact') */
  dateOfBirth: z.string().optional(),
  /** The type of the contact (contact/company) */ type: z.string().optional(),
  /** The home phone number of the contact */ homePhone: z.string().optional(),
  /** The work phone number of the contact */ workPhone: z.string().optional(),
  /** The mobile phone number of the contact */
  mobilePhone: z.string().optional(),
  /** The email address of the contact */ email: z.string().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
  marketingConsent: z.string().optional(),
  /** Representation of the physical address of a building or premise */
  primaryAddress: z
    .object({
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides within */
      countryId: z.string().optional()
    })
    .optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z
    .array(
      /** Representation of additional contact details */
      z.object({
        /** The type of contact detail */ type: z.string().optional(),
        /** The contact detail */ value: z.string().optional()
      })
    )
    .optional()
})
/** Representation of a landlord */
export const landlordModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the landlord */ id: z.string().optional(),
  /** The date and time when the landlord was created */
  created: z.string().optional(),
  /** The date and time when the landlord was last modified */
  modified: z.string().optional(),
  /** A flag determining whether or not the landlord is currently active */
  active: z.boolean().optional(),
  /** The unique identifier of the company acting as the landlord's solicitor */
  solicitorId: z.string().optional(),
  /** The unique identifier of the office that is associated to the landlord */
  officeId: z.string().optional(),
  /** Representation of a landlord's source */
  source: z
    .object({
      /** The unique identifier of the source of the landlord */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
  related: z
    .array(
      /** A summarised view of the details of a contact associated to a landlord */
      z.object({
        /** The unique identifier of the contact */ id: z.string().optional(),
        /** The complete name of the contact or company */
        name: z.string().optional(),
        /** The title of the contact (Available when 'type' is 'contact') */
        title: z.string().optional(),
        /** The forename of the contact (Available when 'type' is 'contact') */
        forename: z.string().optional(),
        /** The surname of the contact (Available when 'type' is 'contact') */
        surname: z.string().optional(),
        /** The date of birth of the contact (Available when 'type' is 'contact') */
        dateOfBirth: z.string().optional(),
        /** The type of the contact (contact/company) */
        type: z.string().optional(),
        /** The home phone number of the contact */
        homePhone: z.string().optional(),
        /** The work phone number of the contact */
        workPhone: z.string().optional(),
        /** The mobile phone number of the contact */
        mobilePhone: z.string().optional(),
        /** The email address of the contact */ email: z.string().optional(),
        /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
        marketingConsent: z.string().optional(),
        /** Representation of the physical address of a building or premise */
        primaryAddress: z
          .object({
            /** The building name */ buildingName: z.string().optional(),
            /** The building number */ buildingNumber: z.string().optional(),
            /** The first line of the address */ line1: z.string().optional(),
            /** The second line of the address */ line2: z.string().optional(),
            /** The third line of the address */ line3: z.string().optional(),
            /** The fourth line of the address */ line4: z.string().optional(),
            /** The postcode */ postcode: z.string().optional(),
            /** The ISO-3166 country code that the address resides within */
            countryId: z.string().optional()
          })
          .optional(),
        /** A collection of additional contact details */
        additionalContactDetails: z
          .array(
            /** Representation of additional contact details */
            z.object({
              /** The type of contact detail */ type: z.string().optional(),
              /** The contact detail */ value: z.string().optional()
            })
          )
          .optional()
      })
    )
    .optional(),
  /** App specific metadata that has been set against the landlord */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The requested extras fields */
  extrasField: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the landlord. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const landlordModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a landlord */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the landlord */ id: z.string().optional(),
        /** The date and time when the landlord was created */
        created: z.string().optional(),
        /** The date and time when the landlord was last modified */
        modified: z.string().optional(),
        /** A flag determining whether or not the landlord is currently active */
        active: z.boolean().optional(),
        /** The unique identifier of the company acting as the landlord's solicitor */
        solicitorId: z.string().optional(),
        /** The unique identifier of the office that is associated to the landlord */
        officeId: z.string().optional(),
        /** Representation of a landlord's source */
        source: z
          .object({
            /** The unique identifier of the source of the landlord */
            id: z.string().optional(),
            /** The source type (office/source) */ type: z.string().optional()
          })
          .optional(),
        /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
        related: z
          .array(
            /** A summarised view of the details of a contact associated to a landlord */
            z.object({
              /** The unique identifier of the contact */
              id: z.string().optional(),
              /** The complete name of the contact or company */
              name: z.string().optional(),
              /** The title of the contact (Available when 'type' is 'contact') */
              title: z.string().optional(),
              /** The forename of the contact (Available when 'type' is 'contact') */
              forename: z.string().optional(),
              /** The surname of the contact (Available when 'type' is 'contact') */
              surname: z.string().optional(),
              /** The date of birth of the contact (Available when 'type' is 'contact') */
              dateOfBirth: z.string().optional(),
              /** The type of the contact (contact/company) */
              type: z.string().optional(),
              /** The home phone number of the contact */
              homePhone: z.string().optional(),
              /** The work phone number of the contact */
              workPhone: z.string().optional(),
              /** The mobile phone number of the contact */
              mobilePhone: z.string().optional(),
              /** The email address of the contact */
              email: z.string().optional(),
              /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
              marketingConsent: z.string().optional(),
              /** Representation of the physical address of a building or premise */
              primaryAddress: z
                .object({
                  /** The building name */ buildingName: z.string().optional(),
                  /** The building number */
                  buildingNumber: z.string().optional(),
                  /** The first line of the address */
                  line1: z.string().optional(),
                  /** The second line of the address */
                  line2: z.string().optional(),
                  /** The third line of the address */
                  line3: z.string().optional(),
                  /** The fourth line of the address */
                  line4: z.string().optional(),
                  /** The postcode */ postcode: z.string().optional(),
                  /** The ISO-3166 country code that the address resides within */
                  countryId: z.string().optional()
                })
                .optional(),
              /** A collection of additional contact details */
              additionalContactDetails: z
                .array(
                  /** Representation of additional contact details */
                  z.object({
                    /** The type of contact detail */
                    type: z.string().optional(),
                    /** The contact detail */ value: z.string().optional()
                  })
                )
                .optional()
            })
          )
          .optional(),
        /** App specific metadata that has been set against the landlord */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The requested extras fields */
        extrasField: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the landlord. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to set the source of a new landlord */
export const createLandlordSourceModel = z.object({
  /** The unique identifier of the source of the landlord */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** Request body used to create a new relationship between a landlord and a contact or company */
export const createLandlordContactRelationshipModel = z.object({
  /** The unique identifier of the contact or company to create a relationship with */
  associatedId: z.string().optional(),
  /** The type of relationship to create (contact/company) */
  associatedType: z.string().optional()
})
/** Request body used to create a new landlord */
export const createLandlordModel = z.object({
  /** A flag determining whether or not the landlord is currently active */
  active: z.boolean().optional(),
  /** The unique identifier of the company acting as the landlord's solicitor */
  solicitorId: z.string().optional(),
  /** The unique identifier of the office that is associated to the landlord */
  officeId: z.string(),
  /** Request body used to set the source of a new landlord */
  source: z
    .object({
      /** The unique identifier of the source of the landlord */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
  related: z.array(
    /** Request body used to create a new relationship between a landlord and a contact or company */
    z.object({
      /** The unique identifier of the contact or company to create a relationship with */
      associatedId: z.string().optional(),
      /** The type of relationship to create (contact/company) */
      associatedType: z.string().optional()
    })
  ),
  /** App specific metadata that to set against the landlord */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body used to update the source of an existing landlord */
export const updateLandlordSourceModel = z.object({
  /** The unique identifier of the source of the landlord */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** Request body used to update an existing landlord */
export const updateLandlordModel = z.object({
  /** A flag determining whether or not the landlord is currently active */
  active: z.boolean().optional(),
  /** The unique identifier of the company acting as the landlord's solicitor */
  solicitorId: z.string().optional(),
  /** The unique identifier of the office that is associated to the landlord */
  officeId: z.string().optional(),
  /** Request body used to update the source of an existing landlord */
  source: z
    .object({
      /** The unique identifier of the source of the landlord */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** App specific metadata that to set against the landlord */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Representation of relationship between a landlord and a contact or company */
export const landlordContactRelationshipModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the landlord relationship */
  id: z.string().optional(),
  /** The unique identifier of the landlord */
  landlordId: z.string().optional(),
  /** The date and time when the relationship was created */
  created: z.string().optional(),
  /** The date and time when the relationship was last modified */
  modified: z.string().optional(),
  /** The type of related entity (contact/company) */
  associatedType: z.string().optional(),
  /** The unique identifier of the related contact or company */
  associatedId: z.string().optional(),
  /** A flag denoting whether or not the relationship should be regarded as the main relationship for the parent landlord entity */
  isMain: z.boolean().optional()
})
export const landlordContactRelationshipModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of relationship between a landlord and a contact or company */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the landlord relationship */
        id: z.string().optional(),
        /** The unique identifier of the landlord */
        landlordId: z.string().optional(),
        /** The date and time when the relationship was created */
        created: z.string().optional(),
        /** The date and time when the relationship was last modified */
        modified: z.string().optional(),
        /** The type of related entity (contact/company) */
        associatedType: z.string().optional(),
        /** The unique identifier of the related contact or company */
        associatedId: z.string().optional(),
        /** A flag denoting whether or not the relationship should be regarded as the main relationship for the parent landlord entity */
        isMain: z.boolean().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create or update a relationship between a landlord and a contact or company */
export const insertLandlordContactRelationshipModel = z.object({
  /** The unique identifier of the contact or company to create a relationship with */
  associatedId: z.string(),
  /** The type of relationship to create (contact/company) */
  associatedType: z.string(),
  /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
  isMain: z.boolean()
})
/** Model representing the state of a metadata record for a given entity */
export const metadataModel = z.object({
  /** The unique identifier of this metadata record */
  id: z.string().optional(),
  /** The date and time of when this metadata record was last updated */
  modified: z.string().optional(),
  /** The name of the entity type that this metadata record is associated to */
  entityType: z.string().optional(),
  /** The unique identifier of the the entity that this metadata is associated to */
  entityId: z.string().optional(),
  /** The JSON document content */ metadata: z.string().optional()
})
export const metadataModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Model representing the state of a metadata record for a given entity */
      z.object({
        /** The unique identifier of this metadata record */
        id: z.string().optional(),
        /** The date and time of when this metadata record was last updated */
        modified: z.string().optional(),
        /** The name of the entity type that this metadata record is associated to */
        entityType: z.string().optional(),
        /** The unique identifier of the the entity that this metadata is associated to */
        entityId: z.string().optional(),
        /** The JSON document content */ metadata: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Payload to create a metadata record */
export const createMetadataRequest = z.object({
  /** The type of the entity that this metadata is related to. This can represent a Foundations inbuilt type (an entity presented in our APIs) or it can be a custom entity type (a dynamic standalone metadata entity that you create).
            
Inbuilt types: applicant, appointment, company, contact, conveyancing, identityCheck, landlord, negotiator, offer, office, property, task, vendor, worksOrder */
  entityType: z.string(),
  /** The unique identifier of the entity that this metadata is related to.
For custom entities, this can be left blank and an id will be generated for you. */
  entityId: z.string().optional(),
  /** The JSON document to store */ metadata: z.string()
})
/** Payload to update a metadata record */
export const updateMetadataRequest = z.object({
  /** The updated JSON document to store */ metadata: z.string()
})
export const operationType = z.number().int()
export const operationBase = z.object({
  operationType: z.number().int().optional(),
  path: z.string().optional(),
  op: z.string().optional(),
  from: z.string().optional()
})
export const operation = z.object({
  operationType: z.number().int().optional(),
  path: z.string().optional(),
  op: z.string().optional(),
  from: z.string().optional()
})
/** Model representing a JSON schema used to validate a specific entity type */
export const schemaModel = z.object({
  /** The unique identifier of this JSON schema */ id: z.string().optional(),
  /** The date and time of when this JSON schema was last updated */
  modified: z.string().optional(),
  /** The JSON schema document */ schema: z.string().optional()
})
/** Payload to update a JSON schema */
export const updateSchemaRequest = z.object({
  /** The updated JSON schema to store */ schema: z.string()
})
export const schemaModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Model representing a JSON schema used to validate a specific entity type */
      z.object({
        /** The unique identifier of this JSON schema */
        id: z.string().optional(),
        /** The date and time of when this JSON schema was last updated */
        modified: z.string().optional(),
        /** The JSON schema document */ schema: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Payload to create a JSON schema for metadata validation */
export const createSchemaRequest = z.object({
  /** The name of the entity type that this schema is related to */
  entityType: z.string(),
  /** The JSON schema used to validate entities of this type */
  schema: z.string()
})
/** Representation of a negotiator */
export const negotiatorModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the negotiator */ id: z.string().optional(),
  /** The date and time when the negotiator was created */
  created: z.string().optional(),
  /** The date and time when the negotiator was last modified */
  modified: z.string().optional(),
  /** The name of the negotiator */ name: z.string().optional(),
  /** The job title of the negotiator */ jobTitle: z.string().optional(),
  /** The unique identifier of the office that the negotiator is attached to */
  officeId: z.string().optional(),
  /** The work phone number of the negotiator */
  workPhone: z.string().optional(),
  /** The mobile phone number of the negotiator */
  mobilePhone: z.string().optional(),
  /** The email address of the negotiator */ email: z.string().optional(),
  /** The URL of the optional negotiator profile image */
  profileImageUrl: z.string().optional(),
  /** A flag determining whether or not the negotiator is active */
  active: z.boolean().optional(),
  /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  diaryNegotiatorIds: z.array(z.string()).optional(),
  /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  diaryOfficeIds: z.array(z.string()).optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z
    .array(
      /** Representation of additional contact details */
      z.object({
        /** The type of contact detail */ type: z.string().optional(),
        /** The contact detail */ value: z.string().optional()
      })
    )
    .optional(),
  /** App specific metadata that has been set against the negotiator */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the negotiator. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const negotiatorModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a negotiator */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the negotiator */
        id: z.string().optional(),
        /** The date and time when the negotiator was created */
        created: z.string().optional(),
        /** The date and time when the negotiator was last modified */
        modified: z.string().optional(),
        /** The name of the negotiator */ name: z.string().optional(),
        /** The job title of the negotiator */ jobTitle: z.string().optional(),
        /** The unique identifier of the office that the negotiator is attached to */
        officeId: z.string().optional(),
        /** The work phone number of the negotiator */
        workPhone: z.string().optional(),
        /** The mobile phone number of the negotiator */
        mobilePhone: z.string().optional(),
        /** The email address of the negotiator */ email: z.string().optional(),
        /** The URL of the optional negotiator profile image */
        profileImageUrl: z.string().optional(),
        /** A flag determining whether or not the negotiator is active */
        active: z.boolean().optional(),
        /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
        diaryNegotiatorIds: z.array(z.string()).optional(),
        /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
        diaryOfficeIds: z.array(z.string()).optional(),
        /** A collection of additional contact details */
        additionalContactDetails: z
          .array(
            /** Representation of additional contact details */
            z.object({
              /** The type of contact detail */ type: z.string().optional(),
              /** The contact detail */ value: z.string().optional()
            })
          )
          .optional(),
        /** App specific metadata that has been set against the negotiator */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the negotiator. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new negotiator */
export const createNegotiatorModel = z.object({
  /** The name of the negotiator */ name: z.string(),
  /** The job title of the negotiator */ jobTitle: z.string().optional(),
  /** A flag determining whether or not the negotiator is active */
  active: z.boolean().optional(),
  /** The unique identifier of the office that the negotiator is attached to */
  officeId: z.string(),
  /** The work phone number of the negotiator */
  workPhone: z.string().optional(),
  /** The mobile phone number of the negotiator */
  mobilePhone: z.string().optional(),
  /** The email address of the negotiator */ email: z.string().optional(),
  /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  diaryNegotiatorIds: z.array(z.string()).optional(),
  /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  diaryOfficeIds: z.array(z.string()).optional(),
  /** App specific metadata to set against the negotiator */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body used to update an existing negotiator */
export const updateNegotiatorModel = z.object({
  /** The name of the negotiator */ name: z.string().optional(),
  /** The job title of the negotiator */ jobTitle: z.string().optional(),
  /** A flag determining whether or not the negotiator is active */
  active: z.boolean().optional(),
  /** The work phone number of the negotiator */
  workPhone: z.string().optional(),
  /** The mobile phone number of the negotiator */
  mobilePhone: z.string().optional(),
  /** The email address of the negotiator */ email: z.string().optional(),
  /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  diaryNegotiatorIds: z.array(z.string()).optional(),
  /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
  diaryOfficeIds: z.array(z.string()).optional(),
  /** App specific metadata to set against the negotiator */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Payload for defining notification targets */
export const createNotificationTargetModel = z.object({
  /** The identifier of the negotiators whom should receive the notification */
  negotiatorId: z.array(z.string()).optional()
})
/** Payload for creating a notification */
export const createNotificationModel = z.object({
  /** The notification type (telephony) */ type: z.string().optional(),
  /** The sub category type (answeredCall/endedCall/incomingCall/missedCall) */
  subType: z.string().optional(),
  /** The products the notification is associated to, and will be delivered to */
  products: z.array(z.string()).optional(),
  /** Payload for defining notification targets */
  targets: z
    .object({
      /** The identifier of the negotiators whom should receive the notification */
      negotiatorId: z.array(z.string()).optional()
    })
    .optional(),
  /** The payload to deliver to the specified target(s). Note that the payload must match the expected format
based on the type/subType combination and will be validated accordingly. Please refer to [the documentation](https://foundations-documentation.reapit.cloud/api/notifications)
for more information */
  payload: z.object({}).optional()
})
/** Representation of the physical address of a building or premise */
export const offerContactAddressModel = z.object({
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides in */
  countryId: z.string().optional()
})
/** A summarised view of the details of a contact associated to an offer */
export const offerContactModel = z.object({
  /** The unique identifier of the contact */ id: z.string().optional(),
  /** The complete name of the contact or company */
  name: z.string().optional(),
  /** The title of the contact (Available when 'type' is 'contact') */
  title: z.string().optional(),
  /** The forename of the contact (Available when 'type' is 'contact') */
  forename: z.string().optional(),
  /** The surname of the contact (Available when 'type' is 'contact') */
  surname: z.string().optional(),
  /** The date of birth of the contact (Available when 'type' is 'contact') */
  dateOfBirth: z.string().optional(),
  /** The type of the contact (contact/company) */ type: z.string().optional(),
  /** The home phone number of the contact */ homePhone: z.string().optional(),
  /** The work phone number of the contact */ workPhone: z.string().optional(),
  /** The mobile phone number of the contact */
  mobilePhone: z.string().optional(),
  /** The email address of the contact */ email: z.string().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
  marketingConsent: z.string().optional(),
  /** Representation of the physical address of a building or premise */
  primaryAddress: z
    .object({
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides in */
      countryId: z.string().optional()
    })
    .optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z
    .array(
      /** Representation of additional contact details */
      z.object({
        /** The type of contact detail */ type: z.string().optional(),
        /** The contact detail */ value: z.string().optional()
      })
    )
    .optional()
})
/** Representation of an offer */
export const offerModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the offer */ id: z.string().optional(),
  /** The the date and time when the offer was created */
  created: z.string().optional(),
  /** The date and time when the offer was last modified */
  modified: z.string().optional(),
  /** The currency that applies to monetary amounts exposed in the model */
  currency: z.string().optional(),
  /** The unique identifier of the applicant associated to the offer */
  applicantId: z.string().optional(),
  /** The unique identifier of the company associated to the offer */
  companyId: z.string().optional(),
  /** The unique identifier of the contact associated to the offer */
  contactId: z.string().optional(),
  /** The unique identifier of the property associated to the offer */
  propertyId: z.string().optional(),
  /** The unique identifier of the negotiator associated to the offer */
  negotiatorId: z.string().optional(),
  /** The date when the offer was made */ date: z.string().optional(),
  /** The monetary amount of the offer */ amount: z.number().optional(),
  /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
  status: z.string().optional(),
  /** A free text field describing items that should be included in the sale */
  inclusions: z.string().optional(),
  /** A free text field describing items that are explicitly excluded from the sale */
  exclusions: z.string().optional(),
  /** A free text field describing any other conditions set by either party that relate to the sale */
  conditions: z.string().optional(),
  /** A collection of contacts associated to the offer */
  related: z
    .array(
      /** A summarised view of the details of a contact associated to an offer */
      z.object({
        /** The unique identifier of the contact */ id: z.string().optional(),
        /** The complete name of the contact or company */
        name: z.string().optional(),
        /** The title of the contact (Available when 'type' is 'contact') */
        title: z.string().optional(),
        /** The forename of the contact (Available when 'type' is 'contact') */
        forename: z.string().optional(),
        /** The surname of the contact (Available when 'type' is 'contact') */
        surname: z.string().optional(),
        /** The date of birth of the contact (Available when 'type' is 'contact') */
        dateOfBirth: z.string().optional(),
        /** The type of the contact (contact/company) */
        type: z.string().optional(),
        /** The home phone number of the contact */
        homePhone: z.string().optional(),
        /** The work phone number of the contact */
        workPhone: z.string().optional(),
        /** The mobile phone number of the contact */
        mobilePhone: z.string().optional(),
        /** The email address of the contact */ email: z.string().optional(),
        /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
        marketingConsent: z.string().optional(),
        /** Representation of the physical address of a building or premise */
        primaryAddress: z
          .object({
            /** The building name */ buildingName: z.string().optional(),
            /** The building number */ buildingNumber: z.string().optional(),
            /** The first line of the address */ line1: z.string().optional(),
            /** The second line of the address */ line2: z.string().optional(),
            /** The third line of the address */ line3: z.string().optional(),
            /** The fourth line of the address */ line4: z.string().optional(),
            /** The postcode */ postcode: z.string().optional(),
            /** The ISO-3166 country code that the address resides in */
            countryId: z.string().optional()
          })
          .optional(),
        /** A collection of additional contact details */
        additionalContactDetails: z
          .array(
            /** Representation of additional contact details */
            z.object({
              /** The type of contact detail */ type: z.string().optional(),
              /** The contact detail */ value: z.string().optional()
            })
          )
          .optional()
      })
    )
    .optional(),
  /** App specific metadata that has been set against the offer */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the offer. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const offerModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an offer */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the offer */ id: z.string().optional(),
        /** The the date and time when the offer was created */
        created: z.string().optional(),
        /** The date and time when the offer was last modified */
        modified: z.string().optional(),
        /** The currency that applies to monetary amounts exposed in the model */
        currency: z.string().optional(),
        /** The unique identifier of the applicant associated to the offer */
        applicantId: z.string().optional(),
        /** The unique identifier of the company associated to the offer */
        companyId: z.string().optional(),
        /** The unique identifier of the contact associated to the offer */
        contactId: z.string().optional(),
        /** The unique identifier of the property associated to the offer */
        propertyId: z.string().optional(),
        /** The unique identifier of the negotiator associated to the offer */
        negotiatorId: z.string().optional(),
        /** The date when the offer was made */ date: z.string().optional(),
        /** The monetary amount of the offer */ amount: z.number().optional(),
        /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
        status: z.string().optional(),
        /** A free text field describing items that should be included in the sale */
        inclusions: z.string().optional(),
        /** A free text field describing items that are explicitly excluded from the sale */
        exclusions: z.string().optional(),
        /** A free text field describing any other conditions set by either party that relate to the sale */
        conditions: z.string().optional(),
        /** A collection of contacts associated to the offer */
        related: z
          .array(
            /** A summarised view of the details of a contact associated to an offer */
            z.object({
              /** The unique identifier of the contact */
              id: z.string().optional(),
              /** The complete name of the contact or company */
              name: z.string().optional(),
              /** The title of the contact (Available when 'type' is 'contact') */
              title: z.string().optional(),
              /** The forename of the contact (Available when 'type' is 'contact') */
              forename: z.string().optional(),
              /** The surname of the contact (Available when 'type' is 'contact') */
              surname: z.string().optional(),
              /** The date of birth of the contact (Available when 'type' is 'contact') */
              dateOfBirth: z.string().optional(),
              /** The type of the contact (contact/company) */
              type: z.string().optional(),
              /** The home phone number of the contact */
              homePhone: z.string().optional(),
              /** The work phone number of the contact */
              workPhone: z.string().optional(),
              /** The mobile phone number of the contact */
              mobilePhone: z.string().optional(),
              /** The email address of the contact */
              email: z.string().optional(),
              /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
              marketingConsent: z.string().optional(),
              /** Representation of the physical address of a building or premise */
              primaryAddress: z
                .object({
                  /** The building name */ buildingName: z.string().optional(),
                  /** The building number */
                  buildingNumber: z.string().optional(),
                  /** The first line of the address */
                  line1: z.string().optional(),
                  /** The second line of the address */
                  line2: z.string().optional(),
                  /** The third line of the address */
                  line3: z.string().optional(),
                  /** The fourth line of the address */
                  line4: z.string().optional(),
                  /** The postcode */ postcode: z.string().optional(),
                  /** The ISO-3166 country code that the address resides in */
                  countryId: z.string().optional()
                })
                .optional(),
              /** A collection of additional contact details */
              additionalContactDetails: z
                .array(
                  /** Representation of additional contact details */
                  z.object({
                    /** The type of contact detail */
                    type: z.string().optional(),
                    /** The contact detail */ value: z.string().optional()
                  })
                )
                .optional()
            })
          )
          .optional(),
        /** App specific metadata that has been set against the offer */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the offer. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new offer */
export const createOfferModel = z.object({
  /** The unique identifier of the applicant associated to the offer */
  applicantId: z.string(),
  /** The unique identifier of the property associated to the offer */
  propertyId: z.string(),
  /** The unique identifier of the negotiator associated to the offer */
  negotiatorId: z.string().optional(),
  /** The date when the offer was made */ date: z.string(),
  /** The monetary amount of the offer */ amount: z.number(),
  /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
  status: z.string(),
  /** A free text field describing items that should be included in the sale */
  inclusions: z.string().optional(),
  /** A free text field describing items that are explicitly excluded from the sale */
  exclusions: z.string().optional(),
  /** A free text field describing any other conditions set by either party that relate to the sale */
  conditions: z.string().optional(),
  /** App specific metadata to set against the offer */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body used to update an existing offer */
export const updateOfferModel = z.object({
  /** The unique identifier of the negotiator associated to the offer */
  negotiatorId: z.string().optional(),
  /** The date when the offer was made */ date: z.string().optional(),
  /** The monetary amount of the offer */ amount: z.number().optional(),
  /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
  status: z.string().optional(),
  /** A free text field describing items that should be included in the sale */
  inclusions: z.string().optional(),
  /** A free text field describing items that are explicitly excluded from the sale */
  exclusions: z.string().optional(),
  /** A free text field describing any other conditions set by either party that relate to the sale */
  conditions: z.string().optional(),
  /** App specific metadata to set against the offer */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Representation of the geographical location of an address using coordinates */
export const officeAddressGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */
  latitude: z.number().optional(),
  /** The longitude coordinate of the coordinate pair */
  longitude: z.number().optional()
})
/** Representation of the physical address of a building or premise */
export const officeAddressModel = z.object({
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  countryId: z.string().optional(),
  /** Representation of the geographical location of an address using coordinates */
  geolocation: z
    .object({
      /** The latitude coordinate of the coordinate pair */
      latitude: z.number().optional(),
      /** The longitude coordinate of the coordinate pair */
      longitude: z.number().optional()
    })
    .optional()
})
/** Representation of additional contact details */
export const additionalOfficeContactDetailsModel = z.object({
  /** The type of contact detail */ type: z.string().optional(),
  /** The contact detail */ value: z.string().optional()
})
/** Representation of an office */
export const officeModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the office */ id: z.string().optional(),
  /** The date and time when the office was created */
  created: z.string().optional(),
  /** The date and time when the office was last modified */
  modified: z.string().optional(),
  /** The name of the office */ name: z.string().optional(),
  /** The name of the office manager */ manager: z.string().optional(),
  /** A flag denoting whether or not this office is active */
  active: z.boolean().optional(),
  /** The region that the office is in */ region: z.string().optional(),
  /** Representation of the physical address of a building or premise */
  address: z
    .object({
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides within */
      countryId: z.string().optional(),
      /** Representation of the geographical location of an address using coordinates */
      geolocation: z
        .object({
          /** The latitude coordinate of the coordinate pair */
          latitude: z.number().optional(),
          /** The longitude coordinate of the coordinate pair */
          longitude: z.number().optional()
        })
        .optional()
    })
    .optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z
    .array(
      /** Representation of additional contact details */
      z.object({
        /** The type of contact detail */ type: z.string().optional(),
        /** The contact detail */ value: z.string().optional()
      })
    )
    .optional(),
  /** The work phone number of the office */ workPhone: z.string().optional(),
  /** The email address of the office */ email: z.string().optional(),
  /** App specific metadata that has been set against the office */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the office. Used for managing update concurrency */
  _eTag: z.string().optional(),
  /** The requested extras fields */
  extrasField: z.record(z.string(), z.object({})).optional()
})
export const officeModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of an office */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the office */ id: z.string().optional(),
        /** The date and time when the office was created */
        created: z.string().optional(),
        /** The date and time when the office was last modified */
        modified: z.string().optional(),
        /** The name of the office */ name: z.string().optional(),
        /** The name of the office manager */ manager: z.string().optional(),
        /** A flag denoting whether or not this office is active */
        active: z.boolean().optional(),
        /** The region that the office is in */ region: z.string().optional(),
        /** Representation of the physical address of a building or premise */
        address: z
          .object({
            /** The building name */ buildingName: z.string().optional(),
            /** The building number */ buildingNumber: z.string().optional(),
            /** The first line of the address */ line1: z.string().optional(),
            /** The second line of the address */ line2: z.string().optional(),
            /** The third line of the address */ line3: z.string().optional(),
            /** The fourth line of the address */ line4: z.string().optional(),
            /** The postcode */ postcode: z.string().optional(),
            /** The ISO-3166 country code that the address resides within */
            countryId: z.string().optional(),
            /** Representation of the geographical location of an address using coordinates */
            geolocation: z
              .object({
                /** The latitude coordinate of the coordinate pair */
                latitude: z.number().optional(),
                /** The longitude coordinate of the coordinate pair */
                longitude: z.number().optional()
              })
              .optional()
          })
          .optional(),
        /** A collection of additional contact details */
        additionalContactDetails: z
          .array(
            /** Representation of additional contact details */
            z.object({
              /** The type of contact detail */ type: z.string().optional(),
              /** The contact detail */ value: z.string().optional()
            })
          )
          .optional(),
        /** The work phone number of the office */
        workPhone: z.string().optional(),
        /** The email address of the office */ email: z.string().optional(),
        /** App specific metadata that has been set against the office */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the office. Used for managing update concurrency */
        _eTag: z.string().optional(),
        /** The requested extras fields */
        extrasField: z.record(z.string(), z.object({})).optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to set the geolocation coordinates of a new address */
export const createOfficeAddressGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */
  latitude: z.number().optional(),
  /** The longitude coordinate of the coordinate pair */
  longitude: z.number().optional()
})
/** Request body used to set the address of a new office */
export const createOfficeAddressModel = z.object({
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  countryId: z.string().optional(),
  /** Request body used to set the geolocation coordinates of a new address */
  geolocation: z
    .object({
      /** The latitude coordinate of the coordinate pair */
      latitude: z.number().optional(),
      /** The longitude coordinate of the coordinate pair */
      longitude: z.number().optional()
    })
    .optional()
})
/** Request body used to create a new office */
export const createOfficeModel = z.object({
  /** The name of the office */ name: z.string(),
  /** A flag denoting whether or not this office is active */
  active: z.boolean().optional(),
  /** The name of the office manager */ manager: z.string().optional(),
  /** Request body used to set the address of a new office */
  address: z.object({
    /** The building name */ buildingName: z.string().optional(),
    /** The building number */ buildingNumber: z.string().optional(),
    /** The first line of the address */ line1: z.string(),
    /** The second line of the address */ line2: z.string().optional(),
    /** The third line of the address */ line3: z.string().optional(),
    /** The fourth line of the address */ line4: z.string().optional(),
    /** The postcode */ postcode: z.string().optional(),
    /** The ISO-3166 country code that the address resides within */
    countryId: z.string().optional(),
    /** Request body used to set the geolocation coordinates of a new address */
    geolocation: z
      .object({
        /** The latitude coordinate of the coordinate pair */
        latitude: z.number().optional(),
        /** The longitude coordinate of the coordinate pair */
        longitude: z.number().optional()
      })
      .optional()
  }),
  /** The work phone number of the office */ workPhone: z.string().optional(),
  /** The email address of the office */ email: z.string().optional(),
  /** App specific metadata to set against the office */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body used to set the geolocation coordinates of an existing address */
export const updateOfficeAddressGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */
  latitude: z.number().optional(),
  /** The longitude coordinate of the coordinate pair */
  longitude: z.number().optional()
})
/** Request body used to update the address of an existing office */
export const updateOfficeAddressModel = z.object({
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  countryId: z.string().optional(),
  /** Request body used to set the geolocation coordinates of an existing address */
  geolocation: z
    .object({
      /** The latitude coordinate of the coordinate pair */
      latitude: z.number().optional(),
      /** The longitude coordinate of the coordinate pair */
      longitude: z.number().optional()
    })
    .optional()
})
/** Request body used to update an existing office */
export const updateOfficeModel = z.object({
  /** The name of the office */ name: z.string().optional(),
  /** A flag denoting whether or not this office is active */
  active: z.boolean().optional(),
  /** The name of the office manager */ manager: z.string().optional(),
  /** Request body used to update the address of an existing office */
  address: z
    .object({
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides within */
      countryId: z.string().optional(),
      /** Request body used to set the geolocation coordinates of an existing address */
      geolocation: z
        .object({
          /** The latitude coordinate of the coordinate pair */
          latitude: z.number().optional(),
          /** The longitude coordinate of the coordinate pair */
          longitude: z.number().optional()
        })
        .optional()
    })
    .optional(),
  /** The work phone number of the office */ workPhone: z.string().optional(),
  /** The email address of the office */ email: z.string().optional(),
  /** App specific metadata to set against the office */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Representation of the geographical location of an address using coordinates */
export const propertyGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */
  latitude: z.number().optional(),
  /** The longitude coordinate of the coordinate pair */
  longitude: z.number().optional()
})
/** Representation of the physical address of a building or premise */
export const propertyAddressModel = z.object({
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  countryId: z.string().optional(),
  /** The local timezone for the address, based on the Geolocation coordinates */
  localTimeZone: z.string().optional(),
  /** Representation of the geographical location of an address using coordinates */
  geolocation: z
    .object({
      /** The latitude coordinate of the coordinate pair */
      latitude: z.number().optional(),
      /** The longitude coordinate of the coordinate pair */
      longitude: z.number().optional()
    })
    .optional()
})
/** Details specific to rural properties */
export const propertyRuralModel = z.object({
  /** Details of the rural tenure associated with the property. */
  tenureId: z.string().optional(),
  /** Details of the buildings associated with the property. */
  buildingsDescription: z.string().optional(),
  /** Details of the land associated with the property. */
  landDescription: z.string().optional()
})
/** Representation of the external land area of a property */
export const propertyExternalAreaModel = z.object({
  /** The unit of area (acres/hectares) */ type: z.string().optional(),
  /** The minimum area bound */ min: z.number().optional(),
  /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
  max: z.number().optional()
})
/** Representation of the internal dimensions of a property */
export const propertyInternalAreaModel = z.object({
  /** The unit of area (squareFeet/squareMetres) */ type: z.string().optional(),
  /** The minimum area bound */ min: z.number().optional(),
  /** The maximum area bound */ max: z.number().optional()
})
/** Representation of EPC statistics */
export const propertyEpcModel = z.object({
  /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
  exempt: z.boolean().optional(),
  /** The current energy efficiency rating */ eer: z.number().int().optional(),
  /** The current energy efficiency letter rating (A-G). This is generated from the `eer` value
for systems that do not have an explicit EPC Rating component */
  eerRating: z.string().optional(),
  /** The potential energy efficiency rating */
  eerPotential: z.number().int().optional(),
  /** The potential energy efficiency letter rating (A-G). This is generated from the `eerPotential` value */
  eerPotentialRating: z.string().optional(),
  /** The current environmental impact rating */
  eir: z.number().int().optional(),
  /** The current environment impact letter rating (A-G). This is generated from the `eir` value */
  eirRating: z.string().optional(),
  /** The potential environmental impact rating */
  eirPotential: z.number().int().optional(),
  /** The potential environment impact letter rating (A-G). This is generated from the `eirPotential` value */
  eirPotentialRating: z.string().optional(),
  /** The URL to access the full EPC document */
  fullDocumentUrl: z.string().optional(),
  /** The URL to access the first page of the EPC document */
  firstPageDocumentUrl: z.string().optional()
})
/** Representation of the tenure of a property */
export const propertyTenureModel = z.object({
  /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
  type: z.string().optional(),
  /** The tenure expiration date */ expiry: z.string().optional()
})
/** Representation of the the commission fee for a property */
export const propertyCommissionFeeModel = z.object({
  /** The commission letting fee type (percentage/fixed) */
  type: z.string().optional(),
  /** The commission letting fee amount */ amount: z.number().optional()
})
/** Details relating to the shared ownership of the property */
export const propertySharedOwnershipModel = z.object({
  /** The percentage of the shared ownership property being sold by the vendor */
  sharedPercentage: z.number().optional(),
  /** The rent payable on the remainder of the shared ownership property */
  rent: z.number().optional(),
  /** The frequency at which the shared ownership rent should be paid */
  rentFrequency: z.string().optional()
})
/** Representation of the sub agent terms */
export const propertySubAgentTermsModel = z.object({
  /** A flag denoting whether or not fee is available */
  feeAvailable: z.boolean().optional(),
  /** The type of fee (percent/fixed/callForFees) */
  type: z.string().optional(),
  /** The fee amount */ amount: z.number().optional()
})
/** Representation of property details specific to sales marketing */
export const propertySellingModel = z.object({
  /** The date that the property was marked as for sale */
  instructed: z.string().optional(),
  /** The marketing price of the property */ price: z.number().optional(),
  /** The maximum price of a property on the development plot */
  priceTo: z.number().optional(),
  /** The fee charged by the agent to reserve a property (typically a new build) */
  reservationFee: z.number().int().optional(),
  /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
  qualifier: z.string().optional(),
  /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  status: z.string().optional(),
  /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
  disposal: z.string().optional(),
  /** The date the property sale was completed */
  completed: z.string().optional(),
  /** The date the property was exchanged */ exchanged: z.string().optional(),
  /** The date the property account was paid */
  accountPaid: z.string().optional(),
  /** Representation of the tenure of a property */
  tenure: z
    .object({
      /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
      type: z.string().optional(),
      /** The tenure expiration date */ expiry: z.string().optional()
    })
    .optional(),
  /** The unique identifier of the vendor selling the property */
  vendorId: z.string().optional(),
  /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
  agency: z.string().optional(),
  /** The unique identifier of the custom selling agency type - only applicable when Agency is not set */
  agencyId: z.string().optional(),
  /** The date on which the agreement between the vendor and agent expires */
  agreementExpiry: z.string().optional(),
  /** Representation of the the commission fee for a property */
  fee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The commission letting fee amount */ amount: z.number().optional()
    })
    .optional(),
  /** The actual fee amount to be collected by the agent - often based on the exchange price of the property */
  exchangedCompanyFee: z.number().optional(),
  /** The agent's recommended asking price */
  recommendedPrice: z.number().int().optional(),
  /** The agent's valuation price */
  valuationPrice: z.number().int().optional(),
  /** The unique identifier of the document used for the sales brochure */
  brochureId: z.string().optional(),
  /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
  publicBrochureUrl: z.string().optional(),
  /** The price the property exchanged/sold for */
  exchangedPrice: z.number().int().optional(),
  /** The unique identifier of the office that sold the property */
  exchangedOfficeId: z.string().optional(),
  /** The property's decorative condition (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).optional(),
  /** Details relating to the shared ownership of the property */
  sharedOwnership: z
    .object({
      /** The percentage of the shared ownership property being sold by the vendor */
      sharedPercentage: z.number().optional(),
      /** The rent payable on the remainder of the shared ownership property */
      rent: z.number().optional(),
      /** The frequency at which the shared ownership rent should be paid */
      rentFrequency: z.string().optional()
    })
    .optional(),
  /** Representation of the sub agent terms */
  subAgentTerms: z
    .object({
      /** A flag denoting whether or not fee is available */
      feeAvailable: z.boolean().optional(),
      /** The type of fee (percent/fixed/callForFees) */
      type: z.string().optional(),
      /** The fee amount */ amount: z.number().optional()
    })
    .optional()
})
/** Representation of property details specific to utilities */
export const utilityModel = z.object({
  /** A flag denoting whether or not the property has gas connected */
  hasGas: z.boolean().optional(),
  /** The unique identifier of the company supplying the gas to the property */
  gasCompanyId: z.string().optional(),
  /** The gas meter point number */ gasMeterPoint: z.string().optional(),
  /** The unique identifier of the company supplying the electricity to the property */
  electricityCompanyId: z.string().optional(),
  /** The electricity meter point number */
  electricityMeterPoint: z.string().optional(),
  /** The unique identifier of the company supplying the water to the property */
  waterCompanyId: z.string().optional(),
  /** The water meter point number */ waterMeterPoint: z.string().optional(),
  /** The unique identifier of the company supplying the telephone to the property */
  telephoneCompanyId: z.string().optional(),
  /** The unique identifier of the company supplying the internet to the property */
  internetCompanyId: z.string().optional(),
  /** The unique identifier of the company supplying the cable tv to the property */
  cableTvCompanyId: z.string().optional()
})
/** Representation of a property details related to deposit */
export const propertyLettingsDepositModel = z.object({
  /** The type of deposit (weeks/months/fixed) */ type: z.string().optional(),
  /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
  amount: z.number().optional()
})
/** Representation of property details specific to rent insurance associated with a lettings property */
export const propertyLettingRentInsuranceModel = z.object({
  /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
  status: z.string().optional(),
  /** The reference number of the insurance policy when rent protection insurance has been taken out */
  referenceNumber: z.string().optional(),
  /** The insurance policy start date */ start: z.string().optional(),
  /** The insurance policy end date */ end: z.string().optional(),
  /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
  cancelledReasonId: z.string().optional(),
  /** A textual comment or note entered by the agent when an insurance policy was cancelled */
  cancelledComment: z.string().optional(),
  /** Flag indicating whether or not the insurance policy should auto renew */
  autoRenew: z.boolean().optional()
})
/** Representation of property details specific to property licence application */
export const propertyLettingLicenceApplicationModel = z.object({
  /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
  status: z.string().optional(),
  /** The licence application reference number */
  referenceNumber: z.string().optional(),
  /** The date the licence was applied for */ date: z.string().optional(),
  /** The date the licence application was granted */
  granted: z.string().optional(),
  /** The date the licence will expire */ expiry: z.string().optional()
})
/** Representation of property details specific to property Licencing */
export const propertyLettingLicencingModel = z.object({
  /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
  licenceRequired: z.boolean().optional(),
  /** The type of licence (additional/mandatory/none/notSet/selective) */
  licenceType: z.string().optional(),
  /** The number of households that the licence permits in the property */
  households: z.number().int().optional(),
  /** The number of occupants that the licence permits in the property */
  occupants: z.number().int().optional(),
  /** A flag determining whether or not the property is above commercial premises */
  aboveCommercialPremises: z.boolean().optional(),
  /** Representation of property details specific to property licence application */
  application: z
    .object({
      /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
      status: z.string().optional(),
      /** The licence application reference number */
      referenceNumber: z.string().optional(),
      /** The date the licence was applied for */ date: z.string().optional(),
      /** The date the licence application was granted */
      granted: z.string().optional(),
      /** The date the licence will expire */ expiry: z.string().optional()
    })
    .optional()
})
/** Representation of property details specific to lettings marketing */
export const propertyLettingModel = z.object({
  /** The date the property was marked as to let */
  instructed: z.string().optional(),
  /** The date the property is next available from */
  availableFrom: z.string().optional(),
  /** The date the property is available to */
  availableTo: z.string().optional(),
  /** The date the letting agreement between the landlord and agent was signed */
  agreementSigned: z.string().optional(),
  /** The rent being charged for the property */ rent: z.number().optional(),
  /** The frequency at which rent will be collected (weekly/monthly/annually) */
  rentFrequency: z.string().optional(),
  /** Details of any bills that are included in the rent */
  rentIncludes: z.string().optional(),
  /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
  furnishing: z.array(z.string()).optional(),
  /** The acceptable letting terms (short/long/any) */
  term: z.string().optional(),
  /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
  status: z.string().optional(),
  /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string().optional(),
  /** The unique identifier of the landlord letting the property */
  landlordId: z.string().optional(),
  /** A note to accompany any works orders created for the property */
  worksOrderNote: z.string().optional(),
  /** The minimum number of months the property can be let out for */
  minimumTerm: z.number().int().optional(),
  /** The unique identifier of the negotiator that manages the property */
  propertyManagerId: z.string().optional(),
  /** The unique identifiers of the management companies associated to the property */
  managementCompanyIds: z.array(z.string()).optional(),
  /** The unique identifier of the document used for the lettings brochure */
  brochureId: z.string().optional(),
  /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
  publicBrochureUrl: z.string().optional(),
  /** Representation of the the commission fee for a property */
  managementFee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The commission letting fee amount */ amount: z.number().optional()
    })
    .optional(),
  /** Representation of the the commission fee for a property */
  lettingFee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The commission letting fee amount */ amount: z.number().optional()
    })
    .optional(),
  /** The rent qualifier (rentOnApplication/askingRent) */
  qualifier: z.string().optional(),
  /** Representation of property details specific to utilities */
  utilities: z
    .object({
      /** A flag denoting whether or not the property has gas connected */
      hasGas: z.boolean().optional(),
      /** The unique identifier of the company supplying the gas to the property */
      gasCompanyId: z.string().optional(),
      /** The gas meter point number */ gasMeterPoint: z.string().optional(),
      /** The unique identifier of the company supplying the electricity to the property */
      electricityCompanyId: z.string().optional(),
      /** The electricity meter point number */
      electricityMeterPoint: z.string().optional(),
      /** The unique identifier of the company supplying the water to the property */
      waterCompanyId: z.string().optional(),
      /** The water meter point number */
      waterMeterPoint: z.string().optional(),
      /** The unique identifier of the company supplying the telephone to the property */
      telephoneCompanyId: z.string().optional(),
      /** The unique identifier of the company supplying the internet to the property */
      internetCompanyId: z.string().optional(),
      /** The unique identifier of the company supplying the cable tv to the property */
      cableTvCompanyId: z.string().optional()
    })
    .optional(),
  /** Representation of a property details related to deposit */
  deposit: z
    .object({
      /** The type of deposit (weeks/months/fixed) */
      type: z.string().optional(),
      /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
      amount: z.number().optional()
    })
    .optional(),
  /** Representation of property details specific to rent insurance associated with a lettings property */
  rentInsurance: z
    .object({
      /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
      status: z.string().optional(),
      /** The reference number of the insurance policy when rent protection insurance has been taken out */
      referenceNumber: z.string().optional(),
      /** The insurance policy start date */ start: z.string().optional(),
      /** The insurance policy end date */ end: z.string().optional(),
      /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
      cancelledReasonId: z.string().optional(),
      /** A textual comment or note entered by the agent when an insurance policy was cancelled */
      cancelledComment: z.string().optional(),
      /** Flag indicating whether or not the insurance policy should auto renew */
      autoRenew: z.boolean().optional()
    })
    .optional(),
  /** Representation of property details specific to property Licencing */
  licencing: z
    .object({
      /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
      licenceRequired: z.boolean().optional(),
      /** The type of licence (additional/mandatory/none/notSet/selective) */
      licenceType: z.string().optional(),
      /** The number of households that the licence permits in the property */
      households: z.number().int().optional(),
      /** The number of occupants that the licence permits in the property */
      occupants: z.number().int().optional(),
      /** A flag determining whether or not the property is above commercial premises */
      aboveCommercialPremises: z.boolean().optional(),
      /** Representation of property details specific to property licence application */
      application: z
        .object({
          /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
          status: z.string().optional(),
          /** The licence application reference number */
          referenceNumber: z.string().optional(),
          /** The date the licence was applied for */
          date: z.string().optional(),
          /** The date the licence application was granted */
          granted: z.string().optional(),
          /** The date the licence will expire */ expiry: z.string().optional()
        })
        .optional()
    })
    .optional()
})
/** An properties commercial details */
export const propertyCommercialModel = z.object({
  /** The commercial use attributes (eg a1, a2, b1), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  useClass: z.array(z.string()).optional(),
  /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  floorLevel: z.array(z.string()).optional()
})
/** Any specific details relating to the marketing of a property in Guernsey */
export const guernseyModel = z.object({
  /** Attributes describing which markets the property is available in (local/openA/openB/openC/openD) */
  market: z.array(z.string()).optional()
})
/** Any specific details relating to energy performance ratings for properties marketed in Ireland */
export const irelandPropertyBERModel = z.object({
  /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
  exempt: z.boolean().optional(),
  /** The BER rating of the property */ rating: z.string().optional(),
  /** The BER certificate reference number */ refNumber: z.string().optional(),
  /** The energy performance indicator for the property */
  epi: z.string().optional()
})
/** Any specific details relating to the marketing of a property in Ireland */
export const irelandPropertyModel = z.object({
  /** Any specific details relating to energy performance ratings for properties marketed in Ireland */
  buildingEnergyRating: z
    .object({
      /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
      exempt: z.boolean().optional(),
      /** The BER rating of the property */ rating: z.string().optional(),
      /** The BER certificate reference number */
      refNumber: z.string().optional(),
      /** The energy performance indicator for the property */
      epi: z.string().optional()
    })
    .optional()
})
/** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const propertyRegionalModel = z.object({
  /** Any specific details relating to the marketing of a property in Guernsey */
  ggy: z
    .object({
      /** Attributes describing which markets the property is available in (local/openA/openB/openC/openD) */
      market: z.array(z.string()).optional()
    })
    .optional(),
  /** Any specific details relating to the marketing of a property in Ireland */
  irl: z
    .object({
      /** Any specific details relating to energy performance ratings for properties marketed in Ireland */
      buildingEnergyRating: z
        .object({
          /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
          exempt: z.boolean().optional(),
          /** The BER rating of the property */ rating: z.string().optional(),
          /** The BER certificate reference number */
          refNumber: z.string().optional(),
          /** The energy performance indicator for the property */
          epi: z.string().optional()
        })
        .optional()
    })
    .optional()
})
/** Represents an unmapped attribute type */
export const unmappedAttributeModel = z.object({
  /** The type of unmapped attribute (style/type/situation/parking/age/locality/special) */
  type: z.string().optional(),
  /** The value associated to the unmapped type */ value: z.string().optional()
})
/** Representation of a single room in a property */
export const propertyRoomModel = z.object({
  /** The name of the room */ name: z.string().optional(),
  /** Details about the dimensions of the room */
  dimensions: z.string().optional(),
  /** Details about the alternate dimensions of the room */
  dimensionsAlt: z.string().optional(),
  /** Short description of the room */ description: z.string().optional()
})
/** Representation of a property. Properties can be grouped into developments in the source data, functionality that is typically used by New Homes departments.
The _links collection will expose specific links to allow developers to navigate through a particular development, should a property be configured in this manner. Refer to commentary on the _links collection for more details */
export const propertyModel = z.object({
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the property */ id: z.string().optional(),
  /** The date and time when the property was created */
  created: z.string().optional(),
  /** The date and time when the property was last modified */
  modified: z.string().optional(),
  /** The date the owner of the property was last called */
  lastCall: z.string().optional(),
  /** The date the owner of the property is next due to be called */
  nextCall: z.string().optional(),
  /** The marketing mode of the property (selling/letting/sellingAndLetting) */
  marketingMode: z.string().optional(),
  /** The currency that applies to monetary amounts exposed in the model */
  currency: z.string().optional(),
  /** An optional alternative identifier specified for this property */
  alternateId: z.string().optional(),
  /** Representation of the physical address of a building or premise */
  address: z
    .object({
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides within */
      countryId: z.string().optional(),
      /** The local timezone for the address, based on the Geolocation coordinates */
      localTimeZone: z.string().optional(),
      /** Representation of the geographical location of an address using coordinates */
      geolocation: z
        .object({
          /** The latitude coordinate of the coordinate pair */
          latitude: z.number().optional(),
          /** The longitude coordinate of the coordinate pair */
          longitude: z.number().optional()
        })
        .optional()
    })
    .optional(),
  /** The unique identifier of the area that the property resides in */
  areaId: z.string().optional(),
  /** The strapline description containing a short summary about the property */
  strapline: z.string().optional(),
  /** The brief description of the property */
  description: z.string().optional(),
  /** The long description of the property */
  longDescription: z.string().optional(),
  /** The property's local authority */
  localAuthorityCompanyId: z.string().optional(),
  /** The name of the property's local authority */
  localAuthorityCompanyName: z.string().optional(),
  /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
  summary: z.string().optional(),
  /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  departmentId: z.string().optional(),
  /** The unique identifier of the negotiator managing the property */
  negotiatorId: z.string().optional(),
  /** The total number of bedrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bedrooms: z.number().int().optional(),
  /** The maximum number of bedrooms in the property or properties. This is typically used when marketing development sites and would be set on the master record. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bedroomsMax: z.number().int().optional(),
  /** The total number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  receptions: z.number().int().optional(),
  /** The maximum number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  receptionsMax: z.number().int().optional(),
  /** The total number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bathrooms: z.number().int().optional(),
  /** The maximum number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  bathroomsMax: z.number().int().optional(),
  /** The number of units offered on the market. This is typically used when marketing development sites. */
  numberOfUnits: z.number().int().optional(),
  /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  parkingSpaces: z.number().int().optional(),
  /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
  councilTax: z.string().optional(),
  /** A collection of identifiers of portals that the property should not be displayed on */
  disabledPortalIds: z.array(z.string()).optional(),
  /** A flag denoting whether or not this property can be advertised on the internet */
  internetAdvertising: z.boolean().optional(),
  /** A flag denoting whether or not the property has been instructed by another estate agent */
  isExternal: z.boolean().optional(),
  /** The arrangements regarding viewing the property */
  viewingArrangements: z.string().optional(),
  /** The url of a video associated with this property, such as a virtual tour */
  videoUrl: z.string().optional(),
  /** The caption for the video url associated with this property */
  videoCaption: z.string().optional(),
  /** The url of a second video associated with this property, such as a virtual tour */
  video2Url: z.string().optional(),
  /** The caption for the second video url associated with this property */
  video2Caption: z.string().optional(),
  /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
  notes: z.string().optional(),
  /** The status of the advertising board sited outside or near to the property */
  boardStatus: z.string().optional(),
  /** Any notes relevant to the advertising board sited outside or near to the property */
  boardNotes: z.string().optional(),
  /** The properties featured image url */
  featuredImageUrl: z.string().optional(),
  /** The url to the property on an external website */
  url: z.string().optional(),
  /** The caption to accompany the url to the property on an external website */
  urlCaption: z.string().optional(),
  /** Any ground rent payment that applies to the property */
  groundRent: z.number().optional(),
  /** Comments regarding the ground rent of the property */
  groundRentComment: z.string().optional(),
  /** The date when the ground rent payable on the property should be reviewed */
  groundRentReviewDate: z.string().optional(),
  /** The annual percentage increase of the ground rent after being reviewed */
  groundRentIncrease: z.number().optional(),
  /** Any service charge payment that applies to the property */
  serviceCharge: z.number().optional(),
  /** Comments regarding the service charge of the property */
  serviceChargeComment: z.string().optional(),
  /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  floorLevel: z.number().int().optional(),
  /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  internalFloors: z.number().int().optional(),
  /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  totalFloors: z.number().int().optional(),
  /** The date the advertising board was last updated (or should be updated when the date is in the future) */
  boardUpdated: z.string().optional(),
  /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
  valuation: z.string().optional(),
  /** The date and time the property was archived */
  archivedOn: z.string().optional(),
  /** A flag determining whether or not the property is archived */
  fromArchive: z.boolean().optional(),
  /** Details specific to rural properties */
  rural: z
    .object({
      /** Details of the rural tenure associated with the property. */
      tenureId: z.string().optional(),
      /** Details of the buildings associated with the property. */
      buildingsDescription: z.string().optional(),
      /** Details of the land associated with the property. */
      landDescription: z.string().optional()
    })
    .optional(),
  /** Representation of the external land area of a property */
  externalArea: z
    .object({
      /** The unit of area (acres/hectares) */ type: z.string().optional(),
      /** The minimum area bound */ min: z.number().optional(),
      /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
      max: z.number().optional()
    })
    .optional(),
  /** Representation of the internal dimensions of a property */
  internalArea: z
    .object({
      /** The unit of area (squareFeet/squareMetres) */
      type: z.string().optional(),
      /** The minimum area bound */ min: z.number().optional(),
      /** The maximum area bound */ max: z.number().optional()
    })
    .optional(),
  /** Representation of EPC statistics */
  epc: z
    .object({
      /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
      exempt: z.boolean().optional(),
      /** The current energy efficiency rating */
      eer: z.number().int().optional(),
      /** The current energy efficiency letter rating (A-G). This is generated from the `eer` value
for systems that do not have an explicit EPC Rating component */
      eerRating: z.string().optional(),
      /** The potential energy efficiency rating */
      eerPotential: z.number().int().optional(),
      /** The potential energy efficiency letter rating (A-G). This is generated from the `eerPotential` value */
      eerPotentialRating: z.string().optional(),
      /** The current environmental impact rating */
      eir: z.number().int().optional(),
      /** The current environment impact letter rating (A-G). This is generated from the `eir` value */
      eirRating: z.string().optional(),
      /** The potential environmental impact rating */
      eirPotential: z.number().int().optional(),
      /** The potential environment impact letter rating (A-G). This is generated from the `eirPotential` value */
      eirPotentialRating: z.string().optional(),
      /** The URL to access the full EPC document */
      fullDocumentUrl: z.string().optional(),
      /** The URL to access the first page of the EPC document */
      firstPageDocumentUrl: z.string().optional()
    })
    .optional(),
  /** Representation of property details specific to sales marketing */
  selling: z
    .object({
      /** The date that the property was marked as for sale */
      instructed: z.string().optional(),
      /** The marketing price of the property */ price: z.number().optional(),
      /** The maximum price of a property on the development plot */
      priceTo: z.number().optional(),
      /** The fee charged by the agent to reserve a property (typically a new build) */
      reservationFee: z.number().int().optional(),
      /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
      qualifier: z.string().optional(),
      /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
      status: z.string().optional(),
      /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
      disposal: z.string().optional(),
      /** The date the property sale was completed */
      completed: z.string().optional(),
      /** The date the property was exchanged */
      exchanged: z.string().optional(),
      /** The date the property account was paid */
      accountPaid: z.string().optional(),
      /** Representation of the tenure of a property */
      tenure: z
        .object({
          /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
          type: z.string().optional(),
          /** The tenure expiration date */ expiry: z.string().optional()
        })
        .optional(),
      /** The unique identifier of the vendor selling the property */
      vendorId: z.string().optional(),
      /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
      agency: z.string().optional(),
      /** The unique identifier of the custom selling agency type - only applicable when Agency is not set */
      agencyId: z.string().optional(),
      /** The date on which the agreement between the vendor and agent expires */
      agreementExpiry: z.string().optional(),
      /** Representation of the the commission fee for a property */
      fee: z
        .object({
          /** The commission letting fee type (percentage/fixed) */
          type: z.string().optional(),
          /** The commission letting fee amount */ amount: z.number().optional()
        })
        .optional(),
      /** The actual fee amount to be collected by the agent - often based on the exchange price of the property */
      exchangedCompanyFee: z.number().optional(),
      /** The agent's recommended asking price */
      recommendedPrice: z.number().int().optional(),
      /** The agent's valuation price */
      valuationPrice: z.number().int().optional(),
      /** The unique identifier of the document used for the sales brochure */
      brochureId: z.string().optional(),
      /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
      publicBrochureUrl: z.string().optional(),
      /** The price the property exchanged/sold for */
      exchangedPrice: z.number().int().optional(),
      /** The unique identifier of the office that sold the property */
      exchangedOfficeId: z.string().optional(),
      /** The property's decorative condition (unmodernised/fair/good/veryGood) */
      decoration: z.array(z.string()).optional(),
      /** Details relating to the shared ownership of the property */
      sharedOwnership: z
        .object({
          /** The percentage of the shared ownership property being sold by the vendor */
          sharedPercentage: z.number().optional(),
          /** The rent payable on the remainder of the shared ownership property */
          rent: z.number().optional(),
          /** The frequency at which the shared ownership rent should be paid */
          rentFrequency: z.string().optional()
        })
        .optional(),
      /** Representation of the sub agent terms */
      subAgentTerms: z
        .object({
          /** A flag denoting whether or not fee is available */
          feeAvailable: z.boolean().optional(),
          /** The type of fee (percent/fixed/callForFees) */
          type: z.string().optional(),
          /** The fee amount */ amount: z.number().optional()
        })
        .optional()
    })
    .optional(),
  /** Representation of property details specific to lettings marketing */
  letting: z
    .object({
      /** The date the property was marked as to let */
      instructed: z.string().optional(),
      /** The date the property is next available from */
      availableFrom: z.string().optional(),
      /** The date the property is available to */
      availableTo: z.string().optional(),
      /** The date the letting agreement between the landlord and agent was signed */
      agreementSigned: z.string().optional(),
      /** The rent being charged for the property */
      rent: z.number().optional(),
      /** The frequency at which rent will be collected (weekly/monthly/annually) */
      rentFrequency: z.string().optional(),
      /** Details of any bills that are included in the rent */
      rentIncludes: z.string().optional(),
      /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
      furnishing: z.array(z.string()).optional(),
      /** The acceptable letting terms (short/long/any) */
      term: z.string().optional(),
      /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
      status: z.string().optional(),
      /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
      agentRole: z.string().optional(),
      /** The unique identifier of the landlord letting the property */
      landlordId: z.string().optional(),
      /** A note to accompany any works orders created for the property */
      worksOrderNote: z.string().optional(),
      /** The minimum number of months the property can be let out for */
      minimumTerm: z.number().int().optional(),
      /** The unique identifier of the negotiator that manages the property */
      propertyManagerId: z.string().optional(),
      /** The unique identifiers of the management companies associated to the property */
      managementCompanyIds: z.array(z.string()).optional(),
      /** The unique identifier of the document used for the lettings brochure */
      brochureId: z.string().optional(),
      /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
      publicBrochureUrl: z.string().optional(),
      /** Representation of the the commission fee for a property */
      managementFee: z
        .object({
          /** The commission letting fee type (percentage/fixed) */
          type: z.string().optional(),
          /** The commission letting fee amount */ amount: z.number().optional()
        })
        .optional(),
      /** Representation of the the commission fee for a property */
      lettingFee: z
        .object({
          /** The commission letting fee type (percentage/fixed) */
          type: z.string().optional(),
          /** The commission letting fee amount */ amount: z.number().optional()
        })
        .optional(),
      /** The rent qualifier (rentOnApplication/askingRent) */
      qualifier: z.string().optional(),
      /** Representation of property details specific to utilities */
      utilities: z
        .object({
          /** A flag denoting whether or not the property has gas connected */
          hasGas: z.boolean().optional(),
          /** The unique identifier of the company supplying the gas to the property */
          gasCompanyId: z.string().optional(),
          /** The gas meter point number */
          gasMeterPoint: z.string().optional(),
          /** The unique identifier of the company supplying the electricity to the property */
          electricityCompanyId: z.string().optional(),
          /** The electricity meter point number */
          electricityMeterPoint: z.string().optional(),
          /** The unique identifier of the company supplying the water to the property */
          waterCompanyId: z.string().optional(),
          /** The water meter point number */
          waterMeterPoint: z.string().optional(),
          /** The unique identifier of the company supplying the telephone to the property */
          telephoneCompanyId: z.string().optional(),
          /** The unique identifier of the company supplying the internet to the property */
          internetCompanyId: z.string().optional(),
          /** The unique identifier of the company supplying the cable tv to the property */
          cableTvCompanyId: z.string().optional()
        })
        .optional(),
      /** Representation of a property details related to deposit */
      deposit: z
        .object({
          /** The type of deposit (weeks/months/fixed) */
          type: z.string().optional(),
          /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
          amount: z.number().optional()
        })
        .optional(),
      /** Representation of property details specific to rent insurance associated with a lettings property */
      rentInsurance: z
        .object({
          /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
          status: z.string().optional(),
          /** The reference number of the insurance policy when rent protection insurance has been taken out */
          referenceNumber: z.string().optional(),
          /** The insurance policy start date */ start: z.string().optional(),
          /** The insurance policy end date */ end: z.string().optional(),
          /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
          cancelledReasonId: z.string().optional(),
          /** A textual comment or note entered by the agent when an insurance policy was cancelled */
          cancelledComment: z.string().optional(),
          /** Flag indicating whether or not the insurance policy should auto renew */
          autoRenew: z.boolean().optional()
        })
        .optional(),
      /** Representation of property details specific to property Licencing */
      licencing: z
        .object({
          /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
          licenceRequired: z.boolean().optional(),
          /** The type of licence (additional/mandatory/none/notSet/selective) */
          licenceType: z.string().optional(),
          /** The number of households that the licence permits in the property */
          households: z.number().int().optional(),
          /** The number of occupants that the licence permits in the property */
          occupants: z.number().int().optional(),
          /** A flag determining whether or not the property is above commercial premises */
          aboveCommercialPremises: z.boolean().optional(),
          /** Representation of property details specific to property licence application */
          application: z
            .object({
              /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
              status: z.string().optional(),
              /** The licence application reference number */
              referenceNumber: z.string().optional(),
              /** The date the licence was applied for */
              date: z.string().optional(),
              /** The date the licence application was granted */
              granted: z.string().optional(),
              /** The date the licence will expire */
              expiry: z.string().optional()
            })
            .optional()
        })
        .optional()
    })
    .optional(),
  /** An properties commercial details */
  commercial: z
    .object({
      /** The commercial use attributes (eg a1, a2, b1), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      useClass: z.array(z.string()).optional(),
      /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
      floorLevel: z.array(z.string()).optional()
    })
    .optional(),
  /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  regional: z
    .object({
      /** Any specific details relating to the marketing of a property in Guernsey */
      ggy: z
        .object({
          /** Attributes describing which markets the property is available in (local/openA/openB/openC/openD) */
          market: z.array(z.string()).optional()
        })
        .optional(),
      /** Any specific details relating to the marketing of a property in Ireland */
      irl: z
        .object({
          /** Any specific details relating to energy performance ratings for properties marketed in Ireland */
          buildingEnergyRating: z
            .object({
              /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
              exempt: z.boolean().optional(),
              /** The BER rating of the property */
              rating: z.string().optional(),
              /** The BER certificate reference number */
              refNumber: z.string().optional(),
              /** The energy performance indicator for the property */
              epi: z.string().optional()
            })
            .optional()
        })
        .optional()
    })
    .optional(),
  /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  type: z.array(z.string()).optional(),
  /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  style: z.array(z.string()).optional(),
  /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  situation: z.array(z.string()).optional(),
  /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  parking: z.array(z.string()).optional(),
  /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  age: z.array(z.string()).optional(),
  /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
  locality: z.array(z.string()).optional(),
  /** The attributes describing the property's special features (eg swimmingPool, tennisCourt), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  specialFeatures: z.array(z.string()).optional(),
  /** The attributes associated to the property which are not currently mapped. These are defined the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  unmappedAttributes: z
    .array(
      /** Represents an unmapped attribute type */
      z.object({
        /** The type of unmapped attribute (style/type/situation/parking/age/locality/special) */
        type: z.string().optional(),
        /** The value associated to the unmapped type */
        value: z.string().optional()
      })
    )
    .optional(),
  /** Identifiers of any services connected at the property */
  availableServicesIds: z.array(z.string()).optional(),
  /** Details of each room in the property */
  rooms: z
    .array(
      /** Representation of a single room in a property */
      z.object({
        /** The name of the room */ name: z.string().optional(),
        /** Details about the dimensions of the room */
        dimensions: z.string().optional(),
        /** Details about the alternate dimensions of the room */
        dimensionsAlt: z.string().optional(),
        /** Short description of the room */ description: z.string().optional()
      })
    )
    .optional(),
  /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
  roomDetailsApproved: z.boolean().optional(),
  /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional(),
  /** The date that this property became a lost instruction */
  lostInstructionDate: z.string().optional(),
  /** The notes regarding the lost instruction */
  lostInstructionNote: z.string().optional(),
  /** The type of development */ developmentSiteType: z.string().optional(),
  /** App specific metadata that has been set against the property */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The keywords associated with property */
  keywords: z.array(z.string()).optional(),
  /** The requested extras fields */
  extrasField: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the property. Used for managing update concurrency */
  _eTag: z.string().optional(),
  /** Collection containing relative URLs to data associated with the property.
In the case of a development - where a property is grouped with, or associated to another property by way of a parent/child relationship,
the collection will contain a _master_ or _subPlot_ link depending on the property type. Where the property is the master record in a development (the parent),
a _subPlots_ link will be included in the collection giving you access to all the plots (the children) within the development. Where the property is a sub plot that forms part of a 
development, a _master_ link will be included in the collection giving you access to the master record. */
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
export const propertyModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a property. Properties can be grouped into developments in the source data, functionality that is typically used by New Homes departments.
The _links collection will expose specific links to allow developers to navigate through a particular development, should a property be configured in this manner. Refer to commentary on the _links collection for more details */
      z.object({
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the property */ id: z.string().optional(),
        /** The date and time when the property was created */
        created: z.string().optional(),
        /** The date and time when the property was last modified */
        modified: z.string().optional(),
        /** The date the owner of the property was last called */
        lastCall: z.string().optional(),
        /** The date the owner of the property is next due to be called */
        nextCall: z.string().optional(),
        /** The marketing mode of the property (selling/letting/sellingAndLetting) */
        marketingMode: z.string().optional(),
        /** The currency that applies to monetary amounts exposed in the model */
        currency: z.string().optional(),
        /** An optional alternative identifier specified for this property */
        alternateId: z.string().optional(),
        /** Representation of the physical address of a building or premise */
        address: z
          .object({
            /** The building name */ buildingName: z.string().optional(),
            /** The building number */ buildingNumber: z.string().optional(),
            /** The first line of the address */ line1: z.string().optional(),
            /** The second line of the address */ line2: z.string().optional(),
            /** The third line of the address */ line3: z.string().optional(),
            /** The fourth line of the address */ line4: z.string().optional(),
            /** The postcode */ postcode: z.string().optional(),
            /** The ISO-3166 country code that the address resides within */
            countryId: z.string().optional(),
            /** The local timezone for the address, based on the Geolocation coordinates */
            localTimeZone: z.string().optional(),
            /** Representation of the geographical location of an address using coordinates */
            geolocation: z
              .object({
                /** The latitude coordinate of the coordinate pair */
                latitude: z.number().optional(),
                /** The longitude coordinate of the coordinate pair */
                longitude: z.number().optional()
              })
              .optional()
          })
          .optional(),
        /** The unique identifier of the area that the property resides in */
        areaId: z.string().optional(),
        /** The strapline description containing a short summary about the property */
        strapline: z.string().optional(),
        /** The brief description of the property */
        description: z.string().optional(),
        /** The long description of the property */
        longDescription: z.string().optional(),
        /** The property's local authority */
        localAuthorityCompanyId: z.string().optional(),
        /** The name of the property's local authority */
        localAuthorityCompanyName: z.string().optional(),
        /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
        summary: z.string().optional(),
        /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
        departmentId: z.string().optional(),
        /** The unique identifier of the negotiator managing the property */
        negotiatorId: z.string().optional(),
        /** The total number of bedrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        bedrooms: z.number().int().optional(),
        /** The maximum number of bedrooms in the property or properties. This is typically used when marketing development sites and would be set on the master record. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        bedroomsMax: z.number().int().optional(),
        /** The total number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        receptions: z.number().int().optional(),
        /** The maximum number of reception rooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        receptionsMax: z.number().int().optional(),
        /** The total number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        bathrooms: z.number().int().optional(),
        /** The maximum number of bathrooms in the property. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        bathroomsMax: z.number().int().optional(),
        /** The number of units offered on the market. This is typically used when marketing development sites. */
        numberOfUnits: z.number().int().optional(),
        /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        parkingSpaces: z.number().int().optional(),
        /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
        councilTax: z.string().optional(),
        /** A collection of identifiers of portals that the property should not be displayed on */
        disabledPortalIds: z.array(z.string()).optional(),
        /** A flag denoting whether or not this property can be advertised on the internet */
        internetAdvertising: z.boolean().optional(),
        /** A flag denoting whether or not the property has been instructed by another estate agent */
        isExternal: z.boolean().optional(),
        /** The arrangements regarding viewing the property */
        viewingArrangements: z.string().optional(),
        /** The url of a video associated with this property, such as a virtual tour */
        videoUrl: z.string().optional(),
        /** The caption for the video url associated with this property */
        videoCaption: z.string().optional(),
        /** The url of a second video associated with this property, such as a virtual tour */
        video2Url: z.string().optional(),
        /** The caption for the second video url associated with this property */
        video2Caption: z.string().optional(),
        /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
        notes: z.string().optional(),
        /** The status of the advertising board sited outside or near to the property */
        boardStatus: z.string().optional(),
        /** Any notes relevant to the advertising board sited outside or near to the property */
        boardNotes: z.string().optional(),
        /** The properties featured image url */
        featuredImageUrl: z.string().optional(),
        /** The url to the property on an external website */
        url: z.string().optional(),
        /** The caption to accompany the url to the property on an external website */
        urlCaption: z.string().optional(),
        /** Any ground rent payment that applies to the property */
        groundRent: z.number().optional(),
        /** Comments regarding the ground rent of the property */
        groundRentComment: z.string().optional(),
        /** The date when the ground rent payable on the property should be reviewed */
        groundRentReviewDate: z.string().optional(),
        /** The annual percentage increase of the ground rent after being reviewed */
        groundRentIncrease: z.number().optional(),
        /** Any service charge payment that applies to the property */
        serviceCharge: z.number().optional(),
        /** Comments regarding the service charge of the property */
        serviceChargeComment: z.string().optional(),
        /** The total number of parking spaces the property has. This is only supported by some departments. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        floorLevel: z.number().int().optional(),
        /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        internalFloors: z.number().int().optional(),
        /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
        totalFloors: z.number().int().optional(),
        /** The date the advertising board was last updated (or should be updated when the date is in the future) */
        boardUpdated: z.string().optional(),
        /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
        valuation: z.string().optional(),
        /** The date and time the property was archived */
        archivedOn: z.string().optional(),
        /** A flag determining whether or not the property is archived */
        fromArchive: z.boolean().optional(),
        /** Details specific to rural properties */
        rural: z
          .object({
            /** Details of the rural tenure associated with the property. */
            tenureId: z.string().optional(),
            /** Details of the buildings associated with the property. */
            buildingsDescription: z.string().optional(),
            /** Details of the land associated with the property. */
            landDescription: z.string().optional()
          })
          .optional(),
        /** Representation of the external land area of a property */
        externalArea: z
          .object({
            /** The unit of area (acres/hectares) */
            type: z.string().optional(),
            /** The minimum area bound */ min: z.number().optional(),
            /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
            max: z.number().optional()
          })
          .optional(),
        /** Representation of the internal dimensions of a property */
        internalArea: z
          .object({
            /** The unit of area (squareFeet/squareMetres) */
            type: z.string().optional(),
            /** The minimum area bound */ min: z.number().optional(),
            /** The maximum area bound */ max: z.number().optional()
          })
          .optional(),
        /** Representation of EPC statistics */
        epc: z
          .object({
            /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
            exempt: z.boolean().optional(),
            /** The current energy efficiency rating */
            eer: z.number().int().optional(),
            /** The current energy efficiency letter rating (A-G). This is generated from the `eer` value
for systems that do not have an explicit EPC Rating component */
            eerRating: z.string().optional(),
            /** The potential energy efficiency rating */
            eerPotential: z.number().int().optional(),
            /** The potential energy efficiency letter rating (A-G). This is generated from the `eerPotential` value */
            eerPotentialRating: z.string().optional(),
            /** The current environmental impact rating */
            eir: z.number().int().optional(),
            /** The current environment impact letter rating (A-G). This is generated from the `eir` value */
            eirRating: z.string().optional(),
            /** The potential environmental impact rating */
            eirPotential: z.number().int().optional(),
            /** The potential environment impact letter rating (A-G). This is generated from the `eirPotential` value */
            eirPotentialRating: z.string().optional(),
            /** The URL to access the full EPC document */
            fullDocumentUrl: z.string().optional(),
            /** The URL to access the first page of the EPC document */
            firstPageDocumentUrl: z.string().optional()
          })
          .optional(),
        /** Representation of property details specific to sales marketing */
        selling: z
          .object({
            /** The date that the property was marked as for sale */
            instructed: z.string().optional(),
            /** The marketing price of the property */
            price: z.number().optional(),
            /** The maximum price of a property on the development plot */
            priceTo: z.number().optional(),
            /** The fee charged by the agent to reserve a property (typically a new build) */
            reservationFee: z.number().int().optional(),
            /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
            qualifier: z.string().optional(),
            /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
            status: z.string().optional(),
            /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
            disposal: z.string().optional(),
            /** The date the property sale was completed */
            completed: z.string().optional(),
            /** The date the property was exchanged */
            exchanged: z.string().optional(),
            /** The date the property account was paid */
            accountPaid: z.string().optional(),
            /** Representation of the tenure of a property */
            tenure: z
              .object({
                /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
                type: z.string().optional(),
                /** The tenure expiration date */ expiry: z.string().optional()
              })
              .optional(),
            /** The unique identifier of the vendor selling the property */
            vendorId: z.string().optional(),
            /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
            agency: z.string().optional(),
            /** The unique identifier of the custom selling agency type - only applicable when Agency is not set */
            agencyId: z.string().optional(),
            /** The date on which the agreement between the vendor and agent expires */
            agreementExpiry: z.string().optional(),
            /** Representation of the the commission fee for a property */
            fee: z
              .object({
                /** The commission letting fee type (percentage/fixed) */
                type: z.string().optional(),
                /** The commission letting fee amount */
                amount: z.number().optional()
              })
              .optional(),
            /** The actual fee amount to be collected by the agent - often based on the exchange price of the property */
            exchangedCompanyFee: z.number().optional(),
            /** The agent's recommended asking price */
            recommendedPrice: z.number().int().optional(),
            /** The agent's valuation price */
            valuationPrice: z.number().int().optional(),
            /** The unique identifier of the document used for the sales brochure */
            brochureId: z.string().optional(),
            /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
            publicBrochureUrl: z.string().optional(),
            /** The price the property exchanged/sold for */
            exchangedPrice: z.number().int().optional(),
            /** The unique identifier of the office that sold the property */
            exchangedOfficeId: z.string().optional(),
            /** The property's decorative condition (unmodernised/fair/good/veryGood) */
            decoration: z.array(z.string()).optional(),
            /** Details relating to the shared ownership of the property */
            sharedOwnership: z
              .object({
                /** The percentage of the shared ownership property being sold by the vendor */
                sharedPercentage: z.number().optional(),
                /** The rent payable on the remainder of the shared ownership property */
                rent: z.number().optional(),
                /** The frequency at which the shared ownership rent should be paid */
                rentFrequency: z.string().optional()
              })
              .optional(),
            /** Representation of the sub agent terms */
            subAgentTerms: z
              .object({
                /** A flag denoting whether or not fee is available */
                feeAvailable: z.boolean().optional(),
                /** The type of fee (percent/fixed/callForFees) */
                type: z.string().optional(),
                /** The fee amount */ amount: z.number().optional()
              })
              .optional()
          })
          .optional(),
        /** Representation of property details specific to lettings marketing */
        letting: z
          .object({
            /** The date the property was marked as to let */
            instructed: z.string().optional(),
            /** The date the property is next available from */
            availableFrom: z.string().optional(),
            /** The date the property is available to */
            availableTo: z.string().optional(),
            /** The date the letting agreement between the landlord and agent was signed */
            agreementSigned: z.string().optional(),
            /** The rent being charged for the property */
            rent: z.number().optional(),
            /** The frequency at which rent will be collected (weekly/monthly/annually) */
            rentFrequency: z.string().optional(),
            /** Details of any bills that are included in the rent */
            rentIncludes: z.string().optional(),
            /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
            furnishing: z.array(z.string()).optional(),
            /** The acceptable letting terms (short/long/any) */
            term: z.string().optional(),
            /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
            status: z.string().optional(),
            /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
            agentRole: z.string().optional(),
            /** The unique identifier of the landlord letting the property */
            landlordId: z.string().optional(),
            /** A note to accompany any works orders created for the property */
            worksOrderNote: z.string().optional(),
            /** The minimum number of months the property can be let out for */
            minimumTerm: z.number().int().optional(),
            /** The unique identifier of the negotiator that manages the property */
            propertyManagerId: z.string().optional(),
            /** The unique identifiers of the management companies associated to the property */
            managementCompanyIds: z.array(z.string()).optional(),
            /** The unique identifier of the document used for the lettings brochure */
            brochureId: z.string().optional(),
            /** The URL at which the brochure can be publicly accessed when the
property is being actively marketed */
            publicBrochureUrl: z.string().optional(),
            /** Representation of the the commission fee for a property */
            managementFee: z
              .object({
                /** The commission letting fee type (percentage/fixed) */
                type: z.string().optional(),
                /** The commission letting fee amount */
                amount: z.number().optional()
              })
              .optional(),
            /** Representation of the the commission fee for a property */
            lettingFee: z
              .object({
                /** The commission letting fee type (percentage/fixed) */
                type: z.string().optional(),
                /** The commission letting fee amount */
                amount: z.number().optional()
              })
              .optional(),
            /** The rent qualifier (rentOnApplication/askingRent) */
            qualifier: z.string().optional(),
            /** Representation of property details specific to utilities */
            utilities: z
              .object({
                /** A flag denoting whether or not the property has gas connected */
                hasGas: z.boolean().optional(),
                /** The unique identifier of the company supplying the gas to the property */
                gasCompanyId: z.string().optional(),
                /** The gas meter point number */
                gasMeterPoint: z.string().optional(),
                /** The unique identifier of the company supplying the electricity to the property */
                electricityCompanyId: z.string().optional(),
                /** The electricity meter point number */
                electricityMeterPoint: z.string().optional(),
                /** The unique identifier of the company supplying the water to the property */
                waterCompanyId: z.string().optional(),
                /** The water meter point number */
                waterMeterPoint: z.string().optional(),
                /** The unique identifier of the company supplying the telephone to the property */
                telephoneCompanyId: z.string().optional(),
                /** The unique identifier of the company supplying the internet to the property */
                internetCompanyId: z.string().optional(),
                /** The unique identifier of the company supplying the cable tv to the property */
                cableTvCompanyId: z.string().optional()
              })
              .optional(),
            /** Representation of a property details related to deposit */
            deposit: z
              .object({
                /** The type of deposit (weeks/months/fixed) */
                type: z.string().optional(),
                /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
                amount: z.number().optional()
              })
              .optional(),
            /** Representation of property details specific to rent insurance associated with a lettings property */
            rentInsurance: z
              .object({
                /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
                status: z.string().optional(),
                /** The reference number of the insurance policy when rent protection insurance has been taken out */
                referenceNumber: z.string().optional(),
                /** The insurance policy start date */
                start: z.string().optional(),
                /** The insurance policy end date */ end: z.string().optional(),
                /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
                cancelledReasonId: z.string().optional(),
                /** A textual comment or note entered by the agent when an insurance policy was cancelled */
                cancelledComment: z.string().optional(),
                /** Flag indicating whether or not the insurance policy should auto renew */
                autoRenew: z.boolean().optional()
              })
              .optional(),
            /** Representation of property details specific to property Licencing */
            licencing: z
              .object({
                /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
                licenceRequired: z.boolean().optional(),
                /** The type of licence (additional/mandatory/none/notSet/selective) */
                licenceType: z.string().optional(),
                /** The number of households that the licence permits in the property */
                households: z.number().int().optional(),
                /** The number of occupants that the licence permits in the property */
                occupants: z.number().int().optional(),
                /** A flag determining whether or not the property is above commercial premises */
                aboveCommercialPremises: z.boolean().optional(),
                /** Representation of property details specific to property licence application */
                application: z
                  .object({
                    /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
                    status: z.string().optional(),
                    /** The licence application reference number */
                    referenceNumber: z.string().optional(),
                    /** The date the licence was applied for */
                    date: z.string().optional(),
                    /** The date the licence application was granted */
                    granted: z.string().optional(),
                    /** The date the licence will expire */
                    expiry: z.string().optional()
                  })
                  .optional()
              })
              .optional()
          })
          .optional(),
        /** An properties commercial details */
        commercial: z
          .object({
            /** The commercial use attributes (eg a1, a2, b1), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
            useClass: z.array(z.string()).optional(),
            /** The commercial floor level attributes (eg basement, subGround, ground, upperFloor), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
            floorLevel: z.array(z.string()).optional()
          })
          .optional(),
        /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
        regional: z
          .object({
            /** Any specific details relating to the marketing of a property in Guernsey */
            ggy: z
              .object({
                /** Attributes describing which markets the property is available in (local/openA/openB/openC/openD) */
                market: z.array(z.string()).optional()
              })
              .optional(),
            /** Any specific details relating to the marketing of a property in Ireland */
            irl: z
              .object({
                /** Any specific details relating to energy performance ratings for properties marketed in Ireland */
                buildingEnergyRating: z
                  .object({
                    /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
                    exempt: z.boolean().optional(),
                    /** The BER rating of the property */
                    rating: z.string().optional(),
                    /** The BER certificate reference number */
                    refNumber: z.string().optional(),
                    /** The energy performance indicator for the property */
                    epi: z.string().optional()
                  })
                  .optional()
              })
              .optional()
          })
          .optional(),
        /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        type: z.array(z.string()).optional(),
        /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        style: z.array(z.string()).optional(),
        /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        situation: z.array(z.string()).optional(),
        /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        parking: z.array(z.string()).optional(),
        /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        age: z.array(z.string()).optional(),
        /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department)
For information about how to interpret this data and how it maps back to AgencyCloud, please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#interpreting-department-data) */
        locality: z.array(z.string()).optional(),
        /** The attributes describing the property's special features (eg swimmingPool, tennisCourt), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
        specialFeatures: z.array(z.string()).optional(),
        /** The attributes associated to the property which are not currently mapped. These are defined the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
        unmappedAttributes: z
          .array(
            /** Represents an unmapped attribute type */
            z.object({
              /** The type of unmapped attribute (style/type/situation/parking/age/locality/special) */
              type: z.string().optional(),
              /** The value associated to the unmapped type */
              value: z.string().optional()
            })
          )
          .optional(),
        /** Identifiers of any services connected at the property */
        availableServicesIds: z.array(z.string()).optional(),
        /** Details of each room in the property */
        rooms: z
          .array(
            /** Representation of a single room in a property */
            z.object({
              /** The name of the room */ name: z.string().optional(),
              /** Details about the dimensions of the room */
              dimensions: z.string().optional(),
              /** Details about the alternate dimensions of the room */
              dimensionsAlt: z.string().optional(),
              /** Short description of the room */
              description: z.string().optional()
            })
          )
          .optional(),
        /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
        roomDetailsApproved: z.boolean().optional(),
        /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
        officeIds: z.array(z.string()).optional(),
        /** The date that this property became a lost instruction */
        lostInstructionDate: z.string().optional(),
        /** The notes regarding the lost instruction */
        lostInstructionNote: z.string().optional(),
        /** The type of development */
        developmentSiteType: z.string().optional(),
        /** App specific metadata that has been set against the property */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The keywords associated with property */
        keywords: z.array(z.string()).optional(),
        /** The requested extras fields */
        extrasField: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the property. Used for managing update concurrency */
        _eTag: z.string().optional(),
        /** Collection containing relative URLs to data associated with the property.
In the case of a development - where a property is grouped with, or associated to another property by way of a parent/child relationship,
the collection will contain a _master_ or _subPlot_ link depending on the property type. Where the property is the master record in a development (the parent),
a _subPlots_ link will be included in the collection giving you access to all the plots (the children) within the development. Where the property is a sub plot that forms part of a 
development, a _master_ link will be included in the collection giving you access to the master record. */
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to set the geolocation coordinates of a new property's address */
export const createPropertyGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */ latitude: z.number(),
  /** The longitude coordinate of the coordinate pair */ longitude: z.number()
})
/** Request body used to set the address of a new property */
export const createPropertyAddressModel = z.object({
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  countryId: z.string().optional(),
  /** Request body used to set the geolocation coordinates of a new property's address */
  geolocation: z
    .object({
      /** The latitude coordinate of the coordinate pair */
      latitude: z.number(),
      /** The longitude coordinate of the coordinate pair */
      longitude: z.number()
    })
    .optional()
})
/** Request body used to set the EPC statistic of a new property */
export const createPropertyEpcModel = z.object({
  /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
  exempt: z.boolean().optional(),
  /** The current energy efficiency rating */ eer: z.number().int().optional(),
  /** The potential energy efficiency rating */
  eerPotential: z.number().int().optional(),
  /** The current environmental impact rating */
  eir: z.number().int().optional(),
  /** The potential environmental impact rating */
  eirPotential: z.number().int().optional(),
  /** The URL to access the full EPC document */
  fullDocumentUrl: z.string().optional(),
  /** The URL to access the first page of the EPC document */
  firstPageDocumentUrl: z.string().optional()
})
/** Request body to set the external land area of a new property */
export const createPropertyExternalAreaModel = z.object({
  /** The unit of area (acres/hectares) */ type: z.string().optional(),
  /** The minimum area bound */ min: z.number().optional(),
  /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
  max: z.number().optional()
})
/** Request body to set the internal dimensions of a new property */
export const createPropertyInternalAreaModel = z.object({
  /** The unit of area (squareFeet/squareMetres) */ type: z.string().optional(),
  /** The minimum area bound */ min: z.number().optional(),
  /** The maximum area bound */ max: z.number().optional()
})
/** Request body used to set details specific to rural properties */
export const createPropertyRuralModel = z.object({
  /** Details of the buildings associated with the property. */
  buildingsDescription: z.string().optional(),
  /** Details of the land associated with the property. */
  landDescription: z.string().optional()
})
/** Request body used to set the tenure of a new property */
export const createPropertyTenureModel = z.object({
  /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
  type: z.string().optional(),
  /** The tenure expiration date */ expiry: z.string().optional()
})
/** Request body used to set the commission fee for a property */
export const createPropertyCommissionFeeModel = z.object({
  /** The commission letting fee type (percentage/fixed) */
  type: z.string().optional(),
  /** The commission letting fee amount */ amount: z.number().optional()
})
/** Details relating to the shared ownership of the property */
export const createPropertySharedOwnershipModel = z.object({
  /** The percentage of the shared ownership property being sold by the vendor */
  sharedPercentage: z.number().optional(),
  /** The rent payable on the remainder of the shared ownership property */
  rent: z.number().optional(),
  /** The frequency at which the shared ownership rent should be paid */
  rentFrequency: z.string().optional()
})
/** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
export const createPropertySellingModel = z.object({
  /** The date that the property was marked as for sale */
  instructed: z.string().optional(),
  /** The marketing price of the property */ price: z.number().int().optional(),
  /** The fee charged by the agent to reserve a property (typically a new build) */
  reservationFee: z.number().int().optional(),
  /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
  qualifier: z.string().optional(),
  /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  status: z.string().optional(),
  /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
  disposal: z.string().optional(),
  /** The date the property sale was completed */
  completed: z.string().optional(),
  /** The date the property was exchanged */ exchanged: z.string().optional(),
  /** The date the property account was paid */
  accountPaid: z.string().optional(),
  /** Request body used to set the tenure of a new property */
  tenure: z
    .object({
      /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
      type: z.string().optional(),
      /** The tenure expiration date */ expiry: z.string().optional()
    })
    .optional(),
  /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
  sellingAgency: z.string().optional(),
  /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
  agencyId: z.string().optional(),
  /** The date on which the agreement between the vendor and agent expires */
  agreementExpiry: z.string().optional(),
  /** Request body used to set the commission fee for a property */
  fee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The commission letting fee amount */ amount: z.number().optional()
    })
    .optional(),
  /** The agent's recommended asking price */
  recommendedPrice: z.number().int().optional(),
  /** The agent's valuation price */
  valuationPrice: z.number().int().optional(),
  /** The property's decorative condition (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).optional(),
  /** Details relating to the shared ownership of the property */
  sharedOwnership: z
    .object({
      /** The percentage of the shared ownership property being sold by the vendor */
      sharedPercentage: z.number().optional(),
      /** The rent payable on the remainder of the shared ownership property */
      rent: z.number().optional(),
      /** The frequency at which the shared ownership rent should be paid */
      rentFrequency: z.string().optional()
    })
    .optional()
})
/** Representation of property details specific to utilities */
export const createUtilityModel = z.object({
  /** A flag denoting whether or not the property has gas connected */
  hasGas: z.boolean().optional(),
  /** The unique identifier of the company supplying the gas to the property */
  gasCompanyId: z.string().optional(),
  /** The gas meter point number */ gasMeterPoint: z.string().optional(),
  /** The unique identifier of the company supplying the electricity to the property */
  electricityCompanyId: z.string().optional(),
  /** The electricity meter point number */
  electricityMeterPoint: z.string().optional(),
  /** The unique identifier of the company supplying the water to the property */
  waterCompanyId: z.string().optional(),
  /** The water meter point number */ waterMeterPoint: z.string().optional(),
  /** The unique identifier of the company supplying the telephone to the property */
  telephoneCompanyId: z.string().optional(),
  /** The unique identifier of the company supplying the internet to the property */
  internetCompanyId: z.string().optional(),
  /** The unique identifier of the company supplying the cable tv to the property */
  cableTvCompanyId: z.string().optional()
})
/** Representation of a property details related to deposit */
export const createPropertyLettingsDepositModel = z.object({
  /** The type of deposit (weeks/months/fixed) */ type: z.string().optional(),
  /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
  amount: z.number().optional()
})
/** Request body used to set details specific to lettings marketing on a new property */
export const createPropertyLettingModel = z.object({
  /** The date the property was marked as to let */
  instructed: z.string().optional(),
  /** The date the property is available from */
  availableFrom: z.string().optional(),
  /** The date the property is available to */
  availableTo: z.string().optional(),
  /** The date the letting agreement between the landlord and agent was signed */
  agreementSigned: z.string().optional(),
  /** The rent being charged for the property */ rent: z.number().optional(),
  /** The frequency at which rent will be collected (weekly/monthly/annually) */
  rentFrequency: z.string().optional(),
  /** Details of any bills that are included in the rent */
  rentIncludes: z.string().optional(),
  /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
  furnishing: z.array(z.string()).optional(),
  /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string().optional(),
  /** The acceptable letting terms (short/long/any) */
  term: z.string().optional(),
  /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
  status: z.string().optional(),
  /** The unique identifier of the landlord letting the property */
  landlordId: z.string().optional(),
  /** A note to accompany any works orders created for the property */
  worksOrderNote: z.string().optional(),
  /** Sets the minimum number of months the property can be let out for */
  minimumTerm: z.number().int().optional(),
  /** Request body used to set the commission fee for a property */
  managementFee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The commission letting fee amount */ amount: z.number().optional()
    })
    .optional(),
  /** Request body used to set the commission fee for a property */
  lettingFee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The commission letting fee amount */ amount: z.number().optional()
    })
    .optional(),
  /** The rent qualifier (rentOnApplication/askingRent) */
  qualifier: z.string().optional(),
  /** Representation of property details specific to utilities */
  utilities: z
    .object({
      /** A flag denoting whether or not the property has gas connected */
      hasGas: z.boolean().optional(),
      /** The unique identifier of the company supplying the gas to the property */
      gasCompanyId: z.string().optional(),
      /** The gas meter point number */ gasMeterPoint: z.string().optional(),
      /** The unique identifier of the company supplying the electricity to the property */
      electricityCompanyId: z.string().optional(),
      /** The electricity meter point number */
      electricityMeterPoint: z.string().optional(),
      /** The unique identifier of the company supplying the water to the property */
      waterCompanyId: z.string().optional(),
      /** The water meter point number */
      waterMeterPoint: z.string().optional(),
      /** The unique identifier of the company supplying the telephone to the property */
      telephoneCompanyId: z.string().optional(),
      /** The unique identifier of the company supplying the internet to the property */
      internetCompanyId: z.string().optional(),
      /** The unique identifier of the company supplying the cable tv to the property */
      cableTvCompanyId: z.string().optional()
    })
    .optional(),
  /** Representation of a property details related to deposit */
  deposit: z
    .object({
      /** The type of deposit (weeks/months/fixed) */
      type: z.string().optional(),
      /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
      amount: z.number().optional()
    })
    .optional()
})
/** Request body used to set the energy performance rating information for properties in Ireland */
export const createIrelandPropertyBERModel = z.object({
  /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
  exempt: z.boolean().optional(),
  /** The BER rating of the property */ rating: z.string().optional(),
  /** The BER certificate reference number */ refNumber: z.string().optional(),
  /** The energy performance indicator for the property */
  epi: z.string().optional()
})
/** Request body used to set the data specific to properties in Ireland */
export const createIrelandPropertyModel = z.object({
  /** Request body used to set the energy performance rating information for properties in Ireland */
  buildingEnergyRating: z
    .object({
      /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
      exempt: z.boolean().optional(),
      /** The BER rating of the property */ rating: z.string().optional(),
      /** The BER certificate reference number */
      refNumber: z.string().optional(),
      /** The energy performance indicator for the property */
      epi: z.string().optional()
    })
    .optional()
})
/** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const createPropertyRegionalModel = z.object({
  /** Request body used to set the data specific to properties in Ireland */
  irl: z
    .object({
      /** Request body used to set the energy performance rating information for properties in Ireland */
      buildingEnergyRating: z
        .object({
          /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
          exempt: z.boolean().optional(),
          /** The BER rating of the property */ rating: z.string().optional(),
          /** The BER certificate reference number */
          refNumber: z.string().optional(),
          /** The energy performance indicator for the property */
          epi: z.string().optional()
        })
        .optional()
    })
    .optional()
})
/** Request body to create a room in the Rooms collection of a new property */
export const createPropertyRoomModel = z.object({
  /** The name of the room */ name: z.string().optional(),
  /** Details about the dimensions of the room */
  dimensions: z.string().optional(),
  /** Short description of the room */ description: z.string().optional()
})
/** Request body used to create a new property */
export const createPropertyModel = z.object({
  /** The date the owner of the property was last called */
  lastCall: z.string().optional(),
  /** The date the owner of the property is next due to be called */
  nextCall: z.string().optional(),
  /** The marketing mode of the property (selling/letting/sellingAndLetting) */
  marketingMode: z.string(),
  /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
  departmentId: z.string(),
  /** The strapline description containing a short summary about the property */
  strapline: z.string().optional(),
  /** The brief description of the property */
  description: z.string().optional(),
  /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
  summary: z.string().optional(),
  /** An optional alternative identifier specified for this property */
  alternateId: z.string().optional(),
  /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  specialFeatures: z.array(z.string()).optional(),
  /** Request body used to set the address of a new property */
  address: z.object({
    /** The building name */ buildingName: z.string().optional(),
    /** The building number */ buildingNumber: z.string().optional(),
    /** The first line of the address */ line1: z.string(),
    /** The second line of the address */ line2: z.string().optional(),
    /** The third line of the address */ line3: z.string().optional(),
    /** The fourth line of the address */ line4: z.string().optional(),
    /** The postcode */ postcode: z.string().optional(),
    /** The ISO-3166 country code that the address resides within */
    countryId: z.string().optional(),
    /** Request body used to set the geolocation coordinates of a new property's address */
    geolocation: z
      .object({
        /** The latitude coordinate of the coordinate pair */
        latitude: z.number(),
        /** The longitude coordinate of the coordinate pair */
        longitude: z.number()
      })
      .optional()
  }),
  /** The total number of bedrooms in the property */
  bedrooms: z.number().int().optional(),
  /** The maximum number of bedrooms in the property */
  bedroomsMax: z.number().int().optional(),
  /** The number of units offered on the market. This is typically used when marketing development sites. */
  numberOfUnits: z.number().int().optional(),
  /** The total number of reception rooms in the property */
  receptions: z.number().int().optional(),
  /** The maximum number of reception rooms in the property */
  receptionsMax: z.number().int().optional(),
  /** The total number of bathrooms in the property */
  bathrooms: z.number().int().optional(),
  /** The maximum number of bathrooms in the property */
  bathroomsMax: z.number().int().optional(),
  /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  parkingSpaces: z.number().int().optional(),
  /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
  councilTax: z.string().optional(),
  /** A flag denoting whether or not this property can be advertised on the internet */
  internetAdvertising: z.boolean().optional(),
  /** The arrangements regarding viewing the property */
  viewingArrangements: z.string().optional(),
  /** The url of a video associated with this property, such as a virtual tour */
  videoUrl: z.string().optional(),
  /** The caption for the video url associated with this property */
  videoCaption: z.string().optional(),
  /** The url of a second video associated with this property, such as a virtual tour */
  video2Url: z.string().optional(),
  /** The caption for the second video url associated with this property */
  video2Caption: z.string().optional(),
  /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
  notes: z.string().optional(),
  /** The long description of the property */
  longDescription: z.string().optional(),
  /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  floorLevel: z.number().int().optional(),
  /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  internalFloors: z.number().int().optional(),
  /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  totalFloors: z.number().int().optional(),
  /** The status of the advertising board sited outside or near to the property */
  boardStatus: z.string().optional(),
  /** Any notes relevant to the advertising board sited outside or near to the property */
  boardNotes: z.string().optional(),
  /** The date the advertising board was last updated (or should be updated when the date is in the future) */
  boardUpdated: z.string().optional(),
  /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
  valuation: z.string().optional(),
  /** Request body used to set the EPC statistic of a new property */
  epc: z
    .object({
      /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
      exempt: z.boolean().optional(),
      /** The current energy efficiency rating */
      eer: z.number().int().optional(),
      /** The potential energy efficiency rating */
      eerPotential: z.number().int().optional(),
      /** The current environmental impact rating */
      eir: z.number().int().optional(),
      /** The potential environmental impact rating */
      eirPotential: z.number().int().optional(),
      /** The URL to access the full EPC document */
      fullDocumentUrl: z.string().optional(),
      /** The URL to access the first page of the EPC document */
      firstPageDocumentUrl: z.string().optional()
    })
    .optional(),
  /** Request body to set the external land area of a new property */
  externalArea: z
    .object({
      /** The unit of area (acres/hectares) */ type: z.string().optional(),
      /** The minimum area bound */ min: z.number().optional(),
      /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
      max: z.number().optional()
    })
    .optional(),
  /** Request body to set the internal dimensions of a new property */
  internalArea: z
    .object({
      /** The unit of area (squareFeet/squareMetres) */
      type: z.string().optional(),
      /** The minimum area bound */ min: z.number().optional(),
      /** The maximum area bound */ max: z.number().optional()
    })
    .optional(),
  /** Request body used to set details specific to rural properties */
  rural: z
    .object({
      /** Details of the buildings associated with the property. */
      buildingsDescription: z.string().optional(),
      /** Details of the land associated with the property. */
      landDescription: z.string().optional()
    })
    .optional(),
  /** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
  selling: z
    .object({
      /** The date that the property was marked as for sale */
      instructed: z.string().optional(),
      /** The marketing price of the property */
      price: z.number().int().optional(),
      /** The fee charged by the agent to reserve a property (typically a new build) */
      reservationFee: z.number().int().optional(),
      /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
      qualifier: z.string().optional(),
      /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
      status: z.string().optional(),
      /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
      disposal: z.string().optional(),
      /** The date the property sale was completed */
      completed: z.string().optional(),
      /** The date the property was exchanged */
      exchanged: z.string().optional(),
      /** The date the property account was paid */
      accountPaid: z.string().optional(),
      /** Request body used to set the tenure of a new property */
      tenure: z
        .object({
          /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
          type: z.string().optional(),
          /** The tenure expiration date */ expiry: z.string().optional()
        })
        .optional(),
      /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
      sellingAgency: z.string().optional(),
      /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
      agencyId: z.string().optional(),
      /** The date on which the agreement between the vendor and agent expires */
      agreementExpiry: z.string().optional(),
      /** Request body used to set the commission fee for a property */
      fee: z
        .object({
          /** The commission letting fee type (percentage/fixed) */
          type: z.string().optional(),
          /** The commission letting fee amount */ amount: z.number().optional()
        })
        .optional(),
      /** The agent's recommended asking price */
      recommendedPrice: z.number().int().optional(),
      /** The agent's valuation price */
      valuationPrice: z.number().int().optional(),
      /** The property's decorative condition (unmodernised/fair/good/veryGood) */
      decoration: z.array(z.string()).optional(),
      /** Details relating to the shared ownership of the property */
      sharedOwnership: z
        .object({
          /** The percentage of the shared ownership property being sold by the vendor */
          sharedPercentage: z.number().optional(),
          /** The rent payable on the remainder of the shared ownership property */
          rent: z.number().optional(),
          /** The frequency at which the shared ownership rent should be paid */
          rentFrequency: z.string().optional()
        })
        .optional()
    })
    .optional(),
  /** Request body used to set details specific to lettings marketing on a new property */
  letting: z
    .object({
      /** The date the property was marked as to let */
      instructed: z.string().optional(),
      /** The date the property is available from */
      availableFrom: z.string().optional(),
      /** The date the property is available to */
      availableTo: z.string().optional(),
      /** The date the letting agreement between the landlord and agent was signed */
      agreementSigned: z.string().optional(),
      /** The rent being charged for the property */
      rent: z.number().optional(),
      /** The frequency at which rent will be collected (weekly/monthly/annually) */
      rentFrequency: z.string().optional(),
      /** Details of any bills that are included in the rent */
      rentIncludes: z.string().optional(),
      /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
      furnishing: z.array(z.string()).optional(),
      /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
      agentRole: z.string().optional(),
      /** The acceptable letting terms (short/long/any) */
      term: z.string().optional(),
      /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
      status: z.string().optional(),
      /** The unique identifier of the landlord letting the property */
      landlordId: z.string().optional(),
      /** A note to accompany any works orders created for the property */
      worksOrderNote: z.string().optional(),
      /** Sets the minimum number of months the property can be let out for */
      minimumTerm: z.number().int().optional(),
      /** Request body used to set the commission fee for a property */
      managementFee: z
        .object({
          /** The commission letting fee type (percentage/fixed) */
          type: z.string().optional(),
          /** The commission letting fee amount */ amount: z.number().optional()
        })
        .optional(),
      /** Request body used to set the commission fee for a property */
      lettingFee: z
        .object({
          /** The commission letting fee type (percentage/fixed) */
          type: z.string().optional(),
          /** The commission letting fee amount */ amount: z.number().optional()
        })
        .optional(),
      /** The rent qualifier (rentOnApplication/askingRent) */
      qualifier: z.string().optional(),
      /** Representation of property details specific to utilities */
      utilities: z
        .object({
          /** A flag denoting whether or not the property has gas connected */
          hasGas: z.boolean().optional(),
          /** The unique identifier of the company supplying the gas to the property */
          gasCompanyId: z.string().optional(),
          /** The gas meter point number */
          gasMeterPoint: z.string().optional(),
          /** The unique identifier of the company supplying the electricity to the property */
          electricityCompanyId: z.string().optional(),
          /** The electricity meter point number */
          electricityMeterPoint: z.string().optional(),
          /** The unique identifier of the company supplying the water to the property */
          waterCompanyId: z.string().optional(),
          /** The water meter point number */
          waterMeterPoint: z.string().optional(),
          /** The unique identifier of the company supplying the telephone to the property */
          telephoneCompanyId: z.string().optional(),
          /** The unique identifier of the company supplying the internet to the property */
          internetCompanyId: z.string().optional(),
          /** The unique identifier of the company supplying the cable tv to the property */
          cableTvCompanyId: z.string().optional()
        })
        .optional(),
      /** Representation of a property details related to deposit */
      deposit: z
        .object({
          /** The type of deposit (weeks/months/fixed) */
          type: z.string().optional(),
          /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
          amount: z.number().optional()
        })
        .optional()
    })
    .optional(),
  /** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  regional: z
    .object({
      /** Request body used to set the data specific to properties in Ireland */
      irl: z
        .object({
          /** Request body used to set the energy performance rating information for properties in Ireland */
          buildingEnergyRating: z
            .object({
              /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
              exempt: z.boolean().optional(),
              /** The BER rating of the property */
              rating: z.string().optional(),
              /** The BER certificate reference number */
              refNumber: z.string().optional(),
              /** The energy performance indicator for the property */
              epi: z.string().optional()
            })
            .optional()
        })
        .optional()
    })
    .optional(),
  /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  type: z.array(z.string()).optional(),
  /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  style: z.array(z.string()).optional(),
  /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  situation: z.array(z.string()).optional(),
  /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  parking: z.array(z.string()).optional(),
  /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  age: z.array(z.string()).optional(),
  /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  locality: z.array(z.string()).optional(),
  /** Details of each room in the property */
  rooms: z
    .array(
      /** Request body to create a room in the Rooms collection of a new property */
      z.object({
        /** The name of the room */ name: z.string().optional(),
        /** Details about the dimensions of the room */
        dimensions: z.string().optional(),
        /** Short description of the room */ description: z.string().optional()
      })
    )
    .optional(),
  /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
  roomDetailsApproved: z.boolean().optional(),
  /** The unique identifier of the negotiator managing the property */
  negotiatorId: z.string(),
  /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()),
  /** The unique identifier of the area that the property resides in */
  areaId: z.string().optional(),
  /** The url to the property on an external website */
  url: z.string().optional(),
  /** The caption to accompany the url to the property on an external website */
  urlCaption: z.string().optional(),
  /** Any ground rent payment that applies to the property */
  groundRent: z.number().optional(),
  /** Comments regarding the ground rent of the property */
  groundRentComment: z.string().optional(),
  /** The date when the ground rent payable on the property should be reviewed */
  groundRentReviewDate: z.string().optional(),
  /** The annual percentage increase of the ground rent after being reviewed */
  groundRentIncrease: z.number().optional(),
  /** Any service charge payment that applies to the property */
  serviceCharge: z.number().optional(),
  /** Comments regarding the service charge of the property */
  serviceChargeComment: z.string().optional(),
  /** App specific metadata to set against the property */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body used to update the geolocation coordinates of an existing property's address */
export const updatePropertyGeolocationModel = z.object({
  /** The latitude coordinate of the coordinate pair */
  latitude: z.number().optional(),
  /** The longitude coordinate of the coordinate pair */
  longitude: z.number().optional()
})
/** Request body used to update the address of an existing property */
export const updatePropertyAddressModel = z.object({
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  countryId: z.string().optional(),
  /** Request body used to update the geolocation coordinates of an existing property's address */
  geolocation: z
    .object({
      /** The latitude coordinate of the coordinate pair */
      latitude: z.number().optional(),
      /** The longitude coordinate of the coordinate pair */
      longitude: z.number().optional()
    })
    .optional()
})
/** Request body used to update the EPC statistics of an existing property */
export const updatePropertyEpcModel = z.object({
  /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
  exempt: z.boolean().optional(),
  /** The current energy efficiency rating */ eer: z.number().int().optional(),
  /** The potential energy efficiency rating */
  eerPotential: z.number().int().optional(),
  /** The current environmental impact rating */
  eir: z.number().int().optional(),
  /** The potential environmental impact rating */
  eirPotential: z.number().int().optional(),
  /** The URL to access the full EPC document */
  fullDocumentUrl: z.string().optional(),
  /** The URL to access the first page of the EPC document */
  firstPageDocumentUrl: z.string().optional()
})
/** Request body to update the external land area of an existing property */
export const updatePropertyExternalAreaModel = z.object({
  /** The unit of area (acres/hectares) */ type: z.string().optional(),
  /** The minimum area bound */ min: z.number().optional(),
  /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
  max: z.number().optional()
})
/** Request body to update the internal dimensions of an existing property */
export const updatePropertyInternalAreaModel = z.object({
  /** The unit of area (squareFeet/squareMetres) */ type: z.string().optional(),
  /** The minimum area bound */ min: z.number().optional(),
  /** The maximum area bound */ max: z.number().optional()
})
/** Request body used to set the tenure of an existing property */
export const updatePropertyTenureModel = z.object({
  /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
  type: z.string().optional(),
  /** The tenure expiration date */ expiry: z.string().optional()
})
/** Request body used to update the commission fee for a property */
export const updatePropertyCommissionFeeModel = z.object({
  /** The commission letting fee type (percentage/fixed) */
  type: z.string().optional(),
  /** The commission letting fee amount */ amount: z.number().optional()
})
/** Details relating to the shared ownership of the property */
export const updatePropertySharedOwnershipModel = z.object({
  /** The percentage of the shared ownership property being sold by the vendor */
  sharedPercentage: z.number().optional(),
  /** The rent payable on the remainder of the shared ownership property */
  rent: z.number().optional(),
  /** The frequency at which the shared ownership rent should be paid */
  rentFrequency: z.string().optional()
})
/** Request body used to update details specific to sales marketing on an existing property */
export const updatePropertySellingModel = z.object({
  /** The date that the property was marked as for sale */
  instructed: z.string().optional(),
  /** The marketing price of the property */ price: z.number().int().optional(),
  /** The fee charged by the agent to reserve a property (typically a new build) */
  reservationFee: z.number().int().optional(),
  /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
  qualifier: z.string().optional(),
  /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
  status: z.string().optional(),
  /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
  disposal: z.string().optional(),
  /** The date the property sale was completed */
  completed: z.string().optional(),
  /** The date the property was exchanged */ exchanged: z.string().optional(),
  /** The date the property account was paid */
  accountPaid: z.string().optional(),
  /** Request body used to set the tenure of an existing property */
  tenure: z
    .object({
      /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
      type: z.string().optional(),
      /** The tenure expiration date */ expiry: z.string().optional()
    })
    .optional(),
  /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
  sellingAgency: z.string().optional(),
  /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
  agencyId: z.string().optional(),
  /** The date on which the agreement between the vendor and agent expires */
  agreementExpiry: z.string().optional(),
  /** Request body used to update the commission fee for a property */
  fee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The commission letting fee amount */ amount: z.number().optional()
    })
    .optional(),
  /** The agent's recommended asking price */
  recommendedPrice: z.number().int().optional(),
  /** The agent's valuation price */
  valuationPrice: z.number().int().optional(),
  /** The unique identifier of the document used for the sales brochure */
  brochureId: z.string().optional(),
  /** The property's decorative condition (unmodernised/fair/good/veryGood) */
  decoration: z.array(z.string()).optional(),
  /** Details relating to the shared ownership of the property */
  sharedOwnership: z
    .object({
      /** The percentage of the shared ownership property being sold by the vendor */
      sharedPercentage: z.number().optional(),
      /** The rent payable on the remainder of the shared ownership property */
      rent: z.number().optional(),
      /** The frequency at which the shared ownership rent should be paid */
      rentFrequency: z.string().optional()
    })
    .optional()
})
/** Representation of property details specific to utilities */
export const updateUtilityModel = z.object({
  /** A flag denoting whether or not the property has gas connected */
  hasGas: z.boolean().optional(),
  /** The unique identifier of the company supplying the gas to the property */
  gasCompanyId: z.string().optional(),
  /** The gas meter point number */ gasMeterPoint: z.string().optional(),
  /** The unique identifier of the company supplying the electricity to the property */
  electricityCompanyId: z.string().optional(),
  /** The electricity meter point number */
  electricityMeterPoint: z.string().optional(),
  /** The unique identifier of the company supplying the water to the property */
  waterCompanyId: z.string().optional(),
  /** The water meter point number */ waterMeterPoint: z.string().optional(),
  /** The unique identifier of the company supplying the telephone to the property */
  telephoneCompanyId: z.string().optional(),
  /** The unique identifier of the company supplying the internet to the property */
  internetCompanyId: z.string().optional(),
  /** The unique identifier of the company supplying the cable tv to the property */
  cableTvCompanyId: z.string().optional()
})
/** Representation of a property details related to deposit */
export const updatePropertyLettingsDepositModel = z.object({
  /** The type of deposit (weeks/months/fixed) */ type: z.string().optional(),
  /** The deposit amount. This can be the number of weeks or months rent or a monetry amount based on the `type` */
  amount: z.number().optional()
})
/** Request body used to update details specific to rent insurance associated with a lettings property */
export const updatePropertyLettingRentInsuranceModel = z.object({
  /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
  status: z.string().optional(),
  /** The reference number of the insurance policy when rent protection insurance has been taken out */
  referenceNumber: z.string().optional(),
  /** The insurance policy start date */ start: z.string().optional(),
  /** The insurance policy end date */ end: z.string().optional(),
  /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
  cancelledReasonId: z.string().optional(),
  /** A textual comment or note entered by the agent when an insurance policy was cancelled */
  cancelledComment: z.string().optional(),
  /** Flag indicating whether or not the insurance policy should auto renew */
  autoRenew: z.boolean().optional()
})
/** Representation of property details specific to property licence application */
export const updateLicenceApplicationModel = z.object({
  /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
  status: z.string().optional(),
  /** The licence application reference number */
  referenceNumber: z.string().optional(),
  /** The date the licence was applied for */ date: z.string().optional(),
  /** The date the licence application was granted */
  granted: z.string().optional(),
  /** The date the licence will expire */ expiry: z.string().optional()
})
/** Representation of property details specific to property Licencing */
export const updatePropertyLettingLicencingModel = z.object({
  /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
  licenceRequired: z.boolean().optional(),
  /** The type of licence (additional/mandatory/none/selective) */
  licenceType: z.string().optional(),
  /** The number of households that the licence permits in the property */
  households: z.number().int().optional(),
  /** The number of occupants that the licence permits in the property */
  occupants: z.number().int().optional(),
  /** A flag determining whether or not the property is above commercial premises */
  aboveCommercialPremises: z.boolean().optional(),
  /** Representation of property details specific to property licence application */
  application: z
    .object({
      /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
      status: z.string().optional(),
      /** The licence application reference number */
      referenceNumber: z.string().optional(),
      /** The date the licence was applied for */ date: z.string().optional(),
      /** The date the licence application was granted */
      granted: z.string().optional(),
      /** The date the licence will expire */ expiry: z.string().optional()
    })
    .optional()
})
/** Request body used to update details specific to lettings marketing on an existing property */
export const updatePropertyLettingModel = z.object({
  /** The date the property was marked as to let */
  instructed: z.string().optional(),
  /** The date the property is next available from */
  availableFrom: z.string().optional(),
  /** The date the property is available to */
  availableTo: z.string().optional(),
  /** The date the letting agreement between the landlord and agent was signed */
  agreementSigned: z.string().optional(),
  /** The rent being charged for the property */ rent: z.number().optional(),
  /** The frequency at which rent will be collected (weekly/monthly/annually) */
  rentFrequency: z.string().optional(),
  /** Details of any bills that are included in the rent */
  rentIncludes: z.string().optional(),
  /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
  furnishing: z.array(z.string()).optional(),
  /** The acceptable letting terms (short/long/any) */
  term: z.string().optional(),
  /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
  status: z.string().optional(),
  /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string().optional(),
  /** The unique identifier of the landlord letting the property */
  landlordId: z.string().optional(),
  /** The unique identifier of the document used for the lettings brochure */
  brochureId: z.string().optional(),
  /** A note to accompany any works orders created for the property */
  worksOrderNote: z.string().optional(),
  /** Sets the minimum number of months the property can be let out for */
  minimumTerm: z.number().int().optional(),
  /** Request body used to update the commission fee for a property */
  managementFee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The commission letting fee amount */ amount: z.number().optional()
    })
    .optional(),
  /** Request body used to update the commission fee for a property */
  lettingFee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The commission letting fee amount */ amount: z.number().optional()
    })
    .optional(),
  /** The rent qualifier (rentOnApplication/askingRent) */
  qualifier: z.string().optional(),
  /** Representation of property details specific to utilities */
  utilities: z
    .object({
      /** A flag denoting whether or not the property has gas connected */
      hasGas: z.boolean().optional(),
      /** The unique identifier of the company supplying the gas to the property */
      gasCompanyId: z.string().optional(),
      /** The gas meter point number */ gasMeterPoint: z.string().optional(),
      /** The unique identifier of the company supplying the electricity to the property */
      electricityCompanyId: z.string().optional(),
      /** The electricity meter point number */
      electricityMeterPoint: z.string().optional(),
      /** The unique identifier of the company supplying the water to the property */
      waterCompanyId: z.string().optional(),
      /** The water meter point number */
      waterMeterPoint: z.string().optional(),
      /** The unique identifier of the company supplying the telephone to the property */
      telephoneCompanyId: z.string().optional(),
      /** The unique identifier of the company supplying the internet to the property */
      internetCompanyId: z.string().optional(),
      /** The unique identifier of the company supplying the cable tv to the property */
      cableTvCompanyId: z.string().optional()
    })
    .optional(),
  /** Representation of a property details related to deposit */
  deposit: z
    .object({
      /** The type of deposit (weeks/months/fixed) */
      type: z.string().optional(),
      /** The deposit amount. This can be the number of weeks or months rent or a monetry amount based on the `type` */
      amount: z.number().optional()
    })
    .optional(),
  /** Request body used to update details specific to rent insurance associated with a lettings property */
  rentInsurance: z
    .object({
      /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
      status: z.string().optional(),
      /** The reference number of the insurance policy when rent protection insurance has been taken out */
      referenceNumber: z.string().optional(),
      /** The insurance policy start date */ start: z.string().optional(),
      /** The insurance policy end date */ end: z.string().optional(),
      /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
      cancelledReasonId: z.string().optional(),
      /** A textual comment or note entered by the agent when an insurance policy was cancelled */
      cancelledComment: z.string().optional(),
      /** Flag indicating whether or not the insurance policy should auto renew */
      autoRenew: z.boolean().optional()
    })
    .optional(),
  /** Representation of property details specific to property Licencing */
  licencing: z
    .object({
      /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
      licenceRequired: z.boolean().optional(),
      /** The type of licence (additional/mandatory/none/selective) */
      licenceType: z.string().optional(),
      /** The number of households that the licence permits in the property */
      households: z.number().int().optional(),
      /** The number of occupants that the licence permits in the property */
      occupants: z.number().int().optional(),
      /** A flag determining whether or not the property is above commercial premises */
      aboveCommercialPremises: z.boolean().optional(),
      /** Representation of property details specific to property licence application */
      application: z
        .object({
          /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
          status: z.string().optional(),
          /** The licence application reference number */
          referenceNumber: z.string().optional(),
          /** The date the licence was applied for */
          date: z.string().optional(),
          /** The date the licence application was granted */
          granted: z.string().optional(),
          /** The date the licence will expire */ expiry: z.string().optional()
        })
        .optional()
    })
    .optional()
})
/** Request body used to set the energy performance rating information for properties in Ireland */
export const updateIrelandPropertyBERModel = z.object({
  /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
  exempt: z.boolean().optional(),
  /** The BER rating of the property */ rating: z.string().optional(),
  /** The BER certificate reference number */ refNumber: z.string().optional(),
  /** The energy performance indicator for the property */
  epi: z.string().optional()
})
/** Request body used to set the data specific to properties in Ireland */
export const updateIrelandPropertyModel = z.object({
  /** Request body used to set the energy performance rating information for properties in Ireland */
  buildingEnergyRating: z
    .object({
      /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
      exempt: z.boolean().optional(),
      /** The BER rating of the property */ rating: z.string().optional(),
      /** The BER certificate reference number */
      refNumber: z.string().optional(),
      /** The energy performance indicator for the property */
      epi: z.string().optional()
    })
    .optional()
})
/** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
export const updatePropertyRegionalModel = z.object({
  /** Request body used to set the data specific to properties in Ireland */
  irl: z
    .object({
      /** Request body used to set the energy performance rating information for properties in Ireland */
      buildingEnergyRating: z
        .object({
          /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
          exempt: z.boolean().optional(),
          /** The BER rating of the property */ rating: z.string().optional(),
          /** The BER certificate reference number */
          refNumber: z.string().optional(),
          /** The energy performance indicator for the property */
          epi: z.string().optional()
        })
        .optional()
    })
    .optional()
})
/** Request body used to set details specific to rural properties. */
export const updatePropertyRuralModel = z.object({
  /** Details of the building associated with the property. */
  buildingsDescription: z.string().optional(),
  /** Details of the land associated with the property. */
  landDescription: z.string().optional()
})
/** Request body used to update an existing property */
export const updatePropertyModel = z.object({
  /** The date the owner of the property was last called */
  lastCall: z.string().optional(),
  /** The date the owner of the property is next due to be called */
  nextCall: z.string().optional(),
  /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
  roomDetailsApproved: z.boolean().optional(),
  /** The strapline description containing a short summary about the property */
  strapline: z.string().optional(),
  /** The brief description of the property */
  description: z.string().optional(),
  /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
  summary: z.string().optional(),
  /** An optional alternative identifier specified for this property */
  alternateId: z.string().optional(),
  /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  specialFeatures: z.array(z.string()).optional(),
  /** Request body used to update the address of an existing property */
  address: z
    .object({
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides within */
      countryId: z.string().optional(),
      /** Request body used to update the geolocation coordinates of an existing property's address */
      geolocation: z
        .object({
          /** The latitude coordinate of the coordinate pair */
          latitude: z.number().optional(),
          /** The longitude coordinate of the coordinate pair */
          longitude: z.number().optional()
        })
        .optional()
    })
    .optional(),
  /** The total number of bedrooms in the property */
  bedrooms: z.number().int().optional(),
  /** The maximum number of bedrooms in the property */
  bedroomsMax: z.number().int().optional(),
  /** The number of units offered on the market. This is typically used when marketing development sites. */
  numberOfUnits: z.number().int().optional(),
  /** The total number of reception rooms in the property */
  receptions: z.number().int().optional(),
  /** The maximum number of reception rooms in the property */
  receptionsMax: z.number().int().optional(),
  /** The total number of bathrooms in the property */
  bathrooms: z.number().int().optional(),
  /** The maximum number of bathrooms in the property */
  bathroomsMax: z.number().int().optional(),
  /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  parkingSpaces: z.number().int().optional(),
  /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
  councilTax: z.string().optional(),
  /** A flag denoting whether or not this property can be advertised on the internet */
  internetAdvertising: z.boolean().optional(),
  /** The arrangements regarding viewing the property */
  viewingArrangements: z.string().optional(),
  /** The url of a video associated with this property, such as a virtual tour */
  videoUrl: z.string().optional(),
  /** The caption for the video url associated with this property */
  videoCaption: z.string().optional(),
  /** The url of a second video associated with this property, such as a virtual tour */
  video2Url: z.string().optional(),
  /** The caption for the second video url associated with this property */
  video2Caption: z.string().optional(),
  /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
  notes: z.string().optional(),
  /** The long description of the property */
  longDescription: z.string().optional(),
  /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  floorLevel: z.number().int().optional(),
  /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  internalFloors: z.number().int().optional(),
  /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
  totalFloors: z.number().int().optional(),
  /** The status of the advertising board sited outside or near to the property */
  boardStatus: z.string().optional(),
  /** Any notes relevant to the advertising board sited outside or near to the property */
  boardNotes: z.string().optional(),
  /** The date the advertising board was last updated (or should be updated when the date is in the future) */
  boardUpdated: z.string().optional(),
  /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
  valuation: z.string().optional(),
  /** Request body used to update the EPC statistics of an existing property */
  epc: z
    .object({
      /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
      exempt: z.boolean().optional(),
      /** The current energy efficiency rating */
      eer: z.number().int().optional(),
      /** The potential energy efficiency rating */
      eerPotential: z.number().int().optional(),
      /** The current environmental impact rating */
      eir: z.number().int().optional(),
      /** The potential environmental impact rating */
      eirPotential: z.number().int().optional(),
      /** The URL to access the full EPC document */
      fullDocumentUrl: z.string().optional(),
      /** The URL to access the first page of the EPC document */
      firstPageDocumentUrl: z.string().optional()
    })
    .optional(),
  /** Request body to update the external land area of an existing property */
  externalArea: z
    .object({
      /** The unit of area (acres/hectares) */ type: z.string().optional(),
      /** The minimum area bound */ min: z.number().optional(),
      /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
      max: z.number().optional()
    })
    .optional(),
  /** Request body to update the internal dimensions of an existing property */
  internalArea: z
    .object({
      /** The unit of area (squareFeet/squareMetres) */
      type: z.string().optional(),
      /** The minimum area bound */ min: z.number().optional(),
      /** The maximum area bound */ max: z.number().optional()
    })
    .optional(),
  /** Request body used to update details specific to sales marketing on an existing property */
  selling: z
    .object({
      /** The date that the property was marked as for sale */
      instructed: z.string().optional(),
      /** The marketing price of the property */
      price: z.number().int().optional(),
      /** The fee charged by the agent to reserve a property (typically a new build) */
      reservationFee: z.number().int().optional(),
      /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
      qualifier: z.string().optional(),
      /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
      status: z.string().optional(),
      /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
      disposal: z.string().optional(),
      /** The date the property sale was completed */
      completed: z.string().optional(),
      /** The date the property was exchanged */
      exchanged: z.string().optional(),
      /** The date the property account was paid */
      accountPaid: z.string().optional(),
      /** Request body used to set the tenure of an existing property */
      tenure: z
        .object({
          /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
          type: z.string().optional(),
          /** The tenure expiration date */ expiry: z.string().optional()
        })
        .optional(),
      /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
      sellingAgency: z.string().optional(),
      /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
      agencyId: z.string().optional(),
      /** The date on which the agreement between the vendor and agent expires */
      agreementExpiry: z.string().optional(),
      /** Request body used to update the commission fee for a property */
      fee: z
        .object({
          /** The commission letting fee type (percentage/fixed) */
          type: z.string().optional(),
          /** The commission letting fee amount */ amount: z.number().optional()
        })
        .optional(),
      /** The agent's recommended asking price */
      recommendedPrice: z.number().int().optional(),
      /** The agent's valuation price */
      valuationPrice: z.number().int().optional(),
      /** The unique identifier of the document used for the sales brochure */
      brochureId: z.string().optional(),
      /** The property's decorative condition (unmodernised/fair/good/veryGood) */
      decoration: z.array(z.string()).optional(),
      /** Details relating to the shared ownership of the property */
      sharedOwnership: z
        .object({
          /** The percentage of the shared ownership property being sold by the vendor */
          sharedPercentage: z.number().optional(),
          /** The rent payable on the remainder of the shared ownership property */
          rent: z.number().optional(),
          /** The frequency at which the shared ownership rent should be paid */
          rentFrequency: z.string().optional()
        })
        .optional()
    })
    .optional(),
  /** Request body used to update details specific to lettings marketing on an existing property */
  letting: z
    .object({
      /** The date the property was marked as to let */
      instructed: z.string().optional(),
      /** The date the property is next available from */
      availableFrom: z.string().optional(),
      /** The date the property is available to */
      availableTo: z.string().optional(),
      /** The date the letting agreement between the landlord and agent was signed */
      agreementSigned: z.string().optional(),
      /** The rent being charged for the property */
      rent: z.number().optional(),
      /** The frequency at which rent will be collected (weekly/monthly/annually) */
      rentFrequency: z.string().optional(),
      /** Details of any bills that are included in the rent */
      rentIncludes: z.string().optional(),
      /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
      furnishing: z.array(z.string()).optional(),
      /** The acceptable letting terms (short/long/any) */
      term: z.string().optional(),
      /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
      status: z.string().optional(),
      /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
      agentRole: z.string().optional(),
      /** The unique identifier of the landlord letting the property */
      landlordId: z.string().optional(),
      /** The unique identifier of the document used for the lettings brochure */
      brochureId: z.string().optional(),
      /** A note to accompany any works orders created for the property */
      worksOrderNote: z.string().optional(),
      /** Sets the minimum number of months the property can be let out for */
      minimumTerm: z.number().int().optional(),
      /** Request body used to update the commission fee for a property */
      managementFee: z
        .object({
          /** The commission letting fee type (percentage/fixed) */
          type: z.string().optional(),
          /** The commission letting fee amount */ amount: z.number().optional()
        })
        .optional(),
      /** Request body used to update the commission fee for a property */
      lettingFee: z
        .object({
          /** The commission letting fee type (percentage/fixed) */
          type: z.string().optional(),
          /** The commission letting fee amount */ amount: z.number().optional()
        })
        .optional(),
      /** The rent qualifier (rentOnApplication/askingRent) */
      qualifier: z.string().optional(),
      /** Representation of property details specific to utilities */
      utilities: z
        .object({
          /** A flag denoting whether or not the property has gas connected */
          hasGas: z.boolean().optional(),
          /** The unique identifier of the company supplying the gas to the property */
          gasCompanyId: z.string().optional(),
          /** The gas meter point number */
          gasMeterPoint: z.string().optional(),
          /** The unique identifier of the company supplying the electricity to the property */
          electricityCompanyId: z.string().optional(),
          /** The electricity meter point number */
          electricityMeterPoint: z.string().optional(),
          /** The unique identifier of the company supplying the water to the property */
          waterCompanyId: z.string().optional(),
          /** The water meter point number */
          waterMeterPoint: z.string().optional(),
          /** The unique identifier of the company supplying the telephone to the property */
          telephoneCompanyId: z.string().optional(),
          /** The unique identifier of the company supplying the internet to the property */
          internetCompanyId: z.string().optional(),
          /** The unique identifier of the company supplying the cable tv to the property */
          cableTvCompanyId: z.string().optional()
        })
        .optional(),
      /** Representation of a property details related to deposit */
      deposit: z
        .object({
          /** The type of deposit (weeks/months/fixed) */
          type: z.string().optional(),
          /** The deposit amount. This can be the number of weeks or months rent or a monetry amount based on the `type` */
          amount: z.number().optional()
        })
        .optional(),
      /** Request body used to update details specific to rent insurance associated with a lettings property */
      rentInsurance: z
        .object({
          /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
          status: z.string().optional(),
          /** The reference number of the insurance policy when rent protection insurance has been taken out */
          referenceNumber: z.string().optional(),
          /** The insurance policy start date */ start: z.string().optional(),
          /** The insurance policy end date */ end: z.string().optional(),
          /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
          cancelledReasonId: z.string().optional(),
          /** A textual comment or note entered by the agent when an insurance policy was cancelled */
          cancelledComment: z.string().optional(),
          /** Flag indicating whether or not the insurance policy should auto renew */
          autoRenew: z.boolean().optional()
        })
        .optional(),
      /** Representation of property details specific to property Licencing */
      licencing: z
        .object({
          /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
          licenceRequired: z.boolean().optional(),
          /** The type of licence (additional/mandatory/none/selective) */
          licenceType: z.string().optional(),
          /** The number of households that the licence permits in the property */
          households: z.number().int().optional(),
          /** The number of occupants that the licence permits in the property */
          occupants: z.number().int().optional(),
          /** A flag determining whether or not the property is above commercial premises */
          aboveCommercialPremises: z.boolean().optional(),
          /** Representation of property details specific to property licence application */
          application: z
            .object({
              /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
              status: z.string().optional(),
              /** The licence application reference number */
              referenceNumber: z.string().optional(),
              /** The date the licence was applied for */
              date: z.string().optional(),
              /** The date the licence application was granted */
              granted: z.string().optional(),
              /** The date the licence will expire */
              expiry: z.string().optional()
            })
            .optional()
        })
        .optional()
    })
    .optional(),
  /** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
  regional: z
    .object({
      /** Request body used to set the data specific to properties in Ireland */
      irl: z
        .object({
          /** Request body used to set the energy performance rating information for properties in Ireland */
          buildingEnergyRating: z
            .object({
              /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
              exempt: z.boolean().optional(),
              /** The BER rating of the property */
              rating: z.string().optional(),
              /** The BER certificate reference number */
              refNumber: z.string().optional(),
              /** The energy performance indicator for the property */
              epi: z.string().optional()
            })
            .optional()
        })
        .optional()
    })
    .optional(),
  /** Request body used to set details specific to rural properties. */
  rural: z
    .object({
      /** Details of the building associated with the property. */
      buildingsDescription: z.string().optional(),
      /** Details of the land associated with the property. */
      landDescription: z.string().optional()
    })
    .optional(),
  /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  type: z.array(z.string()).optional(),
  /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  style: z.array(z.string()).optional(),
  /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  situation: z.array(z.string()).optional(),
  /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  parking: z.array(z.string()).optional(),
  /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  age: z.array(z.string()).optional(),
  /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
  locality: z.array(z.string()).optional(),
  /** The unique identifier of the negotiator managing the property */
  negotiatorId: z.string().optional(),
  /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional(),
  /** The unique identifier of the area that the property resides in */
  areaId: z.string().optional(),
  /** The url to the property on an external website */
  url: z.string().optional(),
  /** The caption to accompany the url to the property on an external website */
  urlCaption: z.string().optional(),
  /** Any ground rent payment that applies to the property */
  groundRent: z.number().optional(),
  /** Comments regarding the ground rent of the property */
  groundRentComment: z.string().optional(),
  /** The date when the ground rent payable on the property should be reviewed */
  groundRentReviewDate: z.string().optional(),
  /** The annual percentage increase of the ground rent after being reviewed */
  groundRentIncrease: z.number().optional(),
  /** Any service charge payment that applies to the property */
  serviceCharge: z.number().optional(),
  /** Comments regarding the service charge of the property */
  serviceChargeComment: z.string().optional(),
  /** Identifiers of any services connected at the property */
  availableServicesIds: z.array(z.string()).optional(),
  /** App specific metadata to set against the property */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Representation of a cerificate */
export const certificateModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the certificate */ id: z.string().optional(),
  /** The date and time when the certificate was created */
  created: z.string().optional(),
  /** The date and time when the certificate was last modified */
  modified: z.string().optional(),
  /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
  category: z.string().optional(),
  /** The certificate's type */ typeId: z.string().optional(),
  /** The certificate's start date */ start: z.string().optional(),
  /** The certificate's expiry date */ expiry: z.string().optional(),
  /** The unique identifier of the property */
  propertyId: z.string().optional(),
  /** The unique identifier of the company */ companyId: z.string().optional(),
  /** The unique identifier of the certificates status */
  statusId: z.string().optional(),
  /** Any general notes regarding the certificate */
  notes: z.string().optional(),
  /** The certificate's reference number */
  referenceNumber: z.string().optional(),
  /** The party responsible for the certificate, as defined in property configuration (agent/landlord/notRequired/notSet) */
  responsibleParty: z.string().optional(),
  /** The ETag for the current version of the certificate. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const certificateModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a cerificate */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the certificate */
        id: z.string().optional(),
        /** The date and time when the certificate was created */
        created: z.string().optional(),
        /** The date and time when the certificate was last modified */
        modified: z.string().optional(),
        /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
        category: z.string().optional(),
        /** The certificate's type */ typeId: z.string().optional(),
        /** The certificate's start date */ start: z.string().optional(),
        /** The certificate's expiry date */ expiry: z.string().optional(),
        /** The unique identifier of the property */
        propertyId: z.string().optional(),
        /** The unique identifier of the company */
        companyId: z.string().optional(),
        /** The unique identifier of the certificates status */
        statusId: z.string().optional(),
        /** Any general notes regarding the certificate */
        notes: z.string().optional(),
        /** The certificate's reference number */
        referenceNumber: z.string().optional(),
        /** The party responsible for the certificate, as defined in property configuration (agent/landlord/notRequired/notSet) */
        responsibleParty: z.string().optional(),
        /** The ETag for the current version of the certificate. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new certificate */
export const createCertificateModel = z.object({
  /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
  category: z.string().optional(),
  /** The certificate's type */ typeId: z.string().optional(),
  /** The certificate's start date */ start: z.string().optional(),
  /** The certificate's expiry date */ expiry: z.string().optional(),
  /** The unique identifier of the company that supplied, or is supplying, the certificate */
  companyId: z.string().optional(),
  /** Any general notes regarding the certificate */
  notes: z.string().optional(),
  /** The certificate's reference number */
  referenceNumber: z.string().optional()
})
/** Request body used to update an existing certificate */
export const updateCertificateModel = z.object({
  /** The certificate's start date */ start: z.string().optional(),
  /** The certificate's expiry date */ expiry: z.string().optional(),
  /** The unique identifier of the company */ companyId: z.string().optional(),
  /** Any general notes regarding the certificate */
  notes: z.string().optional(),
  /** The certificate's reference number */
  referenceNumber: z.string().optional()
})
/** Record describing the responsible party for a given type of certificate within a property entry */
export const certificateResponsiblePartyModel = z.object({
  /** Identifier for the type of certificate for which the party is responsible */
  typeId: z.string().optional(),
  /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
  responsibleParty: z.string().optional()
})
/** Representation of certificate responsibilities configured for a property */
export const propertyCertificateResponsibilitiesModel = z.object({
  /** The id of the property to which the configured certificate responsibilities apply */
  id: z.string().optional(),
  /** The date and time on which the property was created */
  created: z.string().optional(),
  /** The date and time on which the property was last modified */
  modified: z.string().optional(),
  /** The configured certificate responsibilities */
  responsibleParties: z
    .array(
      /** Record describing the responsible party for a given type of certificate within a property entry */
      z.object({
        /** Identifier for the type of certificate for which the party is responsible */
        typeId: z.string().optional(),
        /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
        responsibleParty: z.string().optional()
      })
    )
    .optional(),
  /** The ETag for the current version of the property. Used for managing update concurrency */
  _eTag: z.string().optional()
})
/** Record describing the responsible party for a given type of certificate within a property entry */
export const updateCertificateResponsiblePartyModel = z.object({
  /** Identifier for the type of certificate for which the party is responsible */
  typeId: z.string().optional(),
  /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
  responsibleParty: z.string().optional()
})
/** Object containing a collection of certificate type to responsible party mappings */
export const updateCertificateResponsibilitiesModel = z.object({
  /** A collection of certificate type to responsible party mappings */
  responsibleParties: z
    .array(
      /** Record describing the responsible party for a given type of certificate within a property entry */
      z.object({
        /** Identifier for the type of certificate for which the party is responsible */
        typeId: z.string().optional(),
        /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
        responsibleParty: z.string().optional()
      })
    )
    .optional()
})
/** Representation of an individual key included in a key set */
export const individualKeyModel = z.object({
  /** The name of the individual key in the set */ name: z.string().optional()
})
/** Representation of a set of keys */
export const keysModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the key */ id: z.string().optional(),
  /** The date and time when the key was created */
  created: z.string().optional(),
  /** The date and time when the key was last modified */
  modified: z.string().optional(),
  /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
  number: z.string().optional(),
  /** The unique identifier of the key type */ typeId: z.string().optional(),
  /** The unique identifier of the office responsible for the key */
  officeId: z.string().optional(),
  /** The unique identifier of the property that the key belongs to */
  propertyId: z.string().optional(),
  /** The status of the key (checkedIn/checkedOut/noLongerHeld) */
  status: z.string().optional(),
  /** A listing of the individual keys included in the set */
  keysInSet: z
    .array(
      /** Representation of an individual key included in a key set */
      z.object({
        /** The name of the individual key in the set */
        name: z.string().optional()
      })
    )
    .optional(),
  /** The ETag for the current version of the keys. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const keysModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a set of keys */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the key */ id: z.string().optional(),
        /** The date and time when the key was created */
        created: z.string().optional(),
        /** The date and time when the key was last modified */
        modified: z.string().optional(),
        /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
        number: z.string().optional(),
        /** The unique identifier of the key type */
        typeId: z.string().optional(),
        /** The unique identifier of the office responsible for the key */
        officeId: z.string().optional(),
        /** The unique identifier of the property that the key belongs to */
        propertyId: z.string().optional(),
        /** The status of the key (checkedIn/checkedOut/noLongerHeld) */
        status: z.string().optional(),
        /** A listing of the individual keys included in the set */
        keysInSet: z
          .array(
            /** Representation of an individual key included in a key set */
            z.object({
              /** The name of the individual key in the set */
              name: z.string().optional()
            })
          )
          .optional(),
        /** The ETag for the current version of the keys. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create an individual key included in a key set */
export const createIndividualKeyModel = z.object({
  /** The name of the individual key in the set */ name: z.string().optional()
})
/** Request body used to create a new set of keys */
export const createKeyModel = z.object({
  /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
  number: z.string().optional(),
  /** The unique identifier of the key type */ typeId: z.string().optional(),
  /** The unique identifier of the office responsible for the key */
  officeId: z.string().optional(),
  /** A listing of the individual keys included in the set */
  keysInSet: z
    .array(
      /** Request body used to create an individual key included in a key set */
      z.object({
        /** The name of the individual key in the set */
        name: z.string().optional()
      })
    )
    .optional()
})
/** Representation of a key movement */
export const keyMovementModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the key movement */ id: z.string().optional(),
  /** The date and time when the key movement was created */
  created: z.string().optional(),
  /** The date and time when the key movement was last modified */
  modified: z.string().optional(),
  /** The unique identifier of the key set this movement belongs to */
  keyId: z.string().optional(),
  /** The unique identifier of the property that the key set belongs to */
  propertyId: z.string().optional(),
  /** The unique identifier of the contact/negotiator that the key is checked out with */
  checkOutToId: z.string().optional(),
  /** The type of entity that checked out the key (contact/negotiator) */
  checkOutToType: z.string().optional(),
  /** The date and time of when the key set was checked out */
  checkOutAt: z.string().optional(),
  /** The unique identifier of the negotiator who performed the key check out */
  checkOutNegotiatorId: z.string().optional(),
  /** The date and time of when the key set was checked in */
  checkInAt: z.string().optional(),
  /** The unique identifier of the negotiator who performed the key check in */
  checkInNegotiatorId: z.string().optional(),
  /** The ETag for the current version of the key movement. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const keyMovementModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a key movement */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the key movement */
        id: z.string().optional(),
        /** The date and time when the key movement was created */
        created: z.string().optional(),
        /** The date and time when the key movement was last modified */
        modified: z.string().optional(),
        /** The unique identifier of the key set this movement belongs to */
        keyId: z.string().optional(),
        /** The unique identifier of the property that the key set belongs to */
        propertyId: z.string().optional(),
        /** The unique identifier of the contact/negotiator that the key is checked out with */
        checkOutToId: z.string().optional(),
        /** The type of entity that checked out the key (contact/negotiator) */
        checkOutToType: z.string().optional(),
        /** The date and time of when the key set was checked out */
        checkOutAt: z.string().optional(),
        /** The unique identifier of the negotiator who performed the key check out */
        checkOutNegotiatorId: z.string().optional(),
        /** The date and time of when the key set was checked in */
        checkInAt: z.string().optional(),
        /** The unique identifier of the negotiator who performed the key check in */
        checkInNegotiatorId: z.string().optional(),
        /** The ETag for the current version of the key movement. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new key movement */
export const createKeyMovementModel = z.object({
  /** Indicates whether the key is expected to be checked back in. Set to true when the key is no longer held (eg. returned to the landlord) */
  checkInRequired: z.boolean().optional(),
  /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
  checkOutToId: z.string().optional(),
  /** The type of entity that checked out the key (contact/negotiator) */
  checkOutToType: z.string().optional(),
  /** The unique identifier of the negotiator who performed the key check out */
  checkOutNegotiatorId: z.string().optional()
})
/** Request body used for checking in a key */
export const checkInKeyModel = z.object({
  /** The unique identifier of the negotiator who performed the key check in */
  checkInNegotiatorId: z.string().optional()
})
/** Representation of a check */
export const propertyCheckModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the check */ id: z.string().optional(),
  /** The date and time when the check was created */
  created: z.string().optional(),
  /** The date and time when the check was last modified */
  modified: z.string().optional(),
  /** Textual description of what the check relates to */
  description: z.string().optional(),
  /** The status of the check (needed/notNeeded/arranging/completed) */
  status: z.string().optional(),
  /** The type of the check (preInstruction) */ type: z.string().optional(),
  /** The unique identifier of the property that this check relates to */
  propertyId: z.string().optional(),
  /** The ETag for the current version of the check. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const propertyCheckModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a check */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the check */ id: z.string().optional(),
        /** The date and time when the check was created */
        created: z.string().optional(),
        /** The date and time when the check was last modified */
        modified: z.string().optional(),
        /** Textual description of what the check relates to */
        description: z.string().optional(),
        /** The status of the check (needed/notNeeded/arranging/completed) */
        status: z.string().optional(),
        /** The type of the check (preInstruction) */
        type: z.string().optional(),
        /** The unique identifier of the property that this check relates to */
        propertyId: z.string().optional(),
        /** The ETag for the current version of the check. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new check */
export const createPropertyCheckModel = z.object({
  /** Short, descriptive text describing the purpose of the check */
  description: z.string(),
  /** The type of the check (preInstruction) */ type: z.string(),
  /** The status of the check (needed/notNeeded/arranging/completed) */
  status: z.string()
})
/** Model for the update of an existing check */
export const updatePropertyCheckModel = z.object({
  /** The status of the check (needed/notNeeded/arranging/completed) */
  status: z.string().optional()
})
/** Representation of a property appraisal */
export const propertyAppraisalModel = z.object({
  /** Unique identifier of the appraisal */ id: z.string().optional(),
  /** The date and time on which the property appraisal was created */
  created: z.string().optional(),
  /** The date and time on which the property appraisal was last modified */
  modified: z.string().optional(),
  /** Unique identifier of the appraising company */
  companyId: z.string().optional(),
  /** Flag indicating whether the appraisal is internal or external */
  isExternal: z.boolean().optional(),
  /** The date of the appraisal */ date: z.string().optional(),
  /** The appraisal value */ price: z.number().int().optional(),
  /** Representation of the the commission fee for a property */
  fee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The commission letting fee amount */ amount: z.number().optional()
    })
    .optional(),
  /** Free-text notes associated with the appraisal */
  notes: z.string().optional(),
  _eTag: z.string().optional()
})
export const propertyAppraisalModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a property appraisal */
      z.object({
        /** Unique identifier of the appraisal */ id: z.string().optional(),
        /** The date and time on which the property appraisal was created */
        created: z.string().optional(),
        /** The date and time on which the property appraisal was last modified */
        modified: z.string().optional(),
        /** Unique identifier of the appraising company */
        companyId: z.string().optional(),
        /** Flag indicating whether the appraisal is internal or external */
        isExternal: z.boolean().optional(),
        /** The date of the appraisal */ date: z.string().optional(),
        /** The appraisal value */ price: z.number().int().optional(),
        /** Representation of the the commission fee for a property */
        fee: z
          .object({
            /** The commission letting fee type (percentage/fixed) */
            type: z.string().optional(),
            /** The commission letting fee amount */
            amount: z.number().optional()
          })
          .optional(),
        /** Free-text notes associated with the appraisal */
        notes: z.string().optional(),
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Model for the creation of a new property appraisal */
export const createPropertyAppraisalModel = z.object({
  /** Unique identifier of the appraising company */
  companyId: z.string().optional(),
  /** The date of the appraisal */ date: z.string().optional(),
  /** The appraisal value */ price: z.number().int().optional(),
  /** Representation of the the commission fee for a property */
  fee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The commission letting fee amount */ amount: z.number().optional()
    })
    .optional(),
  /** Free-text notes associated with the appraisal */
  notes: z.string().optional()
})
/** Model for the creation of a new property appraisal */
export const updatePropertyAppraisalModel = z.object({
  /** Unique identifier of the appraising company */
  companyId: z.string().optional(),
  /** The date of the appraisal */ date: z.string().optional(),
  /** The appraisal value */ price: z.number().int().optional(),
  /** Representation of the the commission fee for a property */
  fee: z
    .object({
      /** The commission letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The commission letting fee amount */ amount: z.number().optional()
    })
    .optional(),
  /** Free-text notes associated with the appraisal */
  notes: z.string().optional()
})
/** Representation of a property image */
export const propertyImageModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the image, which is also the filename */
  id: z.string().optional(),
  /** The date and time when the image was created */
  created: z.string().optional(),
  /** The date and time when the property image was last modified */
  modified: z.string().optional(),
  /** The unique identifier of the property attached to the image */
  propertyId: z.string().optional(),
  /** The url where the image can be downloaded from. Please note that physical assets for archived images may no longer be available */
  url: z.string().optional(),
  /** The image caption */ caption: z.string().optional(),
  /** The type of image (photograph/floorPlan/epc/map) */
  type: z.string().optional(),
  /** The display order index of the image which can be used to correctly order the whole collection */
  order: z.number().int().optional(),
  /** A flag determining whether or not the image is archived. Please note that physical assets for archived images may no longer be available */
  fromArchive: z.boolean().optional(),
  /** The ETag for the current version of the image. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const propertyImageModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a property image */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the image, which is also the filename */
        id: z.string().optional(),
        /** The date and time when the image was created */
        created: z.string().optional(),
        /** The date and time when the property image was last modified */
        modified: z.string().optional(),
        /** The unique identifier of the property attached to the image */
        propertyId: z.string().optional(),
        /** The url where the image can be downloaded from. Please note that physical assets for archived images may no longer be available */
        url: z.string().optional(),
        /** The image caption */ caption: z.string().optional(),
        /** The type of image (photograph/floorPlan/epc/map) */
        type: z.string().optional(),
        /** The display order index of the image which can be used to correctly order the whole collection */
        order: z.number().int().optional(),
        /** A flag determining whether or not the image is archived. Please note that physical assets for archived images may no longer be available */
        fromArchive: z.boolean().optional(),
        /** The ETag for the current version of the image. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new property image */
export const createPropertyImageModel = z.object({
  /** The base64 encoded file content, prefixed with the content type (eg. data:image/jpeg;base64,VGVzdCBmaWxl) */
  data: z.string().optional(),
  /** The presigned s3 url which a property image has been uploaded to (This supports files up to 30MB) */
  fileUrl: z.string().optional(),
  /** The unique identifier of the property attached to the image */
  propertyId: z.string(),
  /** The image caption */ caption: z.string(),
  /** The type of image (photograph/floorPlan/epc/map) */ type: z.string()
})
/** Request body used to update an existing property image */
export const updatePropertyImageModel = z.object({
  /** The image caption */ caption: z.string().optional(),
  /** The type of image (photograph/floorPlan/epc/map) */
  type: z.string().optional()
})
/** Request body used to reindex property images */
export const reindexPropertyImagesModel = z.object({
  /** The unique identifier of the property to update */
  propertyId: z.string().optional(),
  /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
  imageOrder: z.array(z.string()).optional()
})
/** Representation of a contact */
export const referralContactModel = z.object({
  id: z.string().optional(),
  /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
  title: z.string().optional(),
  /** The contact's forename */ forename: z.string().optional(),
  /** The contact's surname */ surname: z.string().optional(),
  /** The mobile phone number of the contact */
  mobilePhone: z.string().optional(),
  /** The email address of the contact */ email: z.string().optional()
})
/** Representation of a referral */
export const referralModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the referral */ id: z.string().optional(),
  /** The date and time when the referral was created */
  created: z.string().optional(),
  /** The date and time when the referral was amended */
  modified: z.string().optional(),
  /** The unique identifier of the referralTypeId the referral is associated with, where applicable */
  referralTypeId: z.string().optional(),
  /** The type of referral (referral/lead). Please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#referral) for further information */
  type: z.string().optional(),
  /** The unique identifier of the negotiator the referral is associated with, where applicable */
  negotiatorId: z.string().optional(),
  /** The unique identifier of the property the referral is associated with, where applicable */
  propertyId: z.string().optional(),
  /** The unique identifier of the applicant the referral is associated with, where applicable */
  applicantId: z.string().optional(),
  /** The unique identifier of the applicant the referral is associated with, where applicable */
  contactId: z.string().optional(),
  /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
  status: z.string().optional(),
  /** The amount paid to the agent for the referral */
  amount: z.number().optional(),
  /** The date and time when the referral was paid */
  paid: z.string().optional(),
  /** The date and time when the referral was accepted */
  accepted: z.string().optional(),
  /** Representation of a contact */
  related: z
    .object({
      id: z.string().optional(),
      /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
      title: z.string().optional(),
      /** The contact's forename */ forename: z.string().optional(),
      /** The contact's surname */ surname: z.string().optional(),
      /** The mobile phone number of the contact */
      mobilePhone: z.string().optional(),
      /** The email address of the contact */ email: z.string().optional()
    })
    .optional(),
  /** App specific metadata that has been set against the referral */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the referral. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const referralModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a referral */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the referral */ id: z.string().optional(),
        /** The date and time when the referral was created */
        created: z.string().optional(),
        /** The date and time when the referral was amended */
        modified: z.string().optional(),
        /** The unique identifier of the referralTypeId the referral is associated with, where applicable */
        referralTypeId: z.string().optional(),
        /** The type of referral (referral/lead). Please [see the documentation](https://foundations-documentation.reapit.cloud/platform-glossary#referral) for further information */
        type: z.string().optional(),
        /** The unique identifier of the negotiator the referral is associated with, where applicable */
        negotiatorId: z.string().optional(),
        /** The unique identifier of the property the referral is associated with, where applicable */
        propertyId: z.string().optional(),
        /** The unique identifier of the applicant the referral is associated with, where applicable */
        applicantId: z.string().optional(),
        /** The unique identifier of the applicant the referral is associated with, where applicable */
        contactId: z.string().optional(),
        /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
        status: z.string().optional(),
        /** The amount paid to the agent for the referral */
        amount: z.number().optional(),
        /** The date and time when the referral was paid */
        paid: z.string().optional(),
        /** The date and time when the referral was accepted */
        accepted: z.string().optional(),
        /** Representation of a contact */
        related: z
          .object({
            id: z.string().optional(),
            /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
            title: z.string().optional(),
            /** The contact's forename */ forename: z.string().optional(),
            /** The contact's surname */ surname: z.string().optional(),
            /** The mobile phone number of the contact */
            mobilePhone: z.string().optional(),
            /** The email address of the contact */ email: z.string().optional()
          })
          .optional(),
        /** App specific metadata that has been set against the referral */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the referral. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Create Referral Model */
export const createReferralModel = z.object({
  /** The unique identifier of the referral type */ referralTypeId: z.string(),
  /** The unique identifier of the negotiator creating the referral */
  negotiatorId: z.string().optional(),
  /** The unique identifier of the property */
  propertyId: z.string().optional(),
  /** The unique identifier of the applicant */
  applicantId: z.string().optional(),
  /** The unique identifier of the contact that has been referred */
  contactId: z.string(),
  /** The amount paid to the agent for the referral */
  amount: z.number().optional()
})
/** Update Referral Model */
export const updateReferralModel = z.object({
  /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
  status: z.string().optional(),
  /** The amount paid to the agent for the referral */
  amount: z.number().optional(),
  /** App specific metadata to set against the referral */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Representation of a referral type */
export const referralTypeModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  id: z.string().optional(),
  /** The name of the referral type */ name: z.string().optional()
})
export const referralTypeModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a referral type */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        id: z.string().optional(),
        /** The name of the referral type */ name: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Representation of a webhook subscription */
export const webhookModel = z.object({
  /** The unique identifier of the webhook */ id: z.string().optional(),
  /** The date and time when the webhook was created */
  created: z.string().optional(),
  /** The date and time when the webhook was last modified */
  modified: z.string().optional(),
  /** The url where the payload associated with the webhook should be sent to */
  url: z.string().optional(),
  /** A short description associated with the webhook (ie a friendly name or label) */
  description: z.string().optional(),
  /** The identifiers of the topics the webhook is associated with */
  topicIds: z.array(z.string()).optional(),
  /** Flag denoting whether or not the webhook is active and ready to receive data */
  active: z.boolean().optional(),
  /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted */
  ignoreEtagOnlyChanges: z.boolean().optional()
})
export const webhookModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a webhook subscription */
      z.object({
        /** The unique identifier of the webhook */ id: z.string().optional(),
        /** The date and time when the webhook was created */
        created: z.string().optional(),
        /** The date and time when the webhook was last modified */
        modified: z.string().optional(),
        /** The url where the payload associated with the webhook should be sent to */
        url: z.string().optional(),
        /** A short description associated with the webhook (ie a friendly name or label) */
        description: z.string().optional(),
        /** The identifiers of the topics the webhook is associated with */
        topicIds: z.array(z.string()).optional(),
        /** Flag denoting whether or not the webhook is active and ready to receive data */
        active: z.boolean().optional(),
        /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted */
        ignoreEtagOnlyChanges: z.boolean().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new webhook subscription */
export const createWebhookModel = z.object({
  /** The url where the payload associated with the webhook should be sent to */
  url: z.string(),
  /** A short description associated with the webhook (ie a friendly name or label) */
  description: z.string().optional(),
  /** The identifiers of the topics the subscription is associated with */
  topicIds: z.array(z.string()).optional(),
  /** Flag denoting whether or not the webhook is active and ready to receive data */
  active: z.boolean().optional(),
  /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
  ignoreEtagOnlyChanges: z.boolean().optional()
})
/** Request body used to update a webhook subscription */
export const updateWebhookModel = z.object({
  /** The url where the payload associated with the webhook should be sent to */
  url: z.string(),
  /** A short description associated with the webhook (ie a friendly name or label) */
  description: z.string().optional(),
  /** The identifiers of the topics the subscription is associated with */
  topicIds: z.array(z.string()).optional(),
  /** Flag denoting whether or not the webhook is active and ready to receive data */
  active: z.boolean().optional(),
  /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
  ignoreEtagOnlyChanges: z.boolean().optional()
})
/** Representation of a source of business */
export const sourceModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the source */ id: z.string().optional(),
  /** The date and time when the source was created */
  created: z.string().optional(),
  /** The date and time when the source was last modified */
  modified: z.string().optional(),
  /** The name of the source or advertising publication */
  name: z.string().optional(),
  /** The type of the source (source/advertisement) */
  type: z.string().optional(),
  /** A collection of the unique identifiers of offices that regularly get business from the source */
  officeIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of departments that regularly get business from the source */
  departmentIds: z.array(z.string()).optional(),
  /** The ETag for the current version of the source. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const sourceModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a source of business */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the source */ id: z.string().optional(),
        /** The date and time when the source was created */
        created: z.string().optional(),
        /** The date and time when the source was last modified */
        modified: z.string().optional(),
        /** The name of the source or advertising publication */
        name: z.string().optional(),
        /** The type of the source (source/advertisement) */
        type: z.string().optional(),
        /** A collection of the unique identifiers of offices that regularly get business from the source */
        officeIds: z.array(z.string()).optional(),
        /** A collection of unique identifiers of departments that regularly get business from the source */
        departmentIds: z.array(z.string()).optional(),
        /** The ETag for the current version of the source. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new source of business */
export const createSourceModel = z.object({
  /** The name of the source or advertising publication */ name: z.string(),
  /** The type of the source (source/advertisement) */ type: z.string(),
  /** A collection of the unique identifiers of offices that regularly get business from the source */
  officeIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of departments that regularly get business from the source */
  departmentIds: z.array(z.string()).optional()
})
/** Request body used to update an existing source of business */
export const updateSourceModel = z.object({
  /** The name of the source or advertising publication */
  name: z.string().optional(),
  /** The type of the source (source/advertisement) */
  type: z.string().optional(),
  /** A collection of the unique identifiers of offices that regularly get business from the source */
  officeIds: z.array(z.string()).optional(),
  /** A collection of unique identifiers of departments that regularly get business from the source */
  departmentIds: z.array(z.string()).optional()
})
/** Representation of a task, which can also be an internal message */
export const taskModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the task */ id: z.string().optional(),
  /** The date and time when the task was created */
  created: z.string().optional(),
  /** The date and time when the task was last modified */
  modified: z.string().optional(),
  /** The date the task becomes active */ activates: z.string().optional(),
  /** The date the task was completed */ completed: z.string().optional(),
  /** The unique identifier of the task type */ typeId: z.string().optional(),
  /** The unique identifer of the negotiator that created the task */
  senderId: z.string().optional(),
  /** The textual contents of the task or message */
  text: z.string().optional(),
  /** The unique identifier of the landlord the task is associated to */
  landlordId: z.string().optional(),
  /** The unique identifier of the property the task is associated to */
  propertyId: z.string().optional(),
  /** The unique identifier of the applicant the task is associated to */
  applicantId: z.string().optional(),
  /** The unique identifier of the tenancy the task is associated to */
  tenancyId: z.string().optional(),
  /** The unique identifier of the contact the task is associated to */
  contactId: z.string().optional(),
  /** The unique identifier of the negotiator or office the task is being sent to */
  recipientId: z.string().optional(),
  /** The type of the recipient (office/negotiator) */
  recipientType: z.string().optional(),
  /** App specific metadata that has been set against the task */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the task. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const taskModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a task, which can also be an internal message */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the task */ id: z.string().optional(),
        /** The date and time when the task was created */
        created: z.string().optional(),
        /** The date and time when the task was last modified */
        modified: z.string().optional(),
        /** The date the task becomes active */
        activates: z.string().optional(),
        /** The date the task was completed */ completed: z.string().optional(),
        /** The unique identifier of the task type */
        typeId: z.string().optional(),
        /** The unique identifer of the negotiator that created the task */
        senderId: z.string().optional(),
        /** The textual contents of the task or message */
        text: z.string().optional(),
        /** The unique identifier of the landlord the task is associated to */
        landlordId: z.string().optional(),
        /** The unique identifier of the property the task is associated to */
        propertyId: z.string().optional(),
        /** The unique identifier of the applicant the task is associated to */
        applicantId: z.string().optional(),
        /** The unique identifier of the tenancy the task is associated to */
        tenancyId: z.string().optional(),
        /** The unique identifier of the contact the task is associated to */
        contactId: z.string().optional(),
        /** The unique identifier of the negotiator or office the task is being sent to */
        recipientId: z.string().optional(),
        /** The type of the recipient (office/negotiator) */
        recipientType: z.string().optional(),
        /** App specific metadata that has been set against the task */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the task. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new task, which can also be an internal message */
export const createTaskModel = z.object({
  /** The date the task becomes active (Required when 'TypeId' is given) */
  activates: z.string().optional(),
  /** The date the task was completed */ completed: z.string().optional(),
  /** The unique identifier of the task type */ typeId: z.string().optional(),
  /** The unique identifer of the negotiator that created the task */
  senderId: z.string(),
  /** The textual contents of the task or message */ text: z.string(),
  /** The unique identifier of the landlord the task is associated to */
  landlordId: z.string().optional(),
  /** The unique identifier of the property the task is associated to */
  propertyId: z.string().optional(),
  /** The unique identifier of the applicant the task is associated to */
  applicantId: z.string().optional(),
  /** The unique identifier of the tenancy the task is associated to */
  tenancyId: z.string().optional(),
  /** The unique identifier of the contact the task is associated to */
  contactId: z.string().optional(),
  /** The unique identifier of the negotiator or office the task is being sent to */
  recipientId: z.string(),
  /** The type of the recipient (office/negotiator) */
  recipientType: z.string(),
  /** App specific metadata that has been set against the task */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body used to update an existing task, which can also be an internal message */
export const updateTaskModel = z.object({
  /** The date the task becomes active (Required when 'TypeId' is given) */
  activates: z.string().optional(),
  /** The date the task was completed */ completed: z.string().optional(),
  /** The unique identifier of the task type */ typeId: z.string().optional(),
  /** The unique identifer of the negotiator that created the task */
  senderId: z.string().optional(),
  /** The textual contents of the task or message */
  text: z.string().optional(),
  /** The unique identifier of the landlord the task is associated to */
  landlordId: z.string().optional(),
  /** The unique identifier of the property the task is associated to */
  propertyId: z.string().optional(),
  /** The unique identifier of the applicant the task is associated to */
  applicantId: z.string().optional(),
  /** The unique identifier of the tenancy the task is associated to */
  tenancyId: z.string().optional(),
  /** The unique identifier of the contact the task is associated to */
  contactId: z.string().optional(),
  /** The unique identifier of the negotiator or office the task is being sent to */
  recipientId: z.string().optional(),
  /** The type of the recipient (office/negotiator) */
  recipientType: z.string().optional(),
  /** App specific metadata that has been set against the task */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Representation of the tenancy letting fee */
export const tenancyLettingFeeModel = z.object({
  /** The letting fee type (percentage/fixed) */ type: z.string().optional(),
  /** The fee amount */ amount: z.number().optional(),
  /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
  frequency: z.string().optional()
})
/** Representation of the tenancy management fee */
export const tenancyManagementFeeModel = z.object({
  /** The management fee type (percentage/fixed) */ type: z.string().optional(),
  /** The fee amount */ amount: z.number().optional(),
  /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  frequency: z.string().optional()
})
/** A tenancy source of enquiry */
export const tenancySourceModel = z.object({
  /** The unique identifier of the source for this tenancy */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** A tenancy deposit model */
export const tenancyDepositModel = z.object({
  /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
  heldBy: z.string().optional(),
  /** The number of weeks or months rent collected as the deposit on the tenancy */
  period: z.number().int().optional(),
  /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */
  type: z.string().optional(),
  /** The amount of deposit held */ sum: z.number().optional()
})
/** Representation of the physical address of a building or premise */
export const tenancyContactAddressModel = z.object({
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  countryId: z.string().optional()
})
/** A summarised view of the details of a contact or company associated to a tenancy */
export const tenancyContactModel = z.object({
  /** The unique identifier of the contact or company */
  id: z.string().optional(),
  /** The complete name of the contact or company */
  name: z.string().optional(),
  /** The title of the contact (Available when 'type' is 'contact') */
  title: z.string().optional(),
  /** The forename of the contact (Available when 'type' is 'contact') */
  forename: z.string().optional(),
  /** The surname of the contact (Available when 'type' is 'contact') */
  surname: z.string().optional(),
  /** The date of birth of the contact (Available when 'type' is 'contact') */
  dateOfBirth: z.string().optional(),
  /** The type of the contact (company/contact) */ type: z.string().optional(),
  /** The home phone number of the contact or company */
  homePhone: z.string().optional(),
  /** The work phone number of the contact or company */
  workPhone: z.string().optional(),
  /** The mobile phone number of the contact or company */
  mobilePhone: z.string().optional(),
  /** The email address of the contact or company */
  email: z.string().optional(),
  /** An optional payment reference to be used for transactions related to this tenancy associated with this tenant */
  paymentReference: z.string().optional(),
  /** A flag denoting whether or not this roie on the system is now archived */
  fromArchive: z.boolean().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
  marketingConsent: z.string().optional(),
  /** Representation of the physical address of a building or premise */
  primaryAddress: z
    .object({
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides within */
      countryId: z.string().optional()
    })
    .optional(),
  /** The date the tenant moved in (or will move in) to the property */
  occupyOn: z.string().optional(),
  /** The date the tenant vacated (or is due to vacate) the property */
  vacateOn: z.string().optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z
    .array(
      /** Representation of additional contact details */
      z.object({
        /** The type of contact detail */ type: z.string().optional(),
        /** The contact detail */ value: z.string().optional()
      })
    )
    .optional()
})
/** Representation of renewal options in a tenancy */
export const renewalOptionsModel = z.object({
  /** The unique identifier of the renewal option */
  optionId: z.string().optional(),
  /** The associated renewal option text */ optionText: z.string().optional(),
  /** The renewal option expiry date */ expiry: z.string().optional(),
  /** The renewal options associated condition Ids */
  conditionIds: z.array(z.string()).optional()
})
/** Representation of tenancy arrears data (populated only when Client Accounts functionality is enabled) */
export const tenancyArrearsModel = z.object({
  /** A flag determining whether or not tenancy arrears should be chased */
  chaseArrears: z.boolean().optional(),
  /** Indicates whether or not a payment plan is set up for a tenancy in arrears (no/yes/negotiating) */
  paymentPlan: z.string().optional()
})
/** Representation of a tenancy */
export const tenancyModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the tenancy */ id: z.string().optional(),
  /** The date and time when the tenancy was created */
  created: z.string().optional(),
  /** The date and time when the tenancy was last modified */
  modified: z.string().optional(),
  /** The start date of the tenancy */ startDate: z.string().optional(),
  /** The end date of the tenancy */ endDate: z.string().optional(),
  /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
  status: z.string().optional(),
  /** The role that the agent is performing for this tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string().optional(),
  /** The amount of rent required, returned in relation to the collection frequency
Note that this is the original rent set on the tenancy. For tenancies that have been extended with a rent change you MUST use the extensions endpoint */
  rent: z.number().optional(),
  /** The rent collection frequency (weekly/monthly/annually) */
  rentFrequency: z.string().optional(),
  /** A flag determining whether or not the tenancy is confirmed to finish at the end date */
  endDateConfirmed: z.boolean().optional(),
  /** A flag determining whether or not the tenancy has been extended indefinitely */
  isPeriodic: z.boolean().optional(),
  /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
  rentInstalmentsFrequency: z.string().optional(),
  /** The amount due for each rent instalment (where specified) */
  rentInstalmentsAmount: z.number().optional(),
  /** The date that the first instalment is due */
  rentInstalmentsStart: z.string().optional(),
  /** The recorded utility reading for the gas meter */
  meterReadingGas: z.string().optional(),
  /** Date of when the reading of gas utility was last recorded */
  meterReadingGasLastRead: z.string().optional(),
  /** The recorded utility reading for the electricity meter */
  meterReadingElectricity: z.string().optional(),
  /** Date of when the reading of electricity utility was last recorded */
  meterReadingElectricityLastRead: z.string().optional(),
  /** The recorded utility reading for the water meter */
  meterReadingWater: z.string().optional(),
  /** Date of when the reading of water utility was last recorded */
  meterReadingWaterLastRead: z.string().optional(),
  /** The unique identifier of the type of tenancy */
  typeId: z.string().optional(),
  /** The unique identifier of the negotiator who is managing the tenancy */
  negotiatorId: z.string().optional(),
  /** The unique identifier of the property that relates to the tenancy */
  propertyId: z.string().optional(),
  /** The unique identifier of the applicant who has applied to be a tenant. Whilst the tenancy is an in arranging state, information about the individual such as name and contact details can be obtained from GET /applicants/{id}. Use the link in the _links collection for a relative URI */
  applicantId: z.string().optional(),
  /** The unique identifier of the negotiator assigned as the manager of the tenancy */
  managerId: z.string().optional(),
  /** An optional payment reference to be used for transactions related to this tenancy associated with all tenants in the property */
  groupPaymentReference: z.string().optional(),
  /** Representation of the tenancy letting fee */
  lettingFee: z
    .object({
      /** The letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The fee amount */ amount: z.number().optional(),
      /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
      frequency: z.string().optional()
    })
    .optional(),
  /** Representation of the tenancy management fee */
  managementFee: z
    .object({
      /** The management fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The fee amount */ amount: z.number().optional(),
      /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
      frequency: z.string().optional()
    })
    .optional(),
  /** A tenancy source of enquiry */
  source: z
    .object({
      /** The unique identifier of the source for this tenancy */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** A tenancy deposit model */
  deposit: z
    .object({
      /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
      heldBy: z.string().optional(),
      /** The number of weeks or months rent collected as the deposit on the tenancy */
      period: z.number().int().optional(),
      /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */
      type: z.string().optional(),
      /** The amount of deposit held */ sum: z.number().optional()
    })
    .optional(),
  /** A collection of contact / company tenants associated to the tenancy. The first item in the collection is considered the primary relationship. This collection is only populated once a tenant moves into a property and the tenancy status becomes current */
  related: z
    .array(
      /** A summarised view of the details of a contact or company associated to a tenancy */
      z.object({
        /** The unique identifier of the contact or company */
        id: z.string().optional(),
        /** The complete name of the contact or company */
        name: z.string().optional(),
        /** The title of the contact (Available when 'type' is 'contact') */
        title: z.string().optional(),
        /** The forename of the contact (Available when 'type' is 'contact') */
        forename: z.string().optional(),
        /** The surname of the contact (Available when 'type' is 'contact') */
        surname: z.string().optional(),
        /** The date of birth of the contact (Available when 'type' is 'contact') */
        dateOfBirth: z.string().optional(),
        /** The type of the contact (company/contact) */
        type: z.string().optional(),
        /** The home phone number of the contact or company */
        homePhone: z.string().optional(),
        /** The work phone number of the contact or company */
        workPhone: z.string().optional(),
        /** The mobile phone number of the contact or company */
        mobilePhone: z.string().optional(),
        /** The email address of the contact or company */
        email: z.string().optional(),
        /** An optional payment reference to be used for transactions related to this tenancy associated with this tenant */
        paymentReference: z.string().optional(),
        /** A flag denoting whether or not this roie on the system is now archived */
        fromArchive: z.boolean().optional(),
        /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
        marketingConsent: z.string().optional(),
        /** Representation of the physical address of a building or premise */
        primaryAddress: z
          .object({
            /** The building name */ buildingName: z.string().optional(),
            /** The building number */ buildingNumber: z.string().optional(),
            /** The first line of the address */ line1: z.string().optional(),
            /** The second line of the address */ line2: z.string().optional(),
            /** The third line of the address */ line3: z.string().optional(),
            /** The fourth line of the address */ line4: z.string().optional(),
            /** The postcode */ postcode: z.string().optional(),
            /** The ISO-3166 country code that the address resides within */
            countryId: z.string().optional()
          })
          .optional(),
        /** The date the tenant moved in (or will move in) to the property */
        occupyOn: z.string().optional(),
        /** The date the tenant vacated (or is due to vacate) the property */
        vacateOn: z.string().optional(),
        /** A collection of additional contact details */
        additionalContactDetails: z
          .array(
            /** Representation of additional contact details */
            z.object({
              /** The type of contact detail */ type: z.string().optional(),
              /** The contact detail */ value: z.string().optional()
            })
          )
          .optional()
      })
    )
    .optional(),
  /** A flag denoting whether or not this tenancy is archived */
  fromArchive: z.boolean().optional(),
  /** App specific metadata that has been set against the tenancy */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** Financial notes set against the tenancy */
  feeNotes: z.string().optional(),
  /** The identifier of the legal status to set against the tenancy */
  legalStatusId: z.string().optional(),
  /** Representation of renewal options in a tenancy */
  renewalOptions: z
    .object({
      /** The unique identifier of the renewal option */
      optionId: z.string().optional(),
      /** The associated renewal option text */
      optionText: z.string().optional(),
      /** The renewal option expiry date */ expiry: z.string().optional(),
      /** The renewal options associated condition Ids */
      conditionIds: z.array(z.string()).optional()
    })
    .optional(),
  /** Representation of tenancy arrears data (populated only when Client Accounts functionality is enabled) */
  arrears: z
    .object({
      /** A flag determining whether or not tenancy arrears should be chased */
      chaseArrears: z.boolean().optional(),
      /** Indicates whether or not a payment plan is set up for a tenancy in arrears (no/yes/negotiating) */
      paymentPlan: z.string().optional()
    })
    .optional(),
  /** The ETag for the current version of the tenancy. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const tenancyModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a tenancy */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the tenancy */ id: z.string().optional(),
        /** The date and time when the tenancy was created */
        created: z.string().optional(),
        /** The date and time when the tenancy was last modified */
        modified: z.string().optional(),
        /** The start date of the tenancy */ startDate: z.string().optional(),
        /** The end date of the tenancy */ endDate: z.string().optional(),
        /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
        status: z.string().optional(),
        /** The role that the agent is performing for this tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
        agentRole: z.string().optional(),
        /** The amount of rent required, returned in relation to the collection frequency
Note that this is the original rent set on the tenancy. For tenancies that have been extended with a rent change you MUST use the extensions endpoint */
        rent: z.number().optional(),
        /** The rent collection frequency (weekly/monthly/annually) */
        rentFrequency: z.string().optional(),
        /** A flag determining whether or not the tenancy is confirmed to finish at the end date */
        endDateConfirmed: z.boolean().optional(),
        /** A flag determining whether or not the tenancy has been extended indefinitely */
        isPeriodic: z.boolean().optional(),
        /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
        rentInstalmentsFrequency: z.string().optional(),
        /** The amount due for each rent instalment (where specified) */
        rentInstalmentsAmount: z.number().optional(),
        /** The date that the first instalment is due */
        rentInstalmentsStart: z.string().optional(),
        /** The recorded utility reading for the gas meter */
        meterReadingGas: z.string().optional(),
        /** Date of when the reading of gas utility was last recorded */
        meterReadingGasLastRead: z.string().optional(),
        /** The recorded utility reading for the electricity meter */
        meterReadingElectricity: z.string().optional(),
        /** Date of when the reading of electricity utility was last recorded */
        meterReadingElectricityLastRead: z.string().optional(),
        /** The recorded utility reading for the water meter */
        meterReadingWater: z.string().optional(),
        /** Date of when the reading of water utility was last recorded */
        meterReadingWaterLastRead: z.string().optional(),
        /** The unique identifier of the type of tenancy */
        typeId: z.string().optional(),
        /** The unique identifier of the negotiator who is managing the tenancy */
        negotiatorId: z.string().optional(),
        /** The unique identifier of the property that relates to the tenancy */
        propertyId: z.string().optional(),
        /** The unique identifier of the applicant who has applied to be a tenant. Whilst the tenancy is an in arranging state, information about the individual such as name and contact details can be obtained from GET /applicants/{id}. Use the link in the _links collection for a relative URI */
        applicantId: z.string().optional(),
        /** The unique identifier of the negotiator assigned as the manager of the tenancy */
        managerId: z.string().optional(),
        /** An optional payment reference to be used for transactions related to this tenancy associated with all tenants in the property */
        groupPaymentReference: z.string().optional(),
        /** Representation of the tenancy letting fee */
        lettingFee: z
          .object({
            /** The letting fee type (percentage/fixed) */
            type: z.string().optional(),
            /** The fee amount */ amount: z.number().optional(),
            /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
            frequency: z.string().optional()
          })
          .optional(),
        /** Representation of the tenancy management fee */
        managementFee: z
          .object({
            /** The management fee type (percentage/fixed) */
            type: z.string().optional(),
            /** The fee amount */ amount: z.number().optional(),
            /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
            frequency: z.string().optional()
          })
          .optional(),
        /** A tenancy source of enquiry */
        source: z
          .object({
            /** The unique identifier of the source for this tenancy */
            id: z.string().optional(),
            /** The source type (office/source) */ type: z.string().optional()
          })
          .optional(),
        /** A tenancy deposit model */
        deposit: z
          .object({
            /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
            heldBy: z.string().optional(),
            /** The number of weeks or months rent collected as the deposit on the tenancy */
            period: z.number().int().optional(),
            /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */
            type: z.string().optional(),
            /** The amount of deposit held */ sum: z.number().optional()
          })
          .optional(),
        /** A collection of contact / company tenants associated to the tenancy. The first item in the collection is considered the primary relationship. This collection is only populated once a tenant moves into a property and the tenancy status becomes current */
        related: z
          .array(
            /** A summarised view of the details of a contact or company associated to a tenancy */
            z.object({
              /** The unique identifier of the contact or company */
              id: z.string().optional(),
              /** The complete name of the contact or company */
              name: z.string().optional(),
              /** The title of the contact (Available when 'type' is 'contact') */
              title: z.string().optional(),
              /** The forename of the contact (Available when 'type' is 'contact') */
              forename: z.string().optional(),
              /** The surname of the contact (Available when 'type' is 'contact') */
              surname: z.string().optional(),
              /** The date of birth of the contact (Available when 'type' is 'contact') */
              dateOfBirth: z.string().optional(),
              /** The type of the contact (company/contact) */
              type: z.string().optional(),
              /** The home phone number of the contact or company */
              homePhone: z.string().optional(),
              /** The work phone number of the contact or company */
              workPhone: z.string().optional(),
              /** The mobile phone number of the contact or company */
              mobilePhone: z.string().optional(),
              /** The email address of the contact or company */
              email: z.string().optional(),
              /** An optional payment reference to be used for transactions related to this tenancy associated with this tenant */
              paymentReference: z.string().optional(),
              /** A flag denoting whether or not this roie on the system is now archived */
              fromArchive: z.boolean().optional(),
              /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
              marketingConsent: z.string().optional(),
              /** Representation of the physical address of a building or premise */
              primaryAddress: z
                .object({
                  /** The building name */ buildingName: z.string().optional(),
                  /** The building number */
                  buildingNumber: z.string().optional(),
                  /** The first line of the address */
                  line1: z.string().optional(),
                  /** The second line of the address */
                  line2: z.string().optional(),
                  /** The third line of the address */
                  line3: z.string().optional(),
                  /** The fourth line of the address */
                  line4: z.string().optional(),
                  /** The postcode */ postcode: z.string().optional(),
                  /** The ISO-3166 country code that the address resides within */
                  countryId: z.string().optional()
                })
                .optional(),
              /** The date the tenant moved in (or will move in) to the property */
              occupyOn: z.string().optional(),
              /** The date the tenant vacated (or is due to vacate) the property */
              vacateOn: z.string().optional(),
              /** A collection of additional contact details */
              additionalContactDetails: z
                .array(
                  /** Representation of additional contact details */
                  z.object({
                    /** The type of contact detail */
                    type: z.string().optional(),
                    /** The contact detail */ value: z.string().optional()
                  })
                )
                .optional()
            })
          )
          .optional(),
        /** A flag denoting whether or not this tenancy is archived */
        fromArchive: z.boolean().optional(),
        /** App specific metadata that has been set against the tenancy */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** Financial notes set against the tenancy */
        feeNotes: z.string().optional(),
        /** The identifier of the legal status to set against the tenancy */
        legalStatusId: z.string().optional(),
        /** Representation of renewal options in a tenancy */
        renewalOptions: z
          .object({
            /** The unique identifier of the renewal option */
            optionId: z.string().optional(),
            /** The associated renewal option text */
            optionText: z.string().optional(),
            /** The renewal option expiry date */ expiry: z.string().optional(),
            /** The renewal options associated condition Ids */
            conditionIds: z.array(z.string()).optional()
          })
          .optional(),
        /** Representation of tenancy arrears data (populated only when Client Accounts functionality is enabled) */
        arrears: z
          .object({
            /** A flag determining whether or not tenancy arrears should be chased */
            chaseArrears: z.boolean().optional(),
            /** Indicates whether or not a payment plan is set up for a tenancy in arrears (no/yes/negotiating) */
            paymentPlan: z.string().optional()
          })
          .optional(),
        /** The ETag for the current version of the tenancy. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to set letting fees on a new tenancy */
export const createTenancyLettingFeeModel = z.object({
  /** The letting fee type (percentage/fixed) */ type: z.string().optional(),
  /** The fee amount */ amount: z.number().optional(),
  /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
  frequency: z.string().optional()
})
/** Request body used to set management fees on a new tenancy */
export const createTenancyManagementFeeModel = z.object({
  /** The management fee type (percentage/fixed) */ type: z.string().optional(),
  /** The fee amount */ amount: z.number().optional(),
  /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  frequency: z.string().optional()
})
/** Request body used to set the deposit of a new tenancy */
export const createTenancyDepositModel = z.object({
  /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
  heldBy: z.string().optional(),
  /** The number of weeks or months rent collected as the deposit on the tenancy */
  period: z.number().int().optional(),
  /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */
  type: z.string().optional(),
  /** The amount of deposit held */ sum: z.number().optional()
})
/** Request body used to set the source of a new tenancy */
export const createTenancySourceModel = z.object({
  /** The unique identifier of the source for the tenancy */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** Request body used to create a new tenancy */
export const createTenancyModel = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
  status: z.string().optional(),
  /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string(),
  /** The amount of rent required, returned in relation to the collection frequency */
  rent: z.number(),
  /** The rent collection frequency (weekly/monthly/annually) */
  rentFrequency: z.string(),
  /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
  rentInstalmentsFrequency: z.string().optional(),
  /** The amount due for each rent instalment (where specified) */
  rentInstalmentsAmount: z.number().optional(),
  /** The date that the first instalment is due */
  rentInstalmentsStart: z.string().optional(),
  /** The recorded utility reading for the gas meter */
  meterReadingGas: z.string().optional(),
  /** Date of when the reading of gas utility was last recorded */
  meterReadingGasLastRead: z.string().optional(),
  /** The recorded utility reading for the electricity meter */
  meterReadingElectricity: z.string().optional(),
  /** Date of when the reading of electricity utility was last recorded */
  meterReadingElectricityLastRead: z.string().optional(),
  /** The recorded utility reading for the water meter */
  meterReadingWater: z.string().optional(),
  /** Date of when the reading of water utility was last recorded */
  meterReadingWaterLastRead: z.string().optional(),
  /** A flag determining whether or not the tenancy has been extended indefinitely */
  isPeriodic: z.boolean().optional(),
  /** The unique identifier of the type of tenancy */ typeId: z.string(),
  /** The unique identifier of the negotiator who is managing the tenancy */
  negotiatorId: z.string(),
  /** The unique identifier of the property that relates to the tenancy */
  propertyId: z.string(),
  /** The unique identifier of the applicant who has applied to be a tenant */
  applicantId: z.string(),
  /** Financial notes set against the tenancy */
  feeNotes: z.string().optional(),
  /** Request body used to set letting fees on a new tenancy */
  lettingFee: z
    .object({
      /** The letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The fee amount */ amount: z.number().optional(),
      /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
      frequency: z.string().optional()
    })
    .optional(),
  /** Request body used to set management fees on a new tenancy */
  managementFee: z
    .object({
      /** The management fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The fee amount */ amount: z.number().optional(),
      /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
      frequency: z.string().optional()
    })
    .optional(),
  /** Request body used to set the deposit of a new tenancy */
  deposit: z
    .object({
      /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
      heldBy: z.string().optional(),
      /** The number of weeks or months rent collected as the deposit on the tenancy */
      period: z.number().int().optional(),
      /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */
      type: z.string().optional(),
      /** The amount of deposit held */ sum: z.number().optional()
    })
    .optional(),
  /** Request body used to set the source of a new tenancy */
  source: z
    .object({
      /** The unique identifier of the source for the tenancy */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** App specific metadata to set against the tenancy */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body used to set the source of a new tenancy */
export const updateTenancySourceModel = z.object({
  /** The unique identifier of the source for the tenancy */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** Request body used to set the deposit of a tenancy */
export const updateTenancyDepositModel = z.object({
  /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
  heldBy: z.string().optional(),
  /** The number of weeks or months rent collected as the deposit on the tenancy */
  period: z.number().int().optional(),
  /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */
  type: z.string().optional(),
  /** The amount of deposit held */ sum: z.number().optional()
})
/** Request body used to update letting fees on an existing tenancy */
export const updateTenancyLettingFeeModel = z.object({
  /** The letting fee type (percentage/fixed) */ type: z.string().optional(),
  /** The fee amount */ amount: z.number().optional(),
  /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
  frequency: z.string().optional()
})
/** Request body used to update management fees on an existing tenancy */
export const updateTenancyManagementFeeModel = z.object({
  /** The management fee type (percentage/fixed) */ type: z.string().optional(),
  /** The fee amount */ amount: z.number().optional(),
  /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  frequency: z.string().optional()
})
/** Request body used to update an existing Tenancy */
export const updateTenancyModel = z.object({
  /** The start date of the tenancy */ startDate: z.string().optional(),
  /** The end date of the tenancy */ endDate: z.string().optional(),
  /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
  status: z.string().optional(),
  /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
  agentRole: z.string().optional(),
  /** The amount of rent required, returned in relation to the collection frequency */
  rent: z.number().optional(),
  /** The rent collection frequency (weekly/monthly/annually) */
  rentFrequency: z.string().optional(),
  /** Flag for end date confirmation */
  endDateConfirmed: z.boolean().optional(),
  /** A flag determining whether or not the tenancy has been extended indefinitely */
  isPeriodic: z.boolean().optional(),
  /** The unique identifier of the type of tenancy */
  typeId: z.string().optional(),
  /** The unique identifier of the negotiator who is managing the tenancy */
  negotiatorId: z.string().optional(),
  /** Request body used to set the source of a new tenancy */
  source: z
    .object({
      /** The unique identifier of the source for the tenancy */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
  rentInstalmentsFrequency: z.string().optional(),
  /** The amount due for each rent instalment (where specified) */
  rentInstalmentsAmount: z.number().optional(),
  /** The date that the first instalment is due */
  rentInstalmentsStart: z.string().optional(),
  /** The recorded utility reading for the gas meter */
  meterReadingGas: z.string().optional(),
  /** Date of when the reading of gas utility was last recorded */
  meterReadingGasLastRead: z.string().optional(),
  /** The recorded utility reading for the electricity meter */
  meterReadingElectricity: z.string().optional(),
  /** Date of when the reading of electricity utility was last recorded */
  meterReadingElectricityLastRead: z.string().optional(),
  /** The recorded utility reading for the water meter */
  meterReadingWater: z.string().optional(),
  /** Date of when the reading of water utility was last recorded */
  meterReadingWaterLastRead: z.string().optional(),
  /** Financial notes set against the tenancy */
  feeNotes: z.string().optional(),
  /** The identifier of the legal status to set against the tenancy */
  legalStatusId: z.string().optional(),
  /** Request body used to set the deposit of a tenancy */
  deposit: z
    .object({
      /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
      heldBy: z.string().optional(),
      /** The number of weeks or months rent collected as the deposit on the tenancy */
      period: z.number().int().optional(),
      /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */
      type: z.string().optional(),
      /** The amount of deposit held */ sum: z.number().optional()
    })
    .optional(),
  /** Request body used to update letting fees on an existing tenancy */
  lettingFee: z
    .object({
      /** The letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The fee amount */ amount: z.number().optional(),
      /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
      frequency: z.string().optional()
    })
    .optional(),
  /** Request body used to update management fees on an existing tenancy */
  managementFee: z
    .object({
      /** The management fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The fee amount */ amount: z.number().optional(),
      /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
      frequency: z.string().optional()
    })
    .optional(),
  /** App specific metadata to set against the tenancy */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Read model representing a Guarantor */
export const guarantorModel = z.object({
  /** The identifier for the guarantor record */ id: z.string().optional(),
  /** The identifier for the contact record associated with the guarantor */
  guarantorAssociatedId: z.string().optional(),
  /** Value indicating whether a the referenced guarantor is a person or a company */
  type: z.string().optional(),
  /** The status of the reference requested from the guarantor (notSet/requested/received) */
  referenceStatus: z.string().optional()
})
/** Read model representing a tenant/applicant reference */
export const referenceModel = z.object({
  /** The identifier for the reference record */ id: z.string().optional(),
  /** The identifier for the contact/company record associated with the reference */
  referenceAssociatedId: z.string().optional(),
  /** Value indicating whether a referenced contact is a person or a company */
  type: z.string().optional(),
  /** The status of the reference (notSet/requested/received) */
  referenceStatus: z.string().optional(),
  /** The type of reference (notSet/accountant/characterReference/employer/previousLandlord) */
  referenceType: z.string().optional()
})
/** Representation of a relationship between a tenancy and a contact or company */
export const tenancyContactRelationshipModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the tenancy relationship */
  id: z.string().optional(),
  /** The date and time when the relationship was created */
  created: z.string().optional(),
  /** The date and time when the relationship was last modified */
  modified: z.string().optional(),
  /** The unique identifier of the tenancy */ tenancyId: z.string().optional(),
  /** The type of related entity (contact/company) */
  associatedType: z.string().optional(),
  /** The unique identifier of the related contact or company */
  associatedId: z.string().optional(),
  /** A flag denoting whether or not this contact or company should be regarded as the main tenant */
  isMain: z.boolean().optional(),
  /** A flag denoting whether or not this relationship is archived */
  fromArchive: z.boolean().optional(),
  /** Collection of guarantors recorded for this relationship */
  guarantors: z
    .array(
      /** Read model representing a Guarantor */
      z.object({
        /** The identifier for the guarantor record */
        id: z.string().optional(),
        /** The identifier for the contact record associated with the guarantor */
        guarantorAssociatedId: z.string().optional(),
        /** Value indicating whether a the referenced guarantor is a person or a company */
        type: z.string().optional(),
        /** The status of the reference requested from the guarantor (notSet/requested/received) */
        referenceStatus: z.string().optional()
      })
    )
    .optional(),
  /** Collection of references recorded for this relationship */
  references: z
    .array(
      /** Read model representing a tenant/applicant reference */
      z.object({
        /** The identifier for the reference record */
        id: z.string().optional(),
        /** The identifier for the contact/company record associated with the reference */
        referenceAssociatedId: z.string().optional(),
        /** Value indicating whether a referenced contact is a person or a company */
        type: z.string().optional(),
        /** The status of the reference (notSet/requested/received) */
        referenceStatus: z.string().optional(),
        /** The type of reference (notSet/accountant/characterReference/employer/previousLandlord) */
        referenceType: z.string().optional()
      })
    )
    .optional()
})
export const tenancyContactRelationshipModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a relationship between a tenancy and a contact or company */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the tenancy relationship */
        id: z.string().optional(),
        /** The date and time when the relationship was created */
        created: z.string().optional(),
        /** The date and time when the relationship was last modified */
        modified: z.string().optional(),
        /** The unique identifier of the tenancy */
        tenancyId: z.string().optional(),
        /** The type of related entity (contact/company) */
        associatedType: z.string().optional(),
        /** The unique identifier of the related contact or company */
        associatedId: z.string().optional(),
        /** A flag denoting whether or not this contact or company should be regarded as the main tenant */
        isMain: z.boolean().optional(),
        /** A flag denoting whether or not this relationship is archived */
        fromArchive: z.boolean().optional(),
        /** Collection of guarantors recorded for this relationship */
        guarantors: z
          .array(
            /** Read model representing a Guarantor */
            z.object({
              /** The identifier for the guarantor record */
              id: z.string().optional(),
              /** The identifier for the contact record associated with the guarantor */
              guarantorAssociatedId: z.string().optional(),
              /** Value indicating whether a the referenced guarantor is a person or a company */
              type: z.string().optional(),
              /** The status of the reference requested from the guarantor (notSet/requested/received) */
              referenceStatus: z.string().optional()
            })
          )
          .optional(),
        /** Collection of references recorded for this relationship */
        references: z
          .array(
            /** Read model representing a tenant/applicant reference */
            z.object({
              /** The identifier for the reference record */
              id: z.string().optional(),
              /** The identifier for the contact/company record associated with the reference */
              referenceAssociatedId: z.string().optional(),
              /** Value indicating whether a referenced contact is a person or a company */
              type: z.string().optional(),
              /** The status of the reference (notSet/requested/received) */
              referenceStatus: z.string().optional(),
              /** The type of reference (notSet/accountant/characterReference/employer/previousLandlord) */
              referenceType: z.string().optional()
            })
          )
          .optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
export const tenancyCheckModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the tenancy check */ id: z.string().optional(),
  /** The date and time when the tenancy check was created */
  created: z.string().optional(),
  /** The date and time when the tenancy check was last modified */
  modified: z.string().optional(),
  /** Textual description of what the tenancy check relates to */
  description: z.string().optional(),
  /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
  status: z.string().optional(),
  /** The type of the tenancy check (preTenancy/postTenancy) */
  type: z.string().optional(),
  /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  checkTypeId: z.string().optional(),
  /** The unique identifier of the tenancy that this check relates to */
  tenancyId: z.string().optional(),
  /** App specific metadata that has been set against the tenancy check */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const tenancyCheckModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the tenancy check */
        id: z.string().optional(),
        /** The date and time when the tenancy check was created */
        created: z.string().optional(),
        /** The date and time when the tenancy check was last modified */
        modified: z.string().optional(),
        /** Textual description of what the tenancy check relates to */
        description: z.string().optional(),
        /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
        status: z.string().optional(),
        /** The type of the tenancy check (preTenancy/postTenancy) */
        type: z.string().optional(),
        /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
        checkTypeId: z.string().optional(),
        /** The unique identifier of the tenancy that this check relates to */
        tenancyId: z.string().optional(),
        /** App specific metadata that has been set against the tenancy check */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new tenancy check */
export const createTenancyCheckModel = z.object({
  /** Short, descriptive text describing the purpose of the check. This should be populated
when creating a custom tenancy check that does not match any of the existing pre-configured
tenancy check options.
Description and CheckTypeId must not be supplied in the same payload, but at least one must be provided */
  description: z.string().optional(),
  /** The type of the tenancy check (preTenancy/postTenancy) */
  type: z.string(),
  /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
  status: z.string(),
  /** The identifier of the pre-configured tenancy check. This should be populated
when an existing tenancy check configuration is desired, rather than a custom one
CheckTypeId and Description must not be supplied in the same payload, but at least one must be provided */
  checkTypeId: z.string().optional(),
  /** App specific metadata to set against the tenancy check */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Model for updat of an existing tenancy check */
export const updateTenancyCheckModel = z.object({
  /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
  status: z.string().optional(),
  /** App specific metadata to set against the tenancy check */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Representation of a tenancy break clauses break from details */
export const tenancyBreakClauseBreakFromModel = z.object({
  /** The earliest date at which the tenant/landlord can end the tenancy agreement */
  date: z.string().optional(),
  /** The minimum number of months from the break clause agreement becoming active at which the tenant/landlord can end the tenancy agreement */
  minTermMonths: z.number().int().optional()
})
/** Representation of a tenancy break clauses notice requirements */
export const tenancyBreakClauseNoticeRequiredModel = z.object({
  /** The latest date at which the tenant/landlord must give notice of their decision to end the agreement */
  date: z.string().optional(),
  /** The minimum number of months before the break clause can be invoked at which the tenant/landlord must give notice of their decision to end the tenancy agreement */
  beforeBreakMonths: z.number().int().optional()
})
/** Representation of party agreements to a specific clause in a tenancy agreement */
export const tenancyAgreementModel = z.object({
  /** A flag to determine if the landlord has agreed */
  landlord: z.boolean().optional(),
  /** A flag to determine if the tenant has agreed */
  tenant: z.boolean().optional()
})
/** Representation of a tenancy break clause */
export const tenancyBreakClauseModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the break clause */ id: z.string().optional(),
  /** The date and time when the break clause was created */
  created: z.string().optional(),
  /** The date and time when the break clause last modified */
  modified: z.string().optional(),
  /** The identifier of the associated break clause */
  clauseTypeId: z.string().optional(),
  /** The break clauses description */ description: z.string().optional(),
  /** The date the break clause became (or becomes) active */
  active: z.string().optional(),
  /** The parties that the break clause applies to (landlord/tenant/mutual) */
  appliesTo: z.string().optional(),
  /** Tenancy agreement text relating to the break clause */
  letterText: z.string().optional(),
  /** Representation of a tenancy break clauses break from details */
  breakFrom: z
    .object({
      /** The earliest date at which the tenant/landlord can end the tenancy agreement */
      date: z.string().optional(),
      /** The minimum number of months from the break clause agreement becoming active at which the tenant/landlord can end the tenancy agreement */
      minTermMonths: z.number().int().optional()
    })
    .optional(),
  /** Representation of a tenancy break clauses notice requirements */
  noticeRequired: z
    .object({
      /** The latest date at which the tenant/landlord must give notice of their decision to end the agreement */
      date: z.string().optional(),
      /** The minimum number of months before the break clause can be invoked at which the tenant/landlord must give notice of their decision to end the tenancy agreement */
      beforeBreakMonths: z.number().int().optional()
    })
    .optional(),
  /** Representation of party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */
      landlord: z.boolean().optional(),
      /** A flag to determine if the tenant has agreed */
      tenant: z.boolean().optional()
    })
    .optional(),
  /** The unique identifier of the associated tenancy */
  tenancyId: z.string().optional(),
  /** The ETag for the current version of the break clause. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const tenancyBreakClauseModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a tenancy break clause */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the break clause */
        id: z.string().optional(),
        /** The date and time when the break clause was created */
        created: z.string().optional(),
        /** The date and time when the break clause last modified */
        modified: z.string().optional(),
        /** The identifier of the associated break clause */
        clauseTypeId: z.string().optional(),
        /** The break clauses description */ description: z.string().optional(),
        /** The date the break clause became (or becomes) active */
        active: z.string().optional(),
        /** The parties that the break clause applies to (landlord/tenant/mutual) */
        appliesTo: z.string().optional(),
        /** Tenancy agreement text relating to the break clause */
        letterText: z.string().optional(),
        /** Representation of a tenancy break clauses break from details */
        breakFrom: z
          .object({
            /** The earliest date at which the tenant/landlord can end the tenancy agreement */
            date: z.string().optional(),
            /** The minimum number of months from the break clause agreement becoming active at which the tenant/landlord can end the tenancy agreement */
            minTermMonths: z.number().int().optional()
          })
          .optional(),
        /** Representation of a tenancy break clauses notice requirements */
        noticeRequired: z
          .object({
            /** The latest date at which the tenant/landlord must give notice of their decision to end the agreement */
            date: z.string().optional(),
            /** The minimum number of months before the break clause can be invoked at which the tenant/landlord must give notice of their decision to end the tenancy agreement */
            beforeBreakMonths: z.number().int().optional()
          })
          .optional(),
        /** Representation of party agreements to a specific clause in a tenancy agreement */
        agreements: z
          .object({
            /** A flag to determine if the landlord has agreed */
            landlord: z.boolean().optional(),
            /** A flag to determine if the tenant has agreed */
            tenant: z.boolean().optional()
          })
          .optional(),
        /** The unique identifier of the associated tenancy */
        tenancyId: z.string().optional(),
        /** The ETag for the current version of the break clause. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to set party agreements to a specific clause in a tenancy agreement */
export const createTenancyAgreementModel = z.object({
  /** A flag to determine if the landlord has agreed */
  landlord: z.boolean().optional(),
  /** A flag to determine if the tenant has agreed */
  tenant: z.boolean().optional()
})
/** Request body used to set a break clauses break from details */
export const createTenancyBreakFromModel = z.object({
  /** The date the break from clause can be used */ date: z.string().optional(),
  /** The minimum number of months until the break clause can be used */
  minTermMonths: z.number().int().optional()
})
/** Request body used to set a break clauses notice required details */
export const createTenancyNoticeRequiredModel = z.object({
  /** The date a break clauses notice is required by */
  date: z.string().optional(),
  /** The number of months the notice is required before the break clause */
  beforeBreakMonths: z.number().int().optional()
})
/** Request body used to update tenancy break clause */
export const createTenancyBreakClauseModel = z.object({
  /** The identifier of the associated to the break clause */
  typeId: z.string().optional(),
  /** The date the break clause becomes/became active */
  active: z.string().optional(),
  /** The responsible party (landlord/tenant/mutual) */
  appliesTo: z.string().optional(),
  /** Request body used to set party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */
      landlord: z.boolean().optional(),
      /** A flag to determine if the tenant has agreed */
      tenant: z.boolean().optional()
    })
    .optional(),
  /** Request body used to set a break clauses break from details */
  breakFrom: z
    .object({
      /** The date the break from clause can be used */
      date: z.string().optional(),
      /** The minimum number of months until the break clause can be used */
      minTermMonths: z.number().int().optional()
    })
    .optional(),
  /** Request body used to set a break clauses notice required details */
  noticeRequired: z
    .object({
      /** The date a break clauses notice is required by */
      date: z.string().optional(),
      /** The number of months the notice is required before the break clause */
      beforeBreakMonths: z.number().int().optional()
    })
    .optional()
})
/** Request body used to set party agreements to a specific clause in a tenancy agreement */
export const updateTenancyAgreementModel = z.object({
  /** A flag to determine if the landlord has agreed */
  landlord: z.boolean().optional(),
  /** A flag to determine if the tenant has agreed */
  tenant: z.boolean().optional()
})
/** Request body used to set a break clauses break from details */
export const updateTenancyBreakFromModel = z.object({
  /** The date the break from clause can be used */ date: z.string().optional(),
  /** The minimum number of months until the break clause can be used */
  minTermMonths: z.number().int().optional()
})
/** Request body used to set a break clauses notice required details */
export const updateTenancyNoticeRequiredModel = z.object({
  /** The date a break clauses notice is required by */
  date: z.string().optional(),
  /** The number of months the notice is required before the break clause */
  beforeBreakMonths: z.number().int().optional()
})
/** Request body used to update tenancy break clause */
export const updateTenancyBreakClauseModel = z.object({
  /** The date the break clause becomes/became active */
  active: z.string().optional(),
  /** The responsible party (landlord/tenant/mutual) */
  appliesTo: z.string().optional(),
  /** Request body used to set party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */
      landlord: z.boolean().optional(),
      /** A flag to determine if the tenant has agreed */
      tenant: z.boolean().optional()
    })
    .optional(),
  /** Request body used to set a break clauses break from details */
  breakFrom: z
    .object({
      /** The date the break from clause can be used */
      date: z.string().optional(),
      /** The minimum number of months until the break clause can be used */
      minTermMonths: z.number().int().optional()
    })
    .optional(),
  /** Request body used to set a break clauses notice required details */
  noticeRequired: z
    .object({
      /** The date a break clauses notice is required by */
      date: z.string().optional(),
      /** The number of months the notice is required before the break clause */
      beforeBreakMonths: z.number().int().optional()
    })
    .optional()
})
/** Representation of a tenancy allowance */
export const tenancyAllowanceModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the allowance */ id: z.string().optional(),
  /** The date and time when the allowance was created */
  created: z.string().optional(),
  /** The date and time when the allowance last modified */
  modified: z.string().optional(),
  /** The identifier of the associated allowance */
  typeId: z.string().optional(),
  /** The break clauses description */ description: z.string().optional(),
  /** The state of the allowance (allowed/notAllowed) */
  state: z.string().optional(),
  /** Representation of party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */
      landlord: z.boolean().optional(),
      /** A flag to determine if the tenant has agreed */
      tenant: z.boolean().optional()
    })
    .optional(),
  /** Tenancy agreement text that relates to the allowance */
  letterText: z.string().optional(),
  /** The unique identifier of the associated tenancy */
  tenancyId: z.string().optional(),
  /** The ETag for the current version of the allowance. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const tenancyAllowanceModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a tenancy allowance */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the allowance */ id: z.string().optional(),
        /** The date and time when the allowance was created */
        created: z.string().optional(),
        /** The date and time when the allowance last modified */
        modified: z.string().optional(),
        /** The identifier of the associated allowance */
        typeId: z.string().optional(),
        /** The break clauses description */ description: z.string().optional(),
        /** The state of the allowance (allowed/notAllowed) */
        state: z.string().optional(),
        /** Representation of party agreements to a specific clause in a tenancy agreement */
        agreements: z
          .object({
            /** A flag to determine if the landlord has agreed */
            landlord: z.boolean().optional(),
            /** A flag to determine if the tenant has agreed */
            tenant: z.boolean().optional()
          })
          .optional(),
        /** Tenancy agreement text that relates to the allowance */
        letterText: z.string().optional(),
        /** The unique identifier of the associated tenancy */
        tenancyId: z.string().optional(),
        /** The ETag for the current version of the allowance. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to set a tenancy allowance */
export const createTenancyAllowanceModel = z.object({
  /** The identifier of the associated to the allowance */
  typeId: z.string().optional(),
  /** The state of the allowance (allowed/notAllowed) */
  state: z.string().optional(),
  /** Request body used to set party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */
      landlord: z.boolean().optional(),
      /** A flag to determine if the tenant has agreed */
      tenant: z.boolean().optional()
    })
    .optional()
})
/** Request body used to update tenancy allowance */
export const updateTenancyAllowanceModel = z.object({
  /** The state of the allowance (allowed/notAllowed) */
  state: z.string().optional(),
  /** Request body used to set party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */
      landlord: z.boolean().optional(),
      /** A flag to determine if the tenant has agreed */
      tenant: z.boolean().optional()
    })
    .optional()
})
/** Representation of a tenancies responsibility */
export const tenancyResponsibilityModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the responsibility */ id: z.string().optional(),
  /** The date and time when the responsibility was created */
  created: z.string().optional(),
  /** The date and time when the responsibility last modified */
  modified: z.string().optional(),
  /** The identifier of the associated to the responsibility */
  typeId: z.string().optional(),
  /** The responsibilities description */ description: z.string().optional(),
  /** The responsible party (landlord/tenant) */
  appliesTo: z.string().optional(),
  /** Representation of party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */
      landlord: z.boolean().optional(),
      /** A flag to determine if the tenant has agreed */
      tenant: z.boolean().optional()
    })
    .optional(),
  /** Tenancy agreement text that relates to the responsibility */
  letterText: z.string().optional(),
  /** The unique identifier of the associated tenancy */
  tenancyId: z.string().optional(),
  /** The ETag for the current version of the responsibility. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const tenancyResponsibilityModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a tenancies responsibility */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the responsibility */
        id: z.string().optional(),
        /** The date and time when the responsibility was created */
        created: z.string().optional(),
        /** The date and time when the responsibility last modified */
        modified: z.string().optional(),
        /** The identifier of the associated to the responsibility */
        typeId: z.string().optional(),
        /** The responsibilities description */
        description: z.string().optional(),
        /** The responsible party (landlord/tenant) */
        appliesTo: z.string().optional(),
        /** Representation of party agreements to a specific clause in a tenancy agreement */
        agreements: z
          .object({
            /** A flag to determine if the landlord has agreed */
            landlord: z.boolean().optional(),
            /** A flag to determine if the tenant has agreed */
            tenant: z.boolean().optional()
          })
          .optional(),
        /** Tenancy agreement text that relates to the responsibility */
        letterText: z.string().optional(),
        /** The unique identifier of the associated tenancy */
        tenancyId: z.string().optional(),
        /** The ETag for the current version of the responsibility. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to set a tenancy responsibility */
export const createTenancyResponsibilityModel = z.object({
  /** The identifier of the associated to the responsibility */
  typeId: z.string().optional(),
  /** The responsible party (landlord/tenant) */
  appliesTo: z.string().optional(),
  /** Request body used to set party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */
      landlord: z.boolean().optional(),
      /** A flag to determine if the tenant has agreed */
      tenant: z.boolean().optional()
    })
    .optional()
})
/** Request body used to update tenancy responsibility */
export const updateTenancyResponsibilityModel = z.object({
  /** The responsible party (landlord/tenant) */
  appliesTo: z.string().optional(),
  /** Request body used to set party agreements to a specific clause in a tenancy agreement */
  agreements: z
    .object({
      /** A flag to determine if the landlord has agreed */
      landlord: z.boolean().optional(),
      /** A flag to determine if the tenant has agreed */
      tenant: z.boolean().optional()
    })
    .optional()
})
/** Represents rent changes in a tenancies renewal */
export const tenancyRentChangeModel = z.object({
  /** The amount the rent has changed in the renewal */
  amount: z.number().optional(),
  /** The percentage the rent has changed in the renewal */
  percentage: z.number().optional()
})
/** Represents a tenancies renewal negotiation */
export const tenancyRenewalModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the renewal negotiation */
  id: z.string().optional(),
  /** The date and time when the renewal was created */
  created: z.string().optional(),
  /** The date and time when the renewal was last modified */
  modified: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  /** The status of the renewal (notStarted/started/negotiating/renewed/tenantTerminated/landlordTerminated/periodic) */
  status: z.string().optional(),
  /** The unique identifier of the negotiator associated to the renewal */
  negotiatorId: z.string().optional(),
  /** The tenancies rent amount */ rent: z.number().optional(),
  /** The rent collection frequency (weekly/monthly/4weeks/annually) */
  rentFrequency: z.string().optional(),
  /** Represents rent changes in a tenancies renewal */
  rentChange: z
    .object({
      /** The amount the rent has changed in the renewal */
      amount: z.number().optional(),
      /** The percentage the rent has changed in the renewal */
      percentage: z.number().optional()
    })
    .optional(),
  /** The unique identifier of the tenancy associated to the renewal */
  tenancyId: z.string().optional(),
  /** Representation of the tenancy letting fee */
  lettingFee: z
    .object({
      /** The letting fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The fee amount */ amount: z.number().optional(),
      /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
      frequency: z.string().optional()
    })
    .optional(),
  /** Representation of the tenancy management fee */
  managementFee: z
    .object({
      /** The management fee type (percentage/fixed) */
      type: z.string().optional(),
      /** The fee amount */ amount: z.number().optional(),
      /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
      frequency: z.string().optional()
    })
    .optional(),
  /** The ETag for the current version of the tenancy renewal. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const tenancyRenewalModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Represents a tenancies renewal negotiation */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the renewal negotiation */
        id: z.string().optional(),
        /** The date and time when the renewal was created */
        created: z.string().optional(),
        /** The date and time when the renewal was last modified */
        modified: z.string().optional(),
        startDate: z.string().optional(),
        endDate: z.string().optional(),
        /** The status of the renewal (notStarted/started/negotiating/renewed/tenantTerminated/landlordTerminated/periodic) */
        status: z.string().optional(),
        /** The unique identifier of the negotiator associated to the renewal */
        negotiatorId: z.string().optional(),
        /** The tenancies rent amount */ rent: z.number().optional(),
        /** The rent collection frequency (weekly/monthly/4weeks/annually) */
        rentFrequency: z.string().optional(),
        /** Represents rent changes in a tenancies renewal */
        rentChange: z
          .object({
            /** The amount the rent has changed in the renewal */
            amount: z.number().optional(),
            /** The percentage the rent has changed in the renewal */
            percentage: z.number().optional()
          })
          .optional(),
        /** The unique identifier of the tenancy associated to the renewal */
        tenancyId: z.string().optional(),
        /** Representation of the tenancy letting fee */
        lettingFee: z
          .object({
            /** The letting fee type (percentage/fixed) */
            type: z.string().optional(),
            /** The fee amount */ amount: z.number().optional(),
            /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
            frequency: z.string().optional()
          })
          .optional(),
        /** Representation of the tenancy management fee */
        managementFee: z
          .object({
            /** The management fee type (percentage/fixed) */
            type: z.string().optional(),
            /** The fee amount */ amount: z.number().optional(),
            /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
            frequency: z.string().optional()
          })
          .optional(),
        /** The ETag for the current version of the tenancy renewal. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a tenancy renewals letting fee */
export const createLettingFeeRenewalModel = z.object({
  /** The letting fee type (fixed/perentage) */ type: z.string().optional(),
  /** The letting fee amount as a fixed price or percentage based on the `type` */
  amount: z.number().optional(),
  /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
  frequency: z.string().optional()
})
/** Request body used to create a tenancy renewals management fee */
export const createManagementFeeRenewalModel = z.object({
  /** The mangement fee type (fixed/perentage) */ type: z.string().optional(),
  /** The mangement fee amount as a fixed price or percentage based on the `type` */
  amount: z.number().optional(),
  /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  frequency: z.string().optional()
})
/** Request body used to create a tenancy renewal negotiation */
export const createTenancyRenewalModel = z.object({
  /** The proposed start date of the tenancy renewal */
  startDate: z.string().optional(),
  /** The proposed end date of the tenancy renewal */
  endDate: z.string().optional(),
  /** The unique identifier of the negotiator who is managing this tenancy renewal */
  negotiatorId: z.string().optional(),
  /** The amount of rent required, returned in relation to the collection frequency */
  rent: z.number().optional(),
  /** The rent collection frequency (weekly/monthly/annually) */
  rentFrequency: z.string().optional(),
  /** Request body used to create a tenancy renewals letting fee */
  lettingFee: z
    .object({
      /** The letting fee type (fixed/perentage) */ type: z.string().optional(),
      /** The letting fee amount as a fixed price or percentage based on the `type` */
      amount: z.number().optional(),
      /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
      frequency: z.string().optional()
    })
    .optional(),
  /** Request body used to create a tenancy renewals management fee */
  managementFee: z
    .object({
      /** The mangement fee type (fixed/perentage) */
      type: z.string().optional(),
      /** The mangement fee amount as a fixed price or percentage based on the `type` */
      amount: z.number().optional(),
      /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
      frequency: z.string().optional()
    })
    .optional()
})
/** Request body used to update a tenancy renewals letting fee */
export const updateLettingFeeRenewalModel = z.object({
  /** The letting fee type (fixed/perentage) */ type: z.string().optional(),
  /** The letting fee amount as a fixed price or percentage based on the `type` */
  amount: z.number().optional(),
  /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
  frequency: z.string().optional()
})
/** Request body used to update a tenancy renewals management fee */
export const updateManagementFeeRenewalModel = z.object({
  /** The mangement fee type (fixed/perentage) */ type: z.string().optional(),
  /** The mangement fee amount as a fixed price or percentage based on the `type` */
  amount: z.number().optional(),
  /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
  frequency: z.string().optional()
})
/** Request body used to update a tenancy renewal negotiation */
export const updateTenancyRenewalModel = z.object({
  /** The proposed start date of the tenancy renewal */
  startDate: z.string().optional(),
  /** The proposed end date of the tenancy renewal */
  endDate: z.string().optional(),
  /** The unique identifier of the negotiator who is managing this tenancy renewal */
  negotiatorId: z.string().optional(),
  /** The amount of rent required, returned in relation to the collection frequency */
  rent: z.number().optional(),
  /** The rent collection frequency (weekly/monthly/annually) */
  rentFrequency: z.string().optional(),
  /** Request body used to update a tenancy renewals letting fee */
  lettingFee: z
    .object({
      /** The letting fee type (fixed/perentage) */ type: z.string().optional(),
      /** The letting fee amount as a fixed price or percentage based on the `type` */
      amount: z.number().optional(),
      /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
      frequency: z.string().optional()
    })
    .optional(),
  /** Request body used to update a tenancy renewals management fee */
  managementFee: z
    .object({
      /** The mangement fee type (fixed/perentage) */
      type: z.string().optional(),
      /** The mangement fee amount as a fixed price or percentage based on the `type` */
      amount: z.number().optional(),
      /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
      frequency: z.string().optional()
    })
    .optional()
})
/** Represents a one off fee associated with tenancy extension or alteration */
export const tenancyExtensionAlterationFeeModel = z.object({
  /** The one fee amount */ amount: z.number().optional(),
  /** The one of fee summary text */ summary: z.string().optional(),
  /** The fee type */ type: z.string().optional()
})
/** Represents a tenancy extension or alteration */
export const tenancyExtensionAlterationModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the extension or alteration */
  id: z.string().optional(),
  /** The date and time when the extension or alteration was created */
  created: z.string().optional(),
  /** The date and time when the extension or alteration was last modified */
  modified: z.string().optional(),
  /** The start date of the extension or alteration */
  startDate: z.string().optional(),
  /** The end date of the extension (alterations do not have an end date) */
  endDate: z.string().optional(),
  /** The type of entry (extension|alteration) */ type: z.string().optional(),
  /** The unique identifier of the negotiator associated to the extension or alteration */
  negotiatorId: z.string().optional(),
  /** The extension or alteration rent amount */ rent: z.number().optional(),
  /** The rent frequency (weekly/monthly/4weeks/annually) */
  rentFrequency: z.string().optional(),
  /** The unique identifier of the tenancy associated to the extension or alteration */
  tenancyId: z.string().optional(),
  /** Represents a one off fee associated with tenancy extension or alteration */
  fee: z
    .object({
      /** The one fee amount */ amount: z.number().optional(),
      /** The one of fee summary text */ summary: z.string().optional(),
      /** The fee type */ type: z.string().optional()
    })
    .optional(),
  /** The ETag for the current version of the tenancy extension or alteration. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const tenancyExtensionAlterationModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Represents a tenancy extension or alteration */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the extension or alteration */
        id: z.string().optional(),
        /** The date and time when the extension or alteration was created */
        created: z.string().optional(),
        /** The date and time when the extension or alteration was last modified */
        modified: z.string().optional(),
        /** The start date of the extension or alteration */
        startDate: z.string().optional(),
        /** The end date of the extension (alterations do not have an end date) */
        endDate: z.string().optional(),
        /** The type of entry (extension|alteration) */
        type: z.string().optional(),
        /** The unique identifier of the negotiator associated to the extension or alteration */
        negotiatorId: z.string().optional(),
        /** The extension or alteration rent amount */
        rent: z.number().optional(),
        /** The rent frequency (weekly/monthly/4weeks/annually) */
        rentFrequency: z.string().optional(),
        /** The unique identifier of the tenancy associated to the extension or alteration */
        tenancyId: z.string().optional(),
        /** Represents a one off fee associated with tenancy extension or alteration */
        fee: z
          .object({
            /** The one fee amount */ amount: z.number().optional(),
            /** The one of fee summary text */ summary: z.string().optional(),
            /** The fee type */ type: z.string().optional()
          })
          .optional(),
        /** The ETag for the current version of the tenancy extension or alteration. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Representation of a tenancy renewal check */
export const tenancyRenewalCheckModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the tenancy renewal check */
  id: z.string().optional(),
  /** The date and time when the tenancy renewal check was created */
  created: z.string().optional(),
  /** The date and time when the tenancy renewal check was last modified */
  modified: z.string().optional(),
  /** The status of the tenancy renewal check (needed/notNeeded/arranging/completed) */
  status: z.string().optional(),
  /** Textual description of what the tenancy renewal check relates to */
  description: z.string().optional(),
  /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  checkTypeId: z.string().optional(),
  /** The unique identifier of the tenancy that this check relates to */
  tenancyId: z.string().optional(),
  /** The unique identifier of the renewal that this check relates to */
  renewalId: z.string().optional(),
  /** App specific metadata that has been set against the tenancy renewal check */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const tenancyRenewalCheckModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a tenancy renewal check */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the tenancy renewal check */
        id: z.string().optional(),
        /** The date and time when the tenancy renewal check was created */
        created: z.string().optional(),
        /** The date and time when the tenancy renewal check was last modified */
        modified: z.string().optional(),
        /** The status of the tenancy renewal check (needed/notNeeded/arranging/completed) */
        status: z.string().optional(),
        /** Textual description of what the tenancy renewal check relates to */
        description: z.string().optional(),
        /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
        checkTypeId: z.string().optional(),
        /** The unique identifier of the tenancy that this check relates to */
        tenancyId: z.string().optional(),
        /** The unique identifier of the renewal that this check relates to */
        renewalId: z.string().optional(),
        /** App specific metadata that has been set against the tenancy renewal check */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the teanncy check. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new tenancy renewal check */
export const createTenancyRenewalCheckModel = z.object({
  /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
  status: z.string(),
  /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
  checkTypeId: z.string().optional(),
  /** The name of this tenancy check */ description: z.string().optional(),
  /** App specific metadata to set against the tenancy renewal check */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body used to update a tenancy renewal check */
export const updateTenancyRenewalCheckModel = z.object({
  /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
  status: z.string().optional(),
  /** App specific metadata to set against the tenancy renewal check */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Model representing a transaction */
export const transactionModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the transaction */ id: z.string().optional(),
  /** The date and time when the transaction was created */
  created: z.string().optional(),
  /** The date and time when the transaction was last modified */
  modified: z.string().optional(),
  /** The transaction category (advertisingCharge,accountTransfer,bankCharges,buyerAdminFee,buyerDeposit,buyerPayment,deposit,depositDeduction,depositRefund,depositTransfer,depositTransferToAgent,depositTransferToLandlord,depositTransferToScheme,estateServiceCharge,estateWorksOrder,estateUnitWorksOrder,externalCredit,externalAgentFee,freeholderPayment,float,groundRent,goodwillPayment,holdingDeposit,introducingTenantFee,landlordAdminFee,landlordTax,landlordPayment,landlordToSupplierPayment,landlordWorksOrder,leaseholderAdminFee,leaseholderPayment,leaseholderRepayment,leaseholderWorksOrder,lettingFee,managementFee,paymentSurcharge,receipt,rent,rentGuarantee,recoveryPayment,reserveFund,tenantAdminFee,tenantPayment,tenantToLandlordPayment,tenantToSupplierPayment,trustAccountingInvoice,tenantWorksOrder,vacantManagementFee,vendorAdminFee,vendorCommission,vendorPayment,vendorToSupplierPayment,worksOrderPayment) */
  category: z.string().optional(),
  /** The transaction type (bankersDraft,bankTransfer,cash,cheque,creditCard,debitCard,directDebit,housingBenefit,paymentRequest,standingOrder) */
  type: z.string().optional(),
  /** The type of transaction (credit/debit) */
  transactionType: z.string().optional(),
  /** The transaction description */ description: z.string().optional(),
  /** The status of the transaction (awaitingAuthorisation/awaitingPosting/posted/rejected) */
  status: z.string().optional(),
  /** The ledger the transaction is recorded in */
  ledger: z.string().optional(),
  /** The transaction net amount */ netAmount: z.number().optional(),
  /** The transaction tax amount */ taxAmount: z.number().optional(),
  /** The transaction gross amount */ grossAmount: z.number().optional(),
  /** The amount outstanding that remains to be paid */
  outstanding: z.number().optional(),
  /** The unique identifier of the company the transaction is associated with, where applicable */
  companyId: z.string().optional(),
  /** The unique identifier of the landlord the transaction is associated with, where applicable */
  landlordId: z.string().optional(),
  /** The unique identifier of the property the transaction is associated with, where applicable */
  propertyId: z.string().optional(),
  /** The unique identifier of the tenancy the transaction is associated with, where applicable */
  tenancyId: z.string().optional(),
  /** The ETag for the current version of the transaction. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const transactionModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Model representing a transaction */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the transaction */
        id: z.string().optional(),
        /** The date and time when the transaction was created */
        created: z.string().optional(),
        /** The date and time when the transaction was last modified */
        modified: z.string().optional(),
        /** The transaction category (advertisingCharge,accountTransfer,bankCharges,buyerAdminFee,buyerDeposit,buyerPayment,deposit,depositDeduction,depositRefund,depositTransfer,depositTransferToAgent,depositTransferToLandlord,depositTransferToScheme,estateServiceCharge,estateWorksOrder,estateUnitWorksOrder,externalCredit,externalAgentFee,freeholderPayment,float,groundRent,goodwillPayment,holdingDeposit,introducingTenantFee,landlordAdminFee,landlordTax,landlordPayment,landlordToSupplierPayment,landlordWorksOrder,leaseholderAdminFee,leaseholderPayment,leaseholderRepayment,leaseholderWorksOrder,lettingFee,managementFee,paymentSurcharge,receipt,rent,rentGuarantee,recoveryPayment,reserveFund,tenantAdminFee,tenantPayment,tenantToLandlordPayment,tenantToSupplierPayment,trustAccountingInvoice,tenantWorksOrder,vacantManagementFee,vendorAdminFee,vendorCommission,vendorPayment,vendorToSupplierPayment,worksOrderPayment) */
        category: z.string().optional(),
        /** The transaction type (bankersDraft,bankTransfer,cash,cheque,creditCard,debitCard,directDebit,housingBenefit,paymentRequest,standingOrder) */
        type: z.string().optional(),
        /** The type of transaction (credit/debit) */
        transactionType: z.string().optional(),
        /** The transaction description */ description: z.string().optional(),
        /** The status of the transaction (awaitingAuthorisation/awaitingPosting/posted/rejected) */
        status: z.string().optional(),
        /** The ledger the transaction is recorded in */
        ledger: z.string().optional(),
        /** The transaction net amount */ netAmount: z.number().optional(),
        /** The transaction tax amount */ taxAmount: z.number().optional(),
        /** The transaction gross amount */ grossAmount: z.number().optional(),
        /** The amount outstanding that remains to be paid */
        outstanding: z.number().optional(),
        /** The unique identifier of the company the transaction is associated with, where applicable */
        companyId: z.string().optional(),
        /** The unique identifier of the landlord the transaction is associated with, where applicable */
        landlordId: z.string().optional(),
        /** The unique identifier of the property the transaction is associated with, where applicable */
        propertyId: z.string().optional(),
        /** The unique identifier of the tenancy the transaction is associated with, where applicable */
        tenancyId: z.string().optional(),
        /** The ETag for the current version of the transaction. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Model representing a nominal account */
export const nominalAccountModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the nominal account */ id: z.string().optional(),
  /** The date and time when the nominal account was created */
  created: z.string().optional(),
  /** The date and time when the nominal account was last modified */
  modified: z.string().optional(),
  /** The nominal account name */ name: z.string().optional(),
  /** Flag indicating whether or not the nominal account can be associated with works orders */
  appliesToWorksOrders: z.boolean().optional()
})
export const nominalAccountModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Model representing a nominal account */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the nominal account */
        id: z.string().optional(),
        /** The date and time when the nominal account was created */
        created: z.string().optional(),
        /** The date and time when the nominal account was last modified */
        modified: z.string().optional(),
        /** The nominal account name */ name: z.string().optional(),
        /** Flag indicating whether or not the nominal account can be associated with works orders */
        appliesToWorksOrders: z.boolean().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create a new supplier invoice */
export const createSupplierInvoiceModel = z.object({
  /** The unique identifier of the works order the supplier invoice is associated with, where applicable
Must be provided if propertyId/companyId/tenancyId are not present */
  worksOrderId: z.string().optional(),
  /** The unique identifier of the property the supplier invoice is associated with, where applicable
When providing a propertyId along with a worksOrderId, the id will be validated against the works order to check they match */
  propertyId: z.string().optional(),
  /** The unique identifier of the contractor (company) the supplier invoice is associated with, where applicable
When providing a companyId along with a worksOrderId, the id will be validated against the works order to check they match */
  companyId: z.string().optional(),
  /** The unique identifier of the tenancy the supplier invoice is associated with, where applicable
When providing a tenancyId along with a worksOrderId, the id will be validated against the works order to check they match */
  tenancyId: z.string().optional(),
  /** The supplier invoice work description */ description: z.string(),
  /** The identifier of the nominal account the supplier invoice should be attributed to */
  accountId: z.string(),
  /** The invoice reference */ invoiceRef: z.string(),
  /** The unique identifier of the negotiator the invoice should be attributed to (normally the person creating it on the system) */
  negotiatorId: z.string(),
  /** The invoice date */ invoiceDate: z.string(),
  /** The date the invoice should be paid by */ dueDate: z.string().optional(),
  /** The invoice net amount */ netAmount: z.number(),
  /** The invoice tax amount */ taxAmount: z.number()
})
/** Representation of a vendor's source */
export const vendorSourceModel = z.object({
  /** The unique identifier of the source of the vendor */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** Representation of the physical address of a building or premise */
export const vendorContactAddressModel = z.object({
  /** The building name */ buildingName: z.string().optional(),
  /** The building number */ buildingNumber: z.string().optional(),
  /** The first line of the address */ line1: z.string().optional(),
  /** The second line of the address */ line2: z.string().optional(),
  /** The third line of the address */ line3: z.string().optional(),
  /** The fourth line of the address */ line4: z.string().optional(),
  /** The postcode */ postcode: z.string().optional(),
  /** The ISO-3166 country code that the address resides within */
  countryId: z.string().optional()
})
/** A summarised view of the details of a contact or company associated to a vendor */
export const vendorContactModel = z.object({
  /** The unique identifier of the contact or company */
  id: z.string().optional(),
  /** The complete name of the contact or company */
  name: z.string().optional(),
  /** The title of the contact (Available when 'type' is 'contact') */
  title: z.string().optional(),
  /** The forename of the contact (Available when 'type' is 'contact') */
  forename: z.string().optional(),
  /** The surname of the contact (Available when 'type' is 'contact') */
  surname: z.string().optional(),
  /** The date of birth of the contact (Available when 'type' is 'contact') */
  dateOfBirth: z.string().optional(),
  /** The type of the contact (company/contact) */ type: z.string().optional(),
  /** The home phone number of the contact or company */
  homePhone: z.string().optional(),
  /** The work phone number of the contact or company */
  workPhone: z.string().optional(),
  /** The mobile phone number of the contact or company */
  mobilePhone: z.string().optional(),
  /** The email address of the contact or company */
  email: z.string().optional(),
  /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
  marketingConsent: z.string().optional(),
  /** Flag to determine if this role on the system is now archived */
  fromArchive: z.boolean().optional(),
  /** Representation of the physical address of a building or premise */
  primaryAddress: z
    .object({
      /** The building name */ buildingName: z.string().optional(),
      /** The building number */ buildingNumber: z.string().optional(),
      /** The first line of the address */ line1: z.string().optional(),
      /** The second line of the address */ line2: z.string().optional(),
      /** The third line of the address */ line3: z.string().optional(),
      /** The fourth line of the address */ line4: z.string().optional(),
      /** The postcode */ postcode: z.string().optional(),
      /** The ISO-3166 country code that the address resides within */
      countryId: z.string().optional()
    })
    .optional(),
  /** A collection of additional contact details */
  additionalContactDetails: z
    .array(
      /** Representation of additional contact details */
      z.object({
        /** The type of contact detail */ type: z.string().optional(),
        /** The contact detail */ value: z.string().optional()
      })
    )
    .optional()
})
/** Representation of a vendor */
export const vendorModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the vendor */ id: z.string().optional(),
  /** The date and time when the vendor was created */
  created: z.string().optional(),
  /** The date and time when the vendor was last modified */
  modified: z.string().optional(),
  /** The date the vendor was last called */ lastCall: z.string().optional(),
  /** The date the vendor is next due to be called */
  nextCall: z.string().optional(),
  /** The unique identifier of the type of vendor */
  typeId: z.string().optional(),
  /** The unique identifier of the reason the vendor is selling */
  sellingReasonId: z.string().optional(),
  /** The unique identifier of the solicitor associated to the vendor */
  solicitorId: z.string().optional(),
  /** The unique identifier of the property associated to the vendor */
  propertyId: z.string().optional(),
  /** Representation of a vendor's source */
  source: z
    .object({
      /** The unique identifier of the source of the vendor */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** A collection of contacts and/or companies associated to the vendor. The first item in the collection is considered the primary relationship */
  related: z
    .array(
      /** A summarised view of the details of a contact or company associated to a vendor */
      z.object({
        /** The unique identifier of the contact or company */
        id: z.string().optional(),
        /** The complete name of the contact or company */
        name: z.string().optional(),
        /** The title of the contact (Available when 'type' is 'contact') */
        title: z.string().optional(),
        /** The forename of the contact (Available when 'type' is 'contact') */
        forename: z.string().optional(),
        /** The surname of the contact (Available when 'type' is 'contact') */
        surname: z.string().optional(),
        /** The date of birth of the contact (Available when 'type' is 'contact') */
        dateOfBirth: z.string().optional(),
        /** The type of the contact (company/contact) */
        type: z.string().optional(),
        /** The home phone number of the contact or company */
        homePhone: z.string().optional(),
        /** The work phone number of the contact or company */
        workPhone: z.string().optional(),
        /** The mobile phone number of the contact or company */
        mobilePhone: z.string().optional(),
        /** The email address of the contact or company */
        email: z.string().optional(),
        /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
        marketingConsent: z.string().optional(),
        /** Flag to determine if this role on the system is now archived */
        fromArchive: z.boolean().optional(),
        /** Representation of the physical address of a building or premise */
        primaryAddress: z
          .object({
            /** The building name */ buildingName: z.string().optional(),
            /** The building number */ buildingNumber: z.string().optional(),
            /** The first line of the address */ line1: z.string().optional(),
            /** The second line of the address */ line2: z.string().optional(),
            /** The third line of the address */ line3: z.string().optional(),
            /** The fourth line of the address */ line4: z.string().optional(),
            /** The postcode */ postcode: z.string().optional(),
            /** The ISO-3166 country code that the address resides within */
            countryId: z.string().optional()
          })
          .optional(),
        /** A collection of additional contact details */
        additionalContactDetails: z
          .array(
            /** Representation of additional contact details */
            z.object({
              /** The type of contact detail */ type: z.string().optional(),
              /** The contact detail */ value: z.string().optional()
            })
          )
          .optional()
      })
    )
    .optional(),
  /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact).
When set to contact, any correspondence should be sent to the related contact's address, rather than the property address */
  correspondenceAddressType: z.string().optional(),
  /** The unique identifier of the negotiator attached to the vendor. The first item in the collection is considered the primary negotiator */
  negotiatorId: z.string().optional(),
  /** A collection of unique identifiers of offices attached to the vendor. The first item in the collection is considered the primary office */
  officeIds: z.array(z.string()).optional(),
  /** The date and time the vendor was archived */
  archivedOn: z.string().optional(),
  /** A flag determining whether or not the vendor is archived */
  fromArchive: z.boolean().optional(),
  /** App specific metadata that has been set against the vendor */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the vendor. Used for managing update concurrency */
  _eTag: z.string().optional()
})
/** Representation of a vendor's source */
export const vendorUpdateSourceModel = z.object({
  /** The unique identifier of the source of the vendor */
  id: z.string().optional(),
  /** The source type (office/source) */ type: z.string().optional()
})
/** Request body used to update an existing vendor */
export const updateVendorModel = z.object({
  /** The date the vendor was last called */ lastCall: z.string().optional(),
  /** The date the vendor is next due to be called */
  nextCall: z.string().optional(),
  /** The unique identifier of the type of vendor */
  typeId: z.string().optional(),
  /** The unique identifier of the reason the vendor is selling */
  sellingReasonId: z.string().optional(),
  /** The unique identifier of the vendor's solicitor */
  solicitorId: z.string().optional(),
  /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact) */
  correspondenceAddressType: z.string().optional(),
  /** Representation of a vendor's source */
  source: z
    .object({
      /** The unique identifier of the source of the vendor */
      id: z.string().optional(),
      /** The source type (office/source) */ type: z.string().optional()
    })
    .optional(),
  /** App specific metadata that has been set against the vendor */
  metadata: z.record(z.string(), z.object({})).optional()
})
export const vendorModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a vendor */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the vendor */ id: z.string().optional(),
        /** The date and time when the vendor was created */
        created: z.string().optional(),
        /** The date and time when the vendor was last modified */
        modified: z.string().optional(),
        /** The date the vendor was last called */
        lastCall: z.string().optional(),
        /** The date the vendor is next due to be called */
        nextCall: z.string().optional(),
        /** The unique identifier of the type of vendor */
        typeId: z.string().optional(),
        /** The unique identifier of the reason the vendor is selling */
        sellingReasonId: z.string().optional(),
        /** The unique identifier of the solicitor associated to the vendor */
        solicitorId: z.string().optional(),
        /** The unique identifier of the property associated to the vendor */
        propertyId: z.string().optional(),
        /** Representation of a vendor's source */
        source: z
          .object({
            /** The unique identifier of the source of the vendor */
            id: z.string().optional(),
            /** The source type (office/source) */ type: z.string().optional()
          })
          .optional(),
        /** A collection of contacts and/or companies associated to the vendor. The first item in the collection is considered the primary relationship */
        related: z
          .array(
            /** A summarised view of the details of a contact or company associated to a vendor */
            z.object({
              /** The unique identifier of the contact or company */
              id: z.string().optional(),
              /** The complete name of the contact or company */
              name: z.string().optional(),
              /** The title of the contact (Available when 'type' is 'contact') */
              title: z.string().optional(),
              /** The forename of the contact (Available when 'type' is 'contact') */
              forename: z.string().optional(),
              /** The surname of the contact (Available when 'type' is 'contact') */
              surname: z.string().optional(),
              /** The date of birth of the contact (Available when 'type' is 'contact') */
              dateOfBirth: z.string().optional(),
              /** The type of the contact (company/contact) */
              type: z.string().optional(),
              /** The home phone number of the contact or company */
              homePhone: z.string().optional(),
              /** The work phone number of the contact or company */
              workPhone: z.string().optional(),
              /** The mobile phone number of the contact or company */
              mobilePhone: z.string().optional(),
              /** The email address of the contact or company */
              email: z.string().optional(),
              /** The marketing consent status of the contact (grant/deny/notAsked/unknown) */
              marketingConsent: z.string().optional(),
              /** Flag to determine if this role on the system is now archived */
              fromArchive: z.boolean().optional(),
              /** Representation of the physical address of a building or premise */
              primaryAddress: z
                .object({
                  /** The building name */ buildingName: z.string().optional(),
                  /** The building number */
                  buildingNumber: z.string().optional(),
                  /** The first line of the address */
                  line1: z.string().optional(),
                  /** The second line of the address */
                  line2: z.string().optional(),
                  /** The third line of the address */
                  line3: z.string().optional(),
                  /** The fourth line of the address */
                  line4: z.string().optional(),
                  /** The postcode */ postcode: z.string().optional(),
                  /** The ISO-3166 country code that the address resides within */
                  countryId: z.string().optional()
                })
                .optional(),
              /** A collection of additional contact details */
              additionalContactDetails: z
                .array(
                  /** Representation of additional contact details */
                  z.object({
                    /** The type of contact detail */
                    type: z.string().optional(),
                    /** The contact detail */ value: z.string().optional()
                  })
                )
                .optional()
            })
          )
          .optional(),
        /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact).
When set to contact, any correspondence should be sent to the related contact's address, rather than the property address */
        correspondenceAddressType: z.string().optional(),
        /** The unique identifier of the negotiator attached to the vendor. The first item in the collection is considered the primary negotiator */
        negotiatorId: z.string().optional(),
        /** A collection of unique identifiers of offices attached to the vendor. The first item in the collection is considered the primary office */
        officeIds: z.array(z.string()).optional(),
        /** The date and time the vendor was archived */
        archivedOn: z.string().optional(),
        /** A flag determining whether or not the vendor is archived */
        fromArchive: z.boolean().optional(),
        /** App specific metadata that has been set against the vendor */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the vendor. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Representation of a relationship between a vendor and a contact or company */
export const vendorContactRelationshipModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the vendor relationship */
  id: z.string().optional(),
  /** The unique identifier of the vendor */ vendorId: z.string().optional(),
  /** The date and time when the relationship was created */
  created: z.string().optional(),
  /** The date and time when the relationship was last modified */
  modified: z.string().optional(),
  /** The type of related entity (contact/company) */
  associatedType: z.string().optional(),
  /** The unique identifier of the related contact or company */
  associatedId: z.string().optional(),
  /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent vendor entity */
  isMain: z.boolean().optional()
})
export const vendorContactRelationshipModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a relationship between a vendor and a contact or company */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the vendor relationship */
        id: z.string().optional(),
        /** The unique identifier of the vendor */
        vendorId: z.string().optional(),
        /** The date and time when the relationship was created */
        created: z.string().optional(),
        /** The date and time when the relationship was last modified */
        modified: z.string().optional(),
        /** The type of related entity (contact/company) */
        associatedType: z.string().optional(),
        /** The unique identifier of the related contact or company */
        associatedId: z.string().optional(),
        /** A flag denoting whether or not this relationship should be regarded as the main relationship for the parent vendor entity */
        isMain: z.boolean().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Request body used to create or update a relationship between a vendor and a contact or company */
export const insertVendorContactRelationshipModel = z.object({
  /** The unique identifier of the contact or company to create a relationship with */
  associatedId: z.string(),
  /** The type of relationship to create (contact/company) */
  associatedType: z.string(),
  /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
  isMain: z.boolean()
})
/** Representation of a works order item */
export const worksOrderItemModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the works order item */
  id: z.string().optional(),
  /** The unique identifier of the parent works order */
  worksOrderId: z.string().optional(),
  /** The date and time when the works order item was created */
  created: z.string().optional(),
  /** The date and time when the works order item was last modified */
  modified: z.string().optional(),
  /** The notes attached to the works order item */
  notes: z.string().optional(),
  /** The party to be charged for the work being carried out (landlord/tenant) */
  chargeTo: z.string().optional(),
  /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
  estimate: z.number().optional(),
  /** The type of estimate supplied (agent/verbal/written) */
  estimateType: z.string().optional(),
  /** The net cost of the work to be carried out */
  netAmount: z.number().optional(),
  /** The additional vat cost for the work to be carried out */
  vatAmount: z.number().optional(),
  /** The gross cost of the work to be carried out */
  grossAmount: z.number().optional(),
  /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
  reserveAmount: z.number().optional(),
  /** The unique identifier of the nominal account the works order financial transactions are allocated to */
  nominalAccountId: z.string().optional(),
  /** The ETag for the current version of the works order item. Used for managing update concurrency */
  _eTag: z.string().optional()
})
/** Representation of a works order */
export const worksOrderModel = z.object({
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional(),
  _embedded: z.record(z.string(), z.object({})).optional(),
  /** The unique identifier of the works order */ id: z.string().optional(),
  /** The date and time when the works order was created */
  created: z.string().optional(),
  /** The date and time when the works order was last modified */
  modified: z.string().optional(),
  /** The unique identifier of the company that has been selected to perform the work */
  companyId: z.string().optional(),
  /** The unique identifier of the property where the work is to be carried out */
  propertyId: z.string().optional(),
  /** The unique identifier of the tenancy that the works order originated from */
  tenancyId: z.string().optional(),
  /** The unique identifier of the negotiator that booked the works order */
  negotiatorId: z.string().optional(),
  /** The unique identifier of the type of work that needs to be carried out */
  typeId: z.string().optional(),
  /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  status: z.string().optional(),
  /** A free text description of the work required */
  description: z.string().optional(),
  /** The party requesting the work to be carried out (landlord/tenant/other) */
  reporter: z.string().optional(),
  /** The priority level of the works order (low/medium/high) */
  priority: z.string().optional(),
  /** The date when the works order was booked */ booked: z.string().optional(),
  /** The date when the work is required to be completed by */
  required: z.string().optional(),
  /** The date when the work was completed */ completed: z.string().optional(),
  /** The total net cost for all of the items of work to be carried out */
  totalNetAmount: z.number().optional(),
  /** The total additional vat cost for all of the items of work to be carried out */
  totalVatAmount: z.number().optional(),
  /** The total gross cost for all of the items of work to be carried out */
  totalGrossAmount: z.number().optional(),
  /** A collection of jobs/items of work that the works order should fulfill */
  items: z
    .array(
      /** Representation of a works order item */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the works order item */
        id: z.string().optional(),
        /** The unique identifier of the parent works order */
        worksOrderId: z.string().optional(),
        /** The date and time when the works order item was created */
        created: z.string().optional(),
        /** The date and time when the works order item was last modified */
        modified: z.string().optional(),
        /** The notes attached to the works order item */
        notes: z.string().optional(),
        /** The party to be charged for the work being carried out (landlord/tenant) */
        chargeTo: z.string().optional(),
        /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
        estimate: z.number().optional(),
        /** The type of estimate supplied (agent/verbal/written) */
        estimateType: z.string().optional(),
        /** The net cost of the work to be carried out */
        netAmount: z.number().optional(),
        /** The additional vat cost for the work to be carried out */
        vatAmount: z.number().optional(),
        /** The gross cost of the work to be carried out */
        grossAmount: z.number().optional(),
        /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
        reserveAmount: z.number().optional(),
        /** The unique identifier of the nominal account the works order financial transactions are allocated to */
        nominalAccountId: z.string().optional(),
        /** The ETag for the current version of the works order item. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  /** App specific metadata that has been set against the works order */
  metadata: z.record(z.string(), z.object({})).optional(),
  /** The requested extras fields */
  extrasField: z.record(z.string(), z.object({})).optional(),
  /** The ETag for the current version of the works order. Used for managing update concurrency */
  _eTag: z.string().optional()
})
export const worksOrderModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a works order */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the works order */
        id: z.string().optional(),
        /** The date and time when the works order was created */
        created: z.string().optional(),
        /** The date and time when the works order was last modified */
        modified: z.string().optional(),
        /** The unique identifier of the company that has been selected to perform the work */
        companyId: z.string().optional(),
        /** The unique identifier of the property where the work is to be carried out */
        propertyId: z.string().optional(),
        /** The unique identifier of the tenancy that the works order originated from */
        tenancyId: z.string().optional(),
        /** The unique identifier of the negotiator that booked the works order */
        negotiatorId: z.string().optional(),
        /** The unique identifier of the type of work that needs to be carried out */
        typeId: z.string().optional(),
        /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
        status: z.string().optional(),
        /** A free text description of the work required */
        description: z.string().optional(),
        /** The party requesting the work to be carried out (landlord/tenant/other) */
        reporter: z.string().optional(),
        /** The priority level of the works order (low/medium/high) */
        priority: z.string().optional(),
        /** The date when the works order was booked */
        booked: z.string().optional(),
        /** The date when the work is required to be completed by */
        required: z.string().optional(),
        /** The date when the work was completed */
        completed: z.string().optional(),
        /** The total net cost for all of the items of work to be carried out */
        totalNetAmount: z.number().optional(),
        /** The total additional vat cost for all of the items of work to be carried out */
        totalVatAmount: z.number().optional(),
        /** The total gross cost for all of the items of work to be carried out */
        totalGrossAmount: z.number().optional(),
        /** A collection of jobs/items of work that the works order should fulfill */
        items: z
          .array(
            /** Representation of a works order item */
            z.object({
              _links: z
                .record(z.string(), z.object({ href: z.string().optional() }))
                .optional(),
              _embedded: z.record(z.string(), z.object({})).optional(),
              /** The unique identifier of the works order item */
              id: z.string().optional(),
              /** The unique identifier of the parent works order */
              worksOrderId: z.string().optional(),
              /** The date and time when the works order item was created */
              created: z.string().optional(),
              /** The date and time when the works order item was last modified */
              modified: z.string().optional(),
              /** The notes attached to the works order item */
              notes: z.string().optional(),
              /** The party to be charged for the work being carried out (landlord/tenant) */
              chargeTo: z.string().optional(),
              /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
              estimate: z.number().optional(),
              /** The type of estimate supplied (agent/verbal/written) */
              estimateType: z.string().optional(),
              /** The net cost of the work to be carried out */
              netAmount: z.number().optional(),
              /** The additional vat cost for the work to be carried out */
              vatAmount: z.number().optional(),
              /** The gross cost of the work to be carried out */
              grossAmount: z.number().optional(),
              /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
              reserveAmount: z.number().optional(),
              /** The unique identifier of the nominal account the works order financial transactions are allocated to */
              nominalAccountId: z.string().optional(),
              /** The ETag for the current version of the works order item. Used for managing update concurrency */
              _eTag: z.string().optional()
            })
          )
          .optional(),
        /** App specific metadata that has been set against the works order */
        metadata: z.record(z.string(), z.object({})).optional(),
        /** The requested extras fields */
        extrasField: z.record(z.string(), z.object({})).optional(),
        /** The ETag for the current version of the works order. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Representation of a works order item */
export const createWorksOrderItemModel = z.object({
  /** The notes attached to the works order item */ notes: z.string(),
  /** The party to be charged for the work being carried out (landlord/tenant) */
  chargeTo: z.string(),
  /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
  estimate: z.number().optional(),
  /** The type of estimate supplied (agent/verbal/written) */
  estimateType: z.string().optional(),
  /** The net cost of the work to be carried out */
  netAmount: z.number().optional(),
  /** The cost of the vat associated with the work */
  vatAmount: z.number().optional(),
  /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
  reserveAmount: z.number().optional()
})
/** Request body used to create a new works order */
export const createWorksOrderModel = z.object({
  /** The unique identifier of the company that has been selected to perform the work */
  companyId: z.string().optional(),
  /** The unique identifier of the property where the work is to be carried out */
  propertyId: z.string(),
  /** The unique identifier of the tenancy that the works order originated from */
  tenancyId: z.string().optional(),
  /** The unique identifier of the negotiator that booked the works order */
  negotiatorId: z.string(),
  /** The unique id of the type of work that needs to be carried out */
  typeId: z.string().optional(),
  /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  status: z.string(),
  /** A free text description of the work required */ description: z.string(),
  /** The party requesting the work to be carried out (landlord/tenant/other) */
  reporter: z.string(),
  /** The priority level of the works order (low/medium/high) */
  priority: z.string().optional(),
  /** The date when the works order was booked */ booked: z.string().optional(),
  /** The date when the work is required to be completed by */
  required: z.string().optional(),
  /** The date when the work was completed */ completed: z.string().optional(),
  /** Individual work items to attach to the works order */
  items: z.array(
    /** Representation of a works order item */
    z.object({
      /** The notes attached to the works order item */ notes: z.string(),
      /** The party to be charged for the work being carried out (landlord/tenant) */
      chargeTo: z.string(),
      /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
      estimate: z.number().optional(),
      /** The type of estimate supplied (agent/verbal/written) */
      estimateType: z.string().optional(),
      /** The net cost of the work to be carried out */
      netAmount: z.number().optional(),
      /** The cost of the vat associated with the work */
      vatAmount: z.number().optional(),
      /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
      reserveAmount: z.number().optional()
    })
  ),
  /** App specific metadata to set against the works order */
  metadata: z.record(z.string(), z.object({})).optional()
})
/** Request body used to update an existing works order */
export const updateWorksOrderModel = z.object({
  /** The unique identifier of the company that has been selected to perform the work */
  companyId: z.string().optional(),
  /** The unique identifier of the property where the work is to be carried out */
  propertyId: z.string().optional(),
  /** The unique identifier of the tenancy that the works order originated from */
  tenancyId: z.string().optional(),
  /** The unique identifier of the negotiator that booked the works order */
  negotiatorId: z.string().optional(),
  /** The unique id of the type of work that needs to be carried out */
  typeId: z.string().optional(),
  /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
  status: z.string().optional(),
  /** A free text description of the work required */
  description: z.string().optional(),
  /** The party requesting the work to be carried out (landlord/tenant/other) */
  reporter: z.string().optional(),
  /** The priority level of the works order (low/medium/high) */
  priority: z.string().optional(),
  /** The date when the works order was booked */ booked: z.string().optional(),
  /** The date when the work is required to be completed by */
  required: z.string().optional(),
  /** The date when the work was completed */ completed: z.string().optional(),
  /** App specific metadata to set against the works order */
  metadata: z.record(z.string(), z.object({})).optional()
})
export const worksOrderItemModelPagedResult = z.object({
  _embedded: z
    .array(
      /** Representation of a works order item */
      z.object({
        _links: z
          .record(z.string(), z.object({ href: z.string().optional() }))
          .optional(),
        _embedded: z.record(z.string(), z.object({})).optional(),
        /** The unique identifier of the works order item */
        id: z.string().optional(),
        /** The unique identifier of the parent works order */
        worksOrderId: z.string().optional(),
        /** The date and time when the works order item was created */
        created: z.string().optional(),
        /** The date and time when the works order item was last modified */
        modified: z.string().optional(),
        /** The notes attached to the works order item */
        notes: z.string().optional(),
        /** The party to be charged for the work being carried out (landlord/tenant) */
        chargeTo: z.string().optional(),
        /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
        estimate: z.number().optional(),
        /** The type of estimate supplied (agent/verbal/written) */
        estimateType: z.string().optional(),
        /** The net cost of the work to be carried out */
        netAmount: z.number().optional(),
        /** The additional vat cost for the work to be carried out */
        vatAmount: z.number().optional(),
        /** The gross cost of the work to be carried out */
        grossAmount: z.number().optional(),
        /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
        reserveAmount: z.number().optional(),
        /** The unique identifier of the nominal account the works order financial transactions are allocated to */
        nominalAccountId: z.string().optional(),
        /** The ETag for the current version of the works order item. Used for managing update concurrency */
        _eTag: z.string().optional()
      })
    )
    .optional(),
  pageNumber: z.number().int().optional(),
  pageSize: z.number().int().optional(),
  pageCount: z.number().int().optional(),
  totalPageCount: z.number().int().optional(),
  totalCount: z.number().int().optional(),
  _links: z
    .record(z.string(), z.object({ href: z.string().optional() }))
    .optional()
})
/** Representation of a works order item */
export const updateWorksOrderItemModel = z.object({
  /** The notes attached to the works order item */
  notes: z.string().optional(),
  /** The party to be charged for the work being carried out (landlord/tenant) */
  chargeTo: z.string().optional(),
  /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
  estimate: z.number().optional(),
  /** The type of estimate supplied (agent/verbal/written) */
  estimateType: z.string().optional(),
  /** The net cost of the work to be carried out */
  netAmount: z.number().optional(),
  /** The cost of the vat associated with the work */
  vatAmount: z.number().optional(),
  /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
  reserveAmount: z.number().optional()
})
