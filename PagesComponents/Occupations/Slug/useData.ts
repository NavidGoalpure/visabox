import { Occupation } from 'interfaces/Documents/occupation';
import { getOccupationDetail } from 'queries/occupations/detail';
import { useQuery } from 'react-query';
import { OccupationsQueryKeys } from 'utils/query';

export const useData = (slug: string | undefined) => {
  if (!slug)
    return {
      isLoading: true,
      isError: false,
      occupation: undefined,
    };
  const NavidObject: Occupation = {
    _id: 'e5d5393d-85ca-4b5f-b099-15f394a66760',
    anzsco_section: {
      _type: 'anzsco_obj',
      alternative_title: {
        en: ['Marine Farmer'],
      },
      description: {
        en: 'Plans, organises, controls, coordinates and performs farming operations to breed and raise fish and other aquatic stock.',
      },
      nec_occupation: {
        en: ['qwe', 'asd', 'zzxc'],
      },
      priority_list: [
        {
          _key: '08e813a79592',
          _type: 'priority_list_obj',
          act: 'NS',
          future_demend: 'Modarate',
          national: 'NS',
          nsw: 'NS',
          nt: 'S',
          qld: 'S',
          sa: 'NS',
          tas: 'NS',
          vic: 'NS',
          wa: 'NS',
          //@ts-ignore
          year: '2022-01-01',
        },
      ],
      specialisations: {
        en: [
          'Seafood Farmer',
          'Fish Farmer',
          'Hatchery Manager (Fish)',
          'Mussel Farmer',
          'Oyster Farmer',
        ],
      },
      //@ts-ignore
      unit_group: {
        skill_level: '1',
      },
    },
    assessing_authority: 'VETASSESS',
    code: 121111,
    title: {
      en: 'Aquaculture Farmer',
    },
    visa_option_section: [
      {
        _key: 'a58d2f568883',
        _type: 'visa_option_obj',
        types: {
          _ref: '1bf883de-eb6c-4d40-aa50-f2ec1100baab',
          //@ts-ignore
          _type: 'reference',
        },
      },
    ],
  };
  // const {
  //   isLoading,
  //   isError,
  //   isFetching,
  //   data: occupation,
  // } = useQuery<Occupation, Error>(OccupationsQueryKeys.detail(slug), () =>
  //   getOccupationDetail(slug)
  // );

  return {
    isLoading: false,
    isError: false,
    occupation: NavidObject,
    isFetching: false,
  };
  // return {
  //   isLoading,
  //   isError,
  //   occupation,
  //   isFetching,
  // };
};
