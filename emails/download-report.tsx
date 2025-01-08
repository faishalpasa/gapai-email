import {
  Container,
  Img,
  Text,
  Button,
  Row,
  Column
} from '@react-email/components';
import * as React from 'react';

import { Layout } from './static/components/Layout';

const baseUrl = '/static/images';

const DownloadReport = () => {
  return (
    <Layout>
      <Container>
        <Row className="bg-[#D4F7E7] p-6 overflow-hidden">
          <Column>
            <Text className="text-primary-600 text-[18px] leading-[24px] font-semibold m-0 mb-2">
              Global Workforce Solutions
            </Text>
            <Text className="text-dark-700 text-base leading-[22px] font-medium m-0 max-w-[390px]">
              How Indonesian Blue-Collar Talent is Meeting International Labor
              Demands
            </Text>
          </Column>
          <Column className="relative w-[140px]">
            <Img
              src={`${baseUrl}/cv.png`}
              alt="cv"
              width="123"
              height="137"
              className="absolute -bottom-10 left-0 z-10"
            />

            <Img
              src={`${baseUrl}/quarter-circle.png`}
              alt="querter-cirle"
              width="111"
              height="111"
              className="absolute -bottom-6 -right-6"
            />
          </Column>
        </Row>
      </Container>

      <Container>
        <Row className="p-12">
          <Column>
            <Text className="text-dark-700 text-[18px] leading-[24px] font-semibold m-0 mb-8">
              Here&apos;s your link to the report
            </Text>

            <Text className="text-primary-text-color text-base leading-[22px] font-medium m-0 mb-8">
              For our first white paper report, we provide information How
              Indonesian Blue-Collar Talent is Meeting International Labor
              Demands
            </Text>

            <Button
              href="/"
              className="bg-secondary-500 text-dark-700 text-base leading-[22px] font-medium px-6 py-2 rounded-lg mb-8"
            >
              Download the Report
            </Button>

            <Text className="text-dark-700 text-[18px] leading-[24px] font-semibold m-0 mb-8">
              New to Gapai?
            </Text>

            <Text className="text-primary-text-color text-base leading-[22px] font-medium m-0 mb-8">
              No problem! To learn more about us and how we&apos;re working to
              build the global workforce solution platform, check out our
              website and sign up for your needs related global workforce
              solution.
            </Text>

            <Button
              href="/"
              className="bg-transparent border-solid border border-primary-500 text-dark-700 text-primary-500 text-base leading-[22px] font-medium px-6 py-2 rounded-lg mb-8"
            >
              Check Out Gapai
            </Button>
          </Column>
        </Row>
      </Container>
    </Layout>
  );
};

export default DownloadReport;
