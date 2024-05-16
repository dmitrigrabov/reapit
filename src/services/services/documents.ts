import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateDocumentArgs = {
  body: /** Request body used to create a new document */
  {
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
  }
}
export type useCreateSignedUrlArgs = {
  body: /** Request body used to create pre signed urls to upload files between 6MB and 30MB */
  { amount: /** The number of pre signed urls to create */ number }
}

const createDocumentFn = async (args: useCreateDocumentArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/documents/`, {
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

export const useCreateDocument = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createDocumentFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Documents'] })
    }
  })
}

const createSignedUrlFn = async (args: useCreateSignedUrlArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/documents/signedUrl`,
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

export const useCreateSignedUrl = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createSignedUrlFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Documents'] })
    }
  })
}
