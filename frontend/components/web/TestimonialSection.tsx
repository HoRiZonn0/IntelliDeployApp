import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { landingThemeTokens, type LandingTheme } from './landingTheme';

interface TestimonialSectionProps {
  theme: LandingTheme;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ theme }) => {
  const colors = landingThemeTokens[theme];
  const isDark = theme === 'dark';

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDark ? 'rgba(7, 10, 25, 0.92)' : '#FFFFFF',
        },
      ]}
    >
      <View style={styles.inner}>
        <Text style={[styles.quoteMarkOpen, { color: colors.accentSoft }]}>{'“'}</Text>

        <Text style={[styles.quoteText, { color: colors.textSecondary }]}>
          Before Calyra, I never realized how disconnected I was from my own
          emotions. Days would blur together, and I couldn't clearly explain why
          I felt stressed or unmotivated. Calyra helped me slow down and reflect
          in a simple, structured way. Seeing my moods visualized over weeks and
          months made a huge difference in understanding my triggers. The app
          feels thoughtful, easy to use, and non-judgmental, which makes it
          something I genuinely want to return to every day.
        </Text>

        <Text style={[styles.quoteMarkClose, { color: colors.accentSoft }]}>{'”'}</Text>

        <View
          style={[
            styles.divider,
            { backgroundColor: isDark ? 'rgba(194, 184, 255, 0.4)' : '#A496FF' },
          ]}
        />

        <Text style={[styles.attribution, { color: colors.textPrimary }]}>本期小编：Alice</Text>
        <Text style={[styles.role, { color: colors.textMuted }]}>
          Project Manager at Brightwave Solutions
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%' as any,
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 24,
  },
  inner: {
    maxWidth: 760,
    width: '100%' as any,
    alignItems: 'center',
  },
  quoteMarkOpen: {
    fontSize: 72,
    lineHeight: 72,
    fontFamily:
      Platform.OS === 'web' ? "Georgia, 'Times New Roman', serif" : undefined,
    opacity: 0.5,
    marginBottom: 8,
  },
  quoteText: {
    fontFamily:
      Platform.OS === 'web'
        ? "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        : undefined,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 18 * 1.8,
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  quoteMarkClose: {
    fontSize: 72,
    lineHeight: 72,
    fontFamily:
      Platform.OS === 'web' ? "Georgia, 'Times New Roman', serif" : undefined,
    opacity: 0.5,
    marginTop: 8,
  },
  divider: {
    width: 48,
    height: 2,
    opacity: 0.4,
    borderRadius: 1,
    marginTop: 24,
    marginBottom: 24,
  },
  attribution: {
    fontFamily: Platform.OS === 'web' ? "'PingFang SC', sans-serif" : undefined,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 6,
  },
  role: {
    fontFamily:
      Platform.OS === 'web'
        ? "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        : undefined,
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
  },
});

export default TestimonialSection;
