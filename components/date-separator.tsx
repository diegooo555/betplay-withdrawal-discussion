export function DateSeparator({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center my-3 px-3">
      <span
        className="
          rounded-lg px-3 py-[3px]
          text-[12.5px] font-medium text-[#d1d7db]
          shadow-sm select-none
        "
        style={{ backgroundColor: "rgba(17, 45, 59, 0.82)" }}
      >
        {label}
      </span>
    </div>
  )
}
