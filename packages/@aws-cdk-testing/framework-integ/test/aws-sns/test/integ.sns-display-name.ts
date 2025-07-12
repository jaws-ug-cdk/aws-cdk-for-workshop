// packages/@aws-cdk-testing/framework-integ/test/aws-sns/test/integ.sns-display-name.ts
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Topic } from 'aws-cdk-lib/aws-sns';
import * as integ from '@aws-cdk/integ-tests-alpha';

// テスト用のStackを定義
class TestStack extends Stack {
  /**
   * コンストラクター 
   */
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    // Topicコンストラクター
    new Topic(this, 'MyTopic', {
      topicName: 'MyTopicName',
      // displayNameを設定
      displayName: 'MyDisplayName',
    });
  }
}
// Appインスタンスを初期化
const app = new App();
// テスト用のスタックを作成
const stack = new TestStack(app, 'DisplayNameTopicTestStack');

// 統合テストの実行
new integ.IntegTest(app, 'SnsTest', {
  testCases: [stack],
});