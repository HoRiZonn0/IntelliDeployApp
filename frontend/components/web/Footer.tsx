import React from 'react';
import { View, Text, TextInput, StyleSheet, Platform, TouchableOpacity } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.topRow}>
          <View style={styles.brandArea}>
            <Text style={[styles.logo, Platform.OS === 'web' && { fontFamily: 'Pixelify Sans, monospace' } as any]}>
              IntelliDeploy
            </Text>
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.input, Platform.OS === 'web' && { outlineStyle: 'none' } as any]}
                placeholder="帮我部署一下这个环境！"
                placeholderTextColor="rgba(73,74,100,0.5)"
              />
              <TouchableOpacity style={styles.sendButton}>
                <Text style={styles.sendButtonText}>→</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.promptArea}>
            <Text style={styles.promptText}>我想做一款可以提升执行力的App！</Text>
          </View>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.copyright}>IntelliDeploy © 2026. All rights reserved.</Text>
          <View style={styles.links}>
            <TouchableOpacity>
              <Text style={styles.linkText}>Terms & condition</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.linkText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%' as any,
    paddingVertical: 60,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(200,200,220,0.3)',
  },
  inner: {
    maxWidth: 1200,
    width: '100%' as any,
    alignSelf: 'center' as any,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 40,
    flexWrap: 'wrap',
    gap: 24,
  },
  brandArea: {
    flex: 1,
    minWidth: 300,
  },
  logo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#494A64',
    marginBottom: 16,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderWidth: 1,
    borderColor: 'rgba(200,200,220,0.5)',
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 4,
    maxWidth: 400,
  },
  input: {
    flex: 1,
    height: 44,
    fontSize: 14,
    color: '#494A64',
  },
  sendButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#7C62FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  promptArea: {
    backgroundColor: 'rgba(124,98,255,0.08)',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  promptText: {
    fontSize: 14,
    color: '#7C62FF',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: 'rgba(200,200,220,0.2)',
    flexWrap: 'wrap',
    gap: 16,
  },
  copyright: {
    fontSize: 14,
    color: 'rgba(73,74,100,0.6)',
  },
  links: {
    flexDirection: 'row',
    gap: 24,
  },
  linkText: {
    fontSize: 14,
    color: 'rgba(73,74,100,0.6)',
  },
});
