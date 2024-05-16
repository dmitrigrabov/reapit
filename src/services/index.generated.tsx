import { z } from 'zod'
import {
  useQuery,
  keepPreviousData,
  useMutation,
  useQueryClient
} from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useGetApiApplicantsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?:
    | Array<
        | 'appointments'
        | 'areas'
        | 'department'
        | 'documents'
        | 'negotiators'
        | 'offers'
        | 'offices'
        | 'solicitor'
        | 'source'
      >
    | undefined
  id?: Array<string> | undefined
  age?: Array<'period' | 'new' | 'modern' | 'old'> | undefined
  contactDetail?: Array<string> | undefined
  emailAddresses?: Array<string> | undefined
  furnishing?: Array<'furnished' | 'unfurnished' | 'partFurnished'> | undefined
  locality?: Array<'rural' | 'village' | 'townCity'> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  parking?:
    | Array<
        | 'residents'
        | 'offStreet'
        | 'secure'
        | 'underground'
        | 'garage'
        | 'doubleGarage'
        | 'tripleGarage'
        | 'carport'
      >
    | undefined
  situation?:
    | Array<
        | 'garden'
        | 'land'
        | 'patio'
        | 'roofTerrace'
        | 'conservatory'
        | 'balcony'
        | 'communalGardens'
        | 'outsideSpace'
      >
    | undefined
  style?:
    | Array<
        | 'terraced'
        | 'endTerrace'
        | 'detached'
        | 'semiDetached'
        | 'linkDetached'
        | 'mews'
        | 'basement'
        | 'lowerGroundFloor'
        | 'groundFloor'
        | 'firstFloor'
        | 'upperFloor'
        | 'upperFloorWithLift'
        | 'penthouse'
        | 'duplex'
      >
    | undefined
  type?:
    | Array<
        | 'house'
        | 'bungalow'
        | 'flatApartment'
        | 'maisonette'
        | 'land'
        | 'farm'
        | 'cottage'
        | 'studio'
        | 'townhouse'
        | 'developmentPlot'
      >
    | undefined
  market?: Array<'local' | 'openA' | 'openB' | 'openC' | 'openD'> | undefined
  address?: string | undefined
  departmentId?: string | undefined
  marketingMode?: Array<'buying' | 'renting'> | undefined
  name?: string | undefined
  nameType?: Array<'surname' | 'initials' | 'full' | 'companyName'> | undefined
  priceFrom?: number | undefined
  priceTo?: number | undefined
  rentFrom?: number | undefined
  rentTo?: number | undefined
  rentFrequency?: Array<'weekly' | 'monthly' | 'annually'> | undefined
  bedroomsFrom?: number | undefined
  bedroomsTo?: number | undefined
  active?: boolean | undefined
  fromArchive?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  hasLastCall?: boolean | undefined
  lastCallFrom?: string | undefined
  lastCallTo?: string | undefined
  nextCallFrom?: string | undefined
  nextCallTo?: string | undefined
  hasNextCall?: boolean | undefined
  metadata?: Array<string> | undefined
  locationOptions?: string | undefined
}
export type useGetApiApplicantsIdArgs = {
  id: string
  embed?:
    | Array<
        | 'appointments'
        | 'areas'
        | 'department'
        | 'documents'
        | 'negotiators'
        | 'offers'
        | 'offices'
        | 'solicitor'
        | 'source'
      >
    | undefined
}
export type patchApiApplicantsIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing applicant */
  {
    marketingMode?: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
    string | undefined
    currency?: /** The ISO-4217 currency code that relates to monetary amounts specified by the applicant
Where not specified this will default to the customer's base currency */
    string | undefined
    active?: /** A flag determining whether or not the applicant is actively looking for a property */
    boolean | undefined
    notes?: /** A free text field describing any adhoc buying or renting requirements */
    string | undefined
    statusId?: /** The status id of the applicant */ string | undefined
    sellingStatus?: /** The applicant's selling status (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
    string | undefined
    sellingPosition?: /** The applicant's selling position (nothingToSell/renting/sellingWithUs/sellingWithOtherAgent/sellingPrivately/notYetOnMarket) */
    string | undefined
    lastCall?: /** The date when the applicant was last contacted */
    string | undefined
    nextCall?: /** The date when the applicant is next due to be contacted */
    string | undefined
    departmentId?: /** The unique identifier of the department that the applicant requirements are associated with. The applicant will only match to properties with the same value */
    string | undefined
    solicitorId?: /** The unique identifier of the solicitor associated to the applicant */
    string | undefined
    potentialClient?: /** A flag determining whether or not the applicant is a potential client */
    boolean | undefined
    type?: /** The applicant's property type requirements (eg house, bungalow, land), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    style?: /** The applicant's property style requirements (eg detached, semiDetached), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    situation?: /** The applicant's requirements for other aspects of prospective properties - such as outside space - as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    parking?: /** The applicant's parking requirements (eg garage), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    age?: /** The applicant's property age requirements (eg new, period), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    locality?: /** The applicant's general property location requirements (eg rural, townCity), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    specialFeatures?: /** The applicant's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the applicant's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    bedroomsMin?: /** The minimum number of bedrooms the applicant requires */
    number | undefined
    bedroomsMax?: /** The maximum number of bedrooms the applicant requires */
    number | undefined
    receptionsMin?: /** The minimum number of reception rooms the applicant requires */
    number | undefined
    receptionsMax?: /** The maximum number of reception rooms the applicant requires */
    number | undefined
    bathroomsMin?: /** The minimum number of bathrooms the applicant requires */
    number | undefined
    bathroomsMax?: /** The maximum number of bathrooms the applicant requires */
    number | undefined
    parkingSpacesMin?: /** The minimum number of parking spaces the applicant requires */
    number | undefined
    parkingSpacesMax?: /** The maximum number of parking spaces the applicant requires */
    number | undefined
    locationType?: /** The applicant's location type (areas/addresses/none) */
    string | undefined
    locationOptions?: /** The applicant's location options */
    Array<string> | undefined
    buying?: /** The details specific to applicants with a marketingMode of buying */
    | {
          reasonId?: /** The identifier of the applicant's buying reason */
          string | undefined
          positionId?: /** The identifier of the applicant's selling position */
          string | undefined
          priceFrom?: /** The lower bound of the applicant's budget */
          number | undefined
          priceTo?: /** The upper bound of the applicant's budget */
          number | undefined
          decoration?: /** A list of property decoration requirements taken from the full listing of the associated department (unmodernised/fair/good/veryGood) */
          Array<string> | undefined
          tenure?: /** A list of tenure requirements taken from the full listing of the associated department (freehold/leasehold/shareOfFreehold) */
          Array<string> | undefined
          mortgageExpiry?: /** The date when the applicant's current mortgage expires/is due for renewal */
          string | undefined
          leaseRemaining?: /** The details specific to the applicant's lease term requirements where they are interested in properties with a leasehold tenure */
          | {
                min?: /** The minimum number of years that must remain on the lease of a leasehold property */
                number | undefined
                max?: /** The maximum number of years that must remain on the lease of a leasehold property */
                number | undefined
              }
            | undefined
        }
      | undefined
    renting?: /** The details specific to applicants with a marketingMode of renting */
    | {
          moveDate?: /** The date the applicant is looking to move to a new property */
          string | undefined
          term?: /** The applicant's preferred letting term (long/short/any) */
          string | undefined
          rentFrom?: /** The lower bound of the applicant's budget */
          number | undefined
          rentTo?: /** The upper bound of the applicant's budget */
          number | undefined
          rentFrequency?: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually) */
          string | undefined
          furnishing?: /** A list of property furnishing requirements taken from the full listing of the associated department */
          Array<string> | undefined
          positionId?: /** The identifier of the applicant's renting position */
          string | undefined
        }
      | undefined
    externalArea?: /** The applicant's outdoor space requirements */
    | {
          type?: /** The unit of area that each amount corresponds to (acres/hectares) */
          string | undefined
          amountFrom?: /** The minimum unit value of outside space that the applicant is looking for */
          number | undefined
          amountTo?: /** The maximum unit value of outside space that the applicant is looking for */
          number | undefined
        }
      | undefined
    internalArea?: /** The applicant's indoor space requirements */
    | {
          type?: /** The unit of area that each amount corresponds to (squareFeet/squareMetres) */
          string | undefined
          amount?: /** The unit value of inside space that the applicant is looking for */
          number | undefined
        }
      | undefined
    source?: /** An applicant's source of enquiry */
    | {
          id?: /** The unique identifier of the applicant's source */
          string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    regional?: /** Details relating to the real estate market in specific countries. Child models are named based on the ISO3166 country code that the data inside the model relates to */
    | {
          ggy?: /** Details of regional information specific to Guernsey */
          | {
                market?: /** Requirements describing which markets the applicant is looking for properties in (local/openA/openB/openC/openD) */
                Array<string> | undefined
              }
            | undefined
        }
      | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
    Array<string> | undefined
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined
    metadata?: /** App specific metadata to set against the applicant */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiApplicantsIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiApplicantsIdRelationshipsRelationshipIdArgs = {
  id: string
  relationshipId: string
}
export type deleteApiApplicantsIdRelationshipsRelationshipIdArgs = {
  id: string
  relationshipId: string
}
export type useGetApiAreasArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  id?: Array<string> | undefined
  departmentId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  name?: string | undefined
  active?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export type useGetApiAreasIdArgs = { id: string }
export type patchApiAreasIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing area */
  {
    name?: /** The name of the area */ string | undefined
    area?: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
    Array<string> | undefined
    departmentIds?: /** A collection of unique identifiers of departments associated to the area */
    Array<string> | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
    Array<string> | undefined
  }
}
export type useGetApiAppointmentsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?:
    | Array<'negotiators' | 'offices' | 'organiser' | 'property' | 'type'>
    | undefined
  id?: Array<string> | undefined
  typeId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  attendeeId?: Array<string> | undefined
  attendeeType?:
    | Array<'applicant' | 'contact' | 'landlord' | 'tenancy'>
    | undefined
  start?: string | undefined
  end?: string | undefined
  includeCancelled?: boolean | undefined
  includeUnconfirmed?: boolean | undefined
  fromArchive?: boolean | undefined
  followUpFrom?: string | undefined
  followUpTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  extrasField?: Array<string> | undefined
  metadata?: Array<string> | undefined
}
export type useGetApiAppointmentsIdArgs = {
  id: string
  embed?:
    | Array<'negotiators' | 'offices' | 'organiser' | 'property' | 'type'>
    | undefined
  extrasField?: Array<string> | undefined
}
export type patchApiAppointmentsIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing calendar appointment */
  {
    start?: /** The date and time when the appointment will start */
    string | undefined
    end?: /** The date and time when the appointment will end */
    string | undefined
    followUpOn?: /** The date when the appointment should be followed up */
    string | undefined
    typeId?: /** The unique identifier of the appointment type */
    string | undefined
    description?: /** A free text description about the appointment */
    string | undefined
    propertyId?: /** The unique identifier of the property related to the appointment */
    string | undefined
    otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
    string | undefined
    organiserId?: /** The unique identifier of the negotiator that organised the appointment */
    string | undefined
    cancelled?: /** A flag denoting whether or not the appointment has been cancelled */
    boolean | undefined
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
    Array<string> | undefined
    attendee?: /** Represents an external attendee on an appointment */
    | {
          id?: /** The unique identifier of the attendee. To clear an attendee this can be passed as an empty string. */
          string | undefined
          type?: /** The type of attendee (applicant/contact/landlord/tenant) */
          string | undefined
          confirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
          boolean | undefined
        }
      | undefined
    accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
    boolean | undefined
    virtual?: /** A flag denoting whether or not the appointment is virtual */
    boolean | undefined
    isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
    boolean | undefined
    negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
    boolean | undefined
    attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
    boolean | undefined
    propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
    boolean | undefined
    attended?: /** The attendance status of the appointment (notSet/noShow/attended) */
    string | undefined
    followUp?: /** Represents the follow up information on a single appointment */
    | {
          responseId?: /** The unique identifier of a pre-defined follow up response type */
          string | undefined
          notes?: /** The internal follow up notes to be stored against the appointment */
          string | undefined
        }
      | undefined
    recurrence?: /** Details of an appointment's recurrence pattern */
    | {
          type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
          string | undefined
          interval?: /** The numeric value denoting how often the appointment will recur */
          number | undefined
          until?: /** The date and time of the last occurrence of the appointment */
          string | undefined
        }
      | undefined
    documents?: /** A view of the documents associated to the appointment */
    | {
          draftPropertyInspectionReportId?: /** The unique identifier of the draft property inspection report document */
          string | undefined
          finalPropertyInspectionReportId?: /** The unique identifier of the final property inspection report document */
          string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the appointment */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiAppointmentsIdOpenHouseAttendeesArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs = {
  id: string
  openHouseAttendeeId: string
}
export type deleteApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs = {
  id: string
  openHouseAttendeeId: string
}
export type patchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs = {
  'If-Match': string
  id: string
  openHouseAttendeeId: string
  body: /** Request body used to upda te a new open house attendee */
  {
    interestLevel?: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
    string | undefined
    notes?: /** Notes on this open house attendee */ string | undefined
  }
}
export type useGetApiCompaniesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'companyTypes' | 'relationships'> | undefined
  id?: Array<string> | undefined
  address?: string | undefined
  branch?: string | undefined
  name?: string | undefined
  typeId?: string | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  contactDetail?: Array<string> | undefined
  fromArchive?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
}
export type useGetApiCompaniesIdArgs = {
  id: string
  embed?: Array<'companyTypes' | 'relationships'> | undefined
}
export type patchApiCompaniesIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing company */
  {
    name?: /** The name of the company */ string | undefined
    branch?: /** The branch name of the company */ string | undefined
    notes?: /** A free text field containing notes that describe the company's business or service offering */
    string | undefined
    active?: /** A flag determining whether or not the company is currently active */
    boolean | undefined
    marketingConsent?: /** The marketing consent status of the company (deny/notAsked) */
    string | undefined
    vatRegistered?: /** A flag determining whether or not the company is VAT registered */
    boolean | undefined
    typeIds?: /** A collection of unique identifiers of company types that categorise the type of business the company operates */
    Array<string> | undefined
    supplierTypeId?: /** The unique identifier of a supplier type, if the company is a supplier */
    string | undefined
    workPhone?: /** The work phone number of the company */ string | undefined
    mobilePhone?: /** The mobile phone number of the company */
    string | undefined
    email?: /** The email address of the company */ string | undefined
    address?: /** Request body to set the address of an existing company */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
          string | undefined
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the address resides within */
          string | undefined
        }
      | undefined
    communicationPreferenceLetter?: /** A flag determining whether or not the company is happy to receive communications by letter */
    boolean | undefined
    communicationPreferenceEmail?: /** A flag determining whether or not the company is happy to receive communications by email */
    boolean | undefined
    communicationPreferencePhone?: /** A flag determining whether or not the company is happy to receive communications by phone */
    boolean | undefined
    communicationPreferenceSms?: /** A flag determining whether or not the company is happy to receive communications by SMS */
    boolean | undefined
    metadata?: /** App specific metadata to set against the company */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiCompaniesIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiCompaniesIdStaffMembersArgs = { id: string }
export type useGetApiConfigurationTypesArgs = {
  type?:
    | Array<
        | 'agencyTypes'
        | 'appointmentTypes'
        | 'applicantStatuses'
        | 'boardStatuses'
        | 'buyingPositions'
        | 'buyingReasons'
        | 'certificateTypes'
        | 'companyTypes'
        | 'contactCategories'
        | 'identityDocumentTypes'
        | 'documentTypes'
        | 'journalEntryTypes'
        | 'keyTypes'
        | 'followUpResponses'
        | 'sellingReasons'
        | 'rentInsuranceCancellationReasons'
        | 'rentingPositions'
        | 'supplierTypes'
        | 'taskTypes'
        | 'tenancyLegalStatuses'
        | 'tenancyTypes'
        | 'vendorTypes'
        | 'worksOrderTypes'
      >
    | undefined
}
export type useGetApiConfigurationAgencyTypesArgs = void
export type useGetApiConfigurationAgencyTypesIdArgs = { id: string }
export type useGetApiConfigurationApplicantStatusesIdArgs = { id: string }
export type useGetApiConfigurationApplicantStatusesArgs = {
  id?: Array<string> | undefined
}
export type useGetApiConfigurationAppointmentTypesArgs = void
export type useGetApiConfigurationAppointmentTypesIdArgs = { id: string }
export type useGetApiConfigurationBoardStatusesArgs = void
export type useGetApiConfigurationBoardStatusesIdArgs = { id: string }
export type useGetApiConfigurationBuyingPositionsArgs = void
export type useGetApiConfigurationBuyingPositionsIdArgs = { id: string }
export type useGetApiConfigurationBuyingReasonsArgs = void
export type useGetApiConfigurationCertificateTypesArgs = void
export type useGetApiConfigurationCertificateTypesIdArgs = { id: string }
export type useGetApiConfigurationCompanyTypesArgs = {
  id?: Array<string> | undefined
}
export type useGetApiConfigurationCompanyTypesIdArgs = { id: string }
export type useGetApiConfigurationContactCategoriesIdArgs = { id: string }
export type useGetApiConfigurationContactCategoriesArgs = {
  id?: Array<string> | undefined
}
export type useGetApiConfigurationDocumentTypesArgs = void
export type useGetApiConfigurationDocumentTypesIdArgs = { id: string }
export type useGetApiConfigurationFollowUpResponsesArgs = void
export type useGetApiConfigurationFollowUpResponsesIdArgs = { id: string }
export type useGetApiConfigurationIdentityDocumentTypesArgs = void
export type useGetApiConfigurationIdentityDocumentTypesIdArgs = { id: string }
export type useGetApiConfigurationJournalEntryTypesArgs = void
export type useGetApiConfigurationJournalEntryTypesIdArgs = { id: string }
export type useGetApiConfigurationKeyTypesArgs = void
export type useGetApiConfigurationKeyTypesIdArgs = { id: string }
export type useGetApiConfigurationPortalTypesArgs = {
  id?: Array<string> | undefined
}
export type useGetApiConfigurationPortalTypesIdArgs = { id: string }
export type useGetApiConfigurationPreTenancyCheckTypesArgs = {
  active?: boolean | undefined
  officeId?: Array<string> | undefined
}
export type useGetApiConfigurationPreTenancyCheckTypesIdArgs = { id: string }
export type useGetApiConfigurationPropertyServiceTypesArgs = void
export type useGetApiConfigurationPropertyServiceTypesIdArgs = { id: string }
export type useGetApiConfigurationRenewalCheckTypesArgs = {
  active?: boolean | undefined
  officeId?: Array<string> | undefined
}
export type useGetApiConfigurationRenewalCheckTypesIdArgs = { id: string }
export type useGetApiConfigurationRentInsuranceCancellationReasonsArgs = void
export type useGetApiConfigurationRentInsuranceCancellationReasonsIdArgs = {
  id: string
}
export type useGetApiConfigurationRentingPositionsArgs = void
export type useGetApiConfigurationRentingPositionsIdArgs = { id: string }
export type useGetApiConfigurationRuralTenancyTypesArgs = void
export type useGetApiConfigurationRuralTenancyTypesIdArgs = { id: string }
export type useGetApiConfigurationSellingReasonsArgs = void
export type useGetApiConfigurationSellingReasonsIdArgs = { id: string }
export type useGetApiConfigurationSupplierTypesArgs = void
export type useGetApiConfigurationSupplierTypesIdArgs = { id: string }
export type useGetApiConfigurationTaskTypesArgs = void
export type useGetApiConfigurationTaskTypesIdArgs = { id: string }
export type useGetApiConfigurationTenancyLegalStatusesArgs = void
export type useGetApiConfigurationTenancyLegalStatusesIdArgs = { id: string }
export type useGetApiConfigurationTenancyRenewalOptionsArgs = {
  id?: Array<string> | undefined
}
export type useGetApiConfigurationTenancyRenewalOptionsIdArgs = { id: string }
export type useGetApiConfigurationTenancyRenewalOptionConditionsArgs = {
  id?: Array<string> | undefined
}
export type useGetApiConfigurationTenancyRenewalOptionConditionsIdArgs = {
  id: string
}
export type useGetApiConfigurationTenancyTypesArgs = void
export type useGetApiConfigurationTenancyTypesIdArgs = { id: string }
export type useGetApiConfigurationVendorTypesArgs = void
export type useGetApiConfigurationVendorTypesIdArgs = { id: string }
export type useGetApiConfigurationWorksOrderTypesArgs = void
export type useGetApiConfigurationWorksOrderTypesIdArgs = { id: string }
export type useGetApiConfigurationTerminologyArgs = void
export type useGetApiContactsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?:
    | Array<
        | 'documents'
        | 'identityChecks'
        | 'negotiators'
        | 'offices'
        | 'relationships'
        | 'source'
      >
    | undefined
  id?: Array<string> | undefined
  contactDetail?: Array<string> | undefined
  email?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  address?: string | undefined
  identityCheck?:
    | Array<'pass' | 'fail' | 'pending' | 'warnings' | 'unchecked'>
    | undefined
  name?: string | undefined
  nameType?: string | undefined
  marketingConsent?: Array<'grant' | 'deny' | 'notAsked'> | undefined
  marketingConsentFilterType?:
    | Array<'assumedOrExplicit' | 'explicit'>
    | undefined
  active?: boolean | undefined
  fromArchive?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  extrasField?: Array<string> | undefined
}
export type useGetApiContactsIdArgs = {
  id: string
  embed?:
    | Array<
        | 'documents'
        | 'identityChecks'
        | 'negotiators'
        | 'offices'
        | 'relationships'
        | 'source'
      >
    | undefined
  extrasField?: Array<string> | undefined
}
export type patchApiContactsIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing contact */
  {
    title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
    string | undefined
    forename?: /** The contact's forename */ string | undefined
    surname?: /** The contact's surname */ string | undefined
    dateOfBirth?: /** The contact's date of birth */ string | undefined
    active?: /** A flag determining whether or not the contact is currently active */
    boolean | undefined
    marketingConsent?: /** The marketing consent status of the contact (grant/deny/notAsked) */
    string | undefined
    source?: /** Request body used to update the source of an existing contact */
    | {
          id?: /** The unique identifier of the source of the contact */
          string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    homePhone?: /** The home phone number of the contact */ string | undefined
    workPhone?: /** The work phone number of the contact */ string | undefined
    mobilePhone?: /** The mobile phone number of the contact */
    string | undefined
    email?: /** The email address of the contact */ string | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    Array<string> | undefined
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined
    categoryIds?: /** A collection of categories associated to the contact. */
    Array<string> | undefined
    primaryAddress?: /** Request body used to update an address on an existing contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
          string | undefined
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the adderess resides in */
          string | undefined
        }
      | undefined
    secondaryAddress?: /** Request body used to update an address on an existing contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
          string | undefined
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the adderess resides in */
          string | undefined
        }
      | undefined
    workAddress?: /** Request body used to update an address on an existing contact */
    | {
          type?: /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
          string | undefined
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the adderess resides in */
          string | undefined
        }
      | undefined
    communicationPreferenceLetter?: /** A flag determining whether or not the contact is happy to receive communications by letter */
    boolean | undefined
    communicationPreferenceEmail?: /** A flag determining whether or not the contact is happy to receive communications by email */
    boolean | undefined
    communicationPreferencePhone?: /** A flag determining whether or not the contact is happy to receive communications by phone */
    boolean | undefined
    communicationPreferenceSMS?: /** A flag determining whether or not the contact is happy to receive communications by SMS */
    boolean | undefined
    fromArchive?: /** A flag determining whether the contact is archived */
    boolean | undefined
    metadata?: /** App specific metadata to set against the contact */
    Record<string, Record<string, never>> | undefined
    additionalContactDetails?: /** A collection of additional contact details */
    Record<string, string> | undefined
  }
}
export type useGetApiContactsIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiContactsIdSubscriptionsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
  type?: string | undefined
  status?: string | undefined
}
export type useGetApiContactsIdSubscriptionsSubscriptionIdArgs = {
  id: string
  subscriptionId: string
}
export type useGetApiConveyancingArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  id?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  buyerId?: Array<string> | undefined
  embed?:
    | Array<
        'buyerSolicitor' | 'offer' | 'property' | 'vendor' | 'vendorSolicitor'
      >
    | undefined
  metadata?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export type useGetApiConveyancingIdArgs = {
  id: string
  embed?:
    | Array<
        'buyerSolicitor' | 'offer' | 'property' | 'vendor' | 'vendorSolicitor'
      >
    | undefined
}
export type patchApiConveyancingIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body for updating sales progression information on an existing offer */
  {
    vendorSolicitorId?: /** The unique identifier of the vendor that this offer is associated to. Empty if the offer is external and relates to a property not instructed to the agent */
    string | undefined
    buyerSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed */
    string | undefined
    fixturesAndFittingsCompleted?: /** The date when the fixtures and fittings form has been completed */
    string | undefined
    deedsRequested?: /** The date when the title deeds were requested from land registry */
    string | undefined
    deedsReceived?: /** The date when the title deeds were received from land registry */
    string | undefined
    enquiriesSent?: /** The date when the legal enquiries raised by the buyers solicitor were sent */
    string | undefined
    enquiriesAnswered?: /** The date when the legal enquiries raised by the buyers solicitor were answered */
    string | undefined
    searchesPaid?: /** The date when the buyer paid for conveyancing searches */
    string | undefined
    searchesApplied?: /** The date when conveyancing searches were applied for */
    string | undefined
    searchesReceived?: /** The date when conveyancing searches were received */
    string | undefined
    contractSent?: /** The date when the draft contract was sent */
    string | undefined
    contractReceived?: /** The date when the draft contract was received */
    string | undefined
    contractApproved?: /** The date when the contract was approved */
    string | undefined
    contractVendorSigned?: /** The date when the vendor signed the approved contract */
    string | undefined
    contractBuyerSigned?: /** The date when the buyer signed the approved contract */
    string | undefined
    mortgageRequired?: /** Indication of whether the buyer will require a mortgage to fund the purchase (yes/no/unknown) */
    string | undefined
    mortgageLoanPercentage?: /** The loan to value percentage of the mortgage required */
    number | undefined
    mortgageSubmitted?: /** The date when the mortgage application was submitted */
    string | undefined
    mortgageOfferReceived?: /** The date when the mortgage offer was received */
    string | undefined
    mortgageLenderId?: /** The unique identifier of the company who will provide the mortgage */
    string | undefined
    mortgageBrokerId?: /** The unique identifier of the company who brokered the mortgage */
    string | undefined
    mortgageSurveyDate?: /** The date of the mortgage valuation/survey */
    string | undefined
    mortgageSurveyorId?: /** The unique identifier of the company who will perform the mortgage valuation/survey */
    string | undefined
    additionalSurveyRequired?: /** Indication of whether the buyer requires that an additional survey take place (yes/no/unknown) */
    string | undefined
    additionalSurveyDate?: /** The date of the additional survey */
    string | undefined
    additionalSurveyorId?: /** The unique identifier of the company who will perform the additional survey */
    string | undefined
    exchangedVendor?: /** The date when the vendor conveyancer confirms the exchange */
    string | undefined
    exchangedBuyer?: /** The date when the buyer conveyancer confirms the exchange */
    string | undefined
    completion?: /** The date when the sale completed */ string | undefined
    metadata?: /** App specific metadata to set against this conveyancing record */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiConveyancingIdChainArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
}
export type deleteApiConveyancingIdDownwardArgs = { id: string }
export type deleteApiConveyancingIdUpwardArgs = { id: string }
export type useGetApiDepartmentsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  id?: Array<string> | undefined
  name?: string | undefined
}
export type useGetApiDepartmentsIdArgs = { id: string }
export type useGetApiDocumentsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'documentType'> | undefined
  id?: Array<string> | undefined
  associatedId?: Array<string> | undefined
  associatedType?:
    | Array<
        | 'appliance'
        | 'applicant'
        | 'bankStatement'
        | 'batch'
        | 'certificate'
        | 'contact'
        | 'depositCertificate'
        | 'estate'
        | 'estateUnit'
        | 'idCheck'
        | 'keySet'
        | 'landlord'
        | 'nominalTransaction'
        | 'property'
        | 'tenancy'
        | 'tenancyCheck'
        | 'tenancyRenewal'
        | 'worksOrder'
      >
    | undefined
  typeId?: Array<string> | undefined
  includeRoleDocuments?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
}
export type useGetApiDocumentsIdArgs = {
  id: string
  embed?: Array<'documentType'> | undefined
}
export type deleteApiDocumentsIdArgs = { id: string }
export type patchApiDocumentsIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing document */
  {
    typeId?: /** The unique identifier of the type of document */
    string | undefined
    name?: /** The filename of the document */ string | undefined
    isPrivate?: /** A flag denoting whether or not the document is private */
    boolean | undefined
    metadata?: /** App specific metadata to set against the document */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiDocumentsIdDownloadArgs = { id: string }
export type useGetApiEnquiriesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  enquiryType?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export type useGetApiEnquiriesIdArgs = { id: number }
export type patchApiEnquiriesIdArgs = {
  'If-Match': string
  id: number
  body: /** Request body used to update an existing enquiry */
  {
    applicantId?: /** The unique identifier of the applicant associated to the enquiry */
    string | undefined
    status?: /** The status of the enquiry (added/alreadyExists/duplicateEntry/pending/rejected/spam) */
    string | undefined
  }
}
export type useGetApiIdentityChecksArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?:
    | Array<
        | 'contact'
        | 'document1'
        | 'document2'
        | 'documentType1'
        | 'documentType2'
      >
    | undefined
  id?: Array<string> | undefined
  contactId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  status?:
    | Array<
        | 'unknown'
        | 'unchecked'
        | 'pending'
        | 'fail'
        | 'cancelled'
        | 'warnings'
        | 'pass'
      >
    | undefined
  checkDateFrom?: string | undefined
  checkDateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
}
export type useGetApiIdentityChecksIdArgs = {
  id: string
  embed?:
    | Array<
        | 'contact'
        | 'document1'
        | 'document2'
        | 'documentType1'
        | 'documentType2'
      >
    | undefined
}
export type patchApiIdentityChecksIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an exist contact identity check */
  {
    checkDate?: /** The date when the identity check was performed. This may differ to the date when the check was created */
    string | undefined
    status?: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
    string | undefined
    negotiatorId?: /** The unique identifier of the negotiator that initiated the identity check */
    string | undefined
    identityDocument1?: /** Request body to update an identity document attached to an existing contact identity check */
    | {
          typeId?: /** The unique identifier of the type of identity document provided */
          string | undefined
          expiry?: /** The date when the document expires and becomes invalid */
          string | undefined
          details?: /** Details regarding the identity document (eg. passport number) */
          string | undefined
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined
          name?: /** The filename to store the document as */ string | undefined
        }
      | undefined
    identityDocument2?: /** Request body to update an identity document attached to an existing contact identity check */
    | {
          typeId?: /** The unique identifier of the type of identity document provided */
          string | undefined
          expiry?: /** The date when the document expires and becomes invalid */
          string | undefined
          details?: /** Details regarding the identity document (eg. passport number) */
          string | undefined
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined
          name?: /** The filename to store the document as */ string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the identity check */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiInvoicesArgs = {
  pageNumber?: number | undefined
  pageSize?: number | undefined
  sortBy?: string | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  status?:
    | Array<
        'pending' | 'raised' | 'partPaid' | 'partCredited' | 'credited' | 'paid'
      >
    | undefined
  dateFrom?: string | undefined
  dateTo?: string | undefined
  dueDateFrom?: string | undefined
  dueDateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export type useGetApiInvoicesIdArgs = { id: string }
export type useGetApiInvoicesPaymentsArgs = {
  pageNumber?: number | undefined
  pageSize?: number | undefined
  sortBy?: string | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  invoiceId?: Array<string> | undefined
  type?:
    | Array<
        'payment' | 'accountPayment' | 'advertisingPayment' | 'buyerDeposit'
      >
    | undefined
  dateFrom?: string | undefined
  dateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export type useGetApiInvoicesPaymentsIdArgs = { id: string }
export type useGetApiInvoicesCreditsArgs = {
  pageNumber?: number | undefined
  pageSize?: number | undefined
  sortBy?: string | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  invoiceId?: Array<string> | undefined
  dateFrom?: string | undefined
  dateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export type useGetApiInvoicesCreditsIdArgs = { id: string }
export type useGetApiInvoicesChargesArgs = {
  pageNumber?: number | undefined
  pageSize?: number | undefined
  sortBy?: string | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  invoiceId?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export type useGetApiInvoicesChargesIdArgs = { id: string }
export type useGetApiJournalEntriesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'property' | 'negotiator' | 'type'> | undefined
  associatedType?: string | undefined
  associatedId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  typeId?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
}
export type useGetApiJournalEntriesLandlordsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  landlordId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  type?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
}
export type useGetApiLandlordsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?:
    | Array<
        | 'appointments'
        | 'documents'
        | 'office'
        | 'properties'
        | 'solicitor'
        | 'source'
      >
    | undefined
  id?: Array<string> | undefined
  email?: Array<string> | undefined
  officeId?: Array<string> | undefined
  extrasField?: Array<string> | undefined
  active?: boolean | undefined
  address?: string | undefined
  name?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
}
export type useGetApiLandlordsIdArgs = {
  id: string
  embed?:
    | Array<
        | 'appointments'
        | 'documents'
        | 'office'
        | 'properties'
        | 'solicitor'
        | 'source'
      >
    | undefined
  extrasField?: Array<string> | undefined
}
export type patchApiLandlordsIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing landlord */
  {
    active?: /** A flag determining whether or not the landlord is currently active */
    boolean | undefined
    solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */
    string | undefined
    officeId?: /** The unique identifier of the office that is associated to the landlord */
    string | undefined
    source?: /** Request body used to update the source of an existing landlord */
    | {
          id?: /** The unique identifier of the source of the landlord */
          string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    metadata?: /** App specific metadata that to set against the landlord */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiLandlordsIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiLandlordsIdRelationshipsRelationshipIdArgs = {
  id: string
  relationshipId: string
}
export type deleteApiLandlordsIdRelationshipsRelationshipIdArgs = {
  id: string
  relationshipId: string
}
export type useGetApiMetadataArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  entityType?: string | undefined
  id?: Array<string> | undefined
  entityId?: Array<string> | undefined
  filter?: Array<string> | undefined
}
export type useGetApiMetadataIdArgs = { id: string }
export type deleteApiMetadataIdArgs = { id: string }
export type patchApiMetadataIdArgs = {
  id: string
  body: /** The patch metadata payload. */ Array<Record<string, never>>
}
export type useGetApiMetadataMetadataSchemaIdArgs = { id: string }
export type useGetApiMetadataMetadataSchemaArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  entityType?: string | undefined
}
export type useGetApiNegotiatorsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'office'> | undefined
  id?: Array<string> | undefined
  officeId?: Array<string> | undefined
  email?: string | undefined
  name?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  active?: boolean | undefined
  metadata?: Array<string> | undefined
}
export type useGetApiNegotiatorsIdArgs = {
  id: string
  embed?: Array<'office'> | undefined
}
export type patchApiNegotiatorsIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing negotiator */
  {
    name?: /** The name of the negotiator */ string | undefined
    jobTitle?: /** The job title of the negotiator */ string | undefined
    active?: /** A flag determining whether or not the negotiator is active */
    boolean | undefined
    workPhone?: /** The work phone number of the negotiator */
    string | undefined
    mobilePhone?: /** The mobile phone number of the negotiator */
    string | undefined
    email?: /** The email address of the negotiator */ string | undefined
    diaryNegotiatorIds?: /** The identifiers of other negotiators whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    Array<string> | undefined
    diaryOfficeIds?: /** The identifiers of other offices whose diaries should be displayed to this negotiator when rendering diary/calendar view components in applicants */
    Array<string> | undefined
    metadata?: /** App specific metadata to set against the negotiator */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiOffersArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?:
    | Array<'applicant' | 'conveyancing' | 'property' | 'negotiator'>
    | undefined
  id?: Array<string> | undefined
  applicantId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  status?:
    | Array<
        | 'pending'
        | 'withdrawn'
        | 'rejected'
        | 'accepted'
        | 'noteOfInterest'
        | 'noteOfInterestWithdrawn'
      >
    | undefined
  address?: string | undefined
  name?: string | undefined
  amountFrom?: number | undefined
  amountTo?: number | undefined
  dateFrom?: string | undefined
  dateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
}
export type useGetApiOffersIdArgs = {
  id: string
  embed?:
    | Array<'applicant' | 'conveyancing' | 'property' | 'negotiator'>
    | undefined
}
export type patchApiOffersIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing offer */
  {
    negotiatorId?: /** The unique identifier of the negotiator associated to the offer */
    string | undefined
    date?: /** The date when the offer was made */ string | undefined
    amount?: /** The monetary amount of the offer */ number | undefined
    status?: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
    string | undefined
    inclusions?: /** A free text field describing items that should be included in the sale */
    string | undefined
    exclusions?: /** A free text field describing items that are explicitly excluded from the sale */
    string | undefined
    conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
    string | undefined
    metadata?: /** App specific metadata to set against the offer */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiOfficesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?: Array<'negotiators'> | undefined
  id?: Array<string> | undefined
  address?: string | undefined
  name?: string | undefined
  region?: string | undefined
  active?: boolean | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  extrasField?: Array<string> | undefined
}
export type useGetApiOfficesIdArgs = {
  id: string
  embed?: Array<'negotiators'> | undefined
  extrasField?: Array<string> | undefined
}
export type patchApiOfficesIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing office */
  {
    name?: /** The name of the office */ string | undefined
    active?: /** A flag denoting whether or not this office is active */
    boolean | undefined
    manager?: /** The name of the office manager */ string | undefined
    address?: /** Request body used to update the address of an existing office */
    | {
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the address resides within */
          string | undefined
          geolocation?: /** Request body used to set the geolocation coordinates of an existing address */
          | {
                latitude?: /** The latitude coordinate of the coordinate pair */
                number | undefined
                longitude?: /** The longitude coordinate of the coordinate pair */
                number | undefined
              }
            | undefined
        }
      | undefined
    workPhone?: /** The work phone number of the office */ string | undefined
    email?: /** The email address of the office */ string | undefined
    metadata?: /** App specific metadata to set against the office */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiPropertiesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?:
    | Array<
        | 'appointments'
        | 'area'
        | 'certificates'
        | 'department'
        | 'documents'
        | 'images'
        | 'keys'
        | 'landlord'
        | 'negotiator'
        | 'offers'
        | 'offices'
        | 'tenancies'
        | 'vendor'
      >
    | undefined
  id?: Array<string> | undefined
  age?: Array<'period' | 'new' | 'modern' | 'old'> | undefined
  agentRole?:
    | Array<
        | 'managed'
        | 'rentCollection'
        | 'collectFirstPayment'
        | 'collectRentToDate'
        | 'lettingOnly'
        | 'introducingTenant'
      >
    | undefined
  areaId?: Array<string> | undefined
  excludeAreaId?: Array<string> | undefined
  landlordId?: Array<string> | undefined
  lettingStatus?:
    | Array<
        | 'valuation'
        | 'toLet'
        | 'toLetUnavailable'
        | 'underOffer'
        | 'underOfferUnavailable'
        | 'arrangingTenancyUnavailable'
        | 'arrangingTenancy'
        | 'tenancyCurrentUnavailable'
        | 'tenancyCurrent'
        | 'tenancyFinished'
        | 'tenancyCancelled'
        | 'sold'
        | 'letByOtherAgent'
        | 'letPrivately'
        | 'provisional'
        | 'withdrawn'
      >
    | undefined
  locality?: Array<'rural' | 'village' | 'townCity'> | undefined
  marketingMode?: Array<'selling' | 'letting' | 'sellingAndLetting'> | undefined
  masterId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  parking?:
    | Array<
        | 'residents'
        | 'offStreet'
        | 'secure'
        | 'underground'
        | 'garage'
        | 'doubleGarage'
        | 'tripleGarage'
        | 'carport'
      >
    | undefined
  sellingStatus?:
    | Array<
        | 'preAppraisal'
        | 'valuation'
        | 'paidValuation'
        | 'forSale'
        | 'forSaleUnavailable'
        | 'underOffer'
        | 'underOfferUnavailable'
        | 'reserved'
        | 'exchanged'
        | 'completed'
        | 'soldExternally'
        | 'withdrawn'
      >
    | undefined
  situation?:
    | Array<
        | 'garden'
        | 'land'
        | 'patio'
        | 'roofTerrace'
        | 'conservatory'
        | 'balcony'
        | 'communalGardens'
        | 'outsideSpace'
      >
    | undefined
  style?:
    | Array<
        | 'terraced'
        | 'endTerrace'
        | 'detached'
        | 'semiDetached'
        | 'linkDetached'
        | 'mews'
        | 'basement'
        | 'lowerGroundFloor'
        | 'groundFloor'
        | 'firstFloor'
        | 'upperFloor'
        | 'upperFloorWithLift'
        | 'penthouse'
        | 'duplex'
      >
    | undefined
  type?:
    | Array<
        | 'house'
        | 'bungalow'
        | 'flatApartment'
        | 'maisonette'
        | 'land'
        | 'farm'
        | 'cottage'
        | 'studio'
        | 'townhouse'
        | 'developmentPlot'
      >
    | undefined
  market?: Array<'local' | 'openA' | 'openB' | 'openC' | 'openD'> | undefined
  address?: string | undefined
  countryId?: string | undefined
  departmentId?: string | undefined
  bedroomsFrom?: number | undefined
  bedroomsTo?: number | undefined
  priceFrom?: number | undefined
  priceTo?: number | undefined
  priceFiltersCurrency?: string | undefined
  rentFrom?: number | undefined
  rentTo?: number | undefined
  rentFrequency?: Array<'weekly' | 'monthly' | 'annually'> | undefined
  internetAdvertising?: boolean | undefined
  isExternal?: boolean | undefined
  fromArchive?: boolean | undefined
  availableFrom?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
  extrasField?: Array<string> | undefined
}
export type useGetApiPropertiesIdArgs = {
  id: string
  embed?:
    | Array<
        | 'appointments'
        | 'area'
        | 'certificates'
        | 'department'
        | 'documents'
        | 'images'
        | 'keys'
        | 'landlord'
        | 'negotiator'
        | 'offers'
        | 'offices'
        | 'tenancies'
        | 'vendor'
      >
    | undefined
  extrasField?: Array<string> | undefined
}
export type patchApiPropertiesIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing property */
  {
    lastCall?: /** The date the owner of the property was last called */
    string | undefined
    nextCall?: /** The date the owner of the property is next due to be called */
    string | undefined
    roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
    boolean | undefined
    strapline?: /** The strapline description containing a short summary about the property */
    string | undefined
    description?: /** The brief description of the property */
    string | undefined
    summary?: /** The summary of accommodation, typically short phrases or bullet points describing the key features of the property */
    string | undefined
    alternateId?: /** An optional alternative identifier specified for this property */
    string | undefined
    specialFeatures?: /** The property's special feature property requirements (eg Swimming Pool, Tennis Court), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    address?: /** Request body used to update the address of an existing property */
    | {
          buildingName?: /** The building name */ string | undefined
          buildingNumber?: /** The building number */ string | undefined
          line1?: /** The first line of the address */ string | undefined
          line2?: /** The second line of the address */ string | undefined
          line3?: /** The third line of the address */ string | undefined
          line4?: /** The fourth line of the address */ string | undefined
          postcode?: /** The postcode */ string | undefined
          countryId?: /** The ISO-3166 country code that the address resides within */
          string | undefined
          geolocation?: /** Request body used to update the geolocation coordinates of an existing property's address */
          | {
                latitude?: /** The latitude coordinate of the coordinate pair */
                number | undefined
                longitude?: /** The longitude coordinate of the coordinate pair */
                number | undefined
              }
            | undefined
        }
      | undefined
    bedrooms?: /** The total number of bedrooms in the property */
    number | undefined
    bedroomsMax?: /** The maximum number of bedrooms in the property */
    number | undefined
    numberOfUnits?: /** The number of units offered on the market. This is typically used when marketing development sites. */
    number | undefined
    receptions?: /** The total number of reception rooms in the property */
    number | undefined
    receptionsMax?: /** The maximum number of reception rooms in the property */
    number | undefined
    bathrooms?: /** The total number of bathrooms in the property */
    number | undefined
    bathroomsMax?: /** The maximum number of bathrooms in the property */
    number | undefined
    parkingSpaces?: /** The total number of parking spaces the property has. This is only supported by some departments. Please refer to the glossary for support [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    number | undefined
    councilTax?: /** The council tax banding of the property (A/B/C/D/E/F/G/H/I/notYetAvailable) */
    string | undefined
    internetAdvertising?: /** A flag denoting whether or not this property can be advertised on the internet */
    boolean | undefined
    viewingArrangements?: /** The arrangements regarding viewing the property */
    string | undefined
    videoUrl?: /** The url of a video associated with this property, such as a virtual tour */
    string | undefined
    videoCaption?: /** The caption for the video url associated with this property */
    string | undefined
    video2Url?: /** The url of a second video associated with this property, such as a virtual tour */
    string | undefined
    video2Caption?: /** The caption for the second video url associated with this property */
    string | undefined
    notes?: /** Any general notes regarding the property. These are not usually exposed to end users and may contain sensitive information about a sale */
    string | undefined
    longDescription?: /** The long description of the property */
    string | undefined
    floorLevel?: /** The floor level the property is on. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined
    internalFloors?: /** The number of internal floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined
    totalFloors?: /** The total number of floors the property has. Note that this field can only be set when certain configuration settings are enabled on the property's department. Please [refer to the glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information */
    number | undefined
    boardStatus?: /** The status of the advertising board sited outside or near to the property */
    string | undefined
    boardNotes?: /** Any notes relevant to the advertising board sited outside or near to the property */
    string | undefined
    boardUpdated?: /** The date the advertising board was last updated (or should be updated when the date is in the future) */
    string | undefined
    valuation?: /** The date on which the property was valued. Note that this can differ to physical appointment dates in some cases */
    string | undefined
    epc?: /** Request body used to update the EPC statistics of an existing property */
    | {
          exempt?: /** A flag denoting whether or not this property is exempt from requiring an EPC certificate */
          boolean | undefined
          eer?: /** The current energy efficiency rating */ number | undefined
          eerPotential?: /** The potential energy efficiency rating */
          number | undefined
          eir?: /** The current environmental impact rating */
          number | undefined
          eirPotential?: /** The potential environmental impact rating */
          number | undefined
          fullDocumentUrl?: /** The URL to access the full EPC document */
          string | undefined
          firstPageDocumentUrl?: /** The URL to access the first page of the EPC document */
          string | undefined
        }
      | undefined
    externalArea?: /** Request body to update the external land area of an existing property */
    | {
          type?: /** The unit of area (acres/hectares) */ string | undefined
          min?: /** The minimum area bound */ number | undefined
          max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
          number | undefined
        }
      | undefined
    internalArea?: /** Request body to update the internal dimensions of an existing property */
    | {
          type?: /** The unit of area (squareFeet/squareMetres) */
          string | undefined
          min?: /** The minimum area bound */ number | undefined
          max?: /** The maximum area bound */ number | undefined
        }
      | undefined
    selling?: /** Request body used to update details specific to sales marketing on an existing property */
    | {
          instructed?: /** The date that the property was marked as for sale */
          string | undefined
          price?: /** The marketing price of the property */ number | undefined
          reservationFee?: /** The fee charged by the agent to reserve a property (typically a new build) */
          number | undefined
          qualifier?: /** The price qualifier (askingPrice/priceOnApplication/guidePrice/offersInRegion/offersOver/offersInExcess/fixedPrice/priceReducedTo) */
          string | undefined
          status?: /** The current status of the sale (preAppraisal/valuation/paidValuation/forSale/forSaleUnavailable/underOffer/underOfferUnavailable/reserved/exchanged/completed/soldExternally/withdrawn) */
          string | undefined
          disposal?: /** The method used to sell the property (auction/confidential/tender/offersInvited/privateTreaty/sharedOwnership) */
          string | undefined
          completed?: /** The date the property sale was completed */
          string | undefined
          exchanged?: /** The date the property was exchanged */
          string | undefined
          accountPaid?: /** The date the property account was paid */
          string | undefined
          tenure?: /** Request body used to set the tenure of an existing property */
          | {
                type?: /** The type of tenure that applies to the property (freehold/leasehold/shareOfFreehold/commonhold/tba) */
                string | undefined
                expiry?: /** The tenure expiration date */ string | undefined
              }
            | undefined
          sellingAgency?: /** The selling agency type (marketingForAssociate/clientsOnly/comparable/subAgent/jointSole/jointSoleFeeAvailable/multiple/multipleFeeAvailable/ownToSell/soleSellingRights/soleSellingRightsFeeAvailable/soleAgent/soleAgentFeeAvailable) */
          string | undefined
          agencyId?: /** The unique identifier of the custom selling agency type - only applicable when SellingAgency is not set */
          string | undefined
          agreementExpiry?: /** The date on which the agreement between the vendor and agent expires */
          string | undefined
          fee?: /** Request body used to update the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */
                string | undefined
                amount?: /** The commission letting fee amount */
                number | undefined
              }
            | undefined
          recommendedPrice?: /** The agent's recommended asking price */
          number | undefined
          valuationPrice?: /** The agent's valuation price */ number | undefined
          brochureId?: /** The unique identifier of the document used for the sales brochure */
          string | undefined
          decoration?: /** The property's decorative condition (unmodernised/fair/good/veryGood) */
          Array<string> | undefined
          sharedOwnership?: /** Details relating to the shared ownership of the property */
          | {
                sharedPercentage?: /** The percentage of the shared ownership property being sold by the vendor */
                number | undefined
                rent?: /** The rent payable on the remainder of the shared ownership property */
                number | undefined
                rentFrequency?: /** The frequency at which the shared ownership rent should be paid */
                string | undefined
              }
            | undefined
        }
      | undefined
    letting?: /** Request body used to update details specific to lettings marketing on an existing property */
    | {
          instructed?: /** The date the property was marked as to let */
          string | undefined
          availableFrom?: /** The date the property is next available from */
          string | undefined
          availableTo?: /** The date the property is available to */
          string | undefined
          agreementSigned?: /** The date the letting agreement between the landlord and agent was signed */
          string | undefined
          rent?: /** The rent being charged for the property */
          number | undefined
          rentFrequency?: /** The frequency at which rent will be collected (weekly/monthly/annually) */
          string | undefined
          rentIncludes?: /** Details of any bills that are included in the rent */
          string | undefined
          furnishing?: /** The furnishing state that the property can be offered in (furnished/unfurnished/partFurnished) */
          Array<string> | undefined
          term?: /** The acceptable letting terms (short/long/any) */
          string | undefined
          status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
          string | undefined
          agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
          string | undefined
          landlordId?: /** The unique identifier of the landlord letting the property */
          string | undefined
          brochureId?: /** The unique identifier of the document used for the lettings brochure */
          string | undefined
          worksOrderNote?: /** A note to accompany any works orders created for the property */
          string | undefined
          minimumTerm?: /** Sets the minimum number of months the property can be let out for */
          number | undefined
          managementFee?: /** Request body used to update the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */
                string | undefined
                amount?: /** The commission letting fee amount */
                number | undefined
              }
            | undefined
          lettingFee?: /** Request body used to update the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */
                string | undefined
                amount?: /** The commission letting fee amount */
                number | undefined
              }
            | undefined
          qualifier?: /** The rent qualifier (rentOnApplication/askingRent) */
          string | undefined
          utilities?: /** Representation of property details specific to utilities */
          | {
                hasGas?: /** A flag denoting whether or not the property has gas connected */
                boolean | undefined
                gasCompanyId?: /** The unique identifier of the company supplying the gas to the property */
                string | undefined
                gasMeterPoint?: /** The gas meter point number */
                string | undefined
                electricityCompanyId?: /** The unique identifier of the company supplying the electricity to the property */
                string | undefined
                electricityMeterPoint?: /** The electricity meter point number */
                string | undefined
                waterCompanyId?: /** The unique identifier of the company supplying the water to the property */
                string | undefined
                waterMeterPoint?: /** The water meter point number */
                string | undefined
                telephoneCompanyId?: /** The unique identifier of the company supplying the telephone to the property */
                string | undefined
                internetCompanyId?: /** The unique identifier of the company supplying the internet to the property */
                string | undefined
                cableTvCompanyId?: /** The unique identifier of the company supplying the cable tv to the property */
                string | undefined
              }
            | undefined
          deposit?: /** Representation of a property details related to deposit */
          | {
                type?: /** The type of deposit (weeks/months/fixed) */
                string | undefined
                amount?: /** The deposit amount. This can be the number of weeks or months rent or a monetry amount based on the `type` */
                number | undefined
              }
            | undefined
          rentInsurance?: /** Request body used to update details specific to rent insurance associated with a lettings property */
          | {
                status?: /** Status indicating whether or not rent protection insurance has been taken out (notAsked/cancelled/declined/quoted/taken) */
                string | undefined
                referenceNumber?: /** The reference number of the insurance policy when rent protection insurance has been taken out */
                string | undefined
                start?: /** The insurance policy start date */
                string | undefined
                end?: /** The insurance policy end date */ string | undefined
                cancelledReasonId?: /** The identifier of the reason the insurance policy was cancelled, to be used in conjunction with the relevant configuration API endpoint */
                string | undefined
                cancelledComment?: /** A textual comment or note entered by the agent when an insurance policy was cancelled */
                string | undefined
                autoRenew?: /** Flag indicating whether or not the insurance policy should auto renew */
                boolean | undefined
              }
            | undefined
          licencing?: /** Representation of property details specific to property Licencing */
          | {
                licenceRequired?: /** A flag determining whether or not a licence is required to let the property. Typically required for houses of multiple occupancy (HMOs) */
                boolean | undefined
                licenceType?: /** The type of licence (additional/mandatory/none/selective) */
                string | undefined
                households?: /** The number of households that the licence permits in the property */
                number | undefined
                occupants?: /** The number of occupants that the licence permits in the property */
                number | undefined
                aboveCommercialPremises?: /** A flag determining whether or not the property is above commercial premises */
                boolean | undefined
                application?: /** Representation of property details specific to property licence application */
                | {
                      status?: /** The status of the licence application (applied/granted/landlordApplying/notApplicable) */
                      string | undefined
                      referenceNumber?: /** The licence application reference number */
                      string | undefined
                      date?: /** The date the licence was applied for */
                      string | undefined
                      granted?: /** The date the licence application was granted */
                      string | undefined
                      expiry?: /** The date the licence will expire */
                      string | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    regional?: /** Request body used to set region specific property details. Child models are named based on the ISO3166 country code that the data inside the model relates to */
    | {
          irl?: /** Request body used to set the data specific to properties in Ireland */
          | {
                buildingEnergyRating?: /** Request body used to set the energy performance rating information for properties in Ireland */
                | {
                      exempt?: /** A flag denoting whether or not this property is exempt from requiring a Building Energy Rating (BER) certificate */
                      boolean | undefined
                      rating?: /** The BER rating of the property */
                      string | undefined
                      refNumber?: /** The BER certificate reference number */
                      string | undefined
                      epi?: /** The energy performance indicator for the property */
                      string | undefined
                    }
                  | undefined
              }
            | undefined
        }
      | undefined
    rural?: /** Request body used to set details specific to rural properties. */
    | {
          buildingsDescription?: /** Details of the building associated with the property. */
          string | undefined
          landDescription?: /** Details of the land associated with the property. */
          string | undefined
        }
      | undefined
    type?: /** The attributes describing the overall type of the property (eg house, bungalow, land), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    style?: /** The attributes describing the style of property (eg detached, semiDetached), defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    situation?: /** The attributes describing other aspects of the property - such as outside space - as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    parking?: /** The attributes describing the parking available at the property (eg garage), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    age?: /** The attributes describing the age of the property (eg new, period), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    locality?: /** The attributes describing the general location of the property (eg rural, townCity), as defined by the property's [department](https://foundations-documentation.reapit.cloud/platform-glossary#department) */
    Array<string> | undefined
    negotiatorId?: /** The unique identifier of the negotiator managing the property */
    string | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
    Array<string> | undefined
    areaId?: /** The unique identifier of the area that the property resides in */
    string | undefined
    url?: /** The url to the property on an external website */
    string | undefined
    urlCaption?: /** The caption to accompany the url to the property on an external website */
    string | undefined
    groundRent?: /** Any ground rent payment that applies to the property */
    number | undefined
    groundRentComment?: /** Comments regarding the ground rent of the property */
    string | undefined
    groundRentReviewDate?: /** The date when the ground rent payable on the property should be reviewed */
    string | undefined
    groundRentIncrease?: /** The annual percentage increase of the ground rent after being reviewed */
    number | undefined
    serviceCharge?: /** Any service charge payment that applies to the property */
    number | undefined
    serviceChargeComment?: /** Comments regarding the service charge of the property */
    string | undefined
    availableServicesIds?: /** Identifiers of any services connected at the property */
    Array<string> | undefined
    metadata?: /** App specific metadata to set against the property */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiPropertiesIdCertificatesArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
  category?:
    | Array<'safetyCertificate' | 'insurancePolicy' | 'warranty'>
    | undefined
}
export type useGetApiPropertiesIdCertificatesCertificateIdArgs = {
  id: string
  certificateId: string
}
export type patchApiPropertiesIdCertificatesCertificateIdArgs = {
  'If-Match': string
  id: string
  certificateId: string
  body: /** Request body used to update an existing certificate */
  {
    start?: /** The certificate's start date */ string | undefined
    expiry?: /** The certificate's expiry date */ string | undefined
    companyId?: /** The unique identifier of the company */ string | undefined
    notes?: /** Any general notes regarding the certificate */
    string | undefined
    referenceNumber?: /** The certificate's reference number */
    string | undefined
  }
}
export type useGetApiPropertiesIdCertificatesResponsibilitiesArgs = {
  id: string
}
export type patchApiPropertiesIdCertificatesResponsibilitiesArgs = {
  'If-Match': string
  id: string
  body: /** Object containing a collection of certificate type to responsible party mappings */
  {
    responsibleParties?: /** A collection of certificate type to responsible party mappings */
    | Array</** Record describing the responsible party for a given type of certificate within a property entry */
        {
          typeId?: /** Identifier for the type of certificate for which the party is responsible */
          string | undefined
          responsibleParty?: /** The party responsible for the specified certificate type (landlord/agent/notRequired/notSet) */
          string | undefined
        }>
      | undefined
  }
}
export type useGetApiPropertiesIdKeysArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiPropertiesIdKeysKeyIdArgs = { id: string; keyId: string }
export type useGetApiPropertiesIdKeysKeyIdMovementsArgs = {
  id: string
  keyId: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiPropertiesIdKeysKeyIdMovementsMovementIdArgs = {
  id: string
  keyId: string
  movementId: string
}
export type useGetApiPropertiesIdChecksArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
  type?: string | undefined
}
export type useGetApiPropertiesIdChecksCheckIdArgs = {
  id: string
  checkId: string
}
export type deleteApiPropertiesIdChecksCheckIdArgs = {
  id: string
  checkId: string
}
export type patchApiPropertiesIdChecksCheckIdArgs = {
  'If-Match': string
  id: string
  checkId: string
  body: /** Model for the update of an existing check */
  {
    status?: /** The status of the check (needed/notNeeded/arranging/completed) */
    string | undefined
  }
}
export type useGetApiPropertiesCertificatesArgs = {
  pageNumber?: number | undefined
  pageSize?: number | undefined
  sortBy?: string | undefined
  expiryDateFrom?: string | undefined
  expiryDateTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  categories?: Array<string> | undefined
  typeIds?: Array<string> | undefined
  propertyIds?: Array<string> | undefined
  embed?: Array<'property'> | undefined
}
export type useGetApiPropertiesIdAppraisalsArgs = {
  id: string
  pageNumber?: number | undefined
  pageSize?: number | undefined
}
export type useGetApiPropertiesIdAppraisalsAppraisalIdArgs = {
  id: string
  appraisalId: string
}
export type patchApiPropertiesIdAppraisalsAppraisalIdArgs = {
  'If-Match': string
  id: string
  appraisalId: string
  body: /** Model for the creation of a new property appraisal */
  {
    companyId?: /** Unique identifier of the appraising company */
    string | undefined
    date?: /** The date of the appraisal */ string | undefined
    price?: /** The appraisal value */ number | undefined
    fee?: /** Representation of the the commission fee for a property */
    | {
          type?: /** The commission letting fee type (percentage/fixed) */
          string | undefined
          amount?: /** The commission letting fee amount */ number | undefined
        }
      | undefined
    notes?: /** Free-text notes associated with the appraisal */
    string | undefined
  }
}
export type useGetApiPropertyImagesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  id?: Array<string> | undefined
  embed?: Array<'property'> | undefined
  propertyId?: Array<string> | undefined
  type?: Array<'photograph' | 'map' | 'floorPlan' | 'epc'> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  fromArchive?: boolean | undefined
  metadata?: Array<string> | undefined
}
export type useGetApiPropertyImagesIdArgs = {
  id: string
  embed?: Array<'property'> | undefined
}
export type deleteApiPropertyImagesIdArgs = { id: string }
export type patchApiPropertyImagesIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing property image */
  {
    caption?: /** The image caption */ string | undefined
    type?: /** The type of image (photograph/floorPlan/epc/map) */
    string | undefined
  }
}
export type useGetApiReferralsArgs = {
  id?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  applicantId?: Array<string> | undefined
  contactId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  referralTypeId?: Array<string> | undefined
  status?:
    | Array<
        | 'sent'
        | 'inProgress'
        | 'succeeded'
        | 'cancelled'
        | 'failed'
        | 'paid'
        | 'declined'
      >
    | undefined
  embed?:
    | Array<'applicant' | 'contact' | 'negotiator' | 'property' | 'type'>
    | undefined
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export type useGetApiReferralsIdArgs = {
  id: string
  embed?:
    | Array<'applicant' | 'contact' | 'negotiator' | 'property' | 'type'>
    | undefined
}
export type patchApiReferralsIdArgs = {
  'If-Match': string
  id: string
  body: /** Update Referral Model */
  {
    status?: /** The status of the referral (sent/succeeded/cancelled/failed/paid/declined/inProgress) */
    string | undefined
    amount?: /** The amount paid to the agent for the referral */
    number | undefined
    metadata?: /** App specific metadata to set against the referral */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiReferralsTypesArgs = {
  id?: Array<string> | undefined
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
}
export type useGetApiReferralsTypesIdArgs = { id: string }
export type useGetApiResthooksArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  active?: boolean | undefined
}
export type useGetApiResthooksIdArgs = { id: string }
export type deleteApiResthooksIdArgs = { id: string }
export type useGetApiSourcesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  id?: Array<string> | undefined
  officeId?: Array<string> | undefined
  departmentId?: Array<string> | undefined
  name?: string | undefined
  type?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
}
export type useGetApiSourcesIdArgs = { id: string }
export type patchApiSourcesIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing source of business */
  {
    name?: /** The name of the source or advertising publication */
    string | undefined
    type?: /** The type of the source (source/advertisement) */
    string | undefined
    officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
    Array<string> | undefined
    departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
    Array<string> | undefined
  }
}
export type useGetApiTasksArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?:
    | Array<
        'applicant' | 'contact' | 'landlord' | 'property' | 'tenancy' | 'type'
      >
    | undefined
  id?: Array<string> | undefined
  applicantId?: Array<string> | undefined
  contactId?: Array<string> | undefined
  landlordId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  recipientId?: Array<string> | undefined
  senderId?: Array<string> | undefined
  typeId?: Array<string> | undefined
  tenancyId?: Array<string> | undefined
  activatesFrom?: string | undefined
  activatesTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  metadata?: Array<string> | undefined
}
export type useGetApiTasksIdArgs = {
  id: string
  embed?:
    | Array<
        'applicant' | 'contact' | 'landlord' | 'property' | 'tenancy' | 'type'
      >
    | undefined
}
export type patchApiTasksIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing task, which can also be an internal message */
  {
    activates?: /** The date the task becomes active (Required when 'TypeId' is given) */
    string | undefined
    completed?: /** The date the task was completed */ string | undefined
    typeId?: /** The unique identifier of the task type */ string | undefined
    senderId?: /** The unique identifer of the negotiator that created the task */
    string | undefined
    text?: /** The textual contents of the task or message */ string | undefined
    landlordId?: /** The unique identifier of the landlord the task is associated to */
    string | undefined
    propertyId?: /** The unique identifier of the property the task is associated to */
    string | undefined
    applicantId?: /** The unique identifier of the applicant the task is associated to */
    string | undefined
    tenancyId?: /** The unique identifier of the tenancy the task is associated to */
    string | undefined
    contactId?: /** The unique identifier of the contact the task is associated to */
    string | undefined
    recipientId?: /** The unique identifier of the negotiator or office the task is being sent to */
    string | undefined
    recipientType?: /** The type of the recipient (office/negotiator) */
    string | undefined
    metadata?: /** App specific metadata that has been set against the task */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiTenanciesArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  fromArchive?: boolean | undefined
  embed?:
    | Array<
        | 'appointments'
        | 'applicant'
        | 'extensions'
        | 'documents'
        | 'negotiator'
        | 'property'
        | 'source'
        | 'tasks'
        | 'type'
      >
    | undefined
  id?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  applicantId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  name?: string | undefined
  nameType?: string | undefined
  status?:
    | Array<
        | 'offerPending'
        | 'offerWithdrawn'
        | 'offerRejected'
        | 'arranging'
        | 'current'
        | 'finished'
        | 'cancelled'
      >
    | undefined
  email?: Array<string> | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  endDateFrom?: string | undefined
  endDateTo?: string | undefined
  startDateFrom?: string | undefined
  startDateTo?: string | undefined
  metadata?: Array<string> | undefined
}
export type useGetApiTenanciesIdArgs = {
  id: string
  embed?:
    | Array<
        | 'appointments'
        | 'applicant'
        | 'extensions'
        | 'documents'
        | 'negotiator'
        | 'property'
        | 'source'
        | 'tasks'
        | 'type'
      >
    | undefined
}
export type patchApiTenanciesIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing Tenancy */
  {
    startDate?: /** The start date of the tenancy */ string | undefined
    endDate?: /** The end date of the tenancy */ string | undefined
    status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging/current/finished/cancelled) */
    string | undefined
    agentRole?: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    string | undefined
    rent?: /** The amount of rent required, returned in relation to the collection frequency */
    number | undefined
    rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */
    string | undefined
    endDateConfirmed?: /** Flag for end date confirmation */ boolean | undefined
    isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */
    boolean | undefined
    typeId?: /** The unique identifier of the type of tenancy */
    string | undefined
    negotiatorId?: /** The unique identifier of the negotiator who is managing the tenancy */
    string | undefined
    source?: /** Request body used to set the source of a new tenancy */
    | {
          id?: /** The unique identifier of the source for the tenancy */
          string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    rentInstalmentsFrequency?: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
    string | undefined
    rentInstalmentsAmount?: /** The amount due for each rent instalment (where specified) */
    number | undefined
    rentInstalmentsStart?: /** The date that the first instalment is due */
    string | undefined
    meterReadingGas?: /** The recorded utility reading for the gas meter */
    string | undefined
    meterReadingGasLastRead?: /** Date of when the reading of gas utility was last recorded */
    string | undefined
    meterReadingElectricity?: /** The recorded utility reading for the electricity meter */
    string | undefined
    meterReadingElectricityLastRead?: /** Date of when the reading of electricity utility was last recorded */
    string | undefined
    meterReadingWater?: /** The recorded utility reading for the water meter */
    string | undefined
    meterReadingWaterLastRead?: /** Date of when the reading of water utility was last recorded */
    string | undefined
    feeNotes?: /** Financial notes set against the tenancy */ string | undefined
    legalStatusId?: /** The identifier of the legal status to set against the tenancy */
    string | undefined
    deposit?: /** Request body used to set the deposit of a tenancy */
    | {
          heldBy?: /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
          string | undefined
          period?: /** The number of weeks or months rent collected as the deposit on the tenancy */
          number | undefined
          type?: /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */
          string | undefined
          sum?: /** The amount of deposit held */ number | undefined
        }
      | undefined
    lettingFee?: /** Request body used to update letting fees on an existing tenancy */
    | {
          type?: /** The letting fee type (percentage/fixed) */
          string | undefined
          amount?: /** The fee amount */ number | undefined
          frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
          string | undefined
        }
      | undefined
    managementFee?: /** Request body used to update management fees on an existing tenancy */
    | {
          type?: /** The management fee type (percentage/fixed) */
          string | undefined
          amount?: /** The fee amount */ number | undefined
          frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
          string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the tenancy */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiTenanciesIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiTenanciesIdRelationshipsRelationshipIdArgs = {
  id: string
  relationshipId: string
}
export type useGetApiTenanciesIdChecksArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
  type?: string | undefined
  status?: Array<'needed' | 'notNeeded' | 'arranged' | 'completed'> | undefined
}
export type useGetApiTenanciesIdChecksCheckIdArgs = {
  id: string
  checkId: string
}
export type deleteApiTenanciesIdChecksCheckIdArgs = {
  id: string
  checkId: string
}
export type patchApiTenanciesIdChecksCheckIdArgs = {
  'If-Match': string
  id: string
  checkId: string
  body: /** Model for updat of an existing tenancy check */
  {
    status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
    string | undefined
    metadata?: /** App specific metadata to set against the tenancy check */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiTenanciesIdBreakClausesArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiTenanciesIdBreakClausesClauseIdArgs = {
  id: string
  clauseId: string
}
export type deleteApiTenanciesIdBreakClausesClauseIdArgs = {
  id: string
  clauseId: string
}
export type patchApiTenanciesIdBreakClausesClauseIdArgs = {
  'If-Match': string
  id: string
  clauseId: string
  body: /** Request body used to update tenancy break clause */
  {
    active?: /** The date the break clause becomes/became active */
    string | undefined
    appliesTo?: /** The responsible party (landlord/tenant/mutual) */
    string | undefined
    agreements?: /** Request body used to set party agreements to a specific clause in a tenancy agreement */
    | {
          landlord?: /** A flag to determine if the landlord has agreed */
          boolean | undefined
          tenant?: /** A flag to determine if the tenant has agreed */
          boolean | undefined
        }
      | undefined
    breakFrom?: /** Request body used to set a break clauses break from details */
    | {
          date?: /** The date the break from clause can be used */
          string | undefined
          minTermMonths?: /** The minimum number of months until the break clause can be used */
          number | undefined
        }
      | undefined
    noticeRequired?: /** Request body used to set a break clauses notice required details */
    | {
          date?: /** The date a break clauses notice is required by */
          string | undefined
          beforeBreakMonths?: /** The number of months the notice is required before the break clause */
          number | undefined
        }
      | undefined
  }
}
export type useGetApiTenanciesIdAllowancesArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiTenanciesIdAllowancesAllowanceIdArgs = {
  id: string
  allowanceId: string
}
export type deleteApiTenanciesIdAllowancesAllowanceIdArgs = {
  id: string
  allowanceId: string
}
export type patchApiTenanciesIdAllowancesAllowanceIdArgs = {
  'If-Match': string
  id: string
  allowanceId: string
  body: /** Request body used to update tenancy allowance */
  {
    state?: /** The state of the allowance (allowed/notAllowed) */
    string | undefined
    agreements?: /** Request body used to set party agreements to a specific clause in a tenancy agreement */
    | {
          landlord?: /** A flag to determine if the landlord has agreed */
          boolean | undefined
          tenant?: /** A flag to determine if the tenant has agreed */
          boolean | undefined
        }
      | undefined
  }
}
export type useGetApiTenanciesIdResponsibilitiesArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiTenanciesIdResponsibilitiesResponsibilityIdArgs = {
  id: string
  responsibilityId: string
}
export type deleteApiTenanciesIdResponsibilitiesResponsibilityIdArgs = {
  id: string
  responsibilityId: string
}
export type patchApiTenanciesIdResponsibilitiesResponsibilityIdArgs = {
  'If-Match': string
  id: string
  responsibilityId: string
  body: /** Request body used to update tenancy responsibility */
  {
    appliesTo?: /** The responsible party (landlord/tenant) */
    string | undefined
    agreements?: /** Request body used to set party agreements to a specific clause in a tenancy agreement */
    | {
          landlord?: /** A flag to determine if the landlord has agreed */
          boolean | undefined
          tenant?: /** A flag to determine if the tenant has agreed */
          boolean | undefined
        }
      | undefined
  }
}
export type useGetApiTenanciesIdRenewalNegotiationsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiTenanciesIdRenewalNegotiationsRenewalIdArgs = {
  id: string
  renewalId: string
}
export type patchApiTenanciesIdRenewalNegotiationsRenewalIdArgs = {
  'If-Match': string
  id: string
  renewalId: string
  body: /** Request body used to update a tenancy renewal negotiation */
  {
    startDate?: /** The proposed start date of the tenancy renewal */
    string | undefined
    endDate?: /** The proposed end date of the tenancy renewal */
    string | undefined
    negotiatorId?: /** The unique identifier of the negotiator who is managing this tenancy renewal */
    string | undefined
    rent?: /** The amount of rent required, returned in relation to the collection frequency */
    number | undefined
    rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */
    string | undefined
    lettingFee?: /** Request body used to update a tenancy renewals letting fee */
    | {
          type?: /** The letting fee type (fixed/perentage) */
          string | undefined
          amount?: /** The letting fee amount as a fixed price or percentage based on the `type` */
          number | undefined
          frequency?: /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
          string | undefined
        }
      | undefined
    managementFee?: /** Request body used to update a tenancy renewals management fee */
    | {
          type?: /** The mangement fee type (fixed/perentage) */
          string | undefined
          amount?: /** The mangement fee amount as a fixed price or percentage based on the `type` */
          number | undefined
          frequency?: /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
          string | undefined
        }
      | undefined
  }
}
export type useGetApiTenanciesIdExtensionsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiTenanciesIdExtensionsExtensionIdArgs = {
  id: string
  extensionId: string
}
export type useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs = {
  id: string
  renewalId: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs =
  { id: string; renewalId: string; checkId: string }
export type deleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs =
  { 'If-Match': string; id: string; renewalId: string; checkId: string }
export type patchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs = {
  'If-Match': string
  id: string
  renewalId: string
  checkId: string
  body: /** Request body used to update a tenancy renewal check */
  {
    status?: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
    string | undefined
    metadata?: /** App specific metadata to set against the tenancy renewal check */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiTransactionsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  id?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  landlordId?: Array<string> | undefined
  tenancyId?: Array<string> | undefined
  status?:
    | Array<'awaitingAuthorisation' | 'awaitingPosting' | 'posted' | 'rejected'>
    | undefined
  type?:
    | Array<
        | 'creditAdjustment'
        | 'creditNoteCorrection'
        | 'creditNoteGoodwillPayment'
        | 'creditNoteRefund'
        | 'creditNoteRepayment'
        | 'creditNoteWriteOff'
        | 'debitAdjustment'
        | 'deposit'
        | 'float'
        | 'invoice'
        | 'journal'
        | 'openingBalanceDr'
        | 'openingBalancingCr'
        | 'payment'
        | 'reserveFunds'
        | 'transfer'
      >
    | undefined
  ledger?: Array<'landlord' | 'tenant' | 'vendor'> | undefined
  category?:
    | Array<
        | 'advertisingCharge'
        | 'accountTransfer'
        | 'bankCharges'
        | 'buyerAdminFee'
        | 'buyerDeposit'
        | 'buyerPayment'
        | 'deposit'
        | 'depositDeduction'
        | 'depositRefund'
        | 'depositTransfer'
        | 'depositTransferToAgent'
        | 'depositTransferToLandlord'
        | 'depositTransferToScheme'
        | 'estateServiceCharge'
        | 'estateWorksOrder'
        | 'estateUnitWorksOrder'
        | 'externalCredit'
        | 'externalAgentFee'
        | 'freeholderPayment'
        | 'float'
        | 'groundRent'
        | 'goodwillPayment'
        | 'holdingDeposit'
        | 'introducingTenantFee'
        | 'landlordAdminFee'
        | 'landlordTax'
        | 'landlordPayment'
        | 'landlordToSupplierPayment'
        | 'landlordWorksOrder'
        | 'leaseholderAdminFee'
        | 'leaseholderPayment'
        | 'leaseholderRepayment'
        | 'leaseholderWorksOrder'
        | 'lettingFee'
        | 'managementFee'
        | 'paymentSurcharge'
        | 'receipt'
        | 'rent'
        | 'rentGuarantee'
        | 'rentInsurance'
        | 'recoveryPayment'
        | 'reserveFund'
        | 'tenantAdminFee'
        | 'tenantPayment'
        | 'tenantToLandlordPayment'
        | 'tenantToSupplierPayment'
        | 'trustAccountingInvoice'
        | 'tenantWorksOrder'
        | 'vacantManagementFee'
        | 'vendorAdminFee'
        | 'vendorCommission'
        | 'vendorPayment'
        | 'vendorToSupplierPayment'
        | 'worksOrderPayment'
      >
    | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  outstandingFrom?: number | undefined
  outstandingTo?: number | undefined
}
export type useGetApiTransactionsIdArgs = { id: string }
export type useGetApiTransactionsNominalAccountsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  id?: Array<string> | undefined
  appliesToWorksOrders?: boolean | undefined
}
export type useGetApiTransactionsNominalAccountsIdArgs = { id: string }
export type useGetApiVendorsIdArgs = {
  id: string
  embed?:
    | Array<
        | 'negotiator'
        | 'offices'
        | 'property'
        | 'sellingReason'
        | 'solicitor'
        | 'source'
        | 'type'
      >
    | undefined
}
export type patchApiVendorsIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing vendor */
  {
    lastCall?: /** The date the vendor was last called */ string | undefined
    nextCall?: /** The date the vendor is next due to be called */
    string | undefined
    typeId?: /** The unique identifier of the type of vendor */
    string | undefined
    sellingReasonId?: /** The unique identifier of the reason the vendor is selling */
    string | undefined
    solicitorId?: /** The unique identifier of the vendor's solicitor */
    string | undefined
    correspondenceAddressType?: /** Value indicating where hard copies of correspondence should be sent for the primary contact (property/contact) */
    string | undefined
    source?: /** Representation of a vendor's source */
    | {
          id?: /** The unique identifier of the source of the vendor */
          string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    metadata?: /** App specific metadata that has been set against the vendor */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiVendorsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?:
    | Array<
        | 'negotiator'
        | 'offices'
        | 'property'
        | 'sellingReason'
        | 'solicitor'
        | 'source'
        | 'type'
      >
    | undefined
  id?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  officeId?: Array<string> | undefined
  email?: Array<string> | undefined
  fromArchive?: boolean | undefined
  address?: string | undefined
  name?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  lastCallFrom?: string | undefined
  lastCallTo?: string | undefined
  nextCallFrom?: string | undefined
  nextCallTo?: string | undefined
  metadata?: Array<string> | undefined
}
export type useGetApiVendorsIdRelationshipsArgs = {
  id: string
  pageSize?: number | undefined
  pageNumber?: number | undefined
}
export type useGetApiVendorsIdRelationshipsRelationshipIdArgs = {
  id: string
  relationshipId: string
}
export type deleteApiVendorsIdRelationshipsRelationshipIdArgs = {
  id: string
  relationshipId: string
}
export type useGetApiWorksOrdersArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  sortBy?: string | undefined
  embed?:
    | Array<
        'company' | 'documents' | 'negotiator' | 'property' | 'tenancy' | 'type'
      >
    | undefined
  id?: Array<string> | undefined
  companyId?: Array<string> | undefined
  negotiatorId?: Array<string> | undefined
  propertyId?: Array<string> | undefined
  status?:
    | Array<
        | 'pendingApproval'
        | 'pendingQuote'
        | 'raised'
        | 'raisedToChase'
        | 'landlordToComplete'
        | 'complete'
        | 'cancelled'
        | 'quoteAccepted'
      >
    | undefined
  tenancyId?: Array<string> | undefined
  typeId?: Array<string> | undefined
  extrasField?: Array<string> | undefined
  completedFrom?: string | undefined
  completedTo?: string | undefined
  createdFrom?: string | undefined
  createdTo?: string | undefined
  modifiedFrom?: string | undefined
  modifiedTo?: string | undefined
  requiredFrom?: string | undefined
  requiredTo?: string | undefined
  metadata?: Array<string> | undefined
}
export type useGetApiWorksOrdersIdArgs = {
  id: string
  embed?:
    | Array<
        'company' | 'documents' | 'negotiator' | 'property' | 'tenancy' | 'type'
      >
    | undefined
  extrasField?: Array<string> | undefined
}
export type patchApiWorksOrdersIdArgs = {
  'If-Match': string
  id: string
  body: /** Request body used to update an existing works order */
  {
    companyId?: /** The unique identifier of the company that has been selected to perform the work */
    string | undefined
    propertyId?: /** The unique identifier of the property where the work is to be carried out */
    string | undefined
    tenancyId?: /** The unique identifier of the tenancy that the works order originated from */
    string | undefined
    negotiatorId?: /** The unique identifier of the negotiator that booked the works order */
    string | undefined
    typeId?: /** The unique id of the type of work that needs to be carried out */
    string | undefined
    status?: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
    string | undefined
    description?: /** A free text description of the work required */
    string | undefined
    reporter?: /** The party requesting the work to be carried out (landlord/tenant/other) */
    string | undefined
    priority?: /** The priority level of the works order (low/medium/high) */
    string | undefined
    booked?: /** The date when the works order was booked */ string | undefined
    required?: /** The date when the work is required to be completed by */
    string | undefined
    completed?: /** The date when the work was completed */ string | undefined
    metadata?: /** App specific metadata to set against the works order */
    Record<string, Record<string, never>> | undefined
  }
}
export type useGetApiWorksOrdersIdItemsArgs = {
  pageSize?: number | undefined
  pageNumber?: number | undefined
  id: string
}
export type useGetApiWorksOrdersIdItemsItemIdArgs = {
  id: string
  itemId: string
}
export type deleteApiWorksOrdersIdItemsItemIdArgs = {
  id: string
  itemId: string
}
export type patchApiWorksOrdersIdItemsItemIdArgs = {
  'If-Match': string
  id: string
  itemId: string
  body: /** Representation of a works order item */
  {
    notes?: /** The notes attached to the works order item */ string | undefined
    chargeTo?: /** The party to be charged for the work being carried out (landlord/tenant) */
    string | undefined
    estimate?: /** The estimate of any costs associated with the work being carried out given to the party to be charged for the work */
    number | undefined
    estimateType?: /** The type of estimate supplied (agent/verbal/written) */
    string | undefined
    netAmount?: /** The net cost of the work to be carried out */
    number | undefined
    vatAmount?: /** The cost of the vat associated with the work */
    number | undefined
    reserveAmount?: /** The amount of funds to be held back by the agent in landlord payment runs to cover the cost of any works required by the works order item */
    number | undefined
  }
}

const getApiApplicantsFn = async (args: useGetApiApplicantsArgs) => {
  const res = await fetch(`/applicants/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of an applicant */
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().optional() }))
              .optional(),
            _embedded: z.record(z.string(), z.object({})).optional(),
            /** The unique identifier of the applicant */
            id: z.string().optional(),
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
            /** The status id of the applicant */
            statusId: z.string().optional(),
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
                /** The source type (office/source) */
                type: z.string().optional()
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
                      /** The building name */
                      buildingName: z.string().optional(),
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
    .parse(data)
}

export const useGetApiApplicants = (args: useGetApiApplicantsArgs) => {
  const result = useQuery({
    queryKey: ['Applicants'],
    queryFn: () => getApiApplicantsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiApplicantsIdFn = async (args: useGetApiApplicantsIdArgs) => {
  const res = await fetch(`/applicants/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of an applicant */
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
              /** The second line of the address */
              line2: z.string().optional(),
              /** The third line of the address */ line3: z.string().optional(),
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
  }).parse(data)
}

export const useGetApiApplicantsId = (args: useGetApiApplicantsIdArgs) => {
  const result = useQuery({
    queryKey: ['Applicants'],
    queryFn: () => getApiApplicantsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiApplicantsIdFn = async (args: patchApiApplicantsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/applicants/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiApplicantsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiApplicantsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Applicants'] })
    }
  })
}

const getApiApplicantsIdRelationshipsFn = async (
  args: useGetApiApplicantsIdRelationshipsArgs
) => {
  const res = await fetch(`/applicants/${args.id}/relationships`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiApplicantsIdRelationships = (
  args: useGetApiApplicantsIdRelationshipsArgs
) => {
  const result = useQuery({
    queryKey: ['Applicants'],
    queryFn: () => getApiApplicantsIdRelationshipsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiApplicantsIdRelationshipsRelationshipIdFn = async (
  args: useGetApiApplicantsIdRelationshipsRelationshipIdArgs
) => {
  const res = await fetch(
    `/applicants/${args.id}/relationships/${args.relationshipId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of a relationship between an applicant and a contact or company */
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
  }).parse(data)
}

export const useGetApiApplicantsIdRelationshipsRelationshipId = (
  args: useGetApiApplicantsIdRelationshipsRelationshipIdArgs
) => {
  const result = useQuery({
    queryKey: ['Applicants'],
    queryFn: () => getApiApplicantsIdRelationshipsRelationshipIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiApplicantsIdRelationshipsRelationshipIdFn = async (
  args: deleteApiApplicantsIdRelationshipsRelationshipIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/applicants/${args.id}/relationships/${args.relationshipId}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiApplicantsIdRelationshipsRelationshipId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiApplicantsIdRelationshipsRelationshipIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Applicants'] })
    }
  })
}

const getApiAreasFn = async (args: useGetApiAreasArgs) => {
  const res = await fetch(`/areas/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiAreas = (args: useGetApiAreasArgs) => {
  const result = useQuery({
    queryKey: ['Areas'],
    queryFn: () => getApiAreasFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiAreasIdFn = async (args: useGetApiAreasIdArgs) => {
  const res = await fetch(`/areas/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of an area that properties reside in, or applicants are looking to buy/rent in */
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
  }).parse(data)
}

export const useGetApiAreasId = (args: useGetApiAreasIdArgs) => {
  const result = useQuery({
    queryKey: ['Areas'],
    queryFn: () => getApiAreasIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiAreasIdFn = async (args: patchApiAreasIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/areas/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiAreasId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiAreasIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Areas'] })
    }
  })
}

const getApiAppointmentsFn = async (args: useGetApiAppointmentsArgs) => {
  const res = await fetch(`/appointments/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
                      /** The name of the contact */
                      name: z.string().optional(),
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
    .parse(data)
}

export const useGetApiAppointments = (args: useGetApiAppointmentsArgs) => {
  const result = useQuery({
    queryKey: ['Appointments'],
    queryFn: () => getApiAppointmentsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiAppointmentsIdFn = async (args: useGetApiAppointmentsIdArgs) => {
  const res = await fetch(`/appointments/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a calendar appointment */
  z.object({
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
  }).parse(data)
}

export const useGetApiAppointmentsId = (args: useGetApiAppointmentsIdArgs) => {
  const result = useQuery({
    queryKey: ['Appointments'],
    queryFn: () => getApiAppointmentsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiAppointmentsIdFn = async (args: patchApiAppointmentsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/appointments/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiAppointmentsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiAppointmentsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
    }
  })
}

const getApiAppointmentsIdOpenHouseAttendeesFn = async (
  args: useGetApiAppointmentsIdOpenHouseAttendeesArgs
) => {
  const res = await fetch(`/appointments/${args.id}/openHouseAttendees`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
                      /** The name of the contact */
                      name: z.string().optional(),
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
    .parse(data)
}

export const useGetApiAppointmentsIdOpenHouseAttendees = (
  args: useGetApiAppointmentsIdOpenHouseAttendeesArgs
) => {
  const result = useQuery({
    queryKey: ['Appointments'],
    queryFn: () => getApiAppointmentsIdOpenHouseAttendeesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn = async (
  args: useGetApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs
) => {
  const res = await fetch(
    `/appointments/${args.id}/openHouseAttendees/${args.openHouseAttendeeId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of a calendar appointment */
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
  }).parse(data)
}

export const useGetApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeId = (
  args: useGetApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs
) => {
  const result = useQuery({
    queryKey: ['Appointments'],
    queryFn: () =>
      getApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn = async (
  args: deleteApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/appointments/${args.id}/openHouseAttendees/${args.openHouseAttendeeId}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeId =
  () => {
    const queryClient = useQueryClient()
    const { handleFetchError } = useFetchError()

    return useMutation({
      mutationFn:
        deleteApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn,
      onError: handleFetchError,
      onSuccess: () => {
        // Invalidate and refetch
        void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
      }
    })
  }

const patchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn = async (
  args: patchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/appointments/${args.id}/openHouseAttendees/${args.openHouseAttendeeId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeId =
  () => {
    const queryClient = useQueryClient()
    const { handleFetchError } = useFetchError()

    return useMutation({
      mutationFn: patchApiAppointmentsIdOpenHouseAttendeesOpenHouseAttendeeIdFn,
      onError: handleFetchError,
      onSuccess: () => {
        // Invalidate and refetch
        void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
      }
    })
  }

const getApiCompaniesFn = async (args: useGetApiCompaniesArgs) => {
  const res = await fetch(`/companies/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of a company */
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().optional() }))
              .optional(),
            _embedded: z.record(z.string(), z.object({})).optional(),
            /** The unique identifier of the company */
            id: z.string().optional(),
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
            /** The email address of the company */
            email: z.string().optional(),
            /** The date and time the company was archived */
            archivedOn: z.string().optional(),
            /** A flag determining whether or not the company is archived */
            fromArchive: z.boolean().optional(),
            /** Representation of the physical address of a building or premise */
            address: z
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
                    .record(
                      z.string(),
                      z.object({ href: z.string().optional() })
                    )
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
    .parse(data)
}

export const useGetApiCompanies = (args: useGetApiCompaniesArgs) => {
  const result = useQuery({
    queryKey: ['Companies'],
    queryFn: () => getApiCompaniesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiCompaniesIdFn = async (args: useGetApiCompaniesIdArgs) => {
  const res = await fetch(`/companies/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a company */
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
  }).parse(data)
}

export const useGetApiCompaniesId = (args: useGetApiCompaniesIdArgs) => {
  const result = useQuery({
    queryKey: ['Companies'],
    queryFn: () => getApiCompaniesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiCompaniesIdFn = async (args: patchApiCompaniesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/companies/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiCompaniesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiCompaniesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Companies'] })
    }
  })
}

const getApiCompaniesIdRelationshipsFn = async (
  args: useGetApiCompaniesIdRelationshipsArgs
) => {
  const res = await fetch(`/companies/${args.id}/relationships`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiCompaniesIdRelationships = (
  args: useGetApiCompaniesIdRelationshipsArgs
) => {
  const result = useQuery({
    queryKey: ['Companies'],
    queryFn: () => getApiCompaniesIdRelationshipsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiCompaniesIdStaffMembersFn = async (
  args: useGetApiCompaniesIdStaffMembersArgs
) => {
  const res = await fetch(`/companies/${args.id}/staffMembers`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of a staff member */
          z.object({
            /** The staff member's name */ name: z.string().optional(),
            /** A flag determining whether or not the staff member is currently active */
            active: z.boolean().optional(),
            /** The staff member's job title */ jobTitle: z.string().optional(),
            /** The staff member's work phone */
            workPhone: z.string().optional(),
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
    .parse(data)
}

export const useGetApiCompaniesIdStaffMembers = (
  args: useGetApiCompaniesIdStaffMembersArgs
) => {
  const result = useQuery({
    queryKey: ['Companies'],
    queryFn: () => getApiCompaniesIdStaffMembersFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationTypesFn = async (
  args: useGetApiConfigurationTypesArgs
) => {
  const res = await fetch(`/configuration/types`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of all of the available configurable items */
  z.object({
    /** A list of configurable agency types */
    agencyTypes: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable appointment types */
    appointmentTypes: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable applicant statuses */
    applicantStatuses: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable board statuses */
    boardStatuses: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable buying positions */
    buyingPositions: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable buying reasons */
    buyingReasons: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable certificate types */
    certificateTypes: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable company types */
    companyTypes: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable contact categories */
    contactCategories: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable document types */
    documentTypes: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable identity document types */
    identityDocumentTypes: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable journal entry types */
    journalEntryTypes: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable key types */
    keyTypes: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable follow up responses */
    followUpResponses: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable selling reasons */
    sellingReasons: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable rent insurance cancellation reasons */
    rentInsuranceCancellationReasons: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable renting positions */
    rentingPositions: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable supplier types */
    supplierTypes: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable task types */
    taskTypes: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable tenancy legal status */
    tenancyLegalStatuses: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable tenancy types */
    tenancyTypes: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable vendor types */
    vendorTypes: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional(),
    /** A list of configurable works order types */
    worksOrderTypes: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional()
  }).parse(data)
}

export const useGetApiConfigurationTypes = (
  args: useGetApiConfigurationTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationAgencyTypesFn = async (
  args: useGetApiConfigurationAgencyTypesArgs
) => {
  const res = await fetch(`/configuration/agencyTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationAgencyTypes = (
  args: useGetApiConfigurationAgencyTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationAgencyTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationAgencyTypesIdFn = async (
  args: useGetApiConfigurationAgencyTypesIdArgs
) => {
  const res = await fetch(`/configuration/agencyTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationAgencyTypesId = (
  args: useGetApiConfigurationAgencyTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationAgencyTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationApplicantStatusesIdFn = async (
  args: useGetApiConfigurationApplicantStatusesIdArgs
) => {
  const res = await fetch(`/configuration/applicantStatuses/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationApplicantStatusesId = (
  args: useGetApiConfigurationApplicantStatusesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationApplicantStatusesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationApplicantStatusesFn = async (
  args: useGetApiConfigurationApplicantStatusesArgs
) => {
  const res = await fetch(`/configuration/applicantStatuses`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationApplicantStatuses = (
  args: useGetApiConfigurationApplicantStatusesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationApplicantStatusesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationAppointmentTypesFn = async (
  args: useGetApiConfigurationAppointmentTypesArgs
) => {
  const res = await fetch(`/configuration/appointmentTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationAppointmentTypes = (
  args: useGetApiConfigurationAppointmentTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationAppointmentTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationAppointmentTypesIdFn = async (
  args: useGetApiConfigurationAppointmentTypesIdArgs
) => {
  const res = await fetch(`/configuration/appointmentTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationAppointmentTypesId = (
  args: useGetApiConfigurationAppointmentTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationAppointmentTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationBoardStatusesFn = async (
  args: useGetApiConfigurationBoardStatusesArgs
) => {
  const res = await fetch(`/configuration/boardStatuses`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationBoardStatuses = (
  args: useGetApiConfigurationBoardStatusesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationBoardStatusesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationBoardStatusesIdFn = async (
  args: useGetApiConfigurationBoardStatusesIdArgs
) => {
  const res = await fetch(`/configuration/boardStatuses/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationBoardStatusesId = (
  args: useGetApiConfigurationBoardStatusesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationBoardStatusesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationBuyingPositionsFn = async (
  args: useGetApiConfigurationBuyingPositionsArgs
) => {
  const res = await fetch(`/configuration/buyingPositions`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationBuyingPositions = (
  args: useGetApiConfigurationBuyingPositionsArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationBuyingPositionsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationBuyingPositionsIdFn = async (
  args: useGetApiConfigurationBuyingPositionsIdArgs
) => {
  const res = await fetch(`/configuration/buyingPositions/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationBuyingPositionsId = (
  args: useGetApiConfigurationBuyingPositionsIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationBuyingPositionsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationBuyingReasonsFn = async (
  args: useGetApiConfigurationBuyingReasonsArgs
) => {
  const res = await fetch(`/configuration/buyingReasons`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationBuyingReasons = (
  args: useGetApiConfigurationBuyingReasonsArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationBuyingReasonsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationCertificateTypesFn = async (
  args: useGetApiConfigurationCertificateTypesArgs
) => {
  const res = await fetch(`/configuration/certificateTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a certificate type */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional(),
        /** The configurable statuses associated to the certificate type */
        statuses: z
          .array(
            /** Representation of a configuration item */
            z.object({
              /** The unique identifier of the list item */
              id: z.string().optional(),
              /** The textual value for the list item */
              value: z.string().optional()
            })
          )
          .optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationCertificateTypes = (
  args: useGetApiConfigurationCertificateTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationCertificateTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationCertificateTypesIdFn = async (
  args: useGetApiConfigurationCertificateTypesIdArgs
) => {
  const res = await fetch(`/configuration/certificateTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a certificate type */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional(),
    /** The configurable statuses associated to the certificate type */
    statuses: z
      .array(
        /** Representation of a configuration item */
        z.object({
          /** The unique identifier of the list item */
          id: z.string().optional(),
          /** The textual value for the list item */
          value: z.string().optional()
        })
      )
      .optional()
  }).parse(data)
}

export const useGetApiConfigurationCertificateTypesId = (
  args: useGetApiConfigurationCertificateTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationCertificateTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationCompanyTypesFn = async (
  args: useGetApiConfigurationCompanyTypesArgs
) => {
  const res = await fetch(`/configuration/companyTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationCompanyTypes = (
  args: useGetApiConfigurationCompanyTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationCompanyTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationCompanyTypesIdFn = async (
  args: useGetApiConfigurationCompanyTypesIdArgs
) => {
  const res = await fetch(`/configuration/companyTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationCompanyTypesId = (
  args: useGetApiConfigurationCompanyTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationCompanyTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationContactCategoriesIdFn = async (
  args: useGetApiConfigurationContactCategoriesIdArgs
) => {
  const res = await fetch(`/configuration/contactCategories/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationContactCategoriesId = (
  args: useGetApiConfigurationContactCategoriesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationContactCategoriesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationContactCategoriesFn = async (
  args: useGetApiConfigurationContactCategoriesArgs
) => {
  const res = await fetch(`/configuration/contactCategories`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationContactCategories = (
  args: useGetApiConfigurationContactCategoriesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationContactCategoriesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationDocumentTypesFn = async (
  args: useGetApiConfigurationDocumentTypesArgs
) => {
  const res = await fetch(`/configuration/documentTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationDocumentTypes = (
  args: useGetApiConfigurationDocumentTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationDocumentTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationDocumentTypesIdFn = async (
  args: useGetApiConfigurationDocumentTypesIdArgs
) => {
  const res = await fetch(`/configuration/documentTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationDocumentTypesId = (
  args: useGetApiConfigurationDocumentTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationDocumentTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationFollowUpResponsesFn = async (
  args: useGetApiConfigurationFollowUpResponsesArgs
) => {
  const res = await fetch(`/configuration/followUpResponses`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationFollowUpResponses = (
  args: useGetApiConfigurationFollowUpResponsesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationFollowUpResponsesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationFollowUpResponsesIdFn = async (
  args: useGetApiConfigurationFollowUpResponsesIdArgs
) => {
  const res = await fetch(`/configuration/followUpResponses/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationFollowUpResponsesId = (
  args: useGetApiConfigurationFollowUpResponsesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationFollowUpResponsesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationIdentityDocumentTypesFn = async (
  args: useGetApiConfigurationIdentityDocumentTypesArgs
) => {
  const res = await fetch(`/configuration/identityDocumentTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationIdentityDocumentTypes = (
  args: useGetApiConfigurationIdentityDocumentTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationIdentityDocumentTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationIdentityDocumentTypesIdFn = async (
  args: useGetApiConfigurationIdentityDocumentTypesIdArgs
) => {
  const res = await fetch(`/configuration/identityDocumentTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationIdentityDocumentTypesId = (
  args: useGetApiConfigurationIdentityDocumentTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationIdentityDocumentTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationJournalEntryTypesFn = async (
  args: useGetApiConfigurationJournalEntryTypesArgs
) => {
  const res = await fetch(`/configuration/journalEntryTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationJournalEntryTypes = (
  args: useGetApiConfigurationJournalEntryTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationJournalEntryTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationJournalEntryTypesIdFn = async (
  args: useGetApiConfigurationJournalEntryTypesIdArgs
) => {
  const res = await fetch(`/configuration/journalEntryTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationJournalEntryTypesId = (
  args: useGetApiConfigurationJournalEntryTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationJournalEntryTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationKeyTypesFn = async (
  args: useGetApiConfigurationKeyTypesArgs
) => {
  const res = await fetch(`/configuration/keyTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationKeyTypes = (
  args: useGetApiConfigurationKeyTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationKeyTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationKeyTypesIdFn = async (
  args: useGetApiConfigurationKeyTypesIdArgs
) => {
  const res = await fetch(`/configuration/keyTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationKeyTypesId = (
  args: useGetApiConfigurationKeyTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationKeyTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationPortalTypesFn = async (
  args: useGetApiConfigurationPortalTypesArgs
) => {
  const res = await fetch(`/configuration/portalTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationPortalTypes = (
  args: useGetApiConfigurationPortalTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationPortalTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationPortalTypesIdFn = async (
  args: useGetApiConfigurationPortalTypesIdArgs
) => {
  const res = await fetch(`/configuration/portalTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationPortalTypesId = (
  args: useGetApiConfigurationPortalTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationPortalTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationPreTenancyCheckTypesFn = async (
  args: useGetApiConfigurationPreTenancyCheckTypesArgs
) => {
  const res = await fetch(`/configuration/preTenancyCheckTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of detail properties configuration item
configuration */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional(),
        /** A flag determining the status */ active: z.boolean().optional(),
        /** A collection of unique identifiers of offices associated */
        officeIds: z.array(z.string()).optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationPreTenancyCheckTypes = (
  args: useGetApiConfigurationPreTenancyCheckTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationPreTenancyCheckTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationPreTenancyCheckTypesIdFn = async (
  args: useGetApiConfigurationPreTenancyCheckTypesIdArgs
) => {
  const res = await fetch(`/configuration/preTenancyCheckTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of detail properties configuration item
configuration */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional(),
    /** A flag determining the status */ active: z.boolean().optional(),
    /** A collection of unique identifiers of offices associated */
    officeIds: z.array(z.string()).optional()
  }).parse(data)
}

export const useGetApiConfigurationPreTenancyCheckTypesId = (
  args: useGetApiConfigurationPreTenancyCheckTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationPreTenancyCheckTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationPropertyServiceTypesFn = async (
  args: useGetApiConfigurationPropertyServiceTypesArgs
) => {
  const res = await fetch(`/configuration/propertyServiceTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationPropertyServiceTypes = (
  args: useGetApiConfigurationPropertyServiceTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationPropertyServiceTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationPropertyServiceTypesIdFn = async (
  args: useGetApiConfigurationPropertyServiceTypesIdArgs
) => {
  const res = await fetch(`/configuration/propertyServiceTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationPropertyServiceTypesId = (
  args: useGetApiConfigurationPropertyServiceTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationPropertyServiceTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationRenewalCheckTypesFn = async (
  args: useGetApiConfigurationRenewalCheckTypesArgs
) => {
  const res = await fetch(`/configuration/renewalCheckTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of detail properties configuration item
configuration */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional(),
        /** A flag determining the status */ active: z.boolean().optional(),
        /** A collection of unique identifiers of offices associated */
        officeIds: z.array(z.string()).optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationRenewalCheckTypes = (
  args: useGetApiConfigurationRenewalCheckTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationRenewalCheckTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationRenewalCheckTypesIdFn = async (
  args: useGetApiConfigurationRenewalCheckTypesIdArgs
) => {
  const res = await fetch(`/configuration/renewalCheckTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of detail properties configuration item
configuration */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional(),
    /** A flag determining the status */ active: z.boolean().optional(),
    /** A collection of unique identifiers of offices associated */
    officeIds: z.array(z.string()).optional()
  }).parse(data)
}

export const useGetApiConfigurationRenewalCheckTypesId = (
  args: useGetApiConfigurationRenewalCheckTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationRenewalCheckTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationRentInsuranceCancellationReasonsFn = async (
  args: useGetApiConfigurationRentInsuranceCancellationReasonsArgs
) => {
  const res = await fetch(`/configuration/rentInsuranceCancellationReasons`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationRentInsuranceCancellationReasons = (
  args: useGetApiConfigurationRentInsuranceCancellationReasonsArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationRentInsuranceCancellationReasonsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationRentInsuranceCancellationReasonsIdFn = async (
  args: useGetApiConfigurationRentInsuranceCancellationReasonsIdArgs
) => {
  const res = await fetch(
    `/configuration/rentInsuranceCancellationReasons/${args.id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationRentInsuranceCancellationReasonsId = (
  args: useGetApiConfigurationRentInsuranceCancellationReasonsIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () =>
      getApiConfigurationRentInsuranceCancellationReasonsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationRentingPositionsFn = async (
  args: useGetApiConfigurationRentingPositionsArgs
) => {
  const res = await fetch(`/configuration/rentingPositions`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationRentingPositions = (
  args: useGetApiConfigurationRentingPositionsArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationRentingPositionsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationRentingPositionsIdFn = async (
  args: useGetApiConfigurationRentingPositionsIdArgs
) => {
  const res = await fetch(`/configuration/rentingPositions/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationRentingPositionsId = (
  args: useGetApiConfigurationRentingPositionsIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationRentingPositionsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationRuralTenancyTypesFn = async (
  args: useGetApiConfigurationRuralTenancyTypesArgs
) => {
  const res = await fetch(`/configuration/ruralTenancyTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationRuralTenancyTypes = (
  args: useGetApiConfigurationRuralTenancyTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationRuralTenancyTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationRuralTenancyTypesIdFn = async (
  args: useGetApiConfigurationRuralTenancyTypesIdArgs
) => {
  const res = await fetch(`/configuration/ruralTenancyTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationRuralTenancyTypesId = (
  args: useGetApiConfigurationRuralTenancyTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationRuralTenancyTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationSellingReasonsFn = async (
  args: useGetApiConfigurationSellingReasonsArgs
) => {
  const res = await fetch(`/configuration/sellingReasons`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationSellingReasons = (
  args: useGetApiConfigurationSellingReasonsArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationSellingReasonsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationSellingReasonsIdFn = async (
  args: useGetApiConfigurationSellingReasonsIdArgs
) => {
  const res = await fetch(`/configuration/sellingReasons/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationSellingReasonsId = (
  args: useGetApiConfigurationSellingReasonsIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationSellingReasonsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationSupplierTypesFn = async (
  args: useGetApiConfigurationSupplierTypesArgs
) => {
  const res = await fetch(`/configuration/supplierTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationSupplierTypes = (
  args: useGetApiConfigurationSupplierTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationSupplierTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationSupplierTypesIdFn = async (
  args: useGetApiConfigurationSupplierTypesIdArgs
) => {
  const res = await fetch(`/configuration/supplierTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationSupplierTypesId = (
  args: useGetApiConfigurationSupplierTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationSupplierTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationTaskTypesFn = async (
  args: useGetApiConfigurationTaskTypesArgs
) => {
  const res = await fetch(`/configuration/taskTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationTaskTypes = (
  args: useGetApiConfigurationTaskTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTaskTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationTaskTypesIdFn = async (
  args: useGetApiConfigurationTaskTypesIdArgs
) => {
  const res = await fetch(`/configuration/taskTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationTaskTypesId = (
  args: useGetApiConfigurationTaskTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTaskTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationTenancyLegalStatusesFn = async (
  args: useGetApiConfigurationTenancyLegalStatusesArgs
) => {
  const res = await fetch(`/configuration/tenancyLegalStatuses`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationTenancyLegalStatuses = (
  args: useGetApiConfigurationTenancyLegalStatusesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTenancyLegalStatusesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationTenancyLegalStatusesIdFn = async (
  args: useGetApiConfigurationTenancyLegalStatusesIdArgs
) => {
  const res = await fetch(`/configuration/tenancyLegalStatuses/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationTenancyLegalStatusesId = (
  args: useGetApiConfigurationTenancyLegalStatusesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTenancyLegalStatusesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationTenancyRenewalOptionsFn = async (
  args: useGetApiConfigurationTenancyRenewalOptionsArgs
) => {
  const res = await fetch(`/configuration/tenancyRenewalOptions`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationTenancyRenewalOptions = (
  args: useGetApiConfigurationTenancyRenewalOptionsArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTenancyRenewalOptionsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationTenancyRenewalOptionsIdFn = async (
  args: useGetApiConfigurationTenancyRenewalOptionsIdArgs
) => {
  const res = await fetch(`/configuration/tenancyRenewalOptions/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationTenancyRenewalOptionsId = (
  args: useGetApiConfigurationTenancyRenewalOptionsIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTenancyRenewalOptionsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationTenancyRenewalOptionConditionsFn = async (
  args: useGetApiConfigurationTenancyRenewalOptionConditionsArgs
) => {
  const res = await fetch(`/configuration/tenancyRenewalOptionConditions`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationTenancyRenewalOptionConditions = (
  args: useGetApiConfigurationTenancyRenewalOptionConditionsArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTenancyRenewalOptionConditionsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationTenancyRenewalOptionConditionsIdFn = async (
  args: useGetApiConfigurationTenancyRenewalOptionConditionsIdArgs
) => {
  const res = await fetch(
    `/configuration/tenancyRenewalOptionConditions/${args.id}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationTenancyRenewalOptionConditionsId = (
  args: useGetApiConfigurationTenancyRenewalOptionConditionsIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTenancyRenewalOptionConditionsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationTenancyTypesFn = async (
  args: useGetApiConfigurationTenancyTypesArgs
) => {
  const res = await fetch(`/configuration/tenancyTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationTenancyTypes = (
  args: useGetApiConfigurationTenancyTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTenancyTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationTenancyTypesIdFn = async (
  args: useGetApiConfigurationTenancyTypesIdArgs
) => {
  const res = await fetch(`/configuration/tenancyTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationTenancyTypesId = (
  args: useGetApiConfigurationTenancyTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTenancyTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationVendorTypesFn = async (
  args: useGetApiConfigurationVendorTypesArgs
) => {
  const res = await fetch(`/configuration/vendorTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationVendorTypes = (
  args: useGetApiConfigurationVendorTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationVendorTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationVendorTypesIdFn = async (
  args: useGetApiConfigurationVendorTypesIdArgs
) => {
  const res = await fetch(`/configuration/vendorTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationVendorTypesId = (
  args: useGetApiConfigurationVendorTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationVendorTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationWorksOrderTypesFn = async (
  args: useGetApiConfigurationWorksOrderTypesArgs
) => {
  const res = await fetch(`/configuration/worksOrderTypes`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .array(
      /** Representation of a configuration item */
      z.object({
        /** The unique identifier of the list item */ id: z.string().optional(),
        /** The textual value for the list item */ value: z.string().optional()
      })
    )
    .parse(data)
}

export const useGetApiConfigurationWorksOrderTypes = (
  args: useGetApiConfigurationWorksOrderTypesArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationWorksOrderTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationWorksOrderTypesIdFn = async (
  args: useGetApiConfigurationWorksOrderTypesIdArgs
) => {
  const res = await fetch(`/configuration/worksOrderTypes/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a configuration item */
  z.object({
    /** The unique identifier of the list item */ id: z.string().optional(),
    /** The textual value for the list item */ value: z.string().optional()
  }).parse(data)
}

export const useGetApiConfigurationWorksOrderTypesId = (
  args: useGetApiConfigurationWorksOrderTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationWorksOrderTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConfigurationTerminologyFn = async (
  args: useGetApiConfigurationTerminologyArgs
) => {
  const res = await fetch(`/configuration/terminology`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of the configuration settings for terminology */
  z.object({
    /** Terminologies associated with the properties */
    properties: z
      .object({
        /** A flag denoting whether the agent's CRM is configured to use "Sold STC/SSTC" terminology instead of "Under Offer" */
        useSoldStc: z.boolean().optional(),
        /** A flag denoting whether the agent's CRM is configured to use "Market Appraisal" terminology instead of "Valuation" */
        useMarketAppraisal: z.boolean().optional()
      })
      .optional()
  }).parse(data)
}

export const useGetApiConfigurationTerminology = (
  args: useGetApiConfigurationTerminologyArgs
) => {
  const result = useQuery({
    queryKey: ['Configuration'],
    queryFn: () => getApiConfigurationTerminologyFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiContactsFn = async (args: useGetApiContactsArgs) => {
  const res = await fetch(`/contacts/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of an individual contact */
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().optional() }))
              .optional(),
            _embedded: z.record(z.string(), z.object({})).optional(),
            /** The unique identifier of the contact */
            id: z.string().optional(),
            /** The date and time when the contact was created */
            created: z.string().optional(),
            /** The date and time when the contact was last modified */
            modified: z.string().optional(),
            /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
            title: z.string().optional(),
            /** The contact's forename */ forename: z.string().optional(),
            /** The contact's surname */ surname: z.string().optional(),
            /** The contact's date of birth */
            dateOfBirth: z.string().optional(),
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
                /** The source type (office/source) */
                type: z.string().optional()
              })
              .optional(),
            /** The home phone number of the contact */
            homePhone: z.string().optional(),
            /** The work phone number of the contact */
            workPhone: z.string().optional(),
            /** The mobile phone number of the contact */
            mobilePhone: z.string().optional(),
            /** The email address of the contact */
            email: z.string().optional(),
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
            /** Representation of the physical address of a building or premise */
            secondaryAddress: z
              .object({
                /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
                type: z.string().optional(),
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
            /** Representation of the physical address of a building or premise */
            workAddress: z
              .object({
                /** The type of address (primary/secondary/home/work/forwarding/company/previous) */
                type: z.string().optional(),
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
                    .record(
                      z.string(),
                      z.object({ href: z.string().optional() })
                    )
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
    .parse(data)
}

export const useGetApiContacts = (args: useGetApiContactsArgs) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiContactsIdFn = async (args: useGetApiContactsIdArgs) => {
  const res = await fetch(`/contacts/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of an individual contact */
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
  }).parse(data)
}

export const useGetApiContactsId = (args: useGetApiContactsIdArgs) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiContactsIdFn = async (args: patchApiContactsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/contacts/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiContactsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiContactsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    }
  })
}

const getApiContactsIdRelationshipsFn = async (
  args: useGetApiContactsIdRelationshipsArgs
) => {
  const res = await fetch(`/contacts/${args.id}/relationships`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiContactsIdRelationships = (
  args: useGetApiContactsIdRelationshipsArgs
) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdRelationshipsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiContactsIdSubscriptionsFn = async (
  args: useGetApiContactsIdSubscriptionsArgs
) => {
  const res = await fetch(`/contacts/${args.id}/subscriptions`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiContactsIdSubscriptions = (
  args: useGetApiContactsIdSubscriptionsArgs
) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdSubscriptionsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiContactsIdSubscriptionsSubscriptionIdFn = async (
  args: useGetApiContactsIdSubscriptionsSubscriptionIdArgs
) => {
  const res = await fetch(
    `/contacts/${args.id}/subscriptions/${args.subscriptionId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of an individual contact subscription */
  z.object({
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
  }).parse(data)
}

export const useGetApiContactsIdSubscriptionsSubscriptionId = (
  args: useGetApiContactsIdSubscriptionsSubscriptionIdArgs
) => {
  const result = useQuery({
    queryKey: ['Contacts'],
    queryFn: () => getApiContactsIdSubscriptionsSubscriptionIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConveyancingFn = async (args: useGetApiConveyancingArgs) => {
  const res = await fetch(`/conveyancing/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiConveyancing = (args: useGetApiConveyancingArgs) => {
  const result = useQuery({
    queryKey: ['Conveyancing'],
    queryFn: () => getApiConveyancingFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiConveyancingIdFn = async (args: useGetApiConveyancingIdArgs) => {
  const res = await fetch(`/conveyancing/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of an offers sales progression information */
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
  }).parse(data)
}

export const useGetApiConveyancingId = (args: useGetApiConveyancingIdArgs) => {
  const result = useQuery({
    queryKey: ['Conveyancing'],
    queryFn: () => getApiConveyancingIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiConveyancingIdFn = async (args: patchApiConveyancingIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/conveyancing/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiConveyancingId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiConveyancingIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    }
  })
}

const getApiConveyancingIdChainFn = async (
  args: useGetApiConveyancingIdChainArgs
) => {
  const res = await fetch(`/conveyancing/${args.id}/chain`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiConveyancingIdChain = (
  args: useGetApiConveyancingIdChainArgs
) => {
  const result = useQuery({
    queryKey: ['Conveyancing'],
    queryFn: () => getApiConveyancingIdChainFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiConveyancingIdDownwardFn = async (
  args: deleteApiConveyancingIdDownwardArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/conveyancing/${args.id}/downward`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiConveyancingIdDownward = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiConveyancingIdDownwardFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    }
  })
}

const deleteApiConveyancingIdUpwardFn = async (
  args: deleteApiConveyancingIdUpwardArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/conveyancing/${args.id}/upward`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiConveyancingIdUpward = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiConveyancingIdUpwardFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Conveyancing'] })
    }
  })
}

const getApiDepartmentsFn = async (args: useGetApiDepartmentsArgs) => {
  const res = await fetch(`/departments/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiDepartments = (args: useGetApiDepartmentsArgs) => {
  const result = useQuery({
    queryKey: ['Departments'],
    queryFn: () => getApiDepartmentsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiDepartmentsIdFn = async (args: useGetApiDepartmentsIdArgs) => {
  const res = await fetch(`/departments/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a department */
  z.object({
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
  }).parse(data)
}

export const useGetApiDepartmentsId = (args: useGetApiDepartmentsIdArgs) => {
  const result = useQuery({
    queryKey: ['Departments'],
    queryFn: () => getApiDepartmentsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiDocumentsFn = async (args: useGetApiDocumentsArgs) => {
  const res = await fetch(`/documents/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of a document */
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().optional() }))
              .optional(),
            _embedded: z.record(z.string(), z.object({})).optional(),
            /** The unique identifier of the document */
            id: z.string().optional(),
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
    .parse(data)
}

export const useGetApiDocuments = (args: useGetApiDocumentsArgs) => {
  const result = useQuery({
    queryKey: ['Documents'],
    queryFn: () => getApiDocumentsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiDocumentsIdFn = async (args: useGetApiDocumentsIdArgs) => {
  const res = await fetch(`/documents/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a document */
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
  }).parse(data)
}

export const useGetApiDocumentsId = (args: useGetApiDocumentsIdArgs) => {
  const result = useQuery({
    queryKey: ['Documents'],
    queryFn: () => getApiDocumentsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiDocumentsIdFn = async (args: deleteApiDocumentsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/documents/${args.id}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiDocumentsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiDocumentsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Documents'] })
    }
  })
}

const patchApiDocumentsIdFn = async (args: patchApiDocumentsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/documents/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiDocumentsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiDocumentsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Documents'] })
    }
  })
}

const getApiDocumentsIdDownloadFn = async (
  args: useGetApiDocumentsIdDownloadArgs
) => {
  const res = await fetch(`/documents/${args.id}/download`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z.void().parse(data)
}

export const useGetApiDocumentsIdDownload = (
  args: useGetApiDocumentsIdDownloadArgs
) => {
  const result = useQuery({
    queryKey: ['Documents'],
    queryFn: () => getApiDocumentsIdDownloadFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiEnquiriesFn = async (args: useGetApiEnquiriesArgs) => {
  const res = await fetch(`/enquiries/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiEnquiries = (args: useGetApiEnquiriesArgs) => {
  const result = useQuery({
    queryKey: ['Enquiries'],
    queryFn: () => getApiEnquiriesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiEnquiriesIdFn = async (args: useGetApiEnquiriesIdArgs) => {
  const res = await fetch(`/enquiries/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of an enquiry */
  z.object({
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
  }).parse(data)
}

export const useGetApiEnquiriesId = (args: useGetApiEnquiriesIdArgs) => {
  const result = useQuery({
    queryKey: ['Enquiries'],
    queryFn: () => getApiEnquiriesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiEnquiriesIdFn = async (args: patchApiEnquiriesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/enquiries/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiEnquiriesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiEnquiriesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Enquiries'] })
    }
  })
}

const getApiIdentityChecksFn = async (args: useGetApiIdentityChecksArgs) => {
  const res = await fetch(`/identityChecks/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiIdentityChecks = (args: useGetApiIdentityChecksArgs) => {
  const result = useQuery({
    queryKey: ['IdentityChecks'],
    queryFn: () => getApiIdentityChecksFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiIdentityChecksIdFn = async (
  args: useGetApiIdentityChecksIdArgs
) => {
  const res = await fetch(`/identityChecks/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a contact identity check */
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
  }).parse(data)
}

export const useGetApiIdentityChecksId = (
  args: useGetApiIdentityChecksIdArgs
) => {
  const result = useQuery({
    queryKey: ['IdentityChecks'],
    queryFn: () => getApiIdentityChecksIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiIdentityChecksIdFn = async (
  args: patchApiIdentityChecksIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/identityChecks/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiIdentityChecksId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiIdentityChecksIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['IdentityChecks'] })
    }
  })
}

const getApiInvoicesFn = async (args: useGetApiInvoicesArgs) => {
  const res = await fetch(`/invoices/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
            /** Description of the invoice */
            description: z.string().optional(),
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
    .parse(data)
}

export const useGetApiInvoices = (args: useGetApiInvoicesArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiInvoicesIdFn = async (args: useGetApiInvoicesIdArgs) => {
  const res = await fetch(`/invoices/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Detailed representation of an individual invoice */
  z.object({
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
  }).parse(data)
}

export const useGetApiInvoicesId = (args: useGetApiInvoicesIdArgs) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiInvoicesPaymentsFn = async (
  args: useGetApiInvoicesPaymentsArgs
) => {
  const res = await fetch(`/invoices/payments`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
            /** Description of the payment */
            description: z.string().optional(),
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
    .parse(data)
}

export const useGetApiInvoicesPayments = (
  args: useGetApiInvoicesPaymentsArgs
) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesPaymentsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiInvoicesPaymentsIdFn = async (
  args: useGetApiInvoicesPaymentsIdArgs
) => {
  const res = await fetch(`/invoices/payments/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of an individual payment */
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
  }).parse(data)
}

export const useGetApiInvoicesPaymentsId = (
  args: useGetApiInvoicesPaymentsIdArgs
) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesPaymentsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiInvoicesCreditsFn = async (args: useGetApiInvoicesCreditsArgs) => {
  const res = await fetch(`/invoices/credits`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiInvoicesCredits = (
  args: useGetApiInvoicesCreditsArgs
) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesCreditsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiInvoicesCreditsIdFn = async (
  args: useGetApiInvoicesCreditsIdArgs
) => {
  const res = await fetch(`/invoices/credits/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of an individual credit */
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
  }).parse(data)
}

export const useGetApiInvoicesCreditsId = (
  args: useGetApiInvoicesCreditsIdArgs
) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesCreditsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiInvoicesChargesFn = async (args: useGetApiInvoicesChargesArgs) => {
  const res = await fetch(`/invoices/charges`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of an invoice charge */
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().optional() }))
              .optional(),
            _embedded: z.record(z.string(), z.object({})).optional(),
            /** The unique identifier of the charge */
            id: z.string().optional(),
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
    .parse(data)
}

export const useGetApiInvoicesCharges = (
  args: useGetApiInvoicesChargesArgs
) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesChargesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiInvoicesChargesIdFn = async (
  args: useGetApiInvoicesChargesIdArgs
) => {
  const res = await fetch(`/invoices/charges/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of an invoice charge */
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
  }).parse(data)
}

export const useGetApiInvoicesChargesId = (
  args: useGetApiInvoicesChargesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Invoices'],
    queryFn: () => getApiInvoicesChargesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiJournalEntriesFn = async (args: useGetApiJournalEntriesArgs) => {
  const res = await fetch(`/journalEntries/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiJournalEntries = (args: useGetApiJournalEntriesArgs) => {
  const result = useQuery({
    queryKey: ['JournalEntries'],
    queryFn: () => getApiJournalEntriesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiJournalEntriesLandlordsFn = async (
  args: useGetApiJournalEntriesLandlordsArgs
) => {
  const res = await fetch(`/journalEntries/landlords`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiJournalEntriesLandlords = (
  args: useGetApiJournalEntriesLandlordsArgs
) => {
  const result = useQuery({
    queryKey: ['JournalEntries'],
    queryFn: () => getApiJournalEntriesLandlordsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiLandlordsFn = async (args: useGetApiLandlordsArgs) => {
  const res = await fetch(`/landlords/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of a landlord */
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().optional() }))
              .optional(),
            _embedded: z.record(z.string(), z.object({})).optional(),
            /** The unique identifier of the landlord */
            id: z.string().optional(),
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
                /** The source type (office/source) */
                type: z.string().optional()
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
                      /** The building name */
                      buildingName: z.string().optional(),
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
    .parse(data)
}

export const useGetApiLandlords = (args: useGetApiLandlordsArgs) => {
  const result = useQuery({
    queryKey: ['Landlords'],
    queryFn: () => getApiLandlordsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiLandlordsIdFn = async (args: useGetApiLandlordsIdArgs) => {
  const res = await fetch(`/landlords/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a landlord */
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
              /** The second line of the address */
              line2: z.string().optional(),
              /** The third line of the address */ line3: z.string().optional(),
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
  }).parse(data)
}

export const useGetApiLandlordsId = (args: useGetApiLandlordsIdArgs) => {
  const result = useQuery({
    queryKey: ['Landlords'],
    queryFn: () => getApiLandlordsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiLandlordsIdFn = async (args: patchApiLandlordsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/landlords/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiLandlordsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiLandlordsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Landlords'] })
    }
  })
}

const getApiLandlordsIdRelationshipsFn = async (
  args: useGetApiLandlordsIdRelationshipsArgs
) => {
  const res = await fetch(`/landlords/${args.id}/relationships`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiLandlordsIdRelationships = (
  args: useGetApiLandlordsIdRelationshipsArgs
) => {
  const result = useQuery({
    queryKey: ['Landlords'],
    queryFn: () => getApiLandlordsIdRelationshipsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiLandlordsIdRelationshipsRelationshipIdFn = async (
  args: useGetApiLandlordsIdRelationshipsRelationshipIdArgs
) => {
  const res = await fetch(
    `/landlords/${args.id}/relationships/${args.relationshipId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of relationship between a landlord and a contact or company */
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
  }).parse(data)
}

export const useGetApiLandlordsIdRelationshipsRelationshipId = (
  args: useGetApiLandlordsIdRelationshipsRelationshipIdArgs
) => {
  const result = useQuery({
    queryKey: ['Landlords'],
    queryFn: () => getApiLandlordsIdRelationshipsRelationshipIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiLandlordsIdRelationshipsRelationshipIdFn = async (
  args: deleteApiLandlordsIdRelationshipsRelationshipIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/landlords/${args.id}/relationships/${args.relationshipId}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiLandlordsIdRelationshipsRelationshipId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiLandlordsIdRelationshipsRelationshipIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Landlords'] })
    }
  })
}

const getApiMetadataFn = async (args: useGetApiMetadataArgs) => {
  const res = await fetch(`/metadata/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiMetadata = (args: useGetApiMetadataArgs) => {
  const result = useQuery({
    queryKey: ['Metadata'],
    queryFn: () => getApiMetadataFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiMetadataIdFn = async (args: useGetApiMetadataIdArgs) => {
  const res = await fetch(`/metadata/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Model representing the state of a metadata record for a given entity */
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
  }).parse(data)
}

export const useGetApiMetadataId = (args: useGetApiMetadataIdArgs) => {
  const result = useQuery({
    queryKey: ['Metadata'],
    queryFn: () => getApiMetadataIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiMetadataIdFn = async (args: deleteApiMetadataIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/metadata/${args.id}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiMetadataId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiMetadataIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Metadata'] })
    }
  })
}

const patchApiMetadataIdFn = async (args: patchApiMetadataIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/metadata/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiMetadataId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiMetadataIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Metadata'] })
    }
  })
}

const getApiMetadataMetadataSchemaIdFn = async (
  args: useGetApiMetadataMetadataSchemaIdArgs
) => {
  const res = await fetch(`/metadata/metadataSchema/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Model representing a JSON schema used to validate a specific entity type */
  z.object({
    /** The unique identifier of this JSON schema */ id: z.string().optional(),
    /** The date and time of when this JSON schema was last updated */
    modified: z.string().optional(),
    /** The JSON schema document */ schema: z.string().optional()
  }).parse(data)
}

export const useGetApiMetadataMetadataSchemaId = (
  args: useGetApiMetadataMetadataSchemaIdArgs
) => {
  const result = useQuery({
    queryKey: ['MetadataSchema'],
    queryFn: () => getApiMetadataMetadataSchemaIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiMetadataMetadataSchemaFn = async (
  args: useGetApiMetadataMetadataSchemaArgs
) => {
  const res = await fetch(`/metadata/metadataSchema`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiMetadataMetadataSchema = (
  args: useGetApiMetadataMetadataSchemaArgs
) => {
  const result = useQuery({
    queryKey: ['MetadataSchema'],
    queryFn: () => getApiMetadataMetadataSchemaFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiNegotiatorsFn = async (args: useGetApiNegotiatorsArgs) => {
  const res = await fetch(`/negotiators/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
            /** The job title of the negotiator */
            jobTitle: z.string().optional(),
            /** The unique identifier of the office that the negotiator is attached to */
            officeId: z.string().optional(),
            /** The work phone number of the negotiator */
            workPhone: z.string().optional(),
            /** The mobile phone number of the negotiator */
            mobilePhone: z.string().optional(),
            /** The email address of the negotiator */
            email: z.string().optional(),
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
    .parse(data)
}

export const useGetApiNegotiators = (args: useGetApiNegotiatorsArgs) => {
  const result = useQuery({
    queryKey: ['Negotiators'],
    queryFn: () => getApiNegotiatorsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiNegotiatorsIdFn = async (args: useGetApiNegotiatorsIdArgs) => {
  const res = await fetch(`/negotiators/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a negotiator */
  z.object({
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
  }).parse(data)
}

export const useGetApiNegotiatorsId = (args: useGetApiNegotiatorsIdArgs) => {
  const result = useQuery({
    queryKey: ['Negotiators'],
    queryFn: () => getApiNegotiatorsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiNegotiatorsIdFn = async (args: patchApiNegotiatorsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/negotiators/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiNegotiatorsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiNegotiatorsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Negotiators'] })
    }
  })
}

const getApiOffersFn = async (args: useGetApiOffersArgs) => {
  const res = await fetch(`/offers/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
            /** The monetary amount of the offer */
            amount: z.number().optional(),
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
                      /** The building name */
                      buildingName: z.string().optional(),
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
    .parse(data)
}

export const useGetApiOffers = (args: useGetApiOffersArgs) => {
  const result = useQuery({
    queryKey: ['Offers'],
    queryFn: () => getApiOffersFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiOffersIdFn = async (args: useGetApiOffersIdArgs) => {
  const res = await fetch(`/offers/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of an offer */
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
              /** The second line of the address */
              line2: z.string().optional(),
              /** The third line of the address */ line3: z.string().optional(),
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
  }).parse(data)
}

export const useGetApiOffersId = (args: useGetApiOffersIdArgs) => {
  const result = useQuery({
    queryKey: ['Offers'],
    queryFn: () => getApiOffersIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiOffersIdFn = async (args: patchApiOffersIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/offers/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiOffersId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiOffersIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Offers'] })
    }
  })
}

const getApiOfficesFn = async (args: useGetApiOfficesArgs) => {
  const res = await fetch(`/offices/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of an office */
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().optional() }))
              .optional(),
            _embedded: z.record(z.string(), z.object({})).optional(),
            /** The unique identifier of the office */
            id: z.string().optional(),
            /** The date and time when the office was created */
            created: z.string().optional(),
            /** The date and time when the office was last modified */
            modified: z.string().optional(),
            /** The name of the office */ name: z.string().optional(),
            /** The name of the office manager */
            manager: z.string().optional(),
            /** A flag denoting whether or not this office is active */
            active: z.boolean().optional(),
            /** The region that the office is in */
            region: z.string().optional(),
            /** Representation of the physical address of a building or premise */
            address: z
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
    .parse(data)
}

export const useGetApiOffices = (args: useGetApiOfficesArgs) => {
  const result = useQuery({
    queryKey: ['Offices'],
    queryFn: () => getApiOfficesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiOfficesIdFn = async (args: useGetApiOfficesIdArgs) => {
  const res = await fetch(`/offices/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of an office */
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
    /** The work phone number of the office */ workPhone: z.string().optional(),
    /** The email address of the office */ email: z.string().optional(),
    /** App specific metadata that has been set against the office */
    metadata: z.record(z.string(), z.object({})).optional(),
    /** The ETag for the current version of the office. Used for managing update concurrency */
    _eTag: z.string().optional(),
    /** The requested extras fields */
    extrasField: z.record(z.string(), z.object({})).optional()
  }).parse(data)
}

export const useGetApiOfficesId = (args: useGetApiOfficesIdArgs) => {
  const result = useQuery({
    queryKey: ['Offices'],
    queryFn: () => getApiOfficesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiOfficesIdFn = async (args: patchApiOfficesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/offices/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiOfficesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiOfficesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Offices'] })
    }
  })
}

const getApiPropertiesFn = async (args: useGetApiPropertiesArgs) => {
  const res = await fetch(`/properties/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of a property. Properties can be grouped into developments in the source data, functionality that is typically used by New Homes departments.
The _links collection will expose specific links to allow developers to navigate through a particular development, should a property be configured in this manner. Refer to commentary on the _links collection for more details */
          z.object({
            _embedded: z.record(z.string(), z.object({})).optional(),
            /** The unique identifier of the property */
            id: z.string().optional(),
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
                    /** The tenure expiration date */
                    expiry: z.string().optional()
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
                    /** The insurance policy end date */
                    end: z.string().optional(),
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
    .parse(data)
}

export const useGetApiProperties = (args: useGetApiPropertiesArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiPropertiesIdFn = async (args: useGetApiPropertiesIdArgs) => {
  const res = await fetch(`/properties/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a property. Properties can be grouped into developments in the source data, functionality that is typically used by New Homes departments.
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
  }).parse(data)
}

export const useGetApiPropertiesId = (args: useGetApiPropertiesIdArgs) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiPropertiesIdFn = async (args: patchApiPropertiesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/properties/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiPropertiesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiPropertiesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    }
  })
}

const getApiPropertiesIdCertificatesFn = async (
  args: useGetApiPropertiesIdCertificatesArgs
) => {
  const res = await fetch(`/properties/${args.id}/certificates`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiPropertiesIdCertificates = (
  args: useGetApiPropertiesIdCertificatesArgs
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdCertificatesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiPropertiesIdCertificatesCertificateIdFn = async (
  args: useGetApiPropertiesIdCertificatesCertificateIdArgs
) => {
  const res = await fetch(
    `/properties/${args.id}/certificates/${args.certificateId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of a cerificate */
  z.object({
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
  }).parse(data)
}

export const useGetApiPropertiesIdCertificatesCertificateId = (
  args: useGetApiPropertiesIdCertificatesCertificateIdArgs
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdCertificatesCertificateIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiPropertiesIdCertificatesCertificateIdFn = async (
  args: patchApiPropertiesIdCertificatesCertificateIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/properties/${args.id}/certificates/${args.certificateId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiPropertiesIdCertificatesCertificateId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiPropertiesIdCertificatesCertificateIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    }
  })
}

const getApiPropertiesIdCertificatesResponsibilitiesFn = async (
  args: useGetApiPropertiesIdCertificatesResponsibilitiesArgs
) => {
  const res = await fetch(
    `/properties/${args.id}/certificates/responsibilities`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of certificate responsibilities configured for a property */
  z.object({
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
  }).parse(data)
}

export const useGetApiPropertiesIdCertificatesResponsibilities = (
  args: useGetApiPropertiesIdCertificatesResponsibilitiesArgs
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdCertificatesResponsibilitiesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiPropertiesIdCertificatesResponsibilitiesFn = async (
  args: patchApiPropertiesIdCertificatesResponsibilitiesArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/properties/${args.id}/certificates/responsibilities`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiPropertiesIdCertificatesResponsibilities = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiPropertiesIdCertificatesResponsibilitiesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    }
  })
}

const getApiPropertiesIdKeysFn = async (
  args: useGetApiPropertiesIdKeysArgs
) => {
  const res = await fetch(`/properties/${args.id}/keys`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiPropertiesIdKeys = (
  args: useGetApiPropertiesIdKeysArgs
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdKeysFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiPropertiesIdKeysKeyIdFn = async (
  args: useGetApiPropertiesIdKeysKeyIdArgs
) => {
  const res = await fetch(`/properties/${args.id}/keys/${args.keyId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a set of keys */
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
  }).parse(data)
}

export const useGetApiPropertiesIdKeysKeyId = (
  args: useGetApiPropertiesIdKeysKeyIdArgs
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdKeysKeyIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiPropertiesIdKeysKeyIdMovementsFn = async (
  args: useGetApiPropertiesIdKeysKeyIdMovementsArgs
) => {
  const res = await fetch(
    `/properties/${args.id}/keys/${args.keyId}/movements`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiPropertiesIdKeysKeyIdMovements = (
  args: useGetApiPropertiesIdKeysKeyIdMovementsArgs
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdKeysKeyIdMovementsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiPropertiesIdKeysKeyIdMovementsMovementIdFn = async (
  args: useGetApiPropertiesIdKeysKeyIdMovementsMovementIdArgs
) => {
  const res = await fetch(
    `/properties/${args.id}/keys/${args.keyId}/movements/${args.movementId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of a key movement */
  z.object({
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
  }).parse(data)
}

export const useGetApiPropertiesIdKeysKeyIdMovementsMovementId = (
  args: useGetApiPropertiesIdKeysKeyIdMovementsMovementIdArgs
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdKeysKeyIdMovementsMovementIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiPropertiesIdChecksFn = async (
  args: useGetApiPropertiesIdChecksArgs
) => {
  const res = await fetch(`/properties/${args.id}/checks`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiPropertiesIdChecks = (
  args: useGetApiPropertiesIdChecksArgs
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdChecksFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiPropertiesIdChecksCheckIdFn = async (
  args: useGetApiPropertiesIdChecksCheckIdArgs
) => {
  const res = await fetch(`/properties/${args.id}/checks/${args.checkId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a check */
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
    /** The type of the check (preInstruction) */ type: z.string().optional(),
    /** The unique identifier of the property that this check relates to */
    propertyId: z.string().optional(),
    /** The ETag for the current version of the check. Used for managing update concurrency */
    _eTag: z.string().optional()
  }).parse(data)
}

export const useGetApiPropertiesIdChecksCheckId = (
  args: useGetApiPropertiesIdChecksCheckIdArgs
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdChecksCheckIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiPropertiesIdChecksCheckIdFn = async (
  args: deleteApiPropertiesIdChecksCheckIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/properties/${args.id}/checks/${args.checkId}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiPropertiesIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiPropertiesIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    }
  })
}

const patchApiPropertiesIdChecksCheckIdFn = async (
  args: patchApiPropertiesIdChecksCheckIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/properties/${args.id}/checks/${args.checkId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiPropertiesIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiPropertiesIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    }
  })
}

const getApiPropertiesCertificatesFn = async (
  args: useGetApiPropertiesCertificatesArgs
) => {
  const res = await fetch(`/properties/certificates`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiPropertiesCertificates = (
  args: useGetApiPropertiesCertificatesArgs
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesCertificatesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiPropertiesIdAppraisalsFn = async (
  args: useGetApiPropertiesIdAppraisalsArgs
) => {
  const res = await fetch(`/properties/${args.id}/appraisals`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiPropertiesIdAppraisals = (
  args: useGetApiPropertiesIdAppraisalsArgs
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdAppraisalsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiPropertiesIdAppraisalsAppraisalIdFn = async (
  args: useGetApiPropertiesIdAppraisalsAppraisalIdArgs
) => {
  const res = await fetch(
    `/properties/${args.id}/appraisals/${args.appraisalId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of a property appraisal */
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
        /** The commission letting fee amount */ amount: z.number().optional()
      })
      .optional(),
    /** Free-text notes associated with the appraisal */
    notes: z.string().optional(),
    _eTag: z.string().optional()
  }).parse(data)
}

export const useGetApiPropertiesIdAppraisalsAppraisalId = (
  args: useGetApiPropertiesIdAppraisalsAppraisalIdArgs
) => {
  const result = useQuery({
    queryKey: ['Properties'],
    queryFn: () => getApiPropertiesIdAppraisalsAppraisalIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiPropertiesIdAppraisalsAppraisalIdFn = async (
  args: patchApiPropertiesIdAppraisalsAppraisalIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/properties/${args.id}/appraisals/${args.appraisalId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiPropertiesIdAppraisalsAppraisalId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiPropertiesIdAppraisalsAppraisalIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    }
  })
}

const getApiPropertyImagesFn = async (args: useGetApiPropertyImagesArgs) => {
  const res = await fetch(`/propertyImages/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiPropertyImages = (args: useGetApiPropertyImagesArgs) => {
  const result = useQuery({
    queryKey: ['PropertyImages'],
    queryFn: () => getApiPropertyImagesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiPropertyImagesIdFn = async (
  args: useGetApiPropertyImagesIdArgs
) => {
  const res = await fetch(`/propertyImages/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a property image */
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
  }).parse(data)
}

export const useGetApiPropertyImagesId = (
  args: useGetApiPropertyImagesIdArgs
) => {
  const result = useQuery({
    queryKey: ['PropertyImages'],
    queryFn: () => getApiPropertyImagesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiPropertyImagesIdFn = async (
  args: deleteApiPropertyImagesIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/propertyImages/${args.id}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiPropertyImagesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiPropertyImagesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['PropertyImages'] })
    }
  })
}

const patchApiPropertyImagesIdFn = async (
  args: patchApiPropertyImagesIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/propertyImages/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiPropertyImagesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiPropertyImagesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['PropertyImages'] })
    }
  })
}

const getApiReferralsFn = async (args: useGetApiReferralsArgs) => {
  const res = await fetch(`/referrals/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of a referral */
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().optional() }))
              .optional(),
            _embedded: z.record(z.string(), z.object({})).optional(),
            /** The unique identifier of the referral */
            id: z.string().optional(),
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
                /** The email address of the contact */
                email: z.string().optional()
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
    .parse(data)
}

export const useGetApiReferrals = (args: useGetApiReferralsArgs) => {
  const result = useQuery({
    queryKey: ['Referrals'],
    queryFn: () => getApiReferralsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiReferralsIdFn = async (args: useGetApiReferralsIdArgs) => {
  const res = await fetch(`/referrals/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a referral */
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
  }).parse(data)
}

export const useGetApiReferralsId = (args: useGetApiReferralsIdArgs) => {
  const result = useQuery({
    queryKey: ['Referrals'],
    queryFn: () => getApiReferralsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiReferralsIdFn = async (args: patchApiReferralsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/referrals/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiReferralsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiReferralsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Referrals'] })
    }
  })
}

const getApiReferralsTypesFn = async (args: useGetApiReferralsTypesArgs) => {
  const res = await fetch(`/referrals/types`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiReferralsTypes = (args: useGetApiReferralsTypesArgs) => {
  const result = useQuery({
    queryKey: ['Referrals'],
    queryFn: () => getApiReferralsTypesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiReferralsTypesIdFn = async (
  args: useGetApiReferralsTypesIdArgs
) => {
  const res = await fetch(`/referrals/types/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a referral type */
  z.object({
    _links: z
      .record(z.string(), z.object({ href: z.string().optional() }))
      .optional(),
    _embedded: z.record(z.string(), z.object({})).optional(),
    id: z.string().optional(),
    /** The name of the referral type */ name: z.string().optional()
  }).parse(data)
}

export const useGetApiReferralsTypesId = (
  args: useGetApiReferralsTypesIdArgs
) => {
  const result = useQuery({
    queryKey: ['Referrals'],
    queryFn: () => getApiReferralsTypesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiResthooksFn = async (args: useGetApiResthooksArgs) => {
  const res = await fetch(`/resthooks/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of a webhook subscription */
          z.object({
            /** The unique identifier of the webhook */
            id: z.string().optional(),
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
    .parse(data)
}

export const useGetApiResthooks = (args: useGetApiResthooksArgs) => {
  const result = useQuery({
    queryKey: ['RestHooks'],
    queryFn: () => getApiResthooksFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiResthooksIdFn = async (args: useGetApiResthooksIdArgs) => {
  const res = await fetch(`/resthooks/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a webhook subscription */
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
  }).parse(data)
}

export const useGetApiResthooksId = (args: useGetApiResthooksIdArgs) => {
  const result = useQuery({
    queryKey: ['RestHooks'],
    queryFn: () => getApiResthooksIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiResthooksIdFn = async (args: deleteApiResthooksIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/resthooks/${args.id}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiResthooksId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiResthooksIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['RestHooks'] })
    }
  })
}

const getApiSourcesFn = async (args: useGetApiSourcesArgs) => {
  const res = await fetch(`/sources/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of a source of business */
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().optional() }))
              .optional(),
            _embedded: z.record(z.string(), z.object({})).optional(),
            /** The unique identifier of the source */
            id: z.string().optional(),
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
    .parse(data)
}

export const useGetApiSources = (args: useGetApiSourcesArgs) => {
  const result = useQuery({
    queryKey: ['Sources'],
    queryFn: () => getApiSourcesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiSourcesIdFn = async (args: useGetApiSourcesIdArgs) => {
  const res = await fetch(`/sources/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a source of business */
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
  }).parse(data)
}

export const useGetApiSourcesId = (args: useGetApiSourcesIdArgs) => {
  const result = useQuery({
    queryKey: ['Sources'],
    queryFn: () => getApiSourcesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiSourcesIdFn = async (args: patchApiSourcesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/sources/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiSourcesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiSourcesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Sources'] })
    }
  })
}

const getApiTasksFn = async (args: useGetApiTasksArgs) => {
  const res = await fetch(`/tasks/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
            /** The date the task was completed */
            completed: z.string().optional(),
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
    .parse(data)
}

export const useGetApiTasks = (args: useGetApiTasksArgs) => {
  const result = useQuery({
    queryKey: ['Tasks'],
    queryFn: () => getApiTasksFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTasksIdFn = async (args: useGetApiTasksIdArgs) => {
  const res = await fetch(`/tasks/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a task, which can also be an internal message */
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
  }).parse(data)
}

export const useGetApiTasksId = (args: useGetApiTasksIdArgs) => {
  const result = useQuery({
    queryKey: ['Tasks'],
    queryFn: () => getApiTasksIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiTasksIdFn = async (args: patchApiTasksIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tasks/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiTasksId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTasksIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tasks'] })
    }
  })
}

const getApiTenanciesFn = async (args: useGetApiTenanciesArgs) => {
  const res = await fetch(`/tenancies/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of a tenancy */
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().optional() }))
              .optional(),
            _embedded: z.record(z.string(), z.object({})).optional(),
            /** The unique identifier of the tenancy */
            id: z.string().optional(),
            /** The date and time when the tenancy was created */
            created: z.string().optional(),
            /** The date and time when the tenancy was last modified */
            modified: z.string().optional(),
            /** The start date of the tenancy */
            startDate: z.string().optional(),
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
                /** The source type (office/source) */
                type: z.string().optional()
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
                      /** The building name */
                      buildingName: z.string().optional(),
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
                /** The renewal option expiry date */
                expiry: z.string().optional(),
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
    .parse(data)
}

export const useGetApiTenancies = (args: useGetApiTenanciesArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTenanciesIdFn = async (args: useGetApiTenanciesIdArgs) => {
  const res = await fetch(`/tenancies/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a tenancy */
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
              /** The building number */ buildingNumber: z.string().optional(),
              /** The first line of the address */ line1: z.string().optional(),
              /** The second line of the address */
              line2: z.string().optional(),
              /** The third line of the address */ line3: z.string().optional(),
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
  }).parse(data)
}

export const useGetApiTenanciesId = (args: useGetApiTenanciesIdArgs) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiTenanciesIdFn = async (args: patchApiTenanciesIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiTenanciesId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const getApiTenanciesIdRelationshipsFn = async (
  args: useGetApiTenanciesIdRelationshipsArgs
) => {
  const res = await fetch(`/tenancies/${args.id}/relationships`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiTenanciesIdRelationships = (
  args: useGetApiTenanciesIdRelationshipsArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRelationshipsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTenanciesIdRelationshipsRelationshipIdFn = async (
  args: useGetApiTenanciesIdRelationshipsRelationshipIdArgs
) => {
  const res = await fetch(
    `/tenancies/${args.id}/relationships/${args.relationshipId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of a relationship between a tenancy and a contact or company */
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
  }).parse(data)
}

export const useGetApiTenanciesIdRelationshipsRelationshipId = (
  args: useGetApiTenanciesIdRelationshipsRelationshipIdArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRelationshipsRelationshipIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTenanciesIdChecksFn = async (
  args: useGetApiTenanciesIdChecksArgs
) => {
  const res = await fetch(`/tenancies/${args.id}/checks`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiTenanciesIdChecks = (
  args: useGetApiTenanciesIdChecksArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdChecksFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTenanciesIdChecksCheckIdFn = async (
  args: useGetApiTenanciesIdChecksCheckIdArgs
) => {
  const res = await fetch(`/tenancies/${args.id}/checks/${args.checkId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a tenancy check - a process that needs to happen before a tenancy can commence or ends */
  z.object({
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
  }).parse(data)
}

export const useGetApiTenanciesIdChecksCheckId = (
  args: useGetApiTenanciesIdChecksCheckIdArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdChecksCheckIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiTenanciesIdChecksCheckIdFn = async (
  args: deleteApiTenanciesIdChecksCheckIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/checks/${args.checkId}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiTenanciesIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const patchApiTenanciesIdChecksCheckIdFn = async (
  args: patchApiTenanciesIdChecksCheckIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/checks/${args.checkId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiTenanciesIdChecksCheckId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdChecksCheckIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const getApiTenanciesIdBreakClausesFn = async (
  args: useGetApiTenanciesIdBreakClausesArgs
) => {
  const res = await fetch(`/tenancies/${args.id}/breakClauses`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
            /** The break clauses description */
            description: z.string().optional(),
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
    .parse(data)
}

export const useGetApiTenanciesIdBreakClauses = (
  args: useGetApiTenanciesIdBreakClausesArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdBreakClausesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTenanciesIdBreakClausesClauseIdFn = async (
  args: useGetApiTenanciesIdBreakClausesClauseIdArgs
) => {
  const res = await fetch(
    `/tenancies/${args.id}/breakClauses/${args.clauseId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of a tenancy break clause */
  z.object({
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
  }).parse(data)
}

export const useGetApiTenanciesIdBreakClausesClauseId = (
  args: useGetApiTenanciesIdBreakClausesClauseIdArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdBreakClausesClauseIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiTenanciesIdBreakClausesClauseIdFn = async (
  args: deleteApiTenanciesIdBreakClausesClauseIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/breakClauses/${args.clauseId}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiTenanciesIdBreakClausesClauseId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdBreakClausesClauseIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const patchApiTenanciesIdBreakClausesClauseIdFn = async (
  args: patchApiTenanciesIdBreakClausesClauseIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/breakClauses/${args.clauseId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiTenanciesIdBreakClausesClauseId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdBreakClausesClauseIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const getApiTenanciesIdAllowancesFn = async (
  args: useGetApiTenanciesIdAllowancesArgs
) => {
  const res = await fetch(`/tenancies/${args.id}/allowances`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of a tenancy allowance */
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().optional() }))
              .optional(),
            _embedded: z.record(z.string(), z.object({})).optional(),
            /** The unique identifier of the allowance */
            id: z.string().optional(),
            /** The date and time when the allowance was created */
            created: z.string().optional(),
            /** The date and time when the allowance last modified */
            modified: z.string().optional(),
            /** The identifier of the associated allowance */
            typeId: z.string().optional(),
            /** The break clauses description */
            description: z.string().optional(),
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
    .parse(data)
}

export const useGetApiTenanciesIdAllowances = (
  args: useGetApiTenanciesIdAllowancesArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdAllowancesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTenanciesIdAllowancesAllowanceIdFn = async (
  args: useGetApiTenanciesIdAllowancesAllowanceIdArgs
) => {
  const res = await fetch(
    `/tenancies/${args.id}/allowances/${args.allowanceId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of a tenancy allowance */
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
  }).parse(data)
}

export const useGetApiTenanciesIdAllowancesAllowanceId = (
  args: useGetApiTenanciesIdAllowancesAllowanceIdArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdAllowancesAllowanceIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiTenanciesIdAllowancesAllowanceIdFn = async (
  args: deleteApiTenanciesIdAllowancesAllowanceIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/allowances/${args.allowanceId}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiTenanciesIdAllowancesAllowanceId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdAllowancesAllowanceIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const patchApiTenanciesIdAllowancesAllowanceIdFn = async (
  args: patchApiTenanciesIdAllowancesAllowanceIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/allowances/${args.allowanceId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiTenanciesIdAllowancesAllowanceId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdAllowancesAllowanceIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const getApiTenanciesIdResponsibilitiesFn = async (
  args: useGetApiTenanciesIdResponsibilitiesArgs
) => {
  const res = await fetch(`/tenancies/${args.id}/responsibilities`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiTenanciesIdResponsibilities = (
  args: useGetApiTenanciesIdResponsibilitiesArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdResponsibilitiesFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTenanciesIdResponsibilitiesResponsibilityIdFn = async (
  args: useGetApiTenanciesIdResponsibilitiesResponsibilityIdArgs
) => {
  const res = await fetch(
    `/tenancies/${args.id}/responsibilities/${args.responsibilityId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of a tenancies responsibility */
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
  }).parse(data)
}

export const useGetApiTenanciesIdResponsibilitiesResponsibilityId = (
  args: useGetApiTenanciesIdResponsibilitiesResponsibilityIdArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdResponsibilitiesResponsibilityIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiTenanciesIdResponsibilitiesResponsibilityIdFn = async (
  args: deleteApiTenanciesIdResponsibilitiesResponsibilityIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/responsibilities/${args.responsibilityId}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiTenanciesIdResponsibilitiesResponsibilityId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiTenanciesIdResponsibilitiesResponsibilityIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const patchApiTenanciesIdResponsibilitiesResponsibilityIdFn = async (
  args: patchApiTenanciesIdResponsibilitiesResponsibilityIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/responsibilities/${args.responsibilityId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiTenanciesIdResponsibilitiesResponsibilityId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdResponsibilitiesResponsibilityIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const getApiTenanciesIdRenewalNegotiationsFn = async (
  args: useGetApiTenanciesIdRenewalNegotiationsArgs
) => {
  const res = await fetch(`/tenancies/${args.id}/renewalNegotiations`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiTenanciesIdRenewalNegotiations = (
  args: useGetApiTenanciesIdRenewalNegotiationsArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRenewalNegotiationsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTenanciesIdRenewalNegotiationsRenewalIdFn = async (
  args: useGetApiTenanciesIdRenewalNegotiationsRenewalIdArgs
) => {
  const res = await fetch(
    `/tenancies/${args.id}/renewalNegotiations/${args.renewalId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiTenanciesIdRenewalNegotiationsRenewalId = (
  args: useGetApiTenanciesIdRenewalNegotiationsRenewalIdArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRenewalNegotiationsRenewalIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiTenanciesIdRenewalNegotiationsRenewalIdFn = async (
  args: patchApiTenanciesIdRenewalNegotiationsRenewalIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/renewalNegotiations/${args.renewalId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiTenanciesIdRenewalNegotiationsRenewalId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiTenanciesIdRenewalNegotiationsRenewalIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const getApiTenanciesIdExtensionsFn = async (
  args: useGetApiTenanciesIdExtensionsArgs
) => {
  const res = await fetch(`/tenancies/${args.id}/extensions`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
                /** The one of fee summary text */
                summary: z.string().optional(),
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
    .parse(data)
}

export const useGetApiTenanciesIdExtensions = (
  args: useGetApiTenanciesIdExtensionsArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdExtensionsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTenanciesIdExtensionsExtensionIdFn = async (
  args: useGetApiTenanciesIdExtensionsExtensionIdArgs
) => {
  const res = await fetch(
    `/tenancies/${args.id}/extensions/${args.extensionId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z
    .object({
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
                /** The one of fee summary text */
                summary: z.string().optional(),
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
    .parse(data)
}

export const useGetApiTenanciesIdExtensionsExtensionId = (
  args: useGetApiTenanciesIdExtensionsExtensionIdArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdExtensionsExtensionIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn = async (
  args: useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs
) => {
  const res = await fetch(
    `/tenancies/${args.id}/renewalNegotiations/${args.renewalId}/checks`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecks = (
  args: useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () => getApiTenanciesIdRenewalNegotiationsRenewalIdChecksFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn = async (
  args: useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs
) => {
  const res = await fetch(
    `/tenancies/${args.id}/renewalNegotiations/${args.renewalId}/checks/${args.checkId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of a tenancy renewal check */
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
  }).parse(data)
}

export const useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId = (
  args: useGetApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs
) => {
  const result = useQuery({
    queryKey: ['Tenancies'],
    queryFn: () =>
      getApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn = async (
  args: deleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/renewalNegotiations/${args.renewalId}/checks/${args.checkId}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId =
  () => {
    const queryClient = useQueryClient()
    const { handleFetchError } = useFetchError()

    return useMutation({
      mutationFn:
        deleteApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn,
      onError: handleFetchError,
      onSuccess: () => {
        // Invalidate and refetch
        void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
      }
    })
  }

const patchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn = async (
  args: patchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/renewalNegotiations/${args.renewalId}/checks/${args.checkId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckId =
  () => {
    const queryClient = useQueryClient()
    const { handleFetchError } = useFetchError()

    return useMutation({
      mutationFn:
        patchApiTenanciesIdRenewalNegotiationsRenewalIdChecksCheckIdFn,
      onError: handleFetchError,
      onSuccess: () => {
        // Invalidate and refetch
        void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
      }
    })
  }

const getApiTransactionsFn = async (args: useGetApiTransactionsArgs) => {
  const res = await fetch(`/transactions/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
            /** The transaction description */
            description: z.string().optional(),
            /** The status of the transaction (awaitingAuthorisation/awaitingPosting/posted/rejected) */
            status: z.string().optional(),
            /** The ledger the transaction is recorded in */
            ledger: z.string().optional(),
            /** The transaction net amount */ netAmount: z.number().optional(),
            /** The transaction tax amount */ taxAmount: z.number().optional(),
            /** The transaction gross amount */
            grossAmount: z.number().optional(),
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
    .parse(data)
}

export const useGetApiTransactions = (args: useGetApiTransactionsArgs) => {
  const result = useQuery({
    queryKey: ['Transactions'],
    queryFn: () => getApiTransactionsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTransactionsIdFn = async (args: useGetApiTransactionsIdArgs) => {
  const res = await fetch(`/transactions/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Model representing a transaction */
  z.object({
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
  }).parse(data)
}

export const useGetApiTransactionsId = (args: useGetApiTransactionsIdArgs) => {
  const result = useQuery({
    queryKey: ['Transactions'],
    queryFn: () => getApiTransactionsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTransactionsNominalAccountsFn = async (
  args: useGetApiTransactionsNominalAccountsArgs
) => {
  const res = await fetch(`/transactions/nominalAccounts`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiTransactionsNominalAccounts = (
  args: useGetApiTransactionsNominalAccountsArgs
) => {
  const result = useQuery({
    queryKey: ['Transactions'],
    queryFn: () => getApiTransactionsNominalAccountsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiTransactionsNominalAccountsIdFn = async (
  args: useGetApiTransactionsNominalAccountsIdArgs
) => {
  const res = await fetch(`/transactions/nominalAccounts/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Model representing a nominal account */
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
  }).parse(data)
}

export const useGetApiTransactionsNominalAccountsId = (
  args: useGetApiTransactionsNominalAccountsIdArgs
) => {
  const result = useQuery({
    queryKey: ['Transactions'],
    queryFn: () => getApiTransactionsNominalAccountsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiVendorsIdFn = async (args: useGetApiVendorsIdArgs) => {
  const res = await fetch(`/vendors/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a vendor */
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
              /** The second line of the address */
              line2: z.string().optional(),
              /** The third line of the address */ line3: z.string().optional(),
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
  }).parse(data)
}

export const useGetApiVendorsId = (args: useGetApiVendorsIdArgs) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiVendorsIdFn = async (args: patchApiVendorsIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/vendors/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiVendorsId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiVendorsIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Vendors'] })
    }
  })
}

const getApiVendorsFn = async (args: useGetApiVendorsArgs) => {
  const res = await fetch(`/vendors/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
      _embedded: z
        .array(
          /** Representation of a vendor */
          z.object({
            _links: z
              .record(z.string(), z.object({ href: z.string().optional() }))
              .optional(),
            _embedded: z.record(z.string(), z.object({})).optional(),
            /** The unique identifier of the vendor */
            id: z.string().optional(),
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
                /** The source type (office/source) */
                type: z.string().optional()
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
                      /** The building name */
                      buildingName: z.string().optional(),
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
    .parse(data)
}

export const useGetApiVendors = (args: useGetApiVendorsArgs) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiVendorsIdRelationshipsFn = async (
  args: useGetApiVendorsIdRelationshipsArgs
) => {
  const res = await fetch(`/vendors/${args.id}/relationships`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiVendorsIdRelationships = (
  args: useGetApiVendorsIdRelationshipsArgs
) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsIdRelationshipsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiVendorsIdRelationshipsRelationshipIdFn = async (
  args: useGetApiVendorsIdRelationshipsRelationshipIdArgs
) => {
  const res = await fetch(
    `/vendors/${args.id}/relationships/${args.relationshipId}`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return /** Representation of a relationship between a vendor and a contact or company */
  z.object({
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
  }).parse(data)
}

export const useGetApiVendorsIdRelationshipsRelationshipId = (
  args: useGetApiVendorsIdRelationshipsRelationshipIdArgs
) => {
  const result = useQuery({
    queryKey: ['Vendors'],
    queryFn: () => getApiVendorsIdRelationshipsRelationshipIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiVendorsIdRelationshipsRelationshipIdFn = async (
  args: deleteApiVendorsIdRelationshipsRelationshipIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/vendors/${args.id}/relationships/${args.relationshipId}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiVendorsIdRelationshipsRelationshipId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiVendorsIdRelationshipsRelationshipIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Vendors'] })
    }
  })
}

const getApiWorksOrdersFn = async (args: useGetApiWorksOrdersArgs) => {
  const res = await fetch(`/worksOrders/`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
                    .record(
                      z.string(),
                      z.object({ href: z.string().optional() })
                    )
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
    .parse(data)
}

export const useGetApiWorksOrders = (args: useGetApiWorksOrdersArgs) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiWorksOrdersIdFn = async (args: useGetApiWorksOrdersIdArgs) => {
  const res = await fetch(`/worksOrders/${args.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a works order */
  z.object({
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
  }).parse(data)
}

export const useGetApiWorksOrdersId = (args: useGetApiWorksOrdersIdArgs) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const patchApiWorksOrdersIdFn = async (args: patchApiWorksOrdersIdArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/worksOrders/${args.id}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiWorksOrdersId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiWorksOrdersIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    }
  })
}

const getApiWorksOrdersIdItemsFn = async (
  args: useGetApiWorksOrdersIdItemsArgs
) => {
  const res = await fetch(`/worksOrders/${args.id}/items`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z
    .object({
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
    .parse(data)
}

export const useGetApiWorksOrdersIdItems = (
  args: useGetApiWorksOrdersIdItemsArgs
) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersIdItemsFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const getApiWorksOrdersIdItemsItemIdFn = async (
  args: useGetApiWorksOrdersIdItemsItemIdArgs
) => {
  const res = await fetch(`/worksOrders/${args.id}/items/${args.itemId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return /** Representation of a works order item */
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
  }).parse(data)
}

export const useGetApiWorksOrdersIdItemsItemId = (
  args: useGetApiWorksOrdersIdItemsItemIdArgs
) => {
  const result = useQuery({
    queryKey: ['WorksOrders'],
    queryFn: () => getApiWorksOrdersIdItemsItemIdFn(args),
    placeholderData: keepPreviousData
  })

  return result
}

const deleteApiWorksOrdersIdItemsItemIdFn = async (
  args: deleteApiWorksOrdersIdItemsItemIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/worksOrders/${args.id}/items/${args.itemId}`,
    {
      method: 'DELETE',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const deleteApiWorksOrdersIdItemsItemId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: deleteApiWorksOrdersIdItemsItemIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    }
  })
}

const patchApiWorksOrdersIdItemsItemIdFn = async (
  args: patchApiWorksOrdersIdItemsItemIdArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/worksOrders/${args.id}/items/${args.itemId}`,
    {
      method: 'PATCH',
      body: JSON.stringify(args.body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
      }
    }
  )

  const data = await res.json()

  return z.void().parse(data)
}

export const patchApiWorksOrdersIdItemsItemId = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: patchApiWorksOrdersIdItemsItemIdFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['WorksOrders'] })
    }
  })
}
