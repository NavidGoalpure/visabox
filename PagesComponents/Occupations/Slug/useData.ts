import { Occupation } from "interfaces/Documents/occupation";
import { getOccupationDetail } from "queries/occupations/detail";
import { useQuery } from "react-query";
import { OccupationsQueryKeys } from "utils/query";

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
      major_group: 1,
      submajor_group: 12,
      minor_group: 121,
      alternative_title: {
        en: ["Marine Farmer"],
        fa: ["کشاورز دریایی"],
      },
      description: {
        en: "Plans, organises, controls, coordinates and performs farming operations to breed and raise fish and other aquatic stock.",
        fa: "برنامه ریزی، سازماندهی، کنترل، هماهنگی و اجرای عملیات کشاورزی برای پرورش و پرورش ماهی و سایر آبزیان.",
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
        code: 1211,
        title: {
          en: "Aquaculture Farmers",
          fa: "",
        },
        description: {
          en: "Plan, organise, control, coordinate and perform farming operations to breed and raise fish and other aquatic stock.",
          fa: "برنامه ریزی، سازماندهی، کنترل، هماهنگی و اجرای عملیات کشاورزی برای پرورش و پرورش ماهی و سایر آبزیان.",
        },
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

  return {
    isLoading: false,
    isError: false,
    occupation: NavidObject,
    isFetching: false,
  };
  // const {
  //   isLoading,
  //   isError,
  //   isFetching,
  //   data: occupation,
  // } = useQuery<Occupation, ClientError>(OccupationsQueryKeys.detail(slug), () =>
  //   getOccupationDetail(slug)
  // );
  // return {
  //   isLoading,
  //   isError,
  //   occupation,
  //   isFetching,
  // };
};
