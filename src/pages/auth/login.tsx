import LoginPart from '@/components/PartLogin/PartLogin';
import Alerts from '@/components/Shared/Alert/Alert';
import { useState } from 'react';

export default function LoginPage() {
    const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
    const [numberSuccessMessage, setNumberSuccessMessage] = useState<boolean>();
    const [SuccessMessage, setSuccessMessage] = useState<string>();
    console.log(showSuccessMessage)
    console.log(numberSuccessMessage)
    console.log(SuccessMessage)
    return (
        <div className="flex items-center justify-center min-h-screen bg-backgroundColor">
            {showSuccessMessage && <Alerts Message={SuccessMessage} type={numberSuccessMessage} />}
            <LoginPart Message={setShowSuccessMessage} SuccessMessage={setNumberSuccessMessage} Success={setSuccessMessage} />
        </div>
    );
};