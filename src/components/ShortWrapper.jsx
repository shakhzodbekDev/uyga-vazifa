import { TbDotsVertical } from "react-icons/tb";

export default function ShortWrapper() {
  return (
    <div>
      <h2 className="mt-10 flex items-center gap-1 text-2xl font-bold">
        <img src="/shorts.png" alt="shorts" /> Shorts
      </h2>

      <div className="grid grid-cols-6 grid-rows-1 gap-x-4 mt-5">
        <Short />
        <Short />
        <Short />
        <Short />
        <Short />
        <Short />
      </div>
    </div>
  );
}

function Short() {
  return (
    <a href="#">
      <img src="short_thumbnail.webp" alt="short thumbnail" className="rounded-lg" />

      <div className="flex items-center">
        <h3 className="font-semibold mt-2">Junior vs senior python developer 🐍 | #pytho...</h3>
        <TbDotsVertical className="text-3xl" />
      </div>

      <p className="text-[#606060]">100 тыс. просмотров</p>
    </a>
  );
}
