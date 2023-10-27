import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { uiColors } from "../../constants/colors";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "../../components/i18n/LangaugeSelector";

export function LearnScreen() {
  const { t } = useTranslation()
  return (
    <View style={styles.screen}>
      <Text>{t('learn')}</Text>
      <LanguageSelector />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
}
)