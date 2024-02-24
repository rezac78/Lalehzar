import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { settingsEmailSchema } from '../../../schema/schema';
import { useRouter } from 'next/router';
import { UpdateUserEmail } from '@/services/SettingsService';
import PartInputs from '@/components/Shared/PartInputs/PartInputs';
import PartButton from '@/components/Shared/PartButton/PartButton';
interface DashSettingProps {
        initialData: any;
        Message: (value: boolean) => void;
        SuccessMessage: (value: boolean) => void;
        Success: (value: string) => void;
}
export default function ChangEmailSetting({ initialData, Message, SuccessMessage, Success }: DashSettingProps) {
        const { register, handleSubmit, formState: { errors } } = useForm({
                resolver: yupResolver(settingsEmailSchema),
                defaultValues: initialData || {}
        });
        const router = useRouter();
        const token = localStorage.getItem("token");
        const onSubmit = async (data: any) => {
                const updateData = {
                        ...data,
                        userId: initialData._id
                };
                try {
                        const response = await UpdateUserEmail(updateData, token);
                        SuccessMessage(response.success);
                        Success(response.message);
                        Message(true);
                        setTimeout(() => {
                                Message(false);
                                localStorage.removeItem("token");
                                router.push('/auth/login');
                        }, 4000);
                } catch (error) {
                        console.error('Error:', error);
                }
        };

        return (
                <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                        <PartInputs value={initialData?.['email']} Type="auth" IdName={'email'} LabelName={'ایمیل'} type={'email'} Register={register} Errors={errors} />
                        <div className="text-right mt-4">
                                <PartButton className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                                        تغیر ایمیل
                                </PartButton>
                        </div>
                </form>
        );
};
