interface CrisisAlertProps {
  show: boolean;
}

export default function CrisisAlert({ show }: CrisisAlertProps) {
  if (!show) return null;

  return (
    <div className="mx-4 mb-3 bg-red-900/30 border border-red-500/40 rounded-2xl p-4">
      <p className="text-xs font-bold text-red-400 mb-2">
        🆘 If you are in immediate danger, please reach out:
      </p>
      <div className="flex flex-col gap-1.5">
        <a
          href="tel:+254722178177"
          className="text-xs text-white font-bold hover:text-red-300 transition-colors"
        >
          📞 Befrienders Kenya: +254 722 178 177
        </a>
        <a
          href="tel:+254202012498"
          className="text-xs text-white font-bold hover:text-red-300 transition-colors"
        >
          🏥 Mathare Hospital Emergency: +254 20 2012498
        </a>
      </div>
    </div>
  );
}
