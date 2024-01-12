import { getAllOccupationSlugs } from 'Queries/sitemap';
import { Occupation } from 'Interfaces/Database/Occupation/occupation';
import { NextPage } from 'next';

interface Props {
  allOccupationSlugs: Occupation[];
}

const OccupationsForCrawl: NextPage<Props> = ({ allOccupationSlugs }) => {
  return (
    <div>
      {allOccupationSlugs.map((occupation) => (
        <>
          <a
            style={{ color: 'blue' }}
            href={`https://www.marabox.com.au/occupations/${occupation?.slug?.current}`}
          >
            {occupation?.slug?.current}
          </a>
          <br />
        </>
      ))}
    </div>
  );
};

export default OccupationsForCrawl;
export async function getServerSideProps() {
  try {
    // Fetch all occupation slugs
    const allOccupationSlugs = await getAllOccupationSlugs();
    console.log('***navid getAllOccupationSlugs=', allOccupationSlugs);

    return {
      props: { allOccupationSlugs },
    };
  } catch (error) {
    console.error('Error generating sitemap:', error);

    return {
      props: {
        error: 'Error generating sitemap',
      },
    };
  }
}
