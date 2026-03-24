import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <View style={styles.statItem}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const StatsSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.transitionText}>
        {'很高兴遇见你！因为你的加入，我们更加温暖和有趣——'}
      </Text>
      <View style={styles.statsRow}>
        <StatItem value="381032" label="Users" />
        <StatItem value="5289" label="CloudApps" />
        <StatItem value="2319" label="Authentic Apps" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  transitionText: {
    fontFamily: 'PingFang SC',
    fontSize: 24,
    fontWeight: '500',
    color: '#494A64',
    opacity: 0.8,
    textAlign: 'center',
    marginBottom: 40,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    maxWidth: 900,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontFamily: 'PingFang SC',
    fontSize: 60,
    fontWeight: '400',
    color: '#494A64',
  },
  statLabel: {
    fontFamily: 'PingFang SC',
    fontSize: 16,
    fontWeight: '400',
    color: '#494A64',
    marginTop: 8,
  },
});

export default StatsSection;
