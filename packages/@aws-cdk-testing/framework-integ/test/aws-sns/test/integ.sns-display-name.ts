// packages/@aws-cdk-testing/framework-integ/test/aws-sns/test/integ.sns-display-name.ts
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Topic } from 'aws-cdk-lib/aws-sns';
import * as integ from '@aws-cdk/integ-tests-alpha';

// テスト用のStackを定義
class TestStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new Topic(this, 'MyTopic', {
      topicName: 'MyTopicName',
      // displayNameを設定
      displayName: 'MyDisplayName',
    });
  }
}

const app = new App();

const stack = new TestStack(app, 'DisplayNameTopicTestStack');

// 統合テストの実行
new integ.IntegTest(app, 'SnsTest', {
  testCases: [stack],
});
