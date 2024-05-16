import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateCompanyArgs = {
  body: /** Request body used to create a new company */
  {
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
  }
}

const createCompanyFn = async (args: useCreateCompanyArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/companies/`, {
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

export const useCreateCompany = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createCompanyFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Companies'] })
    }
  })
}
