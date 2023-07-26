type AvartarSize = "sm" | "md" | "lg";

type Props = {
  image?: string | null;
  size?: AvartarSize;
  highlight?: boolean;
};

export default function Avartar({
  image,
  size = "lg",
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

function getContainerStyle(size: AvartarSize, highlight: boolean): string {
  const baseStyle = "rounded-full flex justify-center items-center";
  const highlightStyle = highlight
    ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
    : "";
  const sizeStyle = getContainerSize(size);
  return `${baseStyle} ${highlightStyle} ${sizeStyle}`;
}

function getContainerSize(size: AvartarSize): string {
  switch (size) {
    case "sm":
      return "w-9 h-9";
    case "md":
      return "w-11 h-11";
    case "lg":
      return "w-[68px] h-[68px]";
  }
}

function getImageSizeStyle(size: AvartarSize): string {
  switch (size) {
    case "sm":
      return "w-[34px] h-[34px] p-[0.1rem] ";
    case "md":
      return "w-[42px] h-[42px] p-[0.2rem] ";
    case "lg":
      return "w-16 h-16 p-[0.2rem]";
  }
}
