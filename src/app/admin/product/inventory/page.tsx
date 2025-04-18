import {
  MagnifyingGlassCircleIcon,
  PencilIcon,
  BookmarkSquareIcon,
  TrashIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
export const metadata = {
  title: "Tồn kho",
  description: "Sản phẩm tồn kho",
};

export default function Page() {
  return (
    <>
      <div className="p-4 bg-gray-100 flex justify-between items-center">
        <span className="text-xl">Home / Sản phẩm / Tồn kho</span>
      </div>
      <div className="bg-white mt-8 flex pl-4 py-4 items-center">
        <label className="mr-2">Nhóm sản phẩm:</label>
        <select
          id="cars"
          className="w-75 p-2 mr-10 border-2 border-solid border-gray-200"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <label className="mr-2">Tag sản phẩm:</label>
        <select
          id="cars"
          className="w-75 p-2 mr-10 border-2 border-solid border-gray-200"
        >
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <div className="border-2 border-solid border-gray-200 flex">
          <input className="p-1 w-70" />
          <button className="flex items-center pl-2 w-10 border-l-2 border-solid border-gray-200 ">
            <MagnifyingGlassCircleIcon className="w-5 h-5 text-black" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="px-4 py-3 bg-gray-100 border border-gray-300">
          Tất cả tồn kho
        </div>
        <table className="border-collapse border border-gray-400 bg-white w-full">
          <thead>
            <tr className="text-left">
              <th className="border border-gray-300">
                <input type="checkbox" />
              </th>
              <th className="border border-gray-300">Mã sản phẩm</th>
              <th className="border border-gray-300">Mã sản phẩm/SKU</th>
              <th className="border border-gray-300">Chính sách tồn kho</th>
              <th className="border border-gray-300 w-36">Số lượng</th>
              <th className="border border-gray-300 w-42">Cập nhật tồn kho</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300">
                <input type="checkbox" />
              </td>
              <td className="border border-gray-300"></td>
              <td className="border border-gray-300">Tên sản phẩm</td>
              <td className="border border-gray-300">Danh mục</td>
              <td className="border border-gray-300">Hình ảnh</td>
              <td className="border border-gray-300">Tồn kho</td>
            </tr>
          </tbody>
        </table>
        <div className="px-4 py-3 bg-gray-100 border border-gray-300">
          <span>Tổng 0 items.</span>
        </div>
      </div>
    </>
  );
}
