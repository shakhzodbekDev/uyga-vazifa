import { TbDotsVertical } from "react-icons/tb";

export default function VideoWrapper() {
  return (
    <div className="mt-10 grid grid-cols-4 grid-rows-1 gap-x-4">
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}

function Video() {
  return (
    <a href="#">
      <img
        src="/video_thumbnail.webp"
        alt="video thumbnail"
        className="rounded-lg"
      />

      <div className="mt-2 flex justify-between">
        <img
          src="/channel_photo.jpg"
          alt="channel photo"
          className="h-10 rounded-full"
        />

        <div className="max-w-[300px]">
          <h3 className="font-semibold">
            Я создал одинаковое приложение на 3 веб-фреймворках | Какой
            оказался...
          </h3>
          <p className="text-[#606060]">ZPoger [IT]</p>
          <p className="text-[#606060]">100 тыс. просмотров • 4 дня назад</p>
        </div>

        <TbDotsVertical className="text-2xl" />
      </div>
    </a>
  );
}
