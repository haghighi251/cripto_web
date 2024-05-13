'use client';

import React, { useMemo } from 'react';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourcesToBackend from 'i18next-resources-to-backend';
import { I18nextProvider as Provider, initReactI18next } from 'react-i18next';

import { getOptions } from './settings';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(
        resourcesToBackend(
            (language: string, namespace: string) =>
                import(
                    `../../infrastructures/locales/${language}/${namespace}.json`
                ),
        ),
    )
    .init({
        ...getOptions(),
        detection: {
            caches: ['cookie', 'localStorage'],
            order: ['cookie', 'localStorage'],
        },
    });

export function I18nProvider({
    children,
    language,
}: {
    children: React.ReactNode;
    language: string;
}) {
    useMemo(() => {
        i18next.changeLanguage(language);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <Provider i18n={i18next}>{children}</Provider>;
}
