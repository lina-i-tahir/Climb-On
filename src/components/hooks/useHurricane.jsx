import { useQuery, gql } from "@apollo/client";

const GET_HURRICANE = gql`
  query MyQuery {
    areas(filter: { area_name: { match: "Hurricane " } }) {
      content {
        description
      }
      totalClimbs
      areaName
      id
      metadata {
        lng
        lat
      }
    }
  }
`;

export const useHurricane = () => {
  const { error, loading, data } = useQuery(GET_HURRICANE);

  return {
    error,
    data,
    loading,
  };
};
