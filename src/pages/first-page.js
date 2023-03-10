import React from 'react';
import { Page, Seo,AboutSection } from 'gatsby-theme-portfolio-minimal';

export default function FirstPage() {
    return (
        <>
            <Seo title="FirstPage" />
            <Page useSplashScreenAnimation>
                <AboutSection sectionId="about" heading="About Portfolio Minimal" />
            </Page>
        </>
    );
}