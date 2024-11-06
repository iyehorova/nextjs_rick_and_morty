type Props = {
  isShow: boolean;
  shownText: string;
  hiddenText: string;
  onToggleClick: () => void;
};

export function AccordionControl({
  isShow,
  shownText,
  hiddenText,
  onToggleClick,
}: Props) {
  const EyesOpen = () => <img src="/img/icon-eyes.svg" alt="eyes open" />;
  const EyesClose = () => (
    <img src="/img/icon-close-eyes.svg" alt="eyes closed" />
  );

  return (
    <button onClick={onToggleClick} className="text-mute">
      {isShow ? (
        <span className="flex items-center gap-2">
          {hiddenText} <EyesOpen />
        </span>
      ) : (
        <span className="flex items-center gap-2">
          {shownText} <EyesClose />
        </span>
      )}
    </button>
  );
}
