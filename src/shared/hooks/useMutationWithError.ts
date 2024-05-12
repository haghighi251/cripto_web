import { MutationFunction, useMutation, UseMutationOptions } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { ToastType } from '../components/Toast/Toast';
import { useToastContext } from '../components/Toast/ToastContextProvider';

export const useMutationWithError = <TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
    mutationFn: MutationFunction<TData, TVariables>,
    options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>
) => {
    const { t } = useTranslation('common');
    const mutation = useMutation(mutationFn, options);
    const { createToast } = useToastContext();

    useEffect(() => {
        if (mutation.error) {
            createToast({
                message: t('generic_mutation_error'),
                type: ToastType.Critical
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mutation.error]);

    return mutation;
};