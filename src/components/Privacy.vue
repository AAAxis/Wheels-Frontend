<template>
  <div>
    <header>
      <img class="page-cover-image" :src="coverImageUrl" :style="{ objectPosition: 'center 50%' }" />
      <h1 class="page-title">{{ pageTitle }}</h1>
    </header>
    <div class="page-body">
      <p>{{ pageContent[0] }}</p>
      <p>{{ pageContent[1] }}</p>
      <p>{{ pageContent[2] }}</p>
      <p>{{ pageContent[3] }}</p>
      <p>{{ pageContent[4] }}</p>
      <p>{{ pageContent[5] }}</p>
      <p>{{ pageContent[6] }}</p>
      <ul>
        <li v-for="info in personallyIdentifiableInfo">{{ info }}</li>
      </ul>
      <p>{{ pageContent[7] }}</p>
      <p>{{ pageContent[8] }}</p>
      <ul>
        <li v-for="method in collectionMethods">{{ method }}</li>
      </ul>
      <p>{{ pageContent[9] }}</p>
      <p>{{ pageContent[10] }}</p>
      <ul>
        <li v-for="purpose in collectionPurposes">{{ purpose }}</li>
      </ul>
      <p>{{ pageContent[11] }}</p>
      <p>{{ pageContent[12] }}</p>
      <ul>
        <li v-for="usage in useSharingInfo">{{ usage }}</li>
      </ul>
      <p>{{ pageContent[13] }}</p>
      <p>{{ pageContent[14] }}</p>
      <p>{{ pageContent[15] }}</p>
      <p>{{ pageContent[16] }}</p>
      <ul>
        <li v-for="userRight in userRights">{{ userRight }}</li>
      </ul>
      <p>{{ pageContent[17] }}</p>
      <p>{{ pageContent[18] }}</p>
      <p>{{ pageContent[19] }}</p>
      <p>{{ pageContent[20] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      coverImageUrl:
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb',
      pageTitle: 'Privacy Policy',
      pageContent: [
        'Privacy Policy',
        'Effective Date: 2023-05-23',
        'Introduction',
        'Thank you for visiting Wheels Works. This Privacy Policy outlines how we collect, use, and protect the information you provide to us. By accessing or using our website wheels.works, you agree to the terms of this policy.',
        'Types of Information Collected',
        'We may collect the following types of personally identifiable information (PII) from our users:',
        'In addition, we may collect non-personally identifiable information automatically, such as IP address, browser type, operating system, and website usage data through the use of cookies and similar technologies. For more information on our use of cookies, please refer to the "Cookies and Tracking Technologies" section below.',
      ],
      personallyIdentifiableInfo: ['Name', 'Address', 'Email address', 'Phone number', 'Billing information', 'Account preferences'],
      collectionMethods: [
        'We collect information through various methods, including:',
        'User registration and account creation forms',
        'Contact forms or inquiries',
        'Online purchases',
        'Surveys or feedback submissions',
        'Communication with our customer support',
      ],
      collectionPurposes: [
        'We collect and use the information we gather for the following purposes:',
        'Providing and personalizing our products and services',
        'Processing and fulfilling orders or requests',
        'Improving our website, products, and services',
        'Sending promotional materials, newsletters, or marketing communications (with your consent)',
        'Conducting research and analysis',
        'Ensuring the security of our systems and detecting fraudulent activities',
      ],
      useSharingInfo: [
        'We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:',
        'With trusted service providers who assist us in delivering our products and services',
        'When required by law or to protect our rights, safety, or property',
        'In the event of a corporate merger, acquisition, or sale of assets',
      ],
      userRights: [
        'You have the right to access, update, correct, or delete your personal information held by us. If you wish to exercise these rights, please contact us using the information provided in the "Contact Information" section below. We will respond to your request within a reasonable timeframe.',
      ],
</script>