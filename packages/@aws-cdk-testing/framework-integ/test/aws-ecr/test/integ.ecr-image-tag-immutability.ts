// packages/@aws-cdk-testing/framework-integ/test/aws-ecr/test/integ.ecr-image-tag-immutability.ts
import { App, Stack, StackProps } from 'aws-cdk-lib';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import * as integ from '@aws-cdk/integ-tests-alpha';

// テスト用のStackを定義
class TestStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new ecr.Repository(this, 'MyRepository', {
      // imageTagMutabilityを設定
      imageTagMutability: ecr.ImageTagMutability.IMMUTABLE,
    });
  }
}

const app = new App();

const stack = new TestStack(app, 'ImageTagMutabilityTestStack');

// 統合テストの実行
new integ.IntegTest(app, 'EcrTest', {
  testCases: [stack],
});