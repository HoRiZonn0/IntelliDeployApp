import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';

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

const CheckIcon: React.FC = () => (
  <View style={styles.checkIconContainer}>
    <Text style={styles.checkIcon}>{'\u2713'}</Text>
  </View>
);

interface PricingCardProps {
  plan: PlanData;
  billingCycle: 'monthly' | 'yearly';
}

const PricingCard: React.FC<PricingCardProps> = ({ plan, billingCycle }) => {
  const cardGradientStyle =
    Platform.OS === 'web'
      ? ({
          background:
            plan.highlighted
              ? 'linear-gradient(220deg, rgba(164,150,255,0.15) 9%, #FFF 95%)'
              : 'linear-gradient(220deg, rgba(255,221,247,0.15) 9%, #FFF 95%)',
        } as any)
      : {
          backgroundColor: '#FFFFFF',
        };

  const highlightedShadow =
    plan.highlighted && Platform.OS === 'web'
      ? ({
          boxShadow: '0px 8px 40px rgba(124, 98, 255, 0.15)',
          borderColor: 'rgba(124, 98, 255, 0.35)',
        } as any)
      : {};

  return (
    <View style={[styles.card, highlightedShadow, cardGradientStyle]}>
      <Text style={styles.cardTitle}>{plan.title}</Text>
      <Text style={styles.cardDescription}>{plan.description}</Text>

      <View style={styles.priceRow}>
        <Text style={styles.priceAmount}>{plan.price}</Text>
        <Text style={styles.pricePeriod}>
          / {billingCycle === 'monthly' ? 'month' : 'year'}
        </Text>
      </View>

      <TouchableOpacity style={styles.choosePlanButton} activeOpacity={0.8}>
        <Text style={styles.choosePlanText}>Choose Plan</Text>
      </TouchableOpacity>

      <View style={styles.featureList}>
        {plan.features.map((feature, index) => (
          <View key={index} style={styles.featureItem}>
            <CheckIcon />
            <Text style={styles.featureText}>{feature.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly'
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.sectionTitle}>Pricing Plan</Text>
      <Text style={styles.sectionSubtitle}>
        {
          '我们照顾每一种需求，定制了不同付费体验。用户可以自由选择体验的深度。现在订阅即可享受10%天使折扣！'
        }
      </Text>

      {/* Monthly / Yearly toggle */}
      <View
        style={[
          styles.toggleContainer,
          Platform.OS === 'web'
            ? ({
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.06)',
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
              billingCycle === 'monthly' && styles.toggleTextActive,
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
              billingCycle === 'yearly' && styles.toggleTextActive,
            ]}
          >
            Yearly
          </Text>
        </TouchableOpacity>
      </View>

      {/* Pricing cards */}
      <View style={styles.cardsRow}>
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} billingCycle={billingCycle} />
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

  /* ---- Header ---- */
  sectionTitle: {
    fontFamily:
      Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 50,
    fontWeight: '600',
    color: '#494A64',
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionSubtitle: {
    fontFamily:
      Platform.OS === 'web' ? "'Inter', 'PingFang SC', sans-serif" : undefined,
    fontSize: 18,
    color: '#494A64',
    opacity: 0.8,
    textAlign: 'center',
    maxWidth: 680,
    lineHeight: 28,
    marginBottom: 40,
  },

  /* ---- Toggle ---- */
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 3,
    borderColor: '#FFFFFF',
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
    fontFamily:
      Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 16,
    fontWeight: '600',
    color: '#9E9EAE',
  },
  toggleTextActive: {
    color: '#FFFFFF',
  },

  /* ---- Cards row ---- */
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap' as any,
    gap: 28,
    width: '100%' as any,
    maxWidth: 1120,
  },

  /* ---- Card ---- */
  card: {
    flex: 1,
    minWidth: 300,
    maxWidth: 360,
    borderWidth: 1,
    borderColor: 'rgba(200,200,220,0.5)',
    borderRadius: 20,
    padding: 32,
  },
  cardTitle: {
    fontFamily:
      Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 24,
    fontWeight: '700',
    color: '#494A64',
    marginBottom: 10,
  },
  cardDescription: {
    fontFamily:
      Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 16,
    color: '#494A64',
    opacity: 0.7,
    lineHeight: 24,
    marginBottom: 24,
  },

  /* ---- Price ---- */
  priceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  priceAmount: {
    fontFamily:
      Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 60,
    fontWeight: '700',
    color: '#494A64',
    lineHeight: 60,
  },
  pricePeriod: {
    fontFamily:
      Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 18,
    color: '#494A64',
    opacity: 0.6,
    marginBottom: 6,
    marginLeft: 4,
  },

  /* ---- CTA button ---- */
  choosePlanButton: {
    backgroundColor: '#7C62FF',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 28,
    width: '100%' as any,
  },
  choosePlanText: {
    fontFamily:
      Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  /* ---- Feature list ---- */
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
    backgroundColor: 'rgba(124,98,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkIcon: {
    fontSize: 13,
    fontWeight: '700',
    color: '#7C62FF',
    lineHeight: 16,
  },
  featureText: {
    fontFamily:
      Platform.OS === 'web' ? "'Inter', sans-serif" : undefined,
    fontSize: 15,
    color: '#494A64',
    opacity: 0.85,
    flex: 1,
  },
});
