export function getDateFromString(dateFromServer: string): string {
  const date = new Date(dateFromServer);

  return `${date.toLocaleDateString('en-EN', { month: 'long', day: '2-digit', year: 'numeric' })}`;
}
