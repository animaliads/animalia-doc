import React from 'react';

interface TwoColumnLayoutProps {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
  variant?: 'image-left' | 'image-right' | 'no-background';
  className?: string;
  style?: React.CSSProperties;
}

export default class TwoColumnLayout extends React.Component<TwoColumnLayoutProps> {
  render(): JSX.Element {
    const { leftContent, rightContent, variant = 'image-right', className, style } = this.props;

    // Determine which column gets the image styling
    const imageOnLeft = variant === 'image-left';
    const imageOnRight = variant === 'image-right';
    const noBackground = variant === 'no-background';

    // Base container styles for image columns
    const imageContainerStyle: React.CSSProperties = {
      backgroundColor: 'var(--ifm-color-neutral-light-05, #f9f9fa)',
      borderRadius: '14px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '302px',
      overflow: 'hidden',
    };

    // Text column styles
    const textContainerStyle: React.CSSProperties = {
      paddingTop: '8px',
    };

    return (
      <div
        className={className}
        style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'flex-start',
          marginBottom: '48px',
          flexWrap: 'wrap',
          paddingLeft: '0px',
          paddingRight: '16px',
          ...style,
        }}
      >
        {/* Left column */}
        <div
          style={{
            flex: '1 1 300px',
            minWidth: '300px',
            ...(imageOnLeft && !noBackground ? imageContainerStyle : textContainerStyle),
          }}
        >
          {leftContent}
        </div>

        {/* Right column */}
        <div
          style={{
            flex: '1 1 400px',
            minWidth: '300px',
            ...(imageOnRight && !noBackground ? imageContainerStyle : textContainerStyle),
          }}
        >
          {rightContent}
        </div>
      </div>
    );
  }
}
