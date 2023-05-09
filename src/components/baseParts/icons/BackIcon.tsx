type Props = {
  className?: string;
};

export const BackIcon = ({ className }: Props) => {
  return (
    <svg
      width="22"
      height="8"
      viewBox="0 0 22 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8.26528e-07 4L6 8L6 9.53674e-07L8.26528e-07 4Z"
        fill="#979B9A"
      />
      <path d="M22 4L6 4" stroke="#979B9A" />
    </svg>
  );
};
