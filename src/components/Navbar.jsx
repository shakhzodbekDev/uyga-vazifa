import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { TfiPlus } from "react-icons/tfi";
import { CiBellOn } from "react-icons/ci";
import Tags from "./Tags";

export default function Navbar() {
  return (
    <div className="">
      <div className="flex justify-between pl-96">
        <div className="flex gap-5">
          <form className="flex w-xl">
            <input
              type="text"
              className="w-full rounded-full rounded-r-none border border-gray-400 py-1.5 pl-4"
              placeholder="Введите запрос"
              required
            />
            <button
              type="submit"
              className="cursor-pointer rounded-r-full border border-l-0 border-gray-400 bg-[#f8f8f8] px-4 py-1.5 text-2xl hover:bg-[#f0f0f0]"
            >
              <CiSearch />
            </button>
          </form>
          <button
            type="button"
            className="cursor-pointer rounded-full bg-[#f2f2f2] p-3 hover:bg-[#d9d9d9]"
          >
            <FaMicrophone />
          </button>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="flex cursor-pointer items-center gap-3 rounded-full bg-[#f8f8f8] px-4 font-semibold hover:bg-[#e5e5e5]"
          >
            <TfiPlus />
            Создать
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-full px-2 text-2xl hover:bg-[#e5e5e5]"
          >
            <CiBellOn />
          </button>
          <img
            src="/channel_photo.jpg"
            alt="channel_photo"
            className="h-9 cursor-pointer rounded-full"
          />
        </div>
      </div>

      <Tags />
    </div>
  );
}
