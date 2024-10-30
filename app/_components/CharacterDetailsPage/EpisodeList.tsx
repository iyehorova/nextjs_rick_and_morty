import { AccordionItem } from '../Accordion/AccordionItem';
import { EpisodeItem } from './EpisodeItem';

type Props = {
  episodesUrl: string[];
};

export function EpisodeList({ episodesUrl }: Props) {
  return (
    <>
      {episodesUrl.map(url => (
        <AccordionItem key={url}>
          <EpisodeItem url={url} />
        </AccordionItem>
      ))}
    </>
  );
}
