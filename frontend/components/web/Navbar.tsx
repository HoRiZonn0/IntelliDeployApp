import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import { useRouter } from 'expo-router';

function PersonIcon() {
  return (
    <View style={iconStyles.circle}>
      <View style={iconStyles.personHead} />
      <View style={iconStyles.personBody} />
    </View>
  );
}

function MailIcon() {
  return (
    <View style={iconStyles.circle}>
      <Text style={iconStyles.mailEmoji}>✉</Text>
    </View>
  );
}

const iconStyles = StyleSheet.create({
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  personHead: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#42364E',
    marginBottom: 2,
  },
  personBody: {
    width: 20,
    height: 10,
    borderRadius: 10,
    backgroundColor: '#42364E',
  },
  mailEmoji: {
    fontSize: 16,
    color: '#42364E',
  },
});

export default function Navbar() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, webStyles.container]}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Text style={[styles.logoText, webStyles.logoText]}>Mibo</Text>
        </View>

        {/* Nav Links */}
        <View style={styles.navLinks}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={[styles.navLink, webStyles.navLink]}>Appstore</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={[styles.navLink, webStyles.navLink]}>Community</Text>
          </TouchableOpacity>
        </View>

        {/* Right Section: Auth + Icons */}
        <View style={styles.rightSection}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => router.push('/login')}
          >
            <Text style={[styles.signInText, webStyles.signInText]}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.signUpButton, webStyles.signUpButton]}
            activeOpacity={0.7}
            onPress={() => router.push('/register')}
          >
            <Text style={[styles.signUpText, webStyles.signUpText]}>Sign up</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
            <PersonIcon />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.iconButton}>
            <MailIcon />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingHorizontal: 40,
    paddingTop: 20,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1400,
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#FFFFFF',
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#42364E',
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
    flex: 2,
    justifyContent: 'center',
  },
  navLink: {
    fontSize: 24,
    color: '#42364E',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    flex: 1,
    justifyContent: 'flex-end',
  },
  signInText: {
    fontSize: 18,
    color: 'rgba(103, 93, 114, 0.7)',
  },
  signUpButton: {
    backgroundColor: '#7C62FF',
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 50,
  },
  signUpText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  iconButton: {
    marginLeft: 4,
  },
});

// Web-specific styles that require CSS properties not available in React Native's StyleSheet
const webStyles = {
  container: Platform.OS === 'web'
    ? ({
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0px 9px 20px rgba(141, 141, 141, 0.25)',
      } as any)
    : {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      },
  logoText: Platform.OS === 'web'
    ? ({
        fontFamily: '"Pixelify Sans", sans-serif',
      } as any)
    : {},
  navLink: Platform.OS === 'web'
    ? ({
        fontFamily: '"PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif',
        cursor: 'pointer',
      } as any)
    : {},
  signInText: Platform.OS === 'web'
    ? ({
        fontFamily: '"PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif',
        cursor: 'pointer',
      } as any)
    : {},
  signUpButton: Platform.OS === 'web'
    ? ({
        boxShadow: '0px 4px 12px rgba(124, 98, 255, 0.4)',
        cursor: 'pointer',
      } as any)
    : {},
  signUpText: Platform.OS === 'web'
    ? ({
        fontFamily: '"PingFang SC", "Helvetica Neue", Helvetica, Arial, sans-serif',
      } as any)
    : {},
};
