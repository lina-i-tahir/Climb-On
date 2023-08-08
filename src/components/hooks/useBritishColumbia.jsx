import { useQuery, gql } from "@apollo/client";

const GET_BRITISHCOLUMBIA = gql`
  query MyQuery {
    areas(filter: { area_name: { match: "British Columbia" } }) {
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

export const useBritishColumbia = () => {
  const { error, loading, data } = useQuery(GET_BRITISHCOLUMBIA);

  return {
    error,
    data,
    loading,
  };
};
