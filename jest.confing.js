module.exports = {
	roots: ['<rootDir>/src'],
	testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
	collectCoverage: true,
	clearMocks: true,
	coverageDirectory: 'coverage',
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.svg$': '<rootDir>/svgTransform.js',
	},
	globals: {
		'ts-jest': {
			babelConfig: true,
		},
	},
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'svg'],
	moduleNameMapper: {
		'@Components/(.*)': '<rootDir>/src/Components/$1',
	},
}
