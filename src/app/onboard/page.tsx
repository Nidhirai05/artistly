'use client';

import ArtistOnboardingForm from '@/components/ArtistOnboardingForm';

export default function OnboardPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white py-12 pt-36 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-5xl text-center font-bold mb-4">
          Artist Onboarding
        </h1>
        <p className="text-center text-sm md:text-base text-neutral-400 mb-8">
          Submit your profile to get discovered by event planners. Let your talent shine!
        </p>
        <ArtistOnboardingForm />
      </div>
    </div>
  );
}

