import { IQA } from 'Interfaces/Database/blog';

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'امتیاز سن در ویزای اسکیل ورکر چقدر است؟',
      acceptedAnswer: {
        '@type': 'Answer',
        text: ` <table>
        <thead>
          <tr>
            <th>۱۸ تا ۲۴ سال</th>
            <th>۲۵ تا ۳۲ سال</th>
            <th>۳۳ تا ۳۹ سال</th>
            <th>۴۰ تا ۴۴ سال</th>
            <th>45 به بالا</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>۲۵ امتیاز</td>
            <td>۳۰ امتیاز</td>
            <td>۲۵ امتیاز</td>
            <td>۱۵ امتیاز</td>
            <td>صفر امتیاز</td>
          </tr>
        </tbody>
      </table>`,
      },
    },
  ],
};

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
