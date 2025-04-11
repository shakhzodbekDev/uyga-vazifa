export default function Tags() {
  return (
    <div className="flex gap-3 mt-3">
      <Tag title="Все" active />
      <Tag title="Видеоигры" />
      <Tag title="Музыка" />
      <Tag title="Сейчас в эфире" />
      <Tag title="Джемы" />
      <Tag title="Экшен и приключения" />
      <Tag title="Анимация" />
      <Tag title="Недавно опубликованные" />
      <Tag title="Просмотрено" />
      <Tag title="Новое для вас" />
    </div>
  );
}

function Tag({ title, active }) {
  return (
    <button
      className={`cursor-pointer rounded-lg px-3 py-1 transition ${active ? "bg-[#030303] text-white" : "bg-[#f2f2f2] hover:bg-[#e5e5e5]"}`}
    >
      {title}
    </button>
  );
}
