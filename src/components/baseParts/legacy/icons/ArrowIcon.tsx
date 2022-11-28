type Props = {
  className?: string;
};

export const ArrowIcon = ({ className }: Props) => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      className={`${className ?? ""} stroke-current fill-transparent`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4167 32.75L14.6667 25L22.4167 32.75ZM14.6667 25L22.4167 17.25L14.6667 25ZM14.6667 25H35.3333H14.6667ZM1.75 25C1.75 21.9468 2.35138 18.9234 3.5198 16.1026C4.68822 13.2818 6.4008 10.7187 8.55977 8.55977C10.7187 6.40081 13.2818 4.68822 16.1026 3.5198C18.9234 2.35138 21.9468 1.75 25 1.75C28.0532 1.75 31.0766 2.35138 33.8974 3.5198C36.7182 4.68822 39.2813 6.40081 41.4402 8.55977C43.5992 10.7187 45.3118 13.2818 46.4802 16.1026C47.6486 18.9234 48.25 21.9468 48.25 25C48.25 31.1663 45.8004 37.08 41.4402 41.4402C37.08 45.8004 31.1663 48.25 25 48.25C18.8337 48.25 12.92 45.8004 8.55977 41.4402C4.19955 37.08 1.75 31.1663 1.75 25V25Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};