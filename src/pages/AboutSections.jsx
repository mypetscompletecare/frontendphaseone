import React from 'react';
import RenderSection from '../components/Section/RenderSection';
import aboutUs from '../assets/images/aboutUs.webp';

export default function AboutSections() {
  const title = 'About Petio';
  const description =
    'Petio is a category-defining health and wellness company focused on improving the lives of pets, pet parents and our own Petco partners';
  const buttons = [{ label: 'Join Us', link: '#', handleOnClick: '' }];
  return (
    <RenderSection
      sectionId="AboutSection"
      title={title}
      description={description}
      buttons={buttons}
      bgImageUrl={aboutUs}
      orientation={true}
    />
  );
}
