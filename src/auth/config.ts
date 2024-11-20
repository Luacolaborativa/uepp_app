import { GithubProvider } from "./providers";
import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    providers: [GithubProvider]
} satisfies NextAuthConfig;