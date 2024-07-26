import React from 'react'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const TopNav = () => {
    return (
        <nav className="flex items-center justify-between w-full p-4 text-xl font-semibold border-b">
            <div className="">Gallery</div>
            <div className="">
                <SignedOut>
                    <SignInButton />
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    )
}

export default TopNav