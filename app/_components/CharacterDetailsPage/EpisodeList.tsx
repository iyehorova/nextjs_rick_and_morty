import { AccordionItem } from '../Accordion/AccordionItem';
import { EpisodeItem } from './EpisodeItem';

type Props = {
  episodesUrl: string[];
};

export function EpisodeList({ episodesUrl }: Props) {
  return (
    <>
      {episodesUrl.map(url => (
        <AccordionItem key={url} className="h-8 w-8">
          <EpisodeItem url={url} />
        </AccordionItem>
      ))}
    </>
  );
}
