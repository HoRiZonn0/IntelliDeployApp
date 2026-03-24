import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  Animated,
} from 'react-native';

const miboCatHero = require('../../assets/images/mibo-cat-hero.png');
const atmosphereBg = require('../../assets/images/atmosphere-bg.png');

// Inject CSS keyframes for the breathing green dot on web
if (Platform.OS === 'web' && typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    @keyframes breathingGlow {
      0%, 100% {
        opacity: 1;
        box-shadow: 0 0 6px 2px rgba(54, 255, 171, 0.4);
      }
      50% {
        opacity: 0.5;
        box-shadow: 0 0 14px 6px rgba(54, 255, 171, 0.7);
      }
    }
  `;
  document.head.appendChild(styleTag);
}

export default function HeroSection() {
  // Fallback animated opacity for native platforms
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (Platform.OS !== 'web') {
      const animation = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 0.5,
            duration: 1200,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
          }),
        ])
      );
      animation.start();
      return () => animation.stop();
    }
  }, [pulseAnim]);

  return (
    <View style={styles.container}>
      {/* Atmosphere background decoration */}
      <Image
        source={atmosphereBg}
        style={styles.atmosphereBg}
        resizeMode="cover"
      />

      {/* Wave-like gradient decorations */}
      {Platform.OS === 'web' && (
        <View style={styles.waveDecorationsContainer}>
          <View
            style={[
              styles.waveDecoration,
              {
                background:
                  'radial-gradient(ellipse at 20% 50%, rgba(164,150,255,0.12) 0%, transparent 70%)',
                top: 0,
                left: 0,
                right: 0,
                height: 400,
              } as any,
            ]}
          />
          <View
            style={[
              styles.waveDecoration,
              {
                background:
                  'radial-gradient(ellipse at 80% 30%, rgba(175,201,246,0.10) 0%, transparent 70%)',
                top: 100,
                left: 0,
                right: 0,
                height: 350,
              } as any,
            ]}
          />
          <View
            style={[
              styles.waveDecoration,
              {
                background:
                  'radial-gradient(ellipse at 50% 80%, rgba(124,98,255,0.06) 0%, transparent 60%)',
                top: 200,
                left: 0,
                right: 0,
                height: 300,
              } as any,
            ]}
          />
        </View>
      )}

      {/* Main content */}
      <View style={styles.content}>
        {/* Giant gradient title */}
        <Text
          style={[
            styles.title,
            Platform.OS === 'web'
              ? ({
                  backgroundImage:
                    'linear-gradient(0deg, rgba(175,201,246,0) 13%, rgba(164,150,255,1) 58%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                } as any)
              : { color: '#A496FF' },
          ]}
        >
          IntelliDeploy
        </Text>

        {/* Welcome text */}
        <Text style={styles.welcomeText}>
          {'欢迎来到知界！\n一键变代码为云上产品 享受你的专属灵感落地加速器'}
        </Text>

        {/* CTA button area */}
        <View style={styles.ctaButton}>
          <View style={styles.ctaInner}>
            {/* Breathing green dot */}
            {Platform.OS === 'web' ? (
              <View
                style={
                  [
                    styles.greenDot,
                    {
                      animationName: 'breathingGlow',
                      animationDuration: '2.4s',
                      animationTimingFunction: 'ease-in-out',
                      animationIterationCount: 'infinite',
                    },
                  ] as any
                }
              />
            ) : (
              <Animated.View
                style={[styles.greenDot, { opacity: pulseAnim }]}
              />
            )}
            <Text style={styles.ctaText}>
              点击你的Mibo 开始今天的探索🚀
            </Text>
          </View>
        </View>

        {/* Mibo cat character */}
        <Image
          source={miboCatHero}
          style={styles.miboCat}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%' as any,
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  atmosphereBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%' as any,
    height: '100%' as any,
    opacity: 0.6,
  },
  waveDecorationsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  waveDecoration: {
    position: 'absolute',
  },
  content: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 40,
    paddingHorizontal: 24,
    zIndex: 1,
    width: '100%' as any,
  },
  title: {
    fontSize: Platform.OS === 'web' ? 120 : 64,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 32,
  },
  welcomeText: {
    fontSize: 32,
    fontFamily: Platform.OS === 'web' ? "'PingFang SC', sans-serif" : undefined,
    color: '#494A64',
    opacity: 0.8,
    textAlign: 'center',
    lineHeight: 48,
    marginBottom: 40,
  },
  ctaButton: {
    borderRadius: 999,
    borderWidth: 2,
    borderColor: '#7C62FF',
    paddingVertical: 14,
    paddingHorizontal: 32,
    marginBottom: 48,
  },
  ctaInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#36FFAB',
    marginRight: 10,
  },
  ctaText: {
    fontSize: 20,
    color: '#494A64',
    opacity: 0.8,
    fontFamily: Platform.OS === 'web' ? "'PingFang SC', sans-serif" : undefined,
  },
  miboCat: {
    width: 320,
    height: 320,
  },
});
