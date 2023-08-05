import { useQuery, gql } from "@apollo/client";

const GET_CLIMBS = gql`
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

export const useClimbs = () => {
  const { error, loading, data } = useQuery(GET_CLIMBS);

  return {
    error,
    data,
    loading,
  };
};

//original

// original codes:

// query MyQuery {
//   areas(filter: { area_name: { match: "Smith Rock" } }) {
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

// query MyQuery {
//     countries {
//       id
//       area_name
//       metadata {
//         lat
//         lng
//       }
//       media {
//         mediaUrl
//         id
//       }
//       content {
//         description
//       }
//     }
//   }
