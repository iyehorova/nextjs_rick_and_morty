type Props = {
  fill: string;
  width: string;
  height: string;
};
export function IconClear({ fill, width, height }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0.906173C0 1.43951 1.33333 3.17284 2.93333 4.90617L5.73333 7.97284L2.66667 11.3062C-1.46667 15.5728 0.4 17.4395 4.66667 13.3062L8 10.2395L11.3333 13.3062C15.6 17.4395 17.4667 15.5728 13.3333 11.3062L10.2667 7.97284L13.3333 4.63951C17.4667 0.372839 15.6 -1.49383 11.3333 2.63951L8 5.70617L4.93333 2.90617C1.73333 -0.0271607 0 -0.827161 0 0.906173Z"
        fill={fill}
      />
    </svg>
  );
}
