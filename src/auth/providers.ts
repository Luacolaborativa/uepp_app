import GitHub from "next-auth/providers/github";

export const GithubProvider = GitHub({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string
});