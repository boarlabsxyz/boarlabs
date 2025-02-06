import { ParticleBackground } from '@/common/components/ParticleBackground/ParticleBackground';
import { IntroductionSection } from './sections/IntroductionSection/IntroductionSection';
import { OurGoalsSection } from './sections/OurGoalsSection/OurGoalsSection';
import { ContentLayout } from '@/common/layouts/ContentLayout/ContentLayout';
import { Wave } from '@/common/components/Wave/Wave';
import { WhatWeDoSection } from '@/modules/homeContent/sections/WhatWeDoSection/WhatWeDoSection';
import { HowItWorksSection } from '@/modules/homeContent/sections/HowItWorksSection/HowItWorksSection';
import { TeamWorkStageSection } from '@/modules/homeContent/sections/TeamWorkStageSection/TeamWorkStageSection';
import { Footer } from '@/common/components/Footer/Footer';

export const HomeContent = () => {
  return (
    <>
      <ContentLayout>
        <IntroductionSection />
        <OurGoalsSection />
        <ParticleBackground />
      </ContentLayout>
      <Wave />
      <ContentLayout>
        <WhatWeDoSection />
        <HowItWorksSection />
        <TeamWorkStageSection />
      </ContentLayout>
      <Footer />
    </>
  );
};
