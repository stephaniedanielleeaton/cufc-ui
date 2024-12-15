import React from 'react';
import AdminPage from './AdminPage.jsx';

export default {
  title: 'Admin/AdminPage',
  component: AdminPage,
  tags: ['autodocs'],
};

const handleOnNavigationClick = (message) => {
  console.log(message);
};

const handleOnUpdateMember = (member) => {
  console.log(member);
};

const Template = (args) => <AdminPage {...args} />;

export const DefaultView = Template.bind({});

DefaultView.args = {
  onNavigationClick: handleOnNavigationClick,
  onUpdateMember: handleOnUpdateMember,
  members: [
    {
      _id: '6653a9822c69de37c98e196e',
      square_customer_id: 'N1PSDPNSXHJVHDTA9QANKA9C88',
      display_first_name: 'Brandon',
      display_last_name: 'Caylor',
      personal_info: {
        legal_first_name: 'Brandon',
        legal_last_name: 'Caylor',
        email: 'bcaylor4129@outlook.com',
        phone: '6146878124',
        date_of_birth: '1995-01-21T00:00:00.000Z',
        address: {
          street: '7505 Sawmill Commons Lane Apt K',
          city: 'Dublin',
          state: 'OH',
          zip: '43016',
          country: 'United States',
        },
      },
      is_waiver_on_file: true,
      square_subscriptions: [
        {
          id: '3abf4390-479b-4506-ab17-f86128dcd7e8',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: 'N1PSDPNSXHJVHDTA9QANKA9C88',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChBv3lCft18ywkTC-O6VqecpEJ0L'],
          version: 2,
          createdAt: '2024-05-28T13:39:22-04:00',
          cardId: 'ccof:CA4SEDpa2MC5um5P2_aTGIy8jw0oAg',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: 'bff5fac2-1db1-4436-a004-fe8a32fab126',
              ordinal: 0,
              orderTemplateId: 'q6iKdVSUe3ecrVQNbQrC5Jq5NIRZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChBv3lCft18ywkTC-O6VqecpEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'YBcReCXtGrkDhjeNWWNEOwgnANJZY',
          primaryRecipient: {
            customerId: 'N1PSDPNSXHJVHDTA9QANKA9C88',
            givenName: 'Brandon',
            familyName: 'Caylor',
            emailAddress: 'bcaylor4129@outlook.com',
            address: {
              addressLine1: '7505 Sawmill Commons Lane',
              addressLine2: 'Apt K',
              locality: 'Dublin',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43016',
            },
            phoneNumber: '+16146978124',
          },
          paymentRequests: [
            {
              uid: 'a6ed1a04-6223-48ec-bd91-4d36b8fa778f',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SEDpa2MC5um5P2_aTGIy8jw0oAg',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000013',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChBv3lCft18ywkTC-O6VqecpEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T17:39:24Z',
          updatedAt: '2024-06-01T17:39:27Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: '3abf4390-479b-4506-ab17-f86128dcd7e8',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T17:39:24.000Z',
      role: 'students',
      checkedIn: false,
    },
    {
      _id: '6653a8f7a06fc258e184da97',
      square_customer_id: 'SW9B7MHFD92WPN5Q5PNN6ZM7EG',
      display_first_name: 'Olivia',
      display_last_name: 'Cleymaet',
      personal_info: {
        legal_first_name: 'Olivia',
        legal_last_name: 'Cleymaet',
        email: 'cleymaetbass@gmail.com',
        phone: '7752008529',
        date_of_birth: '1995-03-12T00:00:00.000Z',
        address: {
          street: '4869 Moreland Dr W',
          city: 'Columbus',
          state: 'OH',
          zip: '43220',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: 'c6bac78b-0166-43bb-8618-91bba3003281',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: 'SW9B7MHFD92WPN5Q5PNN6ZM7EG',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChD5EAQrX1TmRbpjawdVlzGOEJ0L'],
          version: 2,
          createdAt: '2024-05-28T13:33:45-04:00',
          cardId: 'ccof:CA4SEAmqflm9FqvZM_UwYYa-VWkoAg',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: '1f2d9724-e437-4aa9-b13b-98efb1f775cd',
              ordinal: 0,
              orderTemplateId: 'a0dLDrSwODF2kZrL6QtefbTqsCUZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChD5EAQrX1TmRbpjawdVlzGOEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'A7BuKjQKvioY0bRqNs1D1PZad5OZY',
          primaryRecipient: {
            customerId: 'SW9B7MHFD92WPN5Q5PNN6ZM7EG',
            givenName: 'Olivia',
            familyName: 'Cleymaet',
            emailAddress: 'cleymaetbass@gmail.com',
            address: {
              addressLine1: '4869 Moreland Dr W',
              locality: 'Columbus',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43220',
            },
            phoneNumber: '+17752008529',
          },
          paymentRequests: [
            {
              uid: '7913bfd8-61a4-468f-8cf3-6742ce137150',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SEAmqflm9FqvZM_UwYYa-VWkoAg',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000012',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChD5EAQrX1TmRbpjawdVlzGOEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T17:33:54Z',
          updatedAt: '2024-06-01T17:33:56Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: 'c6bac78b-0166-43bb-8618-91bba3003281',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T17:33:54.000Z',
      role: 'student',
      checkedIn: false,
      lastCheckInDate: '2024-12-05T00:47:09.274Z',
    },
    {
      _id: '66562f140dfd58118f418246',
      square_customer_id: 'GHMHKA5NBM4WJDRRVGEJCXF91M',
      display_first_name: 'Dwain',
      display_last_name: 'Crackel',
      personal_info: {
        legal_first_name: 'Dwain',
        legal_last_name: 'Crackel',
        email: 'dcrackel@gmail.com',
        phone: '6145176456',
        date_of_birth: '2024-05-28T00:00:00.000Z',
        address: {
          street: '20 PENNSYLVANIA AVE',
          city: 'DELAWARE',
          state: 'OH',
          zip: '43015',
          country: 'United States',
        },
      },
      square_subscriptions: [],
      subscription_status: 'INACTIVE',
      subscription_start_date: null,
      square_invoices: [],
      last_invoice_status: 'NO_INVOICES',
      last_invoice_date: null,
      role: 'admin',
      checkedIn: false,
      lastCheckInDate: '2024-09-06T16:30:00Z',
      is_waiver_on_file: true
    },
    {
      _id: '6653a9d72c69de37c98e1972',
      square_customer_id: 'E1C0ZS0PQAEXCDJWFE9TJK7XZ8',
      display_first_name: 'Seth',
      display_last_name: 'Day',
      personal_info: {
        legal_first_name: 'Seth',
        legal_last_name: 'Day',
        email: 'day_seth@yahoo.com',
        phone: '7406895007',
        date_of_birth: '1980-02-08T00:00:00.000Z',
        address: {
          street: '2690 Boice Rd',
          city: 'Lancaster',
          state: 'OH',
          zip: '43130',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '7f03f968-1eb9-43d0-8600-7ea3e1dec1e2',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: 'E1C0ZS0PQAEXCDJWFE9TJK7XZ8',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChA4SsbkamJNOQpEvtJsVxJ9EJ0L'],
          version: 2,
          createdAt: '2024-05-28T13:45:38-04:00',
          cardId: 'ccof:CA4SEEfkCUF9w198O0Dl8dK2AEEoAg',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: '92cafa1a-57ba-4e9f-9b72-13ff1e873c6f',
              ordinal: 0,
              orderTemplateId: '4fdqxN57IV98CSmPJS8A3YmbKJGZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChA4SsbkamJNOQpEvtJsVxJ9EJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'kLsIdit8AL3FvnGiFotDDq2j2QBZY',
          primaryRecipient: {
            customerId: 'E1C0ZS0PQAEXCDJWFE9TJK7XZ8',
            givenName: 'Seth',
            familyName: 'Day',
            emailAddress: 'day_seth@yahoo.com',
            address: {
              addressLine1: '2690 Boice Rd',
              locality: 'Lancaster',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43130',
            },
            phoneNumber: '+17406895007',
          },
          paymentRequests: [
            {
              uid: 'aaeed09a-8d4b-44d6-9f38-380c9d77259b',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SEEfkCUF9w198O0Dl8dK2AEEoAg',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000015',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChA4SsbkamJNOQpEvtJsVxJ9EJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T17:45:45Z',
          updatedAt: '2024-06-01T17:45:48Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: '7f03f968-1eb9-43d0-8600-7ea3e1dec1e2',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T17:45:45.000Z',
      role: 'student',
      checkedIn: true,
    },
    {
      _id: '6659387f0dfd58118f776658',
      square_customer_id: '27NSVVMQEHWQ24Y2EKKTS089BW',
      display_first_name: 'Matthew',
      display_last_name: 'Dicken',
      personal_info: {
        legal_first_name: 'Matthew',
        legal_last_name: 'Dicken',
        email: 'mdicken67@gmail.com',
        phone: '',
        date_of_birth: null,
        address: {
          street: '4601 Nickerson Rd',
          city: 'Columbus',
          state: 'OH',
          zip: '43228',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '5ea1fd5b-b590-4a29-8fa3-a89acf4b5753',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'FAE5D2A3OCJXILHTBIQZTXIE',
          customerId: '27NSVVMQEHWQ24Y2EKKTS089BW',
          startDate: '2024-05-09',
          canceledDate: '2024-06-09',
          chargedThroughDate: '2024-06-09',
          status: 'CANCELED',
          invoiceIds: ['inv:0-ChD5i8tfSAPjZ0qoZgS7UPHjEJ0L'],
          version: 2,
          createdAt: '2024-05-09T17:54:43-04:00',
          cardId: 'ccof:CA4SEC24Op427CqlWiFElldy40YoAg',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 9,
          phases: [
            {
              uid: '5171f402-8a8f-4b00-890a-acb696e9ac07',
              ordinal: 0,
              orderTemplateId: 'uW11L0pYzdg0S6LQDn6St9l85paZY',
              planPhaseUid: 'CXLSWNNYOPNWNHW35VNM743V',
            },
          ],
        },
        {
          id: 'f80ad1f9-c6d7-45ee-b7d0-24411fdbee8c',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: '4PXJP6SBPPZK45DYDXSPYSV6',
          customerId: '27NSVVMQEHWQ24Y2EKKTS089BW',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChC_Hb0uIpCKq7A98NeHmK3yEJ0L'],
          version: 1,
          createdAt: '2024-05-28T07:38:48-04:00',
          cardId: 'ccof:CA4SEC24Op427CqlWiFElldy40YoAg',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: '6532689c-b335-4b60-b928-92a0715dcaf3',
              ordinal: 0,
              orderTemplateId: 'SW45OmoVDNHBx2bD5EGmnGtO67GZY',
              planPhaseUid: 'JTV7FUPLTPQ6D7WVLRDWAFMB',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChC_Hb0uIpCKq7A98NeHmK3yEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 's5tOGO9wlR5X4tzJJx8d1LwyfFHZY',
          primaryRecipient: {
            customerId: '27NSVVMQEHWQ24Y2EKKTS089BW',
            givenName: 'Matthew',
            familyName: 'Dicken',
            emailAddress: 'mdicken67@gmail.com',
            phoneNumber: '+15136330140',
          },
          paymentRequests: [
            {
              uid: '63e91956-4965-452e-90ad-41893705234c',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SEC24Op427CqlWiFElldy40YoAg',
              computedAmountMoney: {
                amount: 20000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 20000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000006',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChC_Hb0uIpCKq7A98NeHmK3yEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T11:38:56Z',
          updatedAt: '2024-06-01T11:38:59Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: 'f80ad1f9-c6d7-45ee-b7d0-24411fdbee8c',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T11:38:56.000Z',
      role: 'coach',
      checkedIn: false,
    },
    {
      _id: '6656386f0dfd58118f422824',
      square_customer_id: '3S1KR2XXE35ZBPFZ5KXB2SQY5W',
      display_first_name: 'Stephanie',
      display_last_name: 'Eaton',
      personal_info: {
        legal_first_name: 'Stephanie',
        legal_last_name: 'Eaton',
        email: 'stephaniedanielleeaton@gmail.com',
        phone: '5136330140',
        date_of_birth: '1991-12-26T00:00:00.000Z',
        address: {
          street: '8266 Sunflare Dr',
          city: 'Columbus',
          state: 'OH',
          zip: '43240',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '6ddf996f-0ec1-4f0f-9167-3f0b62f88acd',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: '3S1KR2XXE35ZBPFZ5KXB2SQY5W',
          startDate: '2024-06-02',
          canceledDate: '2024-06-02',
          status: 'CANCELED',
          version: 1,
          createdAt: '2024-05-19T22:29:27-04:00',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: 'cc0ed70a-31be-4934-9a98-78fca4b35d00',
              ordinal: 0,
              orderTemplateId: 'kPY9G6bMjxTFXemrMWVwnk1OXKfZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
        {
          id: 'd5f435cb-09ce-4c40-9c07-6a7155881cd6',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: '4PXJP6SBPPZK45DYDXSPYSV6',
          customerId: '3S1KR2XXE35ZBPFZ5KXB2SQY5W',
          startDate: '2024-05-28',
          chargedThroughDate: '2024-06-28',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChDyxEMaOVsD21BJooArRn_lEJ0L'],
          version: 2,
          createdAt: '2024-05-28T07:11:15-04:00',
          cardId: 'ccof:CA4SEKjHmmcTAXdt3vOrwOlyiTUoAQ',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 28,
          phases: [
            {
              uid: '309d5b8c-7a34-4052-8e32-7a00b173adaa',
              ordinal: 0,
              orderTemplateId: 'APP0MrKWcvBBpZMsPaZbxrIBKNYZY',
              planPhaseUid: 'JTV7FUPLTPQ6D7WVLRDWAFMB',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-05-28',
      square_invoices: [
        {
          id: 'inv:0-ChDyxEMaOVsD21BJooArRn_lEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'i037I3nq0GgK6K2AQvAl2CFY6JYZY',
          primaryRecipient: {
            customerId: '3S1KR2XXE35ZBPFZ5KXB2SQY5W',
            givenName: 'Stephanie',
            familyName: 'Eaton',
            emailAddress: 'stephaniedanielleeaton@gmail.com',
            address: {
              addressLine1: '20 Pennsylvania Ave',
              locality: 'Delaware',
              postalCode: '43015',
            },
            phoneNumber: '+15136330140',
          },
          paymentRequests: [
            {
              uid: '3538bcce-6b80-4b5c-ad5a-5edf6fd5eba6',
              requestType: 'BALANCE',
              dueDate: '2024-05-28',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SEKjHmmcTAXdt3vOrwOlyiTUoAQ',
              computedAmountMoney: {
                amount: 20000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 20000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000002',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChDyxEMaOVsD21BJooArRn_lEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-05-28T11:31:19Z',
          updatedAt: '2024-05-28T11:31:21Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: 'd5f435cb-09ce-4c40-9c07-6a7155881cd6',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-05-28T11:31:19.000Z',
      role: 'admin',
      checkedIn: true,
    },
    {
      _id: '665e1c840edbb21b1089e2dc',
      square_customer_id: 'FS2KXHGV663VGPH7RTPBNQC13M',
      display_first_name: 'Evan',
      display_last_name: 'Gorsuch',
      personal_info: {
        legal_first_name: 'Evan',
        legal_last_name: 'Gorsuch',
        email: 'twocogsmontgumry@gmail.com',
        phone: '6145989019',
        date_of_birth: '1989-08-25T00:00:00.000Z',
        address: {
          street: '7379 Saratoga Ave',
          city: 'Reynoldsburg ',
          state: 'OH',
          zip: '43068',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '5f4bf339-e859-486e-8029-69d7d38dd9ac',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: 'FS2KXHGV663VGPH7RTPBNQC13M',
          startDate: '2024-06-03',
          chargedThroughDate: '2024-07-03',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChBdXyH3hFLnGSKgj22C3rExEJ0L'],
          version: 3,
          createdAt: '2024-06-03T15:51:59-04:00',
          cardId: 'ccof:CA4SEGRZwUrqFZvizQhCSOGRP3ooAg',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 3,
          phases: [
            {
              uid: 'd67ac3f5-cfb0-4d61-a00f-764fc05f38c1',
              ordinal: 0,
              orderTemplateId: 'matNPbz8l7KUxh4oAXkREDzbNyGZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-03',
      square_invoices: [
        {
          id: 'inv:0-ChBdXyH3hFLnGSKgj22C3rExEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'ETyZVzG8Q23bG5uMK6vAcft8iQJZY',
          primaryRecipient: {
            customerId: 'FS2KXHGV663VGPH7RTPBNQC13M',
            givenName: 'Evan',
            familyName: 'Gorsuch',
            emailAddress: 'twocogsmontgumry@gmail.com',
            address: {
              addressLine1: '7379 Saratoga Ave',
              locality: 'Reynoldsburg',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43068',
            },
          },
          paymentRequests: [
            {
              uid: 'f1936ee2-7bb8-4390-a8f5-4336a24c4478',
              requestType: 'BALANCE',
              dueDate: '2024-06-03',
              tippingEnabled: false,
              automaticPaymentSource: 'NONE',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000022',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChBdXyH3hFLnGSKgj22C3rExEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-03T19:52:03Z',
          updatedAt: '2024-06-03T20:01:25Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: '5f4bf339-e859-486e-8029-69d7d38dd9ac',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-03T19:52:03.000Z',
      role: 'student',
      checkedIn: false,
    },
    {
      _id: '665610620dfd58118f3f60a8',
      square_customer_id: 'JG9RR5FV6ZSPJ66TJE9VCVCEWR',
      display_first_name: 'Will',
      display_last_name: 'Handford',
      personal_info: {
        legal_first_name: 'William',
        legal_last_name: 'Handford',
        email: 'whandford87@gmail.com',
        phone: '6143017056',
        date_of_birth: '1987-08-15T00:00:00.000Z',
        address: {
          street: '5161 Bressler Dr.',
          city: 'Hilliard',
          state: 'OH',
          zip: '43026',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: 'a7ad995e-b974-4d62-aed6-2a867a815b00',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: '4PXJP6SBPPZK45DYDXSPYSV6',
          customerId: 'JG9RR5FV6ZSPJ66TJE9VCVCEWR',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChAxXv6kNmeuyI8REkoxg_JAEJ0L'],
          version: 2,
          createdAt: '2024-05-28T13:56:44-04:00',
          cardId: 'ccof:CA4SECFHlrzrUl3w4wwxGaso_T8oAQ',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: '534c69e1-02c5-41c3-85b1-cb792e6b9b88',
              ordinal: 0,
              orderTemplateId: 'yeKgab77arBpe0g42eoKRwgwZaQZY',
              planPhaseUid: 'JTV7FUPLTPQ6D7WVLRDWAFMB',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChAxXv6kNmeuyI8REkoxg_JAEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'iUzXjrrThhwoPBmEs7mAkZqro6VZY',
          primaryRecipient: {
            customerId: 'JG9RR5FV6ZSPJ66TJE9VCVCEWR',
            givenName: 'William',
            familyName: 'Handford',
            emailAddress: 'whandford87@gmail.com',
            address: {
              addressLine1: '5161 Bressler Dr.',
              locality: 'Hilliard',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43026',
            },
            phoneNumber: '+16143017056',
          },
          paymentRequests: [
            {
              uid: '18d39588-aaac-4e93-9d79-ccfe68e8c491',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SECFHlrzrUl3w4wwxGaso_T8oAQ',
              computedAmountMoney: {
                amount: 15000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 15000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000017',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChAxXv6kNmeuyI8REkoxg_JAEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T17:56:49Z',
          updatedAt: '2024-06-01T17:56:52Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: 'a7ad995e-b974-4d62-aed6-2a867a815b00',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T17:56:49.000Z',
      role: 'coach',
      checkedIn: false,
    },
    {
      _id: '6653aa4c2c69de37c98e1976',
      square_customer_id: 'B0H8MCA0PNERZ7Q622KX9G00BM',
      display_first_name: 'Rachelle',
      display_last_name: 'Hitt',
      personal_info: {
        legal_first_name: 'Rachelle',
        legal_last_name: 'Hitt',
        email: 'rachelle.hitt@gmail.com',
        phone: '6145565547',
        date_of_birth: '1997-09-17T00:00:00.000Z',
        address: {
          street: '880 Oxford St',
          city: 'Worthington',
          state: 'OH',
          zip: '43085',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '84d4307b-74f1-4095-87cb-66fa9e9f1ef1',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: 'B0H8MCA0PNERZ7Q622KX9G00BM',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChC85WJthSCKJI09cJAbfuf9EJ0L'],
          version: 2,
          createdAt: '2024-05-28T13:53:46-04:00',
          cardId: 'ccof:CA4SEF-LeJTQ5dqFduWanQG2UHcoAQ',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: 'dfb80646-5363-4c69-b23e-c701de072a73',
              ordinal: 0,
              orderTemplateId: 'gV4vFdbuqwddrMX9CyT9PPWSYqPZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChC85WJthSCKJI09cJAbfuf9EJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'quK3bj6rpc49wWmABbdmcKA2mscZY',
          primaryRecipient: {
            customerId: 'B0H8MCA0PNERZ7Q622KX9G00BM',
            givenName: 'Rachelle',
            familyName: 'Hitt',
            emailAddress: 'rachelle.hitt@gmail.com',
            address: {
              addressLine1: '880 Oxford St',
              locality: 'Worthington',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43085',
            },
            phoneNumber: '+16145565547',
          },
          paymentRequests: [
            {
              uid: '676bfa82-5a4b-495f-afeb-d66209aa12b8',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'NONE',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000016',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChC85WJthSCKJI09cJAbfuf9EJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T17:53:49Z',
          updatedAt: '2024-06-04T15:39:02Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: '84d4307b-74f1-4095-87cb-66fa9e9f1ef1',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T17:53:49.000Z',
      role: 'student',
      checkedIn: false,
    },
    {
      _id: '665938110dfd58118f775ed2',
      square_customer_id: '6FA988DH0356X7P1GT8XE2Y9B8',
      display_first_name: 'William',
      display_last_name: 'Martin',
      personal_info: {
        legal_first_name: 'Joseph',
        legal_last_name: 'Martin',
        email: 'usskongo@gmail.com',
        phone: '740-485-6243',
        date_of_birth: '1995-04-13T00:00:00.000Z',
        address: {
          street: '9040 Myers Rd',
          city: 'Centerburg',
          state: 'OH',
          zip: '43011',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '7aeab056-e2df-4bcc-89ce-90bc78d82e69',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: '6FA988DH0356X7P1GT8XE2Y9B8',
          startDate: '2024-06-02',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChBdelyn-ej62veC6Uu2DAdxEJ0L'],
          version: 2,
          createdAt: '2024-05-30T22:23:04-04:00',
          cardId: 'ccof:CA4SEFaKPx_gq-VFxJPraUQZDd4oAQ',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: '0d3ea3cc-e7b9-411a-bb36-8d355188e353',
              ordinal: 0,
              orderTemplateId: '83kAx5CnfJB3jdrz1VrZMppcB8RZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-02',
      square_invoices: [
        {
          id: 'inv:0-ChBdelyn-ej62veC6Uu2DAdxEJ0L',
          version: 1,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'yohHKyiMJOSwO7WpchlZIpLy7cGZY',
          primaryRecipient: {
            customerId: '6FA988DH0356X7P1GT8XE2Y9B8',
            givenName: 'Joseph',
            familyName: 'Martin',
            emailAddress: 'usskongo@gmail.com',
            address: {
              addressLine1: '9040 Myers Rd',
              locality: 'Centerburg',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43011',
            },
            phoneNumber: '+17404856243',
          },
          paymentRequests: [
            {
              uid: 'fccbbef8-99a1-462c-ae0c-a4d535451dcc',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'NONE',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 0,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000021',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChBdelyn-ej62veC6Uu2DAdxEJ0L',
          nextPaymentAmountMoney: {
            amount: 11000,
            currency: 'USD',
          },
          status: 'UNPAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-02T02:23:08Z',
          updatedAt: '2024-06-11T15:36:05Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: '7aeab056-e2df-4bcc-89ce-90bc78d82e69',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'UNPAID',
      last_invoice_date: '2024-06-02T02:23:08.000Z',
      role: 'student',
      checkedIn: false,
    },
    {
      _id: '66562f290dfd58118f4183ce',
      square_customer_id: '55THPRJJPTEZCPZ6BP3D32XK8R',
      display_first_name: 'Gina',
      display_last_name: 'Mendicino',
      personal_info: {
        legal_first_name: 'Regina',
        legal_last_name: 'Mendicino Dwyer',
        email: 'rjmendie@gmail.com',
        phone: '3306350914',
        date_of_birth: '1994-05-10T00:00:00.000Z',
        address: {
          street: '5380 Blackmer Ridge Blvd',
          city: 'Canal Winchester',
          state: 'OH',
          zip: '43110',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '7d358f52-c3a9-497c-9724-31c636acda71',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: '55THPRJJPTEZCPZ6BP3D32XK8R',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChDKiftBYuU3R74x5ao-a1v1EJ0L'],
          version: 2,
          createdAt: '2024-05-28T15:26:09-04:00',
          cardId: 'ccof:CA4SEKglaKAz1C8wmgtD_UpFW-IoAg',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: 'bdfb0d0e-fb4b-45a5-a12d-51deab841346',
              ordinal: 0,
              orderTemplateId: 'CcrvAHOlM8kkfllTHTFz6q9jtGMZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChDKiftBYuU3R74x5ao-a1v1EJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'qyMlvhgUpGjX2ToZlNhut74faTWZY',
          primaryRecipient: {
            customerId: '55THPRJJPTEZCPZ6BP3D32XK8R',
            givenName: 'Regina',
            familyName: 'Mendicino Dwyer',
            emailAddress: 'rjmendie@gmail.com',
            address: {
              addressLine1: '5380 Blackmer Ridge Blvd',
              locality: 'Canal Winchester',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43110',
            },
            phoneNumber: '+13306350914',
          },
          paymentRequests: [
            {
              uid: '1a8297a2-4b6e-4ef0-973a-33b689a80b11',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SEKglaKAz1C8wmgtD_UpFW-IoAg',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000019',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChDKiftBYuU3R74x5ao-a1v1EJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T18:40:28Z',
          updatedAt: '2024-06-01T18:40:29Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: '7d358f52-c3a9-497c-9724-31c636acda71',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T18:40:28.000Z',
      role: 'student',
      checkedIn: false,
    },
    {
      _id: '6669b7189309d61b16ef9bb2',
      square_customer_id: '4RBVC9K2QD4MAC131Q95GN3594',
      display_first_name: 'Carley',
      display_last_name: 'Miller',
      personal_info: {
        legal_first_name: 'Carley',
        legal_last_name: 'Miller',
        email: 'carleyjmiller17@gmail.com',
        phone: '7407070990',
        date_of_birth: '1999-10-20T00:00:00.000Z',
        address: {
          street: '13634 Winchester Road',
          city: 'Ashville',
          state: 'OH',
          zip: '43103',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: 'd4f1d0dc-e14c-4e50-b8a6-8f97101ebc7e',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: '4RBVC9K2QD4MAC131Q95GN3594',
          startDate: '2024-06-12',
          chargedThroughDate: '2024-07-12',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChCigREH04-M--Fco5j_wGTgEJ0L'],
          version: 1,
          createdAt: '2024-06-12T10:57:24-04:00',
          cardId: 'ccof:CA4SEOR7x3x8ZKukdJqHOOPuWugoAQ',
          timezone: 'America/New_York',
          source: {
            name: 'Checkout Link',
          },
          monthlyBillingAnchorDate: 12,
          phases: [
            {
              uid: 'c77fcf0f-15e9-4980-96b7-1472de3a6f78',
              ordinal: 0,
              orderTemplateId: 'OCPPq9LEcr9qG4IXENKphJDNCiLZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-12',
      square_invoices: [
        {
          id: 'inv:0-ChCigREH04-M--Fco5j_wGTgEJ0L',
          version: 3,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'Cc9I3T0rXzW0FVxbNQYpMq0APxIZY',
          primaryRecipient: {
            customerId: '4RBVC9K2QD4MAC131Q95GN3594',
            givenName: 'Carley',
            familyName: 'Miller',
            emailAddress: 'carleyjmiller17@gmail.com',
            phoneNumber: '+17407070990',
          },
          paymentRequests: [
            {
              uid: '326444e1-edde-41b3-8f24-5f40a593ac5b',
              requestType: 'BALANCE',
              dueDate: '2024-06-12',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SEOR7x3x8ZKukdJqHOOPuWugoAQ',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000029',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChCigREH04-M--Fco5j_wGTgEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-12T14:57:29Z',
          updatedAt: '2024-06-12T14:57:31Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: 'd4f1d0dc-e14c-4e50-b8a6-8f97101ebc7e',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-12T14:57:29.000Z',
      role: '',
      checkedIn: false,
    },
    {
      _id: '665939d60dfd58118f777e54',
      square_customer_id: 'QA7WCTSDAY4QXT43HCMGFBFMT4',
      display_first_name: 'John',
      display_last_name: 'Osborn',
      personal_info: {
        legal_first_name: 'John',
        legal_last_name: 'Osborn',
        email: 'josborn88@gmail.com',
        phone: '(614) 290-6072',
        date_of_birth: null,
        address: {
          street: '976 Waggoner Rd',
          city: 'Reynoldsburg',
          state: 'OH',
          zip: '43068',
          country: 'United States',
        },
      },
      square_subscriptions: [],
      subscription_status: 'INACTIVE',
      subscription_start_date: null,
      square_invoices: [],
      last_invoice_status: 'NO_INVOICES',
      last_invoice_date: null,
      role: 'student',
      checkedIn: false,
    },
    {
      _id: '6660a8a72a64b1586300ad83',
      square_customer_id: 'SDKSD6J0K83M1PSW1K6M3Q5YWR',
      display_first_name: 'Jennifer',
      display_last_name: 'Paschke',
      personal_info: {
        legal_first_name: 'Jennifer',
        legal_last_name: 'Paschke',
        email: 'energetic.jen@gmail.com',
        phone: '7656554081',
        date_of_birth: '1985-06-13T00:00:00.000Z',
        address: {
          street: '2862 Manola Dr',
          city: 'Columbus',
          state: 'OH',
          zip: '43209',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '12a6e273-78d6-4d25-b2f3-4eeb23be1db4',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'QXJOUFVSYYHXS66SJYM3FE4I',
          customerId: 'SDKSD6J0K83M1PSW1K6M3Q5YWR',
          startDate: '2024-06-05',
          chargedThroughDate: '2024-07-05',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChCWRsMNP3MJEEXtpyLabvO5EJ0L'],
          version: 3,
          createdAt: '2024-06-05T14:18:03-04:00',
          cardId: 'ccof:CA4SEJxAkKwCU7SEaGqD_PfNwVsoAQ',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 5,
          phases: [
            {
              uid: 'fd4b1d7e-395b-4280-99df-a29031cd97cf',
              ordinal: 0,
              orderTemplateId: 'ArjvRoKsCVPOjz8j7kbpNSEldUdZY',
              planPhaseUid: 'WHU3DBX57P57O5M55NAEIPMV',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-05',
      square_invoices: [
        {
          id: 'inv:0-ChCWRsMNP3MJEEXtpyLabvO5EJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'uSpKFv7kJn6sOAvbFey5F9KhQtLZY',
          primaryRecipient: {
            customerId: 'SDKSD6J0K83M1PSW1K6M3Q5YWR',
            givenName: 'Jennifer',
            familyName: 'Paschke',
            emailAddress: 'energetic.jen@gmail.com',
            address: {
              addressLine1: '2862 Manola Dr',
              locality: 'Columbus',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43209',
            },
            phoneNumber: '+17656554081',
          },
          paymentRequests: [
            {
              uid: '577edfee-2fe9-4a20-a81c-118922beeda2',
              requestType: 'BALANCE',
              dueDate: '2024-06-05',
              tippingEnabled: false,
              automaticPaymentSource: 'NONE',
              computedAmountMoney: {
                amount: 17500,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 17500,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000024',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChCWRsMNP3MJEEXtpyLabvO5EJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-05T18:18:07Z',
          updatedAt: '2024-06-05T18:31:44Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: '12a6e273-78d6-4d25-b2f3-4eeb23be1db4',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-05T18:18:07.000Z',
      role: '',
      checkedIn: false,
    },
    {
      _id: '6660ad3f2a64b1586300ad89',
      square_customer_id: 'SDKSD6J0K83M1PSW1K6M3Q5YWR',
      display_first_name: 'Charlie',
      display_last_name: 'Paschke',
      personal_info: {
        legal_first_name: 'Charles',
        legal_last_name: 'Paschke',
        email: 'energetic.jen@gmail.com',
        phone: '7656554081',
        date_of_birth: '1986-12-30T00:00:00.000Z',
        address: {
          street: '2862 Manola Dr',
          city: 'Columbus',
          state: 'OH',
          zip: '43209',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '12a6e273-78d6-4d25-b2f3-4eeb23be1db4',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'QXJOUFVSYYHXS66SJYM3FE4I',
          customerId: 'SDKSD6J0K83M1PSW1K6M3Q5YWR',
          startDate: '2024-06-05',
          chargedThroughDate: '2024-07-05',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChCWRsMNP3MJEEXtpyLabvO5EJ0L'],
          version: 3,
          createdAt: '2024-06-05T14:18:03-04:00',
          cardId: 'ccof:CA4SEJxAkKwCU7SEaGqD_PfNwVsoAQ',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 5,
          phases: [
            {
              uid: 'fd4b1d7e-395b-4280-99df-a29031cd97cf',
              ordinal: 0,
              orderTemplateId: 'ArjvRoKsCVPOjz8j7kbpNSEldUdZY',
              planPhaseUid: 'WHU3DBX57P57O5M55NAEIPMV',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-05',
      square_invoices: [
        {
          id: 'inv:0-ChCWRsMNP3MJEEXtpyLabvO5EJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'uSpKFv7kJn6sOAvbFey5F9KhQtLZY',
          primaryRecipient: {
            customerId: 'SDKSD6J0K83M1PSW1K6M3Q5YWR',
            givenName: 'Jennifer',
            familyName: 'Paschke',
            emailAddress: 'energetic.jen@gmail.com',
            address: {
              addressLine1: '2862 Manola Dr',
              locality: 'Columbus',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43209',
            },
            phoneNumber: '+17656554081',
          },
          paymentRequests: [
            {
              uid: '577edfee-2fe9-4a20-a81c-118922beeda2',
              requestType: 'BALANCE',
              dueDate: '2024-06-05',
              tippingEnabled: false,
              automaticPaymentSource: 'NONE',
              computedAmountMoney: {
                amount: 17500,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 17500,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000024',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChCWRsMNP3MJEEXtpyLabvO5EJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-05T18:18:07Z',
          updatedAt: '2024-06-05T18:31:44Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: '12a6e273-78d6-4d25-b2f3-4eeb23be1db4',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-05T18:18:07.000Z',
      role: '',
      checkedIn: false,
    },
    {
      _id: '6653a720a06fc258e184da8f',
      square_customer_id: 'H168BJDJTC6NW6A8SGF0F9VY3G',
      display_first_name: 'Trevor',
      display_last_name: 'Pedersen',
      personal_info: {
        legal_first_name: 'Trevor',
        legal_last_name: 'Pedersen',
        email: 'trevwap@gmail.com',
        phone: '2812240455',
        date_of_birth: '1991-07-29T00:00:00.000Z',
        address: {
          street: '437 Woodside Lake Dr',
          city: 'Gahanna',
          state: 'OH',
          zip: '43230',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '74103469-2262-4372-b5cd-25d254e21835',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: '4PXJP6SBPPZK45DYDXSPYSV6',
          customerId: 'H168BJDJTC6NW6A8SGF0F9VY3G',
          startDate: '2024-05-28',
          canceledDate: '2024-06-28',
          chargedThroughDate: '2024-06-28',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChBmStBr_59KHsjYfVH8iLKLEJ0L'],
          version: 2,
          createdAt: '2024-05-28T13:31:38-04:00',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 28,
          phases: [
            {
              uid: '26709972-9f29-4c11-b87b-f3f86966ff61',
              ordinal: 0,
              orderTemplateId: 'e822Hh8Q1R5dHLWr1r1rtaQWTv6YY',
              planPhaseUid: 'JTV7FUPLTPQ6D7WVLRDWAFMB',
            },
          ],
        },
        {
          id: 'b21afbb9-f1ed-456e-8435-bad156d9b14d',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: '4PXJP6SBPPZK45DYDXSPYSV6',
          customerId: 'H168BJDJTC6NW6A8SGF0F9VY3G',
          startDate: '2024-05-28',
          canceledDate: '2024-06-28',
          chargedThroughDate: '2024-06-28',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChDCkJgKmif9SdKCEhl7yj8REJ0L'],
          version: 1,
          createdAt: '2024-05-28T13:36:43-04:00',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 28,
          phases: [
            {
              uid: 'd093627a-84df-48f9-9815-67d39161caa2',
              ordinal: 0,
              orderTemplateId: 'mAqCqoH4EygBkBbBmaYR9nCMTF6YY',
              planPhaseUid: 'JTV7FUPLTPQ6D7WVLRDWAFMB',
            },
          ],
        },
        {
          id: 'c622cff1-01be-4f26-a281-4ec9444d84f2',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: '4PXJP6SBPPZK45DYDXSPYSV6',
          customerId: 'H168BJDJTC6NW6A8SGF0F9VY3G',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChBFtwhBKShVdcdb0USXmRzTEJ0L'],
          version: 2,
          createdAt: '2024-05-28T13:47:30-04:00',
          cardId: 'ccof:CA4SEHcjcE1U_DWN2em1YcGvDgEoAQ',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: '0298db97-7da3-44f7-a3be-3c8ad583c179',
              ordinal: 0,
              orderTemplateId: 'GoABfeF2nKJAsWl71rghUZdbyOWZY',
              planPhaseUid: 'JTV7FUPLTPQ6D7WVLRDWAFMB',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChBFtwhBKShVdcdb0USXmRzTEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'yuiSr9voq4qrceSmDuOcRwuQa6FZY',
          primaryRecipient: {
            customerId: 'H168BJDJTC6NW6A8SGF0F9VY3G',
            givenName: 'Trevor',
            familyName: 'Pedersen',
            emailAddress: 'trevwap@gmail.com',
            address: {
              addressLine1: '437 Woodside Lake Dr',
              locality: 'Gahanna',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43230',
            },
            phoneNumber: '+12812240455',
          },
          paymentRequests: [
            {
              uid: '8a470840-13f2-4d52-a979-d61d21b8a0ba',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SEHcjcE1U_DWN2em1YcGvDgEoAQ',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000008',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChBFtwhBKShVdcdb0USXmRzTEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T14:12:53Z',
          updatedAt: '2024-06-01T14:12:55Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: 'c622cff1-01be-4f26-a281-4ec9444d84f2',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T14:12:53.000Z',
      role: 'coach',
      checkedIn: false,
    },
    {
      _id: '6653a8b9a06fc258e184da95',
      square_customer_id: 'JBG6BGJ5XSCCCCGZAAK4J43DB0',
      display_first_name: 'Kari',
      display_last_name: 'Pedersen',
      personal_info: {
        legal_first_name: 'Kari',
        legal_last_name: 'Pedersen',
        email: 'trevwap@gmail.com',
        phone: '5133686271',
        date_of_birth: '1990-04-25T00:00:00.000Z',
        address: {
          street: '437 Woodside Lake Dr',
          city: 'Gahanna',
          state: 'OH',
          zip: '43230',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '624c2329-4011-4c53-a297-47c948f60394',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: 'JBG6BGJ5XSCCCCGZAAK4J43DB0',
          startDate: '2024-05-28',
          canceledDate: '2024-06-28',
          chargedThroughDate: '2024-06-28',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChDMDCmYrmmiNl7PT7x2uELpEJ0L'],
          version: 1,
          createdAt: '2024-05-28T13:32:30-04:00',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 28,
          phases: [
            {
              uid: 'cbb086c7-c48e-4832-9043-de0f8bde2eae',
              ordinal: 0,
              orderTemplateId: 'gb3hEjnOp7WUiTMmnMjgMKHLq1VZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
        {
          id: '898871f0-5a83-47c3-a5cb-a821ab6170a4',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: 'JBG6BGJ5XSCCCCGZAAK4J43DB0',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChBWzZTMUVTkFgYIlnh0FMOVEJ0L'],
          version: 2,
          createdAt: '2024-05-28T13:36:02-04:00',
          cardId: 'ccof:CA4SENmOr8UzyzsiR5F3ZfrocD0oAg',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: '748dd593-2e11-41eb-9b59-c952a66eb413',
              ordinal: 0,
              orderTemplateId: 'ywhJTvhF3jnibdCdSCbi8HPPKLVZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChBWzZTMUVTkFgYIlnh0FMOVEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'aKiGq7UuMuUQrAQDRQ0pVEDhbQdZY',
          primaryRecipient: {
            customerId: 'JBG6BGJ5XSCCCCGZAAK4J43DB0',
            givenName: 'Kari',
            familyName: 'Pedersen',
            emailAddress: 'trevwap@gmail.com',
            address: {
              addressLine1: '437 Woodside Lake Dr',
              locality: 'Gahanna',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43230',
            },
            phoneNumber: '+15133686271',
          },
          paymentRequests: [
            {
              uid: '33c8039d-ce9d-4d45-96c6-f09d355bd41f',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SENmOr8UzyzsiR5F3ZfrocD0oAg',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000007',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChBWzZTMUVTkFgYIlnh0FMOVEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T14:11:26Z',
          updatedAt: '2024-06-01T14:11:28Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: '898871f0-5a83-47c3-a5cb-a821ab6170a4',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T14:11:26.000Z',
      role: 'student',
      checkedIn: false,
    },
    {
      _id: '6660df80039180368c227f64',
      square_customer_id: 'M2X043ABFXR1325V8W2SSJGTMC',
      display_first_name: 'Luke',
      display_last_name: 'Pruitt ',
      personal_info: {
        legal_first_name: 'Luke ',
        legal_last_name: 'Pruitt ',
        email: 'lukepruitt2@outlook.com',
        phone: '7404380527',
        date_of_birth: '2005-05-25T00:00:00.000Z',
        address: {
          street: '7610 Lithopolis Rd ',
          city: 'Carroll ',
          state: 'OH',
          zip: '43112',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: 'ca043a3b-8a0c-4813-a4ee-5673db8d8a8d',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: 'M2X043ABFXR1325V8W2SSJGTMC',
          startDate: '2024-06-05',
          chargedThroughDate: '2024-07-05',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChC2q_IhXz-AXm5S2HbHqDZWEJ0L'],
          version: 1,
          createdAt: '2024-06-05T18:31:05-04:00',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 5,
          phases: [
            {
              uid: '075e29c2-ef82-4aea-9f2f-3fbf4e92be97',
              ordinal: 0,
              orderTemplateId: 'ieqEDyxwAqB8Z51P7yEztoOqRQFZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-05',
      square_invoices: [
        {
          id: 'inv:0-ChC2q_IhXz-AXm5S2HbHqDZWEJ0L',
          version: 1,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: '6cdrEuEnoZaSY0JFukJuusiFf4aZY',
          primaryRecipient: {
            customerId: 'M2X043ABFXR1325V8W2SSJGTMC',
            givenName: 'Luke',
            familyName: 'Pruitt',
            emailAddress: 'lukepruitt@outlook.com',
            address: {
              addressLine1: '7610 Lithopolis Road',
              locality: 'Carrol',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43112',
            },
            phoneNumber: '+17404380527',
          },
          paymentRequests: [
            {
              uid: '796a8118-b516-417e-9bbf-e4cbe672621b',
              requestType: 'BALANCE',
              dueDate: '2024-06-05',
              tippingEnabled: false,
              automaticPaymentSource: 'NONE',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 0,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000025',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChC2q_IhXz-AXm5S2HbHqDZWEJ0L',
          nextPaymentAmountMoney: {
            amount: 11000,
            currency: 'USD',
          },
          status: 'UNPAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-05T22:31:10Z',
          updatedAt: '2024-06-10T23:42:18Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: 'ca043a3b-8a0c-4813-a4ee-5673db8d8a8d',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'UNPAID',
      last_invoice_date: '2024-06-05T22:31:10.000Z',
      role: '',
      checkedIn: false,
    },
    {
      _id: '6660a73d56df1543dd8e0a95',
      square_customer_id: 'W8PMC3RP3BY22BKKRQ36NTFNVG',
      display_first_name: 'Zak',
      display_last_name: 'Ralston',
      personal_info: {
        legal_first_name: 'timothy',
        legal_last_name: 'ralston',
        email: 'ralston.45@osu.edu',
        phone: '6149753290',
        date_of_birth: '1984-03-23T00:00:00.000Z',
        address: {
          street: '912 Cobble Hill',
          city: 'Gahanna',
          state: 'OH',
          zip: '43230',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: 'f540a0b7-9cd3-4b1a-8e4a-00c72f846ac0',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: 'W8PMC3RP3BY22BKKRQ36NTFNVG',
          startDate: '2024-06-05',
          chargedThroughDate: '2024-07-05',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChBASTDJPb5fMwV58FFuVyvCEJ0L'],
          version: 1,
          createdAt: '2024-06-05T14:01:52-04:00',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 5,
          phases: [
            {
              uid: 'fd3cf3d6-a56b-4523-b55f-9a41bdc33f3c',
              ordinal: 0,
              orderTemplateId: 'A7Jm8thH9ztkQlldiq9B05imk6VZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-05',
      square_invoices: [
        {
          id: 'inv:0-ChBASTDJPb5fMwV58FFuVyvCEJ0L',
          version: 1,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: '4PlOaAklre6mIodg9RZxBjBcw6cZY',
          primaryRecipient: {
            customerId: 'W8PMC3RP3BY22BKKRQ36NTFNVG',
            givenName: 'Timothy',
            familyName: 'Ralston',
            emailAddress: 'ralston.45@osu.edu',
            address: {
              addressLine1: '912 Cobble hill',
              locality: 'Gahanna',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43230',
            },
            phoneNumber: '+16149753290',
          },
          paymentRequests: [
            {
              uid: '6ccc4b14-d049-4633-8c99-8da234cf0c81',
              requestType: 'BALANCE',
              dueDate: '2024-06-05',
              tippingEnabled: false,
              automaticPaymentSource: 'NONE',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 0,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000023',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChBASTDJPb5fMwV58FFuVyvCEJ0L',
          nextPaymentAmountMoney: {
            amount: 11000,
            currency: 'USD',
          },
          status: 'UNPAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-05T18:01:57Z',
          updatedAt: '2024-06-05T18:01:58Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: 'f540a0b7-9cd3-4b1a-8e4a-00c72f846ac0',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'UNPAID',
      last_invoice_date: '2024-06-05T18:01:57.000Z',
      role: '',
      checkedIn: false,
    },
    {
      _id: '665939690dfd58118f77768c',
      square_customer_id: 'FYF0FY270XZWJKFBD4GGQYCEPG',
      display_first_name: 'Derek',
      display_last_name: 'Ray',
      personal_info: {
        legal_first_name: 'Derek',
        legal_last_name: 'Ray',
        email: 'ray.derek.a@gmail.com',
        phone: '',
        date_of_birth: null,
        address: {
          street: '2753 Hafton Woods Ct',
          city: 'Columbus',
          state: 'OH',
          zip: '43204',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: 'c2e4aa51-a7c5-4188-aedc-31f3ca369745',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: '4PXJP6SBPPZK45DYDXSPYSV6',
          customerId: 'FYF0FY270XZWJKFBD4GGQYCEPG',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChDetCz4D2-p0LDcrc0LXgHyEJ0L'],
          version: 2,
          createdAt: '2024-05-28T14:24:31-04:00',
          cardId: 'ccof:CA4SEGwHmRtQosGPLpwO2meh8QEoAg',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: 'a8ec941e-2a7c-4851-b05d-aebeb71eb9c4',
              ordinal: 0,
              orderTemplateId: 'k36AISSUZxJT2MdM1zRMInUoU8FZY',
              planPhaseUid: 'JTV7FUPLTPQ6D7WVLRDWAFMB',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChDetCz4D2-p0LDcrc0LXgHyEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'iozUgFtX6FqL1Ux6LW02x1Sf3ETZY',
          primaryRecipient: {
            customerId: 'FYF0FY270XZWJKFBD4GGQYCEPG',
            givenName: 'Derek',
            familyName: 'Ray',
            emailAddress: 'ray.derek.a@gmail.com',
            address: {
              addressLine1: '2753 Hafton Woods Ct',
              locality: 'Columbus',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43204',
            },
          },
          paymentRequests: [
            {
              uid: '2d7e51e2-f977-42aa-9f00-28ab3854723e',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SEGwHmRtQosGPLpwO2meh8QEoAg',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000018',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChDetCz4D2-p0LDcrc0LXgHyEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T18:24:36Z',
          updatedAt: '2024-06-01T18:24:39Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: 'c2e4aa51-a7c5-4188-aedc-31f3ca369745',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T18:24:36.000Z',
      role: 'coach',
      checkedIn: false,
    },
    {
      _id: '6653aa042c69de37c98e1974',
      square_customer_id: 'B0VYHQ26HC9HZ6860CVBKVYVM4',
      display_first_name: 'Maria',
      display_last_name: 'Rieske',
      personal_info: {
        legal_first_name: 'Maria',
        legal_last_name: 'Rieske',
        email: 'maria.rieske@gmail.com',
        phone: '17408164766',
        date_of_birth: '1983-12-25T00:00:00.000Z',
        address: {
          street: '5209 Fall Water Ct',
          city: 'Columbus',
          state: 'OH',
          zip: '43220',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: 'b5462d11-415f-46be-9450-29c7e9bf77b8',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: 'B0VYHQ26HC9HZ6860CVBKVYVM4',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChCcUqOYo8o9A_egcf6WWziuEJ0L'],
          version: 2,
          createdAt: '2024-05-28T13:51:59-04:00',
          cardId: 'ccof:CA4SEHwyS7BosbJmMEyl_W_V8KwoAQ',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: '1f0a4cf3-90d1-4a9a-9727-d27346092354',
              ordinal: 0,
              orderTemplateId: 'g5eviiTVSlPHgBptmXLv9xcUFxAZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChCcUqOYo8o9A_egcf6WWziuEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: '6ExLd1BgH0ift0FJCSPS14oNQvRZY',
          primaryRecipient: {
            customerId: 'B0VYHQ26HC9HZ6860CVBKVYVM4',
            givenName: 'Maria',
            familyName: 'Rieske',
            emailAddress: 'maria.rieske@gmail.com',
            address: {
              addressLine1: '5209 Fall Water Ct',
              locality: 'Columbus',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43220',
            },
            phoneNumber: '+17408164766',
          },
          paymentRequests: [
            {
              uid: '5856bd95-3ae4-4ac4-a1ab-0b98511f52bd',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SEHwyS7BosbJmMEyl_W_V8KwoAQ',
              computedAmountMoney: {
                amount: 6500,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 6500,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000010',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChCcUqOYo8o9A_egcf6WWziuEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T16:51:54Z',
          updatedAt: '2024-06-01T16:51:57Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: 'b5462d11-415f-46be-9450-29c7e9bf77b8',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T16:51:54.000Z',
      role: 'coachasst',
      checkedIn: false,
    },
    {
      _id: '6656114f0dfd58118f3f717e',
      square_customer_id: '6KD0B2A8AQ0PK982V45RE3KE8R',
      display_first_name: 'Sydney',
      display_last_name: 'Schulte',
      personal_info: {
        legal_first_name: 'Sydney',
        legal_last_name: 'Schulte',
        email: 's.schulte12@gmail.com',
        phone: '5158646658',
        date_of_birth: '1994-12-02T00:00:00.000Z',
        address: {
          street: '2660 Deming Ave',
          city: 'Columbus',
          state: 'OH',
          zip: '43202',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '39ef1581-e475-4c22-b720-61413de3c1be',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: '6KD0B2A8AQ0PK982V45RE3KE8R',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChB8M0pMq-RLXLqbvP58dBQjEJ0L'],
          version: 2,
          createdAt: '2024-05-28T14:02:56-04:00',
          cardId: 'ccof:CA4SEJCyaZq8QCQePJKfdrSDL7QoAg',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: 'c37f6c5b-ee48-406a-b7e9-2ff444e2dcfc',
              ordinal: 0,
              orderTemplateId: 'ErQEseY1hdqS0Yqr8zbaMFBYqTEZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChB8M0pMq-RLXLqbvP58dBQjEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'mKB1oZjCKEHOdqEtQWxrP4VmXkBZY',
          primaryRecipient: {
            customerId: '6KD0B2A8AQ0PK982V45RE3KE8R',
            givenName: 'Sydney',
            familyName: 'Schulte',
            emailAddress: 's.schulte12@gmail.com',
            address: {
              addressLine1: '2660 Deming Ave',
              locality: '2660 Deming Ave',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43202',
            },
            phoneNumber: '+15158646658',
          },
          paymentRequests: [
            {
              uid: '166dff79-2f6b-4be4-b358-2fa73f2531e6',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'CARD_ON_FILE',
              cardId: 'ccof:CA4SEJCyaZq8QCQePJKfdrSDL7QoAg',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000009',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChB8M0pMq-RLXLqbvP58dBQjEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T16:41:38Z',
          updatedAt: '2024-06-01T16:41:40Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: '39ef1581-e475-4c22-b720-61413de3c1be',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T16:41:38.000Z',
      role: 'student',
      checkedIn: false,
    },
    {
      _id: '6660e6be039180368c227f81',
      square_customer_id: 'MJ644FJ4WT0JZEGYJZW0KQ6FB8',
      display_first_name: 'Benny',
      display_last_name: 'Sharpe',
      personal_info: {
        legal_first_name: 'Benny ',
        legal_last_name: 'Sharpe',
        email: 'BenLSharpe@outlook.com',
        phone: '6146389374',
        date_of_birth: '1994-02-12T00:00:00.000Z',
        address: {
          street: '362 Baroness Way',
          city: 'Gahanna ',
          state: 'OH',
          zip: '43230',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: 'f27102d9-aec4-47ee-afda-8e3645dfa1df',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: 'MJ644FJ4WT0JZEGYJZW0KQ6FB8',
          startDate: '2024-06-05',
          chargedThroughDate: '2024-07-05',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChC3n8zrT4EOe8nm9xpxL0aQEJ0L'],
          version: 1,
          createdAt: '2024-06-05T18:34:17-04:00',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 5,
          phases: [
            {
              uid: '484823a4-bd25-4ad2-8d3b-828db1b34ed0',
              ordinal: 0,
              orderTemplateId: 'acNH3MFmDlMNMOR63p5hPRBGdqaZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-05',
      square_invoices: [
        {
          id: 'inv:0-ChC3n8zrT4EOe8nm9xpxL0aQEJ0L',
          version: 1,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'uybjTOO7LfxpxQk5gmZFBmInS3OZY',
          primaryRecipient: {
            customerId: 'MJ644FJ4WT0JZEGYJZW0KQ6FB8',
            givenName: 'Benny',
            familyName: 'Sharpe',
            emailAddress: 'benlsharpe@outlook.com',
            address: {
              addressLine1: '362 Baroness Way',
              locality: 'Gahanna',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43230',
            },
            phoneNumber: '+16146389374',
          },
          paymentRequests: [
            {
              uid: '8cb94bc4-39af-4645-8069-7f7fcbe428f7',
              requestType: 'BALANCE',
              dueDate: '2024-06-05',
              tippingEnabled: false,
              automaticPaymentSource: 'NONE',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 0,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000026',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChC3n8zrT4EOe8nm9xpxL0aQEJ0L',
          nextPaymentAmountMoney: {
            amount: 11000,
            currency: 'USD',
          },
          status: 'UNPAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-05T22:34:23Z',
          updatedAt: '2024-06-10T23:42:07Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: 'f27102d9-aec4-47ee-afda-8e3645dfa1df',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'UNPAID',
      last_invoice_date: '2024-06-05T22:34:23.000Z',
      role: '',
      checkedIn: false,
    },
    {
      _id: '6653a9ae2c69de37c98e1970',
      square_customer_id: '64XX86BJ0DA79MDDWF54MW708R',
      display_first_name: 'Jeremiah',
      display_last_name: 'Sprague',
      personal_info: {
        legal_first_name: 'Jeremiah',
        legal_last_name: 'Sprague',
        email: 'sprague89@yahoo.com',
        phone: '614-551-4680',
        date_of_birth: '1989-06-16T00:00:00.000Z',
        address: {
          street: '1860 Northwest Blvd Apt. C',
          city: 'Columbus',
          state: 'OH',
          zip: '43212',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '6a8a0981-6f75-465f-9fe2-d67d374ccc1a',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: '64XX86BJ0DA79MDDWF54MW708R',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChDlRoMsRp9D2zcc9S9bepeFEJ0L'],
          version: 2,
          createdAt: '2024-05-28T13:41:58-04:00',
          cardId: 'ccof:CA4SEAhFZw1povDttod5AcVoJN4oAg',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: 'b7c2eb5d-1999-4e99-a1e0-af63830c8086',
              ordinal: 0,
              orderTemplateId: 'IXbTTib4d8gT1bQT2H3Uh2Xt7UPZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChDlRoMsRp9D2zcc9S9bepeFEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'sDyEfnWUy5kkO9J00emKH5jOgEOZY',
          primaryRecipient: {
            customerId: '64XX86BJ0DA79MDDWF54MW708R',
            givenName: 'Jeremiah',
            familyName: 'Sprague',
            emailAddress: 'sprague89@yahoo.com',
            address: {
              addressLine1: '1860 Northwest Blvd',
              addressLine2: 'Apt. C',
              locality: 'Columbus',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43212',
            },
            phoneNumber: '+16145514680',
          },
          paymentRequests: [
            {
              uid: '1c9d7a9d-e143-4a38-800d-402fc62f45b0',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'NONE',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000014',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChDlRoMsRp9D2zcc9S9bepeFEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T17:42:03Z',
          updatedAt: '2024-06-03T19:00:11Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: '6a8a0981-6f75-465f-9fe2-d67d374ccc1a',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-01T17:42:03.000Z',
      role: 'student',
      checkedIn: false,
    },
    {
      _id: '665637960dfd58118f421939',
      square_customer_id: 'PTTKF5JQT7157M44GPHG4KXTSW',
      display_first_name: 'Nate',
      display_last_name: 'Wallace',
      personal_info: {
        legal_first_name: 'Nathan',
        legal_last_name: 'Wallace',
        email: 'rpdinosaur@gmail.com',
        phone: '(740) 475-7285',
        date_of_birth: null,
        address: {
          street: '',
          city: '',
          state: '',
          zip: '',
          country: '',
        },
      },
      square_subscriptions: [
        {
          id: 'aec2ac15-d408-4dbf-986e-142e938d4aba',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: '4PXJP6SBPPZK45DYDXSPYSV6',
          customerId: 'PTTKF5JQT7157M44GPHG4KXTSW',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChC-XfRBcJUKbsXkD8QHRjc9EJ0L'],
          version: 1,
          createdAt: '2024-05-28T13:28:11-04:00',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: '5a57b2a2-4e79-4772-9666-b43732744be3',
              ordinal: 0,
              orderTemplateId: 'WkOXSBBLlyMpNGboDpDyYYJ7hM9YY',
              planPhaseUid: 'JTV7FUPLTPQ6D7WVLRDWAFMB',
            },
          ],
        },
      ],
      subscription_status: 'ACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChC-XfRBcJUKbsXkD8QHRjc9EJ0L',
          version: 1,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'K2QG4PTBtjyBZoGuraU9EwSiZ8EZY',
          primaryRecipient: {
            customerId: 'PTTKF5JQT7157M44GPHG4KXTSW',
            givenName: 'Nathan',
            familyName: 'Wallace',
            emailAddress: 'rpdinosaur@gmail.com',
            phoneNumber: '+17404757285',
          },
          paymentRequests: [
            {
              uid: 'f82f551e-5158-42ab-b359-b4d19e18930a',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'NONE',
              computedAmountMoney: {
                amount: 20000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 0,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000011',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChC-XfRBcJUKbsXkD8QHRjc9EJ0L',
          nextPaymentAmountMoney: {
            amount: 20000,
            currency: 'USD',
          },
          status: 'UNPAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-01T17:28:17Z',
          updatedAt: '2024-06-01T17:28:19Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: 'aec2ac15-d408-4dbf-986e-142e938d4aba',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'UNPAID',
      last_invoice_date: '2024-06-01T17:28:17.000Z',
      role: 'admin',
      checkedIn: false,
    },
    {
      _id: '66562f3d0dfd58118f418572',
      square_customer_id: '3TMX4KVYQC4RESC25KQJX3TJDW',
      display_first_name: 'Frank',
      display_last_name: 'Zamary',
      personal_info: {
        legal_first_name: 'Frank',
        legal_last_name: 'Zamary',
        email: 'fzamary53@gmail.com',
        phone: '3307700852',
        date_of_birth: '1989-05-15T00:00:00.000Z',
        address: {
          street: '8634 Greengate Blvd',
          city: 'Canal Winchester',
          state: 'OH',
          zip: '43110',
          country: 'United States',
        },
      },
      square_subscriptions: [],
      subscription_status: 'INACTIVE',
      subscription_start_date: null,
      square_invoices: [],
      last_invoice_status: 'NO_INVOICES',
      last_invoice_date: null,
      role: 'coach',
      checkedIn: false,
    },
    {
      _id: '665baca60dfd58118fa2ef17',
      square_customer_id: 'X5YECR28BVKXYSZ8ZETNP0D7BW',
      display_first_name: 'Branden',
      display_last_name: 'Zipplinger',
      personal_info: {
        legal_first_name: 'Branden',
        legal_last_name: 'Zipplinger',
        email: 'brandenzipplinger@gmail.com',
        phone: '6142548881',
        date_of_birth: '1993-03-31T00:00:00.000Z',
        address: {
          street: '598 Brockhampton Ln, Apt 108',
          city: 'Westerville',
          state: 'OH',
          zip: '43082',
          country: 'United States',
        },
      },
      square_subscriptions: [
        {
          id: '6e7c9aaf-3f10-4023-b3ca-685462f59595',
          locationId: 'L5Y0YBJYGNS5F',
          planVariationId: 'L5ORJJEZ2SO5YT4CWDOFROTW',
          customerId: 'X5YECR28BVKXYSZ8ZETNP0D7BW',
          startDate: '2024-06-01',
          chargedThroughDate: '2024-07-01',
          status: 'ACTIVE',
          invoiceIds: ['inv:0-ChCzXccCQZ-3GA2Wxzr-gg2SEJ0L'],
          version: 2,
          createdAt: '2024-06-01T19:22:59-04:00',
          cardId: 'ccof:CA4SELsN6Uu-BGGcKXrUABKeEIQoAg',
          timezone: 'America/New_York',
          source: {
            name: 'Square Subscriptions Dashboard Web',
          },
          monthlyBillingAnchorDate: 1,
          phases: [
            {
              uid: '68863c9e-d3d3-4c43-a7f2-258b2bce6202',
              ordinal: 0,
              orderTemplateId: 'WeZ2VmykcZ2Gq5JA6HJHvV2H1CFZY',
              planPhaseUid: 'FPKM5YOWWOGUID3IEFBFU6Z3',
            },
          ],
        },
      ],
      subscription_status: 'INACTIVE',
      subscription_start_date: '2024-06-01',
      square_invoices: [
        {
          id: 'inv:0-ChCzXccCQZ-3GA2Wxzr-gg2SEJ0L',
          version: 2,
          locationId: 'L5Y0YBJYGNS5F',
          orderId: 'SmELCi1gtekEhGmSTjkgWMRUHUFZY',
          primaryRecipient: {
            customerId: 'X5YECR28BVKXYSZ8ZETNP0D7BW',
            givenName: 'Branden',
            familyName: 'Zipplinger',
            emailAddress: 'brandenzipplinger@gmail.com',
            address: {
              addressLine1: '598 Brockhampton Ln, Apt 108',
              locality: 'Westerville',
              administrativeDistrictLevel1: 'OH',
              postalCode: '43082',
            },
            phoneNumber: '+16142548881',
          },
          paymentRequests: [
            {
              uid: '36ca55bd-ec83-488b-8e12-04edaec3799c',
              requestType: 'BALANCE',
              dueDate: '2024-06-01',
              tippingEnabled: false,
              automaticPaymentSource: 'NONE',
              computedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
              totalCompletedAmountMoney: {
                amount: 11000,
                currency: 'USD',
              },
            },
          ],
          deliveryMethod: 'EMAIL',
          invoiceNumber: '000020',
          title: 'Monthly subscription',
          publicUrl: 'https://squareup.com/pay-invoice/inv:0-ChCzXccCQZ-3GA2Wxzr-gg2SEJ0L',
          status: 'PAID',
          timezone: 'America/New_York',
          createdAt: '2024-06-02T00:32:13Z',
          updatedAt: '2024-06-08T14:40:45Z',
          acceptedPaymentMethods: {
            card: true,
            squareGiftCard: false,
            bankAccount: false,
            buyNowPayLater: false,
            cashAppPay: true,
          },
          subscriptionId: '6e7c9aaf-3f10-4023-b3ca-685462f59595',
          storePaymentMethodEnabled: true,
        },
      ],
      last_invoice_status: 'PAID',
      last_invoice_date: '2024-06-02T00:32:13.000Z',
      role: 'student',
      checkedIn: false,
      is_waiver_on_file: true,
      notes: "hi"
    },
  ],
  attendanceAggregate:  [
    {
      "_id": "2024-05-26",
      "count": 1
    },
    {
      "_id": "2024-06-01",
      "count": 16
    },
    {
      "_id": "2024-06-03",
      "count": 5
    },
    {
      "_id": "2024-06-04",
      "count": 2
    },
    {
      "_id": "2024-06-05",
      "count": 13
    },
    {
      "_id": "2024-06-06",
      "count": 8
    },
    {
      "_id": "2024-06-10",
      "count": 3
    },
    {
      "_id": "2024-06-12",
      "count": 10
    },
    {
      "_id": "2024-06-13",
      "count": 8
    },
    {
      "_id": "2024-06-15",
      "count": 11
    },
    {
      "_id": "2024-06-17",
      "count": 4
    },
    {
      "_id": "2024-06-19",
      "count": 12
    },
    {
      "_id": "2024-06-20",
      "count": 3
    },
    {
      "_id": "2024-06-22",
      "count": 13
    },
    {
      "_id": "2024-06-24",
      "count": 5
    },
    {
      "_id": "2024-06-26",
      "count": 9
    },
    {
      "_id": "2024-06-27",
      "count": 6
    },
    {
      "_id": "2024-06-29",
      "count": 15
    },
    {
      "_id": "2024-07-01",
      "count": 5
    },
    {
      "_id": "2024-07-03",
      "count": 7
    },
    {
      "_id": "2024-07-06",
      "count": 15
    },
    {
      "_id": "2024-07-08",
      "count": 7
    },
    {
      "_id": "2024-07-10",
      "count": 13
    },
    {
      "_id": "2024-07-11",
      "count": 6
    },
    {
      "_id": "2024-07-13",
      "count": 9
    },
    {
      "_id": "2024-07-15",
      "count": 7
    },
    {
      "_id": "2024-07-17",
      "count": 12
    },
    {
      "_id": "2024-07-18",
      "count": 1
    },
    {
      "_id": "2024-07-22",
      "count": 5
    },
    {
      "_id": "2024-07-24",
      "count": 12
    },
    {
      "_id": "2024-07-25",
      "count": 3
    },
    {
      "_id": "2024-07-27",
      "count": 14
    },
    {
      "_id": "2024-07-29",
      "count": 7
    },
    {
      "_id": "2024-07-31",
      "count": 13
    },
    {
      "_id": "2024-08-01",
      "count": 4
    },
    {
      "_id": "2024-08-03",
      "count": 14
    },
    {
      "_id": "2024-08-05",
      "count": 7
    },
    {
      "_id": "2024-08-07",
      "count": 18
    },
    {
      "_id": "2024-08-12",
      "count": 5
    },
    {
      "_id": "2024-08-14",
      "count": 21
    },
    {
      "_id": "2024-08-15",
      "count": 8
    },
    {
      "_id": "2024-08-17",
      "count": 8
    },
    {
      "_id": "2024-08-19",
      "count": 10
    },
    {
      "_id": "2024-08-21",
      "count": 16
    },
    {
      "_id": "2024-08-22",
      "count": 3
    },
    {
      "_id": "2024-08-24",
      "count": 3
    },
    {
      "_id": "2024-08-26",
      "count": 4
    },
    {
      "_id": "2024-08-28",
      "count": 12
    },
    {
      "_id": "2024-08-29",
      "count": 4
    },
    {
      "_id": "2024-09-04",
      "count": 15
    },
    {
      "_id": "2024-09-05",
      "count": 7
    },
    {
      "_id": "2024-09-07",
      "count": 14
    },
    {
      "_id": "2024-09-09",
      "count": 7
    },
    {
      "_id": "2024-09-11",
      "count": 12
    },
    {
      "_id": "2024-09-12",
      "count": 2
    },
    {
      "_id": "2024-09-13",
      "count": 1
    },
    {
      "_id": "2024-09-14",
      "count": 10
    },
    {
      "_id": "2023-09-01",
      "count": 12
    },
    {
      "_id": "2023-09-03",
      "count": 8
    },
    {
      "_id": "2023-09-05",
      "count": 7
    },
    {
      "_id": "2023-09-07",
      "count": 9
    },
    {
      "_id": "2023-09-10",
      "count": 5
    },
    {
      "_id": "2023-09-12",
      "count": 14
    },
    {
      "_id": "2023-09-14",
      "count": 11
    },
    {
      "_id": "2023-09-17",
      "count": 9
    },
    {
      "_id": "2023-09-20",
      "count": 13
    },
    {
      "_id": "2023-09-23",
      "count": 7
    },
    {
      "_id": "2023-09-26",
      "count": 6
    },
    {
      "_id": "2023-09-28",
      "count": 10
    },
    {
      "_id": "2023-10-02",
      "count": 12
    },
    {
      "_id": "2023-10-05",
      "count": 5
    },
    {
      "_id": "2023-10-08",
      "count": 11
    },
    {
      "_id": "2023-10-12",
      "count": 8
    },
    {
      "_id": "2023-10-15",
      "count": 7
    },
    {
      "_id": "2023-10-18",
      "count": 15
    },
    {
      "_id": "2023-10-22",
      "count": 6
    },
    {
      "_id": "2023-10-26",
      "count": 13
    },
    {
      "_id": "2023-10-29",
      "count": 8
    },
    {
      "_id": "2023-11-01",
      "count": 9
    },
    {
      "_id": "2023-11-05",
      "count": 14
    },
    {
      "_id": "2023-11-10",
      "count": 12
    },
    {
      "_id": "2023-11-13",
      "count": 6
    },
    {
      "_id": "2023-11-16",
      "count": 7
    },
    {
      "_id": "2023-11-19",
      "count": 9
    },
    {
      "_id": "2023-11-23",
      "count": 10
    },
    {
      "_id": "2023-11-26",
      "count": 8
    },
    {
      "_id": "2023-12-01",
      "count": 13
    },
    {
      "_id": "2023-12-05",
      "count": 11
    },
    {
      "_id": "2023-12-10",
      "count": 7
    },
    {
      "_id": "2023-12-14",
      "count": 6
    },
    {
      "_id": "2023-12-18",
      "count": 8
    },
    {
      "_id": "2023-12-21",
      "count": 15
    },
    {
      "_id": "2023-12-24",
      "count": 9
    },
    {
      "_id": "2023-12-29",
      "count": 10
    },
    {
      "_id": "2024-01-02",
      "count": 12
    },
    {
      "_id": "2024-01-06",
      "count": 14
    },
    {
      "_id": "2024-01-09",
      "count": 6
    },
    {
      "_id": "2024-01-12",
      "count": 8
    },
    {
      "_id": "2024-01-16",
      "count": 13
    },
    {
      "_id": "2024-01-20",
      "count": 7
    },
    {
      "_id": "2024-01-23",
      "count": 5
    },
    {
      "_id": "2024-01-28",
      "count": 9
    },
    {
      "_id": "2024-02-01",
      "count": 11
    },
    {
      "_id": "2024-02-05",
      "count": 14
    },
    {
      "_id": "2024-02-08",
      "count": 6
    },
    {
      "_id": "2024-02-12",
      "count": 12
    },
    {
      "_id": "2024-02-17",
      "count": 9
    },
    {
      "_id": "2024-02-20",
      "count": 7
    },
    {
      "_id": "2024-02-24",
      "count": 8
    },
    {
      "_id": "2024-02-28",
      "count": 5
    },
    {
      "_id": "2024-03-02",
      "count": 10
    },
    {
      "_id": "2024-03-06",
      "count": 15
    },
    {
      "_id": "2024-03-10",
      "count": 13
    },
    {
      "_id": "2024-03-14",
      "count": 7
    },
    {
      "_id": "2024-03-17",
      "count": 11
    },
    {
      "_id": "2024-03-20",
      "count": 9
    },
    {
      "_id": "2024-03-23",
      "count": 14
    },
    {
      "_id": "2024-03-27",
      "count": 8
    },
    {
      "_id": "2024-04-01",
      "count": 12
    },
    {
      "_id": "2024-04-05",
      "count": 9
    },
    {
      "_id": "2024-04-08",
      "count": 11
    },
    {
      "_id": "2024-04-12",
      "count": 6
    },
    {
      "_id": "2024-04-16",
      "count": 14
    },
    {
      "_id": "2024-04-20",
      "count": 13
    },
    {
      "_id": "2024-04-23",
      "count": 10
    },
    {
      "_id": "2024-04-28",
      "count": 15
    },
    {
      "_id": "2024-05-01",
      "count": 12
    },
    {
      "_id": "2024-05-04",
      "count": 7
    },
    {
      "_id": "2024-05-09",
      "count": 9
    },
    {
      "_id": "2024-05-12",
      "count": 14
    },
    {
      "_id": "2024-05-16",
      "count": 8
    },
    {
      "_id": "2024-05-20",
      "count": 11
    },
    {
      "_id": "2024-05-23",
      "count": 6
    }
  ],
};
