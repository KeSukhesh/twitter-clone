import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";
import { api, HydrateClient } from "~/trpc/server";
import type { Post } from "@prisma/client";
import CreatePostWizard from "./_components/createPostWizard";

export default async function Home() {
  // Use the Post type from Prisma
  const data: Post[] | undefined = await api.post.getAll();

  return (
    <HydrateClient>
      <main className="flex h-screen justify-center">
        <div className = "w-full md:max-w-2xl border-x border-slate-400">
          <div className="border-b border-slate-400 p-4 flex">
            <SignedOut>
              <div className="flex justify-center"> 
                <SignInButton />
              </div>
            </SignedOut>
            <SignedIn>
              <CreatePostWizard />
            </SignedIn>
          </div>
          <div className="flex flex-col">
            {[...data, ...data]?.map((post) => (
              <div key={post.id} className="p-8 border-b border-slate-400">{post.name + ": " + post.content}</div>
            ))}
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}