import type { Config } from '@jest/types';

export default async (): Promise<Config.InitialOptions> => {
    return {
        transform: {
            '^.+\\.tsx?$': 'ts-jest',
        },
        testEnvironment: 'jest-environment-jsdom',
        moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
        collectCoverage: true,
        coverageReporters: ['lcov', 'text', 'text-summary', 'html']
    };
};
