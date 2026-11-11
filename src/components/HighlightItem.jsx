import {
  LuBriefcase,
  LuCode,
  LuMapPin
} from "react-icons/lu";

export default function HighlightItem(
  { icon, label }
) {
  const icons = {
    code: <LuCode />,
    brief: <LuBriefcase />,
    map: <LuMapPin />,
  };

  return (
    <div className={`
      flex items-center
      gap-3
    `}>
      <div className={`
        p-4 rounded-lg text-primary
        bg-primary-muted border
        border-primary-dark-muted
      `}>
        {icons[icon]}
      </div>
      <strong>
        {label}
      </strong>
    </div>
  );
}