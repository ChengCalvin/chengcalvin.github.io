import { PinnedRepo } from "./types";

const GITHUB_GRAPHQL = "https://api.github.com/graphql";

const PINNED_REPOS_QUERY = `
  query {
    user(login: "ChengCalvin") {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            name
            description
            url
            homepageUrl
            stargazerCount
            primaryLanguage {
              name
              color
            }
            repositoryTopics(first: 6) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`;

export async function getPinnedRepos(): Promise<PinnedRepo[]> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn("GITHUB_TOKEN not set — skipping pinned repos fetch");
    return [];
  }

  try {
    const res = await fetch(GITHUB_GRAPHQL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: PINNED_REPOS_QUERY }),
    });

    if (!res.ok) {
      console.error("GitHub API error:", res.status);
      return [];
    }

    const json = await res.json();
    const nodes = json.data?.user?.pinnedItems?.nodes ?? [];

    return nodes.map(
      (repo: {
        name: string;
        description: string | null;
        url: string;
        homepageUrl: string | null;
        stargazerCount: number;
        primaryLanguage: { name: string; color: string } | null;
        repositoryTopics: { nodes: { topic: { name: string } }[] };
      }): PinnedRepo => ({
        name: repo.name,
        description: repo.description,
        url: repo.url,
        homepageUrl: repo.homepageUrl,
        stargazerCount: repo.stargazerCount,
        primaryLanguage: repo.primaryLanguage,
        repositoryTopics: repo.repositoryTopics.nodes.map(
          (t) => t.topic.name
        ),
      })
    );
  } catch (err) {
    console.error("Failed to fetch pinned repos:", err);
    return [];
  }
}
