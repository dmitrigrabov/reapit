import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateResthookArgs = {
  body: /** Request body used to create a new webhook subscription */
  {
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
  }
}
export type useUpdateResthookArgs = {
  id: string
  body: /** Request body used to update a webhook subscription */
  {
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
  }
}

const createResthookFn = async (args: useCreateResthookArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/resthooks/`, {
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

export const useCreateResthook = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createResthookFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['RestHooks'] })
    }
  })
}

const updateResthookFn = async (args: useUpdateResthookArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/resthooks/${args.id}`,
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

export const useUpdateResthook = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updateResthookFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['RestHooks'] })
    }
  })
}
