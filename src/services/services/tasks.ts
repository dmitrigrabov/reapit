import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateTaskArgs = {
  body: /** Request body used to create a new task, which can also be an internal message */
  {
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
  }
}

const createTaskFn = async (args: useCreateTaskArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/tasks/`, {
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

export const useCreateTask = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTaskFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tasks'] })
    }
  })
}
