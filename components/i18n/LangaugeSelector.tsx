import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, View } from 'react-native';

export function LanguageSelector() {
  const { i18n } = useTranslation();
  
  const changeLanguage = (locale: string) => {
    i18n.changeLanguage(locale);
  };

  return (
    <View>
      <Button title="English" onPress={() => changeLanguage('en')} />
      <Button title="Spanish" onPress={() => changeLanguage('es')} />
      <Button title="French" onPress={() => changeLanguage('fr')} />
      <Button title="Tagalog" onPress={() => changeLanguage('tl')} />
    </View>
  );
}