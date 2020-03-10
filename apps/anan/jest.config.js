module.exports = {
  name: 'anan',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/anan',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
