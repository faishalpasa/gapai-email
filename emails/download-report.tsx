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

const baseUrl = 'https://storage.googleapis.com/gapai-prod/emails/white-paper';

const DownloadReport = () => {
  return (
    <Layout>
      <Container className="max-w-3xl">
        <Row
          className="bg-[#D4F7E7] p-0 overflow-hidden bg-no-repeat bg-contain relative"
          style={{
            backgroundImage: `url(${baseUrl}/quarter-circle.png)`,
            backgroundPosition: 'right bottom',
            backgroundSize: '147px'
          }}
        >
          <Column className="p-6">
            <Text className="mobile text-primary-600 text-[18px] leading-[24px] font-semibold m-0 mb-2">
              Global Workforce Solutions
            </Text>
            <Text className="mobile text-dark-700 text-base leading-[22px] font-medium m-0 max-w-[390px]">
              How Indonesian Blue-Collar Talent is Meeting International Labor
              Demands
            </Text>

            <Text className="desktop text-primary-600 text-[28px] leading-[40px] font-semibold m-0 mb-2">
              Global Workforce Solutions
            </Text>
            <Text className="desktop text-dark-700 text-[24px] leading-[30px] font-medium m-0 max-w-[390px]">
              How Indonesian Blue-Collar Talent is Meeting International Labor
              Demands
            </Text>
          </Column>
          <Column className="relative align-bottom pr-6 pt-6">
            <Img
              src={`${baseUrl}/cv.png`}
              alt="cv"
              className="mobile block h-full max-h-[137px] ml-auto"
            />

            <Img
              src={`${baseUrl}/cv.png`}
              alt="cv"
              className="desktop block h-full max-h-[236px] ml-auto"
            />
          </Column>
        </Row>
      </Container>

      <Container>
        <Row className="p-12 text-center">
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
              href="https://gapai.id/employer"
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
