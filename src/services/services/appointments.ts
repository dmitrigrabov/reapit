import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateAppointmentArgs = {
  body: /** Request body used to create a new calendar appointment */
  {
    start: /** The date and time when the appointment will start */ string
    end: /** The date and time when the appointment will end */ string
    followUpOn?: /** The date when the appointment should be followed up */
    string | undefined
    typeId: /** The unique identifier of the appointment type */ string
    description?: /** A free text description about the appointment */
    string | undefined
    organiserId?: /** The unique identifier of the negotiator that organised the appointment */
    string | undefined
    negotiatorIds?: /** A collection of unique identifiers of negotiators attached to the appointment. The first item in the collection is considered the primary negotiator */
    Array<string> | undefined
    officeIds?: /** A collection of unique identifiers of offices attached to the appointment. The first item in the collection is considered the primary office */
    Array<string> | undefined
    attendee?: /** Represents an external attendee on an appointment */
    | {
          id?: /** The unique identifier of the attendee */ string | undefined
          type?: /** The type of attendee (applicant/contact/landlord/tenant) */
          string | undefined
        }
      | undefined
    propertyId?: /** The unique identifier of the property related to the appointment */
    string | undefined
    otherAgentId?: /** The unique identifier of the external company either carrying out or attending the appointment with the agent */
    string | undefined
    accompanied?: /** A flag denoting whether or not the appointment will be accompanied by one or more negotiators */
    boolean | undefined
    negotiatorConfirmed?: /** A flag denoting whether or not the main negotiator has confirmed their attendance */
    boolean | undefined
    attendeeConfirmed?: /** A flag denoting whether or not the attendee has confirmed their attendance */
    boolean | undefined
    propertyConfirmed?: /** A flag denoting whether or not the property and/or property's vendor has confirmed their attendance */
    boolean | undefined
    virtual?: /** A flag denoting whether or not the appointment is virtual */
    boolean | undefined
    isRepeat?: /** A flag denoting whether or not the appointment is a subsequent appointment to a previous one (a repeat appointment for the same attendee) */
    boolean | undefined
    attended?: /** The attendance status of the appointment (notSet/noShow/attended) */
    string | undefined
    recurrence?: /** Details of an appointment's recurrence pattern */
    | {
          interval?: /** The numeric value denoting how often the appointment will recur */
          number | undefined
          type?: /** The type of unit that the `interval` applies to (daily/weekly/yearly/monthly) */
          string | undefined
          until?: /** The date and time of the last occurrence of the appointment. (Required if 'type' is provided) */
          string | undefined
        }
      | undefined
    documents?: /** A view of the documents associated to the appointment */
    | {
          draftPropertyInspectionReportId?: /** The unique identifier of the draft property inspection report document */
          string | undefined
          finalPropertyInspectionReportId?: /** The unique identifier of the final property inspection report document */
          string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the appointment */
    Record<string, Record<string, never>> | undefined
  }
}
export type useCreateOpenHouseAttendeeArgs = {
  id: string
  body: /** Request body used to create a new open house attendee */
  {
    interestLevel?: /** The interest level of the open house attendee (veryInterested/mightBeInterested/notInterested/notSet) */
    string | undefined
    notes?: /** Notes on this open house attendee */ string | undefined
    attendee?: /** Represents an external attendee on an appointment */
    | {
          id?: /** The unique identifier of the attendee */ string | undefined
          type?: /** The type of attendee (applicant/contact/landlord/tenant) */
          string | undefined
        }
      | undefined
  }
}

const createAppointmentFn = async (args: useCreateAppointmentArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/appointments/`,
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

export const useCreateAppointment = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createAppointmentFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
    }
  })
}

const createOpenHouseAttendeeFn = async (
  args: useCreateOpenHouseAttendeeArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/appointments/${args.id}/openHouseAttendees`,
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

export const useCreateOpenHouseAttendee = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createOpenHouseAttendeeFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Appointments'] })
    }
  })
}
