import React from 'react';
import AniPlatformCard from './AniPlatformCard';

/**
 * Example usage of AniPlatformCard component
 *
 * This demonstrates the three cards shown in the Figma design:
 * - Angular (positive status with green dot)
 * - iOS (negative status with red dot)
 * - Web Component (info status with blue dot)
 */

const PlatformCardsExample = () => {
  return (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <AniPlatformCard
        icon="an-angular"
        title="Angular"
        statusType="positive"
        statusText="Release 19.2.1"
        link="https://angular.io"
        external={true}
      />

      <AniPlatformCard
        icon="an-apple"
        title="iOS"
        statusType="negative"
        statusText="N/A"
        link="https://developer.apple.com"
        external={true}
      />

      <AniPlatformCard
        icon="an-cube"
        title="Web Component"
        statusType="info"
        statusText="Planned"
      />
    </div>
  );
};

export default PlatformCardsExample;
