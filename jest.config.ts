const {compilerOptions} = require('./tsconfig.json');
const {pathsToModuleNameMapper} = require('ts-jest/utils');

module.exports = {
    preset: 'jest-preset-angular',
    roots: ['<rootDir>/src/'],
    testMatch: ['**/+(*.)+(spec).+(ts)'],
    setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
    collectCoverage:true,
    coverageReporters:['html'],
    coverageDictionary: 'coverage/my-ng-app',
    
    moduleNameMapper:pathsToModuleNameMapper(compilerOptions.paths || {}, {
        prefix: 'roorDir'
    })
};