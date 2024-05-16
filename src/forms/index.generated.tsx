import { z } from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { default as FormLabel } from '@mui/joy/FormLabel'
import { default as Input } from '@mui/joy/Input'
import { default as FormControl } from '@mui/joy/FormControl'
import { default as FormHelperText } from '@mui/joy/FormHelperText'
import { default as Box } from '@mui/joy/Box'
import { zodResolver } from '@hookform/resolvers/zod'
import { default as Button } from '@mui/joy/Button'
import { createRuntimeConfig } from '@/components/ModelRuntimeConfig'
import {
  useCreateApplicant,
  useCreateApplicantRelationship
} from '@/services/services/applicants.ts'
import { useCreateArea } from '@/services/services/areas.ts'
import {
  useCreateAppointment,
  useCreateOpenHouseAttendee
} from '@/services/services/appointments.ts'
import { useCreateCompany } from '@/services/services/companies.ts'
import {
  useCreateContact,
  useUpdateContactSubscription
} from '@/services/services/contacts.ts'
import {
  useCreateDownwardChain,
  useCreateUpwardChain
} from '@/services/services/conveyancing.ts'
import {
  useCreateDocument,
  useCreateSignedUrl
} from '@/services/services/documents.ts'
import { useCreateEnquiry } from '@/services/services/enquiries.ts'
import {
  useCreateIdentityCheck,
  useCreateIdentityCheckSignedUrl
} from '@/services/services/identityChecks.ts'
import {
  useCreateJournalEntry,
  useCreateBulkJournalEntry
} from '@/services/services/journalEntries.ts'
import {
  useCreateLandlord,
  useCreateLandlordRelationship
} from '@/services/services/landlords.ts'
import {
  useCreateMetadata,
  useUpdateMetadata,
  useUpdateMetadataSchema,
  useCreateMetadataSchema
} from '@/services/services/metadata.ts'
import { useCreateNegotiator } from '@/services/services/negotiators.ts'
import { useCreateNotification } from '@/services/services/notifications.ts'
import { useCreateOffer } from '@/services/services/offers.ts'
import { useCreateOffice } from '@/services/services/offices.ts'
import {
  useCreateProperty,
  useCreatePropertyCertificate,
  useCreatePropertyKey,
  useCreatePropertyKeyMovement,
  useUpdatePropertyKeyMovement,
  useCreatePropertyCheck,
  useCreatePropertyAppraisal
} from '@/services/services/properties.ts'
import {
  useCreatePropertyImage,
  useCreatePropertyImageSignedUrl,
  useReindexPropertyImages
} from '@/services/services/propertyImages.ts'
import { useCreateReferral } from '@/services/services/referrals.ts'
import {
  useCreateResthook,
  useUpdateResthook
} from '@/services/services/resthooks.ts'
import { useCreateSource } from '@/services/services/sources.ts'
import { useCreateTask } from '@/services/services/tasks.ts'
import {
  useCreateTenancy,
  useCreateTenancyCheck,
  useCreateTenancyBreakClause,
  useCreateTenancyAllowance,
  useCreateTenancyResponsibility,
  useCreateTenancyRenewalNegotiation,
  useCreateTenancyRenewalNegotiationCheck
} from '@/services/services/tenancies.ts'
import { useCreateSupplierInvoice } from '@/services/services/transactions.ts'
import { useCreateVendorRelationship } from '@/services/services/vendors.ts'
import {
  useCreateWorksOrder,
  useCreateWorksOrderItem
} from '@/services/services/worksOrders.ts'

export type CreateApplicantsProps = void
export type CreateApplicantsIdRelationshipsProps = { id: string }
export type CreateAreasProps = void
export type CreateAppointmentsProps = void
export type CreateAppointmentsIdOpenHouseAttendeesProps = { id: string }
export type CreateCompaniesProps = void
export type CreateContactsProps = void
export type UpdateContactsIdSubscriptionsSubscriptionIdProps = {
  id: string
  subscriptionId: string
}
export type CreateConveyancingIdDownwardProps = { id: string }
export type CreateConveyancingIdUpwardProps = { id: string }
export type CreateDocumentsProps = void
export type CreateDocumentsSignedUrlProps = void
export type CreateEnquiriesProps = void
export type CreateIdentityChecksProps = void
export type CreateIdentityChecksSignedUrlProps = void
export type CreateJournalEntriesProps = void
export type CreateJournalEntriesBulkProps = void
export type CreateLandlordsProps = void
export type CreateLandlordsIdRelationshipsProps = { id: string }
export type CreateMetadataProps = void
export type UpdateMetadataIdProps = { id: string }
export type UpdateMetadataMetadataSchemaIdProps = { id: string }
export type CreateMetadataMetadataSchemaProps = void
export type CreateNegotiatorsProps = void
export type CreateNotificationsProps = void
export type CreateOffersProps = void
export type CreateOfficesProps = void
export type CreatePropertiesProps = void
export type CreatePropertiesIdCertificatesProps = { id: string }
export type CreatePropertiesIdKeysProps = { id: string }
export type CreatePropertiesIdKeysKeyIdMovementsProps = {
  id: string
  keyId: string
}
export type UpdatePropertiesIdKeysKeyIdMovementsMovementIdProps = {
  id: string
  keyId: string
  movementId: string
}
export type CreatePropertiesIdChecksProps = { id: string }
export type CreatePropertiesIdAppraisalsProps = { id: string }
export type CreatePropertyImagesProps = void
export type CreatePropertyImagesSignedUrlProps = void
export type CreatePropertyImagesReindexProps = void
export type CreateReferralsProps = void
export type CreateResthooksProps = void
export type UpdateResthooksIdProps = { id: string }
export type CreateSourcesProps = void
export type CreateTasksProps = void
export type CreateTenanciesProps = void
export type CreateTenanciesIdChecksProps = { id: string }
export type CreateTenanciesIdBreakClausesProps = { id: string }
export type CreateTenanciesIdAllowancesProps = { id: string }
export type CreateTenanciesIdResponsibilitiesProps = { id: string }
export type CreateTenanciesIdRenewalNegotiationsProps = { id: string }
export type CreateTenanciesIdRenewalNegotiationsRenewalIdChecksProps = {
  id: string
  renewalId: string
}
export type CreateTransactionsSupplierInvoicesProps = void
export type CreateVendorsIdRelationshipsProps = { id: string }
export type CreateWorksOrdersProps = void
export type CreateWorksOrdersIdItemsProps = { id: string }

