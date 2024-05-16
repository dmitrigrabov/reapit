import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateTenancyArgs = {
  body: /** Request body used to create a new tenancy */
  {
    startDate?: string | undefined
    endDate?: string | undefined
    status?: /** The current status of the tenancy (offerPending/offerWithdrawn/offerRejected/arranging) */
    string | undefined
    agentRole: /** The role that the agent is performing for the tenancy (managed/rentCollection/collectFirstPayment/collectRentToDate/lettingOnly/introducingTenant) */
    string
    rent: /** The amount of rent required, returned in relation to the collection frequency */
    number
    rentFrequency: /** The rent collection frequency (weekly/monthly/annually) */
    string
    rentInstalmentsFrequency?: /** The frequency of rental instalment payments (weekly/fortnightly/monthly/quarterly/halfYearly/yearly/every28Days/other) */
    string | undefined
    rentInstalmentsAmount?: /** The amount due for each rent instalment (where specified) */
    number | undefined
    rentInstalmentsStart?: /** The date that the first instalment is due */
    string | undefined
    meterReadingGas?: /** The recorded utility reading for the gas meter */
    string | undefined
    meterReadingGasLastRead?: /** Date of when the reading of gas utility was last recorded */
    string | undefined
    meterReadingElectricity?: /** The recorded utility reading for the electricity meter */
    string | undefined
    meterReadingElectricityLastRead?: /** Date of when the reading of electricity utility was last recorded */
    string | undefined
    meterReadingWater?: /** The recorded utility reading for the water meter */
    string | undefined
    meterReadingWaterLastRead?: /** Date of when the reading of water utility was last recorded */
    string | undefined
    isPeriodic?: /** A flag determining whether or not the tenancy has been extended indefinitely */
    boolean | undefined
    typeId: /** The unique identifier of the type of tenancy */ string
    negotiatorId: /** The unique identifier of the negotiator who is managing the tenancy */
    string
    propertyId: /** The unique identifier of the property that relates to the tenancy */
    string
    applicantId: /** The unique identifier of the applicant who has applied to be a tenant */
    string
    feeNotes?: /** Financial notes set against the tenancy */ string | undefined
    lettingFee?: /** Request body used to set letting fees on a new tenancy */
    | {
          type?: /** The letting fee type (percentage/fixed) */
          string | undefined
          amount?: /** The fee amount */ number | undefined
          frequency?: /** The frequency of when the fee is to be collected (upfront/upfrontOver2Months/monthly/quarterly/halfYearly/yearly/28days/other/notApplicable) */
          string | undefined
        }
      | undefined
    managementFee?: /** Request body used to set management fees on a new tenancy */
    | {
          type?: /** The management fee type (percentage/fixed) */
          string | undefined
          amount?: /** The fee amount */ number | undefined
          frequency?: /** The frequency of when the fee is to be collected (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
          string | undefined
        }
      | undefined
    deposit?: /** Request body used to set the deposit of a new tenancy */
    | {
          heldBy?: /** The deposit holder (depositProtectionScheme/stakeholder/landlordsAgent/landlord/notApplicable) */
          string | undefined
          period?: /** The number of weeks or months rent collected as the deposit on the tenancy */
          number | undefined
          type?: /** The type of deposit (weeksRent/monthsRent/fixedSum/guarantee) */
          string | undefined
          sum?: /** The amount of deposit held */ number | undefined
        }
      | undefined
    source?: /** Request body used to set the source of a new tenancy */
    | {
          id?: /** The unique identifier of the source for the tenancy */
          string | undefined
          type?: /** The source type (office/source) */ string | undefined
        }
      | undefined
    metadata?: /** App specific metadata to set against the tenancy */
    Record<string, Record<string, never>> | undefined
  }
}
export type useCreateTenancyCheckArgs = {
  id: string
  body: /** Request body used to create a new tenancy check */
  {
    description?: /** Short, descriptive text describing the purpose of the check. This should be populated
when creating a custom tenancy check that does not match any of the existing pre-configured
tenancy check options.
Description and CheckTypeId must not be supplied in the same payload, but at least one must be provided */
    string | undefined
    type: /** The type of the tenancy check (preTenancy/postTenancy) */ string
    status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
    string
    checkTypeId?: /** The identifier of the pre-configured tenancy check. This should be populated
when an existing tenancy check configuration is desired, rather than a custom one
CheckTypeId and Description must not be supplied in the same payload, but at least one must be provided */
    string | undefined
    metadata?: /** App specific metadata to set against the tenancy check */
    Record<string, Record<string, never>> | undefined
  }
}
export type useCreateTenancyBreakClauseArgs = {
  id: string
  body: /** Request body used to update tenancy break clause */
  {
    typeId?: /** The identifier of the associated to the break clause */
    string | undefined
    active?: /** The date the break clause becomes/became active */
    string | undefined
    appliesTo?: /** The responsible party (landlord/tenant/mutual) */
    string | undefined
    agreements?: /** Request body used to set party agreements to a specific clause in a tenancy agreement */
    | {
          landlord?: /** A flag to determine if the landlord has agreed */
          boolean | undefined
          tenant?: /** A flag to determine if the tenant has agreed */
          boolean | undefined
        }
      | undefined
    breakFrom?: /** Request body used to set a break clauses break from details */
    | {
          date?: /** The date the break from clause can be used */
          string | undefined
          minTermMonths?: /** The minimum number of months until the break clause can be used */
          number | undefined
        }
      | undefined
    noticeRequired?: /** Request body used to set a break clauses notice required details */
    | {
          date?: /** The date a break clauses notice is required by */
          string | undefined
          beforeBreakMonths?: /** The number of months the notice is required before the break clause */
          number | undefined
        }
      | undefined
  }
}
export type useCreateTenancyAllowanceArgs = {
  id: string
  body: /** Request body used to set a tenancy allowance */
  {
    typeId?: /** The identifier of the associated to the allowance */
    string | undefined
    state?: /** The state of the allowance (allowed/notAllowed) */
    string | undefined
    agreements?: /** Request body used to set party agreements to a specific clause in a tenancy agreement */
    | {
          landlord?: /** A flag to determine if the landlord has agreed */
          boolean | undefined
          tenant?: /** A flag to determine if the tenant has agreed */
          boolean | undefined
        }
      | undefined
  }
}
export type useCreateTenancyResponsibilityArgs = {
  id: string
  body: /** Request body used to set a tenancy responsibility */
  {
    typeId?: /** The identifier of the associated to the responsibility */
    string | undefined
    appliesTo?: /** The responsible party (landlord/tenant) */
    string | undefined
    agreements?: /** Request body used to set party agreements to a specific clause in a tenancy agreement */
    | {
          landlord?: /** A flag to determine if the landlord has agreed */
          boolean | undefined
          tenant?: /** A flag to determine if the tenant has agreed */
          boolean | undefined
        }
      | undefined
  }
}
export type useCreateTenancyRenewalNegotiationArgs = {
  id: string
  body: /** Request body used to create a tenancy renewal negotiation */
  {
    startDate?: /** The proposed start date of the tenancy renewal */
    string | undefined
    endDate?: /** The proposed end date of the tenancy renewal */
    string | undefined
    negotiatorId?: /** The unique identifier of the negotiator who is managing this tenancy renewal */
    string | undefined
    rent?: /** The amount of rent required, returned in relation to the collection frequency */
    number | undefined
    rentFrequency?: /** The rent collection frequency (weekly/monthly/annually) */
    string | undefined
    lettingFee?: /** Request body used to create a tenancy renewals letting fee */
    | {
          type?: /** The letting fee type (fixed/perentage) */
          string | undefined
          amount?: /** The letting fee amount as a fixed price or percentage based on the `type` */
          number | undefined
          frequency?: /** The frequency at which the letting fee is required (monthly/quarterly/halfYearly/yearly/28days/upfront/upfrontOver2Months/other/notApplicable) */
          string | undefined
        }
      | undefined
    managementFee?: /** Request body used to create a tenancy renewals management fee */
    | {
          type?: /** The mangement fee type (fixed/perentage) */
          string | undefined
          amount?: /** The mangement fee amount as a fixed price or percentage based on the `type` */
          number | undefined
          frequency?: /** The frequency at which the mangement fee is required (monthly/quarterly/halfYearly/yearly/28days/sameAsLettingFee) */
          string | undefined
        }
      | undefined
  }
}
export type useCreateTenancyRenewalNegotiationCheckArgs = {
  id: string
  renewalId: string
  body: /** Request body used to create a new tenancy renewal check */
  {
    status: /** The status of the tenancy check (needed/notNeeded/arranging/completed) */
    string
    checkTypeId?: /** The identifier of the pre-configured tenancy check. This will only be populated
for pre-configured tenancy checks, and not for custom/ad-hoc checks added to individual tenancies */
    string | undefined
    description?: /** The name of this tenancy check */ string | undefined
    metadata?: /** App specific metadata to set against the tenancy renewal check */
    Record<string, Record<string, never>> | undefined
  }
}

const createTenancyFn = async (args: useCreateTenancyArgs) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/tenancies/`, {
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

export const useCreateTenancy = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const createTenancyCheckFn = async (args: useCreateTenancyCheckArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/checks`,
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

export const useCreateTenancyCheck = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyCheckFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const createTenancyBreakClauseFn = async (
  args: useCreateTenancyBreakClauseArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/breakClauses`,
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

export const useCreateTenancyBreakClause = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyBreakClauseFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const createTenancyAllowanceFn = async (
  args: useCreateTenancyAllowanceArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/allowances`,
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

export const useCreateTenancyAllowance = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyAllowanceFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const createTenancyResponsibilityFn = async (
  args: useCreateTenancyResponsibilityArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/responsibilities`,
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

export const useCreateTenancyResponsibility = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyResponsibilityFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const createTenancyRenewalNegotiationFn = async (
  args: useCreateTenancyRenewalNegotiationArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/renewalNegotiations`,
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

export const useCreateTenancyRenewalNegotiation = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyRenewalNegotiationFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}

const createTenancyRenewalNegotiationCheckFn = async (
  args: useCreateTenancyRenewalNegotiationCheckArgs
) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/tenancies/${args.id}/renewalNegotiations/${args.renewalId}/checks`,
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

export const useCreateTenancyRenewalNegotiationCheck = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createTenancyRenewalNegotiationCheckFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Tenancies'] })
    }
  })
}
