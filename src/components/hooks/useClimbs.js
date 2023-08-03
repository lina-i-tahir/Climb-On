import { useQuery, gql } from "@apollo/client";

const GET_CLIMBS = gql`
  query MyQuery {
    areas {
      content {
        description
      }
      totalClimbs
      areaName
      id
    }
  }
`;
// query MyQuery {
//   areas {
//     content {
//       description
//     }
//     totalClimbs
//     areaName
//     id
//     metadata {
//       lng
//       lat
//     }
//   }
// }

export const useClimbs = () => {
  const { error, loading, data } = useQuery(GET_CLIMBS);

  return {
    error,
    data,
    loading,
  };
};
