import { LuCode } from "react-icons/lu";

export default function Logo() {
  return (
    <div className={`
      flex gap-3
      items-center
    `}>
      <div className={`
        bg-primary
        text-black
        p-3 rounded-lg
      `}>
        <LuCode size={20} />
      </div>
      <div className={`
        
      `}>
        <strong>
          Moisés Isaac
        </strong>
        <p className="text-xs text-muted">
          Desenvolvedor
        </p>
      </div>
    </div>
  );
}