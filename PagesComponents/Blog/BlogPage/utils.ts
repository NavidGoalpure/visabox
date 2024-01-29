import { IQA } from 'Interfaces/Database/blog';

export function getBlogStructuredData(
  qaPairs: IQA[] | undefined
): Record<string, any> | undefined {
  if (!qaPairs) return undefined;
  const qaArray: Array<any> = qaPairs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: answer,
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qaArray,
  };
}
