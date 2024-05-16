import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateMetadataArgs = {
  body: /** Payload to create a metadata record */
  {
    entityType: /** The type of the entity that this metadata is related to. This can represent a Foundations inbuilt type (an entity presented in our APIs) or it can be a custom entity type (a dynamic standalone metadata entity that you create).
            
Inbuilt types: applicant, appointment, company, contact, conveyancing, identityCheck, landlord, negotiator, offer, office, property, task, vendor, worksOrder */
    string
    entityId?: /** The unique identifier of the entity that this metadata is related to.
For custom entities, this can be left blank and an id will be generated for you. */
    string | undefined
    metadata: /** The JSON document to store */ string
  }
}
export type useUpdateMetadataArgs = {
  id: string
  body: /** Payload to update a metadata record */
  { metadata: /** The updated JSON document to store */ string }
}
export type useUpdateMetadataSchemaArgs = {
  id: string
  body: /** Payload to update a JSON schema */
  { schema: /** The updated JSON schema to store */ string }
}
export type useCreateMetadataSchemaArgs = {
  body: /** Payload to create a JSON schema for metadata validation */
  {
    entityType: /** The name of the entity type that this schema is related to */
    string
    schema: /** The JSON schema used to validate entities of this type */ string
  }
}

const createMetadataFn = async (args: useCreateMetadataArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/metadata/`, {
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

export const useCreateMetadata = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createMetadataFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Metadata'] })
    }
  })
}

const updateMetadataFn = async (args: useUpdateMetadataArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/metadata/${args.id}`,
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

export const useUpdateMetadata = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updateMetadataFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Metadata'] })
    }
  })
}

const updateMetadataSchemaFn = async (args: useUpdateMetadataSchemaArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/metadata/metadataSchema/${args.id}`,
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

export const useUpdateMetadataSchema = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: updateMetadataSchemaFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['MetadataSchema'] })
    }
  })
}

const createMetadataSchemaFn = async (args: useCreateMetadataSchemaArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/metadata/metadataSchema`,
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

export const useCreateMetadataSchema = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createMetadataSchemaFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['MetadataSchema'] })
    }
  })
}
