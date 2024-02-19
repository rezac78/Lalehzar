import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { menuSchema } from '../../../schema/schema';
import { InputForm } from "@/Event/Event";
import { MenuReq } from '@/services/MenuService';
import { useRouter } from 'next/router';
import PartInputs from '@/components/Shared/PartInputs/PartInputs';
import PartButton from '@/components/Shared/PartButton/PartButton';
import ToggleButton from '@/components/Shared/ToggleButton/ToggleButton';
import HashtagManager from '@/components/Shared/HashtagManager/HashtagManager';
interface MenuFormProps {
  Message: (value: boolean) => void;
  SuccessMessage: (value: boolean) => void;
  Success: (value: string) => void;
}
export default function MenuForm(props: MenuFormProps) {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm({
    resolver: yupResolver(menuSchema),
  });
  const [available, setAvailable] = useState<boolean>(true);
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [newHashtag, setNewHashtag] = useState('');

  const toggleAvailable = () => {
    setAvailable(!available);
    setValue("available", !available);
  };
  const addHashtag = () => {
    const value = newHashtag.trim();
    if (value && !hashtags.includes(value)) {
      setHashtags([...hashtags, value]);
      setValue('hashtags', [...hashtags, value]); 
      setNewHashtag('');
    }
  };
  const handleRemoveHashtag = (hashtagToRemove: string) => {
    const updatedHashtags = hashtags.filter(hashtag => hashtag !== hashtagToRemove);
    setHashtags(updatedHashtags);
    setValue('hashtags', updatedHashtags); 
  };
  const router = useRouter();
  const onSubmit = async (data: any) => {
    const token = localStorage.getItem("token");
    try {
      const response = await MenuReq(data, token);
      props.SuccessMessage(response.success);
      props.Success(response.message);
      props.Message(true);
      setTimeout(() => {
        props.Message(false);
      }, 5000);
      router.push("/admin/dashboard");
      reset();
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4">
      <div className="flex-1 p-4 shadow rounded-lg">
        {InputForm.map((e) => (
          <PartInputs Type="form" key={e.id} IdName={e.IdName} LabelName={e.LabelName} type={e.type} Register={register} Errors={errors} />
        ))}
        <HashtagManager Errors={errors} hashtags={hashtags} setNewHashtag={setNewHashtag} newHashtag={newHashtag} addHashtag={addHashtag} removeHashtag={handleRemoveHashtag} />
        <ToggleButton toggle={toggleAvailable} available={available} />
      </div>
      <div className="text-right mt-5">
        <PartButton className="inline-flex justify-center rounded-md border border-transparent bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          ساخت ایتم
        </PartButton>
      </div>
    </form>
  );
};
