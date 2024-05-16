import { z } from 'zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useFetchError } from '@/lib/useFetchError.ts'

export type useCreateSupplierInvoiceArgs = {
  body: /** Request body used to create a new supplier invoice */
  {
    worksOrderId?: /** The unique identifier of the works order the supplier invoice is associated with, where applicable
Must be provided if propertyId/companyId/tenancyId are not present */
    string | undefined
    propertyId?: /** The unique identifier of the property the supplier invoice is associated with, where applicable
When providing a propertyId along with a worksOrderId, the id will be validated against the works order to check they match */
    string | undefined
    companyId?: /** The unique identifier of the contractor (company) the supplier invoice is associated with, where applicable
When providing a companyId along with a worksOrderId, the id will be validated against the works order to check they match */
    string | undefined
    tenancyId?: /** The unique identifier of the tenancy the supplier invoice is associated with, where applicable
When providing a tenancyId along with a worksOrderId, the id will be validated against the works order to check they match */
    string | undefined
    description: /** The supplier invoice work description */ string
    accountId: /** The identifier of the nominal account the supplier invoice should be attributed to */
    string
    invoiceRef: /** The invoice reference */ string
    negotiatorId: /** The unique identifier of the negotiator the invoice should be attributed to (normally the person creating it on the system) */
    string
    invoiceDate: /** The invoice date */ string
    dueDate?: /** The date the invoice should be paid by */ string | undefined
    netAmount: /** The invoice net amount */ number
    taxAmount: /** The invoice tax amount */ number
  }
}

const createSupplierInvoiceFn = async (args: useCreateSupplierInvoiceArgs) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/transactions/supplierInvoices`,
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

export const useCreateSupplierInvoice = () => {
  const queryClient = useQueryClient()
  const { handleFetchError } = useFetchError()

  return useMutation({
    mutationFn: createSupplierInvoiceFn,
    onError: handleFetchError,
    onSuccess: () => {
      // Invalidate and refetch
      void queryClient.invalidateQueries({ queryKey: ['Transactions'] })
    }
  })
}
