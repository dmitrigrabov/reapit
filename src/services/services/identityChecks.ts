import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateIdentityCheckArgs = {
  body: /** Request body used to create a new contact identity check */
  {
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
  }
}
export type useCreateIdentityCheckSignedUrlArgs = {
  body: /** Request body used to create pre signed urls to upload files between 6MB and 30MB */
  { amount: /** The number of pre signed urls to create */ number }
}

const createIdentityCheckFn = async (args: useCreateIdentityCheckArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/identityChecks/`,
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

export const useCreateIdentityCheck = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createIdentityCheckFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['IdentityChecks'] })
    }
  })
}

const createIdentityCheckSignedUrlFn = async (
  args: useCreateIdentityCheckSignedUrlArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/identityChecks/signedUrl`,
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

  return /** Request body used to create pre signed urls to upload files between 6MB and 30MB */
  z.object({
    /** The number of pre signed urls to create */ amount: z.number().int()
  }).parse(data)
}

export const useCreateIdentityCheckSignedUrl = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createIdentityCheckSignedUrlFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['IdentityChecks'] })
    }
  })
}
