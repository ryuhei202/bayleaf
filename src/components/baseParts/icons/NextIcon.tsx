type Props = {
  className?: string;
};

export const NextIcon = ({ className }: Props) => {
  return (
    <svg
      width="22"
      height="8"
      viewBox="0 0 22 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M22 4L16 0L16 8L22 4Z" fill="#979B9A" />
      <path d="M0 4L16 4" stroke="#979B9A" stroke-width="2" />
    </svg>
  );
};
