import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import type React from "react";

export const LandingPage: React.FC = () => {
  return (
    <div>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>

    </div>
  )
}
