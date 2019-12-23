#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { SkiReactStack } from '../lib/ski-react-stack';

const app = new cdk.App();
new SkiReactStack(app, 'SkiReactStack');
