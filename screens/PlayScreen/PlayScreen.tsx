import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text } from "react-native";

export function PlayScreen() {
 const { t } = useTranslation();
  return (
    <View>
      <Text>{t('play')}</Text>
    </View>
  )
}
