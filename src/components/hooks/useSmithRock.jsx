import { useQuery, gql } from "@apollo/client";

const GET_SMITHROCK = gql`
  query MyQuery {
    areas(filter: { area_name: { match: "Smith Rock" } }) {
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

export const useSmithRock = () => {
  const { error, loading, data } = useQuery(GET_SMITHROCK);

  return {
    error,
    data,
    loading,
  };
};
