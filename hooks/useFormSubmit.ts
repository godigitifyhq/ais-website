/**
 * React hooks for form submission to AIS Jobs backend
 */

import { useState, useCallback } from 'react'
import { apiClient, ApiResponse, ContactFormPayload, EnquiryFormPayload } from '@/lib/api-client'

interface UseFormSubmitState {
  isLoading: boolean
  isSuccess: boolean
  error: string | null
  data: any | null
}

/**
 * Hook for contact form submission
 */
export function useContactSubmit() {
  const [state, setState] = useState<UseFormSubmitState>({
    isLoading: false,
    isSuccess: false,
    error: null,
    data: null,
  })

  const submit = useCallback(async (data: ContactFormPayload) => {
    setState({ isLoading: true, isSuccess: false, error: null, data: null })
    
    try {
      const response = await apiClient.submitContact(data)
      
      if (response.success) {
        setState({
          isLoading: false,
          isSuccess: true,
          error: null,
          data: response.data,
        })
        return response
      } else {
        setState({
          isLoading: false,
          isSuccess: false,
          error: response.error || 'Failed to submit form',
          data: null,
        })
        return response
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error'
      setState({
        isLoading: false,
        isSuccess: false,
        error: errorMsg,
        data: null,
      })
      return { success: false, error: errorMsg }
    }
  }, [])

  const reset = useCallback(() => {
    setState({ isLoading: false, isSuccess: false, error: null, data: null })
  }, [])

  return { ...state, submit, reset }
}

/**
 * Hook for enquiry form submission
 */
export function useEnquirySubmit() {
  const [state, setState] = useState<UseFormSubmitState>({
    isLoading: false,
    isSuccess: false,
    error: null,
    data: null,
  })

  const submit = useCallback(async (data: EnquiryFormPayload) => {
    setState({ isLoading: true, isSuccess: false, error: null, data: null })
    
    try {
      const response = await apiClient.submitEnquiry(data)
      
      if (response.success) {
        setState({
          isLoading: false,
          isSuccess: true,
          error: null,
          data: response.data,
        })
        return response
      } else {
        setState({
          isLoading: false,
          isSuccess: false,
          error: response.error || 'Failed to submit form',
          data: null,
        })
        return response
      }
    } catch (error) {
      const errorMsg = error instanceof Error ? error.message : 'Unknown error'
      setState({
        isLoading: false,
        isSuccess: false,
        error: errorMsg,
        data: null,
      })
      return { success: false, error: errorMsg }
    }
  }, [])

  const reset = useCallback(() => {
    setState({ isLoading: false, isSuccess: false, error: null, data: null })
  }, [])

  return { ...state, submit, reset }
}

/**
 * Generic form submission hook
 */
export function useFormSubmit(formType: 'contact' | 'enquiry') {
  if (formType === 'contact') {
    return useContactSubmit()
  }
  return useEnquirySubmit()
}
