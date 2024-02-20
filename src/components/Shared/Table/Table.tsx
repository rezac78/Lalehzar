import { TableHead } from "../../../Event/Event"
import DeleteButton from "../ButtonDelete/ButtonDelete";
import { Menu } from '../../../types/auth';
import { PencilIcon, CheckCircleIcon, MinusCircleIcon } from "@heroicons/react/24/solid";
import PartLink from "../PartLink/PartLink";
interface TableProps {
        data: Menu[];
        type: 'course' | 'blog';
        onItemDelete: (itemId: string) => void;
}
export default function Table({ data, type, onItemDelete }: TableProps) {
        if (data.length === 0) {
                return (
                        <div className="text-center my-4">
                                <p className="text-lg text-gray-500">مقداری وارد نشده است</p>
                        </div>
                );
        }
        const renderCoursesTable = () => (
                <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-200">
                                <tr>
                                        {TableHead.map((e, i) => (
                                                <th key={e.Title} scope="col" className="px-6 py-3 text-right text-xs font-medium text-dark-gray uppercase">
                                                        {e.Title}
                                                </th>
                                        ))}
                                </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                                {data.map((menu: any) => (
                                        <tr key={menu._id}>
                                                {Object.keys(menu).map(key => {
                                                        if (key !== '_id' && key !== '__v') {
                                                                return (
                                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-dark-gray max-w-xs truncate">
                                                                                {menu[key] === true ? <CheckCircleIcon className="text-green-600" width={20} height={20} /> : menu[key] === false ? <MinusCircleIcon className="text-red-600" width={20} height={20} /> : menu[key]}
                                                                        </td>
                                                                );
                                                        }
                                                        return null;
                                                })}
                                                <td className="px-6 py-4 whitespace-nowrap flex text-sm font-medium">
                                                        <PartLink IdName="PencilIcon" className="text-blue-600 hover:text-blue-800 p-2" Href={`/admin/update/menu/${menu._id}`}>
                                                                <PencilIcon width={20} height={20} />
                                                        </PartLink>
                                                        <DeleteButton onDelete={() => onItemDelete(menu._id)} />
                                                </td>
                                        </tr>
                                ))}
                        </tbody>
                </table>
        );
        return (
                <>
                        {renderCoursesTable()}
                </>
        )
}