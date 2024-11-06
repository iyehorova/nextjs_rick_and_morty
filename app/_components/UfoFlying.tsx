type Props = {
  className: string;
};

export function UfoFlying({ className }: Props) {
  return (
    <video autoPlay className={className} style={{ pointerEvents: 'none' }}>
      <source src="/img/ufo.webm" type="video/webm" />
    </video>
  );
}
