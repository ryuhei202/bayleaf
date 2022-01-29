type Props = {
  className?: string;
};

export const ShortSleeveIcon = ({ className }: Props) => {
  return (
    <svg
      width="46"
      height="37"
      viewBox="0 0 46 37"
      className={`${className ?? ""} stroke-current fill-inherit`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11.2913 2.52611C13.9099 1.33337 18.1863 1.33337 18.1863 1.33337C18.1863 1.33337 19.2876 6.05659 23.6449 6.05659C28.0022 6.05659 29.2471 1.33337 29.2471 1.33337C29.2471 1.33337 33.4128 1.33337 36.3337 2.52611C39.2545 3.71884 45.0003 9.87334 45.0003 9.87334L39.6375 15.3599L36.3337 11.8771C34.6099 31.0563 37.818 31.8673 37.818 35.1593C37.818 37.6173 30.0452 33.7957 15.2473 34.871C14.278 34.9795 13.249 35.0768 12.1532 35.1593C9.85484 25.2357 12.9193 20.8942 11.2913 11.8771L6.40732 16.0278L1.66699 10.589C1.66699 10.589 7.93955 4.0528 11.2913 2.52611Z" />
      <path
        d="M12.1532 35.1593C9.85484 25.2357 12.9193 20.8942 11.2913 11.8771L6.40732 16.0278L1.66699 10.589C1.66699 10.589 7.93955 4.0528 11.2913 2.52611C13.9099 1.33337 18.1863 1.33337 18.1863 1.33337C18.1863 1.33337 19.2876 6.05659 23.6449 6.05659C28.0022 6.05659 29.2471 1.33337 29.2471 1.33337C29.2471 1.33337 33.4128 1.33337 36.3337 2.52611C39.2545 3.71884 45.0003 9.87334 45.0003 9.87334L39.6375 15.3599L36.3337 11.8771C34.6099 31.0563 37.818 31.8673 37.818 35.1593M12.1532 35.1593C28.9598 33.2509 37.818 37.7833 37.818 35.1593M12.1532 35.1593C22.9267 34.3482 27.2361 32.1059 31.9764 31.8673C36.7167 31.6288 37.818 33.5849 37.818 35.1593"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
};
