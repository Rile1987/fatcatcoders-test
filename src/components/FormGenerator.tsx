import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import {
    useForm,
    FormProvider,
    SubmitHandler,
    useFormContext,
    FieldValues,
    FieldError,
    Path,
} from 'react-hook-form';
import { ZodSchema } from 'zod';

import { useApi } from '@homework-task/hooks/useApi';

interface FormGeneratorProps<TFormFields extends FieldValues> {
    validationSchema: ZodSchema<TFormFields>;
    onSubmitSuccess: (data: TFormFields) => void;
    renderForm: () => React.ReactNode;
    apiConfig: { url: string; method: string };
}

export function FormGenerator<TFormFields extends FieldValues>({
    validationSchema,
    onSubmitSuccess,
    renderForm,
    apiConfig,
}: FormGeneratorProps<TFormFields>) {
    const methods = useForm<TFormFields>({
        resolver: zodResolver(validationSchema),
    });

    const { mutate, isLoading, isError, isSuccess } = useApi<
        TFormFields,
        Error,
        TFormFields
    >(apiConfig, {
        onSuccess: (response) => {
            onSubmitSuccess(response.data as TFormFields);
        },
    });

    const handleSubmit: SubmitHandler<TFormFields> = (data) => {
        mutate(data);
    };

    return (
        <FormProvider {...methods}>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <form onSubmit={methods.handleSubmit(handleSubmit)}>
                {renderForm()}
                {isLoading && <p>Submitting...</p>}
                {isError && <p>Error submitting form</p>}
                {isSuccess && <p>Form submitted successfully</p>}
            </form>
        </FormProvider>
    );
}

type FieldType = 'input' | 'textarea';

interface FormFieldProps<TFormFields extends FieldValues> {
    name: keyof TFormFields;
    label: string;
    fieldType?: FieldType;
}

export function FormField<TFormFields extends FieldValues>({
    name,
    label,
    fieldType = 'input',
}: FormFieldProps<TFormFields>) {
    const {
        register,
        formState: { errors },
    } = useFormContext<TFormFields>();
    const errorMessage = errors[name] as FieldError | undefined;

    const inputClasses =
        'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline';
    const labelClasses = 'block text-gray-700 text-sm font-bold mb-2';
    const errorClasses = 'text-red-500 text-xs italic';

    return (
        <div className="mb-4">
            <label htmlFor={name as string} className={labelClasses}>
                {label}
            </label>
            {fieldType === 'input' && (
                <input
                    id={name as string}
                    {...register(name as Path<TFormFields>)}
                    className={`${inputClasses} ${
                        errorMessage ? 'border-red-500' : ''
                    }`}
                />
            )}
            {fieldType === 'textarea' && (
                <textarea
                    id={name as string}
                    {...register(name as Path<TFormFields>)}
                    className={`${inputClasses} ${
                        errorMessage ? 'border-red-500' : ''
                    }`}
                />
            )}
            {errorMessage && (
                <p className={errorClasses}>{errorMessage.message}</p>
            )}
        </div>
    );
}
