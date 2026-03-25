import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { landingThemeTokens, type LandingTheme } from './landingTheme';

interface PlanFeature {
  text: string;
}

interface PlanData {
  title: string;
  description: string;
  price: string;
  features: PlanFeature[];
  highlighted?: boolean;
}

interface PricingSectionProps {
  theme: LandingTheme;
}

const plans: PlanData[] = [
  {
    title: 'Mindful Start',
    description:
      'A simple way to begin your journey toward better emotional awareness.',
    price: '$8',
    features: [
      { text: 'Daily mood check-ins' },
      { text: 'Guided reflections and affirmations' },
      { text: 'Personalized mood insights' },
      { text: 'Breathing and mindfulness tools' },
      { text: 'Secure journal storage' },
      { text: 'Light reminders for routine care' },
    ],
  },
  {
    title: 'Deep Clarity',
    description:
      'Go deeper with insights, reflections, and tools designed for emotional growth.',
    price: '$24',
    highlighted: true,
    features: [
      { text: 'Everything in Mindful Start' },
      { text: 'AI-powered emotion tracking' },
      { text: 'Custom journaling prompts' },
      { text: 'Mood-to-action recommendations' },
      { text: 'Weekly emotional report' },
      { text: 'Sync across all devices' },
    ],
  },
  {
    title: 'Calm Pro',
    description:
      'For those ready to fully commit to their mental well-being and daily reflection.',
    price: '$59',
    features: [
      { text: 'Everything in Deep Clarity' },
      { text: 'One-on-one journaling feedback' },
      { text: 'Audio reflections and meditation access' },
      { text: 'Unlimited data history' },
      { text: 'Early access to mood studies' },
    ],
  },
];

const CheckIcon: React.FC<{ theme: LandingTheme }> = ({ theme }) => {
  const colors = landingThemeTokens[theme];
  const isDark = theme === 'dark';

  return (
    <View
      style={[
        styles.checkIconContainer,
        {
          backgroundColor: isDark
            ? 'rgba(156, 139, 255, 0.18)'
            : 'rgba(124,98,255,0.12)',
        },
      ]}
    >
      <Text style={[styles.checkIcon, { color: colors.accent }]}>{'✓'}</Text>
    </View>
  );
};

interface PricingCardProps {
  plan: PlanData;
  billingCycle: 'monthly' | 'yearly';
  theme: LandingTheme;
}

