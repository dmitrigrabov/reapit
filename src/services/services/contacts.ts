import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateContactArgs = {
  body: /** Request body used to create a new contact */
  {
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
  }
}
export type useUpdateContactSubscriptionArgs = {
  id: string
  subscriptionId: string
  body: /** Request body used to update an existing contact subscription */
  {
    status?: /** The status of the subscription (subscribed/unsubscribed) */
    string | undefined
  }
}

const createContactFn = async (args: useCreateContactArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/contacts/`, {
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

export const useCreateContact = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createContactFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    }
  })
}

const updateContactSubscriptionFn = async (
  args: useUpdateContactSubscriptionArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/contacts/${args.id}/subscriptions/${args.subscriptionId}`,
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

export const useUpdateContactSubscription = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updateContactSubscriptionFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Contacts'] })
    }
  })
}
