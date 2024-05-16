import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreatePropertyArgs = {
  body: /** Request body used to create a new property */
  {
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
  }
}
export type useCreatePropertyCertificateArgs = {
  id: string
  body: /** Request body used to create a new certificate */
  {
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
  }
}
export type useCreatePropertyKeyArgs = {
  id: string
  body: /** Request body used to create a new set of keys */
  {
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
  }
}
export type useCreatePropertyKeyMovementArgs = {
  id: string
  keyId: string
  body: /** Request body used to create a new key movement */
  {
    checkInRequired?: /** Indicates whether the key is expected to be checked back in. Set to true when the key is no longer held (eg. returned to the landlord) */
    boolean | undefined
    checkOutToId?: /** The unique identifier of the contact or negotiator to check out the key with - this person will be recorded as holding the key */
    string | undefined
    checkOutToType?: /** The type of entity that checked out the key (contact/negotiator) */
    string | undefined
    checkOutNegotiatorId?: /** The unique identifier of the negotiator who performed the key check out */
    string | undefined
  }
}
export type useUpdatePropertyKeyMovementArgs = {
  id: string
  keyId: string
  movementId: string
  body: /** Request body used for checking in a key */
  {
    checkInNegotiatorId?: /** The unique identifier of the negotiator who performed the key check in */
    string | undefined
  }
}
export type useCreatePropertyCheckArgs = {
  id: string
  body: /** Request body used to create a new check */
  {
    description: /** Short, descriptive text describing the purpose of the check */
    string
    type: /** The type of the check (preInstruction) */ string
    status: /** The status of the check (needed/notNeeded/arranging/completed) */
    string
  }
}
export type useCreatePropertyAppraisalArgs = {
  id: string
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

const createPropertyFn = async (args: useCreatePropertyArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/properties/`, {
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

export const useCreateProperty = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    }
  })
}

const createPropertyCertificateFn = async (
  args: useCreatePropertyCertificateArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/properties/${args.id}/certificates`,
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

export const useCreatePropertyCertificate = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyCertificateFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    }
  })
}

const createPropertyKeyFn = async (args: useCreatePropertyKeyArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/properties/${args.id}/keys`,
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

export const useCreatePropertyKey = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyKeyFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    }
  })
}

const createPropertyKeyMovementFn = async (
  args: useCreatePropertyKeyMovementArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/properties/${args.id}/keys/${args.keyId}/movements`,
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

export const useCreatePropertyKeyMovement = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyKeyMovementFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    }
  })
}

const updatePropertyKeyMovementFn = async (
  args: useUpdatePropertyKeyMovementArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/properties/${args.id}/keys/${args.keyId}/movements/${args.movementId}`,
    {
      method: 'PUT',
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

export const useUpdatePropertyKeyMovement = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updatePropertyKeyMovementFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    }
  })
}

const createPropertyCheckFn = async (args: useCreatePropertyCheckArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/properties/${args.id}/checks`,
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

export const useCreatePropertyCheck = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyCheckFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    }
  })
}

const createPropertyAppraisalFn = async (
  args: useCreatePropertyAppraisalArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/properties/${args.id}/appraisals`,
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

export const useCreatePropertyAppraisal = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyAppraisalFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Properties'] })
    }
  })
}
