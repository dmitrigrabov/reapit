import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateNotificationArgs = {
  body: /** Payload for creating a notification */
  {
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
  }
}

const createNotificationFn = async (args: useCreateNotificationArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/notifications/`,
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

export const useCreateNotification = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createNotificationFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Notifications'] })
    }
  })
}
