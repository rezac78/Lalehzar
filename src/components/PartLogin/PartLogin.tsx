import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidationSchema } from '../../schema/schema';
import { InputLogin } from '@/Event/Event';
import PartInputs from '@/components/Shared/PartInputs/PartInputs';
import PartButton from '@/components/Shared/PartButton/PartButton';
import { useRouter } from "next/router";
import { LoginReq } from '@/services/authService';
interface LoginPartProps {
    Message: (value: boolean) => void;
    SuccessMessage: (value: boolean) => void;
    Success: (value: string) => void;
}
export default function LoginPart(props: LoginPartProps) {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginValidationSchema)
    });
    const router = useRouter();

    const onSubmit = async (data: any) => {
        try {
            const response = await LoginReq(data);
            props.SuccessMessage(response.success);
            props.Success(response.message);
            props.Message(true);
            localStorage.setItem('token', response.token);
            if (response.token) {
                router.push("/admin/dashboard");
            }
            setTimeout(() => {
                props.Message(false);
            }, 5000);

        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="px-8 py-6 mt-4 text-left bg-cardBackgroundColor shadow-lg">
            <h3 className="text-2xl font-bold text-center">ورود</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4">
                    <div>
                        {InputLogin.map((e) => (
                            <PartInputs type={e.type} Register={register} Errors={errors} key={e.id} IdName={e.IdName} LabelName={e.LabelName} Type={'auth'} />
                        ))}
                    </div>
                    <div className="flex justify-end">
                        <PartButton className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">ورود</PartButton>
                    </div>
                </div>
            </form>
        </div>
    );
};