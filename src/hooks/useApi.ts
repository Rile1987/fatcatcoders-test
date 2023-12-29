import axios, { AxiosRequestConfig } from 'axios';
import {
    useMutation,
    UseMutationOptions,
    UseMutationResult,
} from 'react-query';

export function useApi<TData, TError, TVariables = unknown>(
    config: AxiosRequestConfig,
    options?: UseMutationOptions<TData, TError, TVariables>
): UseMutationResult<TData, TError, TVariables> {
    return useMutation<TData, TError, TVariables>(
        (variables: TVariables) => axios({ ...config, data: variables }),
        options
    );
}
