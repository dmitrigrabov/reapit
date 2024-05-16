import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateEnquiryArgs = {
  body: /** Request body used to create an enquiry */
  {
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
  }
}

const createEnquiryFn = async (args: useCreateEnquiryArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/enquiries/`, {
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

export const useCreateEnquiry = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createEnquiryFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Enquiries'] })
    }
  })
}
