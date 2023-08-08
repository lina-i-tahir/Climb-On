import { useQuery, gql } from "@apollo/client";

const GET_NEVERLAND = gql`
  query MyQuery {
    areas(filter: { area_name: { match: "Neverland" } }) {
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

export const useNeverland = () => {
  const { error, loading, data } = useQuery(GET_NEVERLAND);

  return {
    error,
    data,
    loading,
  };
};
