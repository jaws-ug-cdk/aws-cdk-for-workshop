import type { StackProps } from 'aws-cdk-lib';
import { App, Stack } from 'aws-cdk-lib';
import { Topic } from 'aws-cdk-lib/aws-sns';

import { IntegTest } from '@aws-cdk/integ-tests-alpha';

class SNSDisplayNameInteg extends Stack {
  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    new Topic(this, 'MyTopic', {
      displayName: 'My Display Name',
    });
  }
}

const app = new App();

const stack = new SNSDisplayNameInteg(app, 'sns-display-name');

new IntegTest(app, 'sns-display-name-test', {
  testCases: [stack],
});
