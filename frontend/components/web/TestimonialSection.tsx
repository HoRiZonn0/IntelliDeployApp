import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const TestimonialSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        {/* Decorative opening quote mark */}
        <Text style={styles.quoteMarkOpen}>{'\u201C'}</Text>

        {/* Testimonial quote */}
        <Text style={styles.quoteText}>
          Before Calyra, I never realized how disconnected I was from my own
          emotions. Days would blur together, and I couldn't clearly explain why
          I felt stressed or unmotivated. Calyra helped me slow down and reflect
          in a simple, structured way. Seeing my moods visualized over weeks and
          months made a huge difference in understanding my triggers. The app
          feels thoughtful, easy to use, and non-judgmental, which makes it
          something I genuinely want to return to every day.
        </Text>

        {/* Decorative closing quote mark */}
        <Text style={styles.quoteMarkClose}>{'\u201D'}</Text>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Attribution */}
        <Text style={styles.attribution}>
          {'\u672C\u671F\u5C0F\u7F16\uFF1AAlice'}
        </Text>
        <Text style={styles.role}>
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
    backgroundColor: '#FFFFFF',
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
      Platform.OS === 'web'
        ? "Georgia, 'Times New Roman', serif"
        : undefined,
    color: '#A496FF',
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
    color: '#494A64',
    textAlign: 'center',
    paddingHorizontal: 16,
  },
  quoteMarkClose: {
    fontSize: 72,
    lineHeight: 72,
    fontFamily:
      Platform.OS === 'web'
        ? "Georgia, 'Times New Roman', serif"
        : undefined,
    color: '#A496FF',
    opacity: 0.5,
    marginTop: 8,
  },
  divider: {
    width: 48,
    height: 2,
    backgroundColor: '#A496FF',
    opacity: 0.4,
    borderRadius: 1,
    marginTop: 24,
    marginBottom: 24,
  },
  attribution: {
    fontFamily:
      Platform.OS === 'web' ? "'PingFang SC', sans-serif" : undefined,
    fontSize: 16,
    fontWeight: '600',
    color: '#494A64',
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
    color: '#494A64',
    opacity: 0.6,
    textAlign: 'center',
  },
});

export default TestimonialSection;
