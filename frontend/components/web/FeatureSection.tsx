import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';

interface FeatureSectionProps {
  tag?: string;
  title: string;
  description: string;
  buttonText: string;
  image: any;
  reverse?: boolean;
  onPress?: () => void;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  tag = 'Our Features',
  title,
  description,
  buttonText,
  image,
  reverse = false,
  onPress,
}) => {
  return (
    <View
      style={[
        styles.card,
        Platform.OS === 'web'
          ? ({
              background:
                'linear-gradient(220deg, rgba(255,221,247,0.15) 9%, #FFF 95%)',
            } as any)
          : { backgroundColor: '#FFFFFF' },
      ]}
    >
      <View
        style={[
          styles.row,
          reverse ? styles.rowReverse : undefined,
        ]}
      >
        {/* Text area */}
        <View style={styles.textArea}>
          {/* Tag pill */}
          <View
            style={[
              styles.tagPill,
              Platform.OS === 'web'
                ? ({
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.06)',
                  } as any)
                : {},
            ]}
          >
            <Text style={[styles.tagText, webStyles.tagText]}>{tag}</Text>
          </View>

          {/* Title */}
          <Text style={[styles.title, webStyles.title]}>{title}</Text>

          {/* Description */}
          <Text style={[styles.description, webStyles.description]}>
            {description}
          </Text>

          {/* CTA Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={[
              styles.ctaButton,
              Platform.OS === 'web'
                ? ({
                    boxShadow: '0px 6px 20px rgba(124, 98, 255, 0.35)',
                    cursor: 'pointer',
                  } as any)
                : {},
            ]}
          >
            <Text style={[styles.ctaButtonText, webStyles.ctaButtonText]}>
              {buttonText.toUpperCase()}
            </Text>
            <View style={styles.ctaExperiencePill}>
              <Text style={[styles.ctaExperienceText, webStyles.ctaExperienceText]}>
                现在体验！
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Image area */}
        <View style={styles.imageArea}>
          <Image source={image} style={styles.featureImage} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(200, 200, 220, 0.5)',
    overflow: 'hidden',
    width: '100%' as any,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 48,
    paddingHorizontal: 56,
    gap: 40,
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  textArea: {
    flex: 1,
    gap: 24,
  },
  tagPill: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderWidth: 1.4,
    borderColor: '#FFFFFF',
    borderRadius: 140,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  tagText: {
    fontSize: 19,
    fontWeight: '500',
    color: '#353849',
  },
  title: {
    fontSize: 50,
    fontWeight: '600',
    color: '#494A64',
    letterSpacing: -1,
  },
  description: {
    fontSize: 24,
    fontWeight: '400',
    color: '#353849',
    opacity: 0.8,
    lineHeight: 42,
  },
  ctaButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7C62FF',
    borderWidth: 3,
    borderColor: '#FFFFFF',
    borderRadius: 100,
    paddingLeft: 28,
    paddingRight: 6,
    paddingVertical: 6,
    gap: 16,
    marginTop: 8,
  },
  ctaButtonText: {
    fontSize: 19,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  ctaExperiencePill: {
    backgroundColor: '#FFFFFF',
    borderRadius: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  ctaExperienceText: {
    fontSize: 19,
    color: '#404040',
  },
  imageArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureImage: {
    width: '100%' as any,
    height: 400,
  },
});

// Web-specific styles for font families and CSS properties
const webStyles = {
  tagText:
    Platform.OS === 'web'
      ? ({
          fontFamily: '"Inter", sans-serif',
        } as any)
      : {},
  title:
    Platform.OS === 'web'
      ? ({
          fontFamily: '"Inter", sans-serif',
          letterSpacing: '-0.02em',
        } as any)
      : {},
  description:
    Platform.OS === 'web'
      ? ({
          fontFamily: '"Inter", sans-serif',
          lineHeight: '1.76em',
        } as any)
      : {},
  ctaButtonText:
    Platform.OS === 'web'
      ? ({
          fontFamily: '"Geist", sans-serif',
          textTransform: 'uppercase',
        } as any)
      : {},
  ctaExperienceText:
    Platform.OS === 'web'
      ? ({
          fontFamily: '"Geist", sans-serif',
        } as any)
      : {},
};

export default FeatureSection;
