import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreatePropertyImageArgs = {
  body: /** Request body used to create a new property image */
  {
    data?: /** The base64 encoded file content, prefixed with the content type (eg. data:image/jpeg;base64,VGVzdCBmaWxl) */
    string | undefined
    fileUrl?: /** The presigned s3 url which a property image has been uploaded to (This supports files up to 30MB) */
    string | undefined
    propertyId: /** The unique identifier of the property attached to the image */
    string
    caption: /** The image caption */ string
    type: /** The type of image (photograph/floorPlan/epc/map) */ string
  }
}
export type useCreatePropertyImageSignedUrlArgs = {
  body: /** Request body used to create pre signed urls to upload files between 6MB and 30MB */
  { amount: /** The number of pre signed urls to create */ number }
}
export type useReindexPropertyImagesArgs = {
  body: /** Request body used to reindex property images */
  {
    propertyId?: /** The unique identifier of the property to update */
    string | undefined
    imageOrder?: /** Ordered collection of image identifiers for the property.
The first image in the collection will be set as the properties primary image. */
    Array<string> | undefined
  }
}

const createPropertyImageFn = async (args: useCreatePropertyImageArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/propertyImages/`,
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

export const useCreatePropertyImage = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyImageFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['PropertyImages'] })
    }
  })
}

const createPropertyImageSignedUrlFn = async (
  args: useCreatePropertyImageSignedUrlArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/propertyImages/signedUrl`,
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

export const useCreatePropertyImageSignedUrl = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createPropertyImageSignedUrlFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['PropertyImages'] })
    }
  })
}

const reindexPropertyImagesFn = async (args: useReindexPropertyImagesArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/propertyImages/reindex`,
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

export const useReindexPropertyImages = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: reindexPropertyImagesFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['PropertyImages'] })
    }
  })
}
