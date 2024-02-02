import { ISanityTableValue } from 'Interfaces/Database/blog';
import { urlFor } from 'Utils/sanity';
import { ImageContainer, Images } from './styed-components';

export const CustomPortableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <ImageContainer>
          <Images
            fill
            src={urlFor(value).fit('max').auto('format').url()}
            alt={`${value?.alt || ' '}`}
            quality={100}
            sizes='100%'
          />
        </ImageContainer>
      );
    },
    table: ({ value }: { value: ISanityTableValue }) => {
      return (
        <table>
          <thead>
            <tr>
              {value?.header?.map((row, i) => (
                <th key={i}>{row}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {value?.rows.map((rowObj, i) => {
              const myrow = rowObj?.row;
              return (
                <tr key={i}>
                  {myrow.map((row, i) => (
                    <td key={i}>{row}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    },
    // callToAction: ({ value, isInline }) =>
    //   isInline ? (
    //     <a href={value.url}>{value.text}</a>
    //   ) : (
    //     <div className='callToAction'>{value.text}</div>
    //   ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;

      return (
        <a
          href={value.href}
          rel={rel}
          target={value?.blank === false ? '_self' : '_blank'}
        >
          {children}
        </a>
      );
    },
  },
};
