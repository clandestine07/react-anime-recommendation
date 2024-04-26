// api.jsx
export const fetchRecommendations = async (genre) => {
  const url = "https://graphql.anilist.co";
  const query = `
    query ($genre: String) {
      Page {
        media(type: ANIME, genre: $genre) {
          id
          title {
            english
          }
          coverImage {
            large
          }
          characters {
            edges {
              node {
                id
                name {
                  full
                }
                image {
                  large
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    genre: genre,
  };

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  try {
    const response = await fetch(url, options);
    const { data, errors } = await response.json();

    if (errors) {
      throw new Error(errors[0].message || "AniList API error");
    }

    if (!data || !data.Page || !data.Page.media) {
      throw new Error("Anime recommendations not found");
    }

    return data.Page.media;
  } catch (error) {
    console.error("Error fetching anime recommendations:", error);
    return [];
  }
};