const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  billingCycle,
  theme,
}) => {
  const colors = landingThemeTokens[theme];
  const isDark = theme === 'dark';

  const cardGradientStyle =
    Platform.OS === 'web'
      ? ({
          background: isDark
            ? plan.highlighted
              ? 'linear-gradient(180deg, rgba(28, 25, 62, 0.98) 0%, rgba(14, 18, 38, 0.98) 100%)'
              : 'linear-gradient(180deg, rgba(17, 21, 44, 0.98) 0%, rgba(11, 14, 30, 0.98) 100%)'
            : plan.highlighted
              ? 'linear-gradient(220deg, rgba(164,150,255,0.15) 9%, #FFF 95%)'
              : 'linear-gradient(220deg, rgba(255,221,247,0.15) 9%, #FFF 95%)',
        } as any)
      : {
          backgroundColor: colors.surface,
        };

  const highlightedShadow =
    plan.highlighted && Platform.OS === 'web'
      ? ({
          boxShadow: isDark
            ? '0px 20px 64px rgba(107, 92, 255, 0.22)'
            : '0px 8px 40px rgba(124, 98, 255, 0.15)',
          borderColor: isDark
            ? 'rgba(156, 139, 255, 0.4)'
            : 'rgba(124, 98, 255, 0.35)',
        } as any)
      : {};

  return (
    <View
      style={[
        styles.card,
        { borderColor: isDark ? colors.border : 'rgba(200,200,220,0.5)' },
        highlightedShadow,
        cardGradientStyle,
      ]}
    >
      <Text style={[styles.cardTitle, { color: colors.textPrimary }]}>{plan.title}</Text>
      <Text style={[styles.cardDescription, { color: colors.textSecondary }]}>
        {plan.description}
      </Text>

      <View style={styles.priceRow}>
        <Text style={[styles.priceAmount, { color: colors.textPrimary }]}>{plan.price}</Text>
        <Text style={[styles.pricePeriod, { color: colors.textMuted }]}>/ {billingCycle === 'monthly' ? 'month' : 'year'}</Text>
      </View>

      <TouchableOpacity
        style={[
          styles.choosePlanButton,
          {
            backgroundColor: plan.highlighted && isDark ? '#B2A4FF' : colors.accent,
          },
        ]}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.choosePlanText,
            { color: plan.highlighted && isDark ? '#101428' : '#FFFFFF' },
          ]}
        >
          Choose Plan
        </Text>
      </TouchableOpacity>

      <View style={styles.featureList}>
        {plan.features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <CheckIcon theme={theme} />
            <Text style={[styles.featureText, { color: colors.textSecondary }]}>
              {feature.text}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default function PricingSection({ theme }: PricingSectionProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const colors = landingThemeTokens[theme];
  const isDark = theme === 'dark';

  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>Pricing Plan</Text>
      <Text style={[styles.sectionSubtitle, { color: colors.textSecondary }]}>
        {'我们照顾每一种需求，定制了不同付费体验。用户可以自由选择体验的深度。现在订阅即可享受10%天使折扣！'}
      </Text>

      <View
        style={[
          styles.toggleContainer,
          {
            backgroundColor: isDark ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.2)',
            borderColor: isDark ? colors.border : '#FFFFFF',
          },
          Platform.OS === 'web'
            ? ({
                boxShadow: isDark
                  ? '0px 12px 28px rgba(0, 0, 0, 0.24)'
                  : '0px 4px 20px rgba(0, 0, 0, 0.06)',
              } as any)
            : {},
        ]}
      >
        <TouchableOpacity
          style={[
            styles.toggleTab,
            billingCycle === 'monthly' && styles.toggleTabActive,
          ]}
          onPress={() => setBillingCycle('monthly')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.toggleText,
              { color: billingCycle === 'monthly' ? '#FFFFFF' : colors.textMuted },
            ]}
          >
            Monthly
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleTab,
            billingCycle === 'yearly' && styles.toggleTabActive,
          ]}
          onPress={() => setBillingCycle('yearly')}
          activeOpacity={0.8}
        >
          <Text
            style={[
              styles.toggleText,
              { color: billingCycle === 'yearly' ? '#FFFFFF' : colors.textMuted },
            ]}
          >
            Yearly
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsRow}>
        {plans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan}
            billingCycle={billingCycle}
            theme={theme}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%' as any,
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontFamily: Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 50,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionSubtitle: {
    fontFamily:
      Platform.OS === 'web' ? "'Inter', 'PingFang SC', sans-serif" : undefined,
    fontSize: 18,
    textAlign: 'center',
    maxWidth: 680,
    lineHeight: 28,
    marginBottom: 40,
  },
  toggleContainer: {
    flexDirection: 'row',
    borderWidth: 1.5,
    borderRadius: 100,
    padding: 4,
    marginBottom: 56,
  },
  toggleTab: {
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 100,
  },
  toggleTabActive: {
    backgroundColor: '#7C62FF',
  },
  toggleText: {
    fontFamily: Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 16,
    fontWeight: '600',
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap' as any,
    gap: 28,
    width: '100%' as any,
    maxWidth: 1120,
  },
  card: {
    flex: 1,
    minWidth: 300,
    maxWidth: 360,
    borderWidth: 1,
    borderRadius: 20,
    padding: 32,
  },
  cardTitle: {
    fontFamily: Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 10,
  },
  cardDescription: {
    fontFamily: Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 24,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  priceAmount: {
    fontFamily: Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 60,
    fontWeight: '700',
    lineHeight: 60,
  },
  pricePeriod: {
    fontFamily: Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 18,
    marginBottom: 6,
    marginLeft: 4,
  },
  choosePlanButton: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 28,
    width: '100%' as any,
  },
  choosePlanText: {
    fontFamily: Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 16,
    fontWeight: '600',
  },
  featureList: {
    gap: 14,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIconContainer: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkIcon: {
    fontSize: 13,
    fontWeight: '700',
    lineHeight: 16,
  },
  featureText: {
    fontFamily: Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 15,
    flex: 1,
  },
});
