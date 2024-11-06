import { Menu } from './_components/Menu';
import { DragCards } from './_components/HomePage/DragCards';
import { AnimatedArrowButton } from './_components/HomePage/AnimatedArrowButton';

export default function Page() {
  return (
    <div className="home-bg">
      <div className="absolute z-[110] w-full">
        <Menu />
      </div>

      <DragCards />
      <AnimatedArrowButton />
    </div>
  );
}
