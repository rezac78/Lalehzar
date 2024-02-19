// components/shared/buttonDelete/buttonDelete.tsx
import React from 'react';
import { TrashIcon } from "@heroicons/react/24/solid";
import PartButton from '../PartButton/PartButton';
interface DeleteButtonProps {
  onDelete: () => void;
}

export default function DeleteButton({ onDelete }: DeleteButtonProps) {
  return (
    <PartButton IdName="onDelete" className='text-red-600 hover:text-red-900' Click={onDelete} >
      <TrashIcon width={20} height={20} />
    </PartButton>
  );
}