export const CreateApplicants = (props: CreateApplicantsProps) => {
  const { control, handleSubmit } = useForm<{
    marketingMode: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
    string
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
    departmentId: /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    string
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
          priceFrom?: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
          number | undefined
          priceTo?: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
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
          rentFrom?: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
          number | undefined
          rentTo?: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
          number | undefined
          rentFrequency?: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
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
    officeIds: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
    Array<string>
    negotiatorIds: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
    Array<string>
    related: /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
    Array</** Request body used to create a relationship between an applicant and a contact or company */
    {
      associatedId: /** The unique identifier of the contact or company to create a relationship with */
      string
      associatedType?: /** The type of relationship to create (contact/company) */
      string | undefined
    }>
    metadata?: /** App specific metadata to set against the applicant */
    Record<string, Record<string, never>> | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    marketingMode: /** Indicates whether the applicant is look to buy or rent a property (buying/renting) */
    string
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
    departmentId: /** The unique identifier of the department the applicant is associated with. The applicant will only match to properties with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    string
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
          priceFrom?: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceTo' is not provided) */
          number | undefined
          priceTo?: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'buying' and 'priceFrom' is not provided) */
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
          rentFrom?: /** The lower bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentTo' is 0) */
          number | undefined
          rentTo?: /** The upper bound of the applicant's budget. (Required when 'marketingMode' is 'renting' and 'rentFrom' is 0) */
          number | undefined
          rentFrequency?: /** The desired rent collection frequency specified by the applicant's budget (weekly/monthly/annually/fourWeekly). */
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
    officeIds: /** A collection of unique identifiers of offices attached to the applicant. The first item in the collection is considered the primary office */
    Array<string>
    negotiatorIds: /** A collection of unique identifiers of negotiators attached to the applicant. The first item in the collection is considered the primary negotiator */
    Array<string>
    related: /** A collection of contacts and/or companies associated to the applicant. The first item in the collection is considered the primary relationship */
    Array</** Request body used to create a relationship between an applicant and a contact or company */
    {
      associatedId: /** The unique identifier of the contact or company to create a relationship with */
      string
      associatedType?: /** The type of relationship to create (contact/company) */
      string | undefined
    }>
    metadata?: /** App specific metadata to set against the applicant */
    Record<string, Record<string, never>> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateApplicant()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="marketingMode"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('marketingMode')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="currency"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('currency')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="active"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('active')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="notes"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('notes')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="statusId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('statusId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="sellingStatus"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('sellingStatus')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="sellingPosition"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('sellingPosition')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="lastCall"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('lastCall')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="nextCall"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('nextCall')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="departmentId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('departmentId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="solicitorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('solicitorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="potentialClient"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('potentialClient')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="type"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('type')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="style"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('style')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="situation"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('situation')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="parking"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('parking')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="age"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('age')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="locality"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('locality')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="specialFeatures"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('specialFeatures')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="bedroomsMin"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('bedroomsMin')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="bedroomsMax"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('bedroomsMax')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="receptionsMin"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('receptionsMin')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="receptionsMax"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('receptionsMax')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="bathroomsMin"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('bathroomsMin')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="bathroomsMax"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('bathroomsMax')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="parkingSpacesMin"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('parkingSpacesMin')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="parkingSpacesMax"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('parkingSpacesMax')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="locationType"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('locationType')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="locationOptions"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('locationOptions')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="buying"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('buying')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="renting"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('renting')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="externalArea"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('externalArea')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="internalArea"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('internalArea')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="source"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('source')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="regional"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('regional')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="officeIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('officeIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="negotiatorIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('negotiatorIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="related"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('related')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateApplicantsIdRelationships = (
  props: CreateApplicantsIdRelationshipsProps
) => {
  const { control, handleSubmit } = useForm<{
    associatedId?: /** The unique identifier of the contact or company to create a relationship with */
    string | undefined
    associatedType?: /** The type of relationship to create (contact/company) */
    string | undefined
    isMain?: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
    boolean | undefined
  }>({
    resolver: zodResolver(
      z.object({
        /** The unique identifier of the contact or company to create a relationship with */
        associatedId: z.string().optional(),
        /** The type of relationship to create (contact/company) */
        associatedType: z.string().optional(),
        /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
        isMain: z.boolean().optional()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    associatedId?: /** The unique identifier of the contact or company to create a relationship with */
    string | undefined
    associatedType?: /** The type of relationship to create (contact/company) */
    string | undefined
    isMain?: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
    boolean | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateApplicantRelationship()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="associatedId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('associatedId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="associatedType"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('associatedType')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="isMain"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('isMain')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateAreas = (props: CreateAreasProps) => {
  const { control, handleSubmit } = useForm<{
    name: /** The name of the area */ string
    type: /** The type of area (postcodes/polygon/group) */ string
    area: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
    Array<string>
    departmentIds?: /** A collection of unique identifiers of departments associated to the area */
    Array<string> | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
    Array<string> | undefined
    parentId?: /** The unique identifier of the parent area, if the area should be registered as a child area/group in an existing area group */
    string | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    name: /** The name of the area */ string
    type: /** The type of area (postcodes/polygon/group) */ string
    area: /** The location details (comma delimited list of postcodes, group ids or lat/long coordinate groups) */
    Array<string>
    departmentIds?: /** A collection of unique identifiers of departments associated to the area */
    Array<string> | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the area. The first item in the collection is considered the primary office */
    Array<string> | undefined
    parentId?: /** The unique identifier of the parent area, if the area should be registered as a child area/group in an existing area group */
    string | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateArea()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('name')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="type"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('type')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="area"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('area')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="departmentIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('departmentIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="officeIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('officeIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="parentId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('parentId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateAppointments = (props: CreateAppointmentsProps) => {
  const { control, handleSubmit } = useForm<{
    start: /** The date and time when the appointment will start */ string
    end: /** The date and time when the appointment will end */ string
    followUpOn?: /** The date when the appointment should be followed up */
    string | undefined
    typeId: /** The unique identifier of the appointment type */ string
    description?: /** A free text description about the appointment */
    string | undefined
    organiserId?: /** The unique identifier of the negotiator that organised the appointment */
    string | undefined
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
    Array<string> | undefined
    attendee?: /** Represents an external attendee on an appointment */
    | {
          id?: /** The unique identifier of the attendee */ string | undefined
          type?: /** The type of attendee (applicant/contact/landlord/tenant) */
          string | undefined
        }
      | undefined
    propertyId?: /** The unique identifier of the property related to the appointment */
    string | undefined
    otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
    string | undefined
    accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
    boolean | undefined
    negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
    boolean | undefined
    attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
    boolean | undefined
    propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
    boolean | undefined
    virtual?: /** A flag denoting whether or not the appointment is virtual */
    boolean | undefined
    isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
    boolean | undefined
    attended?: /** The attendance status of the appointment (notSet/noShow/attended) */
    string | undefined
    recurrence?: /** Details of an appointment's recurrence pattern */
    | {
          interval?: /** The numeric value denoting how often the appointment will recur */
          number | undefined
          type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
          string | undefined
          until?: /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
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
  }>({
    resolver: zodResolver(
      z.object({
        /** The date and time when the appointment will start */
        start: z.string(),
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
            /** The unique identifier of the attendee */
            id: z.string().optional(),
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    start: /** The date and time when the appointment will start */ string
    end: /** The date and time when the appointment will end */ string
    followUpOn?: /** The date when the appointment should be followed up */
    string | undefined
    typeId: /** The unique identifier of the appointment type */ string
    description?: /** A free text description about the appointment */
    string | undefined
    organiserId?: /** The unique identifier of the negotiator that organised the appointment */
    string | undefined
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
    Array<string> | undefined
    attendee?: /** Represents an external attendee on an appointment */
    | {
          id?: /** The unique identifier of the attendee */ string | undefined
          type?: /** The type of attendee (applicant/contact/landlord/tenant) */
          string | undefined
        }
      | undefined
    propertyId?: /** The unique identifier of the property related to the appointment */
    string | undefined
    otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
    string | undefined
    accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
    boolean | undefined
    negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
    boolean | undefined
    attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
    boolean | undefined
    propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
    boolean | undefined
    virtual?: /** A flag denoting whether or not the appointment is virtual */
    boolean | undefined
    isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
    boolean | undefined
    attended?: /** The attendance status of the appointment (notSet/noShow/attended) */
    string | undefined
    recurrence?: /** Details of an appointment's recurrence pattern */
    | {
          interval?: /** The numeric value denoting how often the appointment will recur */
          number | undefined
          type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
          string | undefined
          until?: /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
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
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateAppointment()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="start"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('start')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="end"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('end')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="followUpOn"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('followUpOn')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="typeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('typeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('description')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="organiserId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('organiserId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="negotiatorIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('negotiatorIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="officeIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('officeIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="attendee"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('attendee')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="propertyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="otherAgentId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('otherAgentId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="accompanied"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('accompanied')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="negotiatorConfirmed"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('negotiatorConfirmed')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="attendeeConfirmed"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('attendeeConfirmed')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="propertyConfirmed"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyConfirmed')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="virtual"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('virtual')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="isRepeat"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('isRepeat')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="attended"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('attended')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="recurrence"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('recurrence')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="documents"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('documents')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateAppointmentsIdOpenHouseAttendees = (
  props: CreateAppointmentsIdOpenHouseAttendeesProps
) => {
  const { control, handleSubmit } = useForm<{
    interestLevel?: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
    string | undefined
    notes?: /** Notes on this open house attendee */ string | undefined
    attendee?: /** Represents an external attendee on an appointment */
    | {
          id?: /** The unique identifier of the attendee */ string | undefined
          type?: /** The type of attendee (applicant/contact/landlord/tenant) */
          string | undefined
        }
      | undefined
  }>({
    resolver: zodResolver(
      z.object({
        /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
        interestLevel: z.string().optional(),
        /** Notes on this open house attendee */ notes: z.string().optional(),
        /** Represents an external attendee on an appointment */
        attendee: z
          .object({
            /** The unique identifier of the attendee */
            id: z.string().optional(),
            /** The type of attendee (applicant/contact/landlord/tenant) */
            type: z.string().optional()
          })
          .optional()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    interestLevel?: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
    string | undefined
    notes?: /** Notes on this open house attendee */ string | undefined
    attendee?: /** Represents an external attendee on an appointment */
    | {
          id?: /** The unique identifier of the attendee */ string | undefined
          type?: /** The type of attendee (applicant/contact/landlord/tenant) */
          string | undefined
        }
      | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateOpenHouseAttendee()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="interestLevel"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('interestLevel')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="notes"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('notes')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="attendee"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('attendee')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateCompanies = (props: CreateCompaniesProps) => {
  const { control, handleSubmit } = useForm<{
    name: /** The name of the company */ string
    branch?: /** The branch name of the company */ string | undefined
    notes?: /** A free text field containing notes that describe the company's business or service offering */
    string | undefined
    active?: /** A flag determining whether or not the company is currently active */
    boolean | undefined
    marketingConsent?: /** The marketing consent status of the company (deny/notAsked) */
    string | undefined
    vatRegistered?: /** A flag determining whether or not the company is VAT registered */
    boolean | undefined
    typeIds: /** A collection of unique identifiers of company types that categorise the type of business the company operates */
    Array<string>
    supplierTypeId?: /** The unique identifier of a supplier type, if the company is a supplier */
    string | undefined
    workPhone?: /** The work phone number of the company. (Required when no other company or address details are provided) */
    string | undefined
    mobilePhone?: /** The mobile phone number of the company. (Required when no other company or address details are provided) */
    string | undefined
    email?: /** The email address of the company. (Required when no other company or address details are provided) */
    string | undefined
    address?: /** Request body to set the address of a new company */
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
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    name: /** The name of the company */ string
    branch?: /** The branch name of the company */ string | undefined
    notes?: /** A free text field containing notes that describe the company's business or service offering */
    string | undefined
    active?: /** A flag determining whether or not the company is currently active */
    boolean | undefined
    marketingConsent?: /** The marketing consent status of the company (deny/notAsked) */
    string | undefined
    vatRegistered?: /** A flag determining whether or not the company is VAT registered */
    boolean | undefined
    typeIds: /** A collection of unique identifiers of company types that categorise the type of business the company operates */
    Array<string>
    supplierTypeId?: /** The unique identifier of a supplier type, if the company is a supplier */
    string | undefined
    workPhone?: /** The work phone number of the company. (Required when no other company or address details are provided) */
    string | undefined
    mobilePhone?: /** The mobile phone number of the company. (Required when no other company or address details are provided) */
    string | undefined
    email?: /** The email address of the company. (Required when no other company or address details are provided) */
    string | undefined
    address?: /** Request body to set the address of a new company */
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
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateCompany()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('name')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="branch"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('branch')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="notes"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('notes')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="active"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('active')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="marketingConsent"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('marketingConsent')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="vatRegistered"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('vatRegistered')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="typeIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('typeIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="supplierTypeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('supplierTypeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="workPhone"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('workPhone')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="mobilePhone"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('mobilePhone')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('email')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="address"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('address')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="communicationPreferenceLetter"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('communicationPreferenceLetter')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="communicationPreferenceEmail"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('communicationPreferenceEmail')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="communicationPreferencePhone"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('communicationPreferencePhone')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="communicationPreferenceSms"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('communicationPreferenceSms')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateContacts = (props: CreateContactsProps) => {
  const { control, handleSubmit } = useForm<{
    title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
    string | undefined
    forename?: /** The contact's forename */ string | undefined
    surname: /** The contact's surname */ string
    dateOfBirth?: /** The contact's date of birth */ string | undefined
    active?: /** A flag determining whether or not the contact is currently active */
    boolean | undefined
    marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked) */
    string
    source?: /** Request body used to set the source of a new contact */
    | {
          id?: /** The unique identifier of the source of the contact */
          string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    homePhone?: /** The home phone number of the contact (Required when no other contact details are provided) */
    string | undefined
    workPhone?: /** The work phone number of the contact (Required when no other contact details are provided) */
    string | undefined
    mobilePhone?: /** The mobile phone number of the contact (Required when no other contact details are provided) */
    string | undefined
    email?: /** The email address of the contact (Required when no other contact details are provided) */
    string | undefined
    officeIds: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    Array<string>
    negotiatorIds: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    Array<string>
    categoryIds?: /** A collection of categories associated to the contact. */
    Array<string> | undefined
    primaryAddress?: /** Request body used to set an address against a new contact */
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
          countryId?: /** The ISO-3166 country code that the address resides in */
          string | undefined
        }
      | undefined
    secondaryAddress?: /** Request body used to set an address against a new contact */
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
          countryId?: /** The ISO-3166 country code that the address resides in */
          string | undefined
        }
      | undefined
    workAddress?: /** Request body used to set an address against a new contact */
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
          countryId?: /** The ISO-3166 country code that the address resides in */
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
    metadata?: /** App specific metadata to set against the contact */
    Record<string, Record<string, never>> | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    title?: /** The contact's title  (eg. Mr, Mrs, Miss, Dr) */
    string | undefined
    forename?: /** The contact's forename */ string | undefined
    surname: /** The contact's surname */ string
    dateOfBirth?: /** The contact's date of birth */ string | undefined
    active?: /** A flag determining whether or not the contact is currently active */
    boolean | undefined
    marketingConsent: /** The marketing consent status of the contact (grant/deny/notAsked) */
    string
    source?: /** Request body used to set the source of a new contact */
    | {
          id?: /** The unique identifier of the source of the contact */
          string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    homePhone?: /** The home phone number of the contact (Required when no other contact details are provided) */
    string | undefined
    workPhone?: /** The work phone number of the contact (Required when no other contact details are provided) */
    string | undefined
    mobilePhone?: /** The mobile phone number of the contact (Required when no other contact details are provided) */
    string | undefined
    email?: /** The email address of the contact (Required when no other contact details are provided) */
    string | undefined
    officeIds: /** A collection of unique identifiers of offices attached to the contact. The first item in the collection is considered the primary office */
    Array<string>
    negotiatorIds: /** A collection of unique identifiers of negotiators attached to the contact. The first item in the collection is considered the primary negotiator */
    Array<string>
    categoryIds?: /** A collection of categories associated to the contact. */
    Array<string> | undefined
    primaryAddress?: /** Request body used to set an address against a new contact */
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
          countryId?: /** The ISO-3166 country code that the address resides in */
          string | undefined
        }
      | undefined
    secondaryAddress?: /** Request body used to set an address against a new contact */
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
          countryId?: /** The ISO-3166 country code that the address resides in */
          string | undefined
        }
      | undefined
    workAddress?: /** Request body used to set an address against a new contact */
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
          countryId?: /** The ISO-3166 country code that the address resides in */
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
    metadata?: /** App specific metadata to set against the contact */
    Record<string, Record<string, never>> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateContact()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="title"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('title')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="forename"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('forename')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="surname"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('surname')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="dateOfBirth"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('dateOfBirth')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="active"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('active')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="marketingConsent"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('marketingConsent')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="source"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('source')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="homePhone"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('homePhone')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="workPhone"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('workPhone')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="mobilePhone"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('mobilePhone')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('email')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="officeIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('officeIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="negotiatorIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('negotiatorIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="categoryIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('categoryIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="primaryAddress"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('primaryAddress')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="secondaryAddress"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('secondaryAddress')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="workAddress"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('workAddress')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="communicationPreferenceLetter"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('communicationPreferenceLetter')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="communicationPreferenceEmail"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('communicationPreferenceEmail')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="communicationPreferencePhone"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('communicationPreferencePhone')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="communicationPreferenceSMS"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('communicationPreferenceSMS')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const UpdateContactsIdSubscriptionsSubscriptionId = (
  props: UpdateContactsIdSubscriptionsSubscriptionIdProps
) => {
  const { control, handleSubmit } = useForm<{
    status?: /** The status of the subscription (subscribed/unsubscribed) */
    string | undefined
  }>({
    resolver: zodResolver(
      z.object({
        /** The status of the subscription (subscribed/unsubscribed) */
        status: z.string().optional()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    status?: /** The status of the subscription (subscribed/unsubscribed) */
    string | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useUpdateContactSubscription()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="status"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('status')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateConveyancingIdDownward = (
  props: CreateConveyancingIdDownwardProps
) => {
  const { control, handleSubmit } = useForm<{
    offerId?: /** The unique identifier of the offer below this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
    string | undefined
    propertyAddress?: /** The address of the property below this one in the chain. (Required when 'offerId' is not provided) */
    string | undefined
    agent?: /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
    string | undefined
    buyer?: /** The name of the buyer purchasing the property. (Required when 'offerId' is not provided) */
    string | undefined
    buyerSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the buyer has instructed. (Required when 'offerId' is not provided) */
    string | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    offerId?: /** The unique identifier of the offer below this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
    string | undefined
    propertyAddress?: /** The address of the property below this one in the chain. (Required when 'offerId' is not provided) */
    string | undefined
    agent?: /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
    string | undefined
    buyer?: /** The name of the buyer purchasing the property. (Required when 'offerId' is not provided) */
    string | undefined
    buyerSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the buyer has instructed. (Required when 'offerId' is not provided) */
    string | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateDownwardChain()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="offerId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('offerId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="propertyAddress"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyAddress')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="agent"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('agent')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="buyer"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('buyer')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="buyerSolicitorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('buyerSolicitorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateConveyancingIdUpward = (
  props: CreateConveyancingIdUpwardProps
) => {
  const { control, handleSubmit } = useForm<{
    offerId?: /** The unique identifier of the offer above this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
    string | undefined
    propertyAddress?: /** The address of the property above this one in the chain. (Required when 'offerId' is not provided) */
    string | undefined
    agent?: /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
    string | undefined
    vendor?: /** The name of the vendor selling the property. (Required when 'offerId' is not provided) */
    string | undefined
    vendorSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed. (Required when 'offerId' is not provided) */
    string | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    offerId?: /** The unique identifier of the offer above this one in the chain. Should be left empty if the upward property is external (instructed by another agent) */
    string | undefined
    propertyAddress?: /** The address of the property above this one in the chain. (Required when 'offerId' is not provided) */
    string | undefined
    agent?: /** The name of the agent managing the sale of the property. (Required when 'offerId' is not provided) */
    string | undefined
    vendor?: /** The name of the vendor selling the property. (Required when 'offerId' is not provided) */
    string | undefined
    vendorSolicitorId?: /** The unique identifier of the solicitor / conveyancer that the vendor has instructed. (Required when 'offerId' is not provided) */
    string | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateUpwardChain()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="offerId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('offerId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="propertyAddress"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyAddress')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="agent"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('agent')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="vendor"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('vendor')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="vendorSolicitorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('vendorSolicitorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateDocuments = (props: CreateDocumentsProps) => {
  const { control, handleSubmit } = useForm<{
    associatedType: /** The type of entity that the document is associated with (appliance/applicant/bankStatement/batch/certificate/contact/depositCertificate/estate/estateUnit/idCheck/keySet/landlord/nominalTransaction/property/supplierInvoice/tenancy/tenancyCheck/tenancyRenewal/worksOrder/renewalNegotiation) */
    string
    associatedId: /** The unique identifier of the entity that the document is associated with */
    string
    typeId: /** The unique identifier of the type of document */ string
    name: /** The filename of the document */ string
    isPrivate?: /** A flag denoting whether or not the document is private */
    boolean | undefined
    fileData?: /** The base64 encoded document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
This supports upto 6MB */
    string | undefined
    fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
    string | undefined
    metadata?: /** App specific metadata to set against the document */
    Record<string, Record<string, never>> | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    associatedType: /** The type of entity that the document is associated with (appliance/applicant/bankStatement/batch/certificate/contact/depositCertificate/estate/estateUnit/idCheck/keySet/landlord/nominalTransaction/property/supplierInvoice/tenancy/tenancyCheck/tenancyRenewal/worksOrder/renewalNegotiation) */
    string
    associatedId: /** The unique identifier of the entity that the document is associated with */
    string
    typeId: /** The unique identifier of the type of document */ string
    name: /** The filename of the document */ string
    isPrivate?: /** A flag denoting whether or not the document is private */
    boolean | undefined
    fileData?: /** The base64 encoded document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl)
This supports upto 6MB */
    string | undefined
    fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
    string | undefined
    metadata?: /** App specific metadata to set against the document */
    Record<string, Record<string, never>> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateDocument()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="associatedType"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('associatedType')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="associatedId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('associatedId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="typeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('typeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('name')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="isPrivate"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('isPrivate')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="fileData"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('fileData')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="fileUrl"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('fileUrl')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateDocumentsSignedUrl = (
  props: CreateDocumentsSignedUrlProps
) => {
  const { control, handleSubmit } = useForm<{
    amount: /** The number of pre signed urls to create */ number
  }>({
    resolver: zodResolver(
      z.object({
        /** The number of pre signed urls to create */ amount: z.number().int()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    amount: /** The number of pre signed urls to create */ number
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateSignedUrl()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="amount"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('amount')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateEnquiries = (props: CreateEnquiriesProps) => {
  const { control, handleSubmit } = useForm<{
    title: /** The title of the individual making the enquiry */ string
    forename: /** The forename of the individual making the enquiry */ string
    surname: /** The surname of the individual making the enquiry */ string
    position?: /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
    string | undefined
    enquiryType: /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
    string
    message: /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
    string
    officeId: /** The unique identifier of the related office */ string
    marketingConsent: /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
    string
    sourceName: /** The name of the source that the enquiry was generated from */
    string
    homePhone?: /** The home phone number of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    workPhone?: /** The work phone number of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    mobilePhone?: /** The mobile phone number of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    email?: /** The email of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    address?: /** Request body used to create a enquiries address */
    | {
          buildingName?: /** Sets the building name */ string | undefined
          buildingNumber?: /** Sets the building number */ string | undefined
          line1?: /** Sets the first line of the address */ string | undefined
          line2?: /** Sets the second line of the address */ string | undefined
          line3?: /** Sets the third line of the address */ string | undefined
          line4?: /** Sets the fourth line of the address */ string | undefined
          postcode?: /** Sets the postcode */ string | undefined
          countryId?: /** Sets the ISO-3166 country code that the address resides within */
          string | undefined
        }
      | undefined
    buying?: /** The details specific to a buying enquiry */
    | {
          priceFrom?: /** The lower bound of the prospective buyer's budget */
          number | undefined
          priceTo?: /** The upper bound of the prospective buyer's budget */
          number | undefined
        }
      | undefined
    renting?: /** The details specific to renting enquiry. When type is renting. */
    | {
          rentFrom?: /** The lower bound of the prospective tenant's budget */
          number | undefined
          rentTo?: /** The upper bound of the prospective tenant's budget */
          number | undefined
          rentFrequency?: /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
          string | undefined
        }
      | undefined
    bedrooms?: /** The number of bedrooms the prospective buyer or tenant requires */
    number | undefined
    propertyIds?: /** A list of unique property identifiers that the enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
    Array<string> | undefined
  }>({
    resolver: zodResolver(
      z.object({
        /** The title of the individual making the enquiry */ title: z.string(),
        /** The forename of the individual making the enquiry */
        forename: z.string(),
        /** The surname of the individual making the enquiry */
        surname: z.string(),
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
            /** Sets the building number */
            buildingNumber: z.string().optional(),
            /** Sets the first line of the address */
            line1: z.string().optional(),
            /** Sets the second line of the address */
            line2: z.string().optional(),
            /** Sets the third line of the address */
            line3: z.string().optional(),
            /** Sets the fourth line of the address */
            line4: z.string().optional(),
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    title: /** The title of the individual making the enquiry */ string
    forename: /** The forename of the individual making the enquiry */ string
    surname: /** The surname of the individual making the enquiry */ string
    position?: /** The selling position of the individual making the enquiry (renting/instructedThisAgent/instructedOtherAgent/privateSale/notOnMarket) */
    string | undefined
    enquiryType: /** The type of enquiry. Enquiries can created for applicants interested in buying/renting, as well as prospective vendors and landlords (salesApplicant/lettingsApplicant/salesProperty/lettingsProperty) */
    string
    message: /** Textual information about the nature of the enquiry - usually the message text from the individual making the enquiry */
    string
    officeId: /** The unique identifier of the related office */ string
    marketingConsent: /** The marketing consent status of the individual making the enquiry (grant/deny/notAsked) */
    string
    sourceName: /** The name of the source that the enquiry was generated from */
    string
    homePhone?: /** The home phone number of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    workPhone?: /** The work phone number of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    mobilePhone?: /** The mobile phone number of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    email?: /** The email of the individual making the enquiry (Required when no other contact details are given) */
    string | undefined
    address?: /** Request body used to create a enquiries address */
    | {
          buildingName?: /** Sets the building name */ string | undefined
          buildingNumber?: /** Sets the building number */ string | undefined
          line1?: /** Sets the first line of the address */ string | undefined
          line2?: /** Sets the second line of the address */ string | undefined
          line3?: /** Sets the third line of the address */ string | undefined
          line4?: /** Sets the fourth line of the address */ string | undefined
          postcode?: /** Sets the postcode */ string | undefined
          countryId?: /** Sets the ISO-3166 country code that the address resides within */
          string | undefined
        }
      | undefined
    buying?: /** The details specific to a buying enquiry */
    | {
          priceFrom?: /** The lower bound of the prospective buyer's budget */
          number | undefined
          priceTo?: /** The upper bound of the prospective buyer's budget */
          number | undefined
        }
      | undefined
    renting?: /** The details specific to renting enquiry. When type is renting. */
    | {
          rentFrom?: /** The lower bound of the prospective tenant's budget */
          number | undefined
          rentTo?: /** The upper bound of the prospective tenant's budget */
          number | undefined
          rentFrequency?: /** The desired rent collection frequency specified by the prospective tenant (weekly/monthly/annually). */
          string | undefined
        }
      | undefined
    bedrooms?: /** The number of bedrooms the prospective buyer or tenant requires */
    number | undefined
    propertyIds?: /** A list of unique property identifiers that the enquiry relates to. Used to indicate the properties that a sales or lettings applicant has expressed an interest in */
    Array<string> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateEnquiry()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="title"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('title')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="forename"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('forename')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="surname"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('surname')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="position"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('position')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="enquiryType"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('enquiryType')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="message"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('message')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="officeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('officeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="marketingConsent"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('marketingConsent')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="sourceName"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('sourceName')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="homePhone"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('homePhone')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="workPhone"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('workPhone')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="mobilePhone"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('mobilePhone')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('email')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="address"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('address')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="buying"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('buying')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="renting"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('renting')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="bedrooms"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('bedrooms')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="propertyIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateIdentityChecks = (props: CreateIdentityChecksProps) => {
  const { control, handleSubmit } = useForm<{
    contactId: /** The unique identifier of the contact associated to the identity check */
    string
    checkDate: /** The date when the identity check was performed. This may differ to the date when the check was created */
    string
    status: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
    string
    negotiatorId: /** The unique identifier of the negotiator that initiated the identity check */
    string
    identityDocument1?: /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
    | {
          typeId: /** The unique identifier of the type of identity document provided */
          string
          expiry?: /** The date when the document expires and becomes invalid */
          string | undefined
          details?: /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
          string | undefined
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined
          name?: /** The filename to store the document as (Required when 'details' are not given) */
          string | undefined
        }
      | undefined
    identityDocument2?: /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
    | {
          typeId: /** The unique identifier of the type of identity document provided */
          string
          expiry?: /** The date when the document expires and becomes invalid */
          string | undefined
          details?: /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
          string | undefined
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined
          name?: /** The filename to store the document as (Required when 'details' are not given) */
          string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the identity check */
    Record<string, Record<string, never>> | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    contactId: /** The unique identifier of the contact associated to the identity check */
    string
    checkDate: /** The date when the identity check was performed. This may differ to the date when the check was created */
    string
    status: /** The current status of the identity check (pass/fail/pending/cancelled/warnings/unchecked) */
    string
    negotiatorId: /** The unique identifier of the negotiator that initiated the identity check */
    string
    identityDocument1?: /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
    | {
          typeId: /** The unique identifier of the type of identity document provided */
          string
          expiry?: /** The date when the document expires and becomes invalid */
          string | undefined
          details?: /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
          string | undefined
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined
          name?: /** The filename to store the document as (Required when 'details' are not given) */
          string | undefined
        }
      | undefined
    identityDocument2?: /** Request body to attach an identity document to a new contact identity check
A second identity document is not required and can be ignored by being set to null */
    | {
          typeId: /** The unique identifier of the type of identity document provided */
          string
          expiry?: /** The date when the document expires and becomes invalid */
          string | undefined
          details?: /** Details regarding the identity document (eg. passport number) (Required when 'fileData' is not given) */
          string | undefined
          fileData?: /** The base64 encoded identity document content, prefixed with the content type (eg. data:text/plain;base64,VGVzdCBmaWxl) (Required when 'details' are not given)
The total request payload cannot exceed 6Mb, regardless of the number of documents being sent */
          string | undefined
          fileUrl?: /** The presigned s3 url which a document has been uploaded to (This supports files up to 30MB) */
          string | undefined
          name?: /** The filename to store the document as (Required when 'details' are not given) */
          string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the identity check */
    Record<string, Record<string, never>> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateIdentityCheck()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="contactId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('contactId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="checkDate"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('checkDate')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="status"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('status')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="negotiatorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('negotiatorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="identityDocument1"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('identityDocument1')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="identityDocument2"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('identityDocument2')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateIdentityChecksSignedUrl = (
  props: CreateIdentityChecksSignedUrlProps
) => {
  const { control, handleSubmit } = useForm<{
    amount: /** The number of pre signed urls to create */ number
  }>({
    resolver: zodResolver(
      z.object({
        /** The number of pre signed urls to create */ amount: z.number().int()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    amount: /** The number of pre signed urls to create */ number
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateIdentityCheckSignedUrl()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="amount"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('amount')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateJournalEntries = (props: CreateJournalEntriesProps) => {
  const { control, handleSubmit } = useForm<{
    typeId?: /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
    string | undefined
    propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
    string | undefined
    associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
    string | undefined
    associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
    string | undefined
    description: /** The textual description of the journal entry event */
    string
    negotiatorId?: /** The identifier of the negotiator recording the journal entry */
    string | undefined
  }>({
    resolver: zodResolver(
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
  })

  const { label, format } = createRuntimeConfig<{
    typeId?: /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
    string | undefined
    propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
    string | undefined
    associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
    string | undefined
    associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
    string | undefined
    description: /** The textual description of the journal entry event */
    string
    negotiatorId?: /** The identifier of the negotiator recording the journal entry */
    string | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateJournalEntry()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="typeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('typeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="propertyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="associatedType"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('associatedType')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="associatedId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('associatedId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('description')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="negotiatorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('negotiatorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateJournalEntriesBulk = (
  props: CreateJournalEntriesBulkProps
) => {
  const { control, handleSubmit } = useForm<{
    createJournalEntry?: /** Collection of journal entries */
    | Array</** Request body to create a journal entry */
        {
          typeId?: /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
          string | undefined
          propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
          string | undefined
          associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
          string | undefined
          associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
          string | undefined
          description: /** The textual description of the journal entry event */
          string
          negotiatorId?: /** The identifier of the negotiator recording the journal entry */
          string | undefined
        }>
      | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    createJournalEntry?: /** Collection of journal entries */
    | Array</** Request body to create a journal entry */
        {
          typeId?: /** The unique identifier of the type the journal entry is related to.
Default value set to MI */
          string | undefined
          propertyId?: /** The unique identifier of the property the journal entry is related to. Can additionally be associated to another type (Required when 'associatedId' is not given) */
          string | undefined
          associatedType?: /** The entity type the journal entry has been raised against (applicant/contact/company/landlord/tenancy/worksOrder) (Required when 'associatedId' is given)
TypeId must be set to WO when passing worksOrder */
          string | undefined
          associatedId?: /** The unique identifier of the entity the journal entry has been raised against. Can additionally be associated to a property (Required when 'propertyId' is not given) */
          string | undefined
          description: /** The textual description of the journal entry event */
          string
          negotiatorId?: /** The identifier of the negotiator recording the journal entry */
          string | undefined
        }>
      | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateBulkJournalEntry()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="createJournalEntry"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('createJournalEntry')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateLandlords = (props: CreateLandlordsProps) => {
  const { control, handleSubmit } = useForm<{
    active?: /** A flag determining whether or not the landlord is currently active */
    boolean | undefined
    solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */
    string | undefined
    officeId: /** The unique identifier of the office that is associated to the landlord */
    string
    source?: /** Request body used to set the source of a new landlord */
    | {
          id?: /** The unique identifier of the source of the landlord */
          string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    related: /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
    Array</** Request body used to create a new relationship between a landlord and a contact or company */
    {
      associatedId?: /** The unique identifier of the contact or company to create a relationship with */
      string | undefined
      associatedType?: /** The type of relationship to create (contact/company) */
      string | undefined
    }>
    metadata?: /** App specific metadata that to set against the landlord */
    Record<string, Record<string, never>> | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    active?: /** A flag determining whether or not the landlord is currently active */
    boolean | undefined
    solicitorId?: /** The unique identifier of the company acting as the landlord's solicitor */
    string | undefined
    officeId: /** The unique identifier of the office that is associated to the landlord */
    string
    source?: /** Request body used to set the source of a new landlord */
    | {
          id?: /** The unique identifier of the source of the landlord */
          string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    related: /** A collection of contacts and/or companies associated to the landlord. The first item in the collection is considered the primary relationship */
    Array</** Request body used to create a new relationship between a landlord and a contact or company */
    {
      associatedId?: /** The unique identifier of the contact or company to create a relationship with */
      string | undefined
      associatedType?: /** The type of relationship to create (contact/company) */
      string | undefined
    }>
    metadata?: /** App specific metadata that to set against the landlord */
    Record<string, Record<string, never>> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateLandlord()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="active"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('active')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="solicitorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('solicitorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="officeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('officeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="source"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('source')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="related"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('related')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateLandlordsIdRelationships = (
  props: CreateLandlordsIdRelationshipsProps
) => {
  const { control, handleSubmit } = useForm<{
    associatedId: /** The unique identifier of the contact or company to create a relationship with */
    string
    associatedType: /** The type of relationship to create (contact/company) */
    string
    isMain: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
    boolean
  }>({
    resolver: zodResolver(
      z.object({
        /** The unique identifier of the contact or company to create a relationship with */
        associatedId: z.string(),
        /** The type of relationship to create (contact/company) */
        associatedType: z.string(),
        /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
        isMain: z.boolean()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    associatedId: /** The unique identifier of the contact or company to create a relationship with */
    string
    associatedType: /** The type of relationship to create (contact/company) */
    string
    isMain: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
    boolean
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateLandlordRelationship()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="associatedId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('associatedId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="associatedType"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('associatedType')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="isMain"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('isMain')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateMetadata = (props: CreateMetadataProps) => {
  const { control, handleSubmit } = useForm<{
    entityType: /** The type of the entity that this metadata is related to. This can represent a Foundations inbuilt type (an entity presented in our APIs) or it can be a custom entity type (a dynamic standalone metadata entity that you create).
            
Inbuilt types: applicant, appointment, company, contact, conveyancing, identityCheck, landlord, negotiator, offer, office, property, task, vendor, worksOrder */
    string
    entityId?: /** The unique identifier of the entity that this metadata is related to.
For custom entities, this can be left blank and an id will be generated for you. */
    string | undefined
    metadata: /** The JSON document to store */ string
  }>({
    resolver: zodResolver(
      z.object({
        /** The type of the entity that this metadata is related to. This can represent a Foundations inbuilt type (an entity presented in our APIs) or it can be a custom entity type (a dynamic standalone metadata entity that you create).
            
Inbuilt types: applicant, appointment, company, contact, conveyancing, identityCheck, landlord, negotiator, offer, office, property, task, vendor, worksOrder */
        entityType: z.string(),
        /** The unique identifier of the entity that this metadata is related to.
For custom entities, this can be left blank and an id will be generated for you. */
        entityId: z.string().optional(),
        /** The JSON document to store */ metadata: z.string()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    entityType: /** The type of the entity that this metadata is related to. This can represent a Foundations inbuilt type (an entity presented in our APIs) or it can be a custom entity type (a dynamic standalone metadata entity that you create).
            
Inbuilt types: applicant, appointment, company, contact, conveyancing, identityCheck, landlord, negotiator, offer, office, property, task, vendor, worksOrder */
    string
    entityId?: /** The unique identifier of the entity that this metadata is related to.
For custom entities, this can be left blank and an id will be generated for you. */
    string | undefined
    metadata: /** The JSON document to store */ string
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateMetadata()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="entityType"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('entityType')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="entityId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('entityId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const UpdateMetadataId = (props: UpdateMetadataIdProps) => {
  const { control, handleSubmit } = useForm<{
    metadata: /** The updated JSON document to store */ string
  }>({
    resolver: zodResolver(
      z.object({
        /** The updated JSON document to store */ metadata: z.string()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    metadata: /** The updated JSON document to store */ string
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useUpdateMetadata()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const UpdateMetadataMetadataSchemaId = (
  props: UpdateMetadataMetadataSchemaIdProps
) => {
  const { control, handleSubmit } = useForm<{
    schema: /** The updated JSON schema to store */ string
  }>({
    resolver: zodResolver(
      z.object({ /** The updated JSON schema to store */ schema: z.string() })
    )
  })

  const { label, format } = createRuntimeConfig<{
    schema: /** The updated JSON schema to store */ string
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useUpdateMetadataSchema()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="schema"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('schema')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateMetadataMetadataSchema = (
  props: CreateMetadataMetadataSchemaProps
) => {
  const { control, handleSubmit } = useForm<{
    entityType: /** The name of the entity type that this schema is related to */
    string
    schema: /** The JSON schema used to validate entities of this type */ string
  }>({
    resolver: zodResolver(
      z.object({
        /** The name of the entity type that this schema is related to */
        entityType: z.string(),
        /** The JSON schema used to validate entities of this type */
        schema: z.string()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    entityType: /** The name of the entity type that this schema is related to */
    string
    schema: /** The JSON schema used to validate entities of this type */ string
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateMetadataSchema()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="entityType"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('entityType')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="schema"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('schema')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateNegotiators = (props: CreateNegotiatorsProps) => {
  const { control, handleSubmit } = useForm<{
    name: /** The name of the negotiator */ string
    jobTitle?: /** The job title of the negotiator */ string | undefined
    active?: /** A flag determining whether or not the negotiator is active */
    boolean | undefined
    officeId: /** The unique identifier of the office that the negotiator is attached to */
    string
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
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    name: /** The name of the negotiator */ string
    jobTitle?: /** The job title of the negotiator */ string | undefined
    active?: /** A flag determining whether or not the negotiator is active */
    boolean | undefined
    officeId: /** The unique identifier of the office that the negotiator is attached to */
    string
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
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateNegotiator()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('name')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="jobTitle"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('jobTitle')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="active"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('active')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="officeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('officeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="workPhone"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('workPhone')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="mobilePhone"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('mobilePhone')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('email')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="diaryNegotiatorIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('diaryNegotiatorIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="diaryOfficeIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('diaryOfficeIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateNotifications = (props: CreateNotificationsProps) => {
  const { control, handleSubmit } = useForm<{
    type?: /** The notification type (telephony) */ string | undefined
    subType?: /** The sub category type (answeredCall/endedCall/incomingCall/missedCall) */
    string | undefined
    products?: /** The products the notification is associated to, and will be delivered to */
    Array<string> | undefined
    targets?: /** Payload for defining notification targets */
    | {
          negotiatorId?: /** The identifier of the negotiators whom should receive the notification */
          Array<string> | undefined
        }
      | undefined
    payload?: /** The payload to deliver to the specified target(s). Note that the payload must match the expected format
based on the type/subType combination and will be validated accordingly. Please refer to [the documentation](https://foundations-documentation.reapit.cloud/api/notifications)
for more information */
    Record<string, never> | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    type?: /** The notification type (telephony) */ string | undefined
    subType?: /** The sub category type (answeredCall/endedCall/incomingCall/missedCall) */
    string | undefined
    products?: /** The products the notification is associated to, and will be delivered to */
    Array<string> | undefined
    targets?: /** Payload for defining notification targets */
    | {
          negotiatorId?: /** The identifier of the negotiators whom should receive the notification */
          Array<string> | undefined
        }
      | undefined
    payload?: /** The payload to deliver to the specified target(s). Note that the payload must match the expected format
based on the type/subType combination and will be validated accordingly. Please refer to [the documentation](https://foundations-documentation.reapit.cloud/api/notifications)
for more information */
    Record<string, never> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateNotification()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="type"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('type')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="subType"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('subType')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="products"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('products')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="targets"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('targets')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="payload"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('payload')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateOffers = (props: CreateOffersProps) => {
  const { control, handleSubmit } = useForm<{
    applicantId: /** The unique identifier of the applicant associated to the offer */
    string
    propertyId: /** The unique identifier of the property associated to the offer */
    string
    negotiatorId?: /** The unique identifier of the negotiator associated to the offer */
    string | undefined
    date: /** The date when the offer was made */ string
    amount: /** The monetary amount of the offer */ number
    status: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
    string
    inclusions?: /** A free text field describing items that should be included in the sale */
    string | undefined
    exclusions?: /** A free text field describing items that are explicitly excluded from the sale */
    string | undefined
    conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
    string | undefined
    metadata?: /** App specific metadata to set against the offer */
    Record<string, Record<string, never>> | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    applicantId: /** The unique identifier of the applicant associated to the offer */
    string
    propertyId: /** The unique identifier of the property associated to the offer */
    string
    negotiatorId?: /** The unique identifier of the negotiator associated to the offer */
    string | undefined
    date: /** The date when the offer was made */ string
    amount: /** The monetary amount of the offer */ number
    status: /** The current status of the offer (pending/withdrawn/rejected/accepted/noteOfInterest) */
    string
    inclusions?: /** A free text field describing items that should be included in the sale */
    string | undefined
    exclusions?: /** A free text field describing items that are explicitly excluded from the sale */
    string | undefined
    conditions?: /** A free text field describing any other conditions set by either party that relate to the sale */
    string | undefined
    metadata?: /** App specific metadata to set against the offer */
    Record<string, Record<string, never>> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateOffer()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="applicantId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('applicantId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="propertyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="negotiatorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('negotiatorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="date"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('date')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="amount"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('amount')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="status"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('status')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="inclusions"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('inclusions')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="exclusions"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('exclusions')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="conditions"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('conditions')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateOffices = (props: CreateOfficesProps) => {
  const { control, handleSubmit } = useForm<{
    name: /** The name of the office */ string
    active?: /** A flag denoting whether or not this office is active */
    boolean | undefined
    manager?: /** The name of the office manager */ string | undefined
    address: /** Request body used to set the address of a new office */
    {
      buildingName?: /** The building name */ string | undefined
      buildingNumber?: /** The building number */ string | undefined
      line1: /** The first line of the address */ string
      line2?: /** The second line of the address */ string | undefined
      line3?: /** The third line of the address */ string | undefined
      line4?: /** The fourth line of the address */ string | undefined
      postcode?: /** The postcode */ string | undefined
      countryId?: /** The ISO-3166 country code that the address resides within */
      string | undefined
      geolocation?: /** Request body used to set the geolocation coordinates of a new address */
      | {
            latitude?: /** The latitude coordinate of the coordinate pair */
            number | undefined
            longitude?: /** The longitude coordinate of the coordinate pair */
            number | undefined
          }
        | undefined
    }
    workPhone?: /** The work phone number of the office */ string | undefined
    email?: /** The email address of the office */ string | undefined
    metadata?: /** App specific metadata to set against the office */
    Record<string, Record<string, never>> | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
        /** The work phone number of the office */
        workPhone: z.string().optional(),
        /** The email address of the office */ email: z.string().optional(),
        /** App specific metadata to set against the office */
        metadata: z.record(z.string(), z.object({})).optional()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    name: /** The name of the office */ string
    active?: /** A flag denoting whether or not this office is active */
    boolean | undefined
    manager?: /** The name of the office manager */ string | undefined
    address: /** Request body used to set the address of a new office */
    {
      buildingName?: /** The building name */ string | undefined
      buildingNumber?: /** The building number */ string | undefined
      line1: /** The first line of the address */ string
      line2?: /** The second line of the address */ string | undefined
      line3?: /** The third line of the address */ string | undefined
      line4?: /** The fourth line of the address */ string | undefined
      postcode?: /** The postcode */ string | undefined
      countryId?: /** The ISO-3166 country code that the address resides within */
      string | undefined
      geolocation?: /** Request body used to set the geolocation coordinates of a new address */
      | {
            latitude?: /** The latitude coordinate of the coordinate pair */
            number | undefined
            longitude?: /** The longitude coordinate of the coordinate pair */
            number | undefined
          }
        | undefined
    }
    workPhone?: /** The work phone number of the office */ string | undefined
    email?: /** The email address of the office */ string | undefined
    metadata?: /** App specific metadata to set against the office */
    Record<string, Record<string, never>> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateOffice()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('name')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="active"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('active')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="manager"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('manager')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="address"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('address')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="workPhone"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('workPhone')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('email')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateProperties = (props: CreatePropertiesProps) => {
  const { control, handleSubmit } = useForm<{
    lastCall?: /** The date the owner of the property was last called */
    string | undefined
    nextCall?: /** The date the owner of the property is next due to be called */
    string | undefined
    marketingMode: /** The marketing mode of the property (selling/letting/sellingAndLetting) */
    string
    departmentId: /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    string
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
    address: /** Request body used to set the address of a new property */
    {
      buildingName?: /** The building name */ string | undefined
      buildingNumber?: /** The building number */ string | undefined
      line1: /** The first line of the address */ string
      line2?: /** The second line of the address */ string | undefined
      line3?: /** The third line of the address */ string | undefined
      line4?: /** The fourth line of the address */ string | undefined
      postcode?: /** The postcode */ string | undefined
      countryId?: /** The ISO-3166 country code that the address resides within */
      string | undefined
      geolocation?: /** Request body used to set the geolocation coordinates of a new property's address */
      | {
            latitude: /** The latitude coordinate of the coordinate pair */
            number
            longitude: /** The longitude coordinate of the coordinate pair */
            number
          }
        | undefined
    }
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
    epc?: /** Request body used to set the EPC statistic of a new property */
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
    externalArea?: /** Request body to set the external land area of a new property */
    | {
          type?: /** The unit of area (acres/hectares) */ string | undefined
          min?: /** The minimum area bound */ number | undefined
          max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
          number | undefined
        }
      | undefined
    internalArea?: /** Request body to set the internal dimensions of a new property */
    | {
          type?: /** The unit of area (squareFeet/squareMetres) */
          string | undefined
          min?: /** The minimum area bound */ number | undefined
          max?: /** The maximum area bound */ number | undefined
        }
      | undefined
    rural?: /** Request body used to set details specific to rural properties */
    | {
          buildingsDescription?: /** Details of the buildings associated with the property. */
          string | undefined
          landDescription?: /** Details of the land associated with the property. */
          string | undefined
        }
      | undefined
    selling?: /** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
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
          tenure?: /** Request body used to set the tenure of a new property */
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
          fee?: /** Request body used to set the commission fee for a property */
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
    letting?: /** Request body used to set details specific to lettings marketing on a new property */
    | {
          instructed?: /** The date the property was marked as to let */
          string | undefined
          availableFrom?: /** The date the property is available from */
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
          agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
          string | undefined
          term?: /** The acceptable letting terms (short/long/any) */
          string | undefined
          status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
          string | undefined
          landlordId?: /** The unique identifier of the landlord letting the property */
          string | undefined
          worksOrderNote?: /** A note to accompany any works orders created for the property */
          string | undefined
          minimumTerm?: /** Sets the minimum number of months the property can be let out for */
          number | undefined
          managementFee?: /** Request body used to set the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */
                string | undefined
                amount?: /** The commission letting fee amount */
                number | undefined
              }
            | undefined
          lettingFee?: /** Request body used to set the commission fee for a property */
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
                amount?: /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
                number | undefined
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
    rooms?: /** Details of each room in the property */
    | Array</** Request body to create a room in the Rooms collection of a new property */
        {
          name?: /** The name of the room */ string | undefined
          dimensions?: /** Details about the dimensions of the room */
          string | undefined
          description?: /** Short description of the room */ string | undefined
        }>
      | undefined
    roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
    boolean | undefined
    negotiatorId: /** The unique identifier of the negotiator managing the property */
    string
    officeIds: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
    Array<string>
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
    metadata?: /** App specific metadata to set against the property */
    Record<string, Record<string, never>> | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
            /** The unit of area (acres/hectares) */
            type: z.string().optional(),
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
                /** The commission letting fee amount */
                amount: z.number().optional()
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
                /** The commission letting fee amount */
                amount: z.number().optional()
              })
              .optional(),
            /** Request body used to set the commission fee for a property */
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
              /** Short description of the room */
              description: z.string().optional()
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    lastCall?: /** The date the owner of the property was last called */
    string | undefined
    nextCall?: /** The date the owner of the property is next due to be called */
    string | undefined
    marketingMode: /** The marketing mode of the property (selling/letting/sellingAndLetting) */
    string
    departmentId: /** The unique identifier of the department the property is associated with. The property will only match to applicants with the same values set. See the [Platform Glossary](https://foundations-documentation.reapit.cloud/platform-glossary#department) for more information about departments */
    string
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
    address: /** Request body used to set the address of a new property */
    {
      buildingName?: /** The building name */ string | undefined
      buildingNumber?: /** The building number */ string | undefined
      line1: /** The first line of the address */ string
      line2?: /** The second line of the address */ string | undefined
      line3?: /** The third line of the address */ string | undefined
      line4?: /** The fourth line of the address */ string | undefined
      postcode?: /** The postcode */ string | undefined
      countryId?: /** The ISO-3166 country code that the address resides within */
      string | undefined
      geolocation?: /** Request body used to set the geolocation coordinates of a new property's address */
      | {
            latitude: /** The latitude coordinate of the coordinate pair */
            number
            longitude: /** The longitude coordinate of the coordinate pair */
            number
          }
        | undefined
    }
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
    epc?: /** Request body used to set the EPC statistic of a new property */
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
    externalArea?: /** Request body to set the external land area of a new property */
    | {
          type?: /** The unit of area (acres/hectares) */ string | undefined
          min?: /** The minimum area bound */ number | undefined
          max?: /** The maximum area bound (please note there is no corresponding field in the Reapit CRM) */
          number | undefined
        }
      | undefined
    internalArea?: /** Request body to set the internal dimensions of a new property */
    | {
          type?: /** The unit of area (squareFeet/squareMetres) */
          string | undefined
          min?: /** The minimum area bound */ number | undefined
          max?: /** The maximum area bound */ number | undefined
        }
      | undefined
    rural?: /** Request body used to set details specific to rural properties */
    | {
          buildingsDescription?: /** Details of the buildings associated with the property. */
          string | undefined
          landDescription?: /** Details of the land associated with the property. */
          string | undefined
        }
      | undefined
    selling?: /** Request body used to set details specific to sales marketing on a new property. When creating a new sales property, a vendor record is automatically created. Please refer to the [Platform Glossary](http://foundations.link/glossary#vendor) for full details */
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
          tenure?: /** Request body used to set the tenure of a new property */
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
          fee?: /** Request body used to set the commission fee for a property */
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
    letting?: /** Request body used to set details specific to lettings marketing on a new property */
    | {
          instructed?: /** The date the property was marked as to let */
          string | undefined
          availableFrom?: /** The date the property is available from */
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
          agentRole?: /** The role that the agent will be performing for this lettings property (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
          string | undefined
          term?: /** The acceptable letting terms (short/long/any) */
          string | undefined
          status?: /** The current status of the let (valuation/toLet/toLetUnavailable/underOffer/underOfferUnavailable/arrangingTenancyUnavailable/arrangingTenancy/tenancyCurrentUnavailable/tenancyCurrent/tenancyFinished/tenancyCancelled/sold/letByOtherAgent/letPrivately/provisional/withdrawn) */
          string | undefined
          landlordId?: /** The unique identifier of the landlord letting the property */
          string | undefined
          worksOrderNote?: /** A note to accompany any works orders created for the property */
          string | undefined
          minimumTerm?: /** Sets the minimum number of months the property can be let out for */
          number | undefined
          managementFee?: /** Request body used to set the commission fee for a property */
          | {
                type?: /** The commission letting fee type (percentage/fixed) */
                string | undefined
                amount?: /** The commission letting fee amount */
                number | undefined
              }
            | undefined
          lettingFee?: /** Request body used to set the commission fee for a property */
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
                amount?: /** The deposit amount. This can be the number of weeks or months rent or a monetary amount based on the `type` */
                number | undefined
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
    rooms?: /** Details of each room in the property */
    | Array</** Request body to create a room in the Rooms collection of a new property */
        {
          name?: /** The name of the room */ string | undefined
          dimensions?: /** Details about the dimensions of the room */
          string | undefined
          description?: /** Short description of the room */ string | undefined
        }>
      | undefined
    roomDetailsApproved?: /** A flag determining whether or not the property's room details have been approved by the vendor or landlord */
    boolean | undefined
    negotiatorId: /** The unique identifier of the negotiator managing the property */
    string
    officeIds: /** A collection of unique identifiers of offices attached to the property. The first item in the collection is considered the primary office */
    Array<string>
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
    metadata?: /** App specific metadata to set against the property */
    Record<string, Record<string, never>> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateProperty()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="lastCall"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('lastCall')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="nextCall"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('nextCall')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="marketingMode"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('marketingMode')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="departmentId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('departmentId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="strapline"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('strapline')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('description')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="summary"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('summary')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="alternateId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('alternateId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="specialFeatures"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('specialFeatures')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="address"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('address')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="bedrooms"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('bedrooms')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="bedroomsMax"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('bedroomsMax')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="numberOfUnits"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('numberOfUnits')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="receptions"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('receptions')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="receptionsMax"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('receptionsMax')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="bathrooms"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('bathrooms')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="bathroomsMax"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('bathroomsMax')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="parkingSpaces"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('parkingSpaces')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="councilTax"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('councilTax')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="internetAdvertising"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('internetAdvertising')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="viewingArrangements"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('viewingArrangements')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="videoUrl"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('videoUrl')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="videoCaption"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('videoCaption')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="video2Url"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('video2Url')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="video2Caption"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('video2Caption')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="notes"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('notes')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="longDescription"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('longDescription')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="floorLevel"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('floorLevel')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="internalFloors"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('internalFloors')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="totalFloors"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('totalFloors')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="boardStatus"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('boardStatus')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="boardNotes"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('boardNotes')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="boardUpdated"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('boardUpdated')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="valuation"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('valuation')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="epc"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('epc')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="externalArea"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('externalArea')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="internalArea"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('internalArea')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="rural"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('rural')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="selling"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('selling')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="letting"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('letting')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="regional"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('regional')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="type"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('type')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="style"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('style')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="situation"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('situation')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="parking"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('parking')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="age"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('age')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="locality"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('locality')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="rooms"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('rooms')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="roomDetailsApproved"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('roomDetailsApproved')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="negotiatorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('negotiatorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="officeIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('officeIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="areaId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('areaId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="url"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('url')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="urlCaption"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('urlCaption')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="groundRent"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('groundRent')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="groundRentComment"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('groundRentComment')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="groundRentReviewDate"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('groundRentReviewDate')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="groundRentIncrease"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('groundRentIncrease')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="serviceCharge"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('serviceCharge')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="serviceChargeComment"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('serviceChargeComment')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreatePropertiesIdCertificates = (
  props: CreatePropertiesIdCertificatesProps
) => {
  const { control, handleSubmit } = useForm<{
    category?: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
    string | undefined
    typeId?: /** The certificate's type */ string | undefined
    start?: /** The certificate's start date */ string | undefined
    expiry?: /** The certificate's expiry date */ string | undefined
    companyId?: /** The unique identifier of the company that supplied, or is supplying, the certificate */
    string | undefined
    notes?: /** Any general notes regarding the certificate */
    string | undefined
    referenceNumber?: /** The certificate's reference number */
    string | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    category?: /** The certificate's category (safetyCertificate/insurancePolicy/warranty) */
    string | undefined
    typeId?: /** The certificate's type */ string | undefined
    start?: /** The certificate's start date */ string | undefined
    expiry?: /** The certificate's expiry date */ string | undefined
    companyId?: /** The unique identifier of the company that supplied, or is supplying, the certificate */
    string | undefined
    notes?: /** Any general notes regarding the certificate */
    string | undefined
    referenceNumber?: /** The certificate's reference number */
    string | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreatePropertyCertificate()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="category"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('category')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="typeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('typeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="start"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('start')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="expiry"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('expiry')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="companyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('companyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="notes"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('notes')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="referenceNumber"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('referenceNumber')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreatePropertiesIdKeys = (props: CreatePropertiesIdKeysProps) => {
  const { control, handleSubmit } = useForm<{
    number?: /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
    string | undefined
    typeId?: /** The unique identifier of the key type */ string | undefined
    officeId?: /** The unique identifier of the office responsible for the key */
    string | undefined
    keysInSet?: /** A listing of the individual keys included in the set */
    | Array</** Request body used to create an individual key included in a key set */
        {
          name?: /** The name of the individual key in the set */
          string | undefined
        }>
      | undefined
  }>({
    resolver: zodResolver(
      z.object({
        /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
        number: z.string().optional(),
        /** The unique identifier of the key type */
        typeId: z.string().optional(),
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    number?: /** The number assigned to the key - key numbers can only be occupied by a single property within an office concurrently */
    string | undefined
    typeId?: /** The unique identifier of the key type */ string | undefined
    officeId?: /** The unique identifier of the office responsible for the key */
    string | undefined
    keysInSet?: /** A listing of the individual keys included in the set */
    | Array</** Request body used to create an individual key included in a key set */
        {
          name?: /** The name of the individual key in the set */
          string | undefined
        }>
      | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreatePropertyKey()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="number"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('number')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="typeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('typeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="officeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('officeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="keysInSet"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('keysInSet')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreatePropertiesIdKeysKeyIdMovements = (
  props: CreatePropertiesIdKeysKeyIdMovementsProps
) => {
  const { control, handleSubmit } = useForm<{
    checkInRequired?: /** Indicates whether the key is expected to be checked back in. Set to true when the key is no longer held (eg. returned to the landlord) */
    boolean | undefined
    checkOutToId?: /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
    string | undefined
    checkOutToType?: /** The type of entity that checked out the key (contact/negotiator) */
    string | undefined
    checkOutNegotiatorId?: /** The unique identifier of the negotiator who performed the key check out */
    string | undefined
  }>({
    resolver: zodResolver(
      z.object({
        /** Indicates whether the key is expected to be checked back in. Set to true when the key is no longer held (eg. returned to the landlord) */
        checkInRequired: z.boolean().optional(),
        /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
        checkOutToId: z.string().optional(),
        /** The type of entity that checked out the key (contact/negotiator) */
        checkOutToType: z.string().optional(),
        /** The unique identifier of the negotiator who performed the key check out */
        checkOutNegotiatorId: z.string().optional()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    checkInRequired?: /** Indicates whether the key is expected to be checked back in. Set to true when the key is no longer held (eg. returned to the landlord) */
    boolean | undefined
    checkOutToId?: /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
    string | undefined
    checkOutToType?: /** The type of entity that checked out the key (contact/negotiator) */
    string | undefined
    checkOutNegotiatorId?: /** The unique identifier of the negotiator who performed the key check out */
    string | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreatePropertyKeyMovement()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="checkInRequired"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('checkInRequired')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="checkOutToId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('checkOutToId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="checkOutToType"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('checkOutToType')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="checkOutNegotiatorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('checkOutNegotiatorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const UpdatePropertiesIdKeysKeyIdMovementsMovementId = (
  props: UpdatePropertiesIdKeysKeyIdMovementsMovementIdProps
) => {
  const { control, handleSubmit } = useForm<{
    checkInNegotiatorId?: /** The unique identifier of the negotiator who performed the key check in */
    string | undefined
  }>({
    resolver: zodResolver(
      z.object({
        /** The unique identifier of the negotiator who performed the key check in */
        checkInNegotiatorId: z.string().optional()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    checkInNegotiatorId?: /** The unique identifier of the negotiator who performed the key check in */
    string | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useUpdatePropertyKeyMovement()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="checkInNegotiatorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('checkInNegotiatorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreatePropertiesIdChecks = (
  props: CreatePropertiesIdChecksProps
) => {
  const { control, handleSubmit } = useForm<{
    description: /** Short, descriptive text describing the purpose of the check */
    string
    type: /** The type of the check (preInstruction) */ string
    status: /** The status of the check (needed/notNeeded/arranging/completed) */
    string
  }>({
    resolver: zodResolver(
      z.object({
        /** Short, descriptive text describing the purpose of the check */
        description: z.string(),
        /** The type of the check (preInstruction) */ type: z.string(),
        /** The status of the check (needed/notNeeded/arranging/completed) */
        status: z.string()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    description: /** Short, descriptive text describing the purpose of the check */
    string
    type: /** The type of the check (preInstruction) */ string
    status: /** The status of the check (needed/notNeeded/arranging/completed) */
    string
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreatePropertyCheck()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('description')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="type"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('type')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="status"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('status')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreatePropertiesIdAppraisals = (
  props: CreatePropertiesIdAppraisalsProps
) => {
  const { control, handleSubmit } = useForm<{
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
  }>({
    resolver: zodResolver(
      z.object({
        /** Unique identifier of the appraising company */
        companyId: z.string().optional(),
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
        notes: z.string().optional()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
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
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreatePropertyAppraisal()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="companyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('companyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="date"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('date')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="price"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('price')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="fee"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('fee')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="notes"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('notes')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreatePropertyImages = (props: CreatePropertyImagesProps) => {
  const { control, handleSubmit } = useForm<{
    data?: /** The base64 encoded file content, prefixed with the content type (eg. data:image/jpeg;base64,VGVzdCBmaWxl) */
    string | undefined
    fileUrl?: /** The presigned s3 url which a property image has been uploaded to (This supports files up to 30MB) */
    string | undefined
    propertyId: /** The unique identifier of the property attached to the image */
    string
    caption: /** The image caption */ string
    type: /** The type of image (photograph/floorPlan/epc/map) */ string
  }>({
    resolver: zodResolver(
      z.object({
        /** The base64 encoded file content, prefixed with the content type (eg. data:image/jpeg;base64,VGVzdCBmaWxl) */
        data: z.string().optional(),
        /** The presigned s3 url which a property image has been uploaded to (This supports files up to 30MB) */
        fileUrl: z.string().optional(),
        /** The unique identifier of the property attached to the image */
        propertyId: z.string(),
        /** The image caption */ caption: z.string(),
        /** The type of image (photograph/floorPlan/epc/map) */ type: z.string()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    data?: /** The base64 encoded file content, prefixed with the content type (eg. data:image/jpeg;base64,VGVzdCBmaWxl) */
    string | undefined
    fileUrl?: /** The presigned s3 url which a property image has been uploaded to (This supports files up to 30MB) */
    string | undefined
    propertyId: /** The unique identifier of the property attached to the image */
    string
    caption: /** The image caption */ string
    type: /** The type of image (photograph/floorPlan/epc/map) */ string
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreatePropertyImage()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="data"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('data')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="fileUrl"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('fileUrl')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="propertyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="caption"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('caption')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="type"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('type')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreatePropertyImagesSignedUrl = (
  props: CreatePropertyImagesSignedUrlProps
) => {
  const { control, handleSubmit } = useForm<{
    amount: /** The number of pre signed urls to create */ number
  }>({
    resolver: zodResolver(
      z.object({
        /** The number of pre signed urls to create */ amount: z.number().int()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    amount: /** The number of pre signed urls to create */ number
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreatePropertyImageSignedUrl()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="amount"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('amount')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreatePropertyImagesReindex = (
  props: CreatePropertyImagesReindexProps
) => {
  const { control, handleSubmit } = useForm<{
    propertyId?: /** The unique identifier of the property to update */
    string | undefined
    imageOrder?: /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
    Array<string> | undefined
  }>({
    resolver: zodResolver(
      z.object({
        /** The unique identifier of the property to update */
        propertyId: z.string().optional(),
        /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
        imageOrder: z.array(z.string()).optional()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    propertyId?: /** The unique identifier of the property to update */
    string | undefined
    imageOrder?: /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
    Array<string> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useReindexPropertyImages()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="propertyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="imageOrder"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('imageOrder')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateReferrals = (props: CreateReferralsProps) => {
  const { control, handleSubmit } = useForm<{
    referralTypeId: /** The unique identifier of the referral type */ string
    negotiatorId?: /** The unique identifier of the negotiator creating the referral */
    string | undefined
    propertyId?: /** The unique identifier of the property */ string | undefined
    applicantId?: /** The unique identifier of the applicant */
    string | undefined
    contactId: /** The unique identifier of the contact that has been referred */
    string
    amount?: /** The amount paid to the agent for the referral */
    number | undefined
  }>({
    resolver: zodResolver(
      z.object({
        /** The unique identifier of the referral type */
        referralTypeId: z.string(),
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    referralTypeId: /** The unique identifier of the referral type */ string
    negotiatorId?: /** The unique identifier of the negotiator creating the referral */
    string | undefined
    propertyId?: /** The unique identifier of the property */ string | undefined
    applicantId?: /** The unique identifier of the applicant */
    string | undefined
    contactId: /** The unique identifier of the contact that has been referred */
    string
    amount?: /** The amount paid to the agent for the referral */
    number | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateReferral()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="referralTypeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('referralTypeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="negotiatorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('negotiatorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="propertyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="applicantId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('applicantId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="contactId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('contactId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="amount"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('amount')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateResthooks = (props: CreateResthooksProps) => {
  const { control, handleSubmit } = useForm<{
    url: /** The url where the payload associated with the webhook should be sent to */
    string
    description?: /** A short description associated with the webhook (ie a friendly name or label) */
    string | undefined
    topicIds?: /** The identifiers of the topics the subscription is associated with */
    Array<string> | undefined
    active?: /** Flag denoting whether or not the webhook is active and ready to receive data */
    boolean | undefined
    ignoreEtagOnlyChanges?: /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
    boolean | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    url: /** The url where the payload associated with the webhook should be sent to */
    string
    description?: /** A short description associated with the webhook (ie a friendly name or label) */
    string | undefined
    topicIds?: /** The identifiers of the topics the subscription is associated with */
    Array<string> | undefined
    active?: /** Flag denoting whether or not the webhook is active and ready to receive data */
    boolean | undefined
    ignoreEtagOnlyChanges?: /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
    boolean | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateResthook()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="url"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('url')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('description')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="topicIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('topicIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="active"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('active')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="ignoreEtagOnlyChanges"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('ignoreEtagOnlyChanges')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const UpdateResthooksId = (props: UpdateResthooksIdProps) => {
  const { control, handleSubmit } = useForm<{
    url: /** The url where the payload associated with the webhook should be sent to */
    string
    description?: /** A short description associated with the webhook (ie a friendly name or label) */
    string | undefined
    topicIds?: /** The identifiers of the topics the subscription is associated with */
    Array<string> | undefined
    active?: /** Flag denoting whether or not the webhook is active and ready to receive data */
    boolean | undefined
    ignoreEtagOnlyChanges?: /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
    boolean | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    url: /** The url where the payload associated with the webhook should be sent to */
    string
    description?: /** A short description associated with the webhook (ie a friendly name or label) */
    string | undefined
    topicIds?: /** The identifiers of the topics the subscription is associated with */
    Array<string> | undefined
    active?: /** Flag denoting whether or not the webhook is active and ready to receive data */
    boolean | undefined
    ignoreEtagOnlyChanges?: /** Flag denoting whether or events that only contain changes to etags and/or modified dates are emitted
Pass true to disable emitting of these events */
    boolean | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useUpdateResthook()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="url"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('url')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('description')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="topicIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('topicIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="active"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('active')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="ignoreEtagOnlyChanges"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('ignoreEtagOnlyChanges')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateSources = (props: CreateSourcesProps) => {
  const { control, handleSubmit } = useForm<{
    name: /** The name of the source or advertising publication */ string
    type: /** The type of the source (source/advertisement) */ string
    officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
    Array<string> | undefined
    departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
    Array<string> | undefined
  }>({
    resolver: zodResolver(
      z.object({
        /** The name of the source or advertising publication */
        name: z.string(),
        /** The type of the source (source/advertisement) */ type: z.string(),
        /** A collection of the unique identifiers of offices that regularly get business from the source */
        officeIds: z.array(z.string()).optional(),
        /** A collection of unique identifiers of departments that regularly get business from the source */
        departmentIds: z.array(z.string()).optional()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    name: /** The name of the source or advertising publication */ string
    type: /** The type of the source (source/advertisement) */ string
    officeIds?: /** A collection of the unique identifiers of offices that regularly get business from the source */
    Array<string> | undefined
    departmentIds?: /** A collection of unique identifiers of departments that regularly get business from the source */
    Array<string> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateSource()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('name')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="type"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('type')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="officeIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('officeIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="departmentIds"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('departmentIds')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateTasks = (props: CreateTasksProps) => {
  const { control, handleSubmit } = useForm<{
    activates?: /** The date the task becomes active (Required when 'TypeId' is given) */
    string | undefined
    completed?: /** The date the task was completed */ string | undefined
    typeId?: /** The unique identifier of the task type */ string | undefined
    senderId: /** The unique identifer of the negotiator that created the task */
    string
    text: /** The textual contents of the task or message */ string
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
    recipientId: /** The unique identifier of the negotiator or office the task is being sent to */
    string
    recipientType: /** The type of the recipient (office/negotiator) */ string
    metadata?: /** App specific metadata that has been set against the task */
    Record<string, Record<string, never>> | undefined
  }>({
    resolver: zodResolver(
      z.object({
        /** The date the task becomes active (Required when 'TypeId' is given) */
        activates: z.string().optional(),
        /** The date the task was completed */ completed: z.string().optional(),
        /** The unique identifier of the task type */
        typeId: z.string().optional(),
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    activates?: /** The date the task becomes active (Required when 'TypeId' is given) */
    string | undefined
    completed?: /** The date the task was completed */ string | undefined
    typeId?: /** The unique identifier of the task type */ string | undefined
    senderId: /** The unique identifer of the negotiator that created the task */
    string
    text: /** The textual contents of the task or message */ string
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
    recipientId: /** The unique identifier of the negotiator or office the task is being sent to */
    string
    recipientType: /** The type of the recipient (office/negotiator) */ string
    metadata?: /** App specific metadata that has been set against the task */
    Record<string, Record<string, never>> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateTask()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="activates"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('activates')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="completed"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('completed')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="typeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('typeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="senderId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('senderId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="text"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('text')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="landlordId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('landlordId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="propertyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="applicantId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('applicantId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="tenancyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('tenancyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="contactId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('contactId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="recipientId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('recipientId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="recipientType"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('recipientType')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateTenancies = (props: CreateTenanciesProps) => {
  const { control, handleSubmit } = useForm<{
    startDate?: string | undefined
    endDate?: string | undefined
    status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
    string | undefined
    agentRole: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    string
    rent: /** The amount of rent required, returned in relation to the collection frequency */
    number
    rentFrequency: /** The rent collection frequency (weekly/monthly/annually) */
    string
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
    isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */
    boolean | undefined
    typeId: /** The unique identifier of the type of tenancy */ string
    negotiatorId: /** The unique identifier of the negotiator who is managing the tenancy */
    string
    propertyId: /** The unique identifier of the property that relates to the tenancy */
    string
    applicantId: /** The unique identifier of the applicant who has applied to be a tenant */
    string
    feeNotes?: /** Financial notes set against the tenancy */ string | undefined
    lettingFee?: /** Request body used to set letting fees on a new tenancy */
    | {
          type?: /** The letting fee type (percentage/fixed) */
          string | undefined
          amount?: /** The fee amount */ number | undefined
          frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
          string | undefined
        }
      | undefined
    managementFee?: /** Request body used to set management fees on a new tenancy */
    | {
          type?: /** The management fee type (percentage/fixed) */
          string | undefined
          amount?: /** The fee amount */ number | undefined
          frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
          string | undefined
        }
      | undefined
    deposit?: /** Request body used to set the deposit of a new tenancy */
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
    source?: /** Request body used to set the source of a new tenancy */
    | {
          id?: /** The unique identifier of the source for the tenancy */
          string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the tenancy */
    Record<string, Record<string, never>> | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    startDate?: string | undefined
    endDate?: string | undefined
    status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
    string | undefined
    agentRole: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    string
    rent: /** The amount of rent required, returned in relation to the collection frequency */
    number
    rentFrequency: /** The rent collection frequency (weekly/monthly/annually) */
    string
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
    isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */
    boolean | undefined
    typeId: /** The unique identifier of the type of tenancy */ string
    negotiatorId: /** The unique identifier of the negotiator who is managing the tenancy */
    string
    propertyId: /** The unique identifier of the property that relates to the tenancy */
    string
    applicantId: /** The unique identifier of the applicant who has applied to be a tenant */
    string
    feeNotes?: /** Financial notes set against the tenancy */ string | undefined
    lettingFee?: /** Request body used to set letting fees on a new tenancy */
    | {
          type?: /** The letting fee type (percentage/fixed) */
          string | undefined
          amount?: /** The fee amount */ number | undefined
          frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
          string | undefined
        }
      | undefined
    managementFee?: /** Request body used to set management fees on a new tenancy */
    | {
          type?: /** The management fee type (percentage/fixed) */
          string | undefined
          amount?: /** The fee amount */ number | undefined
          frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
          string | undefined
        }
      | undefined
    deposit?: /** Request body used to set the deposit of a new tenancy */
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
    source?: /** Request body used to set the source of a new tenancy */
    | {
          id?: /** The unique identifier of the source for the tenancy */
          string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the tenancy */
    Record<string, Record<string, never>> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateTenancy()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="startDate"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('startDate')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="endDate"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('endDate')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="status"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('status')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="agentRole"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('agentRole')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="rent"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('rent')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="rentFrequency"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('rentFrequency')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="rentInstalmentsFrequency"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('rentInstalmentsFrequency')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="rentInstalmentsAmount"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('rentInstalmentsAmount')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="rentInstalmentsStart"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('rentInstalmentsStart')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="meterReadingGas"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('meterReadingGas')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="meterReadingGasLastRead"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('meterReadingGasLastRead')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="meterReadingElectricity"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('meterReadingElectricity')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="meterReadingElectricityLastRead"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('meterReadingElectricityLastRead')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="meterReadingWater"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('meterReadingWater')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="meterReadingWaterLastRead"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('meterReadingWaterLastRead')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="isPeriodic"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('isPeriodic')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="typeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('typeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="negotiatorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('negotiatorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="propertyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="applicantId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('applicantId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="feeNotes"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('feeNotes')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="lettingFee"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('lettingFee')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="managementFee"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('managementFee')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="deposit"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('deposit')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="source"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('source')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateTenanciesIdChecks = (
  props: CreateTenanciesIdChecksProps
) => {
  const { control, handleSubmit } = useForm<{
    description?: /** Short, descriptive text describing the purpose of the check. This should be populated
when creating a custom tenancy check that does not match any of the existing pre-configured
tenancy check options.
Description and CheckTypeId must not be supplied in the same payload, but at least one must be provided */
    string | undefined
    type: /** The type of the tenancy check (preTenancy/postTenancy) */ string
    status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
    string
    checkTypeId?: /** The identifier of the pre-configured tenancy check. This should be populated
when an existing tenancy check configuration is desired, rather than a custom one
CheckTypeId and Description must not be supplied in the same payload, but at least one must be provided */
    string | undefined
    metadata?: /** App specific metadata to set against the tenancy check */
    Record<string, Record<string, never>> | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    description?: /** Short, descriptive text describing the purpose of the check. This should be populated
when creating a custom tenancy check that does not match any of the existing pre-configured
tenancy check options.
Description and CheckTypeId must not be supplied in the same payload, but at least one must be provided */
    string | undefined
    type: /** The type of the tenancy check (preTenancy/postTenancy) */ string
    status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
    string
    checkTypeId?: /** The identifier of the pre-configured tenancy check. This should be populated
when an existing tenancy check configuration is desired, rather than a custom one
CheckTypeId and Description must not be supplied in the same payload, but at least one must be provided */
    string | undefined
    metadata?: /** App specific metadata to set against the tenancy check */
    Record<string, Record<string, never>> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateTenancyCheck()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('description')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="type"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('type')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="status"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('status')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="checkTypeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('checkTypeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateTenanciesIdBreakClauses = (
  props: CreateTenanciesIdBreakClausesProps
) => {
  const { control, handleSubmit } = useForm<{
    typeId?: /** The identifier of the associated to the break clause */
    string | undefined
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
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    typeId?: /** The identifier of the associated to the break clause */
    string | undefined
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
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateTenancyBreakClause()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="typeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('typeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="active"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('active')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="appliesTo"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('appliesTo')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="agreements"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('agreements')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="breakFrom"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('breakFrom')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="noticeRequired"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('noticeRequired')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateTenanciesIdAllowances = (
  props: CreateTenanciesIdAllowancesProps
) => {
  const { control, handleSubmit } = useForm<{
    typeId?: /** The identifier of the associated to the allowance */
    string | undefined
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
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    typeId?: /** The identifier of the associated to the allowance */
    string | undefined
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
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateTenancyAllowance()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="typeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('typeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="state"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('state')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="agreements"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('agreements')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateTenanciesIdResponsibilities = (
  props: CreateTenanciesIdResponsibilitiesProps
) => {
  const { control, handleSubmit } = useForm<{
    typeId?: /** The identifier of the associated to the responsibility */
    string | undefined
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
  }>({
    resolver: zodResolver(
      z.object({
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    typeId?: /** The identifier of the associated to the responsibility */
    string | undefined
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
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateTenancyResponsibility()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="typeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('typeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="appliesTo"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('appliesTo')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="agreements"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('agreements')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateTenanciesIdRenewalNegotiations = (
  props: CreateTenanciesIdRenewalNegotiationsProps
) => {
  const { control, handleSubmit } = useForm<{
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
    lettingFee?: /** Request body used to create a tenancy renewals letting fee */
    | {
          type?: /** The letting fee type (fixed/perentage) */
          string | undefined
          amount?: /** The letting fee amount as a fixed price or percentage based on the `type` */
          number | undefined
          frequency?: /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
          string | undefined
        }
      | undefined
    managementFee?: /** Request body used to create a tenancy renewals management fee */
    | {
          type?: /** The mangement fee type (fixed/perentage) */
          string | undefined
          amount?: /** The mangement fee amount as a fixed price or percentage based on the `type` */
          number | undefined
          frequency?: /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
          string | undefined
        }
      | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
            /** The letting fee type (fixed/perentage) */
            type: z.string().optional(),
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
    )
  })

  const { label, format } = createRuntimeConfig<{
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
    lettingFee?: /** Request body used to create a tenancy renewals letting fee */
    | {
          type?: /** The letting fee type (fixed/perentage) */
          string | undefined
          amount?: /** The letting fee amount as a fixed price or percentage based on the `type` */
          number | undefined
          frequency?: /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
          string | undefined
        }
      | undefined
    managementFee?: /** Request body used to create a tenancy renewals management fee */
    | {
          type?: /** The mangement fee type (fixed/perentage) */
          string | undefined
          amount?: /** The mangement fee amount as a fixed price or percentage based on the `type` */
          number | undefined
          frequency?: /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
          string | undefined
        }
      | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateTenancyRenewalNegotiation()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="startDate"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('startDate')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="endDate"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('endDate')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="negotiatorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('negotiatorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="rent"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('rent')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="rentFrequency"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('rentFrequency')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="lettingFee"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('lettingFee')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="managementFee"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('managementFee')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateTenanciesIdRenewalNegotiationsRenewalIdChecks = (
  props: CreateTenanciesIdRenewalNegotiationsRenewalIdChecksProps
) => {
  const { control, handleSubmit } = useForm<{
    status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
    string
    checkTypeId?: /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
    string | undefined
    description?: /** The name of this tenancy check */ string | undefined
    metadata?: /** App specific metadata to set against the tenancy renewal check */
    Record<string, Record<string, never>> | undefined
  }>({
    resolver: zodResolver(
      z.object({
        /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
        status: z.string(),
        /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
        checkTypeId: z.string().optional(),
        /** The name of this tenancy check */
        description: z.string().optional(),
        /** App specific metadata to set against the tenancy renewal check */
        metadata: z.record(z.string(), z.object({})).optional()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
    string
    checkTypeId?: /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
    string | undefined
    description?: /** The name of this tenancy check */ string | undefined
    metadata?: /** App specific metadata to set against the tenancy renewal check */
    Record<string, Record<string, never>> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateTenancyRenewalNegotiationCheck()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="status"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('status')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="checkTypeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('checkTypeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('description')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateTransactionsSupplierInvoices = (
  props: CreateTransactionsSupplierInvoicesProps
) => {
  const { control, handleSubmit } = useForm<{
    worksOrderId?: /** The unique identifier of the works order the supplier invoice is associated with, where applicable
Must be provided if propertyId/companyId/tenancyId are not present */
    string | undefined
    propertyId?: /** The unique identifier of the property the supplier invoice is associated with, where applicable
When providing a propertyId along with a worksOrderId, the id will be validated against the works order to check they match */
    string | undefined
    companyId?: /** The unique identifier of the contractor (company) the supplier invoice is associated with, where applicable
When providing a companyId along with a worksOrderId, the id will be validated against the works order to check they match */
    string | undefined
    tenancyId?: /** The unique identifier of the tenancy the supplier invoice is associated with, where applicable
When providing a tenancyId along with a worksOrderId, the id will be validated against the works order to check they match */
    string | undefined
    description: /** The supplier invoice work description */ string
    accountId: /** The identifier of the nominal account the supplier invoice should be attributed to */
    string
    invoiceRef: /** The invoice reference */ string
    negotiatorId: /** The unique identifier of the negotiator the invoice should be attributed to (normally the person creating it on the system) */
    string
    invoiceDate: /** The invoice date */ string
    dueDate?: /** The date the invoice should be paid by */ string | undefined
    netAmount: /** The invoice net amount */ number
    taxAmount: /** The invoice tax amount */ number
  }>({
    resolver: zodResolver(
      z.object({
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
        /** The date the invoice should be paid by */
        dueDate: z.string().optional(),
        /** The invoice net amount */ netAmount: z.number(),
        /** The invoice tax amount */ taxAmount: z.number()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    worksOrderId?: /** The unique identifier of the works order the supplier invoice is associated with, where applicable
Must be provided if propertyId/companyId/tenancyId are not present */
    string | undefined
    propertyId?: /** The unique identifier of the property the supplier invoice is associated with, where applicable
When providing a propertyId along with a worksOrderId, the id will be validated against the works order to check they match */
    string | undefined
    companyId?: /** The unique identifier of the contractor (company) the supplier invoice is associated with, where applicable
When providing a companyId along with a worksOrderId, the id will be validated against the works order to check they match */
    string | undefined
    tenancyId?: /** The unique identifier of the tenancy the supplier invoice is associated with, where applicable
When providing a tenancyId along with a worksOrderId, the id will be validated against the works order to check they match */
    string | undefined
    description: /** The supplier invoice work description */ string
    accountId: /** The identifier of the nominal account the supplier invoice should be attributed to */
    string
    invoiceRef: /** The invoice reference */ string
    negotiatorId: /** The unique identifier of the negotiator the invoice should be attributed to (normally the person creating it on the system) */
    string
    invoiceDate: /** The invoice date */ string
    dueDate?: /** The date the invoice should be paid by */ string | undefined
    netAmount: /** The invoice net amount */ number
    taxAmount: /** The invoice tax amount */ number
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateSupplierInvoice()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="worksOrderId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('worksOrderId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="propertyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="companyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('companyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="tenancyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('tenancyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('description')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="accountId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('accountId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="invoiceRef"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('invoiceRef')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="negotiatorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('negotiatorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="invoiceDate"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('invoiceDate')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="dueDate"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('dueDate')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="netAmount"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('netAmount')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="taxAmount"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('taxAmount')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateVendorsIdRelationships = (
  props: CreateVendorsIdRelationshipsProps
) => {
  const { control, handleSubmit } = useForm<{
    associatedId: /** The unique identifier of the contact or company to create a relationship with */
    string
    associatedType: /** The type of relationship to create (contact/company) */
    string
    isMain: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
    boolean
  }>({
    resolver: zodResolver(
      z.object({
        /** The unique identifier of the contact or company to create a relationship with */
        associatedId: z.string(),
        /** The type of relationship to create (contact/company) */
        associatedType: z.string(),
        /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
        isMain: z.boolean()
      })
    )
  })

  const { label, format } = createRuntimeConfig<{
    associatedId: /** The unique identifier of the contact or company to create a relationship with */
    string
    associatedType: /** The type of relationship to create (contact/company) */
    string
    isMain: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
    boolean
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateVendorRelationship()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="associatedId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('associatedId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="associatedType"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('associatedType')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="isMain"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('isMain')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateWorksOrders = (props: CreateWorksOrdersProps) => {
  const { control, handleSubmit } = useForm<{
    companyId?: /** The unique identifier of the company that has been selected to perform the work */
    string | undefined
    propertyId: /** The unique identifier of the property where the work is to be carried out */
    string
    tenancyId?: /** The unique identifier of the tenancy that the works order originated from */
    string | undefined
    negotiatorId: /** The unique identifier of the negotiator that booked the works order */
    string
    typeId?: /** The unique id of the type of work that needs to be carried out */
    string | undefined
    status: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
    string
    description: /** A free text description of the work required */ string
    reporter: /** The party requesting the work to be carried out (landlord/tenant/other) */
    string
    priority?: /** The priority level of the works order (low/medium/high) */
    string | undefined
    booked?: /** The date when the works order was booked */ string | undefined
    required?: /** The date when the work is required to be completed by */
    string | undefined
    completed?: /** The date when the work was completed */ string | undefined
    items: /** Individual work items to attach to the works order */
    Array</** Representation of a works order item */
    {
      notes: /** The notes attached to the works order item */ string
      chargeTo: /** The party to be charged for the work being carried out (landlord/tenant) */
      string
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
    }>
    metadata?: /** App specific metadata to set against the works order */
    Record<string, Record<string, never>> | undefined
  }>({
    resolver: zodResolver(
      z.object({
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
        /** A free text description of the work required */
        description: z.string(),
        /** The party requesting the work to be carried out (landlord/tenant/other) */
        reporter: z.string(),
        /** The priority level of the works order (low/medium/high) */
        priority: z.string().optional(),
        /** The date when the works order was booked */
        booked: z.string().optional(),
        /** The date when the work is required to be completed by */
        required: z.string().optional(),
        /** The date when the work was completed */
        completed: z.string().optional(),
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    companyId?: /** The unique identifier of the company that has been selected to perform the work */
    string | undefined
    propertyId: /** The unique identifier of the property where the work is to be carried out */
    string
    tenancyId?: /** The unique identifier of the tenancy that the works order originated from */
    string | undefined
    negotiatorId: /** The unique identifier of the negotiator that booked the works order */
    string
    typeId?: /** The unique id of the type of work that needs to be carried out */
    string | undefined
    status: /** The current status of the works order (pendingApproval/pendingQuote/raised/raisedToChase/landlordToComplete/complete/cancelled/quoteAccepted) */
    string
    description: /** A free text description of the work required */ string
    reporter: /** The party requesting the work to be carried out (landlord/tenant/other) */
    string
    priority?: /** The priority level of the works order (low/medium/high) */
    string | undefined
    booked?: /** The date when the works order was booked */ string | undefined
    required?: /** The date when the work is required to be completed by */
    string | undefined
    completed?: /** The date when the work was completed */ string | undefined
    items: /** Individual work items to attach to the works order */
    Array</** Representation of a works order item */
    {
      notes: /** The notes attached to the works order item */ string
      chargeTo: /** The party to be charged for the work being carried out (landlord/tenant) */
      string
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
    }>
    metadata?: /** App specific metadata to set against the works order */
    Record<string, Record<string, never>> | undefined
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateWorksOrder()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="companyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('companyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="propertyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('propertyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="tenancyId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('tenancyId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="negotiatorId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('negotiatorId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="typeId"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('typeId')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="status"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('status')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="description"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('description')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="reporter"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('reporter')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="priority"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('priority')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="booked"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('booked')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="required"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('required')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="completed"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('completed')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="items"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('items')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="metadata"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('metadata')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}

export const CreateWorksOrdersIdItems = (
  props: CreateWorksOrdersIdItemsProps
) => {
  const { control, handleSubmit } = useForm<{
    notes: /** The notes attached to the works order item */ string
    chargeTo: /** The party to be charged for the work being carried out (landlord/tenant) */
    string
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
  }>({
    resolver: zodResolver(
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
    )
  })

  const { label, format } = createRuntimeConfig<{
    notes: /** The notes attached to the works order item */ string
    chargeTo: /** The party to be charged for the work being carried out (landlord/tenant) */
    string
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
  }>(undefined, '@skmtc/mui-joy-forms')

  const mutator = useCreateWorksOrderItem()

  return (
    <Box
      component="form"
      display="flex"
      flexDirection="column"
      flex={1}
      gap="16px"
      onSubmit={handleSubmit(body => {
        mutator.mutate({ ...props, body })
      })}
    >
      <Controller
        name="notes"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('notes')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="chargeTo"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('chargeTo')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="estimate"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('estimate')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="estimateType"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('estimateType')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="netAmount"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('netAmount')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="vatAmount"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('vatAmount')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Controller
        name="reserveAmount"
        control={control}
        render={({ field, fieldState }) => (
          <FormControl error={Boolean(fieldState.error?.message)}>
            <FormLabel>{label('reserveAmount')}</FormLabel>
            <Input {...field} />
            {fieldState.error?.message ? (
              <FormHelperText>{fieldState.error?.message}</FormHelperText>
            ) : null}
          </FormControl>
        )}
      />
      <Box
        display="flex"
        flexDirection="column"
        sx={{
          pt: '16px',
          position: 'sticky',
          bottom: 0,
          bgColor: 'white'
        }}
      >
        <Button type="submit">Submit</Button>
      </Box>
    </Box>
  )
}
