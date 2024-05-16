import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateApplicantArgs = {
  body: /** Request body used to create a new applicant */
  {
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
  }
}
export type useCreateApplicantRelationshipArgs = {
  id: string
  body: /** Request body used to create or update a relationship between an applicant and a contact or company */
  {
    associatedId?: /** The unique identifier of the contact or company to create a relationship with */
    string | undefined
    associatedType?: /** The type of relationship to create (contact/company) */
    string | undefined
    isMain?: /** Flag denoting whether or not this relationship should be considered to be the main/primary relationship. Setting to true will automatically demote the existing primary relationship */
    boolean | undefined
  }
}

const createApplicantFn = async (args: useCreateApplicantArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/applicants/`, {
    method: 'POST',
    body: JSON.stringify(args.body),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`
    }
  })

  const data = await res.json()

  return z.void().parse(data)
}

export const useCreateApplicant = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApplicantFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Applicants'] })
    }
  })
}

const createApplicantRelationshipFn = async (
  args: useCreateApplicantRelationshipArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/applicants/${args.id}/relationships`,
    {
      method: 'POST',
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

export const useCreateApplicantRelationship = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createApplicantRelationshipFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Applicants'] })
    }
  })
}
