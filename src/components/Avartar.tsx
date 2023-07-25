type Props = {
  image?: string | null;
  size?: "sm" | "md";
  highlight?: boolean;
};

export default function Avartar({
  image,
  size = "md",
  highlight = false,
}: Props) {
  return (
    <div className={getContainerStyle(size, highlight)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={`bg-white object-cover rounded-full ${getImageSizeStyle(
          size
        )}`}
        src={image ?? "/images/default.png"}
        alt="user profile"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function getContainerStyle(size: string, highlight: boolean): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const sizeStyle = size === "sm" ? "w-9 h-9" : "w-[68px] h-[68px]";
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getImageSizeStyle(size: string): string {
  return size === "sm"
    ? "w-[34px] h-[34px] p-[0.1rem] "
    : "w-16 h-16 p-[0.2rem]";
}
