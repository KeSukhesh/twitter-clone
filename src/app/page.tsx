import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { api, HydrateClient } from "~/trpc/server";
import type { Post } from "@prisma/client";

export default async function Home() {
  // Use the Post type from Prisma
  const data: Post[] | undefined = await api.post.getAll();

  return (
    <HydrateClient>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <div className="flex flex-wrap gap-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <div>
          {data?.map((post) => (
            <div key={post.id}>{post.content}</div>
          ))}
        </div>
      </main>
    </HydrateClient>
  );
}