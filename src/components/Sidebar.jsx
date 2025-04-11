import React from "react";

import { BiLike } from "react-icons/bi";
import { GoVideo } from "react-icons/go";
import { TfiCup } from "react-icons/tfi";
import { FaHistory } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { HiMiniSignal, HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import {
  RiArrowRightSLine,
  RiGamepadLine,
  RiSettings5Line,
} from "react-icons/ri";
import { IoMdHome, IoMdTime, IoIosArrowRoundDown } from "react-icons/io";
import {
  PiFoldersLight,
  PiFireSimple,
  PiMusicNotesThin,
  PiNewspaperClippingLight,
  PiLightbulbLight,
  PiCoatHangerLight,
  PiFlagBold,
  PiExclamationMarkLight,
} from "react-icons/pi";

export default function Sidebar() {
  return (
    <aside className="fixed h-screen max-w-3xs overflow-y-scroll px-5 pb-5">
      <div className="fixed flex w-50 items-center bg-white">
        <RxHamburgerMenu className="cursor-pointer rounded-full p-3 text-5xl hover:bg-[#e5e5e5]" />
        <a href="/" className="px-5">
          <img src="/logo.svg" alt="logo" className="h-5 w-24" />
        </a>
      </div>
      <div className="mt-15">
        <div className="mt-4">
          <SidebarItem icon={<IoMdHome />} title="Главная" active />
          <SidebarItem icon={<SiYoutubeshorts />} title="Shorts" />
          <SidebarItem icon={<PiFoldersLight />} title="Подписки" />
        </div>
        <Divider />
        <div>
          <a
            href="#"
            className="flex items-center gap-2 rounded-xl p-2.5 text-lg font-semibold hover:bg-[#f2f2f2]"
          >
            Вы <RiArrowRightSLine />
          </a>
          <SidebarItem icon={<FaHistory />} title="История" />
          <SidebarItem icon={<MdOutlinePlaylistPlay />} title="Плейлисты" />
          <SidebarItem icon={<GoVideo />} title="Ваши видео" />
          <SidebarItem icon={<IoMdTime />} title="Смотреть позже" />
          <SidebarItem icon={<BiLike />} title="Понравившиеся" />
        </div>
        <Divider />
        <div>
          <SidebarHeader title="Подписки" />
          <SidebarItem
            icon={<img src="channel_photo.jpg" alt="channel-photo" />}
            title="AsmrProg"
          />
          <SidebarItem
            icon={<img src="channel_photo1.jpg" alt="channel-photo" />}
            title="Beast Philanthropy"
          />
          <SidebarItem
            icon={<img src="channel_photo2.jpg" alt="channel-photo" />}
            title="Beast Reacts"
          />
          <SidebarItem
            icon={<img src="channel_photo3.jpg" alt="channel-photo" />}
            title="CodingNepal"
          />
          <SidebarItem
            icon={<img src="channel_photo4.jpg" alt="channel-photo" />}
            title="Frontend Lab"
          />
          <SidebarItem
            icon={<img src="channel_photo5.jpg" alt="channel-photo" />}
            title="MrBeast"
          />
          <SidebarItem
            icon={<img src="channel_photo6.jpg" alt="channel-photo" />}
            title="RED Group"
          />
          <SidebarItem icon={<IoIosArrowRoundDown />} title="Развернуть" />
        </div>
        <Divider />
        <div>
          <SidebarHeader title="Навигатор" />
          <SidebarItem icon={<PiFireSimple />} title="В тренде" />
          <SidebarItem icon={<PiMusicNotesThin />} title="Музыка" />
          <SidebarItem icon={<HiMiniSignal />} title="Трансляции" />
          <SidebarItem icon={<RiGamepadLine />} title="Видеоигры" />
          <SidebarItem icon={<PiNewspaperClippingLight />} title="Новости" />
          <SidebarItem icon={<TfiCup />} title="Спорт" />
          <SidebarItem icon={<PiLightbulbLight />} title="Обучение" />
          <SidebarItem icon={<PiCoatHangerLight />} title="Мода и красота" />
        </div>
        <Divider />
        <div>
          <SidebarHeader title="Другие возможности" />
          <SidebarItem
            icon={<img src="/youtube_studio.png" alt="youtube studio" />}
            title="Творческая студи..."
          />
          <SidebarItem
            icon={<img src="/kids_youtube.png" alt="kids youtube" />}
            title="YouTube Детям"
          />
        </div>
        <Divider />
        <div>
          <SidebarItem icon={<RiSettings5Line />} title="Настройки" />
          <SidebarItem icon={<PiFlagBold />} title="Жалобы" />
          <SidebarItem icon={<HiOutlineQuestionMarkCircle />} title="Справка" />
          <SidebarItem icon={<PiExclamationMarkLight />} title="Отправить отзыв" />
        </div>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, title, active }) {
  return (
    <a
      href="#"
      className={`flex items-center gap-4 rounded-xl p-2.5 ${
        active ? "hover:bg-[#e6e6e6]" : "hover:bg-[#f2f2f2]"
      } ${active ? "bg-[#f2f2f2]" : ""}`}
    >
      <span className="inline-block h-6 w-6">
        {React.cloneElement(icon, {
          className: `h-full w-full object-contain ${icon.type === "img" ? "rounded-full" : ""}`,
        })}
      </span>
      {title}
    </a>
  );
}

function SidebarHeader({ title }) {
  return <h1 className="mb-2 ml-3 font-bold">{title}</h1>;
}

function Divider() {
  return <div className="my-3 h-px w-full bg-[#e6e6e6]"></div>;
}
