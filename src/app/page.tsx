import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { LatestPost } from "~/app/_components/post";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  // THis is how you would call a tRPC query in a server component
  // const latestPost = await api.post.getLatest();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="flex flex-wrap gap-4">
          <LatestPost />
        </div>
        <div className="flex flex-wrap gap-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </main>
    </HydrateClient>
  );
}