import { App, Stack, StackProps } from 'aws-cdk-lib';
import { Topic } from 'aws-cdk-lib/aws-sns';
import * as integ from '@aws-cdk/integ-tests-alpha';

class TestStack extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new Topic(this, 'MyTopic', {
      topicName: 'MyTopicName',
      displayName: 'MyDisplayName',
    });
  }
}

const app = new App();

const stack = new TestStack(app, 'SNSFifoInteg');

new integ.IntegTest(app, 'SnsTest', {
  testCases: [stack],
});
